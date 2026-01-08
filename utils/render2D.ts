
import { SpiroConfig, ColorMode, GeneratorMode } from '../types';

export const renderGuides = (
    ctx: CanvasRenderingContext2D,
    config: SpiroConfig,
    state: any,
    statorPath: any[],
    rotorPath: any[],
    zoomScale: number
) => {
    const guideLineWidth = 2.5 / zoomScale; 
    
    // Stator
    ctx.beginPath();
    statorPath.forEach((p, i) => { i===0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
    ctx.closePath();
    ctx.strokeStyle = 'rgba(34, 211, 238, 0.8)'; 
    ctx.lineWidth = guideLineWidth;
    ctx.setLineDash([6/zoomScale, 4/zoomScale]); 
    ctx.stroke();
    
    // Rotor
    ctx.save();
    ctx.translate(state.cx, state.cy);
    ctx.rotate(state.rot);
    ctx.beginPath();
    rotorPath.forEach((p, i) => { i===0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); });
    ctx.closePath();
    ctx.fillStyle = 'rgba(244, 63, 94, 0.2)'; 
    ctx.fill();
    ctx.strokeStyle = 'rgba(244, 63, 94, 1.0)'; 
    ctx.lineWidth = guideLineWidth;
    ctx.setLineDash([]);
    ctx.stroke();
    ctx.restore();
};

export const renderPen = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    zoomScale: number
) => {
    ctx.beginPath();
    ctx.arc(x, y, 5 / zoomScale, 0, Math.PI*2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
};

export const renderUserPath = (
    ctx: CanvasRenderingContext2D,
    path: {x: number, y: number}[]
) => {
     ctx.strokeStyle = '#f472b6'; 
     ctx.lineWidth = 2;
     ctx.beginPath();
     if (path.length > 0) {
         ctx.moveTo(path[0].x, path[0].y);
         for (let p of path) ctx.lineTo(p.x, p.y);
     }
     ctx.stroke();
};

export const renderFourierEpicycles = (
    ctx: CanvasRenderingContext2D,
    fourierData: any[],
    time: number,
    count: number
) => {
    let x = 0;
    let y = 0;
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < count; i++) {
        const prevX = x;
        const prevY = y;
        const { freq, amp, phase } = fourierData[i];
        x += amp * Math.cos(freq * time + phase);
        y += amp * Math.sin(freq * time + phase);
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.arc(prevX, prevY, amp, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    return { x, y };
};
