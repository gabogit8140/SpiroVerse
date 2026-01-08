
import { SpiroConfig, ColorMode, SpiroType, Complex } from '../types';
import { getPointAt, PathPoint } from './geometry';
import { renderGuides, renderPen, renderUserPath, renderFourierEpicycles } from './render2D';

export interface DrawContext {
    ctx: CanvasRenderingContext2D;
    overlayCtx: CanvasRenderingContext2D;
    width: number;
    height: number;
    zoomScale: number;
    dpr: number;
}

export interface AnimationState {
    lastX: number;
    lastY: number;
    currentDist: number;
    pointsAccumulator: number;
    textPathIndex: number;
    time: number;
}

export const drawFourierFrame = (
    ctx: DrawContext,
    config: SpiroConfig,
    state: AnimationState,
    fourierData: Complex[],
    fourierPath: {x: number, y: number}[],
    drawing: boolean,
    userPath: {x: number, y: number}[],
    onProgress: (val: number) => void,
    onStop: () => void
) => {
    const { ctx: c, overlayCtx, width, height, dpr, zoomScale } = ctx;
    
    // Clear Overlay
    overlayCtx.save();
    overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    overlayCtx.clearRect(0, 0, width, height);
    overlayCtx.restore();

    if (drawing) {
         c.save();
         c.setTransform(dpr, 0, 0, dpr, (width * dpr) / 2, (height * dpr) / 2);
         renderUserPath(c, userPath);
         c.restore();
         overlayCtx.fillStyle = '#fff'; overlayCtx.font = '12px monospace';
         overlayCtx.fillText("Release to Transform", width/2 - 60, height - 50);
         return true; // Continue animation
    }

    if (fourierData.length > 0) {
        const count = Math.min(config.fourierCount, fourierData.length);
        const { x, y } = renderFourierEpicycles(overlayCtx, fourierData, state.time, count);
        
        c.strokeStyle = config.colorMode === ColorMode.Rainbow 
            ? `hsl(${(state.time * 180 / Math.PI) % 360}, 100%, 60%)` 
            : config.color;
        c.lineWidth = config.lineWidth / zoomScale; 
        c.globalAlpha = config.opacity;
        
        if (fourierPath.length > 0) {
            const p = fourierPath[fourierPath.length-1];
            c.beginPath(); c.moveTo(p.x, p.y); c.lineTo(x, y); c.stroke();
        }
        fourierPath.push({x, y});
        
        onProgress((state.time / (Math.PI * 2)) * 100);

        const dt = (Math.PI * 2) / (Math.max(1, fourierData.length));
        state.time += dt;
        
        if (state.time >= Math.PI * 2) {
            state.time = Math.PI * 2;
            onProgress(100);
            onStop();
            return false; // Stop animation
        }
    } else {
         overlayCtx.fillStyle = '#64748b'; overlayCtx.font = '14px sans-serif'; overlayCtx.textAlign = 'center';
         overlayCtx.fillText("Draw a shape here", 0, 0);
    }
    return true;
};

