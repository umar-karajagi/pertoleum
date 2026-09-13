export interface ResumeData {
  version: "A" | "B";
  name: string;
  targetRole: string;
  tagline: string;
  professionalSummary: string;
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    dates: string;
    bullets: string[];
  }[];
  projects: {
    title: string;
    githubLink: string;
    role: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: string;
    details: string;
  };
}

export const RESUME_A_CORE: ResumeData = {
  version: "A",
  name: "PETROLEUM ENGINEER (CORE)",
  targetRole: "Production Surveillance, Reservoir Engineering & Field Operations",
  tagline: "B.Tech Petroleum Engineering (MIT Pune) | 1+ Year Upstream Experience | SPE Member",
  professionalSummary: "Results-driven Petroleum Engineer (B.Tech, MIT Pune) with 1+ year of upstream operations and reservoir surveillance experience. Proven track record in Arps decline curve forecasting, nodal analysis, well test interpretation, and wireline petrophysical evaluation. Experienced in identifying production bottlenecks and engineering low-cost workover solutions that maximize well deliverability.",
  technicalSkills: [
    {
      category: "Reservoir Engineering",
      skills: ["Material Balance (MBE)", "Vogel Inflow Performance (IPR)", "Arps Decline Curve Analysis (DCA)", "Waterflood Surveillance", "Recovery Factor Optimization"]
    },
    {
      category: "Production & Artificial Lift",
      skills: ["Nodal Analysis", "Electric Submersible Pumps (ESP)", "Gas Lift Troubleshooting", "Sucker Rod Pumping", "Liquid Loading Mitigation", "Chan WOR Diagnostics"]
    },
    {
      category: "Formation Evaluation",
      skills: ["Open-Hole Wireline Logging", "Archie Water Saturation (Sw)", "Larionov Shale Volume (Vsh)", "Density-Neutron Lithology", "Net Pay Delineation"]
    },
    {
      category: "Drilling & Wellsite",
      skills: ["Primary Well Control", "Kill Mud Weight Calculations", "Driller's vs Wait & Weight Method", "Borehole Hydraulics (ECD)", "API Standards & HSE"]
    },
    {
      category: "Software & Languages",
      skills: ["Python (Subsurface Analytics)", "Excel (Advanced / Power Query)", "Lasio", "Prosper / MBAL Concepts", "Petrel / Eclipse Fundamentals"]
    }
  ],
  experience: [
    {
      title: "Junior Petroleum Engineer",
      company: "Upstream Energy Operations / Field Services",
      location: "India",
      dates: "2023 – Present",
      bullets: [
        "Monitored daily production telemetry, choke settings, and wellhead pressures across 20+ producing oil and gas wells, tracking Water Cut and GOR to identify abnormal breakthrough.",
        "Constructed automated Excel production surveillance trackers, eliminating 5 hours of manual reporting weekly and enabling 48-hour earlier detection of artificial lift failures.",
        "Collaborated with senior production engineers on well intervention programs, assisting in workover candidate screening, slickline fluid level shots, and chemical scale inhibition lineups.",
        "Participated in daily operational safety toolbox meetings, strictly enforcing Stop Work Authority (SWA) and verifying wellsite compliance with API and OISD safety standards."
      ]
    }
  ],
  projects: [
    {
      title: "15-Well Mature Field Production Optimization & Arps DCA Case Study",
      githubLink: "https://github.com/umar-karajagi/pertoleum-project-1-production-optimization",
      role: "Lead Petroleum & Surveillance Analyst",
      bullets: [
        "Evaluated 5 years of historical monthly production telemetry across 15 wells, identifying 550 BOPD of deferred production due to water encroachment and lift bottlenecks.",
        "Automated Arps exponential and modified hyperbolic decline curve fitting in Python and Excel, certifying 5.8 MMSTB of Remaining Proved (PDP) Reserves at 15 STB/d economic limit.",
        "Constructed log-log Chan WOR diagnostic plots to isolate behind-casing channeling from coning, engineering a 4-well workover program that restored 860 BOPD.",
        "Formulated an Executive Decision Table proving a 9.5-day average capital payback ($430k Capex) and generating $15.1M in first-year net cash flow at 90% field uptime."
      ]
    },
    {
      title: "Digital Well Log Petrophysics & Volumetric Reservoir Characterization (Equinor Volve)",
      githubLink: "https://github.com/umar-karajagi/pertoleum-project-2-well-log-evaluation",
      role: "Lead Petrophysical Analyst",
      bullets: [
        "Evaluated open-hole wireline logs (GR, Res, RHOB, NPHI, CALI) across the Middle Jurassic Hugin sandstone reservoir, correcting Rw for 212°F downhole temperature.",
        "Implemented vectorized Larionov shale volume and density-neutron effective porosity algorithms in Python, calibrating Archie saturation against Ro in the 100% water leg.",
        "Delineated 78 ft of high-grade Net Pay (65% NTG) above the OWC at 8,228 ft with an average effective porosity of 21.4% and water saturation of 18.2%.",
        "Quantified volumetric Original Oil in Place (OOIP) of 10.85 MMSTB per 160-acre pattern, estimating 3.80 MMSTB of recoverable reserves at a 35% waterflood recovery factor."
      ]
    }
  ],
  education: {
    degree: "B.Tech in Petroleum Engineering",
    institution: "MIT World Peace University (MIT Pune)",
    location: "Pune, India",
    graduationYear: "2023",
    details: "Core Focus: Reservoir Engineering, Well Logging & Petrophysics, Production Optimization, Drilling Hydraulics, Well Control. Active Member, Society of Petroleum Engineers (SPE)."
  }
};

