import React, { useEffect, useState } from 'react';
import { Download, X, Share2 } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check for iOS
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        // Check if not already in standalone mode
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
            setIsVisible(true);
        }

        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            // iOS doesn't support programmatic install, so we just close the modal 
            // (The UI already showed instructions)
            setIsVisible(false);
            return;
        }

        if (!deferredPrompt) return;

        await deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsVisible(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 bg-slate-800 border border-slate-700 p-4 rounded-lg shadow-xl flex flex-col gap-4 animate-in slide-in-from-bottom-2 max-w-sm">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg shrink-0">
                    <Download className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-white">Install App</h3>
                    {isIOS ? (
                        <p className="text-sm text-slate-300">
                            To install on iOS: tap <Share2 className="w-4 h-4 inline mx-1" /> followed by <strong>"Add to Home Screen"</strong>
                        </p>
                    ) : (
                        <p className="text-sm text-slate-300">Add to home screen for better experience</p>
                    )}
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors absolute top-2 right-2"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            {!isIOS && (
                <div className="flex justify-end gap-2">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="px-3 py-1.5 text-sm hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
                    >
                        Later
                    </button>
                    <button
                        onClick={handleInstallClick}
                        className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                        Install
                    </button>
                </div>
            )}
        </div>
    );
}
