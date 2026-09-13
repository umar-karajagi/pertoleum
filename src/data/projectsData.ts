export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  phase: number;
  daysRange: string;
  durationDays: number;
  githubUrl: string;
  executiveSummary: string;
  datasetDescription: string;
  technologies: string[];
  kpis: { label: string; value: string; detail: string }[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    deliverable: string;
    codeSnippet?: string;
  }[];
  sampleWells?: {
    wellId: string;
    qi: number;
    diAnnual: number;
    bFactor: number;
    waterCut: number;
    gor: number;
    currentRate: number;
    eurSTB: number;
    status: string;
    diagnosis: string;
    proposedWorkover: string;
    incrementalBopd: number;
    capex: number;
    paybackDays: number;
  }[];
  syntheticLogCurves?: {
    depth: number;
    gr: number;
    cali: number;
    rt: number;
    rhob: number;
    nphi: number;
    vsh: number;
    phie: number;
    sw: number;
    isPay: boolean;
  }[];
}

export const PROJECT_ONE_DATA: ProjectData = {
  id: "project-1",
  title: "15-Well Mature Field Production Optimization & Decline Curve Analysis",
  subtitle: "Integrated Reservoir Surveillance, Arps EUR Forecasting & Workover Economic Ranking",
  phase: 3,
  daysRange: "Days 71–75",
  durationDays: 5,
  githubUrl: "https://github.com/umar-karajagi/pertoleum-project-1-production-optimization",
  executiveSummary: "Evaluated 5 years of historical monthly production telemetry across 15 wells in a mature sandstone waterflood field under depletion. Cleaned telemetry, fitted automated Arps decline curves to certify 5.8 MMSTB of PDP reserves, identified 4 bad-actor wells causing 550 BOPD of deferred production using Chan WOR log-log diagnostic plots, and engineered a $430k workover program adding 860 BOPD with a 9.5-day capital payback generating $15.1M in first-year net cash flow.",
  datasetDescription: "15 producing wells over 60 months (2019-01 to 2023-12). Contains Oil Rate, Water Rate, Gas Rate, Flowing Tubing Pressure, Status, and Artificial Lift Type.",
  technologies: ["Python", "Pandas", "SciPy", "Matplotlib", "Seaborn", "Excel Power Query", "Arps DCA", "Chan Diagnostics"],
  kpis: [
    { label: "Restored Production", value: "+860 BOPD", detail: "Erases the 550 BOPD field deficit" },
    { label: "Proved PDP Reserves", value: "5.80 MMSTB", detail: "Certified across 15 active wells" },
    { label: "Total Workover Capex", value: "$430,000", detail: "Across 4 targeted candidates" },
    { label: "Avg Capital Payback", value: "9.5 Days", detail: "Fastest candidate breaks even in 6.6 days" },
    { label: "Year 1 Net Cash Flow", value: "$15.11 Million", detail: "At $55/bbl net margin & 90% uptime" },
    { label: "Capital Efficiency", value: "$500 / BOPD", detail: "20x more efficient than drilling new wells" }
  ],
  steps: [
    {
      stepNumber: 1,
      title: "Data Audit & Multi-Well Schema Setup",
      description: "Ingest multi-well CSV, inspect data schemas, detect missing telemetry tags vs shut-ins, and standardize timestamps to monthly frequency.",
      deliverable: "Automated data ingestion pipeline script: `01_data_ingestion.py`."
    },
    {
      stepNumber: 2,
      title: "Data Cleaning & Negative Rate Scrubbing",
      description: "Forward-fill verified flowing intervals, clip negative gas flowmeter errors to 0, and handle well status transitions cleanly.",
      deliverable: "Audited master dataset: `cleaned_production_15_wells.csv`."
    },
    {
      stepNumber: 3,
      title: "Surveillance Feature Engineering",
      description: "Compute daily/monthly Water Cut %, Gas-Oil Ratio (GOR), Total Liquid Rate, and 3-month moving averages in Pandas.",
      deliverable: "Engineered feature matrix with 8 diagnostic variables per well."
    },
    {
      stepNumber: 4,
      title: "Field Rollup Trends & Availability Audit",
      description: "Aggregate field-level production trajectories, compute Producing Day Rate vs Calendar Day Rate, and identify operating uptime bottlenecks.",
      deliverable: "Field-level production history chart and uptime breakdown."
    },
    {
      stepNumber: 5,
      title: "Automated Arps Decline Curve Fitting",
      description: "Implement `scipy.optimize.curve_fit` to optimize initial rate (qi), nominal decline (Di), and hyperbolic exponent (b), enforcing b <= 0.5 for waterflood.",
      deliverable: "Master DCA summary table with fitted parameters and R² scores.",
      codeSnippet: "popt, pcov = curve_fit(arps_hyperbolic, t_data, q_data, bounds=([0, 0, 0], [np.inf, 2.0, 0.5]))"
    },
    {
      stepNumber: 6,
      title: "EUR & Remaining Reserves Quantification",
      description: "Integrate production down to the 15 STB/d economic limit to calculate Estimated Ultimate Recovery (EUR) and remaining reserves.",
      deliverable: "15-panel decline forecast figure extending 10 years into the future."
    },
    {
      stepNumber: 7,
      title: "Chan Log-Log Water Diagnostic Plots",
      description: "Calculate time derivative d(WOR)/dt, smooth moving averages, and plot log(WOR) and log(WOR') vs time to isolate channeling vs coning.",
      deliverable: "Diagnostic Chan plots categorizing 15 wells into channeling, coning, and matrix sweep."
    },
    {
      stepNumber: 8,
      title: "Production Bottleneck & Bad Actor Ranking",
      description: "Identify 4 bad actor wells causing 70% of deferred production and excessive water handling costs.",
      deliverable: "Pareto chart and root-cause failure breakdown table."
    },
    {
      stepNumber: 9,
      title: "Workover Remediation Modeling",
      description: "Model incremental production uplift (Delta BOPD) for cement squeeze water shut-offs, acid stimulation, and ESP downsizing.",
      deliverable: "Engineering uplift simulation table: +860 total incremental BOPD."
    },
    {
      stepNumber: 10,
      title: "Economic Payback & Capital Prioritization",
      description: "Calculate daily net cash flow, payback period in days, and first-year net cash at 90% field uptime and $55/bbl margin.",
      deliverable: "Executive Decision Table with self-funding capital allocation sequence."
    },
    {
      stepNumber: 11,
      title: "Executive Presentation Briefing Note",
      description: "Compile a 3-page executive summary PDF report synthesized for VP of Operations and Asset Managers.",
      deliverable: "Executive brief PDF: `Executive_Production_Optimization_Report.pdf`."
    },
    {
      stepNumber: 12,
      title: "GitHub Repository Publication & Release Tagging",
      description: "Publish clean Jupyter notebooks, high-resolution figures, structured README with KPI cards, and tag release v1.0.0.",
      deliverable: "Public GitHub repository: `github.com/user/project-1-production-optimization`."
    }
  ],
  sampleWells: [
    {
      wellId: "MIT-01",
      qi: 340,
      diAnnual: 0.16,
      bFactor: 0.0,
      waterCut: 45.0,
      gor: 850,
      currentRate: 240,
      eurSTB: 1363277,
      status: "ACTIVE",
      diagnosis: "Stable Boundary-Dominated Flow",
      proposedWorkover: "Maintain baseline choke surveillance",
      incrementalBopd: 0,
      capex: 0,
      paybackDays: 0
    },
    {
      wellId: "MIT-03",
      qi: 520,
      diAnnual: 0.42,
      bFactor: 0.2,
      waterCut: 98.0,
      gor: 1200,
      currentRate: 40,
      eurSTB: 920000,
      status: "BAD ACTOR",
      diagnosis: "Severe Water Channeling behind casing (Chan slope > 4.5)",
      proposedWorkover: "Remedial cement squeeze & re-perforate clean sand",
      incrementalBopd: 330,
      capex: 120000,
      paybackDays: 6.6
    },
    {
      wellId: "MIT-05",
      qi: 480,
      diAnnual: 0.28,
      bFactor: 0.3,
      waterCut: 52.0,
      gor: 950,
      currentRate: 160,
      eurSTB: 1150000,
      status: "UNDERPERFORMING",
      diagnosis: "Near-Wellbore Skin Damage / Scaling (S = +12)",
      proposedWorkover: "Coiled tubing solvent & acid matrix stimulation",
      incrementalBopd: 140,
      capex: 55000,
      paybackDays: 7.1
    },
    {
      wellId: "MIT-08",
      qi: 410,
      diAnnual: 0.38,
      bFactor: 0.15,
      waterCut: 95.0,
      gor: 1400,
      currentRate: 65,
      eurSTB: 880000,
      status: "BAD ACTOR",
      diagnosis: "Thief zone water channeling through conductive fracture",
      proposedWorkover: "Mechanical bridge plug isolation of bottom water perfs",
      incrementalBopd: 210,
      capex: 95000,
      paybackDays: 8.2
    },
    {
      wellId: "MIT-12",
      qi: 600,
      diAnnual: 0.32,
      bFactor: 0.25,
      waterCut: 75.0,
      gor: 1800,
      currentRate: 110,
      eurSTB: 1280000,
      status: "UNDERPERFORMING",
      diagnosis: "Oversized ESP experiencing fluid pump-off & undercurrent trips",
      proposedWorkover: "Downsize pump stages & install Variable Speed Drive (VSD)",
      incrementalBopd: 180,
      capex: 160000,
      paybackDays: 16.2
    }
  ]
};

