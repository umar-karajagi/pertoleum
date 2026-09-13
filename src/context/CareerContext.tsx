import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { ROADMAP_DAYS } from '../data/roadmapDays';
import { JobApplication, RevisionQueueItem } from '../types';

interface DayState {
  completed: boolean;
  confidenceRating: number;
  checklist: { [id: string]: boolean };
  quizAnswers: { [questionId: string]: number };
  quizSubmitted: boolean;
  quizScore: number;
  notes: string;
}

interface CareerContextType {
  currentDay: number;
  setCurrentDay: (day: number) => void;
  dayStates: { [dayNumber: number]: DayState };
  toggleChecklistItem: (dayNumber: number, itemId: string) => void;
  setConfidence: (dayNumber: number, rating: number) => void;
  submitQuiz: (dayNumber: number, answers: { [questionId: string]: number }) => void;
  setDayNotes: (dayNumber: number, notes: string) => void;
  markDayCompleted: (dayNumber: number, completed: boolean) => void;
  
  // Revision Queue
  revisionQueue: RevisionQueueItem[];
  markRevisionMastered: (questionId: string) => void;
  removeRevisionItem: (questionId: string) => void;

  // Job Applications
  jobApplications: JobApplication[];
  addJobApplication: (app: Omit<JobApplication, 'id'>) => void;
  updateJobApplication: (id: string, updates: Partial<JobApplication>) => void;
  deleteJobApplication: (id: string) => void;

  // Aggregate Metrics
  completedDaysCount: number;
  technicalMasteryPercent: number;
  projectsCompletedCount: number;
  applicationsSubmittedCount: number;
  activeInterviewsCount: number;
  interviewReadinessPercent: number;
  resetAllProgress: () => void;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);

const STORAGE_KEYS = {
  DAY_STATES: 'petro_day_states_v1',
  CURRENT_DAY: 'petro_current_day_v1',
  REVISION_QUEUE: 'petro_revision_queue_v1',
  JOB_APPLICATIONS: 'petro_job_applications_v1'
};

const SEED_JOB_APPLICATIONS: JobApplication[] = [
  {
    id: "app-1",
    company: "Cairn Oil & Gas (Vedanta)",
    roleTitle: "Production Surveillance Engineer",
    tier: "Tier 1: Domestic Operator",
    location: "Gurgaon / Barmer, India",
    portalUrl: "https://www.cairnindia.com/careers",
    resumeVersion: "A",
    status: "applied",
    dateApplied: "2026-09-10",
    followUpDate: "2026-09-17",
    notes: "Applied via portal with Resume A. Highlighted Project 1 (+860 BOPD DCA workover study) and Barmer waterflood relevance."
  },
  {
    id: "app-2",
    company: "SLB (Schlumberger)",
    roleTitle: "Subsurface Data & Surveillance Analyst",
    tier: "Tier 2: Global Service Technology Hub",
    location: "Pune Technology Center, India",
    portalUrl: "https://careers.slb.com",
    resumeVersion: "B",
    status: "screening",
    dateApplied: "2026-09-08",
    followUpDate: "2026-09-15",
    notes: "Recruiter phone screen scheduled. Interviewer requested review of Python Lasio and Arps curve fitting from GitHub Project 2."
  },
  {
    id: "app-3",
    company: "Baker Hughes",
    roleTitle: "Associate Reservoir Engineer",
    tier: "Tier 2: Global Service Technology Hub",
    location: "Mumbai / Bangalore, India",
    portalUrl: "https://careers.bakerhughes.com",
    resumeVersion: "A",
    status: "outreach_sent",
    dateApplied: "2026-09-11",
    followUpDate: "2026-09-18",
    notes: "Sent LinkedIn outreach note to MIT Pune alumnus (Senior Reservoir Engineer) with link to Volve petrophysics case study."
  },
  {
    id: "app-4",
    company: "Reliance Industries (E&P Upstream)",
    roleTitle: "Petroleum Operations Engineer",
    tier: "Tier 1: Domestic Operator",
    location: "Navi Mumbai / Kakinada, India",
    portalUrl: "https://www.ril.com/careers",
    resumeVersion: "A",
    status: "applied",
    dateApplied: "2026-09-09",
    followUpDate: "2026-09-16",
    notes: "KG-D6 deepwater surveillance team. Requisition #E&P-2026-088."
  },
  {
    id: "app-5",
    company: "ADNOC (Abu Dhabi National Oil Company)",
    roleTitle: "Graduate / Junior Reservoir Engineer",
    tier: "Tier 3: Middle East Operator",
    location: "Abu Dhabi, UAE",
    portalUrl: "https://www.adnoc.ae/en/careers",
    resumeVersion: "B",
    status: "wishlist",
    dateApplied: "",
    followUpDate: "2026-09-15",
    notes: "Reviewing ADNOC offshore brownfield development job posting. Tailoring Resume B with Lasio and waterflood analytics."
  }
];