export const drawTextFrame = (
    ctx: DrawContext,
    config: SpiroConfig,
    state: AnimationState,
    textPath: PathPoint[],
    onProgress: (val: number) => void,
    onStop: () => void
) => {
    const { ctx: c, overlayCtx, width, height, dpr, zoomScale } = ctx;

    if (textPath.length === 0) {
         overlayCtx.save();
         overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
         overlayCtx.clearRect(0, 0, width, height);
         overlayCtx.fillStyle = '#64748b'; overlayCtx.font = '14px sans-serif'; overlayCtx.textAlign = 'center';
         overlayCtx.fillText("Processing Text...", width/2, height/2);
         overlayCtx.restore();
         return true;
    }
    
    state.pointsAccumulator += (config.drawSpeed * (textPath.length / 300));
    let pointsToDraw = Math.floor(state.pointsAccumulator);
    
    if (pointsToDraw < 1) return true;
    
    state.pointsAccumulator -= pointsToDraw;
    pointsToDraw = Math.min(pointsToDraw, 500);

    c.globalAlpha = config.opacity;
    let pointsDrawn = 0;
    
    c.beginPath();
    c.moveTo(state.lastX, state.lastY);
    
    while (pointsDrawn < pointsToDraw) {
        if (state.textPathIndex >= textPath.length - 1) {
            onProgress(100);
            c.stroke();
            onStop();
            return false;
        }

        state.textPathIndex++;
        const p = textPath[state.textPathIndex];
        
        if (p.penUp) {
            c.stroke();
            c.beginPath();
            c.moveTo(p.x, p.y);
        } else {
            if (config.colorMode === ColorMode.Rainbow) {
               c.stroke();
               c.beginPath();
               c.moveTo(state.lastX, state.lastY);
               const hue = (state.textPathIndex / textPath.length * 360) % 360;
               c.strokeStyle = `hsl(${hue}, 100%, 60%)`;
            }
            c.lineTo(p.x, p.y);
        }
        state.lastX = p.x; state.lastY = p.y;
        pointsDrawn++;
    }

    if (config.colorMode !== ColorMode.Rainbow) c.strokeStyle = config.color;
    c.stroke();
    
    onProgress((state.textPathIndex / textPath.length) * 100);

    overlayCtx.save();
    overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    overlayCtx.clearRect(0, 0, width, height);
    overlayCtx.restore();
    renderPen(overlayCtx, state.lastX, state.lastY, zoomScale);

    return true;
};

export const drawSpiroFrame = (
    ctx: DrawContext,
    config: SpiroConfig,
    state: AnimationState,
    statorPath: PathPoint[],
    rotorPath: PathPoint[],
    maxDist: number,
    onProgress: (val: number) => void,
    onStop: () => void
) => {
    const { ctx: c, overlayCtx, width, height, dpr, zoomScale } = ctx;

    c.globalAlpha = config.opacity;
    state.pointsAccumulator += config.drawSpeed;
    let pointsToDraw = Math.floor(state.pointsAccumulator);
    
    if (pointsToDraw < 1) {
         if (state.currentDist < maxDist) return true;
    }
    state.pointsAccumulator -= pointsToDraw;
    pointsToDraw = Math.min(pointsToDraw, 2000);

    let pointsDrawn = 0;
    c.beginPath();
    c.moveTo(state.lastX, state.lastY);
    
    let cx=0, cy=0, rot=0;

    while (pointsDrawn < pointsToDraw && state.currentDist < maxDist) {
        state.currentDist += config.resolution;
        const s = getPointAt(statorPath, state.currentDist);
        const r = getPointAt(rotorPath, state.currentDist);
        rot = config.type === SpiroType.Hypotrochoid ? (s.angle - r.angle) : (s.angle + Math.PI - r.angle);
        cx = s.x - (r.x * Math.cos(rot) - r.y * Math.sin(rot));
        cy = s.y - (r.x * Math.sin(rot) + r.y * Math.cos(rot));
        const targetX = cx + config.penOffset * Math.cos(rot);
        const targetY = cy + config.penOffset * Math.sin(rot);
        
        if (config.colorMode === ColorMode.Rainbow) {
            c.strokeStyle = `hsl(${(rot * 180 / Math.PI) % 360}, 100%, 60%)`;
            c.lineTo(targetX, targetY);
            c.stroke();
            c.beginPath();
            c.moveTo(targetX, targetY);
        } else {
            c.lineTo(targetX, targetY);
        }
        state.lastX = targetX; state.lastY = targetY;
        pointsDrawn++;
    }
    
    if (config.colorMode !== ColorMode.Rainbow) {
        c.strokeStyle = config.color;
        c.stroke();
    }
    
    onProgress((state.currentDist / maxDist) * 100);
    
    overlayCtx.save();
    overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    overlayCtx.clearRect(0, 0, width, height);
    overlayCtx.restore();

    renderGuides(overlayCtx, config, {cx, cy, rot}, statorPath, rotorPath, zoomScale);
    renderPen(overlayCtx, state.lastX, state.lastY, zoomScale);
    
    if (state.currentDist >= maxDist) {
        onStop();
        return false;
    }
    return true;
};
