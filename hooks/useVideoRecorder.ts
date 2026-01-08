
import React, { useRef, useEffect } from 'react';

interface UseVideoRecorderProps {
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    isRecording: boolean;
    format: string;
    onStop?: () => void;
}

export const useVideoRecorder = ({ canvasRef, isRecording, format, onStop }: UseVideoRecorderProps) => {
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        if (isRecording) {
            try {
                // 30 FPS Capture
                const stream = canvas.captureStream(30);
                
                let mimeType = '';
                let extension = 'webm';

                const formatMap: Record<string, string> = {
                  'mp4': 'video/mp4',
                  'webm-vp9': 'video/webm;codecs=vp9',
                  'webm-vp8': 'video/webm;codecs=vp8'
                };

                const preferredMime = formatMap[format];

                if (preferredMime && MediaRecorder.isTypeSupported(preferredMime)) {
                     mimeType = preferredMime;
                     if (format === 'mp4') extension = 'mp4';
                } else {
                     const fallbacks = [
                         'video/webm;codecs=vp9',
                         'video/webm;codecs=vp8',
                         'video/webm',
                         'video/mp4'
                     ];
                     for (const type of fallbacks) {
                         if (MediaRecorder.isTypeSupported(type)) {
                             mimeType = type;
                             if (type.includes('mp4')) extension = 'mp4';
                             break;
                         }
                     }
                }

                if (!mimeType) {
                    console.error("No supported video mime type found.");
                    return;
                }

                const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 5000000 });
                chunksRef.current = [];
                
                recorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
                };
                
                recorder.onstop = () => {
                    if (chunksRef.current.length === 0) {
                         console.warn("No video data recorded");
                         return;
                    }
                    const blob = new Blob(chunksRef.current, { type: mimeType.split(';')[0] });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = `spiroverse-video-${Date.now()}.${extension}`;
                    document.body.appendChild(a);
                    a.click();
                    setTimeout(() => {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                        if (onStop) onStop();
                    }, 100);
                    chunksRef.current = [];
                };

                recorder.start(100); 
                mediaRecorderRef.current = recorder;
                console.log("Recording started", mimeType);
            } catch(e) {
                console.error("Recording Failed", e);
            }
        } else {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
                console.log("Recording stopped");
            }
        }
        
        return () => {
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
        };
    }, [isRecording, format, canvasRef]);
};