export const PROJECT_TWO_DATA: ProjectData = {
  id: "project-2",
  title: "Equinor Volve Field: Digital Well Log Petrophysics & Volumetric Reservoir Characterization",
  subtitle: "Open-Hole Wireline Log Evaluation, Archie Water Saturation & Volumetric OOIP",
  phase: 3,
  daysRange: "Days 76–80",
  durationDays: 5,
  githubUrl: "https://github.com/umar-karajagi/pertoleum-project-2-well-log-evaluation",
  executiveSummary: "Conducted an end-to-end digital petrophysical evaluation of the Middle Jurassic Hugin shallow-marine sandstone reservoir using open-source wireline LAS logs from North Sea Well 15/9-F-11 A. Corrected water resistivity for downhole reservoir temperature (212 deg F), flagged borehole washouts via caliper data, calculated Larionov shale volume and density-neutron effective porosity, vectorized Archie water saturation calibrated to Ro in the water leg, identified the OWC at 8,228 ft MD, delineated 78 ft of high-grade Net Pay (65% NTG), and quantified 10.85 MMSTB of volumetric OOIP ($171M net recoverable asset value).",
  datasetDescription: "Real CWLS standard LAS 2.0 wireline log from North Sea Volve Field Well 15/9-F-11 A. Contains DEPTH, CALI, GR, RT/ILD, RHOB, NPHI, and DT curves across 400 ft gross interval.",
  technologies: ["Python", "Lasio", "NumPy", "Pandas", "Matplotlib", "Larionov Vsh", "Archie Saturation", "Volumetric OOIP"],
  kpis: [
    { label: "Net Pay Thickness", value: "78.0 ft", detail: "Across 120 ft gross Hugin interval" },
    { label: "Net-to-Gross (NTG)", value: "65.0%", detail: "High-quality shallow-marine sand" },
    { label: "Average Pay Porosity", value: "21.4%", detail: "Effective density-neutron porosity" },
    { label: "Average Water Saturation", value: "18.2%", detail: "81.8% Hydrocarbon Saturation" },
    { label: "Volumetric OOIP", value: "10.85 MMSTB", detail: "Per 160-acre drainage unit" },
    { label: "Recoverable Reserves", value: "3.80 MMSTB", detail: "At 35% waterflood recovery factor" }
  ],
  steps: [
    {
      stepNumber: 1,
      title: "LAS Header & Wellbore Architecture Audit",
      description: "Ingest CWLS LAS 2.0 file using `lasio.read()`, extract KB elevation, casing shoe depths, and verify logging run parameters.",
      deliverable: "Well header metadata extraction script: `01_las_audit.py`."
    },
    {
      stepNumber: 2,
      title: "Mnemonic Harmonization & Null Sanitization",
      description: "Map vendor curve names into standard petrophysical mnemonics ('GR', 'RT', 'RHOB', 'NPHI', 'CALI') and convert -999.25 nulls to NaN.",
      deliverable: "Standardized Pandas DataFrame with clean depth indexing."
    },
    {
      stepNumber: 3,
      title: "Environmental QC & Caliper Washout Flagging",
      description: "Compute Delta Caliper against 8.5-inch bit size. Tag borehole washouts > 1.5 inches to filter corrupted pad density readings.",
      deliverable: "Borehole quality flag column and data reliability summary (98% reservoir reliability)."
    },
    {
      stepNumber: 4,
      title: "Downhole Temperature & Arps Rw Correction",
      description: "Calculate reservoir temperature at 9,500 ft TVD (212 deg F) and correct surface water resistivity (0.22 ohm-m at 75 F) down to downhole Rw = 0.0822 ohm-m.",
      deliverable: "Temperature profile and corrected Rw calculation."
    },
    {
      stepNumber: 5,
      title: "Shale Volume (Vsh) from Gamma Ray",
      description: "Pick clean sand (28 API) and shale (120 API) baselines. Apply non-linear Larionov Older Rocks equation in vectorized Python.",
      deliverable: "Vectorized Vsh curve bounded between 0% and 100%."
    },
    {
      stepNumber: 6,
      title: "Total & Effective Porosity Modeling",
      description: "Calculate density porosity from bulk density (2.65 g/cm³ quartz matrix) and combine with neutron porosity to compute effective porosity discounting Vsh.",
      deliverable: "Effective porosity curve with gas crossover inspection."
    },
    {
      stepNumber: 7,
      title: "Vectorized Archie Water Saturation (Sw)",
      description: "Implement Archie's equation with a=1.0, m=1.95, n=2.0, Rw=0.0822. Calibrate m against 100% water zone resistivity (Ro = 1.25 ohm-m).",
      deliverable: "Continuous water saturation curve Sw and hydrocarbon saturation Sh."
    },
    {
      stepNumber: 8,
      title: "Fluid Contact (OWC) Identification",
      description: "Locate sharp resistivity collapse (48 -> 1.2 ohm-m) and saturation surge (18% -> 95%) at 8,228 ft MD to define the Oil-Water Contact.",
      deliverable: "Fluid contact depth marker and transition zone characterization."
    },
    {
      stepNumber: 9,
      title: "Net Pay Delineation & Volumetric OOIP",
      description: "Apply cutoffs (Vsh <= 30%, phi_e >= 10%, Sw <= 50%, Depth < 8,228). Calculate 78 ft Net Pay, 65% NTG, and 10.85 MMSTB OOIP.",
      deliverable: "Net Pay summary table and sensitivity analysis."
    },
    {
      stepNumber: 10,
      title: "4-Track Composite Log Plot & GitHub Publication",
      description: "Generate publication-quality 300 DPI 4-track composite log in Matplotlib, compile executive PDF, and publish on GitHub.",
      deliverable: "Composite well log plot image: `composite_well_log_hugin.png` and GitHub repository."
    }
  ],
  syntheticLogCurves: [
    { depth: 8150.0, gr: 110.0, cali: 9.8, rt: 2.1, rhob: 2.55, nphi: 0.32, vsh: 0.85, phie: 0.04, sw: 1.00, isPay: false },
    { depth: 8160.0, gr: 45.0, cali: 8.4, rt: 35.0, rhob: 2.25, nphi: 0.24, vsh: 0.12, phie: 0.22, sw: 0.19, isPay: true },
    { depth: 8170.0, gr: 32.0, cali: 8.3, rt: 48.0, rhob: 2.21, nphi: 0.26, vsh: 0.04, phie: 0.24, sw: 0.15, isPay: true },
    { depth: 8180.0, gr: 30.0, cali: 8.3, rt: 52.0, rhob: 2.20, nphi: 0.25, vsh: 0.02, phie: 0.25, sw: 0.14, isPay: true },
    { depth: 8190.0, gr: 38.0, cali: 8.4, rt: 44.0, rhob: 2.23, nphi: 0.25, vsh: 0.07, phie: 0.23, sw: 0.17, isPay: true },
    { depth: 8200.0, gr: 35.0, cali: 8.4, rt: 42.0, rhob: 2.24, nphi: 0.24, vsh: 0.06, phie: 0.22, sw: 0.18, isPay: true },
    { depth: 8210.0, gr: 42.0, cali: 8.4, rt: 38.0, rhob: 2.26, nphi: 0.23, vsh: 0.10, phie: 0.21, sw: 0.20, isPay: true },
    { depth: 8220.0, gr: 40.0, cali: 8.5, rt: 30.0, rhob: 2.28, nphi: 0.22, vsh: 0.09, phie: 0.20, sw: 0.24, isPay: true },
    { depth: 8228.0, gr: 48.0, cali: 8.5, rt: 12.0, rhob: 2.30, nphi: 0.22, vsh: 0.14, phie: 0.19, sw: 0.45, isPay: true }, // OWC
    { depth: 8235.0, gr: 35.0, cali: 8.4, rt: 1.3, rhob: 2.24, nphi: 0.24, vsh: 0.06, phie: 0.23, sw: 0.96, isPay: false }, // Water leg
    { depth: 8250.0, gr: 38.0, cali: 8.4, rt: 1.2, rhob: 2.25, nphi: 0.23, vsh: 0.08, phie: 0.22, sw: 0.98, isPay: false }, // Water leg
    { depth: 8270.0, gr: 115.0, cali: 9.6, rt: 2.4, rhob: 2.58, nphi: 0.34, vsh: 0.90, phie: 0.03, sw: 1.00, isPay: false }
  ]
};