export const CareerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentDay, setCurrentDayState] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_DAY);
    return saved ? parseInt(saved, 10) : 1;
  });

  const [dayStates, setDayStates] = useState<{ [dayNumber: number]: DayState }>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DAY_STATES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved day states", e);
      }
    }
    // Initialize default states for 90 days
    const initial: { [dayNumber: number]: DayState } = {};
    ROADMAP_DAYS.forEach(d => {
      initial[d.dayNumber] = {
        completed: false,
        confidenceRating: 0,
        checklist: {},
        quizAnswers: {},
        quizSubmitted: false,
        quizScore: 0,
        notes: ""
      };
    });
    return initial;
  });

  const [revisionQueue, setRevisionQueue] = useState<RevisionQueueItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.REVISION_QUEUE);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved revision queue", e);
      }
    }
    // Seed initial revision queue with 2 authentic items for demonstration
    return [
      {
        questionId: "d05-q2",
        dayNumber: 5,
        questionText: "What happens to the Oil Formation Volume Factor (Bo) as reservoir pressure drops below the bubble point pressure (Pb)?",
        topic: "PVT Properties",
        options: [
          "Bo increases indefinitely",
          "Bo decreases as dissolved solution gas flashes out of the liquid, causing the remaining liquid to shrink",
          "Bo remains completely constant",
          "Bo drops immediately to zero"
        ],
        correctOptionIndex: 1,
        explanation: "Below Pb, liberated gas escapes solution, resulting in oil shrinkage and continuous decline in Bo.",
        dateAdded: "2026-09-05",
        reviewCount: 1,
        mastered: false
      },
      {
        questionId: "d42-q3",
        dayNumber: 42,
        questionText: "In a Horner plot, what does the slope 'm' of the middle-time semi-log straight line represent?",
        topic: "Well Testing",
        options: [
          "Reservoir porosity",
          "Permeability-thickness product: kh = (162.6 * q * B * mu) / m",
          "Total well depth",
          "Water cut percentage"
        ],
        correctOptionIndex: 1,
        explanation: "The slope m is inversely proportional to permeability-thickness product (kh).",
        dateAdded: "2026-09-08",
        reviewCount: 0,
        mastered: false
      }
    ];
  });

  const [jobApplications, setJobApplications] = useState<JobApplication[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.JOB_APPLICATIONS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing saved job applications", e);
      }
    }
    return SEED_JOB_APPLICATIONS;
  });

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, currentDay.toString());
  }, [currentDay]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DAY_STATES, JSON.stringify(dayStates));
  }, [dayStates]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REVISION_QUEUE, JSON.stringify(revisionQueue));
  }, [revisionQueue]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.JOB_APPLICATIONS, JSON.stringify(jobApplications));
  }, [jobApplications]);

  const setCurrentDay = (day: number) => {
    if (day >= 1 && day <= 90) {
      setCurrentDayState(day);
    }
  };

  const toggleChecklistItem = (dayNumber: number, itemId: string) => {
    setDayStates(prev => {
      const current = prev[dayNumber] || {
        completed: false,
        confidenceRating: 0,
        checklist: {},
        quizAnswers: {},
        quizSubmitted: false,
        quizScore: 0,
        notes: ""
      };
      const updatedChecklist = {
        ...current.checklist,
        [itemId]: !current.checklist[itemId]
      };
      
      // Auto-check if all items completed
      const dayPlan = ROADMAP_DAYS.find(d => d.dayNumber === dayNumber);
      const totalItems = dayPlan?.checklist ? dayPlan.checklist.length : 5;
      const checkedCount = Object.values(updatedChecklist).filter(Boolean).length;
      const isComplete = checkedCount === totalItems;

      return {
        ...prev,
        [dayNumber]: {
          ...current,
          checklist: updatedChecklist,
          completed: isComplete || current.completed
        }
      };
    });
  };

  const setConfidence = (dayNumber: number, rating: number) => {
    setDayStates(prev => ({
      ...prev,
      [dayNumber]: {
        ...(prev[dayNumber] || {
          completed: false,
          confidenceRating: 0,
          checklist: {},
          quizAnswers: {},
          quizSubmitted: false,
          quizScore: 0,
          notes: ""
        }),
        confidenceRating: rating
      }
    }));
  };

  const submitQuiz = (dayNumber: number, answers: { [questionId: string]: number }) => {
    const dayPlan = ROADMAP_DAYS.find(d => d.dayNumber === dayNumber);
    if (!dayPlan) return;

    const questions = dayPlan.practice.questions;
    let correctCount = 0;
    const newMistakes: RevisionQueueItem[] = [];

    questions.forEach(q => {
      const chosen = answers[q.id];
      const correctIdx = q.correctOptionIndex ?? q.correctIndex ?? 0;
      if (chosen === correctIdx) {
        correctCount++;
      } else {
        // Log to Revision Queue automatically!
        newMistakes.push({
          questionId: q.id,
          dayNumber,
          questionText: q.question,
          topic: q.topic || dayPlan.categoryLabel,
          options: q.options,
          correctOptionIndex: correctIdx,
          explanation: q.explanation,
          dateAdded: new Date().toISOString().split('T')[0],
          reviewCount: 0,
          mastered: false
        });
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passingThreshold = dayPlan.practice.passingScorePercent ?? 80;

    // Update day state
    setDayStates(prev => ({
      ...prev,
      [dayNumber]: {
        ...(prev[dayNumber] || {
          completed: false,
          confidenceRating: 0,
          checklist: {},
          quizAnswers: {},
          quizSubmitted: false,
          quizScore: 0,
          notes: ""
        }),
        quizAnswers: answers,
        quizSubmitted: true,
        quizScore: scorePercent,
        completed: scorePercent >= passingThreshold ? true : (prev[dayNumber]?.completed ?? false)
      }
    }));

    // Append mistakes to Revision Queue (avoid duplicates)
    if (newMistakes.length > 0) {
      setRevisionQueue(prev => {
        const existingIds = new Set(prev.map(item => item.questionId));
        const filteredNew = newMistakes.filter(m => !existingIds.has(m.questionId));
        return [...prev, ...filteredNew];
      });
    }
  };

  const setDayNotes = (dayNumber: number, notes: string) => {
    setDayStates(prev => ({
      ...prev,
      [dayNumber]: {
        ...(prev[dayNumber] || {
          completed: false,
          confidenceRating: 0,
          checklist: {},
          quizAnswers: {},
          quizSubmitted: false,
          quizScore: 0,
          notes: ""
        }),
        notes
      }
    }));
  };

  const markDayCompleted = (dayNumber: number, completed: boolean) => {
    setDayStates(prev => ({
      ...prev,
      [dayNumber]: {
        ...(prev[dayNumber] || {
          completed: false,
          confidenceRating: 0,
          checklist: {},
          quizAnswers: {},
          quizSubmitted: false,
          quizScore: 0,
          notes: ""
        }),
        completed
      }
    }));
  };

  // Revision Queue Handlers
  const markRevisionMastered = (questionId: string) => {
    setRevisionQueue(prev =>
      prev.map(item =>
        item.questionId === questionId
          ? { ...item, mastered: true, reviewCount: item.reviewCount + 1 }
          : item
      )
    );
  };

  const removeRevisionItem = (questionId: string) => {
    setRevisionQueue(prev => prev.filter(item => item.questionId !== questionId));
  };

  // Job Applications Handlers
  const addJobApplication = (app: Omit<JobApplication, 'id'>) => {
    const newApp: JobApplication = {
      ...app,
      id: `app-${Date.now()}`
    };
    setJobApplications(prev => [newApp, ...prev]);
  };

  const updateJobApplication = (id: string, updates: Partial<JobApplication>) => {
    setJobApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, ...updates } : app))
    );
  };

  const deleteJobApplication = (id: string) => {
    setJobApplications(prev => prev.filter(app => app.id !== id));
  };

  const resetAllProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress? This will clear all completed days and quiz results.")) {
      localStorage.removeItem(STORAGE_KEYS.DAY_STATES);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_DAY);
      localStorage.removeItem(STORAGE_KEYS.REVISION_QUEUE);
      localStorage.removeItem(STORAGE_KEYS.JOB_APPLICATIONS);
      window.location.reload();
    }
  };

  // Calculated Metrics
  const completedDaysCount = useMemo(() => {
    return Object.values(dayStates).filter(d => d.completed).length;
  }, [dayStates]);

  const technicalMasteryPercent = useMemo(() => {
    const scoredDays = Object.values(dayStates).filter(d => d.quizSubmitted);
    if (scoredDays.length === 0) return 85; // Baseline default readiness
    const sum = scoredDays.reduce((acc, d) => acc + d.quizScore, 0);
    return Math.round(sum / scoredDays.length);
  }, [dayStates]);

  const projectsCompletedCount = useMemo(() => {
    // Project 1 = Days 71-75, Project 2 = Days 76-80
    const p1Complete = [71, 72, 73, 74, 75].every(d => dayStates[d]?.completed);
    const p2Complete = [76, 77, 78, 79, 80].every(d => dayStates[d]?.completed);
    let count = 0;
    if (p1Complete) count++;
    if (p2Complete) count++;
    return count;
  }, [dayStates]);

  const applicationsSubmittedCount = useMemo(() => {
    return jobApplications.filter(app => app.status !== 'wishlist').length;
  }, [jobApplications]);

  const activeInterviewsCount = useMemo(() => {
    return jobApplications.filter(app => app.status === 'screening' || app.status === 'technical' || app.status === 'offer').length;
  }, [jobApplications]);

  const interviewReadinessPercent = useMemo(() => {
    const dayProgressWeight = (completedDaysCount / 90) * 40; // 40% weight
    const masteryWeight = (technicalMasteryPercent / 100) * 35; // 35% weight
    const projectWeight = (projectsCompletedCount / 2) * 15; // 15% weight
    const unmasteredRevisionPenalty = Math.min(10, revisionQueue.filter(r => !r.mastered).length * 1.5);
    const calculated = Math.round(dayProgressWeight + masteryWeight + projectWeight - unmasteredRevisionPenalty);
    return Math.max(15, Math.min(100, calculated));
  }, [completedDaysCount, technicalMasteryPercent, projectsCompletedCount, revisionQueue]);

  return (
    <CareerContext.Provider
      value={{
        currentDay,
        setCurrentDay,
        dayStates,
        toggleChecklistItem,
        setConfidence,
        submitQuiz,
        setDayNotes,
        markDayCompleted,
        revisionQueue,
        markRevisionMastered,
        removeRevisionItem,
        jobApplications,
        addJobApplication,
        updateJobApplication,
        deleteJobApplication,
        completedDaysCount,
        technicalMasteryPercent,
        projectsCompletedCount,
        applicationsSubmittedCount,
        activeInterviewsCount,
        interviewReadinessPercent,
        resetAllProgress
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error("useCareer must be used within a CareerProvider");
  }
  return context;
};
