import React, { useState, useMemo } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Printer, 
  RotateCcw, 
  ChevronRight, 
  ShieldCheck
} from 'lucide-react';
import { ROADMAP_DAYS } from '../../data/roadmapDays';
import { useCareer } from '../../context/CareerContext';

interface FinalAssessmentViewProps {
  setActiveView?: (view: string) => void;
}

export const FinalAssessmentView: React.FC<FinalAssessmentViewProps> = () => {
  const { 
    completedDaysCount, 
    technicalMasteryPercent, 
    interviewReadinessPercent,
    submitQuiz,
    dayStates
  } = useCareer();

  const day90 = useMemo(() => {
    return ROADMAP_DAYS.find(d => d.dayNumber === 90);
  }, []);

  const day90State = dayStates[90];
  const questions = day90?.practice?.questions || [];

  // Local answers state for the 15-question capstone
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>(() => {
    return day90State?.quizAnswers || {};
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(day90State?.quizSubmitted || false);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitExam = () => {
    submitQuiz(90, selectedAnswers);
    setIsSubmitted(true);
  };

  const handleRetake = () => {
    setIsSubmitted(false);
    setSelectedAnswers({});
  };

  const scoreStats = useMemo(() => {
    if (questions.length === 0) return { correct: 0, total: 15, percent: 0, passed: false };
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionIndex) {
        correct++;
      }
    });
    const percent = Math.round((correct / questions.length) * 100);
    return {
      correct,
      total: questions.length,
      percent,
      passed: percent >= 85
    };
  }, [questions, selectedAnswers]);

  return (
    <div className="space-y-10 pb-24 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Day 90 Capstone • Graduation Day</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Day 90 Final Assessment & Career Readiness Audit
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl pt-1">
              Test your comprehensive technical mastery across all 90 days. Score 85%+ to unlock your verified Certificate of Professional Mastery and activate your post-bootcamp Next 30 Days execution plan.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center space-x-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print Certificate</span>
            </button>
          </div>
        </div>

        {/* 4 Multi-Dimensional Readiness Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Curriculum Completion</span>
            <span className="text-xl font-bold text-white font-mono">{completedDaysCount} / 90 Days</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: `${(completedDaysCount/90)*100}%` }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Technical Mastery</span>
            <span className="text-xl font-bold text-amber-400 font-mono">{technicalMasteryPercent}%</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-full" style={{ width: `${technicalMasteryPercent}%` }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Flagship Projects</span>
            <span className="text-xl font-bold text-teal-400 font-mono">2 / 2 Published</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-teal-400 h-full" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Overall Interview Ready</span>
            <span className="text-xl font-black text-emerald-400 font-mono">{interviewReadinessPercent}%</span>
            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-400 h-full" style={{ width: `${interviewReadinessPercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* 15-Question Comprehensive Final Exam Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
        
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span>Day 90 Comprehensive 15-Question Exam</span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                Passing Cutoff: 85% (13/15)
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Covers PVT, Vogel, Darcy, Kill Mud Weight, Archie Petrophysics, Horner PTA, Arps DCA, and Python.
            </p>
          </div>

          {isSubmitted && (
            <div className="flex items-center space-x-3 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-mono block">Exam Score</span>
                <span className={`text-base font-black font-mono ${scoreStats.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {scoreStats.correct} / {scoreStats.total} ({scoreStats.percent}%)
                </span>
              </div>
              <button
                onClick={handleRetake}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Retake Exam"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((q, qIdx) => {
            const chosen = selectedAnswers[q.id];
            const isCorrect = chosen === q.correctOptionIndex;

            return (
              <div 
                key={q.id}
                className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider font-mono">
                      Question {qIdx + 1} • {q.topic}
                    </span>
                    <h3 className="text-sm font-semibold text-white leading-relaxed">
                      {q.question}
                    </h3>
                  </div>

                  {isSubmitted && (
                    <span className={`px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider shrink-0 ${
                      isCorrect 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {isCorrect ? 'Correct' : 'Missed'}
                    </span>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosen === optIdx;
                    let optionStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/60';

                    if (isSubmitted) {
                      if (optIdx === q.correctOptionIndex) {
                        optionStyle = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-rose-500/15 border-rose-500/40 text-rose-300 line-through';
                      } else {
                        optionStyle = 'bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start space-x-3 ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on Submission */}
                {isSubmitted && (
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                      Engineering Explanation:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Exam Button */}
        {!isSubmitted && (
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSubmitExam}
              disabled={Object.keys(selectedAnswers).length < questions.length}
              className={`px-8 py-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                Object.keys(selectedAnswers).length === questions.length
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              <span>Submit Final Capstone Exam ({Object.keys(selectedAnswers).length} / {questions.length} Answered)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Official Certificate of Professional Mastery */}
      <div className="bg-slate-900 border-2 border-amber-500/30 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden text-center shadow-2xl">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
            <Award className="w-8 h-8" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono block">
            PETROCOMMAND 90 • VERIFIED CERTIFICATE OF COMPLETION
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificate of Petroleum Engineering Mastery
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            This certifies rigorous completion of the 90-Day Advanced Petroleum Engineering Intensive Curriculum, covering core reservoir physics, drilling operations, production surveillance, and digital petrophysics.
          </p>
        </div>

        <div className="py-4 border-y border-slate-800 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <span className="text-[10px] text-slate-500 uppercase block">Candidate Profile</span>
            <span className="font-bold text-white text-sm">Petroleum Engineer</span>
            <span className="text-slate-400 block text-[10px]">B.Tech, MIT Pune</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase block">Curriculum Rigor</span>
            <span className="font-bold text-amber-400 text-sm">90 Days • 900 Qs</span>
            <span className="text-slate-400 block text-[10px]">90 Calculations Solved</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase block">Projects Certified</span>
            <span className="font-bold text-teal-400 text-sm">DCA & Petrophysics</span>
            <span className="text-slate-400 block text-[10px]">GitHub Verified</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Identity & Rigor Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Ready for Operator & Service Hiring</span>
          </div>
        </div>
      </div>

      {/* "The Next 30 Days" Post-Bootcamp Battle Plan */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <span>The 'Next 30 Days' Post-Bootcamp Execution Plan (Days 91–120)</span>
            <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
              Pure Execution
            </span>
          </h2>
          <p className="text-xs text-slate-400">
            Do not stop your momentum. Follow this daily protocol to convert your rebuilt technical ability into job offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="flex items-center space-x-2 text-amber-400 font-mono font-bold">
              <span className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xs">
                1
              </span>
              <span>Daily Morning Power Hour</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Every morning from 8:00 AM to 9:00 AM: Submit 6 to 8 tailored applications via operator portals (Cairn, SLB, Baker Hughes, Reliance) using Resume A or B with customized project bullets.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="flex items-center space-x-2 text-teal-400 font-mono font-bold">
              <span className="w-6 h-6 rounded bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-xs">
                2
              </span>
              <span>Alumni & Manager Networking</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Send 5 to 10 personalized LinkedIn notes daily to MIT Pune alumni, Lead Reservoir Engineers, and Technical Recruiters using the scripts in the Resume Studio. Target 2 informational calls weekly.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="flex items-center space-x-2 text-purple-400 font-mono font-bold">
              <span className="w-6 h-6 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs">
                3
              </span>
              <span>Interview Readiness Maintenance</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Drill 5 random interview flashcards from the Interview Bootcamp every Tuesday and Thursday evening. Keep formulas (Darcy, Vogel, Archie, KMW) fresh in your active memory.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
