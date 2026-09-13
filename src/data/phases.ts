import { PhaseId } from '../types';

export interface WeekMeta {
  weekNumber: number;
  title: string;
  daysRange: string;
  focus: string;
  milestone: string;
}

export interface PhaseMeta {
  id: PhaseId;
  title: string;
  tagline: string;
  daysRange: string;
  dayCount: number;
  goal: string;
  weeks: WeekMeta[];
  color: string;
  badge: string;
}

export const PHASES: PhaseMeta[] = [
  {
    id: 1,
    title: "PHASE 1: DAYS 1–30",
    tagline: "REBUILD THE FOUNDATION",
    daysRange: "Days 1 – 30",
    dayCount: 30,
    goal: "Make him comfortable again with the core subjects he should know as a Petroleum Engineer with 1 year of experience: Fundamentals, Reservoir, Drilling, and Production.",
    color: "from-amber-500/20 to-amber-600/5 border-amber-500/40 text-amber-400",
    badge: "Foundation Rebuild",
    weeks: [
      {
        weekNumber: 1,
        title: "Petroleum Engineering Fundamentals",
        daysRange: "Days 1–7",
        focus: "Industry overview, rock properties (porosity, permeability, saturation), Darcy's law, pressure regimes, and PVT behavior.",
        milestone: "Day 7 Weekly Test: 30 technical questions & 'Things I Forgot' diagnostic list."
      },
      {
        weekNumber: 2,
        title: "Reservoir Engineering",
        daysRange: "Days 8–14",
        focus: "Reservoir types, Material Balance Equation (MBE), drive mechanisms, relative permeability, radial flow, and Productivity Index (PI/IPR).",
        milestone: "Day 14 Reservoir Test: 40 questions & technical calculation problems."
      },
      {
        weekNumber: 3,
        title: "Drilling Engineering",
        daysRange: "Days 15–21",
        focus: "Rig systems, BHA, drill strings, drilling fluids & rheology, pore pressure vs fracture gradient, kick detection, and well control.",
        milestone: "Day 21 Drilling Test: 40 scenario-based rig & well control questions."
      },
      {
        weekNumber: 4,
        title: "Production Engineering & Phase 1 Exam",
        daysRange: "Days 22–30",
        focus: "Completions, inflow vs outflow nodal analysis, artificial lift selection (ESP, Gas Lift, Rod Pump), flow assurance, and full revision.",
        milestone: "Day 30 Phase 1 Exam: 75 technical + 10 calculation questions with automated weak topic mapping."
      }
    ]
  },
  {
    id: 2,
    title: "PHASE 2: DAYS 31–60",
    tagline: "BECOME PRACTICAL",
    daysRange: "Days 31 – 60",
    dayCount: 30,
    goal: "Stop only studying theory. Start producing concrete engineering deliverables: Well log interpretation, well testing diagnostics, Excel production decline dashboards, and practical Python for oil & gas.",
    color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/40 text-cyan-400",
    badge: "Practical Skills & Data",
    weeks: [
      {
        weekNumber: 5,
        title: "Well Logging & Formation Evaluation",
        daysRange: "Days 31–40",
        focus: "Gamma ray lithology, resistivity tools, density-neutron crossovers, Archie's water saturation equation, and net pay determination.",
        milestone: "Day 39 Well-Log Mini Test & practical formation interpretation benchmark."
      },
      {
        weekNumber: 6,
        title: "Well Testing + EOR",
        daysRange: "Days 41–50",
        focus: "Pressure transient analysis, Horner drawdown/buildup plots, skin factor, waterflooding recovery, and Tertiary EOR methods (thermal, gas, chemical).",
        milestone: "Day 49 Well Testing & EOR Technical Exam."
      },
      {
        weekNumber: 7,
        title: "Excel + Petroleum Data Analysis",
        daysRange: "Days 51–60",
        focus: "Advanced Excel functions (XLOOKUP, SUMIFS), cleaning field production data, Arps decline curve analysis (DCA), and building a field production dashboard.",
        milestone: "Day 60 Excel & Petroleum Production Data Test + Dashboard completion."
      },
      {
        weekNumber: 8,
        title: "Python for Petroleum Engineers",
        daysRange: "Days 61–70",
        focus: "Practical Python without fluff: NumPy arrays, Pandas DataFrames, cleaning CSV production records, plotting decline curves, and well performance screening.",
        milestone: "Day 70 Petroleum Data Analysis Project code & charts ready for GitHub/portfolio."
      }
    ]
  },
  {
    id: 3,
    title: "PHASE 3: DAYS 71–90",
    tagline: "GET HIRED",
    daysRange: "Days 71 – 90",
    dayCount: 20,
    goal: "Highest priority: Build two portfolio-grade engineering projects, craft dual-target resumes, execute a daily job application & networking engine, and crush the technical interview bootcamp.",
    color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/40 text-emerald-400",
    badge: "Portfolio, Apps & Interviews",
    weeks: [
      {
        weekNumber: 9,
        title: "Project 1: Production Optimization Case Study",
        daysRange: "Days 71–75",
        focus: "12-step realistic field optimization workflow: diagnose declining wells, gas/water coning, nodal fixes, executive report, and 5-min interview pitch.",
        milestone: "Complete Project 1 deliverable with portfolio entry & resume bullet points."
      },
      {
        weekNumber: 10,
        title: "Project 2: Well Log / Reservoir Evaluation Project",
        daysRange: "Days 76–80",
        focus: "10-step log analysis: zonation, GR clay volume, Archie Sw, net-pay cutoffs, reservoir quality assessment, and technical defense slides.",
        milestone: "Complete Project 2 deliverable with portfolio entry & resume bullet points."
      },
      {
        weekNumber: 11,
        title: "Resume, LinkedIn & Job Application Machine",
        daysRange: "Days 81–86",
        focus: "One-page high-impact resume, Resume A (Core O&G) vs Resume B (Petro-Data), LinkedIn profile overhaul, daily 5–10 applications and 2 networking outreaches.",
        milestone: "Active pipeline of 25+ tracked applications and direct recruiter contacts."
      },
      {
        weekNumber: 12,
        title: "Interview Bootcamp & Final Career Assessment",
        daysRange: "Days 87–90",
        focus: "Day 87 Reservoir Interview, Day 88 Drilling/Production Interview, Day 89 Comprehensive Mock Interview, Day 90 Final Assessment & Next 30 Days plan.",
        milestone: "Day 90 Career Score across 6 dimensions & customized 30-day post-bootcamp strategy."
      }
    ]
  }
];
