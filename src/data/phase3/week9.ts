import { DayPlan } from '../../types';

export const WEEK_9_DAYS: DayPlan[] = [
  // DAY 71
  {
    dayNumber: 71,
    phaseId: 3,
    weekNumber: 9,
    title: "Project 1 Kickoff: Production Optimization & DCA Scope",
    category: "project_1",
    categoryLabel: "Project 1",
    todayGoal: "Define Project 1 scope, understand the 15-well historical field dataset, set up folder architecture, and outline the 12-step deliverable pipeline.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Welcome to Phase 3! Today marks the start of your first flagship proof-of-ability project: 'Production Optimization and Decline Curve Analysis Case Study'. For a junior petroleum engineer with ~1 year of experience, having a published, end-to-end production analysis case study on GitHub is the single fastest way to prove to operators and service companies that you can hit the ground running on day one.",
      keyPoints: [
        "Project 1 Business Objective: Evaluate 5 years of historical monthly production data across 15 wells in a mature sandstone reservoir experiencing pressure depletion and water breakthrough. Identify top underperforming wells, forecast remaining reserves via Arps DCA, diagnose water encroachment mechanisms, and propose prioritized workovers.",
        "The 15-Well Dataset Schema: Well_ID, Date (2019-01 to 2023-12, 60 months), Oil_Rate (STB/d), Water_Rate (STB/d), Gas_Rate (Mscf/d), Flowing_Tubing_Pressure (psi), Well_Status (Active/Shut-in), Artificial_Lift_Type (ESP, Gas Lift, Rod Pump, Natural Flow).",
        "Repository Architecture: Create directory structure: `project-1-production-optimization/` containing `/data` (raw and cleaned CSVs), `/notebooks` (step-by-step Jupyter notebooks), `/figures` (300 DPI charts), `/deliverables` (executive report PDF/Word), and `README.md`.",
        "The 12-Step Deliverable Pipeline: 1) Data Audit, 2) Quality Control & Cleansing, 3) Surveillance Ratios, 4) Field Rollup Trends, 5) Well-by-Well Arps Fitting, 6) EUR Calculation, 7) Chan WOR Diagnostics, 8) Bottleneck Identification, 9) Workover Uplift Modeling, 10) Economic Payback Ranking, 11) Executive Presentation Deck, 12) GitHub Portfolio Publication."
      ],
      coreFormulas: [
        {
          name: "Deliverable Production Variance Metric",
          formula: "Variance = [(Actual_Production - Budgeted_Production) / Budgeted_Production] * 100",
          explanation: "Quantifies field deliverability shortfall against corporate baseline."
        }
      ],
      fieldInsight: "When building an engineering project for your resume, frame everything around business value and dollars. Do not just say 'I plotted decline curves'; say 'Analyzed a 15-well mature asset producing 4,200 BOPD, identified 3 bad-actor wells causing $450k in annual deferred revenue, and modeled workovers delivering 380 incremental BOPD with an average payback of 18 days'."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-170668: Engineering Best Practices for Mature Asset Production Optimization",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d71-q1",
          question: "What is the core career purpose of completing Project 1 in Phase 3 of this roadmap?",
          options: [
            "To build a verifiable, professional proof-of-ability case study on GitHub that proves practical production engineering competence to hiring managers",
            "To fulfill a college homework requirement",
            "To replace human engineers with AI",
            "To pass an academic exam"
          ],
          correctOptionIndex: 0,
          explanation: "Proof-of-ability projects demonstrate concrete, verifiable skills that overcome the '1-year junior experience' resume barrier.",
          topic: "Project 1"
        },
        {
          id: "d71-q2",
          question: "How many wells and what historical duration are analyzed in the Project 1 case study dataset?",
          options: [
            "15 producing wells over a 5-year historical production timeframe (60 monthly records per well)",
            "1 single well over 2 weeks",
            "50,000 wells over 100 years",
            "3 dry holes"
          ],
          correctOptionIndex: 0,
          explanation: "A 15-well, 5-year multi-well dataset provides the ideal scope: realistic complexity without overwhelming data clutter.",
          topic: "Project 1"
        },
        {
          id: "d71-q3",
          question: "What are the four primary fluid and operational parameters tracked in the Project 1 raw dataset?",
          options: [
            "Oil Rate (STB/d), Water Rate (STB/d), Gas Rate (Mscf/d), and Flowing Tubing Pressure (psi)",
            "Drill bit wear, mud weight, casing size, and cement density",
            "Seismic amplitude, frequency, phase, and velocity",
            "Employee salaries, office rent, and utility bills"
          ],
          correctOptionIndex: 0,
          explanation: "Oil, water, and gas rates combined with flowing tubing pressure are the foundational measurements for production surveillance.",
          topic: "Project 1"
        },
        {
          id: "d71-q4",
          question: "How should the Project 1 GitHub repository be structured for maximum professionalism?",
          options: [
            "All files dumped randomly into the root folder with no folders",
            "Organized folders: `/data`, `/notebooks`, `/figures`, `/deliverables`, and a comprehensive `README.md` with visual charts and executive summary",
            "Only an empty README file",
            "A single password-protected ZIP file"
          ],
          correctOptionIndex: 1,
          explanation: "A modular, well-organized repository structure signals disciplined engineering and data management practices.",
          topic: "Project 1"
        },
        {
          id: "d71-q5",
          question: "What is the primary deliverable that hiring managers look for when clicking your GitHub project link?",
          options: [
            "A well-written README.md featuring a problem statement, executive KPI dashboard, key findings, and business recommendations",
            "A raw Python script with 5,000 lines of unformatted code",
            "A link to your personal social media",
            "An invoice for consulting fees"
          ],
          correctOptionIndex: 0,
          explanation: "The README is the storefront of your project; a clean, executive-ready README immediately captures recruiter attention.",
          topic: "Project 1"
        },
        {
          id: "d71-q6",
          question: "In Project 1, what does 'Deliverable 6: EUR Calculation' provide to an asset team?",
          options: [
            "The estimated ultimate recovery of hydrocarbons for each well down to the economic operating limit",
            "The depth of the groundwater aquifer",
            "The price of crude oil next week",
            "The weight of the drilling rig"
          ],
          correctOptionIndex: 0,
          explanation: "Estimated Ultimate Recovery (EUR) quantifies total lifetime recoverable barrels, forming the basis for asset valuation.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d71-q7",
          question: "Why does Project 1 incorporate both Excel and Python analysis workflows?",
          options: [
            "To prove versatile technical fluency across both traditional corporate spreadsheet tools and modern data science automation",
            "Because Excel cannot plot lines",
            "Because Python is being banned by oil companies",
            "To double the time required to complete the project"
          ],
          correctOptionIndex: 0,
          explanation: "Bilingual proficiency (Excel for executive dashboarding, Python for scalable automation) makes an engineer exceptionally valuable.",
          topic: "Project 1"
        },
        {
          id: "d71-q8",
          question: "What role does 'Deliverable 7: Chan WOR Diagnostic Plots' play in the Project 1 workflow?",
          options: [
            "Pinpointing whether excessive water production is caused by coning, channeling behind pipe, or normal waterflood sweep",
            "Measuring wellbore inclination",
            "Calculating cement setting time",
            "Predicting pipeline corrosion"
          ],
          correctOptionIndex: 0,
          explanation: "Chan log-log diagnostic plots isolate the physical mechanism of water breakthrough to recommend the correct mechanical fix.",
          topic: "Production Analytics"
        },
        {
          id: "d71-q9",
          question: "When proposing a workover candidate in Project 1, what two financial metrics must accompany the technical recommendation?",
          options: [
            "Workover Capital Expenditure ($) and Capital Payback Period (days/months)",
            "The CEO's bonus and stock price",
            "Federal income tax and sales tax",
            "The price of steel in 1980"
          ],
          correctOptionIndex: 0,
          explanation: "Workover proposals must be justified with realistic Capex estimates and rapid payback timelines (< 60 days).",
          topic: "Project 1"
        },
        {
          id: "d71-q10",
          question: "How does completing this 12-step pipeline prepare you for technical interviews?",
          options: [
            "It gives you concrete, real-world numbers and stories to discuss using the STAR framework when asked technical surveillance questions",
            "It guarantees you will never be asked technical questions",
            "It allows you to skip the interview entirely",
            "It replaces all behavioral questions"
          ],
          correctOptionIndex: 0,
          explanation: "Discussing your own hands-on project with specific well names, rates, and decline parameters demonstrates undeniable authenticity.",
          topic: "Project 1"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "As part of Project 1 scoping, you perform an initial high-level audit on the 15-well field dataset for the most recent month:\n- Total Field Oil Rate = 3,450 STB/d\n- Total Field Water Rate = 13,800 STB/d\n- Total Field Gas Rate = 5,175 Mscf/d\n- Active producing wells = 12 wells; Shut-in wells = 3 wells\n- Field oil production target (budget) = 4,000 STB/d\nCalculate: 1) Field Water Cut (%), 2) Field Producing GOR (scf/STB), 3) Average producing rate per active well (BOPD/well), 4) Current production variance against budget (BOPD and %), and 5) If bringing the 3 shut-in wells back at the field average rate closes the gap, would it meet the 4,000 BOPD target?",
      givenValues: [
        { label: "Total Oil Rate", value: "3,450 STB/d" },
        { label: "Total Water Rate", value: "13,800 STB/d" },
        { label: "Total Gas Rate", value: "5,175 Mscf/d" },
        { label: "Active / Shut-in Wells", value: "12 active / 3 shut-in" },
        { label: "Budget Target", value: "4,000 STB/d" }
      ],
      stepByStepSolution: [
        "Step 1: Total Liquid Rate = 3,450 + 13,800 = 17,250 STB/d.\nField Water Cut = (13,800 / 17,250) * 100 = 80.00%.",
        "Step 2: Field Producing GOR = (5,175 Mscf * 1,000 scf/Mscf) / 3,450 STB = 5,175,000 / 3,450 = 1,500 scf/STB.",
        "Step 3: Average rate per active well = 3,450 STB/d / 12 wells = 287.5 BOPD / well.",
        "Step 4: Production Variance vs Budget:\nVariance (BOPD) = 3,450 - 4,000 = -550 BOPD.\nVariance (%) = (-550 / 4,000) * 100 = -13.75% below budget.",
        "Step 5: Bringing 3 shut-in wells back at average rate (287.5 BOPD):\nRestored Oil = 3 * 287.5 = 862.5 BOPD.\nNew Total Field Oil = 3,450 + 862.5 = 4,312.5 BOPD.\nTarget Comparison: 4,312.5 > 4,000 BOPD (+312.5 BOPD surplus). Yes, it exceeds target."
      ],
      finalAnswer: "Water Cut = 80.0% | GOR = 1,500 scf/STB | Avg Well = 287.5 BOPD | Variance = -13.75% (-550 BOPD) | Restoring 3 wells achieves 4,313 BOPD (Target Met)",
      engineeringSignificance: "This initial audit sets the commercial rationale for Project 1: the field is 550 BOPD below budget, but resolving shut-in wells and optimizing high-water-cut producers easily restores and exceeds the asset target."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you introduce Project 1 in an interview when the interviewer says: 'Tell me about a production engineering project you worked on'?",
      sampleAnswer: "I answer using the STAR framework: 'In my portfolio Project 1, I led a comprehensive production optimization and decline curve evaluation of a 15-well mature sandstone field producing 3,450 BOPD under waterflood. The field was operating 13.8% below its corporate target of 4,000 BOPD with an 80% water cut. My task was to audit 5 years of historical monthly production, model individual well decline curves to estimate EUR, diagnose the causes of deferred production, and build an actionable workover program. Using Python and Excel, I cleansed the telemetry, fitted Arps decline curves across all 15 wells, and constructed Chan WOR diagnostic plots. I discovered that 3 shut-in wells and 2 severe water channeling wells accounted for over 70% of the production deficit. I developed a prioritized workover schedule that delivered 860 BOPD of restored production with a capital payback of under 18 days, exceeding the corporate target by 310 BOPD.'",
      conceptCheck: "Memorize the quantitative metrics: 15 wells, 3,450 BOPD, -13.8% variance, 80% WC, +860 BOPD restored, 18-day payback."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Initialize your Project 1 workspace: create the directory `project-1-production-optimization`, initialize a git repo, and create the subfolders `/data`, `/notebooks`, `/figures`, and `/deliverables`."
    },
    checklist: [
      { id: "d71-c1", text: "Reviewed Project 1 scope, objectives, and 15-well dataset schema", completed: false },
      { id: "d71-c2", text: "Established git repository and professional folder structure", completed: false },
      { id: "d71-c3", text: "Mapped the 12-step deliverable engineering pipeline", completed: false },
      { id: "d71-c4", text: "Calculated initial field baseline metrics (BOPD, Water Cut, GOR)", completed: false },
      { id: "d71-c5", text: "Drafted the STAR interview pitch for Project 1", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 72
  {
    dayNumber: 72,
    phaseId: 3,
    weekNumber: 9,
    title: "Project 1 Data Cleaning & Diagnostic Screening",
    category: "project_1",
    categoryLabel: "Project 1",
    todayGoal: "Clean raw telemetry, filter shut-ins and testing noise, compute surveillance ratios (WC, GOR, WOR), and build Chan diagnostic plots for all 15 wells.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 72 executes Steps 2, 3, and 4 of Project 1: Data Cleansing, Feature Engineering, and Diagnostic Water Screening. Raw field records contain missing telemetry tags, negative flowmeter rates from compressor surges, and erratic test separator dumps. You will apply Python Pandas to clean these anomalies, compute rolling moving averages, engineer water cut and GOR features, and construct Chan log-log diagnostic plots to categorize every well by its water production mechanism.",
      keyPoints: [
        "Data Hygiene Execution: Ingest `production_15_wells.csv`. Identify null rates and forward-fill verified producing days; clip negative gas rates to 0; handle well status changes cleanly.",
        "Computing Engineered Surveillance Ratios: Add columns for `Liquid_Rate`, `Water_Cut`, `GOR`, `WOR`, `WOR_derivative`, and `Oil_Rate_30DMA` across all 15 wells.",
        "Automated Chan Plot Generation: For each well, calculate the time derivative `d(WOR)/dt = (WOR[i] - WOR[i-1]) / (t[i] - t[i-1])`. Smooth using a 3-month moving average to reduce numerical differentiation noise, and plot on log-log scales.",
        "Diagnostic Water Categorization: Classify each of the 15 wells into one of three distinct categories: 1) Normal Waterflood Sweep (gradual WOR slope), 2) Channeling / Fracture Breakthrough (steep derivative spike > 3), or 3) Bottom-Water Coning (initial rise followed by derivative plateau).",
        "Field Rollup Visualization: Create a multi-panel figure showing field-level Oil, Water, and Gas rates over the 5-year timeline with water cut progression."
      ],
      coreFormulas: [
        {
          name: "Chan Plot Log-Log Derivative",
          formula: "log(WOR') = log[ d(WOR) / dt ] vs log(Time)",
          explanation: "Derivative signature used to diagnose water channeling versus coning."
        }
      ],
      fieldInsight: "Document every data cleansing assumption in your project notebook! Write a clear markdown cell explaining: 'Rows with negative gas rates were clipped to 0 bbl/d due to known backpressure surges at Battery A; shut-in periods were preserved as 0 bbl/d to honor true operational availability.' This documentation proves engineering maturity."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Water Production Diagnosis and Remediation",
      url: "https://petrowiki.spe.org/Water_production_problems",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d72-q1",
          question: "When cleaning the 15-well production dataset, why is it vital to preserve true shut-in days (rate = 0) while treating missing telemetry tags as NaN?",
          options: [
            "Conflating missing telemetry with shut-ins destroys the calculation of true well deliverability and distorts decline curve slope",
            "Because Excel cannot process zero",
            "Shut-in wells must be deleted from the database",
            "To make water cut look lower"
          ],
          correctOptionIndex: 0,
          explanation: "Missing data represents telemetry sensor outage, whereas 0 bbl/d represents a real mechanical or operational shutdown.",
          topic: "Project 1"
        },
        {
          id: "d72-q2",
          question: "In Project 1, Well MIT-03 exhibits a sudden surge in WOR from 1.0 to 18.0 over 3 months, with its WOR' derivative slope exceeding 4.5 on the Chan plot. What is the diagnosis?",
          options: [
            "Severe water channeling through a high-permeability fracture or behind-casing cement failure",
            "Normal uniform waterflood matrix sweep",
            "Bottom-water coning",
            "Gas cap expansion"
          ],
          correctOptionIndex: 0,
          explanation: "A steep derivative slope (> 3 to 10) on a Chan plot is the definitive diagnostic fingerprint of water channeling.",
          topic: "Production Analytics"
        },
        {
          id: "d72-q3",
          question: "In contrast, Well MIT-07 shows WOR gradually increasing from 0.5 to 2.5 over 4 years, with WOR' maintaining a flat, steady low slope. What is the diagnosis?",
          options: [
            "Normal stable waterflood areal and vertical sweep",
            "Casing collapse",
            "Severe sand blockage",
            "Liquid loading"
          ],
          correctOptionIndex: 0,
          explanation: "A gradual, low-slope WOR increase over multiple years represents healthy, expected displacement of oil by injected water.",
          topic: "Production Analytics"
        },
        {
          id: "d72-q4",
          question: "Which Python function calculates the discrete rate of change between successive rows in a Pandas timeseries column?",
          options: [
            "df['WOR'].diff()",
            "df['WOR'].mean()",
            "df['WOR'].sum()",
            "df['WOR'].drop()"
          ],
          correctOptionIndex: 0,
          explanation: "`.diff()` computes the discrete difference between row i and row i-1.",
          topic: "Python for Petroleum"
        },
        {
          id: "d72-q5",
          question: "Why do we apply a 3-month moving average to the calculated WOR' derivative before plotting on a log-log scale?",
          options: [
            "Discrete numerical differentiation magnifies monthly test noise and separator surging, which can obscure the underlying diagnostic trend",
            "Because Matplotlib requires moving averages to plot log axes",
            "To artificially increase production rates",
            "To hide failed well tests"
          ],
          correctOptionIndex: 0,
          explanation: "Numerical derivatives amplify noise; smoothing reveals the true physical reservoir trend.",
          topic: "Production Analytics"
        },
        {
          id: "d72-q6",
          question: "What remediation recommendation is directly supported if a Chan plot diagnoses Well MIT-03 with near-wellbore channeling behind casing?",
          options: [
            "A remedial cement squeeze or bridge plug to isolate the channeled casing interval",
            "Drilling a new sidetrack",
            "Increasing water injection by 500%",
            "Closing the surface choke permanently"
          ],
          correctOptionIndex: 0,
          explanation: "Mechanical channeling behind casing is solved via a cement squeeze or mechanical isolation plug.",
          topic: "Production Engineering"
        },
        {
          id: "d72-q7",
          question: "How does calculating field-level GOR trends assist in diagnosing reservoir drive energy in Project 1?",
          options: [
            "If GOR remains flat at solution GOR (Rs), reservoir pressure is maintained above bubble point; if GOR surges, pressure has dropped below Pb releasing free gas",
            "GOR tells the temperature of the wellhead",
            "GOR indicates how many barrels of water are produced",
            "GOR determines pipe diameter"
          ],
          correctOptionIndex: 0,
          explanation: "GOR tracking reveals whether the reservoir has dropped below bubble point or is maintaining pressure support.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d72-q8",
          question: "In Project 1 data cleaning, what command clips negative gas rate meter errors to zero in Pandas?",
          options: [
            "df['Gas_Rate'] = df['Gas_Rate'].clip(lower=0)",
            "df['Gas_Rate'].dropna()",
            "df['Gas_Rate'] = -df['Gas_Rate']",
            "df['Gas_Rate'].clear()"
          ],
          correctOptionIndex: 0,
          explanation: "`.clip(lower=0)` bounds all negative values at 0.",
          topic: "Python for Petroleum"
        },
        {
          id: "d72-q9",
          question: "What is the primary benefit of saving cleaned, processed data as a separate file (`cleaned_production.csv`)?",
          options: [
            "It establishes a reproducible, audited data pipeline where raw master data remains immutable and protected from accidental edits",
            "It takes up more disk space",
            "It turns CSV into Excel",
            "It deletes old files"
          ],
          correctOptionIndex: 0,
          explanation: "Maintaining an immutable raw dataset alongside an audited cleaned dataset is standard data engineering practice.",
          topic: "Project 1"
        },
        {
          id: "d72-q10",
          question: "How many wells in the 15-well dataset typically represent 'bad actors' requiring immediate engineering intervention?",
          options: [
            "Following the Pareto 80/20 rule, 2 to 4 wells typically account for the vast majority of water production and downtime",
            "All 15 wells are identical",
            "Zero wells have problems",
            "Only the deepest well"
          ],
          correctOptionIndex: 0,
          explanation: "In mature fields, a small subset of problem wells (bad actors) creates the vast majority of operating issues and deferred production.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "During Project 1 diagnostic screening, you analyze 6 consecutive months of production for Well MIT-03:\n- Month 31: qo = 300 bbl/d, qw = 300 bbl/d (WOR = 1.00)\n- Month 32: qo = 250 bbl/d, qw = 500 bbl/d (WOR = 2.00)\n- Month 33: qo = 180 bbl/d, qw = 900 bbl/d (WOR = 5.00)\n- Month 34: qo = 120 bbl/d, qw = 1,440 bbl/d (WOR = 12.00)\n- Month 35: qo = 70 bbl/d, qw = 1,680 bbl/d (WOR = 24.00)\n- Month 36: qo = 40 bbl/d, qw = 1,960 bbl/d (WOR = 49.00)\nCalculate: 1) Water Cut at Month 31 and Month 36 (%), 2) The monthly rate of change of WOR (WOR' = Delta WOR / Delta Month) between Month 35 and 36, 3) Total liquid rate at Month 31 vs Month 36 (bbl/d), and 4) Diagnosing whether this reflects coning or channeling.",
      givenValues: [
        { label: "Month 31 Rates", value: "qo = 300, qw = 300 bbl/d" },
        { label: "Month 36 Rates", value: "qo = 40, qw = 1,960 bbl/d" },
        { label: "Month 35 Rates", value: "qo = 70, qw = 1,680 bbl/d (WOR=24)" }
      ],
      stepByStepSolution: [
        "Step 1: Water Cut:\n- Month 31: WC = 300 / (300 + 300) = 300 / 600 = 50.0%.\n- Month 36: WC = 1,960 / (40 + 1,960) = 1,960 / 2,000 = 98.0%.",
        "Step 2: Monthly WOR' between Month 35 and 36:\nWOR_35 = 24.0, WOR_36 = 49.0.\nDelta WOR = 49.0 - 24.0 = 25.0 / month.",
        "Step 3: Total Liquid Rate:\n- Month 31: ql = 300 + 300 = 600 bbl/d.\n- Month 36: ql = 40 + 1,960 = 2,000 bbl/d (liquid rate tripled as water invaded).",
        "Step 4: Diagnosis: WOR surged from 1.0 to 49.0 in just 5 months, with Delta WOR accelerating to 25.0/month and total liquid tripling. This extreme upward acceleration is the classic signature of high-permeability fracture or cement channeling."
      ],
      finalAnswer: "Month 31 WC = 50.0% | Month 36 WC = 98.0% | WOR' = +25.0/month | Liquid Rate = 600 -> 2,000 bbl/d | Diagnosis = SEVERE WATER CHANNELING",
      engineeringSignificance: "This quantitative analysis proves that Well MIT-03 is a primary bad actor. Water cut exploded to 98% because water is channeling behind casing. Remediating this well with a cement squeeze will be the centerpiece of your Project 1 recommendations."
    },
    interview: {
      durationMinutes: 15,
      question: "In Project 1, how did you use Chan diagnostic plots to distinguish between water coning and water channeling across your 15 wells?",
      sampleAnswer: "In Project 1, I evaluated all 15 wells by plotting log(WOR) and the logarithmic time derivative log(d(WOR)/dt) against production time in Python. I identified two distinct behavioral regimes: For Wells MIT-03 and MIT-08, both WOR and its derivative showed a steep, near-vertical upward spike with derivative slopes exceeding 4.0, accompanied by a rapid surge in water cut from 50% to 98% in under 6 months. This confirmed high-velocity water channeling through a behind-casing cement defect or conductive fracture. In contrast, Wells MIT-02 and MIT-11 showed an initial rapid rise in WOR that gradually leveled off into a flat derivative plateau as drawdown stabilized, which is the classic diagnostic signature of bottom-water coning under dynamic equilibrium. Differentiating these two mechanisms was critical: coning requires choke management and drawdown reduction, whereas channeling requires mechanical cement remediation.",
      conceptCheck: "Explain the two distinct curve signatures (steep derivative spike = channeling; flattening derivative plateau = coning)."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `01_data_cleaning_and_diagnostics.ipynb` in your Project 1 repo that executes the data cleaning pipeline and plots Chan diagnostic figures for all 15 wells."
    },
    checklist: [
      { id: "d72-c1", text: "Cleaned raw multi-well telemetry and handled null/negative values", completed: false },
      { id: "d72-c2", text: "Engineered surveillance columns for Water Cut, GOR, and WOR", completed: false },
      { id: "d72-c3", text: "Calculated smoothed time derivatives d(WOR)/dt in Python", completed: false },
      { id: "d72-c4", text: "Constructed Chan log-log diagnostic plots across all 15 wells", completed: false },
      { id: "d72-c5", text: "Classified wells into channeling, coning, and normal sweep groups", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 73
  {
    dayNumber: 73,
    phaseId: 3,
    weekNumber: 9,
    title: "Project 1 Arps DCA & EUR Reserve Forecasting",
    category: "project_1",
    categoryLabel: "Project 1",
    todayGoal: "Fit automated Arps decline curves across all 15 wells, estimate initial rate qi, nominal decline Di, hyperbolic b-factor, and calculate EUR and remaining reserves.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 73 delivers Steps 5 and 6 of Project 1: Decline Curve Analysis and Reserve Estimation. Using the Python automation script developed in Phase 2, you will fit Arps exponential and modified hyperbolic decline models to historical monthly production for each of the 15 wells. You will enforce physical boundary-dominated flow constraints (b <= 0.5 for conventional sandstone), calculate Estimated Ultimate Recovery (EUR) down to the economic limit (15 STB/d), and quantify field-level Remaining Proved Reserves.",
      keyPoints: [
        "Automated Fitting Execution: Loop through all 15 wells using `scipy.optimize.curve_fit`. Fit both: 1) Exponential Model (b = 0, conservative P90 base case) and 2) Hyperbolic Model (bounded 0 <= b <= 0.5, P50 case).",
        "Economic Limit Assumption: Set abandonment rate `q_econ = 15 STB/d` based on field operating costs (OPEX) of $1,200/well-month and $50/bbl net realization.",
        "Programmatic Reserve Calculations: For each well, compute: 1) Cumulative Oil Produced to Date (Np), 2) EUR down to q_econ, 3) Remaining Recoverable Reserves (RR = EUR - Np), and 4) Remaining Well Life (years to q_econ).",
        "Field Aggregate Reserve Rollup: Sum individual well EURs to determine Total Field Proved Developed Producing (PDP) Reserves. Compare against material balance Original Oil in Place (OOIP) to verify recovery factor reasonableness (typically 25–40% under waterflood).",
        "Visual Deliverable: Generate a 15-well multi-panel PDF graphic showing historical actual rates (scatter points) overlaid with fitted Arps forecast curves extending 10 years into the future."
      ],
      coreFormulas: [
        {
          name: "Project 1 EUR Equation (Exponential)",
          formula: "EUR = N_p_current + (q_current - q_econ) / D_daily",
          explanation: "Calculates total lifetime recovery down to 15 STB/d economic limit."
        }
      ],
      fieldInsight: "When presenting decline curves to senior engineers, always show both Exponential and Hyperbolic cases side-by-side in a summary table! Presenting Exponential as the 'Conservative Proved (1P/PDP) Case' and Hyperbolic as the 'Expected Most Likely (2P) Case' proves that you understand industry standard SPE-PRMS reserves classifications."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-PRMS: Petroleum Resources Management System - Reserve Categorization",
      url: "https://www.spe.org/en/prms/",
      platform: "SPE / WPC / AAPG / SPEE",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d73-q1",
          question: "Why should an engineer fit both Exponential (b=0) and Hyperbolic (b>0) models for all wells in Project 1?",
          options: [
            "Exponential provides the conservative Proved (1P/PDP) reserves baseline, while Hyperbolic captures reservoir pressure support for the Proved + Probable (2P) case",
            "Because Python requires running two models to prevent errors",
            "To confuse the auditors",
            "Because hyperbolic decline is illegal"
          ],
          correctOptionIndex: 0,
          explanation: "Standard reserves governance compares conservative exponential baseline against expected hyperbolic recovery.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q2",
          question: "In Project 1, what economic limit abandonment rate (q_econ) is applied based on $1,200/month OPEX and $50/bbl net margin?",
          options: [
            "15 STB/d (approximately $750/day revenue vs operating costs)",
            "500 STB/d",
            "0 STB/d",
            "1,000 STB/d"
          ],
          correctOptionIndex: 0,
          explanation: "At 15 STB/d and $50/bbl margin, daily revenue is $750/day ($22,500/month), comfortably covering direct well lifting costs down to marginal shut-in.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q3",
          question: "If the 15-well field has already produced 12.4 MMSTB of cumulative oil (Np), and the automated Arps DCA calculates total EUR as 18.2 MMSTB, what are the Remaining Proved Reserves?",
          options: [
            "5.8 MMSTB",
            "18.2 MMSTB",
            "12.4 MMSTB",
            "30.6 MMSTB"
          ],
          correctOptionIndex: 0,
          explanation: "Remaining Reserves = EUR - Cumulative Production = 18.2 - 12.4 = 5.8 MMSTB.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q4",
          question: "When evaluating the recovery factor of a mature sandstone waterflood reservoir, what is the typical expected range of Ultimate Recovery Factor (EUR / OOIP)?",
          options: [
            "25% to 45%",
            "2% to 5%",
            "90% to 99%",
            "100%"
          ],
          correctOptionIndex: 0,
          explanation: "Conventional sandstone waterfloods typically achieve ultimate recovery factors between 25% and 45% of OOIP.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d73-q5",
          question: "Which parameter in the Arps hyperbolic equation controls the curvature and rate of decline flattening?",
          options: [
            "The hyperbolic exponent 'b'",
            "The well depth",
            "The diameter of the casing",
            "The surface choke size"
          ],
          correctOptionIndex: 0,
          explanation: "The b-exponent controls decline curvature: b=0 is straight exponential, while higher b flattens the late-time tail.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q6",
          question: "In Project 1, what constraint is applied to the b-exponent in `curve_fit` for this conventional waterflood reservoir?",
          options: [
            "0.0 <= b <= 0.5",
            "b = 2.5",
            "b < 0",
            "b > 5.0"
          ],
          correctOptionIndex: 0,
          explanation: "In conventional boundary-dominated reservoirs, physical b-values range between 0.0 and 0.5.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q7",
          question: "How is Remaining Well Life (years to abandonment) calculated for an exponential decline well?",
          options: [
            "t_remain = [ln(q_current) - ln(q_econ)] / D_annual",
            "t_remain = q_current / q_econ",
            "t_remain = Np * D",
            "t_remain = 100 years"
          ],
          correctOptionIndex: 0,
          explanation: "Rearranging q_econ = q_current * exp(-D * t) yields t = ln(q_current / q_econ) / D.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q8",
          question: "Why should an engineer inspect the R² (coefficient of determination) of each well's decline curve fit?",
          options: [
            "To verify model quality: wells with R² < 0.70 indicate operational disruptions (downtime, workovers, choke changes) requiring manual curve segmenting",
            "Because R² determines wellhead pressure",
            "To check if the well is vertical",
            "R² is not used in engineering"
          ],
          correctOptionIndex: 0,
          explanation: "Low R² flags noisy or disrupted production trends that should not be naively modeled with a single continuous curve.",
          topic: "Production Analytics"
        },
        {
          id: "d73-q9",
          question: "What is 'Proved Developed Producing' (PDP) reserves according to SPE-PRMS standards?",
          options: [
            "Reserves expected to be recovered from existing wells and completions using current operating methods and infrastructure without major capital investment",
            "Undiscovered oil in unexplored deep basins",
            "Oil that requires drilling new horizontal wells",
            "Oil stored in refinery storage tanks"
          ],
          correctOptionIndex: 0,
          explanation: "PDP reserves are the lowest-risk, highest-certainty category: oil producible from currently open wellbores with installed equipment.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d73-q10",
          question: "How do you package the 15-well DCA results in your Project 1 GitHub repository?",
          options: [
            "As an interactive summary table in the README and an exported CSV/Excel table (`dca_reserves_summary.csv`) containing qi, Di, b, EUR, and Remaining Reserves for every well",
            "By writing numbers on a napkin and taking a photo",
            "Keeping the results secret",
            "Deleting the code"
          ],
          correctOptionIndex: 0,
          explanation: "A clean summary table in the README accompanied by downloadable CSV deliverables allows technical reviewers to audit your numbers instantly.",
          topic: "Project 1"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "During Project 1 decline curve analysis, your Python script fits Well MIT-01 with the following exponential decline parameters:\n- Current rate q_curr = 240 STB/d\n- Nominal decline rate D = 0.16 / year\n- Economic limit q_econ = 15 STB/d\n- Cumulative oil produced to date Np_curr = 850,000 STB\nCalculate: 1) Daily nominal decline rate D_daily, 2) Remaining Recoverable Reserves from current time to economic limit, 3) Total Estimated Ultimate Recovery (EUR), 4) Remaining operating well life in years, and 5) If field OOIP allocated to this well's drainage area is 3.50 MMSTB, calculate the ultimate recovery factor (RF %).",
      givenValues: [
        { label: "Current Rate (q_curr)", value: "240 STB/d" },
        { label: "Nominal Decline (D)", value: "0.16 / year" },
        { label: "Economic Limit (q_econ)", value: "15 STB/d" },
        { label: "Current Cumulative (Np_curr)", value: "850,000 STB" },
        { label: "Allocated OOIP", value: "3,500,000 STB" }
      ],
      stepByStepSolution: [
        "Step 1: D_daily = 0.16 / 365 = 0.00043836 / day.",
        "Step 2: Remaining Reserves (RR):\nRR = (q_curr - q_econ) / D_daily = (240 - 15) / 0.00043836 = 225 / 0.00043836 = 513,277 STB.",
        "Step 3: Total Estimated Ultimate Recovery (EUR):\nEUR = Np_curr + RR = 850,000 + 513,277 = 1,363,277 STB (~1.36 MMSTB).",
        "Step 4: Remaining Well Life:\nt_remain = (ln(q_curr) - ln(q_econ)) / D = (ln(240) - ln(15)) / 0.16 = (5.4806 - 2.7081) / 0.16 = 2.7725 / 0.16 = 17.33 years.",
        "Step 5: Ultimate Recovery Factor (RF):\nRF = (EUR / OOIP) * 100 = (1,363,277 / 3,500,000) * 100 = 38.95%."
      ],
      finalAnswer: "D_daily = 0.000438/d | Remaining Reserves = 513,277 STB | EUR = 1,363,277 STB | Well Life = 17.3 yrs | Recovery Factor = 39.0%",
      engineeringSignificance: "The ultimate recovery factor of 39.0% perfectly aligns with classical sandstone waterflood benchmarks (30–45%), validating the technical and geological integrity of your decline curve forecast."
    },
    interview: {
      durationMinutes: 15,
      question: "How did you validate that your automated Arps DCA reserve forecasts in Project 1 were realistic and not over-predicting reserves?",
      sampleAnswer: "I applied a three-step validation framework: 1) Physical Parameter Bounding: During non-linear regression with `curve_fit`, I strictly constrained the hyperbolic exponent b between 0.0 and 0.5, honoring boundary-dominated flow physics for our conventional waterflood reservoir, and enforced a minimum terminal decline rate of 6%/year. 2) Material Balance & Recovery Factor Sanity Checks: After computing EUR for all 15 wells, I summed them to get field-level EUR and divided by our volumetric OOIP. The resulting recovery factor was 34.2%, which sits squarely inside the standard 30–40% benchmark for mature sandstone waterfloods. If any individual well exceeded a 45% recovery factor, it was flagged for manual review. 3) Dual-Model Reporting: I reported both Exponential (P90 Proved base case: 16.1 MMSTB EUR) and Hyperbolic (P50 Most Likely case: 18.2 MMSTB EUR), providing transparent downside protection for reserves certification.",
      conceptCheck: "Describe parameter bounding, recovery factor cross-checks against OOIP, and reporting dual P90/P50 models."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `02_dca_and_eur_forecasting.ipynb` that fits Arps models across the 15 wells and outputs a master results table: `dca_reserves_summary.csv`."
    },
    checklist: [
      { id: "d73-c1", text: "Fitted automated Arps decline curves across all 15 field wells", completed: false },
      { id: "d73-c2", text: "Enforced physical b-factor constraints [0.0, 0.5] for waterflood", completed: false },
      { id: "d73-c3", text: "Calculated EUR and Remaining Reserves down to 15 STB/d economic limit", completed: false },
      { id: "d73-c4", text: "Benchmarked field recovery factors against volumetric OOIP (30–45%)", completed: false },
      { id: "d73-c5", text: "Generated 15-well multi-panel decline curve visual forecast", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 74
  {
    dayNumber: 74,
    phaseId: 3,
    weekNumber: 9,
    title: "Project 1 Workover Identification & Economic Optimization",
    category: "project_1",
    categoryLabel: "Project 1",
    todayGoal: "Identify top workover candidates from screening results, model incremental production uplift (Delta BOPD), estimate Capex, and rank by capital payback and NPV.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 74 represents the business pinnacle of Project 1: translating diagnostic screening and decline curve analysis into an actionable, high-ROI Engineering Workover Program. You will synthesize findings from the Chan plots and DCA baselines to select 4 top workover candidates. For each candidate, you will engineer a specific technical remediation (water shut-off cement squeeze, ESP resizing, or acid stimulation), calculate expected incremental oil production, estimate realistic field workover costs, and rank projects by capital payback period and Net Present Value (NPV).",
      keyPoints: [
        "Candidate Selection Rationale: 1) Well MIT-03: Water channeling behind casing (WC = 98%, WOR'=25) -> Cement squeeze & water shut-off; 2) Well MIT-08: Severe water channeling (WC = 95%) -> Bridge plug isolation; 3) Well MIT-05: Skin damage / scaling (Rate 40% below DCA baseline, high drawdown) -> Solvent & acid matrix stimulation; 4) Well MIT-12: ESP pump operating in severe undercurrent / liquid loading -> Downsize pump and upgrade to variable speed drive (VSD).",
        "Modeling Incremental Oil (Delta BOPD): 1) For water shut-off: maintain fluid lift rate while dropping WC from 98% to 65% -> +330 BOPD; 2) For acid stimulation: remove near-wellbore skin damage from S = +12 to S = 0 -> +140 BOPD.",
        "Realistic Upstream Workover Cost Benchmarks: Slickline/Coiled Tubing acid wash: $45,000–$65,000; Onshore workover rig cement squeeze / bridge plug: $110,000–$140,000; ESP pull, redesign & replacement: $160,000–$200,000.",
        "Financial Decision Metrics: Daily Net Cash Flow = Delta_BOPD * Net_Margin ($55/bbl). Payback Period (days) = Capex / Daily Cash Flow. 1-Year Cumulative Cash Flow = (Daily Cash Flow * 365) - Capex.",
        "Capital Prioritization Matrix: Plot projects on a 2x2 matrix: X-axis = Capital Cost ($k), Y-axis = Incremental BOPD. Rank by shortest payback."
      ],
      coreFormulas: [
        {
          name: "Workover Capital Payback Period",
          formula: "Payback (days) = Capex / (Delta_qo * Net_Oil_Margin)",
          explanation: "Calculates calendar days required for incremental oil revenue to fully recover workover cost."
        },
        {
          name: "1-Year Net Cash Generation",
          formula: "Net_Cash_Yr1 = (Delta_qo * Margin * 365 * Uptime) - Capex",
          explanation: "First-year net cash return after paying off workover Capex."
        }
      ],
      fieldInsight: "Always factor in well uptime when calculating project economics! A common rookie mistake is multiplying Delta BOPD by 365 days assuming 100% runtime. Real operating fields experience 88–92% uptime due to weather, maintenance, and tank hauling. Using 90% uptime in your economic models demonstrates operational realism that impresses hiring managers."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-164489: Economic Evaluation and Capital Allocation for Well Workovers and Interventions",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d74-q1",
          question: "In Project 1, what specific mechanical intervention is recommended for Well MIT-03, diagnosed with behind-casing water channeling?",
          options: [
            "A remedial cement squeeze to seal the channel behind casing, followed by re-perforating clean oil sand",
            "Drilling a horizontal lateral",
            "Increasing water injection by 200%",
            "Shutting down the well forever"
          ],
          correctOptionIndex: 0,
          explanation: "A targeted squeeze cement job seals the defective cement sheath, shutting off extraneous water entry.",
          topic: "Project 1"
        },
        {
          id: "d74-q2",
          question: "If a well's skin factor is reduced from S = +12 (severe damage) to S = 0 (undamaged) via an acid matrix stimulation, what happens to well deliverability?",
          options: [
            "Well productivity index (PI) increases significantly, allowing higher flow rate at lower bottomhole drawdown",
            "Production rate drops to zero",
            "Water cut increases to 100%",
            "Reservoir pressure doubles"
          ],
          correctOptionIndex: 0,
          explanation: "Eliminating positive skin removes near-wellbore flow restrictions, boosting flow efficiency and rate.",
          topic: "Well Testing"
        },
        {
          id: "d74-q3",
          question: "An ESP workover on Well MIT-03 costs $120,000 and delivers an incremental 300 BOPD. At a net oil margin of $55/bbl ($16,500/day), what is the capital payback period?",
          options: [
            "7.27 days",
            "120 days",
            "1.5 years",
            "30 days"
          ],
          correctOptionIndex: 0,
          explanation: "Payback = $120,000 / $16,500/day = 7.27 days (under 8 calendar days).",
          topic: "Project 1"
        },
        {
          id: "d74-q4",
          question: "Why should an engineer apply a realistic uptime factor (e.g. 90%) rather than 100% when calculating annual project cash flow?",
          options: [
            "To reflect operational realities of weather, surface facility maintenance, and electrical power trips",
            "To reduce income taxes",
            "Because Python cannot multiply by 365",
            "Uptime is always 100%"
          ],
          correctOptionIndex: 0,
          explanation: "Surface downtime and trips mean wells rarely operate 365 days; 90% uptime reflects rigorous engineering conservatism.",
          topic: "Production Analytics"
        },
        {
          id: "d74-q5",
          question: "Which of the following is a classic symptom of an oversized ESP operating in a depleted well?",
          options: [
            "Motor cycling and frequent undercurrent trips due to pump-off (fluid level drawn down to the pump intake)",
            "Extremely high flowing tubing pressure",
            "Zero electrical power consumption",
            "Water cut dropping to zero"
          ],
          correctOptionIndex: 0,
          explanation: "An oversized pump drains the wellbore faster than the reservoir can feed it, causing fluid pump-off and undercurrent motor trips.",
          topic: "Artificial Lift"
        },
        {
          id: "d74-q6",
          question: "What remediation solves an oversized ESP suffering from undercurrent trips?",
          options: [
            "Downsizing the pump stages or installing a Variable Speed Drive (VSD) to slow down motor RPM to match true inflow deliverability",
            "Installing a larger motor",
            "Injecting diesel down the casing",
            "Increasing tubing diameter to 7 inches"
          ],
          correctOptionIndex: 0,
          explanation: "A VSD allows frequency reduction (e.g. from 60 Hz to 45 Hz) or pump downsizing to stabilize continuous fluid lift.",
          topic: "Artificial Lift"
        },
        {
          id: "d74-q7",
          question: "In Project 1, what is the total incremental oil potential identified across the top 4 workover candidates?",
          options: [
            "Approximately 750 to 860 incremental BOPD",
            "10 BOPD",
            "50,000 BOPD",
            "Zero"
          ],
          correctOptionIndex: 0,
          explanation: "Remediating the 4 primary bad-actor wells restores 750–860 BOPD, completely erasing the field's production deficit.",
          topic: "Project 1"
        },
        {
          id: "d74-q8",
          question: "How should workover candidates be prioritized if capital budget is limited to $250,000?",
          options: [
            "Rank by shortest capital payback period and highest Profitability Index (NPV / Capex), funding projects until the $250k budget is exhausted",
            "Fund the most expensive project first",
            "Pick projects at random",
            "Spend the money on office renovations"
          ],
          correctOptionIndex: 0,
          explanation: "Capital rationing mandates ranking projects by capital efficiency (Profitability Index / shortest payback) to maximize cash generation.",
          topic: "Project 1"
        },
        {
          id: "d74-q9",
          question: "What is the primary operational risk of performing an acid matrix stimulation in a sandstone reservoir?",
          options: [
            "Secondary precipitation of iron or silica gel if spent acid is not flowed back promptly, causing worse skin damage than before",
            "The acid turning into gas",
            "The well catching fire spontaneously",
            "Water cut dropping too low"
          ],
          correctOptionIndex: 0,
          explanation: "Sandstone acidizing (HF/HCl) requires strict iron control agents and immediate flowback to prevent pore-plugging fluosilicate precipitates.",
          topic: "Production Engineering"
        },
        {
          id: "d74-q10",
          question: "How do you present this workover program in your Project 1 executive summary?",
          options: [
            "As a high-impact 'Executive Decision Table' detailing Candidate, Diagnosis, Proposed Fix, Capex ($), Incremental BOPD, Payback (days), and 1-Year Net Value",
            "As a 50-page text narrative with no tables",
            "By telling management to figure it out themselves",
            "As an audio recording"
          ],
          correctOptionIndex: 0,
          explanation: "An Executive Decision Table summarizes technical justification, capital cost, production uplift, and financial return in a single view.",
          topic: "Project 1"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You evaluate the economics of the 4 Project 1 Workover Candidates:\n- Candidate 1 (Well MIT-03): Water shut-off cement squeeze. Capex = $120,000. Incremental oil = 330 BOPD.\n- Candidate 2 (Well MIT-08): Bridge plug water isolation. Capex = $95,000. Incremental oil = 210 BOPD.\n- Candidate 3 (Well MIT-05): Acid matrix stimulation. Capex = $55,000. Incremental oil = 140 BOPD.\n- Candidate 4 (Well MIT-12): ESP pump downsize & VSD install. Capex = $160,000. Incremental oil = 180 BOPD.\nParameters: Net oil margin = $55 / bbl; Field operating uptime = 90.0%.\nCalculate for each candidate: 1) Daily Net Incremental Cash Flow ($/day), 2) Capital Payback Period in days, 3) First-Year Net Cash Generation ($ after paying off Capex with 90% uptime), and 4) Total First-Year Net Cash generated if all 4 projects are executed.",
      givenValues: [
        { label: "Net Oil Margin", value: "$55 / bbl" },
        { label: "Operating Uptime", value: "90.0% (328.5 operating days/yr)" },
        { label: "Candidate 1", value: "Capex: $120k, +330 BOPD" },
        { label: "Candidate 2", value: "Capex: $95k, +210 BOPD" },
        { label: "Candidate 3", value: "Capex: $55k, +140 BOPD" },
        { label: "Candidate 4", value: "Capex: $160k, +180 BOPD" }
      ],
      stepByStepSolution: [
        "Step 1: Candidate 1 (MIT-03):\n- Daily Cash Flow = 330 * $55 = $18,150 / day\n- Payback = $120,000 / $18,150 = 6.61 days\n- Annual Gross Revenue = 330 * $55 * (365 * 0.90) = 330 * $55 * 328.5 = $5,962,275\n- Year 1 Net Cash = $5,962,275 - $120,000 = $5,842,275.",
        "Step 2: Candidate 2 (MIT-08):\n- Daily Cash Flow = 210 * $55 = $11,550 / day\n- Payback = $95,000 / $11,550 = 8.23 days\n- Annual Gross Revenue = 210 * $55 * 328.5 = $3,794,175\n- Year 1 Net Cash = $3,794,175 - $95,000 = $3,699,175.",
        "Step 3: Candidate 3 (MIT-05):\n- Daily Cash Flow = 140 * $55 = $7,700 / day\n- Payback = $55,000 / $7,700 = 7.14 days\n- Annual Gross Revenue = 140 * $55 * 328.5 = $2,529,450\n- Year 1 Net Cash = $2,529,450 - $55,000 = $2,474,450.",
        "Step 4: Candidate 4 (MIT-12):\n- Daily Cash Flow = 180 * $55 = $9,900 / day\n- Payback = $160,000 / $9,900 = 16.16 days\n- Annual Gross Revenue = 180 * $55 * 328.5 = $3,252,150\n- Year 1 Net Cash = $3,252,150 - $160,000 = $3,092,150.",
        "Step 5: Portfolio Totals:\n- Total Workover Capex = 120k + 95k + 55k + 160k = $430,000\n- Total Incremental Production = 330 + 210 + 140 + 180 = 860 BOPD\n- Total First-Year Net Cash Generated = $5.84M + $3.70M + $2.47M + $3.09M = $15,108,050."
      ],
      finalAnswer: "All Paybacks < 17 days (6.6d to 16.2d) | Total Capex = $430k | Total Gain = +860 BOPD | 1-Year Net Cash = $15.11 Million",
      engineeringSignificance: "This financial model provides an extraordinary business narrative: investing $430,000 in 4 targeted workovers delivers 860 BOPD and generates over $15 million in first-year net cash flow, with every project paying back in under 17 days. This is the exact language that turns technical interviews into job offers."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you present the commercial justification of your Project 1 workover program to an asset manager?",
      sampleAnswer: "I present it using an Executive Decision Matrix that links subsurface physics directly to capital efficiency: 'Our 15-well field was underperforming by 550 BOPD due to behind-casing channeling and artificial lift bottlenecks. I engineered a 4-well workover program requiring a total capital investment of $430,000. Our top project—a $120,000 cement squeeze on Well MIT-03—shuts off a 98% water channel and restores 330 BOPD, achieving full capital payback in just 6.6 days. Across all 4 candidates, the program adds 860 BOPD of high-margin oil, with an average payback of 9.5 days and generating $15.1 million in first-year net cash flow at 90% uptime. By sequencing the fastest-payback projects first, Candidate 1's cash flow fully self-funds Candidates 2, 3, and 4 within 3 weeks, requiring zero external debt financing.'",
      conceptCheck: "Highlight self-funding capital sequencing, rapid payback (< 10 days), and multi-million dollar annual cash flow."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `03_workover_optimization_economics.ipynb` in your Project 1 repo that computes incremental BOPD, payback, and creates the Executive Decision Table."
    },
    checklist: [
      { id: "d74-c1", text: "Selected top 4 workover candidates based on Chan plots and DCA gaps", completed: false },
      { id: "d74-c2", text: "Modeled incremental production uplift (+860 total BOPD)", completed: false },
      { id: "d74-c3", text: "Estimated realistic workover Capex ($430k total across 4 wells)", completed: false },
      { id: "d74-c4", text: "Calculated payback periods (6.6 to 16.2 days) with 90% uptime", completed: false },
      { id: "d74-c5", text: "Built the Executive Decision Table and self-funding capital sequence", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 75
  {
    dayNumber: 75,
    phaseId: 3,
    weekNumber: 9,
    title: "Project 1 Executive Report, Deliverables & GitHub Packaging",
    category: "project_1",
    categoryLabel: "Project 1",
    todayGoal: "Package Project 1 into a complete 12-step deliverable portfolio on GitHub: write the executive summary README, export 300 DPI figures, publish notebooks, and record your walkthrough.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 75 culminates Project 1: final packaging, documentation, and publication on GitHub. A brilliant engineering analysis is worthless if hidden in unformatted scratch files. Today, you will assemble the complete 12-step deliverable package: publish cleaned Jupyter notebooks, export publication-grade 300 DPI figures, generate an executive summary PDF report, and write a stellar `README.md` that serves as your public proof-of-ability storefront for recruiters and hiring managers.",
      keyPoints: [
        "The Professional README.md Architecture: 1) High-Impact Headline ('15-Well Mature Field Production Optimization & Decline Curve Analysis'); 2) Executive Summary & Key Results KPI Cards (+860 BOPD restored, $15.1M net cash, 9.5-day avg payback); 3) Subsurface Field Context (sandstone waterflood, pressure depletion); 4) Methodology & Workflow Pipeline; 5) Embedded Diagnostic Figures (Chan log-log plot, Arps DCA 10-year forecast, field rollup); 6) Workover Prioritization Table; 7) Technologies Used (Python, Pandas, SciPy, Matplotlib, Lasio, Excel).",
        "Jupyter Notebook Quality Assurance: Ensure all notebooks run cleanly from top to bottom (`Kernel -> Restart & Run All`) with zero errors. Include markdown headers, LaTeX equations, and descriptive figure captions.",
        "Exporting Executive Deliverables: Compile a 3-page executive summary PDF report: Page 1: Executive Summary & Field Rollup; Page 2: DCA Reserves & EUR Table; Page 3: Workover Candidate Decision Matrix & Payback Economics.",
        "Git Commit & Release Tagging: Push clean commits with clear commit messages: `git commit -m 'feat: complete 15-well DCA and workover optimization deliverables'`, and tag a formal release `v1.0.0`.",
        "LinkedIn & Resume Integration: Generate a permanent GitHub repository link (e.g. `github.com/username/project-1-production-optimization`) to embed directly into your updated resume and LinkedIn featured section."
      ],
      coreFormulas: [
        {
          name: "Project 1 Headline Achievement Metric",
          formula: "Impact = '+860 BOPD Identified | $15.1M Net Cash Flow | 9.5-Day Avg Payback'",
          explanation: "Concise executive impact statement for resume bullet points and LinkedIn headline."
        }
      ],
      fieldInsight: "Test your GitHub repository on mobile! Over 60% of technical recruiters scan candidate links on their smartphones. Verify that your README formatting looks clean, markdown tables are readable, and embedded chart PNGs render crisply on mobile screens."
    },
    watchOrRead: {
      type: "read",
      title: "GitHub Guides: Mastering Markdown and Building Professional Engineering Repositories",
      url: "https://docs.github.com/en/get-started/writing-on-github",
      platform: "GitHub Official Documentation",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d75-q1",
          question: "What is the primary function of the `README.md` file in your Project 1 GitHub repository?",
          options: [
            "It acts as your executive portfolio storefront, presenting the business problem, key findings, embedded charts, and economic conclusions to hiring managers",
            "It is an internal temporary scratch file",
            "It tells the computer how to install Windows",
            "It encrypts your code"
          ],
          correctOptionIndex: 0,
          explanation: "The README is the first document recruiters and engineers see; it tells the complete technical and business story.",
          topic: "Project 1"
        },
        {
          id: "d75-q2",
          question: "Before pushing Jupyter notebooks to GitHub, what quality assurance step must always be performed?",
          options: [
            "Execute `Restart & Run All` to verify that all cells execute cleanly from top to bottom without errors or broken outputs",
            "Delete all code cells",
            "Change all fonts to Comic Sans",
            "Delete the dataset"
          ],
          correctOptionIndex: 0,
          explanation: "Restarting and running all cells verifies code reproducibility and ensures figures are embedded cleanly.",
          topic: "Project 1"
        },
        {
          id: "d75-q3",
          question: "How should figures be embedded in a GitHub `README.md`?",
          options: [
            "Using standard markdown syntax `![Description](figures/chart.png)` pointing to clean relative image paths",
            "By pasting raw image pixels as text",
            "By asking the reader to draw the chart themselves",
            "By attaching a ZIP file"
          ],
          correctOptionIndex: 0,
          explanation: "Relative image links render high-resolution charts inline directly inside the GitHub web viewer.",
          topic: "Project 1"
        },
        {
          id: "d75-q4",
          question: "What 3 key metrics should be featured in the top KPI summary block of your Project 1 README?",
          options: [
            "1) +860 BOPD Restored Capacity, 2) $15.1M First-Year Net Cash Flow, and 3) 9.5-Day Average Payback Period",
            "1) Lines of code written, 2) Number of coffee cups consumed, 3) Screen brightness",
            "1) Weather, 2) Rig color, 3) Casing weight",
            "1) Number of words, 2) File size, 3) Date"
          ],
          correctOptionIndex: 0,
          explanation: "Leading with bold quantitative business metrics immediately signals high commercial awareness.",
          topic: "Project 1"
        },
        {
          id: "d75-q5",
          question: "Why should an engineer include a 'Technologies Used' section (Python, Pandas, SciPy, Matplotlib, Lasio, Excel) in the repository?",
          options: [
            "It provides essential keywords that match applicant tracking systems (ATS) and recruiter keyword queries",
            "To advertise software companies",
            "Because Python requires a license agreement",
            "To make the file larger"
          ],
          correctOptionIndex: 0,
          explanation: "Recruiters and automated ATS tools scan GitHub and resumes for specific technical skill tags.",
          topic: "Project 1"
        },
        {
          id: "d75-q6",
          question: "How does a candidate prove that their project code is their own authentic work rather than copy-pasted code?",
          options: [
            "By walking through their architectural design choices, explaining data cleaning assumptions, and discussing edge-case troubleshooting in the README and during interviews",
            "By signing an affidavit",
            "By not talking to the interviewer",
            "By refusing to share code"
          ],
          correctOptionIndex: 0,
          explanation: "Explaining specific engineering trade-offs and rationale proves intimate, authentic authorship.",
          topic: "Project 1"
        },
        {
          id: "d75-q7",
          question: "What resolution standard should be used when exporting chart images from Python (`plt.savefig`) for portfolio display?",
          options: [
            "`dpi=300` with `bbox_inches='tight'` to ensure razor-sharp rendering on high-resolution displays and mobile screens",
            "dpi=50 low resolution",
            "72 DPI with cropped labels",
            "Black and white only"
          ],
          correctOptionIndex: 0,
          explanation: "300 DPI ensures publication-grade clarity across 4K monitors and mobile screens.",
          topic: "Python for Petroleum"
        },
        {
          id: "d75-q8",
          question: "What is the recommended structure for an executive summary PDF deliverable?",
          options: [
            "A concise 2 to 3-page briefing note: Executive Overview, DCA Reserves Table, and Workover Prioritization Decision Matrix",
            "A 100-page thesis",
            "A single paragraph with no data",
            "A handwritten note"
          ],
          correctOptionIndex: 0,
          explanation: "Executive decision-makers read 2-page briefing notes; concise synthesis is an essential engineering skill.",
          topic: "Project 1"
        },
        {
          id: "d75-q9",
          question: "How do you tag a release version in Git to commemorate project completion?",
          options: [
            "`git tag -a v1.0.0 -m 'Release: Project 1 Production Optimization Case Study'` followed by `git push origin v1.0.0`",
            "`git delete`",
            "`git checkout master`",
            "`git reset --hard`"
          ],
          correctOptionIndex: 0,
          explanation: "`git tag` creates a formal, permanent milestone marker in your repository history.",
          topic: "Project 1"
        },
        {
          id: "d75-q10",
          question: "How will you leverage this completed Project 1 repository link in your job search starting next week?",
          options: [
            "Hyperlink it under my Experience and Projects sections on my resume, showcase it on my LinkedIn Featured banner, and send it in cold outreach emails to engineering managers",
            "Hide it and tell no one",
            "Delete it immediately",
            "Wait for someone to guess the URL"
          ],
          correctOptionIndex: 0,
          explanation: "Actively showcasing your project across resume, LinkedIn, and warm outreach generates high-conversion interview invitations.",
          topic: "Career Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You conduct a final deliverable audit for the Project 1 Case Study Report:\n- Total Field Wells Analyzed = 15 wells\n- Historical Production Duration = 60 months (5.0 years)\n- Total Cumulative Field Oil Produced = 12,450,000 STB\n- Total Field Estimated Ultimate Recovery (EUR) = 18,250,000 STB\n- Total Proved Remaining Reserves (RR) = 5,800,000 STB\n- Workover Program Incremental Production = +860 BOPD across 4 wells\n- Total Workover Capital Required = $430,000\n- Total First-Year Net Cash Flow = $15,108,000\nCalculate: 1) Percentage of total recoverable reserves already produced (Depletion %), 2) Capital efficiency of the workover program ($ Capex per initial incremental flowing barrel, $/BOPD), 3) Return on Workover Investment (ROI %) in Year 1 alone, and 4) How many barrels of oil must be produced at $55/bbl net margin to fully breakeven on the $430,000 total investment?",
      givenValues: [
        { label: "Cumulative Produced", value: "12,450,000 STB" },
        { label: "EUR", value: "18,250,000 STB" },
        { label: "Total Workover Capex", value: "$430,000" },
        { label: "Incremental Production", value: "860 BOPD" },
        { label: "Year 1 Net Cash Flow", value: "$15,108,000" },
        { label: "Net Margin", value: "$55 / bbl" }
      ],
      stepByStepSolution: [
        "Step 1: Depletion % = (Cumulative Produced / EUR) * 100 = (12,450,000 / 18,250,000) * 100 = 68.22% depleted.",
        "Step 2: Capital Efficiency = Total Capex / Incremental BOPD = $430,000 / 860 BOPD = $500.00 / flowing BOPD.\n(Industry benchmark: drilling new wells costs $8,000–$15,000/flowing BOPD; our workover program is 16x to 30x more capital efficient!).",
        "Step 3: Year 1 Return on Investment (ROI %):\nROI = (Net Cash Flow / Capex) * 100 = ($15,108,000 / $430,000) * 100 = 3,513.5% ROI.",
        "Step 4: Breakeven Barrels:\nBreakeven Barrels = Total Capex / Net Margin = $430,000 / $55/bbl = 7,818.2 STB.\n(At 860 BOPD, the entire field workover program breaks even in: 7,818 bbl / 860 BOPD = 9.09 days!)."
      ],
      finalAnswer: "Depletion = 68.2% | Efficiency = $500/flowing BOPD | Year 1 ROI = 3,514% | Breakeven Volume = 7,818 STB (9.1 days)",
      engineeringSignificance: "Adding these four metrics ($500/flowing BOPD, 3,500% ROI, 9-day breakeven) into your Project 1 Executive Report provides an unassailable financial justification that any VP of Production would immediately fund."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you respond if an interviewer challenges your project by asking: 'These numbers look too good—how do you know an operator could really achieve a 9-day payback on these workovers?'",
      sampleAnswer: "I welcome that question because it allows me to highlight the operational rigor behind my engineering assumptions. First, I explain that shallow payback periods (< 15 days) are standard in mature brownfield operations when you remediate behind-casing mechanical channeling rather than drilling greenfield wells. In drilling, you spend $8M to $12M to create new wellbores; in workovers, the multi-million dollar wellbore, casing, surface pipelines, and separators are already fully amortized sunk costs. Second, I walk through the Capex benchmarks: $120k for a rig squeeze and $55k for coiled tubing acidizing are real Gulf Coast and Permian operator vendor quotes. Third, I show that my models incorporated an operational 90% uptime discount and a conservative $55/bbl net margin after deducting lease operating expenses and royalties. The high returns come from capital efficiency: $500 per flowing barrel compared to $10,000 per flowing barrel for drilling.",
      conceptCheck: "Defend workover economics: brownfield leverage of existing wellbores, realistic vendor quotes, and conservative uptime discounts."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Finalize your Project 1 GitHub repository: push the README.md with embedded charts, verify that all Jupyter notebooks run cleanly, tag version `v1.0.0`, and copy your repository URL for your resume!"
    },
    checklist: [
      { id: "d75-c1", text: "Assembled the complete 12-step deliverable package for Project 1", completed: false },
      { id: "d75-c2", text: "Wrote the executive summary README with bold KPI metric cards", completed: false },
      { id: "d75-c3", text: "Verified all Jupyter notebooks run cleanly without errors", completed: false },
      { id: "d75-c4", text: "Committed and pushed clean code to GitHub, tagged release v1.0.0", completed: false },
      { id: "d75-c5", text: "Prepared permanent repository URL for resume and LinkedIn", completed: false }
    ],
    confidenceRating: 0
  }
];
