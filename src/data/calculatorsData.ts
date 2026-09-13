export interface CalculatorConfig {
  id: string;
  name: string;
  category: string;
  description: string;
  formulaDisplay: string;
  defaultInputs: { [key: string]: number };
  inputsConfig: {
    key: string;
    label: string;
    unit: string;
    min: number;
    max: number;
    step: number;
    tooltip: string;
  }[];
  calculate: (inputs: { [key: string]: number }) => {
    outputs: { label: string; value: string; unit: string; explanation: string }[];
    chartData?: { x: number; y: number }[];
    steps: string[];
  };
}

export const CALCULATORS: CalculatorConfig[] = [
  // 1. DARCY RADIAL FLOW CALCULATOR
  {
    id: "darcy-radial",
    name: "Darcy Radial Flow & Skin Deliverability Solver",
    category: "Reservoir Engineering",
    description: "Calculate steady-state radial flow rate, drawdown pressure loss, and the impact of near-wellbore skin damage on well deliverability.",
    formulaDisplay: "q = [0.00708 * k * h * (Pr - Pwf)] / [mu * B * (ln(re/rw) + s)]",
    defaultInputs: {
      permeability: 50.0,
      thickness: 30.0,
      pr: 3200.0,
      pwf: 2400.0,
      viscosity: 1.20,
      fvf: 1.25,
      re: 1000.0,
      rw: 0.35,
      skin: 5.0
    },
    inputsConfig: [
      { key: "permeability", label: "Permeability (k)", unit: "mD", min: 0.1, max: 2000, step: 1, tooltip: "Formation permeability to oil" },
      { key: "thickness", label: "Net Thickness (h)", unit: "ft", min: 1, max: 500, step: 1, tooltip: "Net pay interval thickness" },
      { key: "pr", label: "Reservoir Pressure (Pr)", unit: "psi", min: 500, max: 15000, step: 50, tooltip: "Average drainage area pressure" },
      { key: "pwf", label: "Flowing BHP (Pwf)", unit: "psi", min: 100, max: 15000, step: 50, tooltip: "Bottomhole flowing pressure" },
      { key: "viscosity", label: "Oil Viscosity (mu)", unit: "cP", min: 0.2, max: 50, step: 0.1, tooltip: "In-situ oil viscosity" },
      { key: "fvf", label: "Formation Volume Factor (Bo)", unit: "bbl/STB", min: 1.0, max: 2.5, step: 0.05, tooltip: "Oil formation volume factor" },
      { key: "re", label: "Drainage Radius (re)", unit: "ft", min: 100, max: 5000, step: 50, tooltip: "External boundary radius" },
      { key: "rw", label: "Wellbore Radius (rw)", unit: "ft", min: 0.1, max: 1.5, step: 0.05, tooltip: "Drilled wellbore radius" },
      { key: "skin", label: "Skin Factor (s)", unit: "", min: -5.0, max: 50.0, step: 0.5, tooltip: "Near-wellbore skin (0=clean, >0=damage, <0=stimulated)" }
    ],
    calculate: (inputs) => {
      const { permeability: k, thickness: h, pr, pwf, viscosity: mu, fvf: Bo, re, rw, skin: s } = inputs;
      const drawdown = Math.max(0, pr - pwf);
      const lnRatio = Math.log(re / rw);
      const denominator = mu * Bo * (lnRatio + s);
      const q = denominator > 0 ? (0.00708 * k * h * drawdown) / denominator : 0;
      
      const qIdeal = (0.00708 * k * h * drawdown) / (mu * Bo * lnRatio);
      const deltaPskin = q > 0 ? (141.2 * q * Bo * mu * s) / (k * h) : 0;
      const flowEfficiency = drawdown > 0 ? ((drawdown - deltaPskin) / drawdown) * 100 : 100;
      const productivityIndex = drawdown > 0 ? q / drawdown : 0;

      // Generate rate vs Pwf chart data
      const chartData: { x: number; y: number }[] = [];
      const numSteps = 10;
      for (let i = 0; i <= numSteps; i++) {
        const testPwf = pr - (i / numSteps) * pr;
        const testDrawdown = pr - testPwf;
        const testQ = denominator > 0 ? (0.00708 * k * h * testDrawdown) / denominator : 0;
        chartData.push({ x: Math.round(testQ), y: Math.round(testPwf) });
      }

      return {
        outputs: [
          { label: "Actual Oil Flow Rate (q)", value: q.toFixed(1), unit: "STB/d", explanation: "Delivered surface rate with skin" },
          { label: "Ideal Flow Rate (s = 0)", value: qIdeal.toFixed(1), unit: "STB/d", explanation: "Undamaged well potential" },
          { label: "Skin Pressure Drop", value: deltaPskin.toFixed(1), unit: "psi", explanation: "Drawdown wasted across damaged zone" },
          { label: "Flow Efficiency (FE)", value: Math.max(0, Math.min(100, flowEfficiency)).toFixed(1), unit: "%", explanation: "Ratio of ideal to actual drawdown" },
          { label: "Productivity Index (PI)", value: productivityIndex.toFixed(3), unit: "STB/d/psi", explanation: "Well deliverability index" }
        ],
        chartData,
        steps: [
          `Drawdown (Pr - Pwf) = ${pr} - ${pwf} = ${drawdown.toFixed(1)} psi`,
          `Geometric Factor ln(re / rw) = ln(${re} / ${rw}) = ${lnRatio.toFixed(3)}`,
          `Denominator [mu * Bo * (ln(re/rw) + s)] = ${mu} * ${Bo} * (${lnRatio.toFixed(3)} + ${s}) = ${denominator.toFixed(3)}`,
          `Actual Rate q = (0.00708 * ${k} * ${h} * ${drawdown.toFixed(1)}) / ${denominator.toFixed(3)} = ${q.toFixed(1)} STB/d`,
          `Skin Delta P = (141.2 * ${q.toFixed(1)} * ${Bo} * ${mu} * ${s}) / (${k} * ${h}) = ${deltaPskin.toFixed(1)} psi`
        ]
      };
    }
  },

  // 2. HYDROSTATIC PRESSURE & KILL MUD WEIGHT SOLVER
  {
    id: "well-control",
    name: "Hydrostatic Pressure & Kill Mud Weight Solver",
    category: "Drilling & Well Control",
    description: "Calculate bottomhole hydrostatic pressure, reservoir pore pressure from kick data, required Kill Mud Weight (KMW), Initial Circulating Pressure (ICP), and Final Circulating Pressure (FCP).",
    formulaDisplay: "KMW = Current_MW + SIDPP / (0.052 * TVD)",
    defaultInputs: {
      tvd: 10000.0,
      currentMw: 10.5,
      sidpp: 520.0,
      sicp: 840.0,
      scrp: 650.0,
      pitGain: 25.0
    },
    inputsConfig: [
      { key: "tvd", label: "True Vertical Depth (TVD)", unit: "ft", min: 1000, max: 35000, step: 100, tooltip: "True vertical depth of borehole" },
      { key: "currentMw", label: "Current Mud Weight", unit: "ppg", min: 8.33, max: 20.0, step: 0.1, tooltip: "Density of mud currently in hole" },
      { key: "sidpp", label: "Shut-In Drill Pipe Pressure (SIDPP)", unit: "psi", min: 0, max: 5000, step: 10, tooltip: "Stabilized surface drill pipe pressure" },
      { key: "sicp", label: "Shut-In Casing Pressure (SICP)", unit: "psi", min: 0, max: 7000, step: 10, tooltip: "Stabilized surface casing/annulus pressure" },
      { key: "scrp", label: "Slow Circulating Rate Pressure (SCRP)", unit: "psi", min: 200, max: 2500, step: 25, tooltip: "Kill rate friction pressure at kill pump speed (e.g. 30 SPM)" },
      { key: "pitGain", label: "Pit Gain", unit: "bbl", min: 1, max: 200, step: 1, tooltip: "Total volume influx gained in mud pit" }
    ],
    calculate: (inputs) => {
      const { tvd, currentMw, sidpp, sicp, scrp, pitGain } = inputs;
      const hydrostaticCurrent = 0.052 * currentMw * tvd;
      const porePressure = hydrostaticCurrent + sidpp;
      const porePressureGradient = porePressure / tvd;
      const kmw = currentMw + sidpp / (0.052 * tvd);
      const icp = scrp + sidpp;
      const fcp = scrp * (kmw / currentMw);

      return {
        outputs: [
          { label: "Formation Pore Pressure", value: porePressure.toFixed(1), unit: "psi", explanation: "Total reservoir pore fluid pressure" },
          { label: "Pore Pressure Gradient", value: porePressureGradient.toFixed(4), unit: "psi/ft", explanation: "Subsurface pore pressure gradient" },
          { label: "Kill Mud Weight (KMW)", value: kmw.toFixed(2), unit: "ppg", explanation: "Mud weight needed to balance pore pressure" },
          { label: "Initial Circulating Pressure (ICP)", value: icp.toFixed(1), unit: "psi", explanation: "Drill pipe pressure to start kill circulation" },
          { label: "Final Circulating Pressure (FCP)", value: fcp.toFixed(1), unit: "psi", explanation: "Drill pipe pressure when kill mud hits bit" },
          { label: "Shut-In Casing Annular Pressure (SICP)", value: sicp.toFixed(1), unit: "psi", explanation: "Surface annulus pressure with influx" },
          { label: "Pit Gain Influx Volume", value: pitGain.toFixed(1), unit: "bbl", explanation: "Total reservoir fluid volume gained in pits" }
        ],
        steps: [
          `Current Hydrostatic Pressure = 0.052 * ${currentMw} * ${tvd} = ${hydrostaticCurrent.toFixed(1)} psi`,
          `Formation Pore Pressure = Current Hydrostatic + SIDPP = ${hydrostaticCurrent.toFixed(1)} + ${sidpp} = ${porePressure.toFixed(1)} psi`,
          `Kill Mud Weight KMW = ${currentMw} + ${sidpp} / (0.052 * ${tvd}) = ${currentMw} + ${(sidpp / (0.052 * tvd)).toFixed(2)} = ${kmw.toFixed(2)} ppg`,
          `Initial Circulating Pressure ICP = SCRP + SIDPP = ${scrp} + ${sidpp} = ${icp.toFixed(1)} psi`,
          `Final Circulating Pressure FCP = SCRP * (KMW / Current_MW) = ${scrp} * (${kmw.toFixed(2)} / ${currentMw}) = ${fcp.toFixed(1)} psi`
        ]
      };
    }
  },

  // 3. ARCHIE WATER SATURATION & PETROPHYSICAL SOLVER
  {
    id: "archie-sw",
    name: "Archie Water Saturation & Net Pay Solver",
    category: "Well Logging & Petrophysics",
    description: "Calculate downhole temperature-adjusted Rw, Archie formation factor (F), wet rock resistivity (Ro), water saturation (Sw), and hydrocarbon saturation (Sh).",
    formulaDisplay: "Sw = [ (a * Rw) / (phi^m * Rt) ]^(1/n)",
    defaultInputs: {
      depth: 8200.0,
      surfaceTemp: 60.0,
      tempGradient: 1.60,
      surfaceRw: 0.22,
      surfaceRwTemp: 75.0,
      porosity: 0.22,
      rt: 42.0,
      a: 1.0,
      m: 1.95,
      n: 2.0
    },
    inputsConfig: [
      { key: "depth", label: "Reservoir Depth (TVD)", unit: "ft", min: 500, max: 30000, step: 100, tooltip: "Measured true vertical depth" },
      { key: "surfaceTemp", label: "Surface Ambient Temp", unit: "deg F", min: 32, max: 120, step: 1, tooltip: "Mean surface ambient temperature" },
      { key: "tempGradient", label: "Geothermal Gradient", unit: "deg F/100ft", min: 0.5, max: 4.0, step: 0.1, tooltip: "Subsurface geothermal gradient" },
      { key: "surfaceRw", label: "Lab Water Resistivity (Rw)", unit: "ohm-m", min: 0.01, max: 5.0, step: 0.01, tooltip: "Formation water resistivity measured at surface" },
      { key: "surfaceRwTemp", label: "Lab Rw Measurement Temp", unit: "deg F", min: 50, max: 100, step: 1, tooltip: "Temperature where lab Rw was measured" },
      { key: "porosity", label: "Effective Porosity (phi)", unit: "fraction", min: 0.01, max: 0.45, step: 0.01, tooltip: "Pore volume fraction (0.22 = 22%)" },
      { key: "rt", label: "True Formation Resistivity (Rt)", unit: "ohm-m", min: 0.1, max: 2000, step: 1, tooltip: "Deep uninvaded resistivity log reading" },
      { key: "a", label: "Tortuosity Factor (a)", unit: "", min: 0.5, max: 2.0, step: 0.05, tooltip: "Archie tortuosity constant (usually 1.0)" },
      { key: "m", label: "Cementation Exponent (m)", unit: "", min: 1.3, max: 3.0, step: 0.05, tooltip: "Archie pore geometry exponent (sandstone ~ 2.0)" },
      { key: "n", label: "Saturation Exponent (n)", unit: "", min: 1.5, max: 2.5, step: 0.05, tooltip: "Archie saturation exponent (usually 2.0)" }
    ],
    calculate: (inputs) => {
      const { depth, surfaceTemp, tempGradient, surfaceRw, surfaceRwTemp, porosity: phi, rt, a, m, n } = inputs;
      const resTemp = surfaceTemp + (tempGradient / 100) * depth;
      const resRw = surfaceRw * ((surfaceRwTemp + 6.77) / (resTemp + 6.77));
      const formationFactor = a / Math.pow(phi, m);
      const ro = formationFactor * resRw;
      const swRaw = Math.pow((a * resRw) / (Math.pow(phi, m) * rt), 1 / n);
      const sw = Math.max(0.0, Math.min(1.0, swRaw));
      const sh = 1.0 - sw;
      const isCommercialPay = sw <= 0.50 && phi >= 0.10;

      return {
        outputs: [
          { label: "Reservoir Temperature", value: resTemp.toFixed(1), unit: "deg F", explanation: "In-situ formation temperature" },
          { label: "Downhole Water Resistivity (Rw)", value: resRw.toFixed(4), unit: "ohm-m", explanation: "Arps temperature-corrected Rw" },
          { label: "Formation Factor (F)", value: formationFactor.toFixed(2), unit: "", explanation: "Archie F = a / phi^m" },
          { label: "100% Water Resistivity (Ro)", value: ro.toFixed(3), unit: "ohm-m", explanation: "Resistivity if 100% water wet" },
          { label: "Water Saturation (Sw)", value: (sw * 100).toFixed(1), unit: "%", explanation: "Pore space filled with water" },
          { label: "Hydrocarbon Saturation (Sh)", value: (sh * 100).toFixed(1), unit: "%", explanation: "Pore space filled with oil/gas" },
          { label: "Commercial Pay Status", value: isCommercialPay ? "QUALIFIED (Commercial Pay)" : "UNQUALIFIED (Wet / Tight)", unit: "", explanation: "Cutoff: Sw <= 50% and phi >= 10%" }
        ],
        steps: [
          `Reservoir Temperature T_res = ${surfaceTemp} + (${tempGradient}/100 * ${depth}) = ${resTemp.toFixed(1)} deg F`,
          `Arps Rw Correction = ${surfaceRw} * [(${surfaceRwTemp} + 6.77) / (${resTemp.toFixed(1)} + 6.77)] = ${resRw.toFixed(4)} ohm-m`,
          `Formation Factor F = ${a} / (${phi}^${m}) = ${formationFactor.toFixed(2)}`,
          `100% Wet Rock Resistivity Ro = F * Rw = ${formationFactor.toFixed(2)} * ${resRw.toFixed(4)} = ${ro.toFixed(3)} ohm-m`,
          `Archie Sw = [ (${a} * ${resRw.toFixed(4)}) / (${phi}^${m} * ${rt}) ]^(1/${n}) = ${(sw * 100).toFixed(1)}%`
        ]
      };
    }
  },

  // 4. VOGEL IPR INFLOW PERFORMANCE SOLVER
  {
    id: "vogel-ipr",
    name: "Vogel IPR Two-Phase Inflow Solver",
    category: "Production Engineering",
    description: "Generate the complete Inflow Performance Relationship (IPR) curve for saturated and undersaturated oil wells producing below bubble point.",
    formulaDisplay: "q / q_max = 1 - 0.2*(Pwf/Pr) - 0.8*(Pwf/Pr)^2",
    defaultInputs: {
      pr: 3500.0,
      pb: 3500.0,
      testRate: 450.0,
      testPwf: 2200.0
    },
    inputsConfig: [
      { key: "pr", label: "Average Reservoir Pressure (Pr)", unit: "psi", min: 500, max: 15000, step: 50, tooltip: "Static drainage area reservoir pressure" },
      { key: "pb", label: "Bubble Point Pressure (Pb)", unit: "psi", min: 500, max: 15000, step: 50, tooltip: "Fluid saturation pressure where gas breaks out" },
      { key: "testRate", label: "Well Test Oil Rate (q_test)", unit: "STB/d", min: 10, max: 10000, step: 25, tooltip: "Stabilized measured test flow rate" },
      { key: "testPwf", label: "Test Flowing BHP (Pwf_test)", unit: "psi", min: 50, max: 15000, step: 50, tooltip: "Flowing bottomhole pressure recorded during test" }
    ],
    calculate: (inputs) => {
      const { pr, pb, testRate, testPwf } = inputs;
      const pwfPrRatio = testPwf / pr;
      const vogelTerm = 1.0 - 0.2 * pwfPrRatio - 0.8 * Math.pow(pwfPrRatio, 2);
      const qMax = vogelTerm > 0 ? testRate / vogelTerm : testRate;
      const currentDrawdown = pr - testPwf;
      const apparentPI = currentDrawdown > 0 ? testRate / currentDrawdown : 0;

      // Generate 11-point IPR curve
      const chartData: { x: number; y: number }[] = [];
      const numPoints = 10;
      for (let i = 0; i <= numPoints; i++) {
        const pwf = pr - (i / numPoints) * pr;
        const ratio = pwf / pr;
        const rate = qMax * (1.0 - 0.2 * ratio - 0.8 * Math.pow(ratio, 2));
        chartData.push({ x: Math.round(Math.max(0, rate)), y: Math.round(pwf) });
      }

      return {
        outputs: [
          { label: "Max Theoretical Potential (AOF / q_max)", value: qMax.toFixed(1), unit: "STB/d", explanation: "Theoretical wide-open rate at Pwf = 0 psi" },
          { label: "Current Operating Drawdown", value: currentDrawdown.toFixed(1), unit: "psi", explanation: "Total pressure drawdown (Pr - Pwf)" },
          { label: "Apparent Productivity Index (PI)", value: apparentPI.toFixed(2), unit: "STB/d/psi", explanation: "q / Delta P at test condition" },
          { label: "Rate at 50% Drawdown (Pwf = Pr/2)", value: (qMax * 0.70).toFixed(1), unit: "STB/d", explanation: "Vogel rate where Pwf/Pr = 0.5" },
          { label: "Reservoir Saturation Regime", value: pr <= pb ? "Saturated (Two-Phase Vogel Curve)" : "Partially Undersaturated", unit: "", explanation: `Pr (${pr} psi) relative to Bubble Point Pb (${pb} psi)` }
        ],
        chartData,
        steps: [
          `Test Pressure Ratio (Pwf / Pr) = ${testPwf} / ${pr} = ${pwfPrRatio.toFixed(3)}`,
          `Vogel Term [1 - 0.2*(Pwf/Pr) - 0.8*(Pwf/Pr)^2] = 1 - 0.2*(${pwfPrRatio.toFixed(3)}) - 0.8*(${pwfPrRatio.toFixed(3)}^2) = ${vogelTerm.toFixed(4)}`,
          `Max Open-Flow Rate q_max = q_test / Vogel_Term = ${testRate} / ${vogelTerm.toFixed(4)} = ${qMax.toFixed(1)} STB/d`,
          `At Pwf = 0 (Maximum Drawdown), well can deliver ${qMax.toFixed(1)} STB/d`
        ]
      };
    }
  }
];
