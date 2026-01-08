
import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { SpiroConfig, Complex } from '../../types';
import { Controls } from '../Controls';
import { AppIcon } from '../icons/AppIcon';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  config: SpiroConfig;
  setConfig: React.Dispatch<React.SetStateAction<SpiroConfig>>;
  fourierData?: Complex[];
  setFourierData?: (data: Complex[]) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  config,
  setConfig,
  fourierData,
  setFourierData,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-40 bg-slate-900 border-r border-slate-800
        transition-all duration-300 ease-in-out
        md:relative overflow-hidden
        ${isOpen ? 'translate-x-0 w-96' : '-translate-x-full w-96 md:w-0 md:translate-x-0'}
        flex flex-col flex-shrink-0 shadow-2xl md:shadow-none
      `}>
          <div className="p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                  <AppIcon className="w-8 h-8" />
                  <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap">
                    SpiroVerse
                  </h1>
              </div>
              <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
          </div>
          
          <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
              <div className="w-96"> {/* Container to maintain width during transition */}
                  <Controls 
                      config={config} 
                      setConfig={setConfig} 
                      fourierData={fourierData}
                      setFourierData={setFourierData}
                  />
              </div>
          </div>

          <div className="md:hidden p-4 border-t border-slate-800 bg-slate-900">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
              >
                View Drawing <ChevronRight size={18} />
              </button>
          </div>
      </aside>
    </>
  );
};