export const RESUME_B_ANALYTICS: ResumeData = {
  version: "B",
  name: "PETROLEUM DATA ANALYTICS SPECIALIST",
  targetRole: "Subsurface Data Science, Digital Oilfield & Automated Surveillance",
  tagline: "B.Tech Petroleum Engineering (MIT Pune) | Python, Pandas, SciPy, Lasio | Upstream Analytics",
  professionalSummary: "Data-driven Petroleum Engineer (B.Tech, MIT Pune) combining classical subsurface physics with advanced Python data science. Expert in automating multi-well decline curve analysis (DCA), parsing digital LAS well logs, cleansing SCADA telemetry, and building predictive surveillance dashboards. Bridges the gap between operations engineers and digital transformation teams to drive field profitability.",
  technicalSkills: [
    {
      category: "Programming & Data Science",
      skills: ["Python (NumPy, Pandas, SciPy, Matplotlib, Seaborn)", "Lasio & Welly (LAS Parsing)", "SQL & Database Querying", "Excel Power Query & Dynamic Arrays", "Jupyter Notebooks / Git"]
    },
    {
      category: "Automated Reservoir Analytics",
      skills: ["Non-Linear Arps Decline Curve Fitting", "Automated EUR Quantification", "Multi-Well Portfolio Screening", "Material Balance Modeling", "Monte Carlo Reserves Simulation"]
    },
    {
      category: "Digital Petrophysics",
      skills: ["Vectorized Archie Water Saturation", "Larionov Shale Volume Algorithms", "Density-Neutron Porosity Combination", "Borehole Washout Quality Filtering", "Net Pay Flagging"]
    },
    {
      category: "Production Engineering Domain",
      skills: ["Chan WOR Diagnostic Derivatives", "Artificial Lift Surveillance (ESP / Gas Lift)", "Nodal Analysis Physics", "PVT Black-Oil Correlations", "Well Testing (Horner PTA)"]
    },
    {
      category: "Workflow Automation",
      skills: ["Automated Daily Production Reporting", "Exception-Based Surveillance Dashboards", "SCADA Sensor Cleansing (Z-Score Filtering)", "Open-Source Subsurface Analytics"]
    }
  ],
  experience: [
    {
      title: "Junior Petroleum Data & Operations Engineer",
      company: "Upstream Energy Operations / Field Services",
      location: "India",
      dates: "2023 – Present",
      bullets: [
        "Architected an automated daily production data cleaning pipeline in Python and Excel, processing 20+ wells with automated outlier detection and null rate interpolation.",
        "Eliminated 6 hours of weekly manual reporting by engineering automated KPI summary cards for field oil rate, water cut, producing GOR, and runtime availability.",
        "Built automated exception alerts flagging wells experiencing > 15% rolling rate momentum drop, identifying 3 underperforming lift systems for operational review.",
        "Collaborated with field superintendents to digitize legacy paper gauge logs into structured SQL/CSV tables for historical decline analysis."
      ]
    }
  ],
  projects: [
    {
      title: "Automated 15-Well Decline Curve Analysis & Workover Optimization Pipeline",
      githubLink: "https://github.com/umar-karajagi/pertoleum-project-1-production-optimization",
      role: "Lead Developer & Petroleum Analyst",
      bullets: [
        "Developed an automated Python pipeline using `scipy.optimize.curve_fit` to optimize Arps parameters (qi, Di, b) across 15 wells, bounding b <= 0.5 for waterflood realism.",
        "Computed Estimated Ultimate Recovery (EUR) and certified 5.8 MMSTB of Remaining PDP Reserves down to 15 STB/d economic limit in under 5 seconds of execution time.",
        "Implemented numerical differentiation in Pandas to generate Chan log-log WOR diagnostic plots, isolating 4 bad actors responsible for 550 BOPD of deferred production.",
        "Engineered a $430k workover program adding 860 BOPD with a 9.5-day capital payback, delivering $15.1M in first-year net cash flow at 90% uptime."
      ]
    },
    {
      title: "Automated Petrophysical Evaluation Pipeline on Real Digital Wireline LAS Logs",
      githubLink: "https://github.com/umar-karajagi/pertoleum-project-2-well-log-evaluation",
      role: "Lead Developer & Petrophysicist",
      bullets: [
        "Built a modular Python package using `lasio` to parse CWLS LAS 2.0 files from the North Sea Volve field, executing mnemonic mapping and environmental caliper QC.",
        "Vectorized non-linear Larionov Vsh, density-neutron porosity, and Archie water saturation (Rw corrected for 212°F), evaluating 400 ft of log data in < 50 milliseconds.",
        "Engineered automated Boolean cutoff masks (Vsh <= 30%, phi >= 10%, Sw <= 50%) to delineate 78 ft of Net Pay (65% NTG) and locate the OWC at 8,228 ft.",
        "Calculated volumetric Original Oil in Place of 10.85 MMSTB ($171M net recoverable value) and generated high-resolution 4-track composite log displays in Matplotlib."
      ]
    }
  ],
  education: {
    degree: "B.Tech in Petroleum Engineering",
    institution: "MIT World Peace University (MIT Pune)",
    location: "Pune, India",
    graduationYear: "2023",
    details: "Specialization in Petroleum Computational Methods & Subsurface Analytics. Active Member, Society of Petroleum Engineers (SPE)."
  }
};

