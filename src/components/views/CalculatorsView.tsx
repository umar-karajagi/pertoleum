import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  Info
} from 'lucide-react';
import { CALCULATORS, CalculatorConfig } from '../../data/calculatorsData';

interface CalculatorsViewProps {
  setActiveView?: (view: string) => void;
}

export const CalculatorsView: React.FC<CalculatorsViewProps> = () => {
  const [selectedCalcId, setSelectedCalcId] = useState<string>(CALCULATORS[0].id);

  const activeCalculator: CalculatorConfig = useMemo(() => {
    return CALCULATORS.find(c => c.id === selectedCalcId) || CALCULATORS[0];
  }, [selectedCalcId]);

  // Maintain separate input state per calculator
  const [inputsState, setInputsState] = useState<{ [calcId: string]: { [key: string]: number } }>(() => {
    const initial: { [calcId: string]: { [key: string]: number } } = {};
    CALCULATORS.forEach(c => {
      initial[c.id] = { ...c.defaultInputs };
    });
    return initial;
  });

  const currentInputs = inputsState[activeCalculator.id] || activeCalculator.defaultInputs;

  const handleInputChange = (key: string, value: number) => {
    setInputsState(prev => ({
      ...prev,
      [activeCalculator.id]: {
        ...prev[activeCalculator.id],
        [key]: value
      }
    }));
  };

  const handleResetInputs = () => {
    setInputsState(prev => ({
      ...prev,
      [activeCalculator.id]: { ...activeCalculator.defaultInputs }
    }));
  };

  const results = useMemo(() => {
    return activeCalculator.calculate(currentInputs);
  }, [activeCalculator, currentInputs]);

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Petroleum Engineering Physics Solvers</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Petroleum Engineering Calculators
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl pt-1">
              Field-grade mathematical engines for reservoir deliverability, drilling well control, petrophysics, and production inflow performance with step-by-step derivations.
            </p>
          </div>
        </div>

        {/* 4 Calculator Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800">
          {CALCULATORS.map((calc) => {
            const isSelected = calc.id === selectedCalcId;
            return (
              <button
                key={calc.id}
                onClick={() => setSelectedCalcId(calc.id)}
                className={`p-3.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500/40 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">
                  {calc.category}
                </span>
                <span className={`text-xs font-bold block pt-1 ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                  {calc.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Calculator Main Panel */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
        
        {/* Top Info & Formula */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
              {activeCalculator.category}
            </span>
            <h2 className="text-xl font-extrabold text-white">
              {activeCalculator.name}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              {activeCalculator.description}
            </p>
          </div>

          <button
            onClick={handleResetInputs}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Formula Display Banner */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400 font-mono font-bold uppercase">Governing Equation:</span>
          </div>
          <code className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded bg-slate-900 border border-slate-800">
            {activeCalculator.formulaDisplay}
          </code>
        </div>

        {/* Inputs & Outputs 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Input Parameters
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                Drag slider or type exact value
              </span>
            </div>

            <div className="space-y-5 bg-slate-950 p-5 rounded-xl border border-slate-800">
              {activeCalculator.inputsConfig.map((cfg) => {
                const val = currentInputs[cfg.key] ?? cfg.min;

                return (
                  <div key={cfg.key} className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-slate-200 font-semibold">{cfg.label}</span>
                        <span className="text-slate-400" title={cfg.tooltip}>
                          <Info className="w-3 h-3" />
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5 font-mono">
                        <input
                          type="number"
                          step={cfg.step}
                          min={cfg.min}
                          max={cfg.max}
                          value={val}
                          onChange={(e) => handleInputChange(cfg.key, parseFloat(e.target.value) || 0)}
                          className="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-0.5 text-right text-amber-400 font-bold focus:outline-none focus:border-amber-500 text-xs"
                        />
                        <span className="text-slate-400 text-[11px] w-12">{cfg.unit}</span>
                      </div>
                    </div>

                    <input
                      type="range"
                      min={cfg.min}
                      max={cfg.max}
                      step={cfg.step}
                      value={val}
                      onChange={(e) => handleInputChange(cfg.key, parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>{cfg.min} {cfg.unit}</span>
                      <span>{cfg.max} {cfg.unit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Calculated Outputs & Chart (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono block">
              Calculated Engineering Deliverables
            </span>

            {/* Outputs Cards List */}
            <div className="space-y-3">
              {results.outputs.map((out, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-300">{out.label}</span>
                    <div className="flex items-baseline space-x-1 font-mono">
                      <span className="text-lg font-black text-amber-400">{out.value}</span>
                      <span className="text-xs text-slate-400 font-normal">{out.unit}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {out.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Performance Curve Chart if available (Darcy / Vogel) */}
            {results.chartData && results.chartData.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>Performance Curve (Pwf vs Rate)</span>
                  <span className="text-amber-400 font-bold">Live IPR</span>
                </div>
                <div className="h-44 flex flex-col justify-end pt-2">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    {/* Grid */}
                    <line x1="0" y1="37" x2="400" y2="37" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="112" x2="400" y2="112" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

                    {(() => {
                      const maxX = Math.max(...results.chartData!.map(p => p.x), 100);
                      const maxY = Math.max(...results.chartData!.map(p => p.y), 100);

                      const polyPoints = results.chartData!.map(p => {
                        const x = (p.x / maxX) * 390 + 5;
                        const y = 145 - (p.y / maxY) * 135;
                        return `${x.toFixed(1)},${y.toFixed(1)}`;
                      }).join(' ');

                      return (
                        <>
                          <polygon
                            points={`5,145 ${polyPoints} 395,145`}
                            fill="#f59e0b"
                            opacity="0.1"
                          />
                          <polyline
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                            points={polyPoints}
                          />
                        </>
                      );
                    })()}
                  </svg>
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono pt-1">
                    <span>0 STB/d (Shut-In)</span>
                    <span>Max Deliverability</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Step-by-Step Mathematical Derivation Accordion */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono block">
            Step-by-Step Mathematical Substitution & Derivation:
          </span>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-slate-300">
            {results.steps.map((step, sIdx) => (
              <div key={sIdx} className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold shrink-0">[{sIdx + 1}]</span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
