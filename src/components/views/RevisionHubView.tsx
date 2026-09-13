import React, { useState, useMemo } from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Trash2,
  Check,
  ChevronRight
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';

interface RevisionHubViewProps {
  setActiveView: (view: string) => void;
}

export const RevisionHubView: React.FC<RevisionHubViewProps> = ({ setActiveView }) => {
  const { revisionQueue, markRevisionMastered, removeRevisionItem, setCurrentDay } = useCareer();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [revealedAnswers, setRevealedAnswers] = useState<{ [qId: string]: number }>({});

  const topics = useMemo(() => {
    const set = new Set<string>();
    revisionQueue.forEach(item => set.add(item.topic));
    return Array.from(set);
  }, [revisionQueue]);

  const filteredItems = useMemo(() => {
    return revisionQueue.filter(item => {
      if (selectedTopic !== 'all' && item.topic !== selectedTopic) return false;
      return true;
    });
  }, [revisionQueue, selectedTopic]);

  const activeCount = revisionQueue.filter(r => !r.mastered).length;
  const masteredCount = revisionQueue.filter(r => r.mastered).length;

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setRevealedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleJumpToDay = (dayNum: number) => {
    setCurrentDay(dayNum);
    setActiveView('day-view');
  };

  return (
    <div className="space-y-8 pb-16 max-w-5xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Automated Spaced Repetition Engine</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          🔴 Needs Revision Hub
        </h1>

        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Zero manual tracking required. Whenever you answer any practice question incorrectly in your 90-day curriculum, our engine automatically logs it here by topic. Drill these questions until your queue is 100% cleared to guarantee zero technical blind spots in interviews.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-rose-900/40 space-y-1">
          <div className="flex items-center justify-between text-xs text-rose-400 font-semibold font-mono">
            <span>ACTIVE MISTAKES</span>
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold font-mono text-white">{activeCount}</div>
          <p className="text-[11px] text-slate-500">Weak questions needing review</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-emerald-900/40 space-y-1">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold font-mono">
            <span>MASTERED QUESTIONS</span>
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold font-mono text-white">{masteredCount}</div>
          <p className="text-[11px] text-slate-500">Successfully re-tested and cleared</p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold font-mono">
            <span>TOPICS TRACKED</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="text-2xl font-bold font-mono text-white">{topics.length}</div>
          <p className="text-[11px] text-slate-500">Subsurface disciplines with logged items</p>
        </div>
      </div>

      {/* Topic Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedTopic('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedTopic === 'all'
              ? 'bg-amber-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
          }`}
        >
          All Topics ({revisionQueue.length})
        </button>

        {topics.map((t, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTopic(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedTopic === t
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
            }`}
          >
            {t} ({revisionQueue.filter(i => i.topic === t).length})
          </button>
        ))}
      </div>

      {/* Question Cards List */}
      {filteredItems.length === 0 ? (
        <div className="p-12 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">Revision Queue 100% Cleared!</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            You have no active questions flagged for revision in this category. Complete daily practice tests to identify any new knowledge gaps.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const revealedOption = revealedAnswers[item.questionId];
            const isRevealed = revealedOption !== undefined;
            const isCorrect = isRevealed && revealedOption === item.correctOptionIndex;

            return (
              <div 
                key={item.questionId}
                className={`p-6 rounded-2xl border transition-all space-y-4 ${
                  item.mastered 
                    ? 'bg-slate-900/40 border-slate-800/60 opacity-70' 
                    : 'bg-slate-900 border-slate-800 shadow-sm'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                      {item.topic}
                    </span>
                    <button
                      onClick={() => handleJumpToDay(item.dayNumber)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-mono font-semibold flex items-center space-x-1"
                    >
                      <span>From Day {item.dayNumber}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2">
                    {item.mastered ? (
                      <span className="text-xs text-emerald-400 font-mono font-bold flex items-center space-x-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        <Check className="w-3.5 h-3.5" />
                        <span>Mastered</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => markRevisionMastered(item.questionId)}
                        className="px-3 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center space-x-1 transition-colors"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Mark Mastered</span>
                      </button>
                    )}

                    <button
                      onClick={() => removeRevisionItem(item.questionId)}
                      className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove from queue"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question text */}
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {item.questionText}
                </p>

                {/* Interactive options */}
                <div className="space-y-2">
                  {item.options.map((opt, optIdx) => {
                    const isSelected = revealedOption === optIdx;
                    const isTheCorrectOne = isRevealed && optIdx === item.correctOptionIndex;
                    const isTheWrongOne = isRevealed && isSelected && !isCorrect;

                    let optClass = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";
                    if (isTheCorrectOne) {
                      optClass = "bg-emerald-500/15 border-emerald-500/60 text-emerald-200 font-semibold";
                    } else if (isTheWrongOne) {
                      optClass = "bg-rose-500/15 border-rose-500/60 text-rose-200";
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(item.questionId, optIdx)}
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

                {/* Explanation */}
                {isRevealed && (
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
                    <span className="font-bold text-slate-400 font-mono uppercase">Engineering Rationale:</span>
                    <p className="text-slate-300 leading-relaxed">{item.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
