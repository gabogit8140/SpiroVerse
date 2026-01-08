
import React, { useState, useEffect } from 'react';
import { X, Video, AlertCircle } from 'lucide-react';

interface RecordingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onStartRecording: (format: string) => void;
}

export const RecordingModal: React.FC<RecordingModalProps> = ({ isOpen, onClose, onStartRecording }) => {
    const [format, setFormat] = useState('webm-vp9');
    const [supported, setSupported] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (typeof MediaRecorder === 'undefined') return;
        setSupported({
            'webm-vp9': MediaRecorder.isTypeSupported('video/webm;codecs=vp9'),
            'webm-vp8': MediaRecorder.isTypeSupported('video/webm;codecs=vp8'),
            'mp4': MediaRecorder.isTypeSupported('video/mp4'),
        });
    }, []);

    if (!isOpen) return null;

    const handleStart = () => {
        onStartRecording(format);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Video size={20} className="text-red-500" />
                        Start Recording
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
                
                <div className="p-6 space-y-6">
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-slate-300 block">Select Video Format</label>
                        <div className="grid gap-2">
                            {[
                                { id: 'webm-vp9', label: 'WebM (VP9)', desc: 'Best quality, smaller size. Good for Chrome/Firefox.' },
                                { id: 'mp4', label: 'MP4 (H.264)', desc: 'Best compatibility. Works everywhere (Safari/Mobile).' },
                                { id: 'webm-vp8', label: 'WebM (VP8)', desc: 'Legacy support for older browsers.' },
                            ].map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setFormat(opt.id)}
                                    className={`relative p-3 rounded-xl border text-left transition-all group ${
                                        format === opt.id 
                                        ? 'bg-red-500/10 border-red-500 ring-1 ring-red-500' 
                                        : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={`font-semibold ${format === opt.id ? 'text-red-400' : 'text-slate-200'}`}>
                                            {opt.label}
                                        </span>
                                        {!supported[opt.id] && (
                                            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <AlertCircle size={10} /> Unsupported
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs text-slate-400 group-hover:text-slate-300">
                                        {opt.desc}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-xs text-blue-200">
                        <strong>Note:</strong> Recording will restart the animation from the beginning to capture the full loop.
                    </div>
                </div>

                <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleStart}
                        className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/20 transition-all active:scale-95 flex items-center gap-2"
                    >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Launch & Record
                    </button>
                </div>
            </div>
        </div>
    );
};
