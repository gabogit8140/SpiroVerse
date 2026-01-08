
import React, { useRef, useEffect } from 'react';
import { SpiroConfig, GeneratorMode, Complex, SpiroType } from '../types';
import { PathPoint, getPointAt } from '../utils/geometry';
import { AnimationState, drawFourierFrame, drawTextFrame, drawSpiroFrame } from '../utils/drawStrategies2D';

interface UseCanvas2DAnimationProps {
    traceRef: React.RefObject<HTMLCanvasElement | null>;
    overlayRef: React.RefObject<HTMLCanvasElement | null>;
    config: SpiroConfig;
    width: number;
    height: number;
    isPlaying: boolean;
    fourierData: Complex[];
    textPath: PathPoint[];
    statorPath: PathPoint[];
    rotorPath: PathPoint[];
    maxSpiroRadius: number;
    drawing: boolean;
    userPath: {x: number, y: number}[];
    fourierPath: {x: number, y: number}[];
    onProgress?: (progress: number) => void;
    onStop?: () => void;
}

export const useCanvas2DAnimation = ({
    traceRef, overlayRef, config, width, height, isPlaying, fourierData,
    textPath, statorPath, rotorPath, maxSpiroRadius, drawing, userPath, fourierPath,
    onProgress, onStop
}: UseCanvas2DAnimationProps) => {

    const animationRef = useRef<number>(0);
    const lastProgressReportRef = useRef(-1);
    
    // Mutable animation state
    const stateRef = useRef<AnimationState>({
        lastX: 0,
        lastY: 0,
        currentDist: 0,
        pointsAccumulator: 0,
        textPathIndex: 0,
        time: 0
    });

    // Reset logic
    useEffect(() => {
        stateRef.current = {
            lastX: 0,
            lastY: 0,
            currentDist: 0,
            pointsAccumulator: 0,
            textPathIndex: 0,
            time: 0
        };

        // Initialize Start Positions
        if (config.generatorMode === GeneratorMode.Spirograph && statorPath.length > 0) {
            const s = getPointAt(statorPath, 0);
            const r = getPointAt(rotorPath, 0);
            const rot = config.type === SpiroType.Hypotrochoid ? (s.angle - r.angle) : (s.angle + Math.PI - r.angle);
            const cx = s.x - (r.x * Math.cos(rot) - r.y * Math.sin(rot));
            const cy = s.y - (r.x * Math.sin(rot) + r.y * Math.cos(rot));
            stateRef.current.lastX = cx + config.penOffset * Math.cos(rot);
            stateRef.current.lastY = cy + config.penOffset * Math.sin(rot);
        } else if (config.generatorMode === GeneratorMode.Text && textPath.length > 0) {
            stateRef.current.lastX = textPath[0].x;
            stateRef.current.lastY = textPath[0].y;
        }

        // Clear Canvas on reset
        const ctx = traceRef.current?.getContext('2d');
        if (ctx && width > 0) {
            const dpr = window.devicePixelRatio || 1;
            ctx.save();
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }
        if (onProgress) onProgress(0);

    }, [
        config.generatorMode, 
        config.type, 
        config.textPhrase, 
        config.statorShape, 
        config.rotorShape, 
        config.rotations, 
        config.penOffset, // Added penOffset to trigger reset
        statorPath, 
        rotorPath, 
        textPath, 
        width, 
        height
    ]);

    // Animation Loop
    useEffect(() => {
        const traceCanvas = traceRef.current;
        const overlayCanvas = overlayRef.current;
        if (!traceCanvas || !overlayCanvas || width <= 0 || height <= 0) return;

        const ctx = traceCanvas.getContext('2d');
        const overlayCtx = overlayCanvas.getContext('2d');
        if (!ctx || !overlayCtx) return;

        const dpr = window.devicePixelRatio || 1;
        
        // Setup scaling
        traceCanvas.width = width * dpr; traceCanvas.height = height * dpr;
        overlayCanvas.width = width * dpr; overlayCanvas.height = height * dpr;
        
        const zoomScale = (Math.min(width, height) / 2) / (maxSpiroRadius);
        
        const applyTransform = () => {
             const tX = (width * dpr) / 2;
             const tY = (height * dpr) / 2;
             ctx.setTransform(dpr, 0, 0, dpr, tX, tY);
             ctx.scale(zoomScale, zoomScale);
             overlayCtx.setTransform(dpr, 0, 0, dpr, tX, tY);
             overlayCtx.scale(zoomScale, zoomScale);
             
             // Initial Clear
             ctx.save();
             ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
             ctx.fillStyle = '#0f172a';
             ctx.fillRect(0, 0, width, height);
             ctx.restore();
             
             ctx.lineWidth = config.lineWidth / zoomScale;
             ctx.lineCap = 'round';
             ctx.lineJoin = 'round';
             overlayCtx.lineWidth = 1; 
        };
        applyTransform();

        const reportProgress = (pct: number) => {
            if (onProgress) {
                const intPct = Math.floor(pct);
                if (intPct !== lastProgressReportRef.current) {
                    lastProgressReportRef.current = intPct;
                    onProgress(Math.min(100, Math.max(0, intPct)));
                }
            }
        };

        const render = () => {
            if (!isPlaying && !drawing) {
                animationRef.current = requestAnimationFrame(render);
                return;
            }

            const context = { ctx, overlayCtx, width, height, dpr, zoomScale };
            let shouldContinue = true;

            if (config.generatorMode === GeneratorMode.Fourier) {
                shouldContinue = drawFourierFrame(context, config, stateRef.current, fourierData, fourierPath, drawing, userPath, reportProgress, () => onStop?.());
            } 
            else if (config.generatorMode === GeneratorMode.Text) {
                shouldContinue = drawTextFrame(context, config, stateRef.current, textPath, reportProgress, () => onStop?.());
            }
            else {
                const statorLength = statorPath[statorPath.length-1]?.dist || 1;
                const maxDist = statorLength * config.rotations;
                shouldContinue = drawSpiroFrame(context, config, stateRef.current, statorPath, rotorPath, maxDist, reportProgress, () => onStop?.());
            }

            if (shouldContinue) {
                animationRef.current = requestAnimationFrame(render);
            }
        };

        animationRef.current = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationRef.current);

    }, [config, width, height, isPlaying, drawing, userPath, fourierData, textPath, statorPath, rotorPath, maxSpiroRadius]);
};
