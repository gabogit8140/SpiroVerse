
import { PathPoint } from './geometry';

// Helper to convert text to a set of points using canvas pixel data
export const generateTextPath = (text: string, scale: number = 1): PathPoint[] => {
    // Basic validation
    if (!text || text.trim() === '') return [];

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return [];

    const fontSize = 120; 
    // Use bold and system fonts fallback for maximum compatibility
    const font = `bold ${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.font = font;
    
    const metrics = ctx.measureText(text);
    // Estimate width if measureText fails or returns 0 (safety fallback)
    const estimatedWidth = text.length * fontSize * 0.7;
    const textWidth = Math.max(metrics.width, estimatedWidth);
    
    // Generous padding to prevent clipping
    const width = Math.ceil(textWidth + 200); 
    const height = Math.ceil(fontSize + 150);
    
    canvas.width = width;
    canvas.height = height;
    
    // IMPORTANT: Context properties reset on resize, so we must set them again
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw text
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = 'white';
    ctx.fillText(text, width / 2, height / 2);
    
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const rawPoints: {x: number, y: number, penUp?: boolean}[] = [];
    
    // Reduce density step for better resolution and detection of gaps
    const density = 2; 
    const finalScale = scale * 1.5;

    for (let y = 0; y < height; y += density) {
        for (let x = 0; x < width; x += density) {
            const index = (y * width + x) * 4;
            // Check Red channel for white text (> 50 is enough for antialiased edges)
            if (data[index] > 50) {
                rawPoints.push({
                    x: (x - width/2) * finalScale,
                    y: (y - height/2) * finalScale
                });
            }
        }
    }
    
    // Fallback if no points detected (e.g. font loading failure)
    if (rawPoints.length === 0) {
        const w = 50;
        // Return multiple strokes to allow modulation even on fallback
        return [
           {x: -w, y: -w}, {x: -w/2, y: -w, penUp: true},
           {x: 0, y: -w}, {x: w/2, y: -w, penUp: true},
           {x: w, y: -w}, {x: w, y: w}
        ];
    }

    // Optimization: If too many points, decimate intelligently
    // Increased to 8000 to prevent shattering of small text phrases
    const maxPoints = 8000;
    let pointsToProcess = rawPoints;
    
    if (rawPoints.length > maxPoints) {
        const step = Math.floor(rawPoints.length / maxPoints);
        if (step > 1) {
            pointsToProcess = [];
            for(let i=0; i<rawPoints.length; i+=step) {
                pointsToProcess.push(rawPoints[i]);
            }
        }
    }

    // Nearest Neighbor Path Sorting to create a continuous drawing path
    const sortedPoints: PathPoint[] = [];
    
    if (pointsToProcess.length > 0) {
        // Start from top-left-most point usually, or just the first in scanned order
        let current = pointsToProcess[0];
        current.penUp = true; // First point is always a start
        
        // Use swap-remove for O(1) deletion from array to speed up the loop
        // We will maintain the 'active' set in the buffer
        pointsToProcess[0] = pointsToProcess[pointsToProcess.length-1];
        pointsToProcess.pop();
        
        sortedPoints.push(current);
        
        while (pointsToProcess.length > 0) {
            let nearestIdx = -1;
            let minDistSq = Infinity;
            
            // Limit lookahead to prevent O(N^2) on large sets becoming too slow.
            const lookahead = Math.min(pointsToProcess.length, 1000); 
            
            for(let i=0; i < lookahead; i++) {
                const p = pointsToProcess[i];
                const dx = p.x - current.x;
                const dy = p.y - current.y;
                const dSq = dx*dx + dy*dy;
                
                if (dSq < minDistSq) {
                    minDistSq = dSq;
                    nearestIdx = i;
                    // Optimization: threshold - if point is very close (connected pixel), take it immediately
                    if (dSq < (density * finalScale * 3)**2) break;
                }
            }
            
            if (nearestIdx !== -1) {
                current = pointsToProcess[nearestIdx];
                
                // CRITICAL FIX: Distance Threshold for Pen Up
                // Set to 1.5 to allow diagonal connections (sqrt(2) approx 1.41) within letters
                // while still splitting distinct letters which have larger gaps.
                const jumpThreshold = (density * finalScale * 1.5)**2; 
                
                if (minDistSq > jumpThreshold) {
                    current.penUp = true;
                }

                pointsToProcess[nearestIdx] = pointsToProcess[pointsToProcess.length-1];
                pointsToProcess.pop();
                sortedPoints.push(current);
            } else {
                // If for some reason we didn't find a nearest (shouldn't happen with lookahead logic above unless empty)
                // Just take the next one
                current = pointsToProcess[0];
                current.penUp = true; // Force Pen Up
                pointsToProcess[0] = pointsToProcess[pointsToProcess.length-1];
                pointsToProcess.pop();
                sortedPoints.push(current);
            }
        }
    }
    
    return sortedPoints;
};
