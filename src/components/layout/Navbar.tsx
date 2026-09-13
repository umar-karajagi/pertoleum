import React from 'react';
import { 
  Flame, 
  AlertCircle, 
  Calendar, 
  ChevronRight, 
  RotateCcw
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';

interface NavbarProps {
  activeView?: string;
  setActiveView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setActiveView }) => {
  const { 
    currentDay, 
    completedDaysCount, 
    revisionQueue,
    resetAllProgress 
  } = useCareer();

  const unmasteredRevisionCount = revisionQueue.filter(q => !q.mastered).length;
  const progressPercent = Math.round((completedDaysCount / 90) * 100);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand & Mission */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-400/30">
              <Flame className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-white">PetroCommand<span className="text-amber-400">90</span></span>
                <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded">
                  MIT Pune Edition
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                90-Day Petroleum Engineer Career Acceleration Mission
              </p>
            </div>
          </div>

          {/* Center Progress Bar */}
          <div className="hidden md:flex items-center space-x-4 bg-slate-950/60 px-4 py-2 rounded-lg border border-slate-800/80">
            <div className="text-xs">
              <span className="text-slate-400">Mission Progress: </span>
              <span className="font-bold text-amber-400">{completedDaysCount}</span>
              <span className="text-slate-500">/90 Days</span>
            </div>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-teal-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${Math.max(3, progressPercent)}%` }}
              />
            </div>
            <span className="text-xs font-mono font-semibold text-slate-300">{progressPercent}%</span>
          </div>

          {/* Right Action Badges */}
          <div className="flex items-center space-x-3">
            
            {/* Revision Queue Badge */}
            <button 
              onClick={() => setActiveView('revision-hub')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                unmasteredRevisionCount > 0 
                  ? 'bg-rose-950/40 text-rose-300 border-rose-700/60 hover:bg-rose-900/50 animate-pulse' 
                  : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:bg-slate-800'
              }`}
              title="Automatic Revision Queue"
            >
              <AlertCircle className={`w-4 h-4 ${unmasteredRevisionCount > 0 ? 'text-rose-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">Revision Queue</span>
              <span className={`px-1.5 py-0.2 rounded-full font-mono text-xs ${
                unmasteredRevisionCount > 0 ? 'bg-rose-600 text-white font-bold' : 'bg-slate-700 text-slate-300'
              }`}>
                {unmasteredRevisionCount}
              </span>
            </button>

            {/* Quick Jump to Today's Mission */}
            <button
              onClick={() => setActiveView('day-view')}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-md shadow-amber-500/10"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day {currentDay}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Reset option in dropdown or icon */}
            <button
              onClick={resetAllProgress}
              className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors rounded"
              title="Reset progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
