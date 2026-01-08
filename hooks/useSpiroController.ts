
import { useState, useCallback, useEffect } from 'react';
import { SpiroConfig, DEFAULT_CONFIG, Complex, GeneratorMode } from '../types';
import { generateTextPath } from '../utils/textUtils';
import { dft } from '../utils/math';

export const useSpiroController = () => {
  const [config, setConfig] = useState<SpiroConfig>(DEFAULT_CONFIG);
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [redrawTrigger, setRedrawTrigger] = useState(0);
  const [downloadTrigger, setDownloadTrigger] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [fourierData, setFourierData] = useState<Complex[]>([]);
  
  // New State for Recording Modal
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);

  // EFFECT: Auto-generate Fourier data when typing text
  useEffect(() => {
      if (config.generatorMode === GeneratorMode.Text && config.textPhrase) {
          const timeoutId = setTimeout(() => {
              // 1. Generate Points (Scale = 1.0)
              const rawPoints = generateTextPath(config.textPhrase, 1.0);
              
              if (rawPoints.length === 0) {
                  setFourierData([]);
                  return;
              }

              // 2. Downsample for Performance 
              const targetPoints = 600;
              let downsampled = rawPoints;
              if (rawPoints.length > targetPoints) {
                  const step = Math.ceil(rawPoints.length / targetPoints);
                  downsampled = rawPoints.filter((_, i) => i % step === 0);
              }

              // 3. Compute DFT
              const fourier = dft(downsampled);
              
              // 4. Update Data
              setFourierData(fourier);
              
              // 5. Auto-adjust epicycles for readability
              setConfig(prev => ({ ...prev, fourierCount: fourier.length }));
              
          }, 300); // Debounce typing

          return () => clearTimeout(timeoutId);
      }
  }, [config.textPhrase, config.generatorMode]);

  const handlePlay = useCallback(() => {
    setRedrawTrigger(prev => prev + 1);
    setIsPlaying(true);
    if (window.innerWidth <= 768) setSidebarOpen(false);
  }, []);

  const togglePause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const toggleProjection = useCallback(() => {
    setConfig(prev => ({ ...prev, showProjection: !prev.showProjection }));
  }, []);

  const toggleTrace = useCallback(() => {
    setConfig(prev => ({ ...prev, showTrace: !prev.showTrace }));
  }, []);

  const handleDownload = useCallback(() => {
    setDownloadTrigger(prev => prev + 1);
  }, []);

  // Updated Recording Handlers
  const handleOpenRecordingModal = useCallback(() => {
      // If already recording, this acts as a stop button
      if (isRecording) {
          setIsRecording(false);
      } else {
          setIsRecordingModalOpen(true);
      }
  }, [isRecording]);

  const handleStartRecording = useCallback((format: string) => {
      // 1. Set format
      setConfig(prev => ({ ...prev, videoFormat: format }));
      // 2. Enable recording flag
      setIsRecording(true);
      // 3. Reset/Launch animation (Triggers redraw and Canvas remount)
      setRedrawTrigger(prev => prev + 1);
      setIsPlaying(true);
      // 4. Close modal
      setIsRecordingModalOpen(false);
  }, []);

  return {
    config,
    setConfig,
    isSidebarOpen,
    setSidebarOpen,
    redrawTrigger,
    downloadTrigger,
    isPlaying,
    stop,
    isRecording,
    isRecordingModalOpen,
    setIsRecordingModalOpen,
    handlePlay,
    togglePause,
    toggleProjection,
    toggleTrace,
    handleDownload,
    handleOpenRecordingModal,
    handleStartRecording,
    fourierData,
    setFourierData
  };
};
