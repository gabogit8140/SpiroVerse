import React, { useMemo } from 'react';
import { ZModulationType, Complex } from '../../types';

export const ControlSlider = ({ label, value, min, max, onChange, step = 1, compact = false }: any) => (
  <div className={`flex flex-col gap-1 group ${compact ? 'gap-0.5' : 'gap-1'}`}>
    <div className={`flex justify-between ${compact ? 'text-[10px]' : 'text-[11px]'} text-slate-400 group-hover:text-slate-200 transition-colors`}>
      <span>{label}</span>
      <span className="text-slate-200 font-mono font-bold">{Math.round(value * 100) / 100}</span>
    </div>
    <input 
      type="range" min={min} max={max} step={step} value={value} 
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className={`w-full ${compact ? 'h-1' : 'h-1.5'} bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all`}
    />
  </div>
);

// Visualization Component for Z-Axis
export const ZModulationGraph = ({ amplitude, frequency, type, fourierData = [] }: { amplitude: number, frequency: number, type: ZModulationType, fourierData?: Complex[] }) => {
    const width = 300;
    const height = 40;
    const centerY = height / 2;
    const ampScale = (height / 2 - 4) / 250; 
    
    const pathData = useMemo(() => {
        if (type === ZModulationType.None) {
            return `M 0 ${centerY} L ${width} ${centerY}`;
        }

        let d = `M 0 ${centerY} `;
        const points = 300; 
        
        if (type === ZModulationType.Sine) {
            for (let i = 0; i <= points; i++) {
                const t = i / points;
                const x = t * width;
                const angle = t * frequency * Math.PI * 2;
                const yOffset = Math.sin(angle) * (amplitude * ampScale);
                d += `L ${x} ${centerY - yOffset} `;
            }
        } else {
             if (!fourierData || fourierData.length === 0) {
                 return `M 0 ${centerY} L ${width} ${centerY}`;
             }

             let rawPeak = 0;
             const sampleRes = 200;
             const coefCount = Math.min(fourierData.length, 150); 

             for (let i = 0; i <= sampleRes; i++) {
                 const t = (i / sampleRes) * Math.PI * 2;
                 let y = 0;
                 for (let j = 0; j < coefCount; j++) {
                     const { freq, amp, phase } = fourierData[j];
                     y += amp * Math.sin(freq * t + phase);
                 }
                 if (Math.abs(y) > rawPeak) rawPeak = Math.abs(y);
             }

             for (let i = 0; i <= points; i++) {
                const x = (i / points) * width;
                const t = (i / points) * Math.PI * 2 * frequency; 
                
                let rawY = 0;
                for (let j = 0; j < coefCount; j++) {
                     const { freq, amp, phase } = fourierData[j];
                     rawY += amp * Math.sin(freq * t + phase);
                }
                
                const normY = rawPeak > 0.0001 ? rawY / rawPeak : 0;
                const yOffset = normY * (amplitude * ampScale);
                
                d += `L ${x} ${centerY - yOffset} `;
            }
        }
        return d;
    }, [amplitude, frequency, centerY, ampScale, type, fourierData]);

    return (
        <div className="w-full bg-slate-950/50 rounded border border-slate-700/50 h-[40px] relative overflow-hidden mb-2">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800" />
            <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="absolute inset-0">
                <path d={pathData} fill="none" stroke={type === ZModulationType.Sine ? "#818cf8" : type === ZModulationType.Fourier ? "#f472b6" : "#334155"} strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
        </div>
    );
};
