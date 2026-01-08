import React from 'react';
import { Box, Eye, EyeOff, Ban, Waves, PenTool } from 'lucide-react';
import { SpiroConfig, ZModulationType, Complex, RenderMode, GeneratorMode } from '../../types';
import { ControlSlider, ZModulationGraph } from './ControlUI';

export const WaveControls = ({ 
    config, 
    setConfig,
    fourierData 
}: { 
    config: SpiroConfig, 
    setConfig: (c: any) => void,
    fourierData?: Complex[] 
}) => {
    
    if (config.renderMode !== RenderMode.ThreeD || config.generatorMode === GeneratorMode.Fourier) return null;

    const handleChange = (key: keyof SpiroConfig, value: any) => {
        setConfig((prev: any) => ({ ...prev, [key]: value }));
    };

    const WaveWidget = ({ label, colorClass, type, freq, amp, onChangeType, onChangeFreq, onChangeAmp }: any) => (
      <div className="bg-slate-900/50 rounded-lg p-2 border border-slate-800">
          <div className={`text-[11px] font-bold mb-2 ${colorClass}`}>{label}</div>
          <div className="flex gap-1 mb-2">
            <button 
                onClick={() => onChangeType(ZModulationType.None)}
                className={`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${type === ZModulationType.None ? 'bg-slate-700 border-slate-500 text-slate-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
            >
               <Ban size={10} /> None
            </button>
            <button 
                onClick={() => onChangeType(ZModulationType.Sine)}
                className={`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${type === ZModulationType.Sine ? 'bg-indigo-500/30 border-indigo-400 text-indigo-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
            >
               <Waves size={10} /> Sine
            </button>
            <button 
                onClick={() => onChangeType(ZModulationType.Fourier)}
                className={`flex-1 py-1 rounded text-[10px] flex items-center justify-center gap-1 border transition-all ${type === ZModulationType.Fourier ? 'bg-pink-500/30 border-pink-400 text-pink-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
            >
               <PenTool size={10} /> Path
            </button>
        </div>
        
        <ZModulationGraph amplitude={amp} frequency={freq} type={type} fourierData={fourierData} />
        
        {type !== ZModulationType.None && (
            <div className="space-y-2">
                 <ControlSlider label="Amplitude" value={amp} min={0} max={250} onChange={onChangeAmp} compact />
                 <ControlSlider label="Frequency" value={freq} min={0} max={30} onChange={onChangeFreq} compact />
            </div>
        )}
      </div>
    );

    return (
        <div className="border-2 border-dashed border-indigo-500/30 bg-indigo-500/5 rounded-xl p-3 space-y-3 animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <Box size={16} /> 3D Modulation
                </div>
                <button 
                    onClick={() => handleChange('showProjection', !config.showProjection)}
                    className={`text-[10px] px-2 py-1 rounded flex items-center gap-1 border transition-colors ${config.showProjection ? 'bg-blue-600/20 border-blue-500 text-blue-200' : 'bg-slate-900 border-slate-600 text-slate-400'}`}
                    title="Toggle 2D Ground Projection"
                >
                    {config.showProjection ? <Eye size={12} /> : <EyeOff size={12} />} Projection
                </button>
            </div>
            
            <WaveWidget 
                label="Wave A (Back Wall)"
                colorClass="text-indigo-300"
                type={config.zModulationType}
                freq={config.zFrequency}
                amp={config.zAmplitude}
                onChangeType={(v: any) => handleChange('zModulationType', v)}
                onChangeFreq={(v: any) => handleChange('zFrequency', v)}
                onChangeAmp={(v: any) => handleChange('zAmplitude', v)}
            />

            <div className="flex items-center justify-center text-slate-600 text-xs font-bold">+</div>

            <WaveWidget 
                label="Wave B (Side Wall)"
                colorClass="text-emerald-300"
                type={config.zModulationType2}
                freq={config.zFrequency2}
                amp={config.zAmplitude2}
                onChangeType={(v: any) => handleChange('zModulationType2', v)}
                onChangeFreq={(v: any) => handleChange('zFrequency2', v)}
                onChangeAmp={(v: any) => handleChange('zAmplitude2', v)}
            />
        </div>
    );
};
