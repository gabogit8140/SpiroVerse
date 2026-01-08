
import React, { useEffect, useState } from 'react';
import { SpiroConfig, ColorMode, RenderMode, GeneratorMode, ZModulationType, Complex, SpiroType, ShapeType } from '../types';
import { Zap, Shuffle, Monitor, BoxSelect, Pencil, Activity, Type, Palette, Eye, Ghost } from 'lucide-react';
import { calculateRequiredRotations } from '../utils/math';
import { ControlSlider } from './controls/ControlUI';
import { SpiroControls } from './controls/SpiroControls';
import { WaveControls } from './controls/WaveControls';

interface ControlsProps {
  config: SpiroConfig;
  setConfig: React.Dispatch<React.SetStateAction<SpiroConfig>>;
  fourierData?: Complex[];
  setFourierData?: (data: Complex[]) => void;
}

export const Controls: React.FC<ControlsProps> = ({ 
  config, 
  setConfig,
  fourierData
}) => {

  const handleChange = (key: keyof SpiroConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleRandomize = () => {
    const r = Math.floor(Math.random() * 80) + 10;
    const R = Math.floor(Math.random() * 120) + 40;
    const d = Math.floor(Math.random() * 80) + 10;
    const type = Math.random() > 0.5 ? SpiroType.Hypotrochoid : SpiroType.Epitrochoid;
    const colorMode = ColorMode.Rainbow;
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const shapes = Object.values(ShapeType);
    const rotorShape = shapes[Math.floor(Math.random() * shapes.length)];
    const statorShape = shapes[Math.floor(Math.random() * shapes.length)];

    setConfig((prev: SpiroConfig) => ({
        ...prev,
        type,
        rotorShape,
        statorShape,
        innerRadius: r,
        outerRadius: R,
        penOffset: d,
        colorMode,
        color,
        rotations: calculateRequiredRotations(R, r),
        zAmplitude: Math.random() * 80 + 20,
        zFrequency: Math.floor(Math.random() * 8) + 1,
        zModulationType: ZModulationType.Sine,
        zAmplitude2: Math.random() > 0.5 ? Math.random() * 60 + 10 : 0,
        zFrequency2: Math.floor(Math.random() * 4) + 1,
        zModulationType2: Math.random() > 0.5 ? ZModulationType.Sine : ZModulationType.None,
        showProjection: true
    }));
  };

  return (
    <div className="p-6 flex flex-col gap-6 text-sm">
      {(config.generatorMode === GeneratorMode.Spirograph || config.generatorMode === GeneratorMode.Text) && (
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400 font-semibold border-b border-slate-700 pb-2">
                <Zap size={16} /> Performance
            </div>
            <ControlSlider 
                label="Draw Speed" 
                value={config.drawSpeed} 
                min={0.1} 
                max={50} 
                step={0.1} 
                onChange={(v: number) => handleChange('drawSpeed', v)} 
            />
        </div>
      )}

      <div className="flex flex-col gap-4">
        {/* Render Mode Switch - Hide in Fourier Mode */}
        {config.generatorMode !== GeneratorMode.Fourier && (
            <div className="flex bg-slate-800 p-1 rounded-lg">
            <button 
                onClick={() => handleChange('renderMode', RenderMode.TwoD)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${config.renderMode === RenderMode.TwoD ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
                <Monitor size={16} /> 2D Flat
            </button>
            <button 
                onClick={() => handleChange('renderMode', RenderMode.ThreeD)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${config.renderMode === RenderMode.ThreeD ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
                <BoxSelect size={16} /> 3D Space
            </button>
            </div>
        )}

        {/* Generator Mode Switch */}
        <div className="flex bg-slate-800 p-1 rounded-lg">
           <button 
             onClick={() => handleChange('generatorMode', GeneratorMode.Spirograph)}
             className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${config.generatorMode === GeneratorMode.Spirograph ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
           >
             <Activity size={16} /> Spiro
           </button>
           <button 
             onClick={() => {
                 handleChange('generatorMode', GeneratorMode.Fourier);
                 handleChange('renderMode', RenderMode.TwoD); // Force 2D for drawing
             }}
             className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${config.generatorMode === GeneratorMode.Fourier ? 'bg-pink-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
           >
             <Pencil size={16} /> Path
           </button>
           <button 
             onClick={() => {
                 handleChange('generatorMode', GeneratorMode.Text);
                 handleChange('showProjection', false);
             }}
             className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md transition-all ${config.generatorMode === GeneratorMode.Text ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
           >
             <Type size={16} /> Text
           </button>
        </div>

        {config.generatorMode === GeneratorMode.Text && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 space-y-2">
                <label className="text-amber-200 text-xs font-semibold">Phrase to Draw</label>
                <input 
                    type="text" 
                    value={config.textPhrase} 
                    onChange={(e) => handleChange('textPhrase', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="Enter text..."
                    maxLength={20}
                />
            </div>
        )}

        {config.generatorMode === GeneratorMode.Spirograph && (
            <button 
                onClick={handleRandomize}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-md font-semibold transition-all flex items-center justify-center gap-2 border border-slate-700"
            >
                <Shuffle size={16} /> Randomize Params
            </button>
        )}
      </div>

      {config.generatorMode === GeneratorMode.Fourier && (
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 text-center">
              <p className="text-pink-200 text-xs font-semibold mb-1">Interactive Mode</p>
              <p className="text-slate-400 text-[11px]">Draw a continuous loop on the canvas to see the Fourier Transform reconstruct it with epicycles.</p>
          </div>
      )}

      <WaveControls config={config} setConfig={setConfig} fourierData={fourierData} />
      
      <SpiroControls config={config} setConfig={setConfig} />

      <div className="space-y-4 pb-4">
        <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <div className="flex items-center gap-2 text-pink-400 font-semibold">
                <Palette size={16} /> Style
            </div>
             <button 
                onClick={() => handleChange('showTrace', !config.showTrace)}
                className={`text-[10px] px-2 py-1 rounded flex items-center gap-1 border transition-colors ${config.showTrace ? 'bg-pink-600/20 border-pink-500 text-pink-200' : 'bg-slate-800 border-slate-600 text-slate-400'}`}
                title="Toggle Drawing Trace"
            >
                {config.showTrace ? <Eye size={12} /> : <Ghost size={12} />} Trace
            </button>
        </div>
        <div className="flex gap-2 mb-2">
            <button onClick={() => handleChange('colorMode', ColorMode.Solid)} className={`flex-1 py-1 px-2 rounded text-xs border ${config.colorMode === ColorMode.Solid ? 'bg-slate-600 border-white text-white' : 'border-slate-600 text-slate-400'}`}>Solid</button>
            <button onClick={() => handleChange('colorMode', ColorMode.Rainbow)} className={`flex-1 py-1 px-2 rounded text-xs border ${config.colorMode === ColorMode.Rainbow ? 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white border-transparent' : 'border-slate-600 text-slate-400'}`}>Rainbow</button>
        </div>
        {config.colorMode === ColorMode.Solid && (
            <div className="flex justify-between items-center px-1">
                <span>Color</span>
                <input type="color" value={config.color} onChange={(e) => handleChange('color', e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-none" />
            </div>
        )}
        <ControlSlider label="Line Thickness" value={config.lineWidth} min={1} max={30} step={0.5} onChange={(v: number) => handleChange('lineWidth', v)} />
        <ControlSlider label="Glow Opacity" value={config.opacity} min={0.1} max={1} step={0.1} onChange={(v: number) => handleChange('opacity', v)} />
      </div>
      
    </div>
  );
};
