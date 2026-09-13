import { DayPlan } from '../../types';

export const WEEK_5_DAYS: DayPlan[] = [
  // DAY 31
  {
    dayNumber: 31,
    phaseId: 2,
    weekNumber: 5,
    title: "Why Well Logging Is Used & Petrophysical Fundamentals",
    category: "formation_evaluation",
    categoryLabel: "Well Logging",
    todayGoal: "Master wireline logging objectives, LWD vs wireline, borehole environment, and the mud filtrate invasion profile.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Formation evaluation answers the trillion-dollar upstream questions: Is there hydrocarbon present? How much is stored? Will it flow economically? Well logging provides continuous geophysical measurements of rock and fluid properties along the borehole. Open-hole logging is performed before casing is run, while cased-hole logging monitors reservoir fluid saturation, cement bond integrity, and pipe corrosion throughout production life.",
      keyPoints: [
        "Core Petrophysical Objectives: 1) Identify Lithology (sandstone vs limestone vs shale), 2) Determine Effective Porosity (storage capacity), 3) Determine Hydrocarbon Saturation (1 - Sw via Archie's law), 4) Identify Net Pay Thickness, 5) Estimate Permeability.",
        "Wireline Logging vs Logging While Drilling (LWD): LWD acquires data in real time as the bit cuts rock (ideal for geosteering and minimizing hole degradation). Wireline conveys sensors on an armored electrical cable after drilling, offering superior sensor resolution and depth accuracy.",
        "Borehole Environment & Invasion Profile: Drilling mud under overbalance filters into permeable rock. Solid particles form a 'mud cake' on the borehole wall. Mud filtrate invades the rock, creating three radial zones: 1) Flushed Zone (Rxo, Sxo ~ 70–80% filtrate), 2) Transition / Invaded Zone (Ri), 3) Uninvaded / Virgin Formation (Rt, Sw).",
        "Standard Log Display Track Layout: Track 1 (Lithology: Gamma Ray, Caliper, SP), Depth Track, Track 2 (Resistivity: Shallow, Medium, Deep Induction on 4-decade logarithmic grid 0.2–2000 ohm-m), Track 3 (Porosity: Density, Neutron, Sonic on linear scale 0–45% or bulk density 1.95–2.95 g/cm³)."
      ],
      coreFormulas: [
        {
          name: "Borehole Diameter Ratio",
          formula: "d_hole = Caliper reading; Bit Size = d_bit",
          explanation: "Caliper > bit size indicates washout/breakout; Caliper < bit size indicates mud cake buildup."
        }
      ],
      fieldInsight: "Always inspect the Caliper log first before analyzing any other curve! If the caliper shows a severe borehole washout (caliper reads 16\" in an 8-1/2\" bit hole), pad-contact tools like density and micro-resistivity will read drilling mud instead of rock, producing completely invalid false porosity readings."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (George Asquith, Daniel Krygowski)",
          chapterOrSection: "Chapter 1: Basic Relationships of Well Log Interpretation",
          note: "Study borehole invasion profile (Rxo, Rt, Sxo, Sw) and tool physics."
        },
        {
          title: "Log Interpretation Principles/Applications (Schlumberger)",
          chapterOrSection: "Chapter 1: The Borehole Environment",
          note: "Review mud filtrate invasion and environmental corrections."
        }
      ],
      recommendedTopics: [
        "Tornado charts for invasion diameter (di) and true resistivity (Rt) correction",
        "Spontaneous Potential (SP) log: Baseline drift and static SP (SSP = -K * log(Rmf / Rw))",
        "Caliper tool types (2-arm vs 4-arm vs 6-arm acoustic calipers)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q31_1",
          topic: "Borehole Environment",
          question: "In a permeable formation, the zone immediately adjacent to the wellbore where drilling mud filtrate has displaced almost all mobile formation fluids is called the:",
          options: ["Virgin reservoir zone", "Flushed zone (Rxo)", "Shale cap", "Transition zone"],
          correctIndex: 1,
          explanation: "The flushed zone is the cylindrical region immediately around the wellbore where mud filtrate has swept away almost all movable hydrocarbons and water."
        },
        {
          id: "q31_2",
          topic: "Log Interpretation",
          question: "Why is the Caliper log the very first curve an experienced petrophysicist checks before interpreting porosity logs?",
          options: [
            "To measure oil viscosity",
            "To identify washed-out hole sections where pad-contact tools (like density and micro-resistivity) lose contact with rock and give false readings",
            "To verify reservoir pressure",
            "To measure well temperature"
          ],
          correctIndex: 1,
          explanation: "Pad-contact tools require smooth contact with the borehole wall. In washouts, they read drilling mud, yielding falsely high porosity and wrong lithology."
        },
        {
          id: "q31_3",
          topic: "Resistivity Scales",
          question: "Why is resistivity displayed on a 4-cycle LOGARITHMIC scale (typically 0.2 to 2,000 ohm-m) on well logs?",
          options: [
            "Because linear paper is illegal",
            "Because formation resistivity spans a massive dynamic range: conductive shales/brines read < 1 ohm-m, while hydrocarbon sands and tight carbonates read up to thousands of ohm-m",
            "Because logarithms make calculations smaller",
            "Because wireline cable has logarithmic resistance"
          ],
          correctIndex: 1,
          explanation: "Subsurface electrical resistivity spans 4 orders of magnitude—from saline water (< 0.5 ohm-m) to dense limestone/gas (> 1,000 ohm-m)."
        },
        {
          id: "q31_4",
          topic: "Logging Techniques",
          question: "What is a key advantage of Logging While Drilling (LWD) over conventional wireline logging?",
          options: [
            "LWD logs the formation before extensive mud filtrate invasion and borehole deterioration occur, and provides real-time data for geosteering",
            "LWD uses zero electric power",
            "LWD never requires downhole batteries",
            "LWD eliminates the need for drill pipe"
          ],
          correctIndex: 0,
          explanation: "LWD measures pristine rock minutes after bit penetration before deep filtrate invasion or borehole swelling occurs, enabling real-time geosteering."
        },
        {
          id: "q31_5",
          topic: "Borehole Environment",
          question: "When the caliper log reads SMALLER than the drill bit diameter across a permeable sandstone, this indicates:",
          options: [
            "The hole has collapsed",
            "Formation of a mud filter cake on the permeable borehole wall as filtrate leaks into the formation",
            "The bit shrank downhole",
            "The formation is pure shale"
          ],
          correctIndex: 1,
          explanation: "As mud filtrate leaks into permeable rock, solid bentonite/barite particles build up a mud cake on the wall, reducing the measured hole diameter below bit size."
        },
        {
          id: "q31_6",
          topic: "Petrophysics",
          question: "What is 'True Formation Resistivity' (Rt)?",
          options: [
            "The resistivity of the drilling mud in the tanks",
            "The undisturbed electrical resistivity of the uninvaded reservoir formation rock saturated with its original native fluids",
            "The resistivity of the mud cake",
            "The resistance of the wireline cable"
          ],
          correctIndex: 1,
          explanation: "Rt is the uninvaded formation resistivity deep beyond the reach of drilling mud filtrate, essential for calculating water saturation Sw via Archie's law."
        },
        {
          id: "q31_7",
          topic: "Spontaneous Potential",
          question: "The Spontaneous Potential (SP) log deflection is generated primarily by:",
          options: [
            "Nuclear radioactive decay of uranium",
            "Electrochemical potential difference between the drilling mud filtrate (Rmf) and the formation brine (Rw)",
            "Mechanical sound wave reflection",
            "Magnetic fields of the earth"
          ],
          correctIndex: 1,
          explanation: "SP deflection is created by salinity contrasts between mud filtrate (Rmf) and formation water (Rw). If Rw < Rmf (salty formation water), SP deflects to the left."
        },
        {
          id: "q31_8",
          topic: "Log Types",
          question: "Which category of well logging tools uses radioactive isotopes (e.g. Cesium-137, Americium-Beryllium) to emit gamma rays or neutrons into the rock?",
          options: ["Acoustic sonic tools", "Nuclear logging tools (Density and Neutron)", "Induction resistivity tools", "Caliper tools"],
          correctIndex: 1,
          explanation: "Density tools use Cesium-137 (gamma ray source) and Neutron tools use Am-Be or pulsed neutron generators to bombard the rock with nuclear radiation."
        },
        {
          id: "q31_9",
          topic: "Petrophysical Equations",
          question: "Which classic empirical law forms the foundation of all electrical resistivity water saturation calculations in clean formations?",
          options: ["Darcy's Law", "Archie's Equation", "Vogel's Equation", "Eaton's Equation"],
          correctIndex: 1,
          explanation: "G.E. Archie (1942) formulated the fundamental relationship relating formation factor F, porosity phi, water resistivity Rw, and true resistivity Rt to water saturation Sw."
        },
        {
          id: "q31_10",
          topic: "Depth Control",
          question: "How do wireline logging engineers ensure precise depth alignment between multiple logging runs?",
          options: [
            "Counting revolutions of the drawworks drum only",
            "Using calibrated surface depth measuring wheels combined with continuous Gamma Ray log correlation against reference runs",
            "Measuring cable length with a tape measure",
            "GPS signals inside the wellbore"
          ],
          correctIndex: 1,
          explanation: "Calibrated depth encoders measure cable motion, and Gamma Ray logs are tied back to the master reference run to correct for cable stretch."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc31_1",
          title: "SP Log Static Potential (SSP) & Formation Water Resistivity (Rw)",
          scenario: "An open-hole SP log in a clean sandstone displays a maximum deflection SSP = -60 mV. The formation temperature is 150°F (at 150°F, temperature factor K = 60 + 0.133 * 150 = 80 mV). The drilling mud filtrate resistivity measured at formation temperature is Rmf = 0.50 ohm-m.",
          formula: "SSP = -K * log10(R_mf / R_w) -> log10(R_mf / R_w) = -SSP / K; R_w = R_mf / 10^(-SSP / K)",
          givenData: {
            "SSP (mV)": -60,
            "Temperature (°F)": 150,
            "K (mV)": 80,
            "Rmf (ohm-m)": 0.50
          },
          questionText: "Calculate: 1) The resistivity ratio (Rmf / Rw), and 2) The estimated formation water resistivity (Rw) in ohm-m at formation temperature.",
          solutionSteps: [
            "Step 1: Ratio exponent = -SSP / K = -(-60) / 80 = 60 / 80 = 0.75",
            "Step 2: Resistivity ratio (Rmf / Rw) = 10^(0.75) = 5.623",
            "Step 3: Formation water resistivity Rw = Rmf / 5.623 = 0.50 / 5.623 = 0.0889 ohm-m (~0.089 ohm-m)."
          ],
          finalAnswer: "Rmf / Rw = 5.62, Formation Water Resistivity Rw = 0.089 ohm-m",
          inputUnit: "ohm-m",
          expectedNumber: 0.089,
          tolerance: 0.005
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int31_1",
        question: "Describe the radial invasion profile of a permeable oil sand drilled with freshwater mud. Explain Rxo, Ri, Rt, Sxo, and Sw.",
        whyAsked: "Tests fundamental petrophysical literacy. Interviewers check whether you understand how drilling fluids alter the near-wellbore environment.",
        modelAnswer: "When drilling a permeable oil-bearing sand with freshwater mud under overbalanced pressure, mud filtrate invades the rock, creating three concentric radial zones:\n1. Flushed Zone (Zone closest to borehole wall): Mud filtrate displaces almost all mobile oil and formation water, leaving only residual oil. Its resistivity is $R_{xo}$ (governed by mud filtrate resistivity $R_{mf}$ and residual oil), and its water saturation is $S_{xo}$ (typically 70%–80% filtrate water).\n2. Transition / Invaded Zone: A mixture of mud filtrate, original formation water, and displaced hydrocarbons. Its average resistivity is $R_i$.\n3. Uninvaded / Virgin Reservoir Zone: Deep into the rock beyond the invasion radius (typically 20–50+ inches from the wall). The rock remains completely saturated with pristine formation fluids: true formation resistivity $R_t$ and initial water saturation $S_w$.\nWhy this matters: To calculate true reserves using Archie's equation, we must measure $R_t$ with deep-reading induction tools (e.g., AT90 or deep induction). If we accidentally use shallow resistivity ($R_{xo}$), we will measure mud filtrate instead of hydrocarbon, leading to the false conclusion that the pay zone is watered out.",
        keyPoints: [
          "Flushed zone ($R_{xo}, S_{xo}$): Saturated with mud filtrate and residual oil.",
          "Transition zone ($R_i$): Mixed filtrate and formation fluids.",
          "Uninvaded zone ($R_t, S_w$): Pristine original formation water and hydrocarbons.",
          "Deep induction measures $R_t$; shallow micro-resistivity measures $R_{xo}$."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Initiate Phase 2 Petrophysics Tracking",
      instructions: [
        "Open a dedicated study section for Formation Evaluation.",
        "Add core petrophysical targets: GR, Resistivity, Density, Neutron, Archie's Law, Net Pay.",
        "Verify your local setup for Excel and Python practice in upcoming weeks."
      ],
      deliverable: "Phase 2 practical skills roadmap confirmed and logged."
    }
  },

  // DAY 32
  {
    dayNumber: 32,
    phaseId: 2,
    weekNumber: 5,
    title: "Gamma Ray Log (GR) & Shale Volume Calculation",
    category: "formation_evaluation",
    categoryLabel: "Lithology Logs",
    todayGoal: "Master natural radioactivity logging, sand-shale baselines, linear vs non-linear Vsh correlations (Larionov, Steiber).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "The Gamma Ray (GR) log measures naturally occurring radioactivity emitted by rock formations. Radioactive elements (primarily Potassium-40, Uranium-238, and Thorium-232) concentrate heavily in fine-grained clay minerals and shales. Consequently, clean sandstones, limestones, and dolomites display very low gamma ray counts (typically 15 to 45 API), while shales display high gamma ray counts (typically 80 to 150+ API). GR is the primary tool used for lithology identification, sand-shale correlation, and calculating Shale Volume (V_sh).",
      keyPoints: [
        "Gamma Ray Units: Standardized API Gamma Ray units (0 to 150 or 0 to 200 API). Calibrated at the University of Houston test pit.",
        "Radioactive Isotopes: Potassium (K-40, found in illite, feldspars, micas), Thorium (Th-232, found in heavy minerals and detrital clays), Uranium (U-238, concentrated in organic matter / source rocks).",
        "Spectral Gamma Ray (SGR vs CGR): Standard SGR measures total counts. Spectral GR measures energy spectrum to isolate individual concentrations: K (%), Th (ppm), and U (ppm). Computed Gamma Ray (CGR = K + Th) subtracts uranium to prevent organic-rich gas sands from falsely appearing as shales.",
        "Sand & Shale Baselines: Clean Sand Baseline (GR_clean or GR_min) and 100% Shale Baseline (GR_shale or GR_max).",
        "Linear Gamma Ray Index: I_GR = (GR - GR_clean) / (GR_shale - GR_clean).",
        "Non-Linear Corrections: Linear I_GR overestimates shale volume in older consolidated rocks. Non-linear correlations: Larionov (Tertiary / Young rocks: V_sh = 0.083 * [2^(3.7 * I_GR) - 1]; Older rocks: V_sh = 0.33 * [2^(2 * I_GR) - 1]) and Steiber: V_sh = I_GR / (3 - 2 * I_GR)."
      ],
      coreFormulas: [
        {
          name: "Linear Gamma Ray Index (I_GR)",
          formula: "I_GR = (GR_log - GR_clean) / (GR_shale - GR_clean)",
          explanation: "Values range from 0.0 (pure clean sand) to 1.0 (pure shale)."
        },
        {
          name: "Steiber Shale Volume Correlation",
          formula: "V_sh = I_GR / (3.0 - 2.0 * I_GR)",
          explanation: "Widely used non-linear correlation for clastic formations."
        }
      ],
      fieldInsight: "Beware of 'hot sands' (radioactive sandstones)! Sandstones containing potassium feldspar (arkosic sands), mica, or uranium-bearing organic debris emit high gamma ray counts and can look identical to shales on standard GR logs. Always cross-check with Spectral Gamma Ray (CGR) or Neutron-Density logs before condemning a high-GR interval."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 3: The Gamma Ray Log",
          note: "Study Vsh calculation formulas, baselines, and radioactive sandstones."
        },
        {
          title: "Log Interpretation Principles/Applications (Schlumberger)",
          chapterOrSection: "Chapter 4: Natural Gamma Ray Logging",
          note: "Review Spectral Gamma Ray (K, Th, U) and clay typing crossplots."
        }
      ],
      recommendedTopics: [
        "Larionov vs Steiber vs Clavier non-linear shale volume equations",
        "Thorium / Potassium crossplots for identifying clay types (kaolinite, illite, smectite)",
        "Correlation of formation tops across multiple wells using GR fingerprints"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q32_1",
          topic: "Gamma Ray",
          question: "The Gamma Ray (GR) log measures natural radioactivity primarily emitted by which three elements?",
          options: ["Potassium (K), Uranium (U), and Thorium (Th)", "Carbon, Hydrogen, and Oxygen", "Iron, Silicon, and Aluminum", "Lead, Gold, and Copper"],
          correctIndex: 0,
          explanation: "Natural gamma radiation in sedimentary basins originates almost entirely from Potassium-40, Uranium-238, and Thorium-232."
        },
        {
          id: "q32_2",
          topic: "Lithology Identification",
          question: "A typical clean, non-shaly sandstone or limestone displays gamma ray readings in the range of:",
          options: ["15 to 45 API", "120 to 250 API", "500 to 1,000 API", "Zero API strictly"],
          correctIndex: 0,
          explanation: "Clean quartz sandstones and pure carbonates contain very low radioactive minerals, typically reading between 15 and 45 API units."
        },
        {
          id: "q32_3",
          topic: "Spectral Gamma Ray",
          question: "Why is Computed Gamma Ray (CGR) preferred over total Gamma Ray (SGR) when evaluating organic-rich shale gas or radioactive arkosic sandstones?",
          options: [
            "CGR subtracts the uranium contribution (CGR = K + Th), preventing organic-rich or uranium-bearing clean sands from falsely appearing as clay-rich shales",
            "CGR measures sound velocity",
            "CGR costs less",
            "CGR is measured in centimeters"
          ],
          correctIndex: 0,
          explanation: "Uranium is often concentrated in organic matter or precipitated by groundwater in clean sands. CGR removes uranium to reflect true clay content."
        },
        {
          id: "q32_4",
          topic: "Shale Volume",
          question: "If GR_clean = 20 API, GR_shale = 120 API, and log reading GR = 50 API, what is the Linear Gamma Ray Index (I_GR)?",
          options: ["0.20", "0.30", "0.50", "0.75"],
          correctIndex: 1,
          explanation: "I_GR = (GR - GR_clean) / (GR_shale - GR_clean) = (50 - 20) / (120 - 20) = 30 / 100 = 0.30 (or 30%)."
        },
        {
          id: "q32_5",
          topic: "Non-Linear Correlations",
          question: "Why do petrophysicists apply non-linear correlations (such as Steiber or Larionov) instead of using the raw linear Gamma Ray Index for shale volume (Vsh)?",
          options: [
            "Because linear I_GR almost always significantly overestimates true shale volume in consolidated rocks",
            "Because computers cannot calculate linear equations",
            "Because non-linear equations double the water saturation",
            "Because mud weight is non-linear"
          ],
          correctIndex: 0,
          explanation: "Laboratory core measurements prove that linear I_GR overestimates clay content; non-linear models yield more accurate, lower shale volumes."
        },
        {
          id: "q32_6",
          topic: "Clay Minerals",
          question: "Which radioactive isotope is especially prevalent in Potassium Feldspar and Illite clays?",
          options: ["Potassium-40 (K-40)", "Uranium-235", "Thorium-232", "Carbon-14"],
          correctIndex: 0,
          explanation: "Potassium-40 is a major component of K-feldspar minerals and illite clay crystal lattices."
        },
        {
          id: "q32_7",
          topic: "Radioactive Sands",
          question: "What is an 'Arkosic Sandstone' and how does it appear on a standard Gamma Ray log?",
          options: [
            "A sandstone rich in potassium feldspar that displays abnormally high gamma ray readings, masquerading as a shale",
            "A sandstone full of pure water",
            "A coal seam",
            "A rock with zero porosity"
          ],
          correctIndex: 0,
          explanation: "Arkosic sandstones contain > 25% potassium feldspar; the K-40 isotopes emit high radiation, making clean sand look like shale on standard GR."
        },
        {
          id: "q32_8",
          topic: "Log Correlation",
          question: "Why is the Gamma Ray log the primary tool for correlating geological formations across multiple wells in a field?",
          options: [
            "GR 'fingerprint' patterns (transgressive shales, parasequence boundaries) remain recognizable and continuous across entire sedimentary basins",
            "GR can only be run in one well",
            "GR measures fluid velocity",
            "GR changes every day"
          ],
          correctIndex: 0,
          explanation: "Regional marine flooding shales and sequence boundaries create distinctive gamma ray peaks that correlate seamlessly across regional wells."
        },
        {
          id: "q32_9",
          topic: "Steiber Formula",
          question: "Using Steiber's formula Vsh = I_GR / (3 - 2*I_GR), if I_GR = 0.50, what is the calculated shale volume Vsh?",
          options: ["0.25 (25%)", "0.50 (50%)", "0.75 (75%)", "1.00 (100%)"],
          correctIndex: 0,
          explanation: "Vsh = 0.50 / [3 - 2*(0.50)] = 0.50 / [3 - 1.0] = 0.50 / 2.0 = 0.25 (or 25%). Notice how it reduces 50% linear down to 25% true shale!"
        },
        {
          id: "q32_10",
          topic: "Casing Influence",
          question: "Can a Gamma Ray log be recorded inside cased wellbores through steel casing and cement?",
          options: [
            "Yes, high-energy gamma rays easily penetrate steel casing and cement, making GR the standard cased-hole depth correlation tool",
            "No, gamma rays cannot pass through steel",
            "Only if casing is made of plastic",
            "Only when the well is dry"
          ],
          correctIndex: 0,
          explanation: "Gamma rays penetrate steel and cement with only slight signal attenuation, making GR the primary tool for cased-hole depth tie-ins and perforating gun depth control."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc32_1",
          title: "Linear & Steiber Shale Volume (V_sh) Calculation",
          scenario: "A prospective reservoir sand at 8,250 ft displays a Gamma Ray log reading GR_log = 55 API. Across the same formation interval, the clean sand baseline is established at GR_clean = 25 API, and the 100% shale baseline is GR_shale = 125 API.",
          formula: "I_GR = (GR_log - GR_clean) / (GR_shale - GR_clean); V_sh_Steiber = I_GR / (3.0 - 2.0 * I_GR)",
          givenData: {
            "GR_log (API)": 55,
            "GR_clean (API)": 25,
            "GR_shale (API)": 125
          },
          questionText: "Calculate: 1) The linear Gamma Ray Index (I_GR), and 2) The non-linear shale volume (V_sh) using Steiber's correlation as a percentage.",
          solutionSteps: [
            "Step 1: Calculate I_GR = (55 - 25) / (125 - 25) = 30 / 100 = 0.300",
            "Step 2: Calculate Steiber V_sh = 0.300 / [3.0 - 2.0 * (0.300)]",
            "       = 0.300 / [3.0 - 0.600] = 0.300 / 2.400 = 0.125 (or 12.5%)",
            "Step 3: Comparison: Linear estimation gives 30% shale, whereas Steiber correlation yields 12.5% shale."
          ],
          finalAnswer: "Linear I_GR = 0.30 (30%), Steiber V_sh = 12.5%",
          inputUnit: "%",
          expectedNumber: 12.5,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int32_1",
        question: "What is a 'Radioactive Sand' (Hot Sand)? If you see a sandstone interval with a high gamma ray reading of 90 API, how do you prove whether it is a shale or a reservoir pay zone?",
        whyAsked: "Tests petrophysical troubleshooting and tool physics. Failing to recognize hot sands causes operators to bypass major commercial oil discoveries.",
        modelAnswer: "A 'hot sand' is a permeable, reservoir-quality sandstone that emits unusually high natural gamma radiation, mimicking a shale on standard total Gamma Ray logs. This commonly occurs due to:\n1. Potassium-rich minerals: Arkosic sandstones containing abundant potassium feldspar (orthoclase/microcline) or detrital micas (biotite/muscovite),\n2. Heavy radioactive minerals: Zircon, monazite, or tourmaline concentrated in placer sands,\n3. Uranium precipitation: Groundwater carrying dissolved uranium that precipitates along organic laminations or oil-water contacts.\nTo prove whether the high-GR interval is actually a permeable pay sand rather than an impermeable shale, I use four cross-checks:\n- Spectral Gamma Ray (SGR vs CGR): Compare total gamma ray with uranium-free computed gamma ray (CGR = K + Th). If the high count is driven purely by uranium while K and Th are low, the rock is a clean sand with organic/uranium enrichment.\n- Caliper Log: Look for mud cake buildup ($Caliper < Bit Size$), which confirms the zone has permeability and is filtering mud.\n- Density-Neutron Crossover: Shales exhibit high neutron porosity and large separation due to clay-bound water. A hot sand will maintain low neutron porosity and a tight or crossing density-neutron profile typical of clean sandstone.\n- Resistivity Log: Shales have low resistivity (< 2–4 ohm-m). If the hot sand contains hydrocarbons, it will display high resistivity ($R_t > 20–100+$ ohm-m).",
        keyPoints: [
          "Hot sand causes: K-feldspar (arkose), mica, or uranium precipitation.",
          "Check Spectral GR: If uranium drives radiation, CGR is low (clean sand).",
          "Check Caliper (mud cake = permeable), Density-Neutron (tight/crossover), and high Rt."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Add Gamma Ray & Vsh Analysis to Master Skills",
      instructions: [
        "Update your petrophysical skills list: 'Gamma Ray Log Analysis (Larionov & Steiber Vsh)', 'Spectral GR Interpretation (K, Th, U)', 'Facies & Lithology Identification'.",
        "Add these to your resume draft notes."
      ],
      deliverable: "Petrophysical logging skills updated in career assets."
    }
  },

  // DAY 33
  {
    dayNumber: 33,
    phaseId: 2,
    weekNumber: 5,
    title: "Resistivity Logs: Deep, Medium & Shallow Tools",
    category: "formation_evaluation",
    categoryLabel: "Resistivity Logs",
    todayGoal: "Master Induction vs Laterolog tools, invasion separation profiles, deep resistivity (Rt), and shallow resistivity (Rxo).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Electrical resistivity is the cornerstone of hydrocarbon detection. Dry rock matrix (quartz, calcite) and hydrocarbons (oil, gas) are electrical insulators (infinite resistivity). Subsurface electric current is conducted almost exclusively by dissolved salt ions in formation water. Therefore, high resistivity indicates hydrocarbons or dense impermeable rock, while low resistivity indicates saline water or conductive clay. Measuring resistivity at multiple depths of investigation reveals the mud filtrate invasion profile and isolates true formation resistivity (Rt).",
      keyPoints: [
        "Induction Tools (AIT / Dual Induction DIL): Use electromagnetic transmitter and receiver coils to induce eddy currents in the formation. Best suited for non-conductive muds: freshwater WBM, oil-based mud (OBM), synthetic mud, or air-filled holes. Cannot run in conductive high-salinity muds.",
        "Laterolog Tools (HRLA / Dual Laterolog DLL): Use electrode arrays with guard electrodes to focus galvanic current sheets horizontally into the rock. Best suited for highly conductive muds (salt-saturated muds, R_mf < 3 * R_w) and high-resistivity formations (carbonates).",
        "Multiple Depths of Investigation: Array tools record shallow (10\"), medium (20–30\"), and deep (60–90\" or 120\") curves (e.g. AT10, AT30, AT90).",
        "Invasion Profile Signatures in an Oil Sand (Freshwater Mud): Deep resistivity (Rt) reads high (e.g. 50 ohm-m, oil). Shallow resistivity (Rxo) reads low (e.g. 8 ohm-m, fresh mud filtrate sweeping residual oil). The curves separate widely, with R_deep > R_medium > R_shallow. This positive separation is the definitive fingerprint of a permeable hydrocarbon zone!",
        "Water Sand Profile: In a saline water zone, deep resistivity drops to low values (e.g. 0.5–2 ohm-m). If drilled with fresh mud, shallow reads higher than deep (R_shallow > R_deep)."
      ],
      coreFormulas: [
        {
          name: "Resistivity Index (I)",
          formula: "I = R_t / R_o = 1 / (S_w^n)",
          explanation: "R_o is resistivity of rock 100% saturated with formation water (S_w = 1.0). In hydrocarbon sands, I > 1."
        },
        {
          name: "Formation Factor (F)",
          formula: "F = R_o / R_w = a / (phi^m)",
          explanation: "a is tortuosity factor (~1.0), m is cementation exponent (~2.0)."
        }
      ],
      fieldInsight: "Always ask: 'What mud was in the hole?' If the well was drilled with Oil-Based Mud (OBM), the mud filtrate is non-conductive oil. In this case, shallow resistivity will read HIGHER than deep resistivity even in a water sand! Understanding mud type is mandatory to avoid misidentifying a water zone as oil."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 4: Resistivity Logs",
          note: "Study Induction vs Laterolog tool physics and invasion profile curves."
        },
        {
          title: "Log Interpretation Principles/Applications (Schlumberger)",
          chapterOrSection: "Chapter 5: Resistivity and Conductivity",
          note: "Review Array Induction Tool (AIT) skin effect and 2D inversion processing."
        }
      ],
      recommendedTopics: [
        "Array Induction Tool (AIT) 1-ft, 2-ft, 4-ft vertical resolution processing",
        "Tornado chart corrections for invasion diameter (d_i)",
        "Micro-resistivity tools (MSFL, MCFL) for flushed zone Rxo"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q33_1",
          topic: "Resistivity Tools",
          question: "Which logging tool technology uses focused electrode currents and is preferred in conductive, salt-saturated drilling muds?",
          options: ["Induction logging tool", "Laterolog (Dual Laterolog DLL / High-Resolution Array)", "Sonic log", "Neutron log"],
          correctIndex: 1,
          explanation: "Laterolog tools use guard electrodes to focus current sheets into the formation, excelling in conductive salt muds where induction signals short-circuit."
        },
        {
          id: "q33_2",
          topic: "Resistivity Tools",
          question: "Induction resistivity tools operate using electromagnetic coils and are ideally suited for which drilling fluid environment?",
          options: ["Salt-saturated brine mud", "Non-conductive muds: freshwater muds, Oil-Based Mud (OBM), and air-drilled holes", "Acid solutions", "Heavy barite slurry only"],
          correctIndex: 1,
          explanation: "Induction tools induce eddy currents without needing direct galvanic contact, making them ideal for freshwater, oil-based muds, and air-filled boreholes."
        },
        {
          id: "q33_3",
          topic: "Invasion Signatures",
          question: "In a permeable oil-bearing sand drilled with freshwater mud, how do the deep (Rt), medium, and shallow (Rxo) resistivity curves typically separate?",
          options: [
            "Deep resistivity reads significantly HIGHER than shallow resistivity (R_deep > R_medium > R_shallow)",
            "Deep reads lower than shallow",
            "All curves read exactly 0.1 ohm-m",
            "Curves have zero separation"
          ],
          correctIndex: 0,
          explanation: "In an oil sand with fresh mud, virgin rock saturated with oil has high resistivity (Rt); near-wellbore flushing by filtrate lowers Rxo, creating positive separation."
        },
        {
          id: "q33_4",
          topic: "Invasion Signatures",
          question: "In an impermeable shale formation, what does the resistivity profile look like across different depths of investigation?",
          options: [
            "Huge separation of 1,000 ohm-m",
            "Zero or negligible separation: deep, medium, and shallow curves stack directly on top of each other because shales have no permeability and experience no invasion",
            "Shallow reads 10,000 ohm-m and deep reads zero",
            "Resistivity becomes negative"
          ],
          correctIndex: 1,
          explanation: "Impermeable shales cannot be invaded by mud filtrate; therefore, shallow, medium, and deep tools all read the exact same formation resistivity."
        },
        {
          id: "q33_5",
          topic: "Archie Parameters",
          question: "In Archie's equation, what does 'Ro' represent?",
          options: [
            "The resistivity of the drill pipe",
            "The resistivity of the rock when it is 100% saturated with formation water (Sw = 1.0)",
            "The resistivity of 100% pure oil",
            "The surface mud resistivity"
          ],
          correctIndex: 1,
          explanation: "Ro is the base resistivity of the wet rock: Ro = F * Rw, representing the rock saturated completely with formation brine."
        },
        {
          id: "q33_6",
          topic: "Resistivity Units",
          question: "Electrical resistivity is standardly measured in which unit in petroleum logging?",
          options: ["Ohms per square inch", "Ohm-meters (ohm-m)", "Amperes", "Volts per barrel"],
          correctIndex: 1,
          explanation: "Electrical resistivity is expressed in ohm-meters (ohm-m), defined as resistance across a 1-meter cube of material."
        },
        {
          id: "q33_7",
          topic: "Fluid Conductivity",
          question: "Why do hydrocarbons (crude oil, natural gas, condensate) have near-infinite electrical resistivity?",
          options: [
            "Because they are composed of non-polar covalent carbon-hydrogen bonds with no free ions to conduct electric current",
            "Because they are too hot",
            "Because they are radioactive",
            "Because they are under high pressure"
          ],
          correctIndex: 0,
          explanation: "Hydrocarbons are non-conductive covalent molecules without dissociated ions, acting as excellent electrical insulators."
        },
        {
          id: "q33_8",
          topic: "Flushed Zone",
          question: "Which micro-resistivity tool uses a small pad pressed directly against the borehole wall to measure flushed zone resistivity (Rxo)?",
          options: ["Micro-Spherically Focused Log (MSFL) or MCFL", "Deep Induction", "Gamma Ray", "Caliper"],
          correctIndex: 0,
          explanation: "Pad-mounted micro-resistivity tools (MSFL, MCFL) have depth of investigation of only 1–3 inches, measuring flushed zone Rxo directly."
        },
        {
          id: "q33_9",
          topic: "OBM Invasion",
          question: "When a well is drilled with Oil-Based Mud (OBM) containing non-conductive diesel/mineral oil filtrate, what happens in a WATER sand?",
          options: [
            "Shallow resistivity reads higher than deep resistivity because non-conductive oil filtrate invades the conductive water sand",
            "The well catches fire",
            "Resistivity drops to absolute zero",
            "Deep resistivity reads 1,000 ohm-m"
          ],
          correctIndex: 0,
          explanation: "In OBM, insulating oil filtrate displaces conductive brine in the flushed zone, causing Rxo > Rt (reverse invasion separation) in a water zone."
        },
        {
          id: "q33_10",
          topic: "Invasion Diameter",
          question: "What does 'Tornado Chart' analysis determine from dual induction or array resistivity curves?",
          options: [
            "True formation resistivity (Rt), flushed zone resistivity (Rxo), and invasion diameter (di)",
            "Tornado weather forecasting",
            "Well trajectory inclination",
            "Cement compressive strength"
          ],
          correctIndex: 0,
          explanation: "Tornado charts crossplot ratios of deep, medium, and shallow resistivity to solve simultaneously for invasion diameter di, Rxo, and true corrected Rt."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc33_1",
          title: "Resistivity Index & Formation Factor Calculation",
          scenario: "A clean sandstone reservoir has a porosity phi = 20% (0.20) with Archie parameters a = 1.0 and m = 2.0. Formation water resistivity at reservoir temperature is Rw = 0.05 ohm-m. An Array Induction log measures true deep formation resistivity Rt = 25.0 ohm-m.",
          formula: "F = a / (phi^m); R_o = F * R_w; I = R_t / R_o; S_w = (R_o / R_t)^(1/n)  [assume n = 2.0]",
          givenData: {
            "Porosity phi": 0.20,
            "a": 1.0,
            "m": 2.0,
            "n": 2.0,
            "Rw (ohm-m)": 0.05,
            "Rt (ohm-m)": 25.0
          },
          questionText: "Calculate: 1) Formation Factor (F), 2) Wet rock resistivity (Ro) in ohm-m, 3) Resistivity Index (I), and 4) Water saturation (Sw) as a percentage.",
          solutionSteps: [
            "Step 1: Calculate Formation Factor F = 1.0 / (0.20)^2 = 1.0 / 0.04 = 25.0",
            "Step 2: Calculate Ro = F * Rw = 25.0 * 0.05 = 1.25 ohm-m",
            "Step 3: Calculate Resistivity Index I = Rt / Ro = 25.0 / 1.25 = 20.0",
            "Step 4: Calculate Water Saturation Sw = sqrt(1 / I) = sqrt(1 / 20.0) = sqrt(0.05) = 0.2236 (or 22.4%)."
          ],
          finalAnswer: "F = 25.0, Ro = 1.25 ohm-m, Resistivity Index I = 20.0, Sw = 22.4%",
          inputUnit: "%",
          expectedNumber: 22.4,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int33_1",
        question: "Why does high resistivity NOT always mean hydrocarbons? Give three real-world geological and logging examples where you see very high resistivity without any oil or gas.",
        whyAsked: "A classic trap question in petrophysics interviews. Tests whether you blindly equate high resistivity with pay or understand mineralogy and tool physics.",
        modelAnswer: "High resistivity simply indicates that electric current cannot easily pass through the formation rock. This requires either non-conductive fluids (oil/gas) OR a rock matrix devoid of interconnected pore water. Three common examples of high resistivity without hydrocarbons are:\n1. Tight, Low-Porosity Carbonates & Quartzites: Dense, non-porous limestones, dolomites, or cemented quartzites have porosities under 1% to 2%. Because there is virtually zero pore volume for conductive saline water to reside, formation factor $F = 1/\\phi^m$ skyrockets to thousands, producing $R_t > 2,000$ ohm-m with zero hydrocarbons.\n2. Evaporite Formations (Halite / Salt and Anhydrite): Halite (rock salt) and anhydrite ($CaSO_4$) are dense crystalline ionic solids with zero porosity and zero free water. They read off-scale high resistivity (> 2,000 ohm-m) and act as impermeable regional seals.\n3. Freshwater Aquifers: In shallow formations, groundwater often consists of fresh meteoric water with very low salinity (e.g., TDS < 500 ppm). Freshwater has very high resistivity ($R_w > 5–10$ ohm-m). Even with 100% water saturation ($S_w = 1.0$), the wet rock resistivity $R_o = F \\cdot R_w$ can easily exceed 50 to 100 ohm-m, easily fooling an inexperienced engineer into mistaking a freshwater drinking aquifer for an oil reservoir.",
        keyPoints: [
          "High resistivity = lack of conductive brine; not necessarily hydrocarbon.",
          "Tight rocks: Low-porosity limestones/dolomites ($\\phi < 2\\%$).",
          "Evaporites: Halite (salt) and Anhydrite (dense non-porous crystals).",
          "Freshwater aquifers: High $R_w$ produces high $R_o$ even at $S_w = 100\\%$."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Resistivity Software Tools in Job Listings",
      instructions: [
        "Note the common petrophysical software packages: Techlog (SLB), Geolog (Emerson/Paradigm), IP (Interactive Petrophysics).",
        "Add 'Resistivity Interpretation & Archie Water Saturation' to your resume core competencies."
      ],
      deliverable: "Petrophysics software tools added to target resume keywords."
    }
  },

  // DAY 34
  {
    dayNumber: 34,
    phaseId: 2,
    weekNumber: 5,
    title: "Density Log, Neutron Log & The Gas Crossover Effect",
    category: "formation_evaluation",
    categoryLabel: "Porosity Logs",
    todayGoal: "Master bulk density (rho_b), neutron hydrogen index (NPHI), matrix densities, and the iconic gas crossover effect.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Porosity logs determine the reservoir's fluid storage capacity. The two primary nuclear porosity tools—the Formation Density Log and the Compensated Neutron Log—are universally recorded and displayed together on Track 3. While each tool has distinct physics and matrix sensitivities, running them in tandem reveals both true lithology and fluid type. When gas is present in the pore space, low hydrogen density causes the neutron log to read abnormally low porosity while low gas bulk density causes the density log to read abnormally high porosity, creating the famous 'gas crossover' (butterfly effect).",
      keyPoints: [
        "Formation Density Tool (FDC / LDT): Emits medium-energy gamma rays from a Cesium-137 source. Gamma rays undergo Compton scattering with rock electrons. The detector measures Bulk Density (rho_b in g/cm³). Porosity formula: phi_D = (rho_matrix - rho_b) / (rho_matrix - rho_fluid).",
        "Standard Matrix Densities: Sandstone = 2.65 g/cm³; Limestone = 2.71 g/cm³; Dolomite = 2.87 g/cm³; Anhydrite = 2.96 g/cm³; Salt = 2.04 g/cm³; Fluid (fresh mud filtrate) = 1.0 g/cm³; Saline brine = 1.1 g/cm³.",
        "Compensated Neutron Tool (CNL): Emits fast neutrons from an Americium-Beryllium (Am-Be) source. Neutrons collide with atomic nuclei; because hydrogen atoms have almost identical mass to neutrons, hydrogen slows and thermalizes neutrons most effectively. The tool measures Hydrogen Index (HI), calibrated to read porosity directly on a Limestone matrix scale (NPHI in p.u. or decimal).",
        "The Gas Crossover Effect: Natural gas has very low density and low hydrogen concentration compared to liquid oil or water. In a gas zone: 1) Neutron porosity drops sharply (reading falsely low, e.g. 8%), and 2) Density porosity rises sharply (reading falsely high, e.g. 30%). When plotted on compatible sandstone or limestone scales, the Density curve swings to the left and the Neutron curve swings to the right, creating a dramatic 'crossover' with shaded separation.",
        "Shale Effect: Clay minerals hold abundant crystal-bound water (OH- groups). The neutron tool interprets bound hydrogen as porosity, reading falsely high (e.g. 35–45%), while density reads 2.4–2.6 g/cm³, creating a wide 'shale separation' opposite to gas crossover."
      ],
      coreFormulas: [
        {
          name: "Density Porosity Formula",
          formula: "phi_D = (rho_ma - rho_b) / (rho_ma - rho_fl)",
          explanation: "rho_ma is matrix density (e.g. 2.65 for sand), rho_fl is fluid density (1.0 g/cm3)."
        },
        {
          name: "Neutron-Density Crossplot Porosity",
          formula: "phi_ND = sqrt[(phi_N^2 + phi_D^2) / 2]  (in gas zones: phi_ND ~ [phi_N + phi_D] / 2)",
          explanation: "Reconciles gas-affected neutron and density porosities to estimate true formation porosity."
        }
      ],
      fieldInsight: "When density and neutron curves cross over, verify that the crossover is not a false artifact of a borehole washout! In a washed-out hole, the density pad loses contact and reads low-density drilling mud, making density porosity spike falsely to mimic gas crossover. Always check the Caliper log first!"
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 5: Porosity Logs (Density, Neutron, Sonic)",
          note: "Study matrix densities, crossplot porosity, and gas corrections."
        },
        {
          title: "Log Interpretation Principles/Applications (Schlumberger)",
          chapterOrSection: "Chapter 6: Density and Neutron Logging",
          note: "Review Compton scattering physics and thermal neutron capture cross-sections."
        }
      ],
      recommendedTopics: [
        "Neutron-Density crossplot chart for lithology identification (sandstone, limestone, dolomite)",
        "Excavation effect: Extra shift in neutron reading in gas zones",
        "Wyllie time-average equation for Acoustic Sonic log: phi_S = (Delta t_log - Delta t_ma) / (Delta t_fl - Delta t_ma)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q34_1",
          topic: "Density Logging",
          question: "What physical interaction between gamma rays and formation electrons forms the basis of the Formation Density logging tool?",
          options: ["Pair production", "Compton scattering", "Photoelectric absorption only", "Nuclear fission"],
          correctIndex: 1,
          explanation: "In the energy range of Cesium-137 (0.66 MeV), Compton scattering dominates; the scattered gamma ray count is directly proportional to formation electron density."
        },
        {
          id: "q34_2",
          topic: "Matrix Densities",
          question: "What is the standard assumed rock matrix grain density (rho_ma) for a clean quartz sandstone?",
          options: ["2.16 g/cm³", "2.65 g/cm³", "2.71 g/cm³", "2.87 g/cm³"],
          correctIndex: 1,
          explanation: "Quartz sandstone grain density is 2.65 g/cm³. (Limestone is 2.71 g/cm³, Dolomite is 2.87 g/cm³)."
        },
        {
          id: "q34_3",
          topic: "Neutron Logging",
          question: "The Compensated Neutron Log (CNL) responds primarily to the concentration of which atomic element in the rock pores?",
          options: ["Carbon", "Hydrogen", "Silicon", "Sulfur"],
          correctIndex: 1,
          explanation: "Neutrons have almost the exact same mass as hydrogen protons; collisions with hydrogen slow down (thermalize) neutrons most effectively."
        },
        {
          id: "q34_4",
          topic: "Gas Crossover",
          question: "Why do the Density and Neutron porosity curves exhibit a dramatic 'crossover' in a gas-bearing reservoir zone?",
          options: [
            "Because gas melts the logging sonde",
            "Low gas density makes the density tool read falsely HIGH porosity, while low hydrogen density makes the neutron tool read falsely LOW porosity",
            "Because gas stops all radiation",
            "Because the caliper collapses"
          ],
          correctIndex: 1,
          explanation: "Gas has low bulk density (inflating density porosity) and low hydrogen index (depressing neutron porosity), creating the classic crossover separation."
        },
        {
          id: "q34_5",
          topic: "Density Porosity",
          question: "In a sandstone reservoir (rho_ma = 2.65 g/cm³, rho_fl = 1.0 g/cm³), the density tool measures a bulk density rho_b = 2.32 g/cm³. What is the density porosity (phi_D)?",
          options: ["10.0%", "15.0%", "20.0%", "25.0%"],
          correctIndex: 2,
          explanation: "phi_D = (rho_ma - rho_b) / (rho_ma - rho_fl) = (2.65 - 2.32) / (2.65 - 1.0) = 0.33 / 1.65 = 0.20 or 20.0%."
        },
        {
          id: "q34_6",
          topic: "Shale Effect",
          question: "Why does the Neutron log read abnormally HIGH porosity (often 35% to 50%) across impermeable shale beds?",
          options: [
            "Shales have huge open caves",
            "Clay minerals contain abundant hydroxyl groups (OH-) and clay-bound water; the tool senses this bound hydrogen and falsely assumes high porosity",
            "Shales are full of natural gas",
            "Neutrons are absorbed by quartz"
          ],
          correctIndex: 1,
          explanation: "The tool measures total hydrogen without distinguishing between free pore water and chemically bound water in clay lattices, exaggerating shale porosity."
        },
        {
          id: "q34_7",
          topic: "Matrix Densities",
          question: "What is the standard matrix grain density for pure Limestone (calcite, CaCO3)?",
          options: ["2.65 g/cm³", "2.71 g/cm³", "2.87 g/cm³", "2.96 g/cm³"],
          correctIndex: 1,
          explanation: "Calcite (limestone) has a grain density of 2.71 g/cm³."
        },
        {
          id: "q34_8",
          topic: "Gas Identification",
          question: "In a gas zone with phi_N = 10% and phi_D = 28%, what is the approximate crossplot porosity (phi_ND)?",
          options: ["10%", "19%", "21%", "38%"],
          correctIndex: 2,
          explanation: "In gas zones, crossplot porosity is estimated by phi_ND = sqrt[(phi_N^2 + phi_D^2)/2] = sqrt[(100 + 784)/2] = sqrt[442] = 21.0%."
        },
        {
          id: "q34_9",
          topic: "Photoelectric Effect",
          question: "The Photoelectric Factor (Pe or PEF) log recorded by modern density tools is used primarily to determine:",
          options: ["Fluid velocity", "Lithology / mineralogy (Sandstone ~ 1.81, Dolomite ~ 3.14, Limestone ~ 5.08 b/e)", "Water saturation", "Borehole temperature"],
          correctIndex: 1,
          explanation: "Pe depends directly on atomic number Z^3.6, making it an excellent diagnostic indicator of rock lithology independent of porosity."
        },
        {
          id: "q34_10",
          topic: "Sonic Logging",
          question: "The Acoustic Sonic Log measures what physical property of the rock formation?",
          options: ["Electrical resistance", "Interval compressional transit time (Delta t in microseconds per foot, us/ft)", "Magnetic resonance", "Radioactive decay"],
          correctIndex: 1,
          explanation: "Sonic tools measure the interval transit time (Delta t) required for a compressional sound wave to travel 1 foot of formation."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc34_1",
          title: "Density Porosity & Gas Crossplot Porosity Calculation",
          scenario: "An appraisal well penetrates a sandstone reservoir (rho_ma = 2.65 g/cm³, rho_fl = 1.0 g/cm³). Across a prospective pay interval, the density tool measures a bulk density rho_b = 2.27 g/cm³. The compensated neutron log (recorded on sandstone scale) reads phi_N = 0.12 (12%). Resistivity is high (Rt = 85 ohm-m).",
          formula: "phi_D = (rho_ma - rho_b) / (rho_ma - rho_fl); phi_ND = sqrt[(phi_N^2 + phi_D^2) / 2]",
          givenData: {
            "rho_ma (g/cm3)": 2.65,
            "rho_fl (g/cm3)": 1.0,
            "rho_b (g/cm3)": 2.27,
            "phi_N": 0.12
          },
          questionText: "Calculate: 1) Density porosity (phi_D), 2) Crossplot porosity (phi_ND) in a gas zone, and 3) Verify whether gas crossover is present.",
          solutionSteps: [
            "Step 1: Calculate phi_D = (2.65 - 2.27) / (2.65 - 1.0) = 0.38 / 1.65 = 0.2303 (23.0%)",
            "Step 2: Compare phi_D vs phi_N: phi_D (23.0%) > phi_N (12.0%). Density porosity is significantly higher than neutron porosity by 11 porosity units, confirming strong gas crossover!",
            "Step 3: Calculate Crossplot Porosity phi_ND = sqrt[(0.12^2 + 0.23^2) / 2]",
            "       = sqrt[(0.0144 + 0.0529) / 2] = sqrt[0.0673 / 2] = sqrt[0.03365] = 0.1834 (or 18.3%)."
          ],
          finalAnswer: "phi_D = 23.0%, phi_ND = 18.3%, Strong Gas Crossover Confirmed",
          inputUnit: "%",
          expectedNumber: 18.3,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int34_1",
        question: "How do you distinguish between a genuine Gas Crossover and a Borehole Washout on a Density-Neutron log display?",
        whyAsked: "A favorite field petrophysics question. Every junior engineer must know how to spot false gas crossovers caused by hole washouts.",
        modelAnswer: "On Track 3 of a well log, a genuine gas crossover and a severe borehole washout can visually appear identical at first glance—in both cases, the density curve swings to the left (falsely high porosity) and separates from the neutron curve. However, I distinguish between them using three definitive diagnostic checks:\n1. Check the Caliper Log: In a genuine gas crossover, the borehole wall is intact and competent; the caliper reads close to bit size, often with a thin mud cake ($Caliper \\le Bit Size$). In a washout, the caliper reads significantly larger than the bit size (e.g. 14\" in an 8-1/2\" hole). The density pad has lost wall contact and is reading the low density of drilling mud ($\\rho_b \\approx 1.1–1.3$ g/cm³), creating a synthetic 'washout crossover'.\n2. Check the Density Correction Curve (Delta-Rho / DRHO): Density tools record a spine-and-ribs correction curve ($\\Delta \\rho$). In good hole conditions, $\\Delta \\rho$ is near zero (between -0.05 and +0.05 g/cm³). In a washout where mud gets between the pad and rock, $\\Delta \\rho$ spikes severely (> +0.10 to +0.25 g/cm³), signaling that the density measurement is completely compromised.\n3. Check Deep Resistivity (Rt) and Gamma Ray: A genuine gas reservoir will exhibit very high deep resistivity ($R_t > 30–100+$ ohm-m) and low gamma ray in clean sand. A shale washout will display high gamma ray and very low resistivity ($R_t < 2$ ohm-m).",
        keyPoints: [
          "Check Caliper: Genuine gas = competent hole ($Caliper \\approx Bit Size$); Washout = enlarged hole.",
          "Check DRHO ($\\Delta \\rho$ correction): Genuine gas = near zero; Washout = spikes $> 0.1$ g/cm³.",
          "Check Resistivity: Genuine gas has high $R_t$; washed-out shales have low $R_t$ and high GR."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Save Density-Neutron Porosity Flashcard",
      instructions: [
        "Create a visual summary card of the 3 matrix densities: Sand (2.65), Lime (2.71), Dolomite (2.87).",
        "Note the gas crossover formula and DRHO validity threshold for interview prep."
      ],
      deliverable: "Density-Neutron diagnostic rules summarized in review binder."
    }
  },

  // DAY 35
  {
    dayNumber: 35,
    phaseId: 2,
    weekNumber: 5,
    title: "Identifying Lithology: Sandstone, Carbonates, Shales & Evaporites",
    category: "formation_evaluation",
    categoryLabel: "Lithology Identification",
    todayGoal: "Master multi-log lithology identification using GR, Pe, Density-Neutron crossplots, and sonic transit time.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Before calculating porosity or saturation, a petrophysicist must determine the rock matrix mineralogy. Different minerals have radically different grain densities (rho_ma), acoustic transit times (Delta t_ma), and photoelectric factors (Pe). Using the wrong lithology model corrupts reserve calculations (e.g. assuming a 2.65 g/cm³ sandstone matrix in a 2.87 g/cm³ dolomite creates a massive 13% porosity error!). We integrate Gamma Ray, Photoelectric Absorption (Pe), Density-Neutron overlay, and Sonic travel time to identify clean sands, shales, limestones, dolomites, anhydrite, and halite.",
      keyPoints: [
        "Photoelectric Factor (Pe) Benchmarks: Pure Sandstone (Quartz, SiO2) = 1.81 b/e; Dolomite (CaMg(CO3)2) = 3.14 b/e; Limestone (Calcite, CaCO3) = 5.08 b/e; Anhydrite (CaSO4) = 5.05 b/e; Barite mud contamination spikes Pe > 100 b/e.",
        "Density-Neutron Overlay on Limestone Matrix Scale: Clean Limestone: Curves track directly on top of each other (zero separation). Clean Sandstone: Density curve plots to the left of neutron (slight negative separation ~6 p.u.). Dolomite: Neutron plots significantly to the left of density (positive separation ~8–12 p.u. due to heavier matrix rho_ma = 2.87). Shale: Neutron reads high (30–45 p.u.), density reads 2.4–2.6 g/cm³, wide separation.",
        "Evaporite Signatures: Halite (Rock Salt): Density rho_b = 2.04 g/cm³, Sonic Delta t = 67 us/ft, Pe = 4.65 b/e, Resistivity off-scale high (> 2,000 ohm-m), GR near zero. Anhydrite: Extremely heavy density rho_b = 2.96 g/cm³, zero porosity, Pe = 5.05 b/e.",
        "Coal Seams: Extremely low bulk density (rho_b = 1.2 to 1.5 g/cm³), very high apparent neutron porosity (hydrogen in volatile matter), very high sonic transit time (Delta t > 120 us/ft), high resistivity."
      ],
      coreFormulas: [
        {
          name: "MID Plot Matrix Identification",
          formula: "rho_ma_app = (rho_b - phi * rho_fl) / (1 - phi)",
          explanation: "Calculates apparent matrix density to identify complex mixed carbonate-sand mineralogy."
        }
      ],
      fieldInsight: "If you observe an apparent porosity of 35% on a neutron log alongside an extremely low density of 1.3 g/cm³ and high resistivity, DO NOT get excited about an epic gas pay zone. Check the Gamma Ray and Sonic logs—this is almost certainly a lignite or sub-bituminous coal seam!"
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 6: Lithology and Porosity Determination from Multiple Logs",
          note: "Study M-N plots, MID plots, and Pe vs bulk density crossplots."
        }
      ],
      recommendedTopics: [
        "Lithology identification matrix table (GR, rho_ma, Delta t, Pe for all major minerals)",
        "Photoelectric effect (Pe) log applications and barite mud masking",
        "Dual-water and Waxman-Smits shaly-sand models"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q35_1",
          topic: "Lithology",
          question: "A clean, non-radioactive rock formation has a Photoelectric Factor Pe = 5.08 b/e and bulk density rho_b = 2.71 g/cm³ with zero separation on a limestone-calibrated density-neutron overlay. The lithology is:",
          options: ["Quartz sandstone", "Pure Limestone (Calcite)", "Dolomite", "Halite (Rock Salt)"],
          correctIndex: 1,
          explanation: "Pe = 5.08 b/e, rho_ma = 2.71 g/cm³, and perfect overlay on a limestone scale are the definitive fingerprint of pure calcite limestone."
        },
        {
          id: "q35_2",
          topic: "Lithology",
          question: "Which common sedimentary mineral has a Photoelectric Factor Pe of approximately 1.81 b/e and grain density of 2.65 g/cm³?",
          options: ["Quartz (Sandstone)", "Dolomite", "Anhydrite", "Siderite"],
          correctIndex: 0,
          explanation: "Quartz (SiO2) has a low atomic number matrix yielding Pe = 1.81 b/e and grain density 2.65 g/cm³."
        },
        {
          id: "q35_3",
          topic: "Evaporites",
          question: "An evaporite bed displays: Gamma Ray = 15 API, Bulk Density = 2.04 g/cm³, Resistivity > 2,000 ohm-m, and Caliper shows severe borehole dissolution. The mineral is:",
          options: ["Halite (Rock Salt, NaCl)", "Anhydrite", "Limestone", "Shale"],
          correctIndex: 0,
          explanation: "Halite has low density (2.04 g/cm³), zero radioactivity, off-scale resistivity, and dissolves in freshwater mud to create borehole washouts."
        },
        {
          id: "q35_4",
          topic: "Coal Identification",
          question: "How does a Coal seam typically appear on open-hole well logs?",
          options: [
            "Extremely LOW bulk density (1.2 to 1.5 g/cm³), high apparent neutron porosity, high sonic travel time, and high resistivity",
            "Very heavy density (3.0 g/cm³)",
            "Zero resistivity (< 0.1 ohm-m)",
            "Huge gamma ray (> 500 API)"
          ],
          correctIndex: 0,
          explanation: "Coal is organic carbon with very low bulk density (~1.3 g/cm³), abundant carbon-bound hydrogen (high neutron porosity), and high acoustic transit time."
        },
        {
          id: "q35_5",
          topic: "Lithology",
          question: "When density and neutron logs are displayed on a standard Limestone scale, a clean, water-saturated Dolomite formation will show:",
          options: [
            "Neutron porosity curve plotting to the LEFT of the density curve (apparent neutron reading higher than density by 8–12 p.u.)",
            "Density plotting far to the left of neutron",
            "Exact zero separation",
            "Caliper collapse"
          ],
          correctIndex: 0,
          explanation: "Dolomite has a heavier matrix (2.87 g/cm³); on a limestone scale, the neutron curve shifts left of density, producing positive separation."
        },
        {
          id: "q35_6",
          topic: "Mud Contamination",
          question: "If drilling mud is weighted with Barite (BaSO4), what happens to the Photoelectric Factor (Pe) log reading?",
          options: [
            "Pe drops to zero",
            "Barite has a very high atomic number (Barium Z = 56); barite in the mud cake causes Pe to spike off-scale (> 50 to 100+ b/e), masking formation lithology",
            "Pe remains unchanged",
            "Pe becomes negative"
          ],
          correctIndex: 1,
          explanation: "Barium absorbs low-energy gamma rays aggressively, driving Pe off-scale and destroying the tool's ability to measure formation lithology."
        },
        {
          id: "q35_7",
          topic: "Evaporites",
          question: "Anhydrite (CaSO4) is easily identified on density logs because of its exceptionally high bulk density of approximately:",
          options: ["2.04 g/cm³", "2.65 g/cm³", "2.71 g/cm³", "2.96 to 2.98 g/cm³"],
          correctIndex: 3,
          explanation: "Anhydrite is a dense, non-porous evaporite rock with matrix density of 2.96 to 2.98 g/cm³."
        },
        {
          id: "q35_8",
          topic: "Sonic Transit Time",
          question: "What is the typical matrix interval transit time (Delta t_ma) for a clean sandstone used in Wyllie's time-average equation?",
          options: ["43.5 us/ft", "51.3 to 55.5 us/ft", "67.0 us/ft", "120.0 us/ft"],
          correctIndex: 1,
          explanation: "Quartz sandstone compressional transit time is 51.3 to 55.5 us/ft. (Limestone is 47.5 us/ft; Dolomite is 43.5 us/ft)."
        },
        {
          id: "q35_9",
          topic: "Carbonates",
          question: "Why are carbonates (limestone/dolomite) often more difficult to evaluate than sandstones?",
          options: [
            "Because carbonates have complex secondary porosity (vugs, molds, fractures) and variable cementation exponents (m ranges from 1.7 to 3.0+)",
            "Because carbonates have no resistivity",
            "Because carbonates are radioactive",
            "Because oil cannot enter carbonates"
          ],
          correctIndex: 0,
          explanation: "Carbonates have complex dual-porosity systems and variable pore geometries, causing the Archie cementation exponent m to vary widely."
        },
        {
          id: "q35_10",
          topic: "Lithology",
          question: "Which crossplot is standardly used by petrophysicists to determine complex three-mineral lithology (e.g., Quartz-Calcite-Dolomite mixtures)?",
          options: ["Neutron-Density crossplot chart combined with Sonic or Pe log", "Horner plot", "Chan plot", "Darcy plot"],
          correctIndex: 0,
          explanation: "Neutron-Density combined with Sonic or Pe crossplots allows simultaneous solution of 3-mineral matrix fractions and porosity."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc35_1",
          title: "Apparent Matrix Density (rho_ma) Identification",
          scenario: "An open-hole logging suite in a carbonate reservoir records bulk density rho_b = 2.45 g/cm³. Core analysis confirms that the formation is 100% water saturated with fresh mud filtrate (rho_fl = 1.0 g/cm³), and the true effective porosity is phi = 15% (0.15).",
          formula: "rho_ma_app = (rho_b - phi * rho_fl) / (1 - phi)",
          givenData: {
            "rho_b (g/cm3)": 2.45,
            "Porosity phi": 0.15,
            "rho_fl (g/cm3)": 1.0
          },
          questionText: "Calculate: 1) The apparent grain matrix density (rho_ma_app) in g/cm³, and 2) Identify whether the rock matrix is sandstone, limestone, or dolomite.",
          solutionSteps: [
            "Step 1: Numerator = rho_b - (phi * rho_fl) = 2.45 - (0.15 * 1.0) = 2.45 - 0.15 = 2.30",
            "Step 2: Denominator = 1 - phi = 1 - 0.15 = 0.85",
            "Step 3: rho_ma_app = 2.30 / 0.85 = 2.7058 g/cm³ (~2.71 g/cm³)",
            "Step 4: Identification: Since 2.71 g/cm³ matches pure calcite, the lithology is Limestone!"
          ],
          finalAnswer: "rho_ma = 2.71 g/cm³ (Pure Limestone Lithology)",
          inputUnit: "g/cm3",
          expectedNumber: 2.71,
          tolerance: 0.02
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int35_1",
        question: "How do you identify Sandstone vs Limestone vs Dolomite vs Shale using only Gamma Ray, Photoelectric Factor (Pe), and Density-Neutron curves?",
        whyAsked: "Tests quick pattern-recognition skills essential for operational wellsite log QC and appraisal meetings.",
        modelAnswer: "I use a simple, robust 3-step screening matrix:\n1. First Filter: Gamma Ray (Shale vs Reservoir): Shales exhibit high gamma ray (> 75–100+ API) and wide density-neutron separation (neutron reads high, 35–45 p.u.). Sandstones, limestones, and dolomites are clean reservoir rocks with low gamma ray (< 30–45 API).\n2. Second Filter: Photoelectric Factor (Pe) — The Mineral Fingerprint:\n- If clean reservoir with $P_e \\approx 1.8$ to 2.0 b/e $\\rightarrow$ Sandstone (Quartz).\n- If clean reservoir with $P_e \\approx 3.0$ to 3.2 b/e $\\rightarrow$ Dolomite ($CaMg(CO_3)_2$).\n- If clean reservoir with $P_e \\approx 5.0$ to 5.1 b/e $\\rightarrow$ Limestone ($CaCO_3$).\n3. Third Filter: Density-Neutron Overlay on Limestone Matrix Scale:\n- Limestone: Density and neutron curves overlay each other perfectly (zero separation) in water-bearing rock.\n- Sandstone: Density plots slightly to the left of neutron (~6 p.u. apparent separation on limestone scale).\n- Dolomite: Neutron plots noticeably to the left of density (~8–12 p.u. apparent separation) because magnesium/calcium matrix is heavier than limestone.\nThis 3-step workflow unambiguously identifies the rock lithology in seconds.",
        keyPoints: [
          "GR separates shales (> 75 API) from clean reservoir (< 45 API).",
          "Pe provides exact mineralogy: Sand = 1.81, Dolomite = 3.14, Limestone = 5.08 b/e.",
          "Density-Neutron on limestone scale: Overlay = Limestone, Density left = Sand, Neutron left = Dolomite."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Create a Lithology Identification Quick-Card",
      instructions: [
        "In your study log, draw the 4-track log layout showing the characteristic signatures of Sandstone, Limestone, Dolomite, and Shale.",
        "Add this to your technical interview portfolio binder."
      ],
      deliverable: "Visual lithology identification cheat-sheet completed."
    }
  },

  // DAY 36
  {
    dayNumber: 36,
    phaseId: 2,
    weekNumber: 5,
    title: "Identifying Hydrocarbons: Gas vs Oil vs Water Zones",
    category: "formation_evaluation",
    categoryLabel: "Fluid Identification",
    todayGoal: "Master fluid contact determination (GOC, OWC), resistivity-porosity overlay, and distinguishing gas vs oil vs saline water.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Once lithology and porosity are determined, the ultimate petrophysical task is fluid identification. We must differentiate between: 1) Natural Gas, 2) Crude Oil / Condensate, and 3) Formation Brine. This is accomplished by combining deep resistivity (Rt) with porosity logs (Density-Neutron overlay). Identifying the exact depths of the Gas-Oil Contact (GOC) and Oil-Water Contact (OWC) establishes the hydrocarbon column height and net pay interval.",
      keyPoints: [
        "Fluid Signatures Matrix:\n- Gas Zone: Low Gamma Ray, High Deep Resistivity (Rt > 30–100+ ohm-m), Strong Density-Neutron Crossover (Density swings left, Neutron swings right), Low Sonic interval transit time.\n- Oil Zone: Low Gamma Ray, High Deep Resistivity (Rt > 15–80 ohm-m), Density and Neutron curves track each other normally without large crossover (on correct lithology scale).\n- Water Zone: Low Gamma Ray, Low Deep Resistivity (Rt drops to 0.5–3.0 ohm-m depending on water salinity Rw), Density and Neutron curves track normal water-filled matrix.\n- Shale: High Gamma Ray (> 75 API), Low Resistivity (< 3 ohm-m), Wide Density-Neutron separation (Neutron reads falsely high due to clay-bound water).",
        "Fluid Contacts on Well Logs:\n- Gas-Oil Contact (GOC): Marked by the sudden disappearance of density-neutron gas crossover while deep resistivity remains high in both oil and gas.\n- Oil-Water Contact (OWC): Marked by a sharp downward drop in deep resistivity from high (tens of ohm-m in oil) to low (1–2 ohm-m in water), while porosity remains constant across the permeable sand.",
        "Apparent Water Resistivity (Rwa): Rwa = Rt / F. In a 100% water zone, Rwa = Rw. In a hydrocarbon zone, Rwa >> Rw. Comparing Rwa to Rw is an automated, rapid pay screening method."
      ],
      coreFormulas: [
        {
          name: "Apparent Water Resistivity (Rwa)",
          formula: "R_wa = R_t * (phi^m) / a",
          explanation: "In clean water zones, Rwa equals true formation water resistivity Rw. In hydrocarbon pay, Rwa is 10 to 50 times higher."
        }
      ],
      fieldInsight: "Watch out for 'low-resistivity pay' (LRP)! Thinly bedded sand-shale laminations, micro-porous chert, or presence of conductive minerals (pyrite, glauconite) can suppress deep resistivity down to 1–3 ohm-m even in high-productivity oil zones. Never condemn a zone on resistivity alone without checking NMR (Nuclear Magnetic Resonance) or high-resolution image logs."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 7: Determination of Water Saturation",
          note: "Study fluid contact identification and Rwa comparison techniques."
        },
        {
          title: "Log Interpretation Principles/Applications (Schlumberger)",
          chapterOrSection: "Chapter 8: Fluid Identification and Contacts",
          note: "Review GOC, OWC, and wireline formation pressure gradient ties."
        }
      ],
      recommendedTopics: [
        "Pickett Plot: Log-log plot of Rt vs Porosity for determining Rw, m, and Sw",
        "Hingle Plot: Linear (1/sqrt(Rt)) vs Porosity plot",
        "Low-Resistivity Low-Contrast (LRLC) pay mechanisms"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q36_1",
          topic: "Fluid Contacts",
          question: "Across a clean, continuous sandstone reservoir, the deep resistivity abruptly drops from 65 ohm-m to 1.2 ohm-m at depth 8,450 ft, while porosity remains constant at 22%. What geological feature does 8,450 ft represent?",
          options: ["Gas-Oil Contact (GOC)", "Oil-Water Contact (OWC)", "Top of the caprock", "A fault plane with zero oil"],
          correctIndex: 1,
          explanation: "The sharp transition from high hydrocarbon resistivity (65 ohm-m) to low saline water resistivity (1.2 ohm-m) across uniform sand marks the Oil-Water Contact (OWC)."
        },
        {
          id: "q36_2",
          topic: "Fluid Identification",
          question: "What combined log signature uniquely confirms a NATURAL GAS reservoir zone?",
          options: [
            "Low Gamma Ray + High Deep Resistivity + Strong Density-Neutron Crossover",
            "High Gamma Ray + Low Resistivity",
            "Caliper washout + Zero resistivity",
            "High Gamma Ray + Heavy density"
          ],
          correctIndex: 0,
          explanation: "Clean rock (low GR) + hydrocarbon presence (high Rt) + low hydrogen/low bulk density (density-neutron crossover) is the definitive gas fingerprint."
        },
        {
          id: "q36_3",
          topic: "Fluid Identification",
          question: "How does an OIL-bearing zone differ from a GAS-bearing zone on a density-neutron overlay display (on compatible lithology scale)?",
          options: [
            "Oil has zero resistivity",
            "Oil contains liquid hydrogen density comparable to water, so density and neutron curves track closely without the dramatic crossover seen in gas",
            "Oil causes the caliper to collapse",
            "Oil reads 500 API on Gamma Ray"
          ],
          correctIndex: 1,
          explanation: "Crude oil is a liquid with hydrogen index near 1.0; unlike gas, oil does not create a strong density-neutron crossover."
        },
        {
          id: "q36_4",
          topic: "Water Saturation",
          question: "In a 100% water-saturated sandstone with formation water resistivity Rw = 0.04 ohm-m and Formation Factor F = 25, the true formation resistivity (Rt = Ro) will read:",
          options: ["1.0 ohm-m", "10.0 ohm-m", "25.0 ohm-m", "100.0 ohm-m"],
          correctIndex: 0,
          explanation: "Ro = F * Rw = 25 * 0.04 = 1.0 ohm-m."
        },
        {
          id: "q36_5",
          topic: "Apparent Water Resistivity",
          question: "If true formation water resistivity Rw is known to be 0.05 ohm-m, and a prospective sand calculates an Apparent Water Resistivity Rwa = 1.25 ohm-m, this interval is:",
          options: [
            "100% wet with formation brine",
            "Hydrocarbon-bearing (oil or gas), because Rwa is 25 times higher than formation water Rw",
            "Impermeable shale",
            "A salt dome"
          ],
          correctIndex: 1,
          explanation: "In water zones, Rwa = Rw. When Rwa >> Rw (here 1.25 vs 0.05), hydrocarbons are replacing conductive water in the pore space."
        },
        {
          id: "q36_6",
          topic: "Pickett Plot",
          question: "On a Pickett plot (log-log plot of true resistivity Rt vs effective porosity phi), the 'water line' (Sw = 100%) has a slope equal to:",
          options: ["-m (negative cementation exponent)", "Zero", "+1.0", "Gas-oil ratio"],
          correctIndex: 0,
          explanation: "Taking logs of Archie's equation yields log(Rt) = -m*log(phi) + log(a*Rw); on log-log paper, the 100% Sw line has slope -m."
        },
        {
          id: "q36_7",
          topic: "Fluid Contacts",
          question: "What log response marks the Gas-Oil Contact (GOC) inside a continuous high-resistivity hydrocarbon sand?",
          options: [
            "Resistivity drops to zero",
            "The density-neutron gas crossover disappears abruptly downward as gas transitions into liquid oil, while resistivity remains high",
            "Gamma ray spikes to 200 API",
            "Caliper expands by 5 inches"
          ],
          correctIndex: 1,
          explanation: "Resistivity stays high across both gas and oil, but the density-neutron crossover vanishes at the GOC because oil has liquid hydrogen density."
        },
        {
          id: "q36_8",
          topic: "Low-Resistivity Pay",
          question: "Which geological feature can cause a commercially productive oil sand to exhibit abnormally LOW resistivity (e.g. 1 to 3 ohm-m), known as 'low-resistivity pay'?",
          options: [
            "Thin millimeter-scale laminations of conductive shale interbedded with clean sand (shaly sand)",
            "Presence of conductive minerals like pyrite (iron sulfide)",
            "Very high capillary-bound water in microporous grains",
            "All of the above"
          ],
          correctIndex: 3,
          explanation: "Laminated shales, conductive pyrite, and microporous chert/clays conduct electricity while oil flows freely from macro-pores."
        },
        {
          id: "q36_9",
          topic: "Fluid Density",
          question: "Why do wireline formation pressure tester (MDT) pressure gradients provide definitive confirmation of fluid contacts identified on well logs?",
          options: [
            "Pressure gradients directly measure in-situ fluid density: Gas (~0.08 psi/ft), Oil (~0.35 psi/ft), and Water (~0.45 psi/ft)",
            "Pressure testers measure Gamma rays",
            "Pressure testers take core plugs",
            "Pressure testers drill the rock"
          ],
          correctIndex: 0,
          explanation: "The slope of pressure vs TVD equals in-situ fluid density, giving unambiguous physical proof of gas, oil, and water contacts."
        },
        {
          id: "q36_10",
          topic: "Log Analysis",
          question: "In a gas reservoir, what happens to the Acoustic Sonic interval transit time (Delta t)?",
          options: [
            "Transit time increases significantly (sound wave travels slower through gas-filled pores, creating cycle skipping or gas slowness)",
            "Transit time drops to zero",
            "Sound travels at the speed of light",
            "Transit time is unaffected"
          ],
          correctIndex: 0,
          explanation: "Compressional sound waves travel much slower through compressible gas than liquids, increasing interval transit time Delta t."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc36_1",
          title: "Hydrocarbon Column Height & Rwa Screening",
          scenario: "An appraisal well penetrates a sandstone reservoir. Petrophysical analysis identifies: Top of Sand at 7,800 ft TVD, Gas-Oil Contact (GOC) at 7,845 ft TVD, and Oil-Water Contact (OWC) at 7,920 ft TVD. Base of Sand is at 7,960 ft TVD. Across the oil leg, average porosity phi = 18%, Archie a = 1.0, m = 2.0, and deep resistivity Rt = 45 ohm-m. Formation water resistivity is Rw = 0.04 ohm-m.",
          formula: "h_gas = GOC - Top; h_oil = OWC - GOC; R_wa = R_t * (phi^m) / a",
          givenData: {
            "Top Sand (ft)": 7800,
            "GOC (ft)": 7845,
            "OWC (ft)": 7920,
            "Base Sand (ft)": 7960,
            "Porosity phi": 0.18,
            "Rt (ohm-m)": 45.0,
            "Rw (ohm-m)": 0.04
          },
          questionText: "Calculate: 1) Gas column thickness in ft, 2) Oil column thickness in ft, 3) Apparent water resistivity (Rwa) in the oil zone, and 4) Ratio Rwa / Rw.",
          solutionSteps: [
            "Step 1: Gas column h_gas = 7,845 - 7,800 = 45 ft",
            "Step 2: Oil column h_oil = 7,920 - 7,845 = 75 ft (Total Hydrocarbon Column = 120 ft)",
            "Step 3: Rwa = Rt * phi^2 / 1.0 = 45.0 * (0.18)^2 = 45.0 * 0.0324 = 1.458 ohm-m",
            "Step 4: Rwa / Rw ratio = 1.458 / 0.04 = 36.45 (Rwa is > 36x higher than Rw, proving rich hydrocarbon saturation!)."
          ],
          finalAnswer: "Gas Column = 45 ft, Oil Column = 75 ft, Rwa = 1.46 ohm-m (Rwa/Rw = 36.5)",
          inputUnit: "ft",
          expectedNumber: 75,
          tolerance: 1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int36_1",
        question: "Walk me through how you identify the Gas-Oil Contact (GOC) and Oil-Water Contact (OWC) on a composite well log containing GR, Resistivity, and Density-Neutron tracks.",
        whyAsked: "Tests your practical formation evaluation interpretation skills on real composite log tracks.",
        modelAnswer: "To identify fluid contacts on a composite log display, I follow a systematic top-to-bottom depth scan:\n1. Establish Clean Reservoir Window (Track 1): Confirm low Gamma Ray (< 40 API) and in-gauge Caliper across the sandstone formation interval.\n2. Locate the Gas-Oil Contact (GOC): Start at the top of the reservoir sand. In the gas cap, deep resistivity (Track 2) is high (> 50 ohm-m). In Track 3, density porosity swings sharply left and neutron porosity swings right, creating a prominent gas crossover. As I trace deeper, I look for the exact depth where this density-neutron crossover suddenly collapses and the two curves begin tracking each other normally, while deep resistivity remains high. That precise depth marks the Gas-Oil Contact (GOC).\n3. Locate the Oil-Water Contact (OWC): Continuing downward into the oil leg, resistivity remains high (30–80 ohm-m) and density-neutron shows normal oil-filled rock. As I proceed deeper, I locate the depth where deep resistivity drops sharply by an order of magnitude (from > 40 ohm-m down to 1–2 ohm-m) over a few feet, while Gamma Ray and porosity remain constant. That depth is the Oil-Water Contact (OWC). Below the OWC, the rock is 100% saturated with formation brine.\n4. Quality Control Verification: I verify these contact depths against mud logging gas chromatograph data (C1/C2/C3 ratios) and wireline MDT pressure gradient slope changes.",
        keyPoints: [
          "GOC: High Rt in both zones, but density-neutron gas crossover collapses at contact.",
          "OWC: Sharp drop in deep resistivity from high (oil) to low (water) in clean sand.",
          "QC check: Confirm with gas chromatography and MDT pressure gradients."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Save Fluid Identification Protocols to Portfolio Notes",
      instructions: [
        "Document the exact log signatures of Gas vs Oil vs Water in your study binder.",
        "Prepare for Day 37's full mathematical petrophysical interpretation workflow (Archie, Net Pay, Cutoffs)."
      ],
      deliverable: "Fluid contact petrophysical criteria summarized in preparation for project work."
    }
  },

  // DAY 37
  {
    dayNumber: 37,
    phaseId: 2,
    weekNumber: 5,
    title: "Petrophysical Calculations: Porosity, Archie's Sw & Net Pay",
    category: "formation_evaluation",
    categoryLabel: "Core Calculations",
    todayGoal: "Master the complete petrophysical calculation workflow: shale volume (Vsh), effective porosity (phi_e), Archie's water saturation (Sw), and net-to-gross (NTG) cutoffs.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Today we synthesize all logging logs into the master petrophysical calculation workflow that every operator uses to estimate reserves. Given a set of raw log curves (GR, rho_b, NPHI, Rt), you will execute the 4-step sequence: 1) Calculate Shale Volume (Vsh), 2) Calculate Effective Porosity (phi_e = phi_total * [1 - Vsh]), 3) Calculate Water Saturation (Sw via Archie or Simandoux shaly sand model), and 4) Apply reservoir cutoffs to calculate Gross Sand, Net Sand, Net Pay, and Net-to-Gross (NTG) ratio.",
      keyPoints: [
        "Step 1 — Shale Volume: V_sh = Steiber(I_GR) or Larionov.",
        "Step 2 — Effective Porosity: Corrects total porosity for clay volume: phi_e = phi_total * (1 - V_sh) or phi_e = phi_D - V_sh * phi_D_shale.",
        "Step 3 — Archie's Water Saturation (Clean Sand): S_w = [(a * R_w) / (phi_e^m * R_t)]^(1/n). Standard parameters: a = 1.0, m = 2.0 (cementation), n = 2.0 (saturation exponent).",
        "Shaly Sand Equation (Simandoux): 1 / R_t = (phi_e^m * S_w^n) / (a * R_w) + (V_sh * S_w) / R_sh. Accounts for electrical conductivity contributed by clay minerals.",
        "Step 4 — Net Pay Cutoffs: Three standard petrophysical cutoffs are applied to determine pay: 1) V_sh cutoff (e.g. V_sh <= 0.35 to eliminate non-reservoir shale), 2) Porosity cutoff (e.g. phi_e >= 0.10 to eliminate tight rock), 3) Water saturation cutoff (e.g. S_w <= 0.50 to eliminate water-productive intervals).",
        "Net-to-Gross (NTG): NTG = Net Pay Thickness / Gross Sand Thickness."
      ],
      coreFormulas: [
        {
          name: "Archie's Water Saturation Equation",
          formula: "S_w = [(a * R_w) / (phi_e^m * R_t)]^(1 / n)",
          explanation: "a typically 1.0, m = 2.0, n = 2.0 in clean consolidated sandstones."
        },
        {
          name: "Hydrocarbon Saturation (S_h)",
          formula: "S_h = 1.0 - S_w",
          explanation: "Fraction of pore space filled by hydrocarbons (oil and/or gas)."
        }
      ],
      fieldInsight: "Never apply arbitrary net pay cutoffs! A porosity cutoff should correspond to a permeability threshold (e.g. k >= 1 mD for oil or 0.1 mD for gas) based on core measurements. Setting an overly aggressive Sw cutoff (e.g. Sw <= 40%) in a reservoir with high irreducible water will discard profitable barrels of oil."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 8: Shaly Sand Analysis & Net Pay Determination",
          note: "Study Simandoux, Indonesian shaly sand models, and cutoff definitions."
        },
        {
          title: "Core Analysis: A Best Practice Guide (Colin McPhee, Jules Reed)",
          chapterOrSection: "Chapter 7: Integrating Core with Well Logs for Cutoffs",
          note: "Review core calibration of m, n, and permeability cutoffs."
        }
      ],
      recommendedTopics: [
        "Simandoux and Indonesian (Poupon-Leveaux) shaly sand models",
        "Buckles Number (phi * Sw = constant in homogeneous rock at irreducible water)",
        "Net-to-Gross (NTG) calculation rules"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q37_1",
          topic: "Archie Equation",
          question: "Using Archie's equation with standard sandstone parameters a = 1.0, m = 2.0, n = 2.0: if Rw = 0.04 ohm-m, phi = 0.20, and Rt = 25.0 ohm-m, what is the calculated water saturation (Sw)?",
          options: ["10.0%", "20.0%", "30.0%", "50.0%"],
          correctIndex: 1,
          explanation: "F = 1 / (0.20)^2 = 25.0. Ro = F * Rw = 25.0 * 0.04 = 1.0 ohm-m. Sw = sqrt(Ro / Rt) = sqrt(1.0 / 25.0) = sqrt(0.04) = 0.20 or 20.0%."
        },
        {
          id: "q37_2",
          topic: "Hydrocarbon Saturation",
          question: "If water saturation Sw is calculated as 22%, what is the hydrocarbon saturation (Sh)?",
          options: ["22%", "50%", "78%", "100%"],
          correctIndex: 2,
          explanation: "Sh = 1.0 - Sw = 1.0 - 0.22 = 0.78 (or 78%)."
        },
        {
          id: "q37_3",
          topic: "Shaly Sand Models",
          question: "Why does the standard Archie equation fail and underestimate hydrocarbon saturation in shaly sandstones (clay-rich sands)?",
          options: [
            "Because clay minerals possess cation exchange capacity (CEC) that conducts electricity, lowering total resistivity (Rt) and falsely inflating calculated Sw in Archie's equation",
            "Because Archie's equation only works for gold",
            "Because shales have zero porosity",
            "Because shales are radioactive"
          ],
          correctIndex: 0,
          explanation: "Clay minerals conduct electric current through their surface electrical double layers, artificially depressing Rt and causing Archie to overestimate Sw."
        },
        {
          id: "q37_4",
          topic: "Net Pay Cutoffs",
          question: "In petrophysics, what is the difference between 'Gross Sand' and 'Net Pay'?",
          options: [
            "Gross Sand is the total thickness of the sand body; Net Pay is the subset of that thickness that meets Vsh, porosity, and Sw cutoffs and will commercially produce hydrocarbons",
            "Gross sand is drilled with air; net pay is drilled with mud",
            "They are identical terms",
            "Net pay is always zero"
          ],
          correctIndex: 0,
          explanation: "Gross sand includes all sandy rock; Net Pay filters out shales (Vsh cutoff), tight rock (phi cutoff), and water-bearing intervals (Sw cutoff)."
        },
        {
          id: "q37_5",
          topic: "Effective Porosity",
          question: "If total porosity phi_t = 22% and shale volume Vsh = 15%, what is the effective porosity using phi_e = phi_t * (1 - Vsh)?",
          options: ["15.0%", "18.7%", "22.0%", "25.5%"],
          correctIndex: 1,
          explanation: "phi_e = 0.22 * (1 - 0.15) = 0.22 * 0.85 = 0.187 or 18.7%."
        },
        {
          id: "q37_6",
          topic: "Buckles Number",
          question: "What is 'Buckles Number' (BVW = phi * Sw) in petrophysical interpretation?",
          options: [
            "Bulk Volume Water: if BVW is constant across a reservoir interval, the zone is at irreducible water saturation (Swirr) and will produce 100% water-free hydrocarbons",
            "The weight of the logging cable",
            "The speed of sound in oil",
            "The number of perforations"
          ],
          correctIndex: 0,
          explanation: "A constant Bulk Volume Water (BVW = phi * Sw) proves the formation is at irreducible water saturation and will produce water-free oil."
        },
        {
          id: "q37_7",
          topic: "Cementation Exponent",
          question: "The cementation exponent 'm' in Archie's equation is physically related to:",
          options: [
            "Pore throat tortuosity, connectivity, and rock consolidation (typically m ~ 2.0 in clean sandstone; can reach 2.5–3.0 in vuggy carbonates)",
            "The brand of cement behind casing",
            "Mud pump stroke rate",
            "Well depth"
          ],
          correctIndex: 0,
          explanation: "The cementation exponent m reflects the shape and tortuosity of pore interconnectivity; isolated vugs increase m, while fractures reduce m."
        },
        {
          id: "q37_8",
          topic: "Net-to-Gross",
          question: "A reservoir sand has a gross interval thickness of 100 ft. Applying petrophysical cutoffs determines that 65 ft qualifies as commercial net pay. What is the Net-to-Gross (NTG) ratio?",
          options: ["0.35", "0.50", "0.65 (65%)", "1.54"],
          correctIndex: 2,
          explanation: "NTG = Net Pay / Gross Thickness = 65 ft / 100 ft = 0.65 or 65%."
        },
        {
          id: "q37_9",
          topic: "Shaly Sand Equations",
          question: "Which of the following is an industry-standard shaly-sand water saturation model?",
          options: ["Simandoux equation & Indonesian (Poupon-Leveaux) equation", "Vogel equation", "Darcy equation", "Bourgoyne equation"],
          correctIndex: 0,
          explanation: "Simandoux, Indonesian, Dual-Water, and Waxman-Smits are the global benchmark models for computing Sw in shaly sand reservoirs."
        },
        {
          id: "q37_10",
          topic: "Cutoff Selection",
          question: "Why must petrophysical cutoffs be calibrated against core plug flow tests rather than chosen arbitrarily?",
          options: [
            "To ensure the porosity cutoff accurately represents the minimum permeability needed for fluid to flow at commercial rates under reservoir drawdown",
            "Because core plugs are free",
            "Because logs cannot be recorded without cores",
            "Because cutoffs have no impact on reserves"
          ],
          correctIndex: 0,
          explanation: "Porosity cutoffs must correspond to a dynamic flow capacity limit (permeability k) established by core analysis to avoid discarding productive reservoir."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc37_1",
          title: "Complete Petrophysical Workflow: Vsh, Porosity, Sw & Net Pay",
          scenario: "A 40-ft sand interval (8,000 to 8,040 ft) has average log readings: GR = 42 API (clean sand baseline = 20 API, shale baseline = 120 API). Bulk density rho_b = 2.29 g/cm³ (rho_ma = 2.65 g/cm³, rho_fl = 1.0 g/cm³). True deep resistivity Rt = 30.0 ohm-m. Formation water resistivity Rw = 0.045 ohm-m at 160°F. Archie parameters: a = 1.0, m = 2.0, n = 2.0. Reservoir cutoffs: Vsh <= 30%, phi_e >= 12%, Sw <= 50%.",
          formula: "I_GR = (GR - GR_cl) / (GR_sh - GR_cl); V_sh = I_GR / (3 - 2*I_GR); phi_D = (rho_ma - rho_b) / (rho_ma - rho_fl); phi_e = phi_D * (1 - V_sh); S_w = sqrt[ (a * R_w) / (phi_e^m * R_t) ]",
          givenData: {
            "GR (API)": 42,
            "GR_cl (API)": 20,
            "GR_sh (API)": 120,
            "rho_b (g/cm3)": 2.29,
            "rho_ma (g/cm3)": 2.65,
            "rho_fl (g/cm3)": 1.0,
            "Rt (ohm-m)": 30.0,
            "Rw (ohm-m)": 0.045
          },
          questionText: "Calculate: 1) Steiber shale volume (Vsh), 2) Effective porosity (phi_e), 3) Water saturation (Sw) as a percentage, and 4) Verify if the entire 40-ft interval qualifies as Net Pay.",
          solutionSteps: [
            "Step 1: I_GR = (42 - 20) / (120 - 20) = 22 / 100 = 0.220",
            "Step 2: Steiber V_sh = 0.220 / [3 - 2*(0.220)] = 0.220 / 2.560 = 0.0859 (8.6% shale)",
            "Step 3: Total Density Porosity phi_D = (2.65 - 2.29) / (2.65 - 1.0) = 0.36 / 1.65 = 0.2182 (21.8%)",
            "Step 4: Effective Porosity phi_e = 0.2182 * (1 - 0.0859) = 0.2182 * 0.9141 = 0.1995 (19.9% or ~20.0%)",
            "Step 5: Formation Factor F = 1.0 / (0.1995)^2 = 1.0 / 0.0398 = 25.13",
            "Step 6: Ro = F * Rw = 25.13 * 0.045 = 1.131 ohm-m",
            "Step 7: Sw = sqrt(Ro / Rt) = sqrt(1.131 / 30.0) = sqrt(0.0377) = 0.1942 (19.4%)",
            "Step 8: Cutoff evaluation: Vsh = 8.6% <= 30% (PASS); phi_e = 19.9% >= 12% (PASS); Sw = 19.4% <= 50% (PASS). The entire 40 ft interval qualifies as Net Pay! NTG = 100%."
          ],
          finalAnswer: "Vsh = 8.6%, phi_e = 20.0%, Sw = 19.4%, Net Pay = 40 ft (100% Pay)",
          inputUnit: "%",
          expectedNumber: 19.4,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int37_1",
        question: "Walk me through Archie's Water Saturation equation step-by-step. What does each parameter mean, where does it come from, and what are the major limitations of Archie's model?",
        whyAsked: "The #1 petrophysics interview question worldwide. Tests whether you know the formula by heart and understand its empirical origin.",
        modelAnswer: "Archie's equation (1942) is the fundamental relationship relating electrical resistivity to water saturation in porous rocks:\n$$S_w = \\sqrt[n]{\\frac{a \\cdot R_w}{\\phi^m \\cdot R_t}}$$\nBreaking down each parameter:\n1. $S_w$: Water Saturation (fraction of pore space occupied by formation brine). Hydrocarbon saturation is $S_h = 1 - S_w$.\n2. $a$: Tortuosity factor (empirically ~1.0 in sandstones, up to 1.4 in some carbonates).\n3. $R_w$: Formation Water Resistivity at formation temperature. Obtained from water samples, catalog databases, SP log deflection, or Pickett plots.\n4. $\\phi$: Effective Porosity. Measured from density-neutron crossplot or core plugs.\n5. $m$: Cementation Exponent (typically $m \\approx 2.0$ in consolidated sandstones; ranges from 1.3 in fractured rocks to 2.5–3.0+ in moldic/vuggy carbonates). Measured in the lab via Special Core Analysis (SCAL) Formation Resistivity Factor tests.\n6. $R_t$: True uninvaded formation resistivity deep in the virgin reservoir, measured by deep induction or deep laterolog.\n7. $n$: Saturation Exponent (typically $n \\approx 2.0$). Measured in lab SCAL drainage tests.\nMajor Limitations of Archie's Model:\n- Assumes Clean Sand: Archie assumes rock matrix is a perfect electrical insulator and electric current flows ONLY through pore brine. If clay minerals (shale) are present, clay surfaces conduct electricity via Cation Exchange Capacity (CEC), causing Archie to calculate falsely high water saturation. (Requires shaly sand models: Simandoux, Indonesian, or Waxman-Smits).\n- Assumes Uniform Wettability: Assumes strongly water-wet rock. In oil-wet rocks, oil coats the grain surfaces, confining water to thin disconnected films; saturation exponent $n$ can rise to 3.0 to 5.0+, causing Archie to drastically underestimate water saturation if $n = 2$ is assumed.",
        keyPoints: [
          "State formula: $S_w = [(a \\cdot R_w) / (\\phi^m \\cdot R_t)]^{1/n}$.",
          "Identify sources for all 6 parameters ($R_w$ from SP/catalog, $\\phi$ from density-neutron, $m, n$ from SCAL core, $R_t$ from deep induction).",
          "Limitations: Fails in shaly sands (clay conduction suppresses $R_t$) and altered wettability (oil-wet rocks increase $n$)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Save Archie Petrophysical Calculation Template",
      instructions: [
        "In your study log, write down the step-by-step Archie algorithm (Vsh -> phi_e -> F -> Ro -> Sw -> Net Pay).",
        "You will use this exact algorithm in your Project 2 Well Log Evaluation case study in Phase 3!"
      ],
      deliverable: "Archie petrophysical calculation template verified and ready for project use."
    }
  },

  // DAY 38
  {
    dayNumber: 38,
    phaseId: 2,
    weekNumber: 5,
    title: "Well-Log Interpretation Practice: Real Composite Log Workshop",
    category: "formation_evaluation",
    categoryLabel: "Hands-on Practice",
    todayGoal: "Perform full end-to-end composite well log interpretation across multiple formations, identifying pay zones, contacts, and non-pay intervals.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Today is a hands-on practical workshop. You are handed a full multi-track composite well log covering a 400-ft gross section containing interbedded shales, tight carbonates, gas sands, oil sands, and wet sands. You will apply the full systematic petrophysical workflow: Track 1 (Caliper & GR) to establish lithology and washouts; Track 2 (Resistivity) to analyze invasion and hydrocarbon presence; and Track 3 (Density-Neutron) to measure porosity and identify gas crossover.",
      keyPoints: [
        "Zone-by-Zone Interpretation Strategy:\n- Step 1: Scan Caliper log. Flag any depth intervals with severe washouts where density readings must be discarded.\n- Step 2: Establish clean sand baseline (GR_clean = 22 API) and shale baseline (GR_shale = 118 API). Identify permeable reservoir intervals (GR < 50 API).\n- Step 3: Inspect Resistivity Track 2. Classify high-resistivity (> 20 ohm-m) intervals vs low-resistivity (< 3 ohm-m) water zones.\n- Step 4: Inspect Porosity Track 3. Identify gas crossover in upper reservoir sands.\n- Step 5: Mark Gas-Oil Contact (GOC) and Oil-Water Contact (OWC).\n- Step 6: Compute net pay thickness and average porosity.",
        "Case Study Intervals Analyzed Today:\n- Zone A (8,100–8,140 ft): Clean sand, high Rt (90 ohm-m), density-neutron crossover -> GAS PAY (40 ft).\n- Zone B (8,140–8,210 ft): Clean sand, high Rt (45 ohm-m), tracking density-neutron -> OIL PAY (70 ft).\n- Zone C (8,210–8,260 ft): Clean sand, low Rt (1.2 ohm-m), tracking density-neutron -> WATER SAND (50 ft).\n- Zone D (8,260–8,310 ft): High GR (95 API), low Rt (2.5 ohm-m), wide neutron-density separation -> IMPERMEABLE SHALE (50 ft).\n- Zone E (8,310–8,350 ft): Low GR (18 API), off-scale Rt (> 2,000 ohm-m), low porosity (phi < 2%) -> DENSE IMPERMEABLE LIMESTONE (40 ft)."
      ],
      fieldInsight: "Notice Zone E: High resistivity (> 2,000 ohm-m) and low GR (18 API) could easily trick a beginner into calling it huge oil pay! But look at Track 3: Density bulk density is 2.70 g/cm³ and neutron porosity is 1.5%. There are no pores for oil to exist in—this is a tight limestone seal."
    },
    watchRead: {
      textbooks: [
        {
          title: "Basic Well Log Analysis (Asquith & Krygowski)",
          chapterOrSection: "Chapter 9: Complex Lithology Interpretation Case Studies",
          note: "Work through real-world composite log interpretation examples."
        }
      ],
      recommendedTopics: [
        "Standard log scale conventions: Track 1 (0–150 API), Track 2 (0.2–2000 ohm-m), Track 3 (45% to -15% porosity)",
        "Distinguishing tight rock vs hydrocarbon pay",
        "Perforation interval selection rules (standoff from OWC)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q38_1",
          topic: "Log Workshop",
          question: "In Zone A (8,100–8,140 ft), GR = 25 API, Rt = 90 ohm-m, phi_D = 24%, and phi_N = 10%. What is the fluid content?",
          options: ["Saline water", "Natural gas pay", "Tight anhydrite", "Impermeable shale"],
          correctIndex: 1,
          explanation: "Low GR (clean sand) + high resistivity (90 ohm-m) + prominent density-neutron crossover (phi_D 24% vs phi_N 10%) confirms Gas Pay."
        },
        {
          id: "q38_2",
          topic: "Log Workshop",
          question: "At depth 8,140 ft, the density-neutron gas crossover disappears, but deep resistivity remains high at 45 ohm-m down to 8,210 ft. What occurs at 8,140 ft?",
          options: ["Gas-Oil Contact (GOC)", "Oil-Water Contact (OWC)", "Top of cement", "Casing shoe"],
          correctIndex: 0,
          explanation: "The collapse of gas crossover while deep resistivity remains high marks the Gas-Oil Contact (GOC)."
        },
        {
          id: "q38_3",
          topic: "Log Workshop",
          question: "At depth 8,210 ft, deep resistivity drops abruptly from 45 ohm-m down to 1.2 ohm-m in clean sand. What occurs at 8,210 ft?",
          options: ["Gas-Oil Contact (GOC)", "Oil-Water Contact (OWC)", "A shale layer", "Fault slip"],
          correctIndex: 1,
          explanation: "The abrupt drop from 45 ohm-m (oil) to 1.2 ohm-m (water) marks the Oil-Water Contact (OWC)."
        },
        {
          id: "q38_4",
          topic: "Log Workshop",
          question: "In Zone E (8,310–8,350 ft), GR = 18 API, Rt > 2,000 ohm-m, and porosity is under 2%. Why is this zone NOT commercial hydrocarbon pay?",
          options: [
            "It is full of heavy mud",
            "It is a dense, tight impermeable limestone with virtually zero porosity (< 2%) and zero storage capacity, acting as a seal rather than a reservoir",
            "It is too cold",
            "It has dissolved in water"
          ],
          correctIndex: 1,
          explanation: "High resistivity without porosity indicates dense, tight impermeable rock with zero storage capacity."
        },
        {
          id: "q38_5",
          topic: "Log Workshop",
          question: "What is the total thickness of the commercial HYDROCARBON PAY (Gas + Oil) in this workshop section?",
          options: ["40 ft", "70 ft", "110 ft (40 ft gas + 70 ft oil)", "240 ft"],
          correctIndex: 2,
          explanation: "Gas pay = 8,100 to 8,140 ft (40 ft). Oil pay = 8,140 to 8,210 ft (70 ft). Total hydrocarbon pay = 40 + 70 = 110 ft."
        },
        {
          id: "q38_6",
          topic: "Perforation Strategy",
          question: "If management decides to complete this well as an OIL producer, where should the perforations ideally be placed?",
          options: [
            "In Zone A (gas cap) to maximize gas production",
            "In the middle of Zone B (e.g. 8,160 to 8,190 ft), maintaining standoff from both the GOC (8,140 ft) and OWC (8,210 ft) to prevent premature gas or water coning",
            "In Zone C (water sand)",
            "Directly across the GOC at 8,140 ft"
          ],
          correctIndex: 1,
          explanation: "Perforating in the middle of the oil column maintains maximum buffer standoff from the gas cap above and bottom water below, delaying coning."
        },
        {
          id: "q38_7",
          topic: "Log Workshop",
          question: "In Zone D (8,260–8,310 ft), GR reads 95 API, Rt reads 2.5 ohm-m, and neutron reads 38 p.u. This zone is:",
          options: ["Clean gas sand", "Impermeable shale seal", "Pure sandstone", "Oil sand"],
          correctIndex: 1,
          explanation: "High GR (95 API) + low resistivity (2.5 ohm-m) + high apparent neutron porosity (clay-bound water) defines impermeable shale."
        },
        {
          id: "q38_8",
          topic: "Log Interpretation",
          question: "Across Zone C (8,210–8,260 ft), why does resistivity read only 1.2 ohm-m despite having 20% porosity?",
          options: [
            "The pores are 100% saturated with highly conductive saline formation brine (Sw = 100%)",
            "The rock is pure gold",
            "The logging tool was turned off",
            "The casing collapsed"
          ],
          correctIndex: 0,
          explanation: "100% saline water saturation conducts electricity freely, pulling resistivity down to Ro = 1.2 ohm-m."
        },
        {
          id: "q38_9",
          topic: "Log Workshop",
          question: "What is the Gross Sand thickness of the main reservoir sand body (Zone A + B + C, from 8,100 to 8,260 ft)?",
          options: ["40 ft", "110 ft", "160 ft", "400 ft"],
          correctIndex: 2,
          explanation: "Gross sand interval extends from top of sand (8,100 ft) to base of sand at the shale boundary (8,260 ft): 8,260 - 8,100 = 160 ft."
        },
        {
          id: "q38_10",
          topic: "Net-to-Gross",
          question: "What is the Net Pay to Gross Sand ratio (NTG) for this reservoir sand body?",
          options: ["0.25", "0.50", "0.6875 (110 ft / 160 ft ~ 69%)", "1.00"],
          correctIndex: 2,
          explanation: "NTG = Net Pay / Gross Sand = 110 ft / 160 ft = 0.6875 or ~68.8%."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc38_1",
          title: "Workshop Net Pay & Hydrocarbon Pore Volume (HCPV) Calculation",
          scenario: "From today's workshop analysis: The oil column (8,140 to 8,210 ft) has a net thickness h = 70 ft. Average effective porosity across the oil leg is phi_e = 21% (0.21). Average water saturation calculated via Archie's law is Sw = 24% (0.24). The reservoir drainage area is A = 320 acres.",
          formula: "HCPV_ft = h * phi_e * (1 - S_w); Total_HCPV_bbl = 7758 * A * HCPV_ft",
          givenData: {
            "Net thickness h (ft)": 70,
            "Porosity phi_e": 0.21,
            "Sw": 0.24,
            "Area A (acres)": 320
          },
          questionText: "Calculate: 1) Hydrocarbon pore thickness (HCPV in feet), and 2) Total hydrocarbon pore volume in reservoir barrels (res bbl).",
          solutionSteps: [
            "Step 1: Calculate oil saturation So = 1.0 - Sw = 1.0 - 0.24 = 0.76",
            "Step 2: Hydrocarbon pore thickness HCPV = h * phi_e * So = 70 * 0.21 * 0.76 = 11.172 ft",
            "Step 3: Total HCPV = 7,758 * A * HCPV = 7,758 * 320 * 11.172",
            "       = 2,482,560 * 11.172 = 27,735,160 res bbl (~27.74 million reservoir barrels)."
          ],
          finalAnswer: "HCPV = 11.17 ft, Total Reservoir HCPV = 27.74 MMbbl",
          inputUnit: "MMbbl",
          expectedNumber: 27.74,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int38_1",
        question: "If I hand you a well log with 50 feet of clean sand, high resistivity (50 ohm-m), and 25% porosity, where would you choose to perforate if you know an active bottom water aquifer exists below?",
        whyAsked: "Tests practical production and completion engineering judgment combined with petrophysical interpretation.",
        modelAnswer: "When completing an oil reservoir with bottom water drive, perforation placement is a balance between well productivity and water coning delay:\n1. Stand-off from the Oil-Water Contact (OWC): I would NEVER perforate the bottom 15 to 20 feet of the sand. Perforating near the OWC creates a short vertical drainage distance; the dynamic drawdown will immediately cone water upward into the perforations, ruining the well within days.\n2. Optimal Perforation Window: I would select the top 15 to 20 feet of the sand (the upper 30% to 40% of the oil column). This provides maximum vertical standoff ($h - h_p$) from the bottom water table. According to critical coning rate formulas (e.g. Meyer-Gardner: $q_{crit} \\propto h^2 - h_p^2$), maximizing the distance between the bottom perforation and the OWC maximizes the critical water-free oil production rate.\n3. Perforation Strategy: Use deep-penetrating shaped charges with spiral phasing (60° or 90°) to minimize skin and distributed drawdown. If standoff is limited, evaluate completing with downhole Inflow Control Devices (ICDs) or leaving the well for a future horizontal well with long lateral contact at the very top of the structure.",
        keyPoints: [
          "Never perforate the lower section; avoid OWC to prevent immediate water coning.",
          "Perforate upper 30–40% of the pay zone to maximize vertical standoff ($h - h_p$).",
          "Maximizing standoff maximizes water-free critical production rate ($q_{crit} \\propto h^2 - h_p^2$)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Well Log Interpretation for Tomorrow's Mini Test",
      instructions: [
        "Review your notes from Days 31 to 38 (Borehole environment, GR/Vsh, Resistivity tools, Density-Neutron, Lithology, Contacts, Archie Sw).",
        "Be ready for the 30-question Well-Log Mini Test tomorrow on Day 39."
      ],
      deliverable: "Petrophysics workshop completed and study notes reviewed for Day 39 test."
    }
  },

  // DAY 39
  {
    dayNumber: 39,
    phaseId: 2,
    weekNumber: 5,
    title: "WELL-LOG MINI TEST: Formation Evaluation Benchmark",
    category: "formation_evaluation",
    categoryLabel: "Weekly Exam",
    todayGoal: "Complete the 30-question Well-Log Benchmark Test, solve practical petrophysical calculations, and audit weak areas.",
    estimatedTotalMinutes: 125,
    isTestDay: true,
    testId: "week_5_test",
    learn: {
      durationMinutes: 25,
      summary: "Milestone Day. Today is the formal benchmark exam for Week 5: Well Logging & Formation Evaluation. It tests your mastery of tool physics, borehole invasion, shale volume calculation, lithology identification, Archie's saturation equation, and fluid contact detection. Any incorrect question is automatically logged to your Revision Queue.",
      keyPoints: [
        "Exam scope: 30 technical questions + calculation problems covering Days 31 to 38.",
        "Pass benchmark: 80% (24 / 30).",
        "Target outcome: Solidify your petrophysical confidence before transitioning into Week 6: Well Testing & EOR."
      ],
      fieldInsight: "Petrophysics is the primary bridge between geosciences and petroleum engineering. Performing well on this test ensures you can defend reserve estimates and net pay picks during technical interviews."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Week 5 Review",
          chapterOrSection: "Days 31–38 Notes & Formula Cards",
          note: "Quickly scan Archie's equation, Steiber Vsh, and matrix density table."
        }
      ],
      recommendedTopics: [
        "Archie formula Sw = [(a*Rw) / (phi^m * Rt)]^(1/n)",
        "Matrix densities: Sand (2.65), Lime (2.71), Dolomite (2.87)",
        "Pe values: Sand (1.81), Dolomite (3.14), Lime (5.08)"
      ]
    },
    practice: {
      durationMinutes: 60,
      questionCount: 10,
      questions: [
        {
          id: "w5_t1",
          topic: "Well Logging",
          question: "What does the Gamma Ray log primarily measure?",
          options: ["Sound velocity", "Natural radioactivity emitted by Potassium, Uranium, and Thorium", "Electrical resistance", "Borehole diameter"],
          correctIndex: 1,
          explanation: "The GR log measures natural radioactivity originating from K-40, U-238, and Th-232."
        },
        {
          id: "w5_t2",
          topic: "Porosity Logs",
          question: "The Formation Density log determines bulk density by measuring the Compton scattering of gamma rays emitted from which radioactive source?",
          options: ["Americium-Beryllium", "Cesium-137", "Cobalt-60", "Radium-226"],
          correctIndex: 1,
          explanation: "Modern density tools use a chemical Cesium-137 (Cs-137) source emitting 0.66 MeV gamma rays."
        },
        {
          id: "w5_t3",
          topic: "Fluid Contacts",
          question: "A sudden downward disappearance of Density-Neutron gas crossover in a continuous clean high-resistivity sand indicates the:",
          options: ["Oil-Water Contact (OWC)", "Gas-Oil Contact (GOC)", "Casing shoe", "Shale baseline"],
          correctIndex: 1,
          explanation: "Resistivity stays high, but gas crossover collapses at the GOC as gas transitions to liquid oil."
        },
        {
          id: "w5_t4",
          topic: "Archie Equation",
          question: "If effective porosity phi = 0.25, a = 1.0, m = 2.0, Rw = 0.05 ohm-m, and Rt = 20.0 ohm-m, what is the calculated water saturation (Sw)?",
          options: ["10.0%", "20.0%", "30.0%", "40.0%"],
          correctIndex: 1,
          explanation: "F = 1 / (0.25)^2 = 16.0. Ro = F * Rw = 16.0 * 0.05 = 0.80 ohm-m. Sw = sqrt(Ro / Rt) = sqrt(0.80 / 20.0) = sqrt(0.04) = 0.20 or 20.0%."
        },
        {
          id: "w5_t5",
          topic: "Lithology",
          question: "A Photoelectric Factor Pe reading of 5.08 b/e is diagnostic of which rock mineral?",
          options: ["Quartz (Sandstone)", "Calcite (Limestone)", "Dolomite", "Halite"],
          correctIndex: 1,
          explanation: "Pe = 5.08 b/e is the definitive physical constant for pure calcite limestone."
        },
        {
          id: "w5_t6",
          topic: "Shale Volume",
          question: "If GR_clean = 20 API, GR_shale = 120 API, and log GR = 40 API, what is the linear Gamma Ray Index (I_GR)?",
          options: ["0.10", "0.20", "0.30", "0.40"],
          correctIndex: 1,
          explanation: "I_GR = (40 - 20) / (120 - 20) = 20 / 100 = 0.20 (20%)."
        },
        {
          id: "w5_t7",
          topic: "Resistivity",
          question: "In a permeable oil-bearing sand drilled with freshwater mud, the resistivity profile exhibits:",
          options: [
            "Positive invasion separation: Deep resistivity reads significantly higher than shallow resistivity (Rt > Rxo)",
            "Negative separation: Rxo > Rt",
            "Zero separation",
            "Zero resistivity"
          ],
          correctIndex: 0,
          explanation: "Pristine oil in the uninvaded zone has high resistivity (Rt), while mud filtrate flushing lowers Rxo, creating positive separation."
        },
        {
          id: "w5_t8",
          topic: "Caliper Log",
          question: "When the caliper log reads significantly LARGER than the bit size across a shale interval, this indicates:",
          options: ["Mud cake buildup", "Borehole breakout or washout caused by mechanical shale collapse", "The formation is high-pressure gas", "A dense limestone"],
          correctIndex: 1,
          explanation: "Caliper > Bit size indicates borehole enlargement (washout/breakout) from brittle shale failure or fluid erosion."
        },
        {
          id: "w5_t9",
          topic: "Borehole Environment",
          question: "Which logging tool measures flushed zone resistivity (Rxo) with an investigation depth of only 1 to 3 inches?",
          options: ["Deep Induction", "Micro-Spherically Focused Log (MSFL) or MCFL", "Gamma Ray", "Neutron log"],
          correctIndex: 1,
          explanation: "Micro-resistivity pad tools (MSFL/MCFL) measure the very shallow flushed zone (Rxo) adjacent to the borehole wall."
        },
        {
          id: "w5_t10",
          topic: "Net Pay",
          question: "What is the primary purpose of applying a 'Shale Volume Cutoff' (e.g. Vsh <= 35%) when calculating net pay?",
          options: [
            "To eliminate non-reservoir, clay-rich impermeable rocks that will not flow hydrocarbons to the wellbore",
            "To make the reservoir larger",
            "To increase water cut",
            "To double the oil price"
          ],
          correctIndex: 0,
          explanation: "A Vsh cutoff eliminates tight, shaly intervals that lack interconnected permeability, ensuring only reservoir-quality rock is included in Net Pay."
        }
      ]
    },
    calculation: {
      durationMinutes: 25,
      problemCount: 1,
      problems: [
        {
          id: "calc39_1",
          title: "Well-Log Benchmark Calculation: Complete Petrophysical Assessment",
          scenario: "An exploratory well penetrates a clean sand interval with average bulk density rho_b = 2.25 g/cm³ (rho_ma = 2.65 g/cm³, rho_fl = 1.0 g/cm³). Gamma Ray confirms clean sand (Vsh = 0). True deep resistivity Rt = 32.0 ohm-m. Formation water resistivity at reservoir temperature is Rw = 0.05 ohm-m. Archie parameters: a = 1.0, m = 2.0, n = 2.0. The gross pay interval is 50 ft.",
          formula: "phi_D = (rho_ma - rho_b) / (rho_ma - rho_fl); F = a / (phi^m); R_o = F * R_w; S_w = sqrt(R_o / R_t); HCPV = h * phi * (1 - S_w)",
          givenData: {
            "rho_b (g/cm3)": 2.25,
            "rho_ma (g/cm3)": 2.65,
            "rho_fl (g/cm3)": 1.0,
            "Rt (ohm-m)": 32.0,
            "Rw (ohm-m)": 0.05,
            "h (ft)": 50
          },
          questionText: "Calculate: 1) Porosity (phi_D), 2) Water saturation (Sw) as a percentage, 3) Hydrocarbon saturation (Sh), and 4) Hydrocarbon pore volume (HCPV) in feet.",
          solutionSteps: [
            "Step 1: phi_D = (2.65 - 2.25) / (2.65 - 1.0) = 0.40 / 1.65 = 0.2424 (24.2%)",
            "Step 2: F = 1.0 / (0.2424)^2 = 1.0 / 0.05877 = 17.015",
            "Step 3: Ro = F * Rw = 17.015 * 0.05 = 0.8508 ohm-m",
            "Step 4: Sw = sqrt(Ro / Rt) = sqrt(0.8508 / 32.0) = sqrt(0.026588) = 0.1631 (or 16.3%)",
            "Step 5: Sh = 1.0 - Sw = 1.0 - 0.1631 = 0.8369 (83.7%)",
            "Step 6: HCPV in feet = h * phi * Sh = 50 * 0.2424 * 0.8369 = 10.14 ft."
          ],
          finalAnswer: "Porosity = 24.2%, Sw = 16.3%, Sh = 83.7%, HCPV = 10.1 ft",
          inputUnit: "%",
          expectedNumber: 16.3,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int39_1",
        question: "How do you explain the difference between Total Porosity and Effective Porosity, and which one MUST be used in reserve calculations?",
        whyAsked: "A foundational question that interviewers use to verify whether you understand clay-bound water and reservoir storage.",
        modelAnswer: "Total Porosity ($\\phi_t$) represents the entire fraction of bulk rock volume occupied by void space, regardless of whether those void spaces are connected or isolated. In shaly formations, total porosity includes the micro-porosity within clay crystal lattices that holds capillary- and clay-bound water.\nEffective Porosity ($\\phi_e$) represents ONLY the interconnected pore volume through which fluids can migrate and produce into a wellbore. It excludes isolated, dead-end pores and clay-bound water: $\\phi_e = \\phi_t \\cdot (1 - V_{sh})$.\nWhich one MUST be used: Effective Porosity must ALWAYS be used for recoverable reserve calculations and fluid flow modeling. If an engineer uses total porosity in a shaly sandstone, they will include bound water that can never flow, drastically overestimating Original Oil In Place (STOIIP) and recoverable reserves. In commercial reserve software (Petrel, Techlog), all volumetric formulas strictly multiply net pay by effective porosity.",
        keyPoints: [
          "Total porosity = all void space (isolated + connected + clay-bound water).",
          "Effective porosity = interconnected pores available for fluid storage and flow.",
          "Must use Effective Porosity to prevent massive overestimation of recoverable reserves."
        ]
      }
    },
    career: {
      durationMinutes: 15,
      actionTitle: "Audit 'Things I Forgot' for Week 5",
      instructions: [
        "Log any missed petrophysics questions into your Revision Queue.",
        "Celebrate completing 39 days of deliberate career rebuilding!"
      ],
      deliverable: "Week 5 Revision Queue updated and verified in dashboard."
    }
  },

  // DAY 40
  {
    dayNumber: 40,
    phaseId: 2,
    weekNumber: 5,
    title: "FORMATION EVALUATION REVISION & GAP CLOSURE",
    category: "formation_evaluation",
    categoryLabel: "Weekly Revision",
    todayGoal: "Review all weak petrophysical topics from yesterday's exam, re-solve missed calculation problems, and master tool physics.",
    estimatedTotalMinutes: 120,
    learn: {
      durationMinutes: 45,
      summary: "Today is dedicated to closing every gap identified during Week 5. Petrophysics is unforgiving: an error in fluid contacts, a misunderstood invasion profile, or a flawed Vsh calculation carries directly into multi-million dollar drilling and completion decisions. Today, revisit your personal 'Things I Forgot' log from yesterday's exam, master the nuances of shaly sand models, and solidify your understanding before entering Week 6.",
      keyPoints: [
        "Tool Physics Review: GR (natural gamma decay), Density (Compton scattering of gamma rays -> electron density -> bulk density), Neutron (hydrogen thermalization), Sonic (interval transit time Delta t), Resistivity (induced eddy currents vs focused galvanic current sheets).",
        "Fluid Contact Summary: GOC marked by collapse of gas crossover with persistent high Rt; OWC marked by steep drop in Rt across uniform sand.",
        "Archie Model Sensitivity: Porosity error impacts Sw linearly; cementation exponent 'm' impacts Sw exponentially ($S_w \\propto \\phi^{-m/n}$).",
        "Shaly Sand Compensation: Shales lower Rt. Models: Simandoux, Indonesian, Dual-Water, Waxman-Smits."
      ],
      fieldInsight: "In appraisal meetings, petrophysicists are grilled hardest on Archie's cementation exponent m and water resistivity Rw. Knowing how Rw was measured (water catalog vs SP vs water sample at surface corrected to formation temperature using Arps equation: $R_{w2} = R_{w1} \\cdot (T_1 + 6.77) / (T_2 + 6.77)$) gives you instant credibility."
    },
    watchRead: {
      textbooks: [
        {
          title: "Arps Water Resistivity Temperature Correction",
          chapterOrSection: "Arps Formula Review",
          note: "Study temperature conversion: Rw at formation temperature vs surface temperature."
        }
      ],
      recommendedTopics: [
        "Arps temperature equation for water resistivity: R2 = R1 * (T1 + 6.77) / (T2 + 6.77)",
        "Review of all Week 5 questions in Revision Queue"
      ]
    },
    practice: {
      durationMinutes: 35,
      questionCount: 10,
      questions: [
        {
          id: "q40_1",
          topic: "Water Resistivity",
          question: "Arps' equation is standardly used in well log analysis to:",
          options: [
            "Correct water resistivity (Rw) from laboratory surface temperature to subsurface formation temperature",
            "Calculate decline curves",
            "Measure mud weight",
            "Determine drill pipe wear"
          ],
          correctIndex: 0,
          explanation: "Water resistivity decreases as temperature rises; Arps equation: R2 = R1 * (T1 + 6.77) / (T2 + 6.77) adjusts Rw to formation temperature."
        },
        {
          id: "q40_2",
          topic: "Temperature Effect",
          question: "If water resistivity Rw is 0.12 ohm-m at 75°F surface temperature, what will happen to Rw at 175°F downhole?",
          options: [
            "Rw will increase to 1.0 ohm-m",
            "Rw will decrease significantly (to approximately 0.05 ohm-m) because higher temperature increases ionic mobility",
            "Rw remains exactly 0.12 ohm-m",
            "Rw drops to zero"
          ],
          correctIndex: 1,
          explanation: "Elevated temperature increases the kinetic mobility of dissolved ions in brine, significantly increasing electrical conductivity (lowering Rw)."
        },
        {
          id: "q40_3",
          topic: "Petrophysics",
          question: "What is 'Cation Exchange Capacity' (CEC) of clay minerals?",
          options: [
            "The ability of clay platelets to hold exchangeable cations (Na+, Ca2+) on their negatively charged crystal surfaces, conducting electricity independently of pore brine",
            "The rate of gas flow",
            "The density of shale",
            "The temperature of clay"
          ],
          correctIndex: 0,
          explanation: "CEC measures excess electrical charges on clay surfaces that conduct current, which causes Archie's law to overestimate water saturation in shaly sands."
        },
        {
          id: "q40_4",
          topic: "Tool Physics",
          question: "Which clay mineral typically exhibits the highest Cation Exchange Capacity (CEC) and creates the greatest shaly-sand suppression?",
          options: ["Smectite (Montmorillonite)", "Kaolinite", "Quartz", "Calcite"],
          correctIndex: 0,
          explanation: "Smectite has a high CEC (80–150 meq/100g) due to extensive crystal layer substitution, creating intense electrical conduction."
        },
        {
          id: "q40_5",
          topic: "Fluid Contacts",
          question: "If an oil well is completed with perforations across the transition zone (above FWL but below the clean oil plateau), what will it produce?",
          options: ["100% clean oil", "Both oil and water simultaneously (high initial water cut)", "100% dry gas", "Solid salt"],
          correctIndex: 1,
          explanation: "In the transition zone, both water and oil are mobile (Sw > Swirr); completing here produces a high water cut from day one."
        },
        {
          id: "q40_6",
          topic: "Porosity Logs",
          question: "What is 'Excavation Effect' in neutron logging?",
          options: [
            "Digging a pit with an excavator",
            "An extra shift in the neutron log toward lower porosity in gas zones caused by the absence of hydrogen in the rock volume replaced by gas",
            "A drilling error",
            "Casing corrosion"
          ],
          correctIndex: 1,
          explanation: "Excavation effect is an additional decrease in apparent neutron porosity in gas zones beyond what simple volumetric gas mixing predicts."
        },
        {
          id: "q40_7",
          topic: "Core Calibration",
          question: "Special Core Analysis (SCAL) electrical property testing on core plugs measures which two crucial Archie exponents?",
          options: ["m (cementation exponent) and n (saturation exponent)", "k and h", "API and SG", "BHP and WHP"],
          correctIndex: 0,
          explanation: "SCAL tests measure formation factor vs porosity (to determine m) and resistivity index vs water saturation (to determine n)."
        },
        {
          id: "q40_8",
          topic: "Net Pay",
          question: "What is the typical range of porosity cutoffs applied in conventional sandstone oil reservoirs?",
          options: ["1% to 2%", "8% to 12%", "35% to 50%", "75% to 80%"],
          correctIndex: 1,
          explanation: "Conventional sandstone oil reservoirs typically apply porosity cutoffs between 8% and 12% (corresponding to ~1 mD permeability)."
        },
        {
          id: "q40_9",
          topic: "Invasion Profile",
          question: "Why does deep resistivity (Rt) read deeper into the formation than shallow resistivity (Rxo)?",
          options: [
            "Induction and array tools use transmitter-receiver spacings of 60 to 90+ inches, allowing electromagnetic fields to investigate deep past mud filtrate invasion",
            "Because deep tools use radioactive rays",
            "Because shallow tools use air",
            "Because deep tools are heavier"
          ],
          correctIndex: 0,
          explanation: "Longer coil and electrode transmitter-receiver spacings penetrate deeper into the virgin rock beyond near-wellbore filtrate invasion."
        },
        {
          id: "q40_10",
          topic: "Formation Evaluation",
          question: "The ultimate objective of integrating well logs, core data, and formation tests is to:",
          options: [
            "Determine Original Hydrocarbons In Place (STOIIP / OGIP), define net pay intervals, and optimize completion placement",
            "Fill up filing cabinets",
            "Spend the drilling budget",
            "Make colorful plots"
          ],
          correctIndex: 0,
          explanation: "Formation evaluation quantifies commercial asset value: how much oil/gas is stored, where it is located, and how to complete the well for maximum recovery."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc40_1",
          title: "Arps Water Resistivity Temperature Correction",
          scenario: "A formation water sample extracted from a DST test has a measured laboratory resistivity Rw1 = 0.12 ohm-m at surface ambient temperature T1 = 75°F. The target reservoir sand is located at 9,200 ft TVD with a measured geothermal formation temperature T2 = 185°F.",
          formula: "R_w2 = R_w1 * (T_1 + 6.77) / (T_2 + 6.77)",
          givenData: {
            "Rw1 (ohm-m)": 0.12,
            "T1 (°F)": 75,
            "T2 (°F)": 185
          },
          questionText: "Calculate the corrected formation water resistivity (Rw2) in ohm-m at the reservoir temperature of 185°F.",
          solutionSteps: [
            "Step 1: Numerator = Rw1 * (T1 + 6.77) = 0.12 * (75 + 6.77) = 0.12 * 81.77 = 9.8124",
            "Step 2: Denominator = T2 + 6.77 = 185 + 6.77 = 191.77",
            "Step 3: Corrected Rw2 = 9.8124 / 191.77 = 0.05116 ohm-m (~0.051 ohm-m)."
          ],
          finalAnswer: "Corrected Formation Water Resistivity Rw = 0.051 ohm-m",
          inputUnit: "ohm-m",
          expectedNumber: 0.051,
          tolerance: 0.003
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int40_1",
        question: "Why is water resistivity (Rw) so sensitive to temperature, and how do you determine formation temperature if only surface temperature and geothermal gradient are known?",
        whyAsked: "Tests thermodynamics, petrophysics, and practical field calculations.",
        modelAnswer: "Water resistivity ($R_w$) is inversely proportional to dissolved ion mobility. In an aqueous electrolyte, dissolved sodium ($Na^+$) and chloride ($Cl^-$) ions carry the electric charge. As temperature increases, fluid viscosity drops and thermal kinetic energy increases, allowing ions to move much faster under an electric field. Therefore, conductivity increases and electrical resistivity ($R_w$) plummets as depth and temperature rise.\nDetermining Formation Temperature:\nIf a downhole temperature survey or bottom-hole gauge reading is not yet available, we calculate formation temperature ($T_{form}$) using the regional geothermal gradient:\n$$T_{form} = T_{mean\\_surface} + \\text{Geothermal Gradient} \\cdot TVD$$\nFor example, if mean annual surface temperature is 70°F and the geothermal gradient is 1.2°F / 100 ft (0.012°F/ft), at 10,000 ft TVD the formation temperature is $70 + (0.012 \\cdot 10,000) = 190^\\circ$F. We then apply Arps' formula: $R_{w2} = R_{w1} \\cdot (T_1 + 6.77) / (T_2 + 6.77)$ to correct surface laboratory water resistivity to true reservoir conditions.",
        keyPoints: [
          "Physics: Higher temperature increases ionic mobility, reducing $R_w$.",
          "Gradient formula: $T_{form} = T_{surface} + \\text{Geothermal Gradient} \\cdot TVD$.",
          "Apply Arps formula: $R_2 = R_1 \\cdot (T_1 + 6.77) / (T_2 + 6.77)$."
        ]
      }
    },
    career: {
      durationMinutes: 10,
      actionTitle: "Milestone Review: Week 5 Complete",
      instructions: [
        "Verify that your Revision Queue is clear of petrophysical items.",
        "Celebrate Day 40! Tomorrow begins Week 6: Well Testing & Enhanced Oil Recovery (EOR)."
      ],
      deliverable: "Week 5 logged as 100% complete in your command center."
    }
  }
];
