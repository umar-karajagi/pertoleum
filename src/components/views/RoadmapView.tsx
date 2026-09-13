import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Search, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';
import { ROADMAP_DAYS } from '../../data/roadmapDays';
import { PHASES } from '../../data/phases';

interface RoadmapViewProps {
  setActiveView: (view: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ setActiveView }) => {
  const { currentDay, setCurrentDay, dayStates } = useCareer();
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    ROADMAP_DAYS.forEach(d => cats.add(d.categoryLabel));
    return Array.from(cats);
  }, []);

  const filteredDays = useMemo(() => {
    return ROADMAP_DAYS.filter(d => {
      if (selectedPhase !== 'all' && d.phaseId !== selectedPhase) return false;
      if (selectedCategory !== 'all' && d.categoryLabel !== selectedCategory) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = d.title.toLowerCase().includes(query);
        const matchesGoal = d.todayGoal.toLowerCase().includes(query);
        const matchesCategory = d.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesGoal && !matchesCategory) return false;
      }
      return true;
    });
  }, [selectedPhase, selectedCategory, searchQuery]);

  const handleOpenDay = (dayNum: number) => {
    setCurrentDay(dayNum);
    setActiveView('day-view');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
          <Calendar className="w-3.5 h-3.5" />
          <span>Full 90-Day Curriculum Matrix</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          The 90-Day Petroleum Career Roadmap
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Explore all 90 days across Phase 1 (Foundation), Phase 2 (Practical Analytics), and Phase 3 (Proof Projects & Interviews). Filter by phase, category, or search specific petroleum concepts.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Phase Buttons */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedPhase('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedPhase === 'all' 
                ? 'bg-amber-500 text-slate-950 font-bold' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            All 90 Days
          </button>
          {PHASES.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPhase(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedPhase === p.id 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Phase {p.id}: {p.title.split('—')[0]}
            </button>
          ))}
        </div>

        {/* Search & Category Filter */}
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search topics (PVT, DCA, Logs...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Categories</option>
            {categories.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Grid of Days */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map((day) => {
          const state = dayStates[day.dayNumber];
          const isCompleted = state?.completed;
          const isCurrent = currentDay === day.dayNumber;

          return (
            <div
              key={day.dayNumber}
              onClick={() => handleOpenDay(day.dayNumber)}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 group ${
                isCurrent 
                  ? 'bg-amber-950/15 border-amber-500/60 shadow-md shadow-amber-500/10' 
                  : isCompleted 
                    ? 'bg-slate-900/90 border-emerald-800/40 hover:border-emerald-700' 
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-slate-800 text-amber-400">
                    DAY {day.dayNumber}
                  </span>

                  <div className="flex items-center space-x-1.5">
                    {isCompleted ? (
                      <span className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    ) : isCurrent ? (
                      <span className="text-[11px] font-mono text-amber-400 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                        Active Today
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">
                        {day.estimatedTotalMinutes}m
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Phase {day.phaseId} • Week {day.weekNumber} • {day.categoryLabel}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {day.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {day.todayGoal}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  {day.practice.questions.length} Practice Qs
                </span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1 font-semibold">
                  <span>Start Day</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
