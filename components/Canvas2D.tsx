
import React, { useRef, useMemo } from 'react';
import { SpiroConfig, GeneratorMode, Complex, SpiroType } from '../types';
import { generatePath } from '../utils/geometry';
import { generateTextPath } from '../utils/textUtils';
import { useFourierInput } from '../hooks/useFourierInput';
import { useVideoRecorder } from '../hooks/useVideoRecorder';
import { useCanvas2DAnimation } from '../hooks/useCanvas2DAnimation';

interface Canvas2DProps {
  config: SpiroConfig;
  width: number;
  height: number;
  isPlaying: boolean;
  isRecording?: boolean;
  onStop?: () => void;
  fourierData: Complex[];
  setFourierData: (data: Complex[]) => void;
  downloadTrigger?: number;
  onProgress?: (progress: number) => void;
}

export const Canvas2D: React.FC<Canvas2DProps> = ({ config, width, height, isPlaying, isRecording = false, onStop, fourierData, setFourierData, downloadTrigger = 0, onProgress }) => {
  const traceRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  
  // Use Video Recorder Hook
  useVideoRecorder({ canvasRef: traceRef, isRecording, format: config.videoFormat, onStop });

  // Hook for Fourier Drawing Logic
  const { drawing, userPath, fourierPath, setFourierPath, handlers } = useFourierInput(config, width, height, overlayRef, setFourierData);

  // Pre-calculations
  const statorPath = useMemo(() => generatePath(config.statorShape, config.outerRadius), [config.statorShape, config.outerRadius]);
  const rotorPath = useMemo(() => generatePath(config.rotorShape, config.innerRadius), [config.rotorShape, config.innerRadius]);
  
  // Memoize Text Path
  const textPath = useMemo(() => {
      if (config.generatorMode === GeneratorMode.Text) return generateTextPath(config.textPhrase, 1);
      return [];
  }, [config.generatorMode, config.textPhrase]);

  const maxSpiroRadius = useMemo(() => {
      if (config.generatorMode === GeneratorMode.Text) {
          if (textPath.length === 0) return 100;
          let maxR = 0;
          for(const p of textPath) {
             const d = Math.hypot(p.x, p.y);
             if(d > maxR) maxR = d;
          }
          return maxR * 1.1 || 100;
      }
      if (config.generatorMode === GeneratorMode.Fourier) {
          if (fourierData.length > 0) {
               let maxR = 0;
               const samples = 200; 
               const count = Math.min(config.fourierCount, fourierData.length);
               for (let i = 0; i < samples; i++) {
                   const t = (i / samples) * Math.PI * 2;
                   let x = 0; let y = 0;
                   for(let j=0; j<count; j++) {
                       const { freq, amp, phase } = fourierData[j];
                       x += amp * Math.cos(freq * t + phase);
                       y += amp * Math.sin(freq * t + phase);
                   }
                   maxR = Math.max(maxR, Math.sqrt(x*x + y*y));
               }
               return maxR * 1.1 || 100;
          }
          return 150;
      }
      const maxStatorR = Math.max(0, ...statorPath.map(p => Math.hypot(p.x, p.y)));
      const maxRotorR = Math.max(0, ...rotorPath.map(p => Math.hypot(p.x, p.y)));
      return config.type === SpiroType.Hypotrochoid 
          ? Math.max(maxStatorR, Math.abs(maxStatorR - maxRotorR) + config.penOffset)
          : maxStatorR + maxRotorR + config.penOffset;
  }, [statorPath, rotorPath, config.type, config.penOffset, config.generatorMode, fourierData, config.fourierCount, textPath]);

  // Use Animation Hook
  useCanvas2DAnimation({
      traceRef, overlayRef, config, width, height, isPlaying, fourierData,
      textPath, statorPath, rotorPath, maxSpiroRadius, drawing, userPath, fourierPath,
      onProgress, onStop
  });

  return (
    <div className="relative w-full h-full touch-none">
        <canvas ref={traceRef} className="absolute inset-0 block rounded-lg shadow-2xl bg-slate-900" style={{ width: '100%', height: '100%' }} />
        <canvas 
            ref={overlayRef}
            className={`absolute inset-0 block rounded-lg ${config.generatorMode === GeneratorMode.Fourier ? 'cursor-crosshair' : 'pointer-events-none'}`}
            style={{ width: '100%', height: '100%' }}
            {...handlers}
        />
    </div>
  );
};
