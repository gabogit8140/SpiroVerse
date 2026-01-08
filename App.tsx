
import React from 'react';
import { useSpiroController } from './hooks/useSpiroController';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Toolbar } from './components/layout/Toolbar';
import { SpiroCanvas } from './components/SpiroCanvas';
import { RecordingModal } from './components/modals/RecordingModal';
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';

const App: React.FC = () => {
  const {
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
  } = useSpiroController();

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-slate-950 overflow-hidden font-sans">
      
      <RecordingModal 
        isOpen={isRecordingModalOpen} 
        onClose={() => setIsRecordingModalOpen(false)}
        onStartRecording={handleStartRecording}
      />

      <Header 
        isSidebarOpen={isSidebarOpen}
        isPlaying={isPlaying}
        onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        onTogglePause={togglePause}
        onPlay={handlePlay}
      />

      <Sidebar 
        isOpen={isSidebarOpen}
        setIsOpen={setSidebarOpen}
        config={config}
        setConfig={setConfig}
        fourierData={fourierData}
        setFourierData={setFourierData}
      />

      <div className="flex-1 relative flex flex-col min-h-0 w-full transition-all duration-300">
        
        {/* Desktop Sidebar Toggle */}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 left-4 z-20 p-2 bg-slate-800/80 backdrop-blur text-white rounded-lg shadow-lg border border-slate-700 hover:bg-slate-700 transition-all hidden md:flex items-center justify-center group"
          title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        >
           {isSidebarOpen ? <PanelLeftClose size={20} className="text-slate-400 group-hover:text-white" /> : <PanelLeftOpen size={20} />}
        </button>

        <Toolbar 
            showProjection={config.showProjection}
            showTrace={config.showTrace}
            isPlaying={isPlaying}
            isRecording={isRecording}
            onToggleProjection={toggleProjection}
            onToggleTrace={toggleTrace}
            onTogglePause={togglePause}
            onPlay={handlePlay}
            onDownload={handleDownload}
            onToggleRecording={handleOpenRecordingModal}
        />
        
        <SpiroCanvas 
            config={config}
            redrawTrigger={redrawTrigger}
            downloadTrigger={downloadTrigger}
            isRecording={isRecording}
            isPlaying={isPlaying}
            onStop={stop}
            isSidebarOpen={isSidebarOpen}
            onOpenSidebar={() => setSidebarOpen(true)}
            fourierData={fourierData}
            setFourierData={setFourierData}
        />
      </div>
    </div>
  );
};

export default App;
