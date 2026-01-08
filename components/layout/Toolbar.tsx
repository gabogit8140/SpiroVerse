
import React from 'react';
import { Eye, EyeOff, Play, Pause, RotateCcw, Download, Ghost, ScanLine, Video, Square } from 'lucide-react';

interface ToolbarProps {
    showProjection: boolean;
    showTrace: boolean;
    isPlaying: boolean;
    isRecording?: boolean;
    onToggleProjection: () => void;
    onToggleTrace: () => void;
    onTogglePause: () => void;
    onPlay: () => void; // This acts as Restart
    onDownload: () => void;
    onToggleRecording: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ 
    showProjection,
    showTrace,
    isPlaying,
    isRecording = false,
    onToggleProjection, 
    onToggleTrace,
    onTogglePause,
    onPlay, 
    onDownload,
    onToggleRecording
}) => {
    return (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button 
                onClick={onToggleTrace}
                className={`backdrop-blur p-3 rounded-full border shadow-lg transition-all flex items-center gap-2 px-4 ${showTrace ? 'bg-pink-600/80 text-white border-pink-400' : 'bg-slate-800/80 text-slate-300 border-slate-600'}`}
                title="Toggle Drawing Trace"
            >
                {showTrace ? <Ghost size={20} /> : <ScanLine size={20} />}
                <span className="text-xs font-bold hidden lg:inline">{showTrace ? "Trace On" : "Trace Off"}</span>
            </button>

            <button 
                onClick={onToggleProjection}
                className={`backdrop-blur p-3 rounded-full border shadow-lg transition-all flex items-center gap-2 px-4 ${showProjection ? 'bg-blue-600/80 text-white border-blue-400' : 'bg-slate-800/80 text-slate-300 border-slate-600'}`}
                title="Toggle 2D Projection"
            >
                {showProjection ? <Eye size={20} /> : <EyeOff size={20} />}
                <span className="text-xs font-bold hidden lg:inline">Projection</span>
            </button>

            <button 
                onClick={onTogglePause}
                className={`p-3 rounded-full border shadow-lg transition-transform active:scale-95 hidden md:block ${isPlaying ? 'bg-amber-500/90 text-white border-amber-400 hover:bg-amber-500' : 'bg-emerald-600/90 text-white border-emerald-500 hover:bg-emerald-500'}`}
                title={isPlaying ? "Pause Animation" : "Resume Animation"}
            >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>

            <button 
                onClick={onPlay}
                className="bg-slate-800/80 backdrop-blur text-white p-3 rounded-full hover:bg-slate-700 border border-slate-600 shadow-lg hidden md:block"
                title="Restart Pattern"
            >
                <RotateCcw size={20} />
            </button>

            <button 
                onClick={onToggleRecording}
                className={`backdrop-blur p-3 rounded-full border shadow-lg transition-all ${isRecording ? 'bg-red-600 text-white border-red-500 animate-pulse' : 'bg-slate-800/80 text-white border-slate-600 hover:bg-slate-700'}`}
                title={isRecording ? "Stop Recording" : "Record Video"}
            >
                {isRecording ? <Square size={20} fill="currentColor" /> : <Video size={20} />}
            </button>

            <button 
                onClick={onDownload}
                className="bg-slate-800/80 backdrop-blur text-white p-3 rounded-full hover:bg-slate-700 border border-slate-600 shadow-lg"
                title="Download Snapshot"
            >
                <Download size={20} />
            </button>
        </div>
    );
};
