import React from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Award, 
  FolderGit2, 
  Briefcase, 
  TrendingUp, 
  ArrowRight, 
  Flame, 
  Calculator, 
  FileText,
  FileSpreadsheet,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';
import { ROADMAP_DAYS, getDayByNumber } from '../../data/roadmapDays';
import { PHASES } from '../../data/phases';

interface DashboardViewProps {
  setActiveView: (view: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ setActiveView }) => {
  const { 
    currentDay, 
    dayStates, 
    completedDaysCount, 
    technicalMasteryPercent, 
    projectsCompletedCount, 
    applicationsSubmittedCount, 
    activeInterviewsCount, 
    interviewReadinessPercent,
    revisionQueue 
  } = useCareer();

  const currentDayPlan = getDayByNumber(currentDay) || ROADMAP_DAYS[0];
  const currentDayState = dayStates[currentDay] || {
    completed: false,
    confidenceRating: 0,
    checklist: {},
    quizAnswers: {},
    quizSubmitted: false,
    quizScore: 0,
    notes: ""
  };

  const unmasteredRevisionItems = revisionQueue.filter(r => !r.mastered);
  const unmasteredCount = unmasteredRevisionItems.length;

  const kpis = [
    {
      title: "90-Day Progress",
      value: `${completedDaysCount}/90`,
      subtext: `${Math.round((completedDaysCount / 90) * 100)}% Complete`,
      icon: Calendar,
      color: "from-amber-500 to-amber-600",
      textColor: "text-amber-400"
    },
    {
      title: "Technical Mastery",
      value: `${technicalMasteryPercent}%`,
      subtext: "Avg Practice Quiz Score",
      icon: Award,
      color: "from-teal-500 to-teal-600",
      textColor: "text-teal-400"
    },
    {
      title: "Flagship Projects",
      value: `${projectsCompletedCount}/2`,
      subtext: projectsCompletedCount === 2 ? "Both Published on GitHub" : "15-Well DCA & Volve Log",
      icon: FolderGit2,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400"
    },
    {
      title: "Applications Submitted",
      value: `${applicationsSubmittedCount}`,
      subtext: "Tracked in Pipeline",
      icon: Briefcase,
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-indigo-400"
    },
    {
      title: "Active Interviews",
      value: `${activeInterviewsCount}`,
      subtext: "Screening & Technical Rounds",
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-400"
    },
    {
      title: "Interview Readiness",
      value: `${interviewReadinessPercent}%`,
      subtext: "Readiness Index",
      icon: Flame,
      color: "from-orange-500 to-rose-600",
      textColor: "text-orange-400"
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Mission Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>90-Day Petroleum Engineer Career Launchpad</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Rebuild Knowledge <span className="text-amber-400">→</span> Build Proof <span className="text-teal-400">→</span> Land Top Role
            </h1>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Tailored specifically for an MIT Pune Petroleum Engineer with ~1 year experience. 
              Move from forgotten college theory to verified proof of ability (2 GitHub projects), ATS-optimized resumes, and multi-offer interview confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => setActiveView('day-view')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all"
            >
              <span>Resume Day {currentDay} Mission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveView('roadmap')}
              className="px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-700/80 flex items-center justify-center space-x-2 transition-all"
            >
              <span>View 90 Days</span>
            </button>
          </div>
        </div>
      </div>

      {/* 6 KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={idx}
              className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-400 truncate">{kpi.title}</span>
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-sm`}>
                  <Icon className="w-3.5 h-3.5 text-slate-950" />
                </div>
              </div>
              <div>
                <div className={`text-xl font-bold font-mono ${kpi.textColor}`}>{kpi.value}</div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{kpi.subtext}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today's Mission & Revision Queue Alert Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Today's Mission Card (2 cols) */}
        <div className="lg:col-span-2 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-lg bg-amber-500/15 text-amber-400 font-bold font-mono text-sm border border-amber-500/30">
                DAY {currentDayPlan.dayNumber}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                  {currentDayPlan.categoryLabel} • Week {currentDayPlan.weekNumber}
                </span>
                <h2 className="text-lg font-bold text-white leading-tight">
                  {currentDayPlan.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{currentDayPlan.estimatedTotalMinutes} mins</span>
            </div>
          </div>

          <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Today's Mission Objective</p>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {currentDayPlan.todayGoal}
            </p>
          </div>

          {/* 6 Timed Modules Quick Access */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">Daily Execution Modules (In Order)</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">1. Learn (Theory)</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.learn.durationMinutes}m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">2. Watch / Read</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.watchOrRead?.durationMinutes ?? 20}m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">3. Practice (10 Qs)</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.practice.durationMinutes}m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">4. Calculation</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.calculation.durationMinutes}m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">5. Interview Q&A</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.interview.durationMinutes}m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">6. Career Action</span>
                <span className="font-mono text-amber-400 font-semibold">{currentDayPlan.career.durationMinutes}m</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${currentDayState.completed ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
              <span className="text-xs font-semibold text-slate-400">
                {currentDayState.completed ? 'Day Mission Completed!' : 'In Progress Today'}
              </span>
            </div>

            <button
              onClick={() => setActiveView('day-view')}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-colors"
            >
              <span>Open Day {currentDay} Workbench</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Revision Queue Alert Card (1 col) */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Needs Revision Queue
                </h3>
              </div>
              <span className={`px-2 py-0.5 text-xs font-mono font-bold rounded-full ${
                unmasteredCount > 0 ? 'bg-rose-600 text-white' : 'bg-emerald-500/20 text-emerald-400'
              }`}>
                {unmasteredCount} {unmasteredCount === 1 ? 'Topic' : 'Topics'}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Every practice question you answer incorrectly is automatically logged here by topic. No manual tracking needed. Clear your queue before interviews!
            </p>

            {unmasteredCount > 0 ? (
              <div className="space-y-2 mt-2">
                {unmasteredRevisionItems.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-rose-950/60 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-rose-300 font-mono">Day {item.dayNumber} • {item.topic}</span>
                      <span className="text-slate-500 text-[10px]">{item.dateAdded}</span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-2">{item.questionText}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-xs font-bold text-emerald-300">Revision Queue 100% Cleared!</p>
                <p className="text-[11px] text-slate-400">Zero active mistakes logged. Outstanding technical retention.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveView('revision-hub')}
            className={`w-full py-2.5 rounded-lg font-bold text-xs flex items-center justify-center space-x-2 transition-all ${
              unmasteredCount > 0 
                ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20' 
                : 'bg-slate-800 hover:bg-slate-750 text-slate-300'
            }`}
          >
            <span>Drill Weak Topics in Revision Hub</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 3-Phase Roadmap Milestone Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
            90-Day Curriculum Phases
          </h2>
          <button 
            onClick={() => setActiveView('roadmap')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
          >
            <span>Open Interactive Matrix</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PHASES.map((phase) => {
            const phaseDays = ROADMAP_DAYS.filter(d => d.phaseId === phase.id);
            const phaseCompleted = phaseDays.filter(d => dayStates[d.dayNumber]?.completed).length;
            const phasePercent = Math.round((phaseCompleted / phaseDays.length) * 100);

            return (
              <div 
                key={phase.id}
                className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-amber-400">
                      PHASE {phase.id} • {phase.daysRange}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {phaseCompleted}/{phaseDays.length} Days
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {phase.goal}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Progress bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-teal-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(2, phasePercent)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{phase.weeks.length} Weeks Curriculum</span>
                    <span className="font-semibold text-slate-300">{phasePercent}% Complete</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Launch Interactive Workbenches */}
      <div className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
          Interactive Engineering Workbenches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div 
            onClick={() => setActiveView('project-1')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
              Project 1: DCA Simulator
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              15-well production optimization, interactive Arps decline curve slider, and +860 BOPD workover ranking.
            </p>
          </div>

          <div 
            onClick={() => setActiveView('project-2')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">
              Project 2: Log Viewer
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              North Sea Volve wireline petrophysics, 4-track log display, Archie Sw, and 10.85 MMSTB OOIP.
            </p>
          </div>

          <div 
            onClick={() => setActiveView('calculators')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Calculator className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              Petroleum Calculators
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              Solvers for Darcy Radial Flow, Kill Mud Weight / Well Control, Archie Sw, and Vogel IPR.
            </p>
          </div>

          <div 
            onClick={() => setActiveView('resume-studio')}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer transition-all space-y-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
              Resume Studio & LinkedIn
            </h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              Resume A (Core) vs Resume B (Analytics), ATS keyword checkers, and copyable outreach scripts.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