export const LINKEDIN_PROFILE_DATA = {
  headlineFormula: "Petroleum Engineer | Production Surveillance, Reservoir Evaluation & DCA | Python & Petrophysics | B.Tech MIT Pune | +860 BOPD Optimization Case Study",
  aboutText: `I am a Petroleum Engineer (B.Tech, MIT Pune) with approximately 1 year of upstream operational experience, dedicated to solving complex subsurface challenges at the intersection of domain physics and modern data automation.

My core expertise spans three fundamental upstream disciplines:
1. Production Optimization & Artificial Lift: Field surveillance, nodal analysis, ESP/Gas Lift troubleshooting, and diagnosing water breakthrough using Chan WOR log-log diagnostic plots.
2. Reservoir Engineering & Decline Curves: Arps exponential/hyperbolic DCA, EUR estimation, Material Balance (MBE), and well test pressure transient analysis (Horner plots & Bourdet derivatives).
3. Petrophysics & Formation Evaluation: Open-hole wireline evaluation, Larionov shale volume, density-neutron effective porosity, Archie water saturation, and volumetric OOIP quantification.

Recently, I completed and published two comprehensive proof-of-ability projects on GitHub:
- 15-Well Mature Field Production Optimization & DCA: Modeled Arps decline curves, diagnosed behind-casing channeling, and engineered a 4-well workover program adding +860 BOPD with a 9.5-day capital payback ($15.1M Year 1 Net Cash).
- Digital Petrophysics & Volumetric Reservoir Characterization (Equinor Volve): Parsed open-source North Sea LAS wireline logs in Python, identified 78 ft of Net Pay (65% NTG), and quantified 10.85 MMSTB of volumetric OOIP.

I am actively connecting with upstream operators, service companies, and subsurface technology teams.

Let's connect: [Your Email] | GitHub: [Your GitHub URL]`,
  featuredSectionChecklist: [
    "Upload high-resolution 300 DPI graphic banner of Project 1 (Decline Curve & Chan Diagnostic Plot)",
    "Include direct link to Project 1 GitHub Repository",
    "Upload high-resolution graphic banner of Project 2 (4-Track Composite Wireline Log Display)",
    "Include direct link to Project 2 GitHub Repository"
  ]
};

