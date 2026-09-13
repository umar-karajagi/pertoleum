import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  Eye, 
  EyeOff
} from 'lucide-react';
import { ROADMAP_DAYS } from '../../data/roadmapDays';
import { useCareer } from '../../context/CareerContext';

interface InterviewBootcampViewProps {
  setActiveView: (view: string) => void;
}

export const InterviewBootcampView: React.FC<InterviewBootcampViewProps> = ({ setActiveView }) => {
  const { setCurrentDay } = useCareer();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(90);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Aggregate all interview questions from across the 90 days
  const allInterviewQuestions = useMemo(() => {
    const list: {
      dayNumber: number;
      category: string;
      categoryLabel: string;
      id: string;
      question: string;
      whyAsked: string;
      modelAnswer: string;
      keyPoints: string[];
      followUps?: string[];
    }[] = [];

    ROADMAP_DAYS.forEach(day => {
      if (day.interview?.question) {
        const qObj = typeof day.interview.question === 'object' ? day.interview.question : {};
        const qText = typeof day.interview.question === 'string' ? day.interview.question : (qObj.question || '');
        list.push({
          dayNumber: day.dayNumber,
          category: day.category,
          categoryLabel: day.categoryLabel,
          id: qObj.id || `interview-d${day.dayNumber}`,
          question: qText,
          whyAsked: qObj.whyAsked || 'Evaluates practical engineering comprehension, problem-solving structure, and communication skills.',
          modelAnswer: qObj.modelAnswer || day.interview.sampleAnswer || '',
          keyPoints: qObj.keyPoints || (day.interview.conceptCheck ? [day.interview.conceptCheck] : []),
          followUps: qObj.followUps
        });
      }
    });

    return list;
  }, []);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return allInterviewQuestions;
    return allInterviewQuestions.filter(q => q.category === selectedCategory);
  }, [allInterviewQuestions, selectedCategory]);

  const activeQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleNext = () => {
    setIsAnswerRevealed(false);
    setIsTimerRunning(false);
    setTimerSeconds(90);
    setCurrentIndex(prev => (prev + 1) % filteredQuestions.length);
  };

  const handlePrev = () => {
    setIsAnswerRevealed(false);
    setIsTimerRunning(false);
    setTimerSeconds(90);
    setCurrentIndex(prev => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  // Timer tick
  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Technical & Behavioral Defense Drills</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Petroleum Interview Bootcamp
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl pt-1">
              {allInterviewQuestions.length} curated technical interview scenarios from reservoir physics to rigsite well control and behavioral STAR responses. Practice answering out loud before revealing the model defense.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                setCurrentDay(87);
                setActiveView('day-view');
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
            >
              Days 87–89 Bootcamp
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 text-xs font-semibold">
          <button
            onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); setIsAnswerRevealed(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Questions ({allInterviewQuestions.length})
          </button>
          <button
            onClick={() => { setSelectedCategory('reservoir'); setCurrentIndex(0); setIsAnswerRevealed(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === 'reservoir' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Reservoir Engineering
          </button>
          <button
            onClick={() => { setSelectedCategory('drilling'); setCurrentIndex(0); setIsAnswerRevealed(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === 'drilling' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Drilling & Well Control
          </button>
          <button
            onClick={() => { setSelectedCategory('production'); setCurrentIndex(0); setIsAnswerRevealed(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === 'production' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Production & Lift
          </button>
          <button
            onClick={() => { setSelectedCategory('formation_evaluation'); setCurrentIndex(0); setIsAnswerRevealed(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedCategory === 'formation_evaluation' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Formation Evaluation
          </button>
        </div>
      </div>

      {/* Main Flashcard Card */}
      {activeQ ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          
          {/* Card Meta & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono font-bold">
                Question {currentIndex + 1} of {filteredQuestions.length}
              </span>
              <span className="text-slate-400 font-mono">
                From Day {activeQ.dayNumber} ({activeQ.categoryLabel})
              </span>
            </div>

            {/* Speaking Timer */}
            <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-white font-bold">{timerSeconds}s</span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-[10px] uppercase font-bold text-amber-400 hover:underline pl-1"
              >
                {isTimerRunning ? 'Pause' : 'Start Timer'}
              </button>
              <button
                onClick={() => { setIsTimerRunning(false); setTimerSeconds(90); }}
                className="text-slate-500 hover:text-slate-300 pl-1"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              "{activeQ.question}"
            </h2>

            {/* Why Asked Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                Recruiter & Technical Hiring Manager Mindset:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeQ.whyAsked}
              </p>
            </div>
          </div>

          {/* Reveal Button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setIsAnswerRevealed(!isAnswerRevealed)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                isAnswerRevealed
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
              }`}
            >
              {isAnswerRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isAnswerRevealed ? 'Hide Model Answer' : 'Reveal Gold-Standard Model Defense'}</span>
            </button>
          </div>

          {/* Revealed Answer Box */}
          {isAnswerRevealed && (
            <div className="space-y-5 pt-4 border-t border-slate-800">
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono block">
                  Model Answer (What an Experienced Junior Engineer Should Say):
                </span>
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed space-y-2">
                  <p>{activeQ.modelAnswer}</p>
                </div>
              </div>

              {/* Key Technical Points */}
              {activeQ.keyPoints && activeQ.keyPoints.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono block">
                    Must-Mention Technical Points & Terminology:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeQ.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Follow-up Questions */}
              {activeQ.followUps && activeQ.followUps.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider font-mono block">
                    Potential Aggressive Follow-Up Probes:
                  </span>
                  <ul className="space-y-1 list-disc list-inside text-xs text-slate-300 pl-1">
                    {activeQ.followUps.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          )}

          {/* Bottom Card Controls (Prev / Next) */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all flex items-center space-x-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Question</span>
            </button>

            <span className="text-xs text-slate-500 font-mono">
              {currentIndex + 1} of {filteredQuestions.length}
            </span>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all flex items-center space-x-1.5 shadow-md shadow-amber-500/10"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        <div className="text-center py-16 text-slate-500 font-mono">
          No questions in this category.
        </div>
      )}

    </div>
  );
};
