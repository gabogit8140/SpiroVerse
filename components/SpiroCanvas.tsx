
import React, { useRef, useState, useEffect } from 'react';
import { Canvas3D } from './Canvas3D';
import { Canvas2D } from './Canvas2D';
import { SpiroConfig, RenderMode, Complex } from '../types';
import { Menu } from 'lucide-react';

interface SpiroCanvasProps {
    config: SpiroConfig;
    redrawTrigger: number;
    downloadTrigger: number;
    isRecording: boolean;
    isPlaying: boolean;
    onStop?: () => void;
    isSidebarOpen: boolean;
    onOpenSidebar: () => void;
    fourierData: Complex[];
    setFourierData: (data: Complex[]) => void;
}

export const SpiroCanvas: React.FC<SpiroCanvasProps> = ({ 
    config, 
    redrawTrigger, 
    downloadTrigger,
    isRecording,
    isPlaying,
    onStop,
    isSidebarOpen, 
    onOpenSidebar,
    fourierData,
    setFourierData
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [viewport, setViewport] = useState({ width: 0, height: 0 });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                // Only update if dimensions actually changed to avoid loops
                setViewport(prev => {
                    if (Math.abs(prev.width - width) < 1 && Math.abs(prev.height - height) < 1) return prev;
                    return { width, height };
                });
            }
        });

        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="flex-1 relative bg-slate-950 flex flex-col min-h-0 w-full">
            <div className="flex-1 overflow-hidden p-0 relative" ref={containerRef}>
                {viewport.width > 0 && viewport.height > 0 && (
                    <>
                        {config.renderMode === RenderMode.ThreeD ? (
                            <Canvas3D 
                                key="canvas-3d-view"
                                config={config} 
                                width={viewport.width} 
                                height={viewport.height} 
                                isPlaying={isPlaying}
                                isRecording={isRecording}
                                onStop={onStop}
                                fourierData={fourierData}
                                redrawTrigger={redrawTrigger}
                                downloadTrigger={downloadTrigger}
                                onProgress={setProgress}
                            />
                        ) : (
                            <Canvas2D
                                key={`${redrawTrigger}-2d`} 
                                config={config} 
                                width={viewport.width} 
                                height={viewport.height} 
                                isPlaying={isPlaying}
                                isRecording={isRecording}
                                onStop={onStop}
                                fourierData={fourierData}
                                setFourierData={setFourierData}
                                downloadTrigger={downloadTrigger}
                                onProgress={setProgress}
                            />
                        )}
                    </>
                )}
            </div>
            
            <div className="h-8 bg-slate-900/50 text-slate-500 text-[10px] md:text-xs flex items-center justify-center border-t border-slate-800/50 shrink-0 z-10 select-none">
                {isRecording ? (
                    <span className="text-red-400 font-bold animate-pulse">● Recording Video...</span>
                ) : config.renderMode === RenderMode.ThreeD ? (
                    <span>Drag to Rotate • Scroll to Zoom • {isPlaying ? `Drawing... ${Math.round(progress)}%` : "Paused"}</span>
                ) : (
                    <span>2D View Mode • {isPlaying ? `Drawing... ${Math.round(progress)}%` : "Paused"}</span>
                )}
            </div>
        </div>
    );
};
