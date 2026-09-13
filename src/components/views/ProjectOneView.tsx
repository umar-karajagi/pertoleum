import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  TrendingDown, 
  DollarSign, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import { PROJECT_ONE_DATA } from '../../data/projectsData';
import { useCareer } from '../../context/CareerContext';

interface ProjectOneViewProps {
  setActiveView: (view: string) => void;
}

export const ProjectOneView: React.FC<ProjectOneViewProps> = ({ setActiveView }) => {
  const { setCurrentDay } = useCareer();

  // DCA Simulator interactive state
  const [simQi, setSimQi] = useState<number>(550); // Initial rate BOPD
  const [simDiAnnual, setSimDiAnnual] = useState<number>(0.28); // 28% annual nominal decline
  const [simBFactor, setSimBFactor] = useState<number>(0.35); // Hyperbolic exponent
  const [simQel, setSimQel] = useState<number>(15); // Economic limit BOPD
  const simYears = 5; // 5 years forecast

  // Economics interactive state
  const [oilPrice, setOilPrice] = useState<number>(75); // $/bbl
  const [opexPerBbl, setOpexPerBbl] = useState<number>(20); // $/bbl
  const [uptimePercent, setUptimePercent] = useState<number>(90); // 90%

  // Well table filter
  const [wellFilter, setWellFilter] = useState<'all' | 'bad_actor' | 'underperforming'>('all');
  const [selectedWellId, setSelectedWellId] = useState<string>('MIT-02');
  const [expandedStep, setExpandedStep] = useState<number | null>(5);

  // DCA Math Calculations
  const dcaCalculations = useMemo(() => {
    const DiMonthly = simDiAnnual / 12;
    const months = simYears * 12;
    const points: { month: number; rate: number; cumSTB: number }[] = [];
    
    let cum = 0;
    let monthsToLimit = months;
    let reachedLimit = false;

    for (let m = 0; m <= months; m++) {
      let rate = 0;
      if (simBFactor === 0) {
        // Exponential
        rate = simQi * Math.exp(-DiMonthly * m);
      } else {
        // Hyperbolic
        rate = simQi / Math.pow(1 + simBFactor * DiMonthly * m, 1 / simBFactor);
      }

      if (rate < simQel && !reachedLimit && m > 0) {
        monthsToLimit = m;
        reachedLimit = true;
      }

      // Approximate cumulative using trapezoidal rule (30.4 days/month)
      if (m > 0) {
        const prevRate = points[m - 1].rate;
        const avgRate = (prevRate + rate) / 2;
        cum += avgRate * 30.4375;
      }

      points.push({
        month: m,
        rate: Math.max(0, rate),
        cumSTB: Math.round(cum)
      });
    }

    // Theoretical EUR to Economic Limit
    let eurTheoretical = 0;
    if (simBFactor === 0) {
      eurTheoretical = (simQi - simQel) / (DiMonthly / 30.4375);
    } else if (simBFactor > 0 && simBFactor < 1) {
      const qiD = simQi;
      const qelD = simQel;
      const DiDaily = DiMonthly / 30.4375;
      eurTheoretical = (Math.pow(qiD, simBFactor) / (DiDaily * (1 - simBFactor))) * 
        (Math.pow(qiD, 1 - simBFactor) - Math.pow(qelD, 1 - simBFactor));
    }

    const currentYearEndRate = points[12]?.rate || 0;
    const currentYearDeclinePct = simQi > 0 ? ((simQi - currentYearEndRate) / simQi) * 100 : 0;

    return {
      points,
      eur: Math.round(eurTheoretical),
      fiveYearCum: points[points.length - 1]?.cumSTB || 0,
      monthsToLimit: reachedLimit ? monthsToLimit : `${simYears * 12}+`,
      yearOneDecline: currentYearDeclinePct.toFixed(1)
    };
  }, [simQi, simDiAnnual, simBFactor, simQel, simYears]);

  // Economic calculations
  const netMarginPerBbl = Math.max(5, oilPrice - opexPerBbl);
  const totalIncrementalBopd = 860;
  const totalCapex = 430000;
  const dailyNetCashFlow = totalIncrementalBopd * (uptimePercent / 100) * netMarginPerBbl;
  const dynamicPaybackDays = dailyNetCashFlow > 0 ? (totalCapex / dailyNetCashFlow).toFixed(1) : 'N/A';
  const dynamicYear1CashFlow = ((dailyNetCashFlow * 365) / 1000000).toFixed(2);

  const filteredWells = useMemo(() => {
    if (!PROJECT_ONE_DATA.sampleWells) return [];
    if (wellFilter === 'all') return PROJECT_ONE_DATA.sampleWells;
    if (wellFilter === 'bad_actor') return PROJECT_ONE_DATA.sampleWells.filter(w => w.status === 'BAD ACTOR');
    if (wellFilter === 'underperforming') return PROJECT_ONE_DATA.sampleWells.filter(w => w.status === 'UNDERPERFORMING');
    return PROJECT_ONE_DATA.sampleWells;
  }, [wellFilter]);

  const selectedWell = useMemo(() => {
    return PROJECT_ONE_DATA.sampleWells?.find(w => w.wellId === selectedWellId) || PROJECT_ONE_DATA.sampleWells?.[0];
  }, [selectedWellId]);

  return (
    <div className="space-y-10 pb-20 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
              Project 1 • Days 71–75
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
              Production & Reservoir Surveillance
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setCurrentDay(71);
                setActiveView('day-view');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center space-x-2"
            >
              <span>Jump to Day 71 Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={PROJECT_ONE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 flex items-center space-x-2"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {PROJECT_ONE_DATA.title}
          </h1>
          <p className="text-base text-amber-400 font-medium">
            {PROJECT_ONE_DATA.subtitle}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl pt-2">
            {PROJECT_ONE_DATA.executiveSummary}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-mono font-semibold mr-2">Toolkit:</span>
          {PROJECT_ONE_DATA.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 6 Key Performance Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {PROJECT_ONE_DATA.kpis.map((kpi, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-amber-500/40 transition-all group"
          >
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {kpi.label}
            </span>
            <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block group-hover:scale-105 transition-transform">
              {kpi.value}
            </span>
            <span className="text-[11px] text-slate-400 leading-tight block">
              {kpi.detail}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Workbench Section 1: Arps Decline Curve Simulator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Interactive Arps Decline Curve Simulator</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Live Engine
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Adjust initial rate, nominal decline, and boundary drive exponent to simulate reservoir EUR and cutoff limits.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Estimated EUR</span>
              <span className="text-base font-black text-amber-400 font-mono">
                {(dcaCalculations.eur / 1000).toFixed(0)}k STB
              </span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase block">5-Yr Cum Oil</span>
              <span className="text-base font-black text-emerald-400 font-mono">
                {(dcaCalculations.fiveYearCum / 1000).toFixed(0)}k STB
              </span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-[10px] text-slate-500 font-mono uppercase block">Economic Limit</span>
              <span className="text-base font-black text-rose-400 font-mono">
                {dcaCalculations.monthsToLimit} Mo
              </span>
            </div>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 rounded-xl bg-slate-950 border border-slate-800">
          
          {/* Slider 1: Qi */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Initial Rate (q<sub>i</sub>)</span>
              <span className="text-amber-400 font-mono font-bold">{simQi} BOPD</span>
            </div>
            <input
              type="range"
              min={100}
              max={1500}
              step={25}
              value={simQi}
              onChange={(e) => setSimQi(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>100 BOPD</span>
              <span>1500 BOPD</span>
            </div>
          </div>

          {/* Slider 2: Di Annual */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Annual Decline (D<sub>i</sub>)</span>
              <span className="text-amber-400 font-mono font-bold">{(simDiAnnual * 100).toFixed(0)}% / yr</span>
            </div>
            <input
              type="range"
              min={0.05}
              max={0.60}
              step={0.01}
              value={simDiAnnual}
              onChange={(e) => setSimDiAnnual(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>5% (Gentle)</span>
              <span>60% (Steep)</span>
            </div>
          </div>

          {/* Slider 3: b-factor */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">b-Factor ({simBFactor === 0 ? 'Exp' : simBFactor === 1 ? 'Harm' : 'Hyper'})</span>
              <span className="text-amber-400 font-mono font-bold">{simBFactor.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.0}
              max={0.8}
              step={0.05}
              value={simBFactor}
              onChange={(e) => setSimBFactor(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.0 (Exp)</span>
              <span>0.3-0.5 (Waterflood)</span>
              <span>0.8</span>
            </div>
          </div>

          {/* Slider 4: Economic Limit */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Economic Cutoff (q<sub>el</sub>)</span>
              <span className="text-rose-400 font-mono font-bold">{simQel} BOPD</span>
            </div>
            <input
              type="range"
              min={5}
              max={50}
              step={1}
              value={simQel}
              onChange={(e) => setSimQel(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>5 BOPD</span>
              <span>50 BOPD</span>
            </div>
          </div>

        </div>

        {/* Live SVG Rate vs Time Forecast Curve */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">Oil Production Rate q(t) vs Time (Months)</span>
            <div className="flex items-center space-x-4 font-mono text-[11px]">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-0.5 bg-amber-400 inline-block" />
                <span>Forecast Curve</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-0.5 bg-rose-500 inline-block border-t border-dashed" />
                <span>Economic Cutoff ({simQel} BOPD)</span>
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 h-64 relative overflow-hidden flex flex-col justify-end">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />

              {/* Economic Cutoff Line */}
              {(() => {
                const maxRate = Math.max(simQi * 1.05, 500);
                const yCutoff = 200 - (simQel / maxRate) * 190;
                return (
                  <line 
                    x1="0" 
                    y1={yCutoff} 
                    x2="800" 
                    y2={yCutoff} 
                    stroke="#f43f5e" 
                    strokeWidth="1.5" 
                    strokeDasharray="6 4" 
                  />
                );
              })()}

              {/* Production Curve Polyline */}
              {(() => {
                const maxRate = Math.max(simQi * 1.05, 500);
                const totalMonths = simYears * 12;
                const pathPoints = dcaCalculations.points.map(pt => {
                  const x = (pt.month / totalMonths) * 800;
                  const y = 200 - (pt.rate / maxRate) * 190;
                  return `${x.toFixed(1)},${y.toFixed(1)}`;
                }).join(' ');

                return (
                  <>
                    {/* Area under curve */}
                    <polygon
                      points={`0,200 ${pathPoints} 800,200`}
                      fill="url(#amberGrad)"
                      opacity="0.15"
                    />
                    {/* Line */}
                    <polyline
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      points={pathPoints}
                    />
                  </>
                );
              })()}

              <defs>
                <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Axis Labels */}
            <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-1">
              <span>Month 0 (Now)</span>
              <span>Month 12</span>
              <span>Month 24</span>
              <span>Month 36</span>
              <span>Month 48</span>
              <span>Month 60 (Year 5)</span>
            </div>
          </div>
        </div>

        {/* Petroleum Physics Rationale Box */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-slate-300 space-y-1.5">
          <span className="font-bold text-amber-400 font-mono uppercase tracking-wider block">
            SPE Standard Arps Governance:
          </span>
          <p>
            For mature waterfloods under constant pressure support, the hyperbolic exponent <span className="font-mono text-amber-300 font-semibold">b</span> must mathematically fall between <span className="font-mono text-amber-300 font-semibold">0.0 and 0.5</span>. Values above 0.5 in bounded sandstone waterfloods typically indicate transient boundary conditions or reservoir repressurization and will unsustainably overstate EUR reserves in SEC/SPE-PRMS audits.
          </p>
        </div>
      </div>

      {/* Interactive Section 2: 15-Well Surveillance & Bad Actor Candidates */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span>15-Well Field Surveillance & Workover Candidate Matrix</span>
            </h2>
            <p className="text-xs text-slate-400">
              Diagnostic screening of water encroachment, artificial lift failures, and mechanical candidate ranking.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setWellFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                wellFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              All 4 Selected Candidates
            </button>
            <button
              onClick={() => setWellFilter('bad_actor')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                wellFilter === 'bad_actor' ? 'bg-rose-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Bad Actors (2)
            </button>
            <button
              onClick={() => setWellFilter('underperforming')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                wellFilter === 'underperforming' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              Underperforming (2)
            </button>
          </div>
        </div>

        {/* Wells Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                <th className="py-3 px-3">Well ID</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Current BOPD</th>
                <th className="py-3 px-3">Water Cut</th>
                <th className="py-3 px-3">GOR (scf/bbl)</th>
                <th className="py-3 px-3">Proposed Workover</th>
                <th className="py-3 px-3 text-right">+BOPD</th>
                <th className="py-3 px-3 text-right">Capex ($)</th>
                <th className="py-3 px-3 text-right">Payback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredWells.map((well) => {
                const isSelected = selectedWell?.wellId === well.wellId;
                const isBadActor = well.status === 'BAD ACTOR';
                return (
                  <tr
                    key={well.wellId}
                    onClick={() => setSelectedWellId(well.wellId)}
                    className={`cursor-pointer transition-colors ${
                      isSelected 
                        ? 'bg-amber-500/10 text-white font-medium' 
                        : 'hover:bg-slate-800/40 text-slate-300'
                    }`}
                  >
                    <td className="py-3 px-3 font-mono font-bold text-white flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${isBadActor ? 'bg-rose-500' : 'bg-amber-400'}`} />
                      <span>{well.wellId}</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isBadActor ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {well.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono">{well.currentRate} STB/d</td>
                    <td className="py-3 px-3 font-mono">
                      <span className={well.waterCut > 90 ? 'text-rose-400 font-bold' : ''}>
                        {well.waterCut.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono">{well.gor}</td>
                    <td className="py-3 px-3 text-slate-300 max-w-xs truncate">{well.proposedWorkover}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-emerald-400">+{well.incrementalBopd}</td>
                    <td className="py-3 px-3 text-right font-mono">${(well.capex / 1000).toFixed(0)}k</td>
                    <td className="py-3 px-3 text-right font-mono font-bold text-amber-400">{well.paybackDays.toFixed(1)} d</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Well Drilldown Diagnostic Box */}
        {selectedWell && (
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-3">
                <span className="text-base font-bold text-white font-mono">{selectedWell.wellId} Deep-Dive Diagnostics</span>
                <span className="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                  EUR: {(selectedWell.eurSTB / 1000).toFixed(0)}k STB
                </span>
              </div>
              <div className="text-xs text-amber-400 font-mono font-bold">
                Capital Payback: {selectedWell.paybackDays.toFixed(1)} Days @ $55 Net Margin
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-slate-400 font-mono uppercase text-[10px] font-bold block">
                  Root Cause Diagnosis (Chan WOR Analysis)
                </span>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {selectedWell.diagnosis}
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 font-mono uppercase text-[10px] font-bold block">
                  Engineered Intervention Procedure
                </span>
                <p className="text-slate-200 font-medium leading-relaxed">
                  {selectedWell.proposedWorkover}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Section 3: Dynamic Workover Program Economics Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              Dynamic Workover Program Economic Payback Calculator
            </h2>
            <p className="text-xs text-slate-400">
              Stress-test the $430k 4-well intervention campaign against varying oil prices, OPEX, and field uptime.
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Realized Crude Price</span>
              <span className="text-emerald-400 font-mono font-bold">${oilPrice} / bbl</span>
            </div>
            <input
              type="range"
              min={40}
              max={110}
              step={1}
              value={oilPrice}
              onChange={(e) => setOilPrice(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$40 / bbl</span>
              <span>$110 / bbl</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Lifting Cost (OPEX)</span>
              <span className="text-slate-300 font-mono font-bold">${opexPerBbl} / bbl</span>
            </div>
            <input
              type="range"
              min={10}
              max={40}
              step={1}
              value={opexPerBbl}
              onChange={(e) => setOpexPerBbl(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$10 / bbl</span>
              <span>$40 / bbl</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Facilities Uptime</span>
              <span className="text-amber-400 font-mono font-bold">{uptimePercent}%</span>
            </div>
            <input
              type="range"
              min={75}
              max={98}
              step={1}
              value={uptimePercent}
              onChange={(e) => setUptimePercent(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>75%</span>
              <span>98%</span>
            </div>
          </div>
        </div>

        {/* Dynamic Economic Results Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-slate-950 border border-slate-800">
          <div>
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Net Margin</span>
            <span className="text-xl font-bold text-white font-mono">${netMarginPerBbl.toFixed(1)} / bbl</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Daily Net Revenue</span>
            <span className="text-xl font-bold text-emerald-400 font-mono">${Math.round(dailyNetCashFlow).toLocaleString()} / day</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Capital Payback Period</span>
            <span className="text-xl font-black text-amber-400 font-mono">{dynamicPaybackDays} Days</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Year 1 Net Cash Flow</span>
            <span className="text-xl font-black text-emerald-400 font-mono">${dynamicYear1CashFlow}M</span>
          </div>
        </div>
      </div>

      {/* 12-Step Implementation Workflow */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <span>12-Step Technical Implementation Pipeline</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono border border-slate-700">
              Days 71–75
            </span>
          </h2>
          <p className="text-xs text-slate-400">
            Click each step to inspect technical deliverables, methodologies, and Python algorithms.
          </p>
        </div>

        <div className="space-y-3">
          {PROJECT_ONE_DATA.steps.map((step) => {
            const isExpanded = expandedStep === step.stepNumber;
            return (
              <div 
                key={step.stepNumber}
                className="border border-slate-800 rounded-xl overflow-hidden transition-all bg-slate-950/60"
              >
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {step.stepNumber}
                    </span>
                    <span className="text-sm font-semibold text-slate-200">
                      {step.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-3 border-t border-slate-800/60 text-xs">
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center space-x-2 text-emerald-400 font-mono">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Deliverable: {step.deliverable}</span>
                    </div>
                    {step.codeSnippet && (
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-slate-300 text-[11px] overflow-x-auto">
                        <code>{step.codeSnippet}</code>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
