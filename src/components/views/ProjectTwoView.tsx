import React, { useState, useMemo } from 'react';
import { 
  FileSpreadsheet, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Calculator
} from 'lucide-react';
import { PROJECT_TWO_DATA } from '../../data/projectsData';
import { useCareer } from '../../context/CareerContext';

interface ProjectTwoViewProps {
  setActiveView: (view: string) => void;
}

export const ProjectTwoView: React.FC<ProjectTwoViewProps> = ({ setActiveView }) => {
  const { setCurrentDay } = useCareer();

  // Archie & Petrophysical Cutoff Sliders
  const archieA = 1.0;
  const [archieM, setArchieM] = useState<number>(2.0); // Cementation factor
  const [archieN, setArchieN] = useState<number>(2.0); // Saturation exponent
  const [formationRw, setFormationRw] = useState<number>(0.045); // Rw @ 212 deg F
  const vshCutoff = 0.30; // 30% Max shale
  const phieCutoff = 0.10; // 10% Min porosity
  const swCutoff = 0.50; // 50% Max water saturation
  const [patternAcres, setPatternAcres] = useState<number>(160); // 160 acres
  const recFactor = 0.35; // 35% Recovery factor
  const boFactor = 1.25; // Bo bbl/STB

  // Selected hover/active depth
  const [selectedDepth, setSelectedDepth] = useState<number>(8160);
  const [expandedStep, setExpandedStep] = useState<number | null>(4);

  // Raw synthetic log data from project
  const rawCurves = PROJECT_TWO_DATA.syntheticLogCurves || [];

  // Dynamic petrophysical re-calculation based on Archie sliders
  const calculatedLog = useMemo(() => {
    return rawCurves.map(row => {
      // Calculate Sw using user Archie parameters: Sw = [ (a * Rw) / (Rt * phie^m) ]^(1/n)
      const phieClean = Math.max(0.01, row.phie);
      const fRatio = (archieA * formationRw) / (row.rt * Math.pow(phieClean, archieM));
      const dynamicSw = Math.max(0.05, Math.min(1.0, Math.pow(fRatio, 1 / archieN)));

      // Net Pay condition
      const isPayDynamic = (row.vsh <= vshCutoff) && (row.phie >= phieCutoff) && (dynamicSw <= swCutoff) && (row.depth < 8228);

      return {
        ...row,
        sw: dynamicSw,
        isPay: isPayDynamic
      };
    });
  }, [rawCurves, archieA, archieM, archieN, formationRw, vshCutoff, phieCutoff, swCutoff]);

  // Aggregate Reservoir Statistics & Volumetric OOIP
  const petroMetrics = useMemo(() => {
    const grossInterval = calculatedLog.length > 0 
      ? calculatedLog[calculatedLog.length - 1].depth - calculatedLog[0].depth + 10 
      : 120;
    
    // Each depth row represents approximately 10 ft step
    const payRows = calculatedLog.filter(r => r.isPay);
    const netPayFt = payRows.length * 10;
    const ntg = grossInterval > 0 ? (netPayFt / grossInterval) * 100 : 0;

    const avgPhi = payRows.length > 0 
      ? payRows.reduce((acc, r) => acc + r.phie, 0) / payRows.length 
      : 0.214;

    const avgSw = payRows.length > 0 
      ? payRows.reduce((acc, r) => acc + r.sw, 0) / payRows.length 
      : 0.182;

    const avgSo = 1 - avgSw;

    // Volumetric OOIP: OOIP = 7758 * A * h * Phi * (1 - Sw) / Bo
    const ooipSTB = (7758 * patternAcres * netPayFt * avgPhi * avgSo) / boFactor;
    const recoverableSTB = ooipSTB * recFactor;

    return {
      netPayFt,
      grossInterval,
      ntg: ntg.toFixed(1),
      avgPhi: (avgPhi * 100).toFixed(1),
      avgSw: (avgSw * 100).toFixed(1),
      avgSo: (avgSo * 100).toFixed(1),
      ooipMMSTB: (ooipSTB / 1000000).toFixed(2),
      recoverableMMSTB: (recoverableSTB / 1000000).toFixed(2)
    };
  }, [calculatedLog, patternAcres, boFactor, recFactor]);

  const activeDepthData = useMemo(() => {
    return calculatedLog.find(r => r.depth === selectedDepth) || calculatedLog[0];
  }, [calculatedLog, selectedDepth]);

  return (
    <div className="space-y-10 pb-20 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
              Project 2 • Days 76–80
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700">
              Formation Evaluation & Petrophysics
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setCurrentDay(76);
                setActiveView('day-view');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all flex items-center space-x-2"
            >
              <span>Jump to Day 76 Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={PROJECT_TWO_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 transition-all shadow-lg shadow-teal-500/20 flex items-center space-x-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {PROJECT_TWO_DATA.title}
          </h1>
          <p className="text-base text-teal-400 font-medium">
            {PROJECT_TWO_DATA.subtitle}
          </p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl pt-2">
            {PROJECT_TWO_DATA.executiveSummary}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <span className="text-xs text-slate-400 font-mono font-semibold mr-2">Petrophysical Engine:</span>
          {PROJECT_TWO_DATA.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-teal-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 6 Key Petrophysical Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Net Pay</span>
          <span className="text-xl sm:text-2xl font-black text-teal-400 font-mono block">{petroMetrics.netPayFt} ft</span>
          <span className="text-[11px] text-slate-400 block">Across {petroMetrics.grossInterval} ft gross</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Net-to-Gross</span>
          <span className="text-xl sm:text-2xl font-black text-white font-mono block">{petroMetrics.ntg}%</span>
          <span className="text-[11px] text-slate-400 block">Hugin shallow marine</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Avg Pay Porosity</span>
          <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono block">{petroMetrics.avgPhi}%</span>
          <span className="text-[11px] text-slate-400 block">Effective pore volume</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Water Saturation</span>
          <span className="text-xl sm:text-2xl font-black text-sky-400 font-mono block">{petroMetrics.avgSw}%</span>
          <span className="text-[11px] text-slate-400 block">So = {petroMetrics.avgSo}% hydrocarbon</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Volumetric OOIP</span>
          <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono block">{petroMetrics.ooipMMSTB}M</span>
          <span className="text-[11px] text-slate-400 block">STB in 160-ac pattern</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-teal-500/40 transition-all">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">EUR Reserves</span>
          <span className="text-xl sm:text-2xl font-black text-purple-400 font-mono block">{petroMetrics.recoverableMMSTB}M</span>
          <span className="text-[11px] text-slate-400 block">@ {petroMetrics.ntg}% recovery</span>
        </div>
      </div>

      {/* Interactive 4-Track Composite Well Log Viewer */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Interactive 4-Track Composite Well Log Viewer</span>
                <span className="text-xs px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono">
                  Well 15/9-F-11 A
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Depth-aligned wireline evaluation across 8,100–8,280 ft MD. Click any depth to inspect point petrophysics.
              </p>
            </div>
          </div>

          {/* Point Readout Box */}
          {activeDepthData && (
            <div className="flex items-center space-x-3 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 font-mono text-xs">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Selected MD</span>
                <span className="font-bold text-white">{activeDepthData.depth} ft</span>
              </div>
              <div className="h-5 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">GR</span>
                <span className="font-bold text-emerald-400">{activeDepthData.gr.toFixed(0)} API</span>
              </div>
              <div className="h-5 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Rt</span>
                <span className="font-bold text-amber-400">{activeDepthData.rt.toFixed(1)} Ω·m</span>
              </div>
              <div className="h-5 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Φe</span>
                <span className="font-bold text-purple-400">{(activeDepthData.phie * 100).toFixed(1)}%</span>
              </div>
              <div className="h-5 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Sw</span>
                <span className="font-bold text-sky-400">{(activeDepthData.sw * 100).toFixed(1)}%</span>
              </div>
              <div className="h-5 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Flag</span>
                <span className={`font-bold ${activeDepthData.isPay ? 'text-amber-400' : 'text-slate-500'}`}>
                  {activeDepthData.isPay ? 'NET PAY' : 'NON-PAY'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Tracks Header Grid */}
        <div className="grid grid-cols-12 gap-2 text-center text-[11px] font-mono font-bold uppercase tracking-wider py-2 bg-slate-950 rounded-xl border border-slate-800">
          <div className="col-span-2 text-slate-400">Track 1: GR / CALI</div>
          <div className="col-span-2 text-slate-400">Depth (MD)</div>
          <div className="col-span-3 text-amber-400">Track 2: Resistivity (Rt)</div>
          <div className="col-span-3 text-purple-400">Track 3: Porosity (RHOB/NPHI)</div>
          <div className="col-span-2 text-teal-400">Track 4: Net Pay & Sw</div>
        </div>

        {/* Interactive Log Rows */}
        <div className="space-y-1 font-mono text-xs max-h-[500px] overflow-y-auto pr-2">
          {calculatedLog.map((row) => {
            const isSelected = row.depth === selectedDepth;
            const isBelowOWC = row.depth >= 8228;

            // Bar widths for visualization
            const grWidth = Math.min(100, (row.gr / 150) * 100);
            const rtWidth = Math.min(100, (Math.log10(Math.max(0.2, row.rt)) / 3) * 100);
            const phiWidth = Math.min(100, (row.phie / 0.35) * 100);
            const swWidth = Math.min(100, row.sw * 100);

            return (
              <div
                key={row.depth}
                onClick={() => setSelectedDepth(row.depth)}
                className={`grid grid-cols-12 gap-2 items-center p-2 rounded-lg cursor-pointer transition-all border ${
                  isSelected 
                    ? 'bg-slate-800 border-teal-500/50 shadow-md' 
                    : 'bg-slate-950/70 border-slate-800/80 hover:bg-slate-800/40'
                }`}
              >
                {/* Track 1: GR (0-150 API) */}
                <div className="col-span-2 space-y-1">
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>GR: {row.gr.toFixed(0)}</span>
                    <span className="text-slate-500">Cali: {row.cali.toFixed(1)}"</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className={`h-full ${row.gr < 60 ? 'bg-amber-400' : 'bg-slate-600'}`} 
                      style={{ width: `${grWidth}%` }} 
                    />
                  </div>
                </div>

                {/* Depth Column */}
                <div className="col-span-2 text-center font-bold text-white">
                  <span className={`px-2 py-0.5 rounded ${row.depth === 8228 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : ''}`}>
                    {row.depth} ft
                  </span>
                  {row.depth === 8228 && (
                    <span className="text-[9px] text-rose-400 block font-normal">OWC 8,228'</span>
                  )}
                </div>

                {/* Track 2: Rt (0.2 - 2000 ohm-m) */}
                <div className="col-span-3 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-amber-400 font-bold">{row.rt.toFixed(1)} Ω·m</span>
                    <span className="text-slate-500">Log Scale</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className={`h-full ${row.rt > 20 ? 'bg-amber-400' : 'bg-sky-500'}`} 
                      style={{ width: `${rtWidth}%` }} 
                    />
                  </div>
                </div>

                {/* Track 3: Density-Neutron Porosity */}
                <div className="col-span-3 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-purple-400 font-bold">Φe: {(row.phie * 100).toFixed(1)}%</span>
                    <span className="text-slate-500">RHOB: {row.rhob.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-purple-500" 
                      style={{ width: `${phiWidth}%` }} 
                    />
                  </div>
                </div>

                {/* Track 4: Net Pay & Water Saturation */}
                <div className="col-span-2 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-sky-400 font-bold">Sw: {(row.sw * 100).toFixed(0)}%</span>
                    <span className={`font-bold ${row.isPay ? 'text-amber-400' : 'text-slate-500'}`}>
                      {row.isPay ? 'PAY' : isBelowOWC ? 'WATER' : 'SHALE'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className={`h-full ${row.isPay ? 'bg-amber-400' : isBelowOWC ? 'bg-sky-500' : 'bg-slate-700'}`} 
                      style={{ width: `${row.isPay ? 100 : swWidth}%` }} 
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Geological Markers Box */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
            <span className="text-slate-300">Clean Hugin Sandstone (GR &lt; 60 API, High Rt)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-slate-600 inline-block" />
            <span className="text-slate-300">Heather / Draupne Shale (GR &gt; 90 API)</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded bg-sky-500 inline-block" />
            <span className="text-slate-300">100% Water Leg below OWC (Rt &lt; 1.5 Ω·m)</span>
          </div>
        </div>
      </div>

      {/* Interactive Archie Parameters & Volumetric Reserves Solver */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">
              Archie Water Saturation & Volumetric OOIP Calibration Solver
            </h2>
            <p className="text-xs text-slate-400">
              Tune cementation exponent (m), saturation exponent (n), formation water resistivity (Rw), and economic cutoffs to observe live impact on Net Pay and OOIP.
            </p>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5 rounded-xl bg-slate-950 border border-slate-800">
          
          {/* Slider 1: m */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Cementation Exponent (m)</span>
              <span className="text-amber-400 font-mono font-bold">{archieM.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={1.7}
              max={2.3}
              step={0.05}
              value={archieM}
              onChange={(e) => setArchieM(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1.70 (Unconsolidated)</span>
              <span>2.0</span>
              <span>2.30</span>
            </div>
          </div>

          {/* Slider 2: n */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Saturation Exponent (n)</span>
              <span className="text-teal-400 font-mono font-bold">{archieN.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={1.7}
              max={2.5}
              step={0.05}
              value={archieN}
              onChange={(e) => setArchieN(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1.70</span>
              <span>2.0 (Water-wet)</span>
              <span>2.5 (Oil-wet)</span>
            </div>
          </div>

          {/* Slider 3: Rw @ Formation Temp */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Water Resistivity (R<sub>w</sub>)</span>
              <span className="text-sky-400 font-mono font-bold">{formationRw.toFixed(3)} Ω·m</span>
            </div>
            <input
              type="range"
              min={0.025}
              max={0.080}
              step={0.005}
              value={formationRw}
              onChange={(e) => setFormationRw(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.025 (Saline)</span>
              <span>0.045 @ 212°F</span>
              <span>0.080</span>
            </div>
          </div>

          {/* Slider 4: Pattern Drainage Area */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-semibold">Pattern Area (A)</span>
              <span className="text-purple-400 font-mono font-bold">{patternAcres} Acres</span>
            </div>
            <input
              type="range"
              min={40}
              max={640}
              step={20}
              value={patternAcres}
              onChange={(e) => setPatternAcres(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>40 ac</span>
              <span>160 ac (1/4 Sec)</span>
              <span>640 ac</span>
            </div>
          </div>

        </div>

        {/* Volumetric Equation Live Math Derivation */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
          <span className="text-amber-400 font-bold uppercase tracking-wider block">
            Volumetric OOIP Mathematical Derivation:
          </span>
          <div className="text-slate-300 space-y-1">
            <p>Formula: OOIP = [7,758 × A × h × Φ × (1 - Sw)] / Bo</p>
            <p className="text-emerald-400">
              Substitution: OOIP = [7,758 × {patternAcres} ac × {petroMetrics.netPayFt} ft × {(parseFloat(petroMetrics.avgPhi)/100).toFixed(3)} × (1 - {(parseFloat(petroMetrics.avgSw)/100).toFixed(3)})] / {boFactor}
            </p>
            <p className="text-white font-bold text-sm">
              = {petroMetrics.ooipMMSTB} MMSTB Original Oil in Place
            </p>
          </div>
        </div>
      </div>

      {/* 10-Step Implementation Workflow */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <span>10-Step Digital Petrophysics Pipeline</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono border border-slate-700">
              Days 76–80
            </span>
          </h2>
          <p className="text-xs text-slate-400">
            Click each step to inspect LAS curve normalization, Archie saturation calibration, and net pay cutoffs.
          </p>
        </div>

        <div className="space-y-3">
          {PROJECT_TWO_DATA.steps.map((step) => {
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
                    <span className="w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono text-xs font-bold flex items-center justify-center shrink-0">
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
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center space-x-2 text-teal-400 font-mono">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Deliverable: {step.deliverable}</span>
                    </div>
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
