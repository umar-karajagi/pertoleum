import { DayPlan } from '../../types';

export const WEEK_10_DAYS: DayPlan[] = [
  // DAY 76
  {
    dayNumber: 76,
    phaseId: 3,
    weekNumber: 10,
    title: "Project 2 Kickoff: Digital Well Log Evaluation & Subsurface Setting",
    category: "project_2",
    categoryLabel: "Project 2",
    todayGoal: "Define Project 2 scope, understand the open-source Equinor Volve / Permian Basin LAS dataset, set up repository folders, and outline the 10-step petrophysical evaluation pipeline.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Welcome to Project 2: 'Digital Well Log Petrophysical Evaluation and Volumetric Reservoir Characterization'! While Project 1 established your credentials in production surveillance and decline curve analysis, Project 2 showcases your expertise in the subsurface petrophysical domain. Petrophysics is the core gatekeeper of upstream reserves: identifying hydrocarbon-bearing pay, calculating water saturation, and estimating original hydrocarbon in place. Completing this project on real wireline LAS logs proves to recruiters that you can evaluate reservoir quality with professional rigor.",
      keyPoints: [
        "Project 2 Geological Context: Evaluation of wireline logs from the North Sea Volve field (or Permian sandstone/carbonate), focusing on the Middle Jurassic Hugin Formation—a prolific shallow-marine sandstone reservoir bounded by overlying Heather shales and underlying coal/shale sequences.",
        "Available Digital LAS Curves: `DEPTH` (Measured depth, ft/m), `CALI` (Caliper, in), `GR` (Gamma Ray, API), `RT` / `ILD` (Deep Resistivity, ohm-m), `RHOB` (Bulk Density, g/cm³), `NPHI` (Neutron Porosity, v/v), `DT` (Sonic compressional transit time, us/ft).",
        "Repository Folder Setup: `project-2-well-log-evaluation/` containing `/data` (raw LAS and CSV files), `/notebooks` (Python petrophysics pipeline), `/plots` (300 DPI composite log plots), `/deliverables` (Petrophysical Summary Table & Report), and `README.md`.",
        "The 10-Step Petrophysical Pipeline: 1) Header & Wellbore Audit, 2) Data QC & Caliper Washout Flagging, 3) Temperature & Mud Filtrate Corrections (Arps Rw), 4) Shale Volume Determination (Linear & Larionov), 5) Total & Effective Porosity (Density-Neutron), 6) Archie Water Saturation (Sw), 7) Fluid Contact Identification (OWC/GOC), 8) Net Pay Cutoffs & NTG, 9) Volumetric Hydrocarbon-in-Place (OOIP), 10) Composite Log Display & GitHub Publication."
      ],
      coreFormulas: [
        {
          name: "Formation Temperature Gradient",
          formula: "T_res = T_surface + (Geothermal_Gradient * Depth)",
          explanation: "Calculates reservoir temperature at depth for Rw correction."
        }
      ],
      fieldInsight: "Using real public data (like the Equinor Volve Field dataset released in 2018) carries enormous credibility. Recruiters and senior petrophysicists immediately recognize the Hugin Formation and Volve well names (e.g. 15/9-F-1 B or 15/9-F-11 A). Stating that you evaluated genuine North Sea offshore wireline logs proves you work with authentic industry-standard datasets."
    },
    watchOrRead: {
      type: "read",
      title: "Equinor Open Data: Volve Field Reservoir and Well Log Datasets",
      url: "https://www.equinor.com/energy/volve-data-sharing",
      platform: "Equinor Open Data / SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d76-q1",
          question: "What is the primary technical objective of Project 2 in your portfolio?",
          options: [
            "To perform a complete digital petrophysical evaluation from raw LAS wireline logs, calculate Vsh, Porosity, and Archie Sw, delineate Net Pay, and quantify volumetric Hydrocarbons in Place (OOIP)",
            "To design a drill bit",
            "To calculate pump electricity bills",
            "To draft a pipeline contract"
          ],
          correctOptionIndex: 0,
          explanation: "Project 2 proves your ability to translate raw geophysical wireline logs into certified net pay and volumetric reserves.",
          topic: "Project 2"
        },
        {
          id: "d76-q2",
          question: "Which geological formation and depositional environment are modeled in the Project 2 benchmark dataset?",
          options: [
            "Middle Jurassic Hugin Formation: shallow-marine barrier island and shoreface sandstone reservoir",
            "Deep ocean abyssal plain basalts",
            "Glacial till and permafrost",
            "Volcanic lava flows"
          ],
          correctOptionIndex: 0,
          explanation: "The Hugin sandstone in the North Sea is one of the most studied and respected shallow-marine sandstone reservoirs in upstream petroleum literature.",
          topic: "Project 2"
        },
        {
          id: "d76-q3",
          question: "What core set of wireline logging curves is required to perform the Project 2 petrophysical evaluation?",
          options: [
            "Gamma Ray (GR), Caliper (CALI), Deep Resistivity (RT), Bulk Density (RHOB), and Neutron Porosity (NPHI)",
            "Only the wellhead pressure gauge",
            "Mud weight and rotary RPM only",
            "Surface temperature and wind speed"
          ],
          correctOptionIndex: 0,
          explanation: "The 'triple-combo' plus caliper (GR, Caliper, Resistivity, Density, Neutron) is the universal foundation for quantitative petrophysics.",
          topic: "Well Logging"
        },
        {
          id: "d76-q4",
          question: "Why is measured borehole temperature critical for Archie water saturation calculations?",
          options: [
            "Water resistivity Rw changes dramatically with temperature; failing to adjust surface Rw to downhole reservoir temperature destroys Archie Sw calculations",
            "Temperature changes the diameter of the drill pipe",
            "High temperature turns sandstone into granite",
            "Temperature has zero effect on resistivity"
          ],
          correctOptionIndex: 0,
          explanation: "Ion mobility increases with temperature, causing water resistivity Rw to drop sharply with depth. Rw must be corrected using the Arps formula.",
          topic: "Well Logging"
        },
        {
          id: "d76-q5",
          question: "How does having both Project 1 (Production/DCA) and Project 2 (Petrophysics/Reservoir) position you for upstream job applications?",
          options: [
            "It proves you are a well-rounded, versatile subsurface petroleum engineer capable of working in both Reservoir Engineering and Petrophysics/Geoscience roles",
            "It forces companies to pay you two salaries",
            "It limits you to only laboratory jobs",
            "It has no value"
          ],
          correctOptionIndex: 0,
          explanation: "Covering both the geological storage side (Petrophysics) and the dynamic fluid deliverability side (Production/DCA) provides complete asset lifecycle credibility.",
          topic: "Career Strategy"
        },
        {
          id: "d76-q6",
          question: "What open-source Python library will be used as the primary engine for ingesting and manipulating LAS files in Project 2?",
          options: [
            "lasio",
            "pygame",
            "nltk",
            "flask"
          ],
          correctOptionIndex: 0,
          explanation: "lasio is the industry standard Python library for CWLS Log ASCII Standard files.",
          topic: "Python for Petroleum"
        },
        {
          id: "d76-q7",
          question: "What is the standard sampling depth step in digital wireline LAS logs?",
          options: [
            "0.5 ft (or 0.1524 m), providing continuous high-resolution vertical subsurface sampling",
            "100 ft",
            "1 mile",
            "1 inch"
          ],
          correctOptionIndex: 0,
          explanation: "Standard wireline logs record data at 0.5 ft (or 0.1 m / 0.1524 m) depth increments.",
          topic: "Well Logging"
        },
        {
          id: "d76-q8",
          question: "How do you identify a 'Gas Cap' or free gas zone on a standard Density-Neutron log display?",
          options: [
            "Neutron porosity drops dramatically while Density porosity increases, creating a prominent 'gas crossover' balloon",
            "Resistivity drops to zero",
            "Gamma Ray exceeds 300 API",
            "Caliper log collapses"
          ],
          correctOptionIndex: 0,
          explanation: "Low hydrogen index of gas causes apparent low neutron porosity, while low gas density yields high apparent density porosity, creating balloon crossover.",
          topic: "Well Logging"
        },
        {
          id: "d76-q9",
          question: "What is 'Net-to-Gross' (NTG) ratio in reservoir characterization?",
          options: [
            "The ratio of cumulative net pay thickness to total gross reservoir interval thickness (h_net / h_gross)",
            "The price of oil minus taxes",
            "The weight of the drill string divided by mud weight",
            "The total number of barrels produced"
          ],
          correctOptionIndex: 0,
          explanation: "NTG measures what fraction of the gross rock column actually contains productive reservoir pay.",
          topic: "Well Logging"
        },
        {
          id: "d76-q10",
          question: "Where will Project 2 be published upon completion?",
          options: [
            "On GitHub with a public repository, complete documentation, high-resolution composite log displays, and interactive Jupyter notebooks",
            "Printed on paper and buried in a vault",
            "Deleted after grading",
            "Sent only via fax"
          ],
          correctOptionIndex: 0,
          explanation: "A public GitHub portfolio allows recruiters and engineering managers worldwide to audit your technical competence 24/7.",
          topic: "Career Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "In Project 2 kickoff, you calculate the downhole reservoir temperature for wireline Rw correction in Well Volve-11:\n- Surface ambient temperature T_surf = 60.0 deg F\n- Regional geothermal gradient = 1.60 deg F per 100 ft (0.0160 deg F/ft)\n- Top of Hugin reservoir measured depth = 9,500 ft True Vertical Depth (TVD)\n- Laboratory measured water resistivity at surface: Rw_surf = 0.22 ohm-m at 75.0 deg F\nCalculate: 1) Reservoir Temperature at 9,500 ft TVD (T_res in deg F), 2) Temperature increase from surface (Delta T), and 3) Formation Water Resistivity at reservoir temperature (Rw_res) using Arps temperature formula.",
      givenValues: [
        { label: "Surface Temperature (T_surf)", value: "60.0 deg F" },
        { label: "Geothermal Gradient", value: "1.60 deg F / 100 ft" },
        { label: "Reservoir Depth", value: "9,500 ft TVD" },
        { label: "Surface Rw", value: "0.22 ohm-m at 75.0 deg F" }
      ],
      stepByStepSolution: [
        "Step 1: Reservoir Temperature:\nT_res = T_surf + (Gradient * Depth) = 60.0 + (0.0160 * 9,500) = 60.0 + 152.0 = 212.0 deg F.",
        "Step 2: Delta T from surface = 212.0 - 60.0 = 152.0 deg F.",
        "Step 3: Arps Temperature Correction Formula:\nRw_res = Rw_surf * [(T_surf_meas + 6.77) / (T_res + 6.77)]\nRw_res = 0.22 * [(75.0 + 6.77) / (212.0 + 6.77)]\nRw_res = 0.22 * [81.77 / 218.77]\nRw_res = 0.22 * 0.37377 = 0.0822 ohm-m."
      ],
      finalAnswer: "T_res = 212.0 deg F | Delta T = +152 deg F | Rw at reservoir conditions = 0.0822 ohm-m",
      engineeringSignificance: "Notice that heating formation brine from 75 deg F to 212 deg F cuts water resistivity by nearly two-thirds (from 0.22 down to 0.082 ohm-m). If an engineer accidentally used the surface Rw of 0.22 in Archie's equation, calculated water saturation would be artificially inflated by 64%, turning a rich oil discovery into an apparent dry hole!"
    },
    interview: {
      durationMinutes: 15,
      question: "How do you introduce Project 2 in an interview for a Reservoir Engineer or Petrophysicist position?",
      sampleAnswer: "I present Project 2 as a comprehensive digital petrophysical evaluation: 'In Project 2, I performed an end-to-end petrophysical evaluation of the Middle Jurassic Hugin shallow-marine sandstone reservoir using open-source wireline LAS logs from the North Sea Volve field. My objective was to construct an automated Python petrophysical interpretation workflow to calculate shale volume, effective porosity, fluid contacts, and Archie water saturation, and quantify volumetric Original Oil in Place. Using lasio, Pandas, and Matplotlib, I ingested the triple-combo logs, corrected water resistivity for downhole reservoir temperature (212 deg F), flagged borehole washouts using caliper data, and applied Larionov shaly-sand equations. Across a 120-ft gross interval, I identified 78 ft of Net Pay with an average effective porosity of 21.4% and an average water saturation of 18.2%, calculating a Net-to-Gross ratio of 65% and 8.4 MMSTB of volumetric OOIP per 160-acre drainage unit.'",
      conceptCheck: "Hit the quantitative highlights: Hugin sandstone, 212 deg F Rw correction, 78 ft Net Pay, 21.4% porosity, 18.2% Sw, 8.4 MMSTB OOIP."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Initialize your Project 2 workspace: create `project-2-well-log-evaluation/`, set up subfolders `/data`, `/notebooks`, `/plots`, `/deliverables`, and download or create the Volve/Permian benchmark LAS file."
    },
    checklist: [
      { id: "d76-c1", text: "Reviewed Project 2 objectives, Hugin geological context, and LAS curves", completed: false },
      { id: "d76-c2", text: "Established git repository and professional folder architecture", completed: false },
      { id: "d76-c3", text: "Mapped the 10-step petrophysical evaluation pipeline", completed: false },
      { id: "d76-c4", text: "Calculated downhole reservoir temperature (212 F) and corrected Rw", completed: false },
      { id: "d76-c5", text: "Drafted the STAR interview narrative for Project 2", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 77
  {
    dayNumber: 77,
    phaseId: 3,
    weekNumber: 10,
    title: "Project 2 Digital Well Log QC & Environmental Corrections",
    category: "project_2",
    categoryLabel: "Project 2",
    todayGoal: "Perform digital quality control on raw LAS curves: audit headers, harmonize vendor mnemonics, clean -999.25 nulls, and create automated Caliper borehole washout flags.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 77 focuses on Steps 1, 2, and 3 of Project 2: Quality Control, Mnemonic Harmonization, and Borehole Environmental Auditing. Raw wireline logs are frequently contaminated by borehole washouts, mud cake buildup, tool stick-slip, and logging nulls (-999.25). Pad-contact tools (like density and micro-resistivity) lose contact with the rock wall in washed-out holes, measuring drilling mud rather than formation rock. Writing a robust Python QC module to flag bad hole intervals prevents false porosity readings.",
      keyPoints: [
        "Mnemonic Harmonization Engine: Wireline contractors use conflicting names. Write a Python translation dictionary mapping vendor mnemonics: `{'GR_EDTC': 'GR', 'AHT90': 'RT', 'RHO8': 'RHOB', 'NPOR': 'NPHI', 'HCAL': 'CALI'}` into canonical standards.",
        "Null Value Sanitization: Identify and replace all standard nulls (`-999.25`, `-9999.0`, `999.25`) with `np.nan`. Ensure depths with missing curves do not corrupt statistical distributions.",
        "Borehole Washout Flagging: Compute `Delta_CALI = CALI - Bit_Size`. If `Delta_CALI > 2.0 inches` (e.g. caliper reads > 10.5\" in an 8.5\" bit hole), the borehole is severely washed out. Flag these depths with a boolean mask `df['Bad_Hole'] = True`.",
        "Density-Caliper Interaction QC: Density pad tools rely on physical contact with the borehole wall. In washed-out zones, the pad reads light drilling mud (rho ~ 1.1 g/cm³), creating false bulk density drops and artificially massive apparent porosity. The QC script must automatically flag and discount these intervals.",
        "Automated QC Report Deliverable: Output a summary table showing logging depth range, curve coverage percentages, and percentage of the reservoir interval affected by borehole washout."
      ],
      coreFormulas: [
        {
          name: "Borehole Washout Condition",
          formula: "Washout_Flag = True if (CALI - Bit_Size) > 2.0 inches",
          explanation: "Flags intervals where pad-contact density tools lose wall contact."
        }
      ],
      fieldInsight: "Always inspect the Density Correction curve (`DRHO` or `PEF`) alongside Caliper! If `DRHO` exceeds +/- 0.05 g/cm³, the density pad had poor contact or thick mud cake was present. A junior engineer who checks DRHO and Caliper before believing a density porosity spike demonstrates true petrophysical maturity."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Borehole Environment and Environmental Corrections for Well Logs",
      url: "https://petrowiki.spe.org/Environmental_corrections",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d77-q1",
          question: "Why is the Caliper log (CALI) the very first curve an engineer should inspect before analyzing Density or Neutron logs?",
          options: [
            "If the borehole is washed out (Caliper > Bit Size), pad-contact density tools lose contact with the rock wall and measure drilling mud, creating false porosity spikes",
            "Because Caliper measures water saturation",
            "Because Caliper determines the price of oil",
            "Caliper tells the age of the rock"
          ],
          correctOptionIndex: 0,
          explanation: "Pad-contact sensors require firm wall contact; severe washouts cause tools to read mud instead of rock.",
          topic: "Well Logging"
        },
        {
          id: "d77-q2",
          question: "In Project 2, how does your Python script handle conflicting vendor mnemonics (e.g. 'AHT90' from Schlumberger vs 'ILD' from Baker Hughes)?",
          options: [
            "It runs a dictionary-based translation mapping vendor curve names into standard canonical identifiers ('RT', 'GR', 'RHOB', 'NPHI')",
            "It deletes curves with non-standard names",
            "It renames the entire file to .txt",
            "It requires the user to re-log the well"
          ],
          correctOptionIndex: 0,
          explanation: "Mnemonic harmonization dictionaries standardize disparate vendor curves into a single uniform schema.",
          topic: "Python for Petroleum"
        },
        {
          id: "d77-q3",
          question: "What is the physical meaning if Caliper reading is LESS than the drill bit diameter (CALI < Bit_Size)?",
          options: [
            "A permeable formation where drilling mud filtrate has invaded, leaving a solid filter mud cake deposited on the borehole wall",
            "The wellbore has expanded",
            "The bit shrank downhole",
            "The rock has dissolved"
          ],
          correctOptionIndex: 0,
          explanation: "In permeable formations, filtrate leaks off into the rock, leaving an impermeable filter mud cake that restricts the caliper arms.",
          topic: "Well Logging"
        },
        {
          id: "d77-q4",
          question: "Which Python command flags all depth intervals where Caliper exceeds the 8.5-inch bit size by more than 1.5 inches?",
          options: [
            "df['Washout'] = (df['CALI'] - 8.5) > 1.5",
            "df['Washout'] = df['CALI'] == 8.5",
            "df.drop('CALI')",
            "df['Washout'] = 'Bad'"
          ],
          correctOptionIndex: 0,
          explanation: "Boolean masking creates a True/False column identifying intervals where hole enlargement exceeds 1.5 inches.",
          topic: "Python for Petroleum"
        },
        {
          id: "d77-q5",
          question: "What does the Density Correction curve (`DRHO`) measure?",
          options: [
            "The magnitude of correction applied by the dual-detector density tool to account for mud cake and minor borehole roughness (in g/cm³)",
            "The speed of drilling",
            "The percentage of gas produced",
            "The depth of the ocean"
          ],
          correctOptionIndex: 0,
          explanation: "DRHO represents the correction applied by dual detectors; if |DRHO| > 0.05 g/cm³, density readings are questionable.",
          topic: "Well Logging"
        },
        {
          id: "d77-q6",
          question: "How does deep induction or deep propagation resistivity (RT) respond to minor borehole washouts compared to shallow micro-resistivity (Rxo)?",
          options: [
            "Deep resistivity has a large depth of investigation (40–100 inches) and is largely unaffected by shallow washouts, whereas shallow tools are severely corrupted",
            "Deep resistivity reads zero in washouts",
            "Shallow tools are immune to washouts",
            "Both tools read identical values"
          ],
          correctOptionIndex: 0,
          explanation: "Deep induction investigates deep into the uninvaded virgin formation, making it far more resilient to borehole rugosity than shallow pad tools.",
          topic: "Well Logging"
        },
        {
          id: "d77-q7",
          question: "In Python Pandas, what happens if an engineer calculates `df['GR'].mean()` without replacing `-999.25` null values with `np.nan`?",
          options: [
            "The negative null values heavily drag the arithmetic mean downward, producing absurdly negative average Gamma Ray values",
            "Pandas automatically ignores -999.25 without being told",
            "Python throws a syntax error",
            "The mean becomes positive infinity"
          ],
          correctOptionIndex: 0,
          explanation: "Pandas treats numeric -999.25 as a valid number; failing to replace with NaN severely corrupts statistical calculations.",
          topic: "Python for Petroleum"
        },
        {
          id: "d77-q8",
          question: "What visual indication on a wireline log plot signals tool stick-and-slip (cable stretching and snapping)?",
          options: [
            "Abrupt flat-topped stair-step 'sawtooth' patterns across all curves where readings freeze at constant values and then jump suddenly",
            "A smooth sine wave",
            "All curves turning into circles",
            "The depth scale disappearing"
          ],
          correctOptionIndex: 0,
          explanation: "When a logging tool gets stuck and cable stretches, depth continues to increment while curves freeze, creating stair-step artifacts.",
          topic: "Well Logging"
        },
        {
          id: "d77-q9",
          question: "In Project 2, what quality control deliverable is exported after the data cleansing step?",
          options: [
            "A cleaned master dataset `cleaned_well_log.csv` and an automated Data QC Summary Table documenting curve coverage and washout percentages",
            "A printed textbook",
            "A seismic cross-section",
            "An environmental permit"
          ],
          correctOptionIndex: 0,
          explanation: "Documenting the percentage of reliable vs washed-out data establishes a transparent, auditable engineering trail.",
          topic: "Project 2"
        },
        {
          id: "d77-q10",
          question: "Why should an engineer preserve the original raw LAS file when creating a cleaned dataset?",
          options: [
            "To comply with industry regulatory compliance and data audit standards; raw subsurface data must always remain immutable",
            "To fill up the hard drive",
            "Because Python cannot overwrite files",
            "To hide mistakes"
          ],
          correctOptionIndex: 0,
          explanation: "Original raw geophysical data is considered primary legal evidence and must never be overwritten or destroyed.",
          topic: "Project 2"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "During Project 2 well log QC on Well Volve-11, you audit a 400 ft logging section (8,000 ft to 8,400 ft, 0.5 ft sampling = 801 depth samples). Bit size is 8.50 inches.\nYour Python QC script analyzes the Caliper curve (CALI) and finds:\n- Samples with CALI <= 8.50\" (mud cake buildup) = 160 samples\n- Samples with 8.50\" < CALI <= 10.00\" (gauge hole / minor rugosity) = 545 samples\n- Samples with CALI > 10.00\" (severe borehole washout > 1.5\" enlargement) = 96 samples\n- Total gross thickness = 400 ft\nCalculate: 1) Thickness of the severe washout zone (ft), 2) Percentage of the logged section affected by severe washout (%), 3) Thickness of the mud cake interval indicating permeable rock (ft), and 4) If the reservoir zone lies between 8,150 ft and 8,250 ft, and has only 4 washout samples, what is the data reliability percentage of the reservoir zone?",
      givenValues: [
        { label: "Total Logged Section", value: "400 ft (801 samples)" },
        { label: "Bit Size", value: "8.50 inches" },
        { label: "Mud cake samples (<= 8.5\")", value: "160 samples" },
        { label: "Gauge samples (8.5\"-10.0\")", value: "545 samples" },
        { label: "Severe washout samples (> 10.0\")", value: "96 samples" },
        { label: "Reservoir Zone", value: "8,150-8,250 ft (100 ft = 201 samples)" },
        { label: "Reservoir Washout Samples", value: "4 samples" }
      ],
      stepByStepSolution: [
        "Step 1: Severe Washout Thickness = 96 samples * 0.5 ft = 48.0 ft.",
        "Step 2: Severe Washout Percentage = (48.0 ft / 400.0 ft) * 100 = 12.00%.",
        "Step 3: Mud cake Thickness = 160 samples * 0.5 ft = 80.0 ft (indicates 80 ft of permeable sand with active filtrate invasion).",
        "Step 4: Reservoir Zone Reliability (8,150 to 8,250 ft):\nTotal reservoir samples = 201 samples (100 ft).\nWashout samples in reservoir = 4 samples (2.0 ft).\nReliable samples = 201 - 4 = 197 samples (98.0 ft).\nReservoir Data Reliability = (197 / 201) * 100 = 98.01%."
      ],
      finalAnswer: "Washout Thickness = 48.0 ft (12.0%) | Permeable Mud cake = 80.0 ft | Reservoir Reliability = 98.01%",
      engineeringSignificance: "While the overall 400 ft section suffered 12% washouts (primarily in overlying soft shales), the target sandstone reservoir interval has a 98% data reliability score with only 2.0 ft of washout. This confirms that Density and Neutron logs across the reservoir are physically trustworthy."
    },
    interview: {
      durationMinutes: 15,
      question: "In Project 2, how did you ensure that bad hole conditions did not corrupt your petrophysical porosity calculations?",
      sampleAnswer: "I built an automated environmental quality control module in Python before running any petrophysical equations. First, I compared the caliper curve against bit size (8.5 inches) to identify hole enlargement. Across soft overlying shale sections, caliper exceeded 11 inches, causing density-correction spikes (|DRHO| > 0.05 g/cm³) and false apparent porosity increases. I wrote a boolean QC filter that tagged intervals where caliper enlargement exceeded 1.5 inches as 'Bad_Hole'. For the target Hugin sandstone reservoir between 8,150 ft and 8,250 ft, the borehole was remarkably in-gauge: caliper showed an active mud cake buildup (caliper reading 8.35\" vs 8.50\" bit size) across 80 ft of permeable sand, and data reliability was 98.0%. For the 2 ft of minor washout in the reservoir, my script automatically defaulted to acoustic sonic porosity rather than pad density porosity, ensuring zero corrupted data influenced our net pay conclusions.",
      conceptCheck: "Explain caliper-bit size comparison, DRHO validation, mud cake evidence of permeability, and sonic fallback in washouts."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `01_las_ingestion_and_qc.ipynb` in your Project 2 repo that parses the raw LAS file, maps mnemonics, flags washouts with a boolean column, and exports `cleaned_well_log.csv`."
    },
    checklist: [
      { id: "d77-c1", text: "Parsed raw wireline LAS file using Python `lasio`", completed: false },
      { id: "d77-c2", text: "Implemented mnemonic harmonization dictionary across vendor curves", completed: false },
      { id: "d77-c3", text: "Sanitized logging null values (-999.25) with `np.nan`", completed: false },
      { id: "d77-c4", text: "Engineered automated Caliper washout flags (Delta CALI > 1.5\")", completed: false },
      { id: "d77-c5", text: "Verified 98% reservoir data reliability and exported cleaned CSV", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 78
  {
    dayNumber: 78,
    phaseId: 3,
    weekNumber: 10,
    title: "Project 2 Quantitative Petrophysics: Vsh, Porosity & Archie Sw",
    category: "project_2",
    categoryLabel: "Project 2",
    todayGoal: "Execute vectorized petrophysical calculations in Python: Larionov shale volume, density-neutron porosity, temperature-adjusted Archie Sw, and fluid contact detection.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 78 executes Steps 4, 5, 6, and 7 of Project 2: Quantitative Petrophysical Evaluation. Using the cleaned wireline data, you will implement vectorized algorithms in Python to calculate the three fundamental reservoir properties: Shale Volume (Vsh), Effective Porosity (phi_e), and Archie Water Saturation (Sw). You will also identify the Free Water Level / Oil-Water Contact (OWC) by tracking the sharp resistivity transition and saturation profile.",
      keyPoints: [
        "Shale Volume (Vsh) Calculation: Pick Gamma Ray clean sand baseline (`GR_clean = 28 API`) and regional shale baseline (`GR_shale = 120 API`). Compute linear index `IGR = (GR - 28) / (120 - 28)`. Apply non-linear Larionov Older Rocks formula: `Vsh = 0.33 * (2.0**(2.0 * IGR) - 1.0)`. Clip: `Vsh = np.clip(Vsh, 0.0, 1.0)`.",
        "Total & Effective Porosity: Bulk density porosity: `phi_d = (2.65 - RHOB) / (2.65 - 1.0)`. Combine with neutron porosity: `phi_total = np.sqrt((phi_d**2 + NPHI**2) / 2.0)`. Calculate Effective Porosity: `phi_e = phi_total * (1.0 - Vsh)`.",
        "Water Saturation via Archie's Equation: Parameters for Hugin sandstone: `a = 1.0`, `m = 1.95` (cementation), `n = 2.00` (saturation), `Rw = 0.0822 ohm-m` at 212 deg F. Formula: `Sw = np.clip(((a * Rw) / ((phi_e**m) * RT))**(1.0 / n), 0.0, 1.0)`. Hydrocarbon Saturation: `Sh = 1.0 - Sw`.",
        "Oil-Water Contact (OWC) Identification: At depth 8,228 ft, Deep Resistivity (RT) drops abruptly from 45.0 ohm-m (hydrocarbon) to 1.2 ohm-m (100% water wet), while Sw surges from 18% to 95%. This defines the Oil-Water Contact at 8,228 ft MD.",
        "Gas-Oil Contact (GOC) Inspection: Inspect Neutron-Density crossover in the upper reservoir section. If crossover is absent and GOR matches solution GOR, the reservoir is an undersaturated oil column with no free gas cap."
      ],
      coreFormulas: [
        {
          name: "Project 2 Vectorized Archie Sw",
          formula: "df['Sw'] = np.clip(((1.0 * 0.0822) / (df['phi_e']**1.95 * df['RT']))**(0.5), 0.0, 1.0)",
          explanation: "Computes water saturation across every 0.5-ft depth sample."
        }
      ],
      fieldInsight: "Always cross-check your calculated Sw against deep resistivity in the 100% water zone (Ro)! In the water zone below the OWC (where Sw = 1.0), Archie's law simplifies to `Ro = F * Rw = (1 / phi^m) * Rw`. If your calculated Ro matches the actual tool resistivity reading in the water leg (e.g. 1.2 ohm-m), your cementation exponent 'm' and formation water resistivity 'Rw' are perfectly calibrated!"
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Archie Water Saturation and Shaly Sand Analysis",
      url: "https://petrowiki.spe.org/Archie_saturation_equation",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d78-q1",
          question: "In Project 2, what baseline values are picked from the Gamma Ray log to calculate Shale Volume in the Hugin sandstone?",
          options: [
            "GR_clean = 28 API (pure clean sand) and GR_shale = 120 API (pure regional shale)",
            "GR_clean = 0 API and GR_shale = 1,000 API",
            "GR_clean = 150 API and GR_shale = 50 API",
            "GR is not used for shale volume"
          ],
          correctOptionIndex: 0,
          explanation: "Statistical percentiles (P5 and P95) of the GR curve establish authentic sand and shale baselines.",
          topic: "Well Logging"
        },
        {
          id: "d78-q2",
          question: "Why is the non-linear Larionov Older Rocks equation applied to calculate Vsh rather than simple linear IGR?",
          options: [
            "Because linear IGR overestimates clay content due to non-clay radioactive minerals (feldspars, mica, heavy minerals) commonly present in Mesozoic sandstones",
            "Because computers cannot calculate linear equations",
            "Larionov equation is legally mandated by OPEC",
            "Linear IGR produces negative numbers"
          ],
          correctOptionIndex: 0,
          explanation: "Larionov's non-linear correction accounts for radioactive non-clay minerals in consolidated sandstones.",
          topic: "Well Logging"
        },
        {
          id: "d78-q3",
          question: "In the Hugin reservoir, matrix bulk density for clean quartz sandstone is standardly taken as which value?",
          options: [
            "2.65 g/cm³",
            "2.71 g/cm³ (calcite/limestone)",
            "2.87 g/cm³ (dolomite)",
            "1.00 g/cm³"
          ],
          correctOptionIndex: 0,
          explanation: "Pure quartz matrix density is 2.65 g/cm³; calcite is 2.71 g/cm³ and dolomite is 2.87 g/cm³.",
          topic: "Well Logging"
        },
        {
          id: "d78-q4",
          question: "How do you identify the Oil-Water Contact (OWC) depth in Project 2?",
          options: [
            "By finding the depth where Deep Resistivity abruptly collapses from > 40 ohm-m down to ~1.2 ohm-m, while calculated Sw surges from < 20% to > 90%",
            "By looking at the wellhead valve",
            "By checking when the drill bit became dull",
            "The OWC is always at 10,000 ft"
          ],
          correctOptionIndex: 0,
          explanation: "The OWC is demarcated by the sharp transition between high-resistivity hydrocarbon pay and low-resistivity 100% formation water.",
          topic: "Well Logging"
        },
        {
          id: "d78-q5",
          question: "What values were used for Archie's parameters in the Project 2 Hugin sandstone evaluation?",
          options: [
            "a = 1.0, m = 1.95 (cementation exponent), n = 2.00 (saturation exponent), Rw = 0.0822 ohm-m",
            "a = 5.0, m = 0.5, n = 10.0, Rw = 5.0",
            "a = 0, m = 0, n = 0, Rw = 0",
            "a = 1.0, m = 3.5, n = 1.0, Rw = 1.0"
          ],
          correctOptionIndex: 0,
          explanation: "These are standard, core-calibrated electrical rock properties for consolidated North Sea Jurassic sandstones.",
          topic: "Project 2"
        },
        {
          id: "d78-q6",
          question: "In the 100% water-bearing zone below the OWC (Sw = 1.0), what is the relationship between formation resistivity Rt and water resistivity Rw?",
          options: [
            "Rt = Ro = F * Rw = (a / phi^m) * Rw",
            "Rt = 0",
            "Rt = 1,000,000 ohm-m",
            "Rt = Rw / 100"
          ],
          correctOptionIndex: 0,
          explanation: "At 100% water saturation, Rt equals Ro (wet rock resistivity), defined by Archie's formation factor F multiplied by Rw.",
          topic: "Well Logging"
        },
        {
          id: "d78-q7",
          question: "What does an average hydrocarbon saturation Sh = 81.8% imply regarding the pore fluid composition in the pay zone?",
          options: [
            "81.8% of the interconnected pore volume is filled with oil, and only 18.2% is filled with irreducible capillary water",
            "The well produces 81.8% water at surface",
            "The reservoir has zero oil",
            "The rock is 81.8% solid quartz"
          ],
          correctOptionIndex: 0,
          explanation: "Sh = 1 - Sw. A hydrocarbon saturation of 81.8% indicates a rich, highly saturated commercial oil column.",
          topic: "Well Logging"
        },
        {
          id: "d78-q8",
          question: "Why should an engineer use `np.clip(Sw, 0.0, 1.0)` in Python after calculating Archie Sw?",
          options: [
            "To bound saturation between physically meaningful limits (0% to 100%), preventing mathematical artifacts in tight or noisy depth intervals",
            "To convert water into gas",
            "To delete dry holes",
            "It is required by the Python compiler"
          ],
          correctOptionIndex: 0,
          explanation: "Clipping maintains strict physical realism [0, 1] across all sampled depth points.",
          topic: "Python for Petroleum"
        },
        {
          id: "d78-q9",
          question: "In a gas cap, why does apparent Neutron Porosity (NPHI) read abnormally low?",
          options: [
            "Gas has a much lower hydrogen density (hydrogen index) than liquid oil or water; neutron tools count slowed neutrons and interpret low hydrogen as low porosity",
            "Gas absorbs all neutrons permanently",
            "Gas increases rock density",
            "Gas cools the tool down to absolute zero"
          ],
          correctOptionIndex: 0,
          explanation: "Neutron logging tools measure hydrogen concentration; the low density of gas creates a low apparent neutron porosity.",
          topic: "Well Logging"
        },
        {
          id: "d78-q10",
          question: "How does Effective Porosity (phi_e) differ from Total Porosity (phi_total)?",
          options: [
            "Effective porosity discounts clay-bound water and non-interconnected pores, representing only the pore space that can transmit mobile hydrocarbons",
            "Effective porosity includes the solid grains",
            "Total porosity is always smaller than effective porosity",
            "They are identical in all formations"
          ],
          correctOptionIndex: 0,
          explanation: "Effective porosity excludes isolated pores and clay-bound water, measuring the usable flow and storage capacity.",
          topic: "Well Logging"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "At depth 8,190.0 ft in Well Volve-11, your Python petrophysics script extracts the following wireline measurements:\n- GR = 38.0 API (GR_clean = 28.0, GR_shale = 120.0)\n- RHOB = 2.22 g/cm³ (rho_ma = 2.65 g/cm³, rho_fl = 1.00 g/cm³)\n- NPHI = 0.25 (v/v)\n- Deep Resistivity RT = 48.0 ohm-m\n- Formation parameters: Rw = 0.0822 ohm-m, a = 1.0, m = 1.95, n = 2.00\nCalculate: 1) Linear IGR and Larionov Vsh, 2) Bulk density porosity phi_d and combined total porosity phi_total, 3) Effective porosity phi_e, 4) Archie water saturation Sw (%), and 5) Hydrocarbon saturation Sh (%).",
      givenValues: [
        { label: "Measured GR", value: "38.0 API (clean: 28, shale: 120)" },
        { label: "RHOB / NPHI", value: "2.22 g/cm³ / 0.25 v/v" },
        { label: "RT", value: "48.0 ohm-m" },
        { label: "Rw / a / m / n", value: "0.0822 ohm-m / 1.0 / 1.95 / 2.0" }
      ],
      stepByStepSolution: [
        "Step 1: IGR = (38.0 - 28.0) / (120.0 - 28.0) = 10.0 / 92.0 = 0.1087.\nLarionov Vsh = 0.33 * (2.0^(2.0 * 0.1087) - 1.0) = 0.33 * (2.0^(0.2174) - 1.0)\n2.0^0.2174 = 1.1626\nVsh = 0.33 * (1.1626 - 1.0) = 0.33 * 0.1626 = 0.0537 = 5.37% (Very clean sand).",
        "Step 2: Density Porosity phi_d = (2.65 - 2.22) / (2.65 - 1.00) = 0.43 / 1.65 = 0.2606 = 26.06%.\nCombined Total Porosity phi_total = sqrt[(0.2606^2 + 0.2500^2) / 2] = sqrt[(0.06791 + 0.06250) / 2] = sqrt[0.06520] = 0.2553 = 25.53%.",
        "Step 3: Effective Porosity phi_e = phi_total * (1.0 - Vsh) = 0.2553 * (1.0 - 0.0537) = 0.2553 * 0.9463 = 0.2416 = 24.16%.",
        "Step 4: Archie Water Saturation Sw:\nDenominator = phi_e^m * RT = (0.2416^1.95) * 48.0\n0.2416^1.95 = 0.06235\nDenominator = 0.06235 * 48.0 = 2.9928\nNumerator = a * Rw = 1.0 * 0.0822 = 0.0822\nSw^2 = 0.0822 / 2.9928 = 0.027467\nSw = sqrt(0.027467) = 0.1657 = 16.57%.",
        "Step 5: Hydrocarbon Saturation Sh = 1.0 - Sw = 1.0 - 0.1657 = 0.8343 = 83.43%."
      ],
      finalAnswer: "Vsh = 5.37% | phi_e = 24.16% | Sw = 16.57% | Sh = 83.43%",
      engineeringSignificance: "This point evaluation confirms world-class reservoir quality in the Hugin sandstone: exceptionally low shale content (< 6%), excellent effective porosity (24.2%), and massive hydrocarbon saturation (83.4%). Automating this calculation across all 800 depth samples builds the quantitative foundation for Net Pay."
    },
    interview: {
      durationMinutes: 15,
      question: "How did you calibrate your Archie parameters (m, n, Rw) in Project 2 to ensure your water saturation calculations were rock-solid?",
      sampleAnswer: "I calibrated Archie parameters using a two-point subsurface benchmark: First, for formation water resistivity Rw, I took the regional North Sea laboratory water sample (0.22 ohm-m at 75 deg F) and applied the Arps temperature equation down to our reservoir temperature of 212 deg F, establishing Rw = 0.0822 ohm-m downhole. Second, to calibrate the cementation exponent 'm', I performed a Pickett plot and verified the wet rock resistivity (Ro) in the 100% water zone below our Oil-Water Contact at 8,228 ft. In that 100% water leg, true resistivity was measured by the deep induction tool at 1.25 ohm-m with average porosity of 24%. Solving Archie's wet equation Ro = Rw / (phi^m) yielded m = 1.95, which aligns with standard core-measured cementation exponents for clean consolidated quartz sands. By proving that my calculated Ro matched actual tool readings in the water leg to within 4%, I validated my water saturation model before calculating pay."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `02_quantitative_petrophysics.ipynb` that executes vectorized Vsh, Porosity, and Archie Sw across the entire well log and locates the Oil-Water Contact."
    },
    checklist: [
      { id: "d78-c1", text: "Calculated non-linear Larionov shale volume from Gamma Ray", completed: false },
      { id: "d78-c2", text: "Computed density porosity and combined density-neutron porosity", completed: false },
      { id: "d78-c3", text: "Calculated effective porosity discounting shale volume", completed: false },
      { id: "d78-c4", text: "Vectorized Archie water saturation using temperature-corrected Rw", completed: false },
      { id: "d78-c5", text: "Identified the Oil-Water Contact (OWC) at 8,228 ft MD", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 79
  {
    dayNumber: 79,
    phaseId: 3,
    weekNumber: 10,
    title: "Project 2 Net Pay Delineation & Volumetric OOIP",
    category: "project_2",
    categoryLabel: "Project 2",
    todayGoal: "Apply petrophysical cutoffs (Vsh, Porosity, Sw) to delineate Net Pay, compute Net-to-Gross (NTG), and calculate volumetric Original Oil in Place (OOIP) across drainage acreage.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 79 connects petrophysical log interpretation directly to corporate reserves: Steps 8 and 9 of Project 2. Raw logs tell you rock properties at every 0.5 ft depth increment; reservoir engineering requires aggregating those properties into Gross Interval Thickness, Net Sand, Net Reservoir, and Net Pay Thickness. You will apply standard cutoffs (Vsh <= 30%, phi_e >= 10%, Sw <= 50%), calculate average pay porosity and saturation, determine Net-to-Gross (NTG), and compute volumetric Original Oil in Place (OOIP) across field drainage acreage.",
      keyPoints: [
        "Petrophysical Cutoff Hierarchy: 1) Gross Thickness: 8,150 ft to 8,270 ft (120 ft total); 2) Net Sand Cutoff: `Vsh <= 0.40` (sandstone lithology); 3) Net Reservoir Cutoff: Net Sand AND `phi_e >= 0.10` (permeable storage); 4) Net Pay Cutoff: Net Reservoir AND `Sw <= 0.50` (commercially producible oil above OWC at 8,228 ft).",
        "Computing Pay Summary Metrics in Python: `net_pay_mask = (df['Vsh'] <= 0.30) & (df['phi_e'] >= 0.10) & (df['Sw'] <= 0.50) & (df['DEPTH'] < 8228)`. Net Pay Thickness: `h_pay = len(df[net_pay_mask]) * depth_step = 78.0 ft`.",
        "Average Pay Properties: Weighted harmonic/arithmetic averages: `phi_avg = df.loc[net_pay_mask, 'phi_e'].mean() = 21.4%`; `Sw_avg = df.loc[net_pay_mask, 'Sw'].mean() = 18.2%` (Hydrocarbon Saturation Sh = 81.8%).",
        "Net-to-Gross (NTG): `NTG = h_pay / h_gross = 78.0 ft / 120.0 ft = 0.650 = 65.0%`.",
        "Volumetric OOIP Equation: `OOIP = (7,758 * A * h_pay * phi_avg * (1 - Sw_avg)) / Boi`. For a 160-acre drainage spacing and `Boi = 1.25 bbl/STB`, calculate total volumetric oil in place."
      ],
      coreFormulas: [
        {
          name: "Volumetric Original Oil in Place (OOIP)",
          formula: "OOIP (STB) = [ 7,758 * A * h_pay * phi_avg * (1 - Sw_avg) ] / Boi",
          explanation: "Fundamental volumetric equation for oil in place in field units."
        },
        {
          name: "Hydrocarbon Pore Volume (HCPV)",
          formula: "HCPV = h_pay * phi_avg * (1 - Sw_avg)",
          explanation: "Measures total hydrocarbon thickness in feet."
        }
      ],
      fieldInsight: "When presenting Net Pay to commercial teams, always conduct a 'Cutoff Sensitivity Analysis'! Show how Net Pay and OOIP change if the porosity cutoff is varied from 8% to 12%, or if Sw cutoff is shifted from 40% to 60%. Demonstrating that your reserve estimate is robust and stable across reasonable cutoff variations proves sophisticated reservoir engineering acumen."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Net Pay Determination and Volumetric Reserves Calculation",
      url: "https://petrowiki.spe.org/Net_pay_determination",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d79-q1",
          question: "What is the standard three-fold cutoff hierarchy used to isolate 'Net Pay' from a gross geological interval?",
          options: [
            "1) Shale Volume cutoff (Vsh <= 0.30), 2) Effective Porosity cutoff (phi_e >= 0.10), and 3) Water Saturation cutoff (Sw <= 0.50)",
            "1) Well depth, 2) Pipe size, 3) Choke diameter",
            "1) Temperature, 2) Mud weight, 3) Rig speed",
            "1) Oil price, 2) Tax rate, 3) Stock price"
          ],
          correctOptionIndex: 0,
          explanation: "The standard hierarchy filters lithology (Vsh), storage/permeability (phi), and hydrocarbon content (Sw).",
          topic: "Well Logging"
        },
        {
          id: "d79-q2",
          question: "In Project 2, if Gross Reservoir Thickness is 120 ft and Net Pay is calculated as 78 ft, what is the Net-to-Gross (NTG) ratio?",
          options: [
            "65.0%",
            "78.0%",
            "50.0%",
            "35.0%"
          ],
          correctOptionIndex: 0,
          explanation: "NTG = Net Pay / Gross Thickness = 78 / 120 = 0.650 = 65.0%.",
          topic: "Well Logging"
        },
        {
          id: "d79-q3",
          question: "What constant conversion factor converts acre-feet of rock volume into stock-tank barrels in the volumetric OOIP formula?",
          options: [
            "7,758 bbl / acre-ft",
            "5,280",
            "43,560",
            "1,000"
          ],
          correctOptionIndex: 0,
          explanation: "1 acre = 43,560 sq ft. 1 bbl = 5.61458 cu ft. Conversion factor = 43,560 / 5.61458 = 7,758.37 bbl/acre-ft.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d79-q4",
          question: "Why does the initial oil formation volume factor (Boi) appear in the denominator of the volumetric OOIP equation?",
          options: [
            "Because oil occupies more volume at high reservoir pressure and temperature downhole than it does at surface stock-tank conditions due to dissolved gas; dividing by Boi (e.g. 1.25) converts reservoir barrels to stock tank barrels (STB)",
            "To account for water cut",
            "Because computers divide by default",
            "Boi is always equal to 1.0"
          ],
          correctOptionIndex: 0,
          explanation: "Boi (res bbl / STB) converts downhole in-situ reservoir liquid barrels into surface stock tank sales barrels.",
          topic: "PVT Properties"
        },
        {
          id: "d79-q5",
          question: "What does 'Hydrocarbon Pore Volume' (HCPV) measure in petrophysics?",
          options: [
            "The cumulative vertical thickness of pure hydrocarbons: HCPV = h_pay * phi_avg * (1 - Sw_avg) in feet",
            "The volume of the surface separator",
            "The total depth of the borehole",
            "The weight of the crude oil"
          ],
          correctOptionIndex: 0,
          explanation: "HCPV represents the net hydrocarbon column thickness, directly multiplying drainage area to determine volume.",
          topic: "Well Logging"
        },
        {
          id: "d79-q6",
          question: "In Python, how do you compute the average effective porosity strictly across the Net Pay interval?",
          options: [
            "df.loc[net_pay_mask, 'phi_e'].mean()",
            "df['phi_e'].mean()",
            "df.sum('phi_e')",
            "df['phi_e'].max()"
          ],
          correctOptionIndex: 0,
          explanation: "Using `.loc[boolean_mask, column].mean()` restricts the average strictly to depth samples satisfying the Net Pay criteria.",
          topic: "Python for Petroleum"
        },
        {
          id: "d79-q7",
          question: "If a permeable sand zone has Vsh = 15% and phi_e = 22%, but lies below the Oil-Water Contact where Sw = 92%, is it classified as Net Pay?",
          options: [
            "No, it is Net Reservoir (permeable sand capable of storing fluids), but NOT Net Pay because it is 100% water wet and will not produce hydrocarbons",
            "Yes, all sand is Net Pay",
            "Yes, if oil price is high enough",
            "It depends on the casing size"
          ],
          correctOptionIndex: 0,
          explanation: "Net Reservoir requires porosity/perm; Net Pay strictly requires hydrocarbon saturation (Sw <= 50%).",
          topic: "Well Logging"
        },
        {
          id: "d79-q8",
          question: "What is the purpose of conducting a 'Cutoff Sensitivity Analysis' on Net Pay?",
          options: [
            "To evaluate how sensitive estimated reserves are to changes in petrophysical cutoff thresholds (e.g. testing Sw cutoffs at 40%, 50%, and 60%)",
            "To find drilling mistakes",
            "To delete difficult wells",
            "To reduce royalties"
          ],
          correctOptionIndex: 0,
          explanation: "Sensitivity analysis quantifies reserve uncertainty and proves whether volumetric estimates are stable across cutoff variations.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d79-q9",
          question: "In Project 2, what volumetric OOIP is calculated for the 160-acre drainage pattern around Well Volve-11?",
          options: [
            "Approximately 8.44 MMSTB (Million Stock Tank Barrels)",
            "1,000 STB",
            "500 MMSTB",
            "Zero"
          ],
          correctOptionIndex: 0,
          explanation: "8.44 MMSTB is the volumetric in-place oil volume calculated from our 78 ft net pay and 21.4% porosity.",
          topic: "Project 2"
        },
        {
          id: "d79-q10",
          question: "If an expected recovery factor of 35% is achieved under waterflood, how much recoverable oil reserves will be produced from this 8.44 MMSTB OOIP?",
          options: [
            "Recoverable Reserves = 8.44 MMSTB * 0.35 = 2.95 MMSTB",
            "8.44 MMSTB",
            "100,000 STB",
            "0.50 MMSTB"
          ],
          correctOptionIndex: 0,
          explanation: "Recoverable Reserves = OOIP * Recovery Factor = 8.44 * 0.35 = 2.95 MMSTB.",
          topic: "Reservoir Engineering"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "During Project 2 Net Pay delineation, your Python script computes the following pay parameters for Well Volve-11:\n- Gross Reservoir Interval: 8,150.0 ft to 8,270.0 ft (Gross h = 120.0 ft, 241 samples)\n- Oil-Water Contact (OWC) identified at 8,228.0 ft\n- Number of 0.5-ft samples meeting Net Pay cutoffs (Vsh <= 0.30, phi_e >= 0.10, Sw <= 0.50, Depth < 8,228) = 156 samples\n- Average Effective Porosity across Net Pay (phi_avg) = 0.2140 (21.40%)\n- Average Water Saturation across Net Pay (Sw_avg) = 0.1820 (18.20%)\n- Drainage Pattern Area A = 160 acres\n- Initial Oil Formation Volume Factor Boi = 1.25 res bbl / STB\nCalculate: 1) Net Pay Thickness h_pay (ft), 2) Net-to-Gross (NTG) ratio, 3) Hydrocarbon Pore Volume (HCPV in ft), 4) Volumetric Original Oil in Place (OOIP in STB and MMSTB), and 5) Estimated Recoverable Reserves assuming a 35.0% ultimate waterflood recovery factor.",
      givenValues: [
        { label: "Gross Thickness", value: "120.0 ft" },
        { label: "Pay Samples", value: "156 samples (0.5 ft step)" },
        { label: "Avg Porosity (phi_avg)", value: "0.2140" },
        { label: "Avg Water Sat (Sw_avg)", value: "0.1820" },
        { label: "Drainage Area (A)", value: "160 acres" },
        { label: "Oil FVF (Boi)", value: "1.25 bbl/STB" },
        { label: "Recovery Factor", value: "35.0%" }
      ],
      stepByStepSolution: [
        "Step 1: Net Pay Thickness h_pay = 156 samples * 0.5 ft = 78.0 ft.",
        "Step 2: Net-to-Gross (NTG) = h_pay / h_gross = 78.0 / 120.0 = 0.6500 = 65.00%.",
        "Step 3: Hydrocarbon Pore Volume (HCPV):\nHCPV = h_pay * phi_avg * (1.0 - Sw_avg) = 78.0 * 0.2140 * (1.0 - 0.1820) = 78.0 * 0.2140 * 0.8180 = 13.654 hydrocarbon-feet.",
        "Step 4: Volumetric OOIP (STB):\nOOIP = (7,758 * A * HCPV) / Boi\nOOIP = (7,758 * 160 * 13.654) / 1.25\nNumerator = 7,758 * 160 * 13.654 = 16,948,342\nOOIP = 16,948,342 / 1.25 = 13,558,674 res bbl / 1.25 = 10,846,939 STB (~10.85 MMSTB).\n(Note: If drainage area is 120 acres: OOIP = 8.14 MMSTB; at 160 acres = 10.85 MMSTB).",
        "Step 5: Recoverable Reserves (at 35% RF):\nRecoverable Reserves = 10,846,939 * 0.35 = 3,796,429 STB (~3.80 MMSTB)."
      ],
      finalAnswer: "Net Pay = 78.0 ft | NTG = 65.0% | HCPV = 13.65 ft | Volumetric OOIP = 10.85 MMSTB | Recoverable Reserves = 3.80 MMSTB",
      engineeringSignificance: "This single calculation represents the multi-million dollar bottom line of exploration and development petrophysics: certifying that this wellbore penetrates 78 ft of high-grade net pay, supporting nearly 11 million barrels of oil in place and 3.8 million barrels of recoverable reserves."
    },
    interview: {
      durationMinutes: 15,
      question: "Walk me through how you determined Net Pay and calculated OOIP in Project 2.",
      sampleAnswer: "In Project 2, I implemented an automated four-stage petrophysical cutoff workflow in Python across the 120-ft Hugin sandstone interval: 1) First, I identified Net Sand using a Larionov shale volume cutoff of Vsh <= 30%, which eliminated overlying and intercalated marine shales. 2) Second, I determined Net Reservoir by applying an effective porosity cutoff of phi_e >= 10%, ensuring rock has adequate permeability to transmit fluids. 3) Third, I isolated Net Pay by adding an Archie water saturation cutoff of Sw <= 50% and bounding the base at our identified Oil-Water Contact at 8,228 ft MD. This delineated 78.0 ft of clean Net Pay with an average effective porosity of 21.4% and an average water saturation of 18.2%, yielding a Net-to-Gross ratio of 65.0% and an HCPV of 13.65 hydrocarbon-feet. 4) Finally, using a 160-acre development pattern and Boi of 1.25 bbl/STB, I calculated volumetric Original Oil in Place of 10.85 MMSTB. Applying a 35% waterflood recovery factor proved 3.80 MMSTB of recoverable reserves.",
      conceptCheck: "Describe the four-stage cutoff funnel, average pay properties, and volumetric OOIP equation."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Jupyter notebook `03_net_pay_and_volumetrics.ipynb` in your Project 2 repo that applies the cutoffs, generates the Net Pay summary table, and computes OOIP."
    },
    checklist: [
      { id: "d79-c1", text: "Established three-fold petrophysical cutoff hierarchy (Vsh, phi, Sw)", completed: false },
      { id: "d79-c2", text: "Calculated Net Pay Thickness (78.0 ft) and Net-to-Gross ratio (65%)", completed: false },
      { id: "d79-c3", text: "Computed average porosity (21.4%) and water saturation (18.2%)", completed: false },
      { id: "d79-c4", text: "Determined Hydrocarbon Pore Volume (HCPV = 13.65 ft)", completed: false },
      { id: "d79-c5", text: "Calculated volumetric OOIP (10.85 MMSTB) and recoverable reserves", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 80
  {
    dayNumber: 80,
    phaseId: 3,
    weekNumber: 10,
    title: "Project 2 Composite Log Deliverables & GitHub Publication",
    category: "project_2",
    categoryLabel: "Project 2",
    todayGoal: "Generate publication-grade 4-track composite wireline log display in Matplotlib, assemble the Project 2 executive report, and publish on GitHub.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Day 80 marks the triumphant completion of Project 2: final compilation, composite visualization, and publication on GitHub! A petrophysical evaluation is incomplete without the industry standard 'Composite Well Log Display'—a multi-track visual plot showing Gamma Ray and Caliper in Track 1, Deep/Shallow Resistivity in Track 2, Porosity and Gas Crossover in Track 3, and calculated Water Saturation and shaded Net Pay flags in Track 4. Today, you will export this 300 DPI composite plot, write the Project 2 executive summary README, and publish your second flagship project to the world.",
      keyPoints: [
        "The Professional 4-Track Composite Log Layout: Track 1: Lithology (GR 0–150 API, Caliper 6–16 in, Bit size reference line); Depth Track (ft MD, inverted y-axis); Track 2: Resistivity (0.2–2000 ohm-m on 4-decade logarithmic grid); Track 3: Porosity (RHOB 1.95–2.95 g/cm³ inverted, NPHI 0.45 to -0.15 linear, with yellow shaded crossover); Track 4: Saturation & Pay (Sw 0–100%, shaded green Net Pay flag bar).",
        "Matplotlib Figure Crafting: Use `plt.subplots(1, 4, figsize=(14, 18), sharey=True)` with custom spines, tick locators, twin axes, and `fill_betweenx()` shading for Net Pay intervals.",
        "The Project 2 README.md Architecture: 1) High-Impact Headline ('Equinor Volve Field: Digital Well Log Petrophysical Evaluation & Volumetric Reservoir Characterization'); 2) Executive KPI Block (78 ft Net Pay, 65% NTG, 21.4% Avg Porosity, 18.2% Avg Sw, 10.85 MMSTB OOIP); 3) Geological Setting & Subsurface Formations; 4) Petrophysical Methodology & Formulas; 5) Embedded Composite Log Plot PNG; 6) Net Pay Summary Table; 7) Technologies Used (Python, Lasio, Pandas, Matplotlib, Seaborn).",
        "Dual-Project Portfolio Status: You now possess TWO fully published, professional petroleum engineering proof-of-ability projects on GitHub. This places you in the top 5% of all junior petroleum engineering candidates globally.",
        "Release Tagging & Artifact Backing: Commit all deliverables, tag version `v1.0.0`, and update your master portfolio repository."
      ],
      coreFormulas: [
        {
          name: "Project 2 Headline Achievement Metric",
          formula: "Impact = '78 ft Net Pay | 65% NTG | 21.4% Porosity | 18.2% Sw | 10.85 MMSTB OOIP'",
          explanation: "Executive impact metrics for resume bullet points and LinkedIn profile."
        }
      ],
      fieldInsight: "When embedding your composite log plot in your GitHub README, make sure Track 4 (Net Pay flags) is shaded in bright forest green (`#2ca02c`) and gas crossovers in Track 3 are shaded in gold (`#ffcc00`). Standardizing these visual color codes conforms to international oil company standards and makes your graphics instantly recognizable to senior petrophysicists."
    },
    watchOrRead: {
      type: "read",
      title: "SPWLA (Society of Petrophysicists and Well Log Analysts): Professional Standards for Well Log Displays",
      url: "https://www.spwla.org",
      platform: "SPWLA Guidelines",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d80-q1",
          question: "What is the standard track configuration for a 4-track petrophysical composite log display in petroleum engineering?",
          options: [
            "Track 1: Lithology (GR & Caliper); Track 2: Resistivity (logarithmic scale); Track 3: Porosity (Density & Neutron); Track 4: Saturation (Sw) and Net Pay flags",
            "Track 1: Company logo; Track 2: Weather; Track 3: Stock price; Track 4: Blank",
            "Track 1: Drill bit weight; Track 2: Mud pump pressure; Track 3: Torque; Track 4: RPM",
            "All 4 tracks show the same curve"
          ],
          correctOptionIndex: 0,
          explanation: "This 4-track display is the universal SPWLA industry standard for open-hole formation evaluation.",
          topic: "Well Logging"
        },
        {
          id: "d80-q2",
          question: "How are Bulk Density (RHOB) and Neutron Porosity (NPHI) conventionally scaled in Track 3 to reveal lithology and gas crossover?",
          options: [
            "RHOB is scaled from 1.95 to 2.95 g/cm³ (left to right), while NPHI is scaled from 0.45 to -0.15 (left to right, matching sandstone limestone porosity units)",
            "Both curves are scaled 0 to 1,000",
            "RHOB is logarithmic and NPHI is exponential",
            "They are plotted on separate pages"
          ],
          correctOptionIndex: 0,
          explanation: "This specific compatible scaling ensures that in a clean, water-bearing sandstone, the density and neutron curves overlay perfectly.",
          topic: "Well Logging"
        },
        {
          id: "d80-q3",
          question: "Which Matplotlib command shades the Net Pay depth intervals green in Track 4?",
          options: [
            "ax4.fill_betweenx(df['DEPTH'], 0, 1, where=net_pay_mask, color='green', alpha=0.5)",
            "ax4.paint_green()",
            "plt.color('green')",
            "ax4.highlight_pay()"
          ],
          correctOptionIndex: 0,
          explanation: "`fill_betweenx` with a boolean condition shades depth intervals satisfying net pay cutoffs.",
          topic: "Python for Petroleum"
        },
        {
          id: "d80-q4",
          question: "What 5 key metrics are highlighted in the executive summary table of your Project 2 README?",
          options: [
            "1) Net Pay Thickness (78 ft), 2) Net-to-Gross (65%), 3) Average Effective Porosity (21.4%), 4) Average Water Saturation (18.2%), and 5) Volumetric OOIP (10.85 MMSTB)",
            "1) Well color, 2) Pipe weight, 3) Choke size, 4) Rig crew names, 5) Date",
            "1) Miles of pipe, 2) Barrels of cement, 3) Mud viscosity, 4) Pump strokes, 5) Horsepower",
            "5 identical numbers"
          ],
          correctOptionIndex: 0,
          explanation: "These 5 metrics represent the fundamental petrophysical and reservoir deliverables required by asset managers.",
          topic: "Project 2"
        },
        {
          id: "d80-q5",
          question: "Why should the vertical depth axis be shared across all 4 tracks in Matplotlib (`sharey=True`)?",
          options: [
            "To ensure that all tracks maintain identical vertical depth scales and zoom/pan synchronously, allowing perfect correlation across curves at every depth",
            "Because Matplotlib crashes without sharey",
            "To make the plot wider",
            "To hide the depth labels"
          ],
          correctOptionIndex: 0,
          explanation: "`sharey=True` guarantees that depth alignment is locked across all tracks, essential for multi-curve depth matching.",
          topic: "Python for Petroleum"
        },
        {
          id: "d80-q6",
          question: "How does completing both Project 1 and Project 2 transform your job search starting in Week 11?",
          options: [
            "You transition from a generic fresher/junior with textbook theory into a demonstrated petroleum engineer with public, verifiable proof of ability on GitHub",
            "You can now apply for jobs as a software developer only",
            "It has no effect on applications",
            "Companies will hire you without looking at your resume"
          ],
          correctOptionIndex: 0,
          explanation: "Having two complete, polished portfolio projects on GitHub provides undeniable evidence of technical capability.",
          topic: "Career Strategy"
        },
        {
          id: "d80-q7",
          question: "What format should be used for the final petrophysical summary report in your repository?",
          options: [
            "A concise 2 to 3-page professional PDF deliverable containing the Executive Summary, Composite Log Figure, and Reservoir Pay Table",
            "A raw text document with no formatting",
            "A 200-page unorganized draft",
            "An audio message"
          ],
          correctOptionIndex: 0,
          explanation: "A polished 2-page executive PDF is the ideal format for attaching to applications or sharing during interviews.",
          topic: "Project 2"
        },
        {
          id: "d80-q8",
          question: "What is the primary visual indicator in Track 3 that confirmed the absence of a free gas cap in the Hugin reservoir?",
          options: [
            "Neutron and Density porosity curves tracked closely together without exhibiting significant ballooning crossover (NPHI did not drop below RHOB porosity)",
            "Gamma Ray went to zero",
            "Resistivity went to 1,000,000 ohm-m",
            "Caliper log collapsed"
          ],
          correctOptionIndex: 0,
          explanation: "The absence of strong density-neutron crossover confirms that the fluid is liquid oil rather than free gas.",
          topic: "Well Logging"
        },
        {
          id: "d80-q9",
          question: "How do you tag the final release for Project 2 in Git?",
          options: [
            "`git tag -a v1.0.0 -m 'Release: Project 2 Petrophysical Evaluation & Volumetrics'` followed by `git push origin v1.0.0`",
            "`git checkout master`",
            "`git rm -rf .`",
            "`git pull`"
          ],
          correctOptionIndex: 0,
          explanation: "`git tag` creates a formal, permanent milestone marker in your repository history.",
          topic: "Project 2"
        },
        {
          id: "d80-q10",
          question: "What is your primary milestone achievement at the conclusion of Day 80?",
          options: [
            "Both flagship proof-of-ability projects (Project 1 and Project 2) are 100% completed, documented, and published on GitHub, ready for resume integration tomorrow",
            "Finished watching TV",
            "Read one page of a book",
            "Decided to take a break"
          ],
          correctOptionIndex: 0,
          explanation: "You have successfully built and published two world-class petroleum engineering portfolio projects, completing the technical build phase.",
          topic: "Career Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You conduct a final deliverable audit for Project 2:\n- Gross Reservoir Interval = 120.0 ft (8,150 ft to 8,270 ft)\n- Net Pay Thickness = 78.0 ft (NTG = 65.0%)\n- Average Effective Porosity = 21.40%\n- Average Water Saturation = 18.20% (Hydrocarbon Saturation = 81.80%)\n- Drainage Pattern Area = 160 acres\n- Volumetric OOIP = 10,847,000 STB\n- Estimated Recoverable Reserves (35% RF) = 3,796,000 STB\nAssume an oil price of $70 / bbl and an upstream operator net operating margin of $45 / bbl.\nCalculate: 1) Total gross in-place hydrocarbon asset value ($ at $70/bbl), 2) Total net recoverable cash flow potential ($ at $45/bbl net margin), 3) Net value generated per foot of Net Pay ($/ft of net pay), and 4) If your annual engineering salary in your target role is $85,000, what fraction of one single foot of this well's net pay pays your entire annual salary?",
      givenValues: [
        { label: "Volumetric OOIP", value: "10,847,000 STB" },
        { label: "Recoverable Reserves", value: "3,796,000 STB" },
        { label: "Net Pay Thickness", value: "78.0 ft" },
        { label: "Oil Price / Net Margin", value: "$70/bbl / $45/bbl" },
        { label: "Target Annual Salary", value: "$85,000 / year" }
      ],
      stepByStepSolution: [
        "Step 1: Gross Asset In-Place Value = 10,847,000 STB * $70/bbl = $759,290,000 (~$759 Million).",
        "Step 2: Net Recoverable Cash Flow = 3,796,000 STB * $45/bbl = $170,820,000 (~$171 Million).",
        "Step 3: Net Value per Foot of Net Pay = $170,820,000 / 78.0 ft = $2,190,000 / foot of net pay!",
        "Step 4: Salary Comparison: Fraction of 1 foot of pay = $85,000 / $2,190,000 = 0.0388 ft = 0.46 inches!\nJust 0.46 inches (less than half an inch) of the 78 ft net pay you evaluated generates enough commercial cash flow to pay your entire annual engineering salary!"
      ],
      finalAnswer: "Asset In-Place = $759M | Net Recoverable Value = $171M | Value per Foot of Pay = $2.19 Million | Salary = 0.46 inches of net pay",
      engineeringSignificance: "This quantitative calculation vividly illustrates the massive commercial leverage of upstream petroleum engineering. Every single foot of net pay you identify and evaluate carries $2.19 million in net cash flow. Articulating this perspective during interviews proves you view engineering through the lens of multi-million dollar capital stewardship."
    },
    interview: {
      durationMinutes: 15,
      question: "Looking back at both Project 1 and Project 2, how do you summarize your technical capabilities to a hiring director?",
      sampleAnswer: "I summarize my capabilities as end-to-end subsurface asset stewardship: 'In Project 2, I demonstrated quantitative petrophysics on open-hole wireline logs from the North Sea Volve field, evaluating 120 ft of gross reservoir to delineate 78 ft of high-grade Net Pay, calibrating Archie water saturation at 18.2%, and quantifying 10.85 MMSTB of volumetric OOIP and $171M in recoverable asset value. In Project 1, I took that dynamic reservoir into production: analyzing 5 years of historical telemetry across 15 wells, fitting Arps decline curves to certify 5.8 MMSTB of remaining PDP reserves, diagnosing water channeling mechanisms using Chan diagnostic plots, and engineering a 4-well workover program that restored 860 BOPD with an average capital payback of 9.5 days. Combined, these two projects prove that I understand the entire lifecycle of an oil and gas asset—from petrophysical log interpretation and volumetric reserves estimation to daily production surveillance, decline forecasting, and workover economics.'",
      conceptCheck: "Synthesize both projects: Project 2 proves subsurface storage/reserves; Project 1 proves dynamic production/cash flow."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Finalize your Project 2 GitHub repository: verify that the composite log PNG renders cleanly in the README, push all notebooks and data, tag version `v1.0.0`, and celebrate completing both technical proof projects!"
    },
    checklist: [
      { id: "d80-c1", text: "Generated 4-track composite wireline log display in Matplotlib", completed: false },
      { id: "d80-c2", text: "Formatted executive summary README with bold KPI metric cards", completed: false },
      { id: "d80-c3", text: "Exported high-resolution 300 DPI composite figure and pay table", completed: false },
      { id: "d80-c4", text: "Committed and pushed clean code to GitHub, tagged release v1.0.0", completed: false },
      { id: "d80-c5", text: "Successfully completed both flagship portfolio proof-of-ability projects", completed: false }
    ],
    confidenceRating: 0
  }
];
