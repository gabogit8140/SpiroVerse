
import React, { useState, useRef, useEffect } from 'react';
import { SpiroConfig, GeneratorMode, Complex } from '../types';
import { dft } from '../utils/math';

export const useFourierInput = (
    config: SpiroConfig,
    width: number,
    height: number,
    overlayRef: React.RefObject<HTMLCanvasElement | null>,
    setFourierData: (data: Complex[]) => void
) => {
    const [drawing, setDrawing] = useState(false);
    const [userPath, setUserPath] = useState<{x: number, y: number}[]>([]);
    const [fourierPath, setFourierPath] = useState<{x: number, y: number}[]>([]);

    // Reset paths when mode changes
    useEffect(() => {
        if (config.generatorMode === GeneratorMode.Spirograph) {
            setUserPath([]);
            setFourierPath([]);
        } else if (config.generatorMode === GeneratorMode.Text) {
            setFourierPath([]);
        }
    }, [config.generatorMode, config.textPhrase]);

    // Recalculate DFT when user finishes drawing
    useEffect(() => {
        if (config.generatorMode === GeneratorMode.Fourier && userPath.length > 0 && !drawing) {
            const skip = 1; 
            const dftInput = userPath.filter((_, i) => i % skip === 0);
            const fourier = dft(dftInput);
            setFourierData(fourier);
            setFourierPath([]); // Reset drawn path for playback
        }
    }, [userPath, drawing, config.generatorMode, setFourierData]);

    const handlePointerDown = (e: React.PointerEvent) => {
        if (config.generatorMode !== GeneratorMode.Fourier) return;
        setDrawing(true);
        setUserPath([]); 
        setFourierData([]); 
        
        const rect = overlayRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        const x = e.clientX - rect.left - width / 2;
        const y = e.clientY - rect.top - height / 2;
        setUserPath([{x, y}]);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!drawing || config.generatorMode !== GeneratorMode.Fourier) return;
        const rect = overlayRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        const x = e.clientX - rect.left - width / 2;
        const y = e.clientY - rect.top - height / 2;
        setUserPath(prev => [...prev, {x, y}]);
    };

    const handlePointerUp = () => {
        if (!drawing) return;
        setDrawing(false);
    };

    return {
        drawing,
        userPath,
        fourierPath,
        setFourierPath,
        handlers: {
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerLeave: handlePointerUp
        }
    };
};