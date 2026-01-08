import React from 'react';
import { Shapes, Sliders, RotateCw, CircleDot, Circle } from 'lucide-react';
import { SpiroConfig, ShapeType, SpiroType, GeneratorMode } from '../../types';
import { calculateRequiredRotations } from '../../utils/math';
import { ControlSlider } from './ControlUI';

const SHAPES = [
    { type: ShapeType.Circle, label: 'Circle' },
    { type: ShapeType.Line, label: 'Line' },
    { type: ShapeType.Square, label: 'Square' },
    { type: ShapeType.Triangle, label: 'Triangle' },
    { type: ShapeType.Stadium, label: 'Stadium' },
    { type: ShapeType.Hexagon, label: 'Hexagon' },
    { type: ShapeType.Cross, label: 'Cross' },
    { type: ShapeType.Figure8, label: 'Figure 8' },
    { type: ShapeType.Star, label: 'Star' },
    { type: ShapeType.Flower, label: 'Flower' },
    { type: ShapeType.Spiral, label: 'Snail' },
];

export const SpiroControls = ({ config, setConfig }: { config: SpiroConfig, setConfig: (c: any) => void }) => {
    
    const handleChange = (key: keyof SpiroConfig, value: any) => {
        setConfig((prev: any) => ({ ...prev, [key]: value }));
    };
    
    const handlePerfectLoop = () => {
        const perfectRotations = calculateRequiredRotations(config.outerRadius, config.innerRadius);
        handleChange('rotations', perfectRotations);
    };

    if (config.generatorMode !== GeneratorMode.Spirograph) {
        // Return minimal controls for other modes if needed, or null
        if (config.generatorMode === GeneratorMode.Fourier || config.generatorMode === GeneratorMode.Text) {
             return (
                 <div className="space-y-4">
                     <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                        <div className="flex items-center gap-2 text-blue-400 font-semibold">
                            <Sliders size={16} /> Geometry
                        </div>
                    </div>
                    <ControlSlider label="Epicycles" value={config.fourierCount} min={1} max={1000} step={1} onChange={(v: number) => handleChange('fourierCount', Math.floor(v))} />
                 </div>
             );
        }
        return null;
    }

    return (
        <>
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-orange-400 font-semibold border-b border-slate-700 pb-2">
                    <Shapes size={16} /> Shapes
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs text-slate-400 font-medium italic">Fixed Outer Ring</label>
                    <div className="grid grid-cols-3 gap-1">
                        {SHAPES.map((s) => (
                            <button
                                key={`stator-${s.type}`}
                                onClick={() => handleChange('statorShape', s.type)}
                                className={`text-[10px] py-1 px-2 rounded border transition-all ${config.statorShape === s.type ? 'bg-orange-500 border-orange-500 text-white shadow-md' : 'border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-slate-400 font-medium italic">Moving Inner Wheel</label>
                    <div className="grid grid-cols-3 gap-1">
                        {SHAPES.map((s) => (
                            <button
                                key={`rotor-${s.type}`}
                                onClick={() => handleChange('rotorShape', s.type)}
                                className={`text-[10px] py-1 px-2 rounded border transition-all ${config.rotorShape === s.type ? 'bg-orange-500 border-orange-500 text-white shadow-md' : 'border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        <Sliders size={16} /> Geometry
                    </div>
                    <button 
                        onClick={handlePerfectLoop}
                        className="text-[10px] bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 rounded flex items-center gap-1 border border-slate-600"
                        title="Calculate minimum rotations for perfect closure"
                    >
                        <RotateCw size={10} /> Auto-Loop
                    </button>
                </div>

                <div className="flex gap-2 mb-2">
                    <button 
                        onClick={() => handleChange('type', SpiroType.Hypotrochoid)}
                        className={`flex-1 py-2 px-2 rounded-md text-xs flex items-center justify-center gap-2 border transition-all ${config.type === SpiroType.Hypotrochoid ? 'bg-blue-500/20 border-blue-500 text-blue-200' : 'border-slate-700 hover:bg-slate-700'}`}
                    >
                        <CircleDot size={14} /> Inside
                    </button>
                    <button 
                        onClick={() => handleChange('type', SpiroType.Epitrochoid)}
                        className={`flex-1 py-2 px-2 rounded-md text-xs flex items-center justify-center gap-2 border transition-all ${config.type === SpiroType.Epitrochoid ? 'bg-purple-500/20 border-purple-500 text-purple-200' : 'border-slate-700 hover:bg-slate-700'}`}
                    >
                        <Circle size={14} /> Outside
                    </button>
                </div>
                
                <ControlSlider label="Fixed Ring Size" value={config.outerRadius} min={10} max={300} onChange={(v: number) => handleChange('outerRadius', v)} />
                <ControlSlider label="Wheel Size" value={config.innerRadius} min={2} max={200} onChange={(v: number) => handleChange('innerRadius', v)} />
                <ControlSlider label="Pen Placement" value={config.penOffset} min={0} max={300} onChange={(v: number) => handleChange('penOffset', v)} />
                <ControlSlider label="Complexity (Rotations)" value={config.rotations} min={1} max={100} onChange={(v: number) => handleChange('rotations', v)} />
            </div>
        </>
    );
};
