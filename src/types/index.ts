export type PhaseId = 1 | 2 | 3;

export type SubjectCategory = 
  | 'fundamentals'
  | 'reservoir'
  | 'drilling'
  | 'production'
  | 'formation_evaluation'
  | 'well_testing'
  | 'eor'
  | 'excel_data'
  | 'python'
  | 'projects'
  | 'project_1'
  | 'project_2'
  | 'resume_prep'
  | 'resume_linkedin'
  | 'job_applications'
  | 'applications'
  | 'interview_bootcamp'
  | 'interviews'
  | 'capstone'
  | 'assessment'
  | string;

export type ConfidenceLevel = 'none' | 'dont_understand' | 'need_revision' | 'understand' | 'interview_ready';

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex?: number;
  correctOptionIndex?: number;
  explanation: string;
  topic: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface CalculationGivenValue {
  label: string;
  value: string | number;
}

export interface CalculationProblem {
  id?: string;
  title?: string;
  scenario?: string;
  formula?: string;
  givenData?: Record<string, string | number>;
  questionText?: string;
  solutionSteps?: string[];
  finalAnswer?: string;
  inputUnit?: string;
  expectedNumber?: number;
  tolerance?: number;
}

export interface InterviewQuestionItem {
  id?: string;
  question?: string;
  whyAsked?: string;
  modelAnswer?: string;
  keyPoints?: string[];
  followUps?: string[];
}

export interface DayPlan {
  dayNumber: number;
  phaseId: PhaseId;
  weekNumber: number;
  title: string;
  category: SubjectCategory;
  categoryLabel: string;
  todayGoal: string;
  estimatedTotalMinutes: number;
  
  // 6 Sections
  learn: {
    durationMinutes: number;
    summary: string;
    keyPoints: string[];
    coreFormulas?: { name: string; formula: string; explanation: string }[];
    fieldInsight?: string;
  };
  
  watchRead?: {
    textbooks?: { title: string; chapterOrSection: string; note: string }[];
    recommendedTopics?: string[];
    spePapersOrStandards?: string[];
  };

  watchOrRead?: {
    type?: string;
    title?: string;
    url?: string;
    platform?: string;
    durationMinutes?: number;
  };
  
  practice: {
    durationMinutes: number;
    questionCount?: number;
    passingScorePercent?: number;
    questions: PracticeQuestion[];
  };
  
  calculation: {
    durationMinutes: number;
    problemCount?: number;
    problems?: CalculationProblem[];
    problemStatement?: string;
    givenValues?: CalculationGivenValue[];
    stepByStepSolution?: string[];
    finalAnswer?: string;
    engineeringSignificance?: string;
  };
  
  interview: {
    durationMinutes: number;
    question?: InterviewQuestionItem | string;
    sampleAnswer?: string;
    conceptCheck?: string;
    whyAsked?: string;
    modelAnswer?: string;
    keyPoints?: string[];
    followUps?: string[];
  };
  
  career: {
    durationMinutes: number;
    actionTitle?: string;
    instructions?: string[];
    deliverable?: string;
    actionItem?: string;
  };

  checklist?: { id: string; text: string; completed?: boolean }[];
  confidenceRating?: number;

  isTestDay?: boolean;
  testId?: string;
  isProjectDay?: boolean;
  projectId?: string;
}

export interface DailyChecklistState {
  learningCompleted: boolean;
  questionsCompleted: boolean;
  calculationCompleted: boolean;
  interviewAnswered: boolean;
  careerCompleted: boolean;
  [key: string]: boolean;
}

export interface DayProgress {
  dayNumber: number;
  completed: boolean;
  confidence: ConfidenceLevel;
  checklist: DailyChecklistState;
  score?: number;
  completedAt?: string;
  notes?: string;
}

export interface RevisionItem {
  id: string;
  questionId: string;
  dayNumber: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  addedAt: string;
  timesFailed: number;
  resolved: boolean;
}

export interface RevisionQueueItem {
  questionId: string;
  dayNumber: number;
  questionText: string;
  topic: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  dateAdded: string;
  reviewCount: number;
  mastered: boolean;
}

export interface JobApplication {
  id: string;
  company: string;
  roleTitle?: string;
  role?: string;
  tier?: string;
  location: string;
  portalUrl?: string;
  resumeVersion?: 'A' | 'B';
  dateApplied?: string;
  followUpDate?: string;
  status: 'wishlist' | 'outreach_sent' | 'applied' | 'networking' | 'screening' | 'technical' | 'offer' | 'rejected';
  contactPerson?: string;
  contactLinkedIn?: string;
  notes?: string;
  jobLink?: string;
}

export interface TestSubmission {
  testId: string;
  dayNumber: number;
  title: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  weakTopics: string[];
  completedAt: string;
}

export interface ProjectState {
  id: 'project-1' | 'project-2';
  title: string;
  status: 'not_started' | 'in_progress' | 'completed';
  completedSteps: number[];
  notes: string;
  reportSummary?: string;
}

export interface FinalAssessmentScores {
  technicalKnowledge: number;
  practicalSkills: number;
  projects: number;
  resume: number;
  interviewSkills: number;
  jobApplications: number;
  completedAt?: string;
}
