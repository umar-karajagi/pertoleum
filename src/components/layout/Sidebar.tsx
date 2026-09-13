import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Map, 
  AlertCircle, 
  FolderGit2, 
  FileSpreadsheet, 
  Briefcase, 
  FileText, 
  Calculator, 
  GraduationCap, 
  Award
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeView, 
  setActiveView,
  isOpen = true
}) => {
  const { currentDay, revisionQueue, jobApplications, completedDaysCount } = useCareer();
  const unmasteredRevisionCount = revisionQueue.filter(q => !q.mastered).length;
  const activeAppsCount = jobApplications.filter(a => a.status !== 'wishlist').length;

  const navSections = [
    {
      label: "Mission Control",
      items: [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, badge: null },
        { id: "day-view", label: `Day ${currentDay} Mission`, icon: Calendar, badge: `${Math.round((completedDaysCount/90)*100)}%` },
        { id: "roadmap", label: "90-Day Roadmap", icon: Map, badge: "90 Days" },
        { 
          id: "revision-hub", 
          label: "Revision Queue", 
          icon: AlertCircle, 
          badge: unmasteredRevisionCount > 0 ? `${unmasteredRevisionCount}` : null,
          badgeColor: "bg-rose-500 text-white" 
        }
      ]
    },
    {
      label: "Proof of Ability Projects",
      items: [
        { id: "project-1", label: "Project 1: DCA & Optimization", icon: FolderGit2, badge: "Days 71-75" },
        { id: "project-2", label: "Project 2: Well Log Petrophysics", icon: FileSpreadsheet, badge: "Days 76-80" }
      ]
    },
    {
      label: "Career Acceleration",
      items: [
        { id: "resume-studio", label: "Resume Studio & LinkedIn", icon: FileText, badge: "A vs B" },
        { id: "job-tracker", label: "Job Tracker Pipeline", icon: Briefcase, badge: `${activeAppsCount}` },
        { id: "calculators", label: "Petroleum Calculators", icon: Calculator, badge: "4 Solvers" }
      ]
    },
    {
      label: "Interviews & Graduation",
      items: [
        { id: "interview-bootcamp", label: "Interview Bootcamp", icon: GraduationCap, badge: "Days 87-89" },
        { id: "final-assessment", label: "Day 90 Final Assessment", icon: Award, badge: "Day 90" }
      ]
    }
  ];

  return (
    <aside className={`w-64 bg-slate-900 border-r border-slate-800 flex-col shrink-0 min-h-[calc(100vh-4rem)] ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="p-4 flex-1 space-y-6 overflow-y-auto">
        
        {navSections.map((section, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              {section.label}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all group ${
                      isActive 
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <Icon className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-slate-200'
                      }`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${
                        item.badgeColor || (isActive ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400')
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

      </div>

      {/* Footer Profile Mini-Card */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-amber-500 flex items-center justify-center font-bold text-slate-950 text-xs shadow">
            UK
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-slate-200 truncate">Umar Karajagi</p>
            <p className="text-[10px] text-slate-400 truncate">MIT Pune Petroleum Eng.</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