export const OUTREACH_SCRIPTS = [
  {
    targetAudience: "Technical Recruiter / Talent Acquisition",
    platform: "LinkedIn InMail / Message",
    subject: "Application: [Job Title] (Req #[ID]) - Petroleum Engineer (MIT Pune)",
    body: `Hi [Name],

I noticed you lead technical recruiting for [Company]'s upstream operations team. I recently submitted my application for the [Job Title] position (Req #[ID]).

As a Petroleum Engineer (B.Tech, MIT Pune) with 1+ year of upstream experience, I specialize in production surveillance, Arps decline curve analysis, and digital petrophysics. I recently published a 15-well mature field production optimization case study on GitHub, where I diagnosed behind-casing water channeling and modeled workovers restoring 860 BOPD: [GitHub Link].

I would welcome the opportunity to briefly connect and share how my subsurface fundamentals and Python data automation skills align with your team's objectives.

Best regards,
[Your Name]
[Phone Number] | [LinkedIn Profile URL]`
  },
  {
    targetAudience: "Engineering Team Lead / Asset Manager",
    platform: "Direct Email / InMail",
    subject: "Subsurface Surveillance & DCA Case Study - MIT Pune Petroleum Engineer",
    body: `Dear [Name],

I have been following your team's reservoir surveillance work in [Asset/Basin] with great admiration.

As a Petroleum Engineer (B.Tech, MIT Pune) with 1+ year of operational experience, I recently completed two published upstream proof projects that directly address mature brownfield challenges:
1. 15-Well Production Optimization & DCA: Applied Chan diagnostic plots to isolate behind-casing water channeling, engineering a 4-well workover program that added 860 BOPD with an average 9.5-day payback ($15.1M first-year net cash).
2. North Sea Volve Digital Petrophysics: Parsed raw wireline LAS logs in Python to evaluate the Hugin sandstone, delineating 78 ft Net Pay and 10.85 MMSTB OOIP.

You can inspect the full methodology and code here: [GitHub Project Link].

I would deeply appreciate the chance to ask for your quick 10-minute perspective on current surveillance challenges facing your assets. Would you be open to a brief introductory chat next Tuesday or Thursday?

Sincerely,
[Your Name]
[Phone Number]`
  },
  {
    targetAudience: "MIT Pune Alumni in Upstream Oil & Gas",
    platform: "LinkedIn Connection Note",
    subject: "Fellow MIT Pune Petroleum Alum - Informational Advice",
    body: `Hi [Name],

Fellow MIT Pune Petroleum Engineering graduate here! I really admire your career journey to [Company] as a [Current Job Title].

I've recently completed two deep-dive production optimization and petrophysical projects on GitHub and am preparing to transition into a higher-impact reservoir/production role.

I would love to connect and ask for your quick advice and perspective on emerging skill requirements in your team whenever you have a brief moment.

Warm regards,
[Your Name]`
  },
  {
    targetAudience: "5-Day Follow-Up Message (Non-Responders)",
    platform: "Reply in Same Thread",
    subject: "Re: Follow-Up",
    body: `Hi [Name],

Just following up briefly on my note below—I know how busy field and asset schedules can be! Would love to connect for 10 minutes whenever you have a moment next week.

Best,
[Your Name]`
  }
];
