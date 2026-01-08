
import React from 'react';
import { Play, Pause, RotateCcw, Menu, X } from 'lucide-react';
import { AppIcon } from '../icons/AppIcon';

interface HeaderProps {
    isSidebarOpen: boolean;
    isPlaying: boolean;
    onToggleSidebar: () => void;
    onTogglePause: () => void;
    onPlay: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
    isSidebarOpen, 
    isPlaying,
    onToggleSidebar, 
    onTogglePause,
    onPlay 
}) => {
    return (
        <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 shrink-0 z-50">
            <div className="flex items-center gap-3">
                <AppIcon className="w-8 h-8" />
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    SpiroVerse
                </h1>
            </div>
            <div className="flex gap-4 items-center">
                 <button onClick={onTogglePause} className={isPlaying ? "text-amber-400" : "text-emerald-400"} title={isPlaying ? "Pause" : "Resume"}>
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>
                <button onClick={onPlay} className="text-slate-300" title="Restart Pattern">
                    <RotateCcw size={20} />
                </button>
                <button onClick={onToggleSidebar} className="text-white p-1">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
    );
};
