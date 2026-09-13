import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  BookOpen, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  MessageSquare, 
  Briefcase, 
  Star, 
  CheckSquare, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';
import { ROADMAP_DAYS, getDayByNumber } from '../../data/roadmapDays';

interface DayDetailViewProps {
  setActiveView: (view: string) => void;
}

export const DayDetailView: React.FC<DayDetailViewProps> = ({ setActiveView }) => {
  const { 
    currentDay, 
    setCurrentDay, 
    dayStates, 
    toggleChecklistItem, 
    setConfidence, 
    submitQuiz, 
    setDayNotes, 
    markDayCompleted 
  } = useCareer();

  const dayPlan = getDayByNumber(currentDay) || ROADMAP_DAYS[0];
  const dayState = dayStates[currentDay] || {
    completed: false,
    confidenceRating: 0,
    checklist: {},
    quizAnswers: {},
    quizSubmitted: false,
    quizScore: 0,
    notes: ""
  };

  // Local quiz state for current day
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>(
    dayState.quizAnswers || {}
  );
  const [showQuizResults, setShowQuizResults] = useState<boolean>(dayState.quizSubmitted);
  const [notesText, setNotesText] = useState<string>(dayState.notes || "");

  // Handle day switch
  const handleSelectDay = (dayNum: number) => {
    setCurrentDay(dayNum);
    const targetState = dayStates[dayNum];
    setSelectedAnswers(targetState?.quizAnswers || {});
    setShowQuizResults(targetState?.quizSubmitted || false);
    setNotesText(targetState?.notes || "");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (showQuizResults) return; // Prevent changing after submission
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    submitQuiz(currentDay, selectedAnswers);
    setShowQuizResults(true);
  };

  const handleSaveNotes = () => {
    setDayNotes(currentDay, notesText);
  };

  const totalQuestions = dayPlan.practice.questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      
      {/* Top Day Selector Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900/95 border border-slate-800 p-4 rounded-xl shadow-md">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleSelectDay(Math.max(1, currentDay - 1))}
            disabled={currentDay === 1}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 transition-colors"
            title="Previous Day"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <select
            value={currentDay}
            onChange={(e) => handleSelectDay(parseInt(e.target.value, 10))}
            className="bg-slate-950 border border-slate-700 text-amber-400 font-bold font-mono text-sm px-3 py-2 rounded-lg focus:outline-none focus:border-amber-500"
          >
            {ROADMAP_DAYS.map((d) => (
              <option key={d.dayNumber} value={d.dayNumber}>
                Day {d.dayNumber}: {d.title.length > 38 ? d.title.substring(0, 38) + '...' : d.title}
              </option>
            ))}
          </select>

          <button
            onClick={() => handleSelectDay(Math.min(90, currentDay + 1))}
            disabled={currentDay === 90}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 transition-colors"
            title="Next Day"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{dayPlan.estimatedTotalMinutes} mins total</span>
          </div>

          <button
            onClick={() => markDayCompleted(currentDay, !dayState.completed)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all ${
              dayState.completed
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{dayState.completed ? 'Completed' : 'Mark Day Complete'}</span>
          </button>
        </div>
      </div>

      {/* Header Info Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
            PHASE {dayPlan.phaseId}
          </span>
          <span className="px-2.5 py-1 rounded bg-teal-500/15 text-teal-400 font-bold border border-teal-500/30">
            WEEK {dayPlan.weekNumber}
          </span>
          <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {dayPlan.categoryLabel}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Day {dayPlan.dayNumber}: {dayPlan.title}
        </h1>

        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Today's Mission Objective</p>
          <p className="text-sm text-slate-300 leading-relaxed font-medium">
            {dayPlan.todayGoal}
          </p>
        </div>
      </div>

      {/* MODULE 1: LEARN (45 MINS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 1</span>
              <h2 className="text-lg font-bold text-white">Learn & Review</h2>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-mono text-xs font-semibold">
            {dayPlan.learn.durationMinutes} mins
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {dayPlan.learn.summary}
        </p>

        {/* Key Points */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            Core Engineering Principles
          </h3>
          <ul className="space-y-2.5">
            {dayPlan.learn.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Formulas */}
        {dayPlan.learn.coreFormulas && dayPlan.learn.coreFormulas.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">
              Key Governing Equations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dayPlan.learn.coreFormulas.map((form, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-teal-900/40 space-y-1.5">
                  <span className="text-xs font-bold text-teal-300">{form.name}</span>
                  <div className="p-2 rounded bg-slate-900 font-mono text-xs text-amber-300 overflow-x-auto border border-slate-800">
                    {form.formula}
                  </div>
                  <p className="text-[11px] text-slate-400">{form.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Field Insight Callout */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Field & Operational Insight</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            "{dayPlan.learn.fieldInsight}"
          </p>
        </div>
      </section>

      {/* MODULE 2: WATCH OR READ (20 MINS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-400 flex items-center justify-center">
              <ExternalLink className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 2</span>
              <h2 className="text-base font-bold text-white">Watch or Read Assignment</h2>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-mono text-xs font-semibold">
            {dayPlan.watchOrRead?.durationMinutes ?? 20} mins
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-slate-800 text-amber-400">
                {dayPlan.watchOrRead?.type ?? "Technical Text"}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {dayPlan.watchOrRead?.platform ?? "SPE Reference & Core Textbooks"}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-200">
              {dayPlan.watchOrRead?.title ?? (dayPlan.watchRead?.textbooks?.[0]?.title || "Petroleum Engineering Technical Core")}
            </p>
            {dayPlan.watchRead?.textbooks?.[0]?.chapterOrSection && (
              <p className="text-xs text-slate-400 font-mono">
                {dayPlan.watchRead.textbooks[0].chapterOrSection}
              </p>
            )}
          </div>

          <a 
            href={dayPlan.watchOrRead?.url ?? "https://onepetro.org"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-amber-400 font-semibold text-xs flex items-center justify-center space-x-1.5 border border-slate-700 shrink-0 transition-colors"
          >
            <span>Open Reference</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* MODULE 3: PRACTICE QUIZ (30 MINS, 10 QUESTIONS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800 pb-4 gap-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 3</span>
              <h2 className="text-lg font-bold text-white">Daily Practice Test (10 Questions)</h2>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="text-slate-400">Passing: {dayPlan.practice.passingScorePercent}%</span>
            <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-semibold">
              {dayPlan.practice.durationMinutes} mins
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Test your mastery. Any question answered incorrectly is automatically routed to your 
          <span className="text-rose-400 font-semibold"> 🔴 Revision Queue</span> for ongoing drills.
        </p>

        {/* Question Cards */}
        <div className="space-y-6">
          {dayPlan.practice.questions.map((q, qIndex) => {
            const chosenOption = selectedAnswers[q.id];
            const isAnswered = chosenOption !== undefined;
            const isCorrect = isAnswered && chosenOption === q.correctOptionIndex;

            return (
              <div 
                key={q.id}
                className={`p-5 rounded-xl border transition-all space-y-3 ${
                  showQuizResults
                    ? isCorrect
                      ? 'bg-emerald-950/15 border-emerald-800/50'
                      : 'bg-rose-950/15 border-rose-800/50'
                    : 'bg-slate-950/70 border-slate-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold uppercase text-amber-400">
                      Question {qIndex + 1} of {totalQuestions} • {q.topic || dayPlan.categoryLabel}
                    </span>
                    <p className="text-sm font-semibold text-white leading-relaxed">
                      {q.question}
                    </p>
                  </div>

                  {showQuizResults && (
                    <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold shrink-0 ${
                      isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {isCorrect ? 'CORRECT' : 'FAILED'}
                    </span>
                  )}
                </div>

                {/* Options list */}
                <div className="space-y-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosenOption === optIdx;
                    const isTheCorrectOne = showQuizResults && optIdx === q.correctOptionIndex;
                    const isTheWrongOne = showQuizResults && isSelected && !isCorrect;

                    let optClass = "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700";
                    if (isSelected && !showQuizResults) {
                      optClass = "bg-amber-500/10 border-amber-500/50 text-amber-300 font-semibold";
                    } else if (isTheCorrectOne) {
                      optClass = "bg-emerald-500/15 border-emerald-500/60 text-emerald-200 font-semibold";
                    } else if (isTheWrongOne) {
                      optClass = "bg-rose-500/15 border-rose-500/60 text-rose-200";
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all flex items-start space-x-3 ${optClass}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center font-mono text-xs shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation on submit */}
                {showQuizResults && (
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
                    <span className="font-bold text-slate-400 font-mono uppercase">Engineering Rationale:</span>
                    <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                    {!isCorrect && (
                      <p className="text-[11px] text-rose-400 font-semibold pt-1">
                        🔴 Added to Revision Queue for automatic review.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Quiz Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 gap-4">
          <div className="text-xs">
            <span className="text-slate-400">Progress: </span>
            <span className="font-mono font-bold text-white">{answeredCount}/{totalQuestions} Answered</span>
            {showQuizResults && (
              <span className={`ml-3 font-mono font-bold ${
                dayState.quizScore >= (dayPlan.practice.passingScorePercent ?? 80) ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                Score: {dayState.quizScore}% ({dayState.quizScore >= (dayPlan.practice.passingScorePercent ?? 80) ? 'PASSED' : 'REVISION NEEDED'})
              </span>
            )}
          </div>

          <button
            onClick={handleSubmitQuiz}
            disabled={answeredCount < totalQuestions}
            className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs transition-colors shadow-md shadow-amber-500/10"
          >
            {showQuizResults ? 'Re-Submit / Update Score' : 'Submit Practice Test'}
          </button>
        </div>
      </section>

      {/* MODULE 4: CALCULATION (15 MINS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 4</span>
              <h2 className="text-base font-bold text-white">Engineering Calculation Drill</h2>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-mono text-xs font-semibold">
            {dayPlan.calculation.durationMinutes} mins
          </span>
        </div>

        {/* Problem statement */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">Problem Statement</h3>
          <p className="text-sm text-slate-200 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800 whitespace-pre-line">
            {dayPlan.calculation.problemStatement || dayPlan.calculation.problems?.[0]?.questionText || dayPlan.calculation.problems?.[0]?.scenario || "Calculate downhole parameters based on provided reservoir data."}
          </p>
        </div>

        {/* Given values */}
        {((dayPlan.calculation.givenValues && dayPlan.calculation.givenValues.length > 0) || dayPlan.calculation.problems?.[0]?.givenData) && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {dayPlan.calculation.givenValues 
              ? dayPlan.calculation.givenValues.map((g, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="text-slate-500 font-mono text-[10px] block">{g.label}</span>
                    <span className="font-bold text-slate-200 font-mono">{g.value}</span>
                  </div>
                ))
              : Object.entries(dayPlan.calculation.problems?.[0]?.givenData || {}).map(([key, val], idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs">
                    <span className="text-slate-500 font-mono text-[10px] block">{key}</span>
                    <span className="font-bold text-slate-200 font-mono">{val}</span>
                  </div>
                ))
            }
          </div>
        )}

        {/* Step by step solution */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Step-by-Step Derivation</h3>
          <div className="space-y-2 bg-slate-950/90 p-4 rounded-xl border border-slate-800">
            {(dayPlan.calculation.stepByStepSolution || dayPlan.calculation.problems?.[0]?.solutionSteps || ["Substitute given values into governing equation."]).map((step, idx) => (
              <p key={idx} className="text-xs font-mono text-slate-300 leading-relaxed">
                {step}
              </p>
            ))}
          </div>
        </div>

        {/* Final answer banner */}
        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-xs font-mono text-emerald-300 font-bold">
          Final Answer: {dayPlan.calculation.finalAnswer || dayPlan.calculation.problems?.[0]?.finalAnswer || "Verified by analytical solution"}
        </div>

        {/* Engineering significance */}
        {dayPlan.calculation.engineeringSignificance && (
          <p className="text-xs text-slate-400 leading-relaxed italic">
            <span className="font-bold text-slate-300 not-italic font-mono">Practical Significance: </span>
            {dayPlan.calculation.engineeringSignificance}
          </p>
        )}
      </section>

      {/* MODULE 5: INTERVIEW Q&A (15 MINS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 5</span>
              <h2 className="text-base font-bold text-white">Interview Technical Drill</h2>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-mono text-xs font-semibold">
            {dayPlan.interview.durationMinutes} mins
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-purple-400 font-mono uppercase">Interviewer Prompt:</span>
          <p className="text-sm font-bold text-white bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            "{typeof dayPlan.interview.question === 'object' ? dayPlan.interview.question?.question : (dayPlan.interview.question || "Explain the engineering significance of this concept.")}"
          </p>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-400 font-mono uppercase">Model Technical Response:</span>
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            {typeof dayPlan.interview.question === 'object' ? (dayPlan.interview.question?.modelAnswer || dayPlan.interview.sampleAnswer) : (dayPlan.interview.sampleAnswer || "Structure response using physical first principles.")}
          </div>
        </div>

        {(dayPlan.interview.conceptCheck || (typeof dayPlan.interview.question === 'object' && dayPlan.interview.question?.keyPoints)) && (
          <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-800/40 text-xs text-purple-300">
            <span className="font-bold font-mono uppercase">Concept Check: </span>
            {typeof dayPlan.interview.question === 'object' ? (dayPlan.interview.question?.keyPoints?.join(' • ') || dayPlan.interview.conceptCheck) : dayPlan.interview.conceptCheck}
          </div>
        )}
      </section>

      {/* MODULE 6: CAREER ACTION ITEM (20 MINS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">Module 6</span>
              <h2 className="text-base font-bold text-white">Career Acceleration Action</h2>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 font-mono text-xs font-semibold">
            {dayPlan.career.durationMinutes} mins
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
            {dayPlan.career.actionItem || dayPlan.career.actionTitle || (dayPlan.career.instructions ? dayPlan.career.instructions.join(' ') : "Update your career action tracker.")}
          </p>
        </div>
      </section>

      {/* 5-ITEM DAILY CHECKLIST */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/15 text-teal-400 flex items-center justify-center">
              <CheckSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Day {dayPlan.dayNumber} Completion Checklist</h3>
              <p className="text-xs text-slate-400">Complete all checkpoints to finish today's mission.</p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          {(dayPlan.checklist || [
            { id: `d${dayPlan.dayNumber}-c1`, text: "Completed 45m Core Learn Module & Formulas" },
            { id: `d${dayPlan.dayNumber}-c2`, text: "Reviewed Assigned Textbook & Technical References" },
            { id: `d${dayPlan.dayNumber}-c3`, text: "Scored 80%+ on 10 Practice Questions" },
            { id: `d${dayPlan.dayNumber}-c4`, text: "Worked through Step-by-Step Calculation Problem" },
            { id: `d${dayPlan.dayNumber}-c5`, text: "Practiced Interview Response & Career Action Item" }
          ]).map((item) => {
            const isChecked = !!dayState.checklist[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(currentDay, item.id)}
                className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center space-x-3 ${
                  isChecked 
                    ? 'bg-emerald-950/20 border-emerald-600/50 text-emerald-200' 
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={isChecked}
                  onChange={() => {}} // Handled by div click
                  className="w-4 h-4 text-emerald-500 rounded border-slate-700 focus:ring-0 cursor-pointer"
                />
                <span className={isChecked ? 'line-through opacity-80' : ''}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONFIDENCE RATING & NOTES SCRATCHPAD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Confidence rating */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            Topic Confidence Rating
          </h3>
          <p className="text-xs text-slate-400">
            How confident do you feel explaining this topic in an engineering interview?
          </p>

          <div className="flex items-center space-x-2 pt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setConfidence(currentDay, star)}
                className={`p-2 rounded-lg border transition-all ${
                  dayState.confidenceRating >= star 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-sm' 
                    : 'bg-slate-950 border-slate-800 text-slate-600 hover:text-slate-400'
                }`}
              >
                <Star className="w-5 h-5 fill-current" />
              </button>
            ))}
            <span className="text-xs font-mono font-bold text-amber-400 ml-2">
              {dayState.confidenceRating > 0 ? `${dayState.confidenceRating}/5 Stars` : 'Unrated'}
            </span>
          </div>
        </div>

        {/* Engineering notes */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Engineering Notes Scratchpad
            </h3>
            <button
              onClick={handleSaveNotes}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
            >
              Save Notes
            </button>
          </div>

          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            onBlur={handleSaveNotes}
            placeholder="Type your notes, formulas, field observations, or questions for this day..."
            className="w-full h-24 p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500 resize-none font-mono"
          />
        </div>

      </div>

      {/* Bottom Navigation CTA */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={() => handleSelectDay(Math.max(1, currentDay - 1))}
          disabled={currentDay === 1}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 text-xs font-semibold flex items-center space-x-2 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Day {Math.max(1, currentDay - 1)}</span>
        </button>

        <button
          onClick={() => {
            markDayCompleted(currentDay, true);
            if (currentDay < 90) {
              handleSelectDay(currentDay + 1);
            } else {
              setActiveView('dashboard');
            }
          }}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/10 flex items-center space-x-2 transition-all"
        >
          <span>Complete & Advance to Day {Math.min(90, currentDay + 1)}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
