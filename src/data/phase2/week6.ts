import { DayPlan } from '../../types';

export const WEEK_6_DAYS: DayPlan[] = [
  // DAY 41
  {
    dayNumber: 41,
    phaseId: 2,
    weekNumber: 6,
    title: "Pressure Transient Testing: Test Types & Operations",
    category: "well_testing",
    categoryLabel: "Well Testing",
    todayGoal: "Master pressure transient testing fundamentals: Drill Stem Tests (DST), drawdown, buildup, interference tests, and high-precision quartz gauges.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Pressure Transient Analysis (PTA) is the dynamic method used to determine in-situ reservoir flow capacity (permeability-thickness product k*h), near-wellbore skin damage or stimulation (s), initial reservoir pressure (Pi), and distance to reservoir boundaries or sealing faults. While well logs give static petrophysical measurements of rock within inches of the wellbore, well tests investigate hundreds or thousands of feet radially into the reservoir.",
      keyPoints: [
        "Major Test Types: 1) Pressure Drawdown Test (well flowed at constant rate; monitors pressure decline), 2) Pressure Buildup Test (well flowed, then shut in; pressure builds back toward static reservoir pressure; cleanest data because flow rate is precisely zero), 3) Drill Stem Test (DST: temporary completion on drill string in exploratory wells to flow, shut in, and sample virgin formations), 4) Injection / Falloff Test (for water/gas injectors), 5) Interference & Pulse Tests (multi-well tests to prove inter-well hydraulic communication across faults).",
        "Downhole Pressure Gauges: Electronic quartz crystal pressure gauges provide precision within 0.01 psi and fast sampling rates (sub-second), capturing subtle pressure derivative signatures.",
        "Operational Sequence for a Buildup Test: Flow the well at a stable, accurately metered rate for sufficient time (flow time tp) until Infinite-Acting Radial Flow is established, then shut in at the bottom hole (using downhole shut-in tool to minimize wellbore storage). Record pressure buildup continuously."
      ],
      coreFormulas: [
        {
          name: "Effective Flow Time (tp)",
          formula: "t_p = 24 * N_p / q_last",
          explanation: "t_p in hours, N_p in STB cumulative production, q_last in STB/day last stabilized flow rate."
        }
      ],
      fieldInsight: "Always shut in the well downhole rather than at the surface Christmas tree whenever possible. Surface shut-in allows afterflow and phase redistribution (gas bubbling up through liquid) to continue inside thousands of feet of casing, creating severe wellbore storage distortion that masks the reservoir signal for hours or days."
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Testing (John Lee, John B. Rollins, John P. Spivey)",
          chapterOrSection: "Chapter 1: Introduction to Well Testing & Test Types",
          note: "Study DST mechanics, surface vs downhole shut-in, and gauge accuracy."
        }
      ],
      recommendedTopics: [
        "DST downhole tool string (tester valve, reverse circulation valve, dual gauges)",
        "Phase redistribution phenomenon in wellbores during shut-in",
        "Guidelines for stabilized flow rate before starting a buildup test"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q41_1",
          topic: "Well Testing",
          question: "Why is a Pressure Buildup Test generally preferred over a Pressure Drawdown Test in field operations?",
          options: [
            "Because maintaining a perfectly constant flow rate during a drawdown test is extremely difficult, whereas maintaining a constant rate of ZERO during shut-in is exact",
            "Because drawdown tests require zero gauges",
            "Because buildup tests can only be run in dry gas wells",
            "Because buildup tests take 10 seconds"
          ],
          correctIndex: 0,
          explanation: "In a buildup test, the well is shut in, so flow rate is strictly constant at zero (q = 0), eliminating rate fluctuations that corrupt drawdown interpretation."
        },
        {
          id: "q41_2",
          topic: "DST",
          question: "A Drill Stem Test (DST) is typically performed on an exploration well to:",
          options: [
            "Obtain representative reservoir fluid samples, measure initial reservoir pressure (Pi), and determine formation permeability before running production casing",
            "Drill the well deeper",
            "Clean the drill bit",
            "Cement the casing string"
          ],
          correctIndex: 0,
          explanation: "DSTs provide a temporary completion using the drill string to test unproven exploratory zones and decide whether to run casing."
        },
        {
          id: "q41_3",
          topic: "Gauges",
          question: "Which type of downhole pressure sensor provides the highest accuracy, resolution (0.01 psi), and thermal stability for pressure transient analysis?",
          options: ["Quartz crystal resonator pressure gauge", "Mechanical Bourdon tube", "Strain gauge only", "Barometer"],
          correctIndex: 0,
          explanation: "Quartz crystal sensors measure changes in quartz resonant frequency with pressure, offering ultra-high precision (0.01 psi) and low drift."
        },
        {
          id: "q41_4",
          topic: "Wellbore Storage",
          question: "What is the primary operational advantage of using a downhole shut-in tool rather than shutting in the well at the surface Christmas tree?",
          options: [
            "Dramatically reduces wellbore storage duration, allowing the reservoir radial flow regime to appear much sooner",
            "Costs less money",
            "Eliminates the need for downhole gauges",
            "Increases oil API gravity"
          ],
          correctIndex: 0,
          explanation: "Downhole shut-in isolates the wellbore volume, preventing afterflow and phase segregation from distorting the early-time pressure signal."
        },
        {
          id: "q41_5",
          topic: "Multi-Well Testing",
          question: "What is an 'Interference Test' used for in reservoir appraisal?",
          options: [
            "To prove pressure communication and determine directional permeability and reservoir continuity between multiple offset wells",
            "To jam radio communications on the rig",
            "To produce water",
            "To measure cement bond"
          ],
          correctIndex: 0,
          explanation: "Interference testing flows or pulses an active well while recording pressure responses in observation wells to verify continuity."
        },
        {
          id: "q41_6",
          topic: "Effective Flow Time",
          question: "If a well has produced cumulative oil Np = 10,000 STB and its last stabilized flow rate was q = 500 STB/day, what is the effective producing time (tp)?",
          options: ["20 hours", "120 hours", "480 hours", "1,000 hours"],
          correctIndex: 2,
          explanation: "tp = 24 * (Np / q) = 24 * (10,000 / 500) = 24 * 20 = 480 hours."
        },
        {
          id: "q41_7",
          topic: "Phase Redistribution",
          question: "What visual signature does 'phase redistribution' create on early-time well test diagnostic plots?",
          options: [
            "A hump or peak on the derivative curve that temporarily exceeds the normal wellbore storage line, caused by gas segregation inside the shut-in wellbore",
            "A flat straight line",
            "Resistivity spikes",
            "Negative pressure"
          ],
          correctIndex: 0,
          explanation: "Gas bubbling up through liquid in a shut-in wellbore pressurizes the gas column, causing an artificial pressure hump on the derivative."
        },
        {
          id: "q41_8",
          topic: "Well Testing",
          question: "During a falloff test, which type of well is shut in to observe pressure decline?",
          options: ["A water or gas injection well", "A naturally flowing oil well", "An abandoned dry hole", "A drilling rig mud pit"],
          correctIndex: 0,
          explanation: "A falloff test is the injector analog of a buildup test: the injection pump is shut down, and pressure falloff is recorded."
        },
        {
          id: "q41_9",
          topic: "PTA Objectives",
          question: "Which of the following parameters CANNOT be determined directly from a single-well pressure buildup test?",
          options: ["Permeability-thickness product (k*h)", "Skin factor (s)", "Average reservoir pressure (P_avg)", "Exact chemical elemental composition of rock minerals"],
          correctIndex: 3,
          explanation: "PTA measures dynamic hydraulic properties (k, s, P, boundaries), not microscopic rock mineral chemistry (which requires logs and core XRD)."
        },
        {
          id: "q41_10",
          topic: "Testing Operations",
          question: "Why must downhole pressure gauges be calibrated against deadweight testers before and after every well test?",
          options: [
            "To ensure sensor accuracy and correct for gauge clock drift and temperature hysteresis",
            "To paint the gauges",
            "Because regulations require wasting time",
            "To increase oil flow"
          ],
          correctIndex: 0,
          explanation: "Deadweight calibration certifies pressure precision and thermal calibration coefficients before trusting the data."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc41_1",
          title: "Effective Flow Time & Equivalent Drawdown Calculation",
          scenario: "An appraisal well has produced cumulative oil Np = 4,200 STB. Prior to shut-in for a pressure buildup test, the well flowed at a steady stabilized rate q = 350 STB/day. Bottom-hole gauge measures flowing pressure Pwf = 2,420 psi just before shut-in. Initial static reservoir pressure is Pi = 3,150 psi.",
          formula: "t_p = 24 * (N_p / q); Delta_P_total = P_i - P_wf",
          givenData: {
            "Np (STB)": 4200,
            "q (STB/day)": 350,
            "Pwf (psi)": 2420,
            "Pi (psi)": 3150
          },
          questionText: "Calculate: 1) The effective producing time (tp) in hours, and 2) Total flowing drawdown (Delta_P) in psi at the moment of shut-in.",
          solutionSteps: [
            "Step 1: Calculate producing time tp = 24 * (Np / q) = 24 * (4,200 / 350) = 24 * 12 = 288 hours",
            "Step 2: Calculate Drawdown Delta_P = Pi - Pwf = 3,150 - 2,420 = 730 psi."
          ],
          finalAnswer: "Effective Flow Time tp = 288 hours, Total Drawdown = 730 psi",
          inputUnit: "hours",
          expectedNumber: 288,
          tolerance: 1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int41_1",
        question: "Why is a downhole shut-in tool used in pressure buildup testing, and how does it improve data quality compared to surface shut-in at the Christmas tree?",
        whyAsked: "Tests understanding of wellbore dynamics, wellbore storage distortion, and test quality control.",
        modelAnswer: "A downhole shut-in tool is placed in the bottom-hole assembly directly above the pressure gauges and packer to physically shut in the well at the sandface.\nWhen a well is shut in at the surface Christmas tree, the entire volume of the tubing string (thousands of barrels of fluid) remains connected to the reservoir. Fluid continues to flow into the wellbore from the formation after surface shut-in (afterflow or wellbore storage). Furthermore, in multiphase flow, gas bubbles continue to percolate upward through liquid while liquid settles downward (phase redistribution), causing unpredictable pressure surges and humps that distort the pressure derivative. In tight formations or deep wells, surface shut-in wellbore storage can last for 24 to 72+ hours, masking the critical Infinite-Acting Radial Flow (IARF) regime and wasting tens of thousands of dollars in rig time.\nA downhole shut-in tool isolates the reservoir from the tubing string instantly. Fluid volume below the tool is minimal (often less than 1–2 barrels), which collapses wellbore storage duration to just a few minutes. This allows the reservoir radial flow response to appear almost immediately, saving valuable test time and providing clean, unambiguous permeability and skin measurements.",
        keyPoints: [
          "Surface shut-in leaves thousands of feet of tubing communicating with reservoir (afterflow & phase redistribution).",
          "Downhole shut-in minimizes wellbore volume, reducing wellbore storage from days to minutes.",
          "Saves rig time and provides clean, undistorted IARF data."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Add Pressure Transient Testing Keywords to Portfolio",
      instructions: [
        "Add 'Pressure Transient Analysis (PTA)', 'DST Operations', 'Downhole Gauge Surveillance' to your resume skills.",
        "Verify your preparation for tomorrow's mathematical core: The Horner Plot."
      ],
      deliverable: "PTA keywords updated in master resume."
    }
  },

  // DAY 42
  {
    dayNumber: 42,
    phaseId: 2,
    weekNumber: 6,
    title: "Buildup & Drawdown Analysis: The Horner Plot",
    category: "well_testing",
    categoryLabel: "Horner Analysis",
    todayGoal: "Master Horner superposition time, semilog straight-line slope (m), permeability calculation, and extrapolation to false pressure (P*).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In 1951, D.R. Horner revolutionized reservoir engineering by applying the principle of superposition to model pressure buildup tests. A buildup test is modeled mathematically as a well that produced continuously at constant rate q for time tp, combined with a fictitious injection well starting at shut-in time (Delta t = 0) injecting at rate -q. On a semilog plot of shut-in pressure (P_ws) versus the Horner Time Ratio [(tp + Delta t) / Delta t], middle-time radial flow forms a straight line whose slope (m) yields formation permeability (k), and whose extrapolation to infinite shut-in time yields false reservoir pressure (P*).",
      keyPoints: [
        "Horner Time Ratio (HTR): (t_p + Delta_t) / Delta_t. Note: As shut-in time Delta t increases, Horner time ratio decreases from right to left toward 1.0 (infinite shut-in time).",
        "Horner Semilog Equation: P_ws = P* - m * log10[(t_p + Delta_t) / Delta_t].",
        "Semilog Slope (m): m = (162.6 * q * mu * B) / (k * h) (in psi/cycle). Measured over one full log cycle of Horner time ratio.",
        "Calculating Permeability (k): k = (162.6 * q * mu * B) / (m * h).",
        "False Pressure (P*): The extrapolation of the straight line to Horner time ratio = 1.0 (where log(1) = 0, corresponding to infinite shut-in Delta t = infinity). In an infinite reservoir, P* = initial pressure Pi. In a bounded depleted reservoir, P* is higher than average pressure P_avg by an amount determined by the Matthew-Brons-Hazebroek (MBH) dimensionless pressure function.",
        "P_1hr: The pressure on the Horner straight line at Delta t = 1 hour (Horner ratio = (tp + 1)/1). Used to calculate skin factor s."
      ],
      coreFormulas: [
        {
          name: "Horner Permeability Equation",
          formula: "k = (162.6 * q * mu * B) / (m * h)",
          explanation: "k in mD, q in STB/day, mu in cp, B in bbl/STB, m in psi/cycle, h in ft."
        },
        {
          name: "Horner Time Ratio",
          formula: "HTR = (t_p + Delta_t) / Delta_t",
          explanation: "Plotted on logarithmic x-axis running backwards from right (early time) to left (late time)."
        }
      ],
      fieldInsight: "On a Horner plot, always read time from RIGHT to LEFT! Delta t = 0.1 hr is on the far right (high ratio); Delta t = 100 hr is on the far left (ratio approaching 1.0). Inexperienced engineers make the rookie mistake of reading Horner plots from left to right, confusing early wellbore storage with late boundary effects."
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Testing (John Lee et al.)",
          chapterOrSection: "Chapter 3: Pressure Buildup Tests & The Horner Plot",
          note: "Study Horner derivation, MBH pressure correction, and P* extrapolation."
        },
        {
          title: "Fundamentals of Reservoir Engineering (L.P. Dake)",
          chapterOrSection: "Chapter 7: Well Testing - Horner Method",
          note: "Work through step-by-step field examples."
        }
      ],
      recommendedTopics: [
        "Matthew-Brons-Hazebroek (MBH) p_DMBH chart for average reservoir pressure",
        "Ramey 1-1/2 log cycle rule for end of wellbore storage",
        "Superposition time for variable-rate production history"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q42_1",
          topic: "Horner Plot",
          question: "On a Horner semilog plot for a pressure buildup test, what is plotted on the logarithmic x-axis?",
          options: [
            "Shut-in time Delta t only",
            "The Horner Time Ratio: (tp + Delta t) / Delta t",
            "Cumulative production Np",
            "Permeability k"
          ],
          correctIndex: 1,
          explanation: "The x-axis plots the dimensionless Horner time ratio (tp + Delta t) / Delta t on a logarithmic scale."
        },
        {
          id: "q42_2",
          topic: "Horner Plot",
          question: "On a Horner plot, as shut-in time (Delta t) increases toward infinity, the Horner time ratio (tp + Delta t) / Delta t approaches:",
          options: ["Zero", "1.0", "Infinity", "tp"],
          correctIndex: 1,
          explanation: "As Delta t -> infinity, (tp + Delta t) / Delta t = (tp / Delta t) + 1 -> 0 + 1 = 1.0. Log(1.0) = 0."
        },
        {
          id: "q42_3",
          topic: "Horner Slope",
          question: "The slope 'm' of the middle-time straight line on a Horner semilog plot is measured in which units?",
          options: ["psi per log cycle", "mD per foot", "Barrels per day", "Hours"],
          correctIndex: 0,
          explanation: "The semilog slope m is the change in shut-in pressure over one full tenfold cycle of Horner time ratio, expressed in psi/cycle."
        },
        {
          id: "q42_4",
          topic: "Permeability Calculation",
          question: "In the Horner permeability formula k = (162.6 * q * mu * B) / (m * h), if the slope 'm' is doubled while all other parameters are constant, the calculated permeability:",
          options: ["Doubles", "Is halved (50%)", "Quadruples", "Remains unchanged"],
          correctIndex: 1,
          explanation: "Permeability k is inversely proportional to slope m. A steeper slope indicates lower formation permeability."
        },
        {
          id: "q42_5",
          topic: "False Pressure",
          question: "What does 'False Pressure' (P*) represent on a Horner buildup plot?",
          options: [
            "A fraudulent gauge reading",
            "The extrapolated pressure obtained by extending the middle-time straight line to Horner time ratio = 1.0 (infinite shut-in time)",
            "The pressure at the bit",
            "The separator pressure"
          ],
          correctIndex: 1,
          explanation: "P* is the pressure obtained by extrapolating the IARF semilog straight line to a Horner ratio of 1.0 (infinite shut-in time)."
        },
        {
          id: "q42_6",
          topic: "Horner Direction",
          question: "Why does the Horner plot x-axis run from right to left in chronological time?",
          options: [
            "Because early shut-in times (small Delta t) yield large ratio values plotted on the right, while late times yield small ratios approaching 1.0 on the left",
            "Because French engineers invented it",
            "Because printers print backwards",
            "It is an optical illusion"
          ],
          correctIndex: 0,
          explanation: "At small Delta t, (tp + Delta t)/Delta t is very large (plotted on the right); as Delta t grows, the ratio decreases toward 1.0 (on the left)."
        },
        {
          id: "q42_7",
          topic: "Average Pressure",
          question: "In a depleted, closed reservoir with sealed boundaries, how does the true average reservoir pressure (P_avg) compare to the extrapolated Horner false pressure (P*)?",
          options: [
            "P_avg is always LESS than P* (corrected via MBH dimensionless pressure charts)",
            "P_avg is always greater than P*",
            "They are strictly identical",
            "P_avg is zero"
          ],
          correctIndex: 0,
          explanation: "Because boundary depletion has occurred, true average pressure is always lower than P*; the Matthew-Brons-Hazebroek (MBH) method corrects P* down to P_avg."
        },
        {
          id: "q42_8",
          topic: "Skin Calculation",
          question: "Which specific pressure point on the Horner straight line is required to calculate the near-wellbore skin factor (s)?",
          options: ["P_1hr (the pressure on the straight line at shut-in time Delta t = 1 hour)", "Pwf just before shut-in only", "P* only", "Separator pressure"],
          correctIndex: 0,
          explanation: "Skin factor s = 1.151 * [ (P_1hr - Pwf) / m - log(k / (phi*mu*ct*rw^2)) + 3.23 ] requires P_1hr read off the straight line."
        },
        {
          id: "q42_9",
          topic: "Horner Plot",
          question: "If a Horner plot displays a slope that suddenly DOUBLES (m2 = 2 * m1) in the late-time region, this indicates:",
          options: [
            "The presence of a single sealing, impermeable fault near the wellbore",
            "A constant pressure water aquifer",
            "The well has died",
            "Gas cap breakthrough"
          ],
          correctIndex: 0,
          explanation: "A single sealing fault cuts the drainage flow angle in half (from 360° to 180° radial flow), which exactly doubles the semilog slope m."
        },
        {
          id: "q42_10",
          topic: "Superposition",
          question: "Horner's method is mathematically based on which fundamental physical principle?",
          options: ["Principle of Superposition (linear addition of transient solutions in linear differential equations)", "Boyle's Law", "Archie's Law", "Newton's Third Law"],
          correctIndex: 0,
          explanation: "The diffusivity equation is linear; Horner superimposed an injection well at rate -q over a producing well at rate +q to model shut-in."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc42_1",
          title: "Horner Permeability (k) Calculation",
          scenario: "An oil well was flowed at a stabilized rate q = 400 STB/day before being shut in for a pressure buildup test. Reservoir properties: Net pay thickness h = 32 ft, Oil viscosity mu = 1.6 cp, Formation volume factor Bo = 1.25 bbl/STB. A semilog Horner plot yields a middle-time straight line with slope m = 48 psi/cycle. Extrapolated false pressure is P* = 3,420 psi.",
          formula: "k = (162.6 * q * mu * B_o) / (m * h)",
          givenData: {
            "Rate q (STB/day)": 400,
            "Net thickness h (ft)": 32,
            "Viscosity mu (cp)": 1.6,
            "Bo (bbl/STB)": 1.25,
            "Slope m (psi/cycle)": 48
          },
          questionText: "Calculate: 1) The reservoir transmissibility (k*h in mD-ft), and 2) The average formation permeability (k) in millidarcies (mD).",
          solutionSteps: [
            "Step 1: Numerator = 162.6 * q * mu * Bo = 162.6 * 400 * 1.6 * 1.25",
            "       = 162.6 * 400 * 2.0 = 162.6 * 800 = 130,080",
            "Step 2: Transmissibility (k * h) = Numerator / m = 130,080 / 48 = 2,710 mD-ft",
            "Step 3: Permeability k = (k * h) / h = 2,710 / 32 = 84.69 mD (~84.7 mD)."
          ],
          finalAnswer: "Transmissibility k*h = 2,710 mD-ft, Permeability k = 84.7 mD",
          inputUnit: "mD",
          expectedNumber: 84.7,
          tolerance: 1.0
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int42_1",
        question: "Walk me through how you construct and interpret a Horner Plot from raw pressure buildup data. Explain how you find permeability, skin, and P*.",
        whyAsked: "Tests whether you can execute a well test analysis step-by-step from raw data to reservoir parameters.",
        modelAnswer: "Constructing and interpreting a Horner Plot follows a disciplined 5-step sequence:\n1. Compute Horner Time Ratio (HTR): For each shut-in time step $\\Delta t$, calculate the ratio: $HTR = (t_p + \\Delta t) / \\Delta t$, where $t_p = 24 \\cdot N_p / q_{last}$.\n2. Plot Semilog Data: Plot shut-in bottom-hole pressure $P_{ws}$ on the linear y-axis versus $HTR$ on the logarithmic x-axis (with values decreasing from right to left toward 1.0).\n3. Identify the Middle-Time Straight Line (IARF): Use the Bourdet derivative to confirm the Infinite-Acting Radial Flow regime (where the derivative is flat and horizontal). Fit a straight line across this data interval.\n4. Calculate Slope ($m$) and Permeability ($k$): Measure the pressure change $m$ over one full tenfold log cycle of the Horner ratio. Compute permeability: $k = (162.6 \\cdot q \\cdot \\mu \\cdot B) / (m \\cdot h)$.\n5. Calculate Skin ($s$) and False Pressure ($P^*$):\n- Extrapolate the straight line to $HTR = 1.0$ (infinite shut-in time) to read False Pressure $P^*$.\n- Read $P_{1hr}$ directly off the straight line at $\\Delta t = 1$ hour. Calculate skin factor:\n$$s = 1.151 \\left[ \\frac{P_{1hr} - P_{wf}}{m} - \\log_{10}\\left( \\frac{k}{\\phi \\mu c_t r_w^2} \\right) + 3.23 \\right]$$\nA positive skin indicates near-wellbore damage; a negative skin indicates stimulation.",
        keyPoints: [
          "Plot $P_{ws}$ vs $\\log[(t_p + \\Delta t) / \\Delta t]$ from right to left.",
          "Identify IARF straight line using Bourdet flat derivative.",
          "Slope $m \\rightarrow k = 162.6 q \\mu B / (m h)$.",
          "Extrapolate to ratio 1.0 for $P^*$; read $P_{1hr}$ to compute skin $s$."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Save Horner Analysis Algorithm to Study Binder",
      instructions: [
        "Write the complete Horner equation set in your study notes.",
        "Ensure your calculator is ready for skin factor calculations tomorrow on Day 43."
      ],
      deliverable: "Horner workflow reference card added to study materials."
    }
  },

  // DAY 43
  {
    dayNumber: 43,
    phaseId: 2,
    weekNumber: 6,
    title: "Skin Factor, Near-Wellbore Damage & Flow Efficiency",
    category: "well_testing",
    categoryLabel: "Skin Diagnostics",
    todayGoal: "Master skin factor calculation, Hawkins formula, pressure drop due to skin (Delta P_skin), and Flow Efficiency (FE).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Skin factor (s) quantifies the additional pressure drop near the wellbore caused by formation alteration relative to virgin reservoir permeability. A positive skin (s > 0) represents damage (drilling mud invasion, clay swelling, perforation plugging), which wastes reservoir energy. A negative skin (s < 0) represents stimulation (hydraulic fracturing, matrix acidizing). Quantifying skin factor dictates whether a workover or stimulation can double a well's production.",
      keyPoints: [
        "Skin Factor Equation (from Horner Plot): s = 1.151 * [ (P_1hr - P_wf) / m - log10(k / (phi * mu * c_t * r_w^2)) + 3.23 ].",
        "Hawkins Formula: Relates skin to altered permeability (k_s) and damage radius (r_s): s = (k / k_s - 1) * ln(r_s / r_w). If ks < k (damage), s > 0. If ks > k (stimulation), s < 0.",
        "Pressure Drop Across Skin (Delta P_skin): Delta P_skin = 0.869 * m * s = 141.2 * (q * mu * B / (k * h)) * s. This is the exact pressure wasted overcoming near-wellbore damage.",
        "Flow Efficiency (FE): Ratio of actual well productivity to ideal undamaged productivity (s = 0): FE = (P_r - P_wf - Delta P_skin) / (P_r - P_wf) = J_actual / J_ideal. If FE = 0.60, the well is producing only 60% of what it could produce if cleaned up.",
        "Damage Ratio (DR): DR = 1 / FE."
      ],
      coreFormulas: [
        {
          name: "Pressure Drop Due to Skin",
          formula: "Delta P_skin = 0.869 * m * s",
          explanation: "m is Horner slope (psi/cycle), s is skin factor."
        },
        {
          name: "Flow Efficiency (FE)",
          formula: "FE = (P_r - P_wf - Delta P_skin) / (P_r - P_wf)",
          explanation: "FE < 1.0 indicates damaged well; FE > 1.0 indicates stimulated well."
        }
      ],
      fieldInsight: "Always calculate Delta P_skin in dollar terms for management! If a well has Delta P_skin = 400 psi and drawdown is 600 psi, Flow Efficiency is only 33%—meaning two-thirds of the well's drawdown is being completely wasted fighting mud skin! Removing that skin via a $50k acid job can triple the well's flow rate overnight."
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Testing (John Lee et al.)",
          chapterOrSection: "Chapter 4: Skin Factor and Flow Efficiency",
          note: "Study Hawkins formula, partial penetration skin, and non-Darcy rate-dependent skin."
        }
      ],
      recommendedTopics: [
        "Components of total skin: s_total = s_damage + s_partial_penetration + s_perforation + s_turbulence",
        "Rate-dependent skin test: Plot total skin vs flow rate (s = s' + D*q)",
        "Matrix acidizing candidate screening using Delta P_skin"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q43_1",
          topic: "Skin Factor",
          question: "A well test calculation yields a skin factor s = +10. What does this mean physically?",
          options: [
            "The well has been successfully hydraulically fractured",
            "The near-wellbore formation is severely damaged, creating significant extra pressure drop and choking production",
            "Permeability is infinite",
            "The well produces zero water"
          ],
          correctIndex: 1,
          explanation: "A positive skin (s > 0) indicates near-wellbore permeability impairment (damage) that restricts fluid flow."
        },
        {
          id: "q43_2",
          topic: "Skin Pressure Drop",
          question: "If a Horner buildup plot has a slope m = 50 psi/cycle and skin factor s = +6.0, what is the pressure drop across the damaged skin (Delta P_skin)?",
          options: ["261 psi", "300 psi", "434 psi", "500 psi"],
          correctIndex: 0,
          explanation: "Delta P_skin = 0.869 * m * s = 0.869 * 50 * 6.0 = 0.869 * 300 = 260.7 psi (~261 psi)."
        },
        {
          id: "q43_3",
          topic: "Flow Efficiency",
          question: "A well has static reservoir pressure Pr = 3,000 psi, flowing BHP Pwf = 2,000 psi (drawdown = 1,000 psi), and Delta P_skin = 400 psi. What is the Flow Efficiency (FE)?",
          options: ["0.40 (40%)", "0.60 (60%)", "1.00 (100%)", "1.40 (140%)"],
          correctIndex: 1,
          explanation: "FE = (Pr - Pwf - Delta P_skin) / (Pr - Pwf) = (1,000 - 400) / 1,000 = 600 / 1,000 = 0.60 (or 60%)."
        },
        {
          id: "q43_4",
          topic: "Hawkins Formula",
          question: "According to Hawkins' formula s = (k / ks - 1) * ln(rs / rw), if damaged permeability ks equals virgin permeability k (zero damage), the skin factor is:",
          options: ["+1.0", "Zero (s = 0)", "-5.0", "Infinite"],
          correctIndex: 1,
          explanation: "If ks = k, then (k/k - 1) = (1 - 1) = 0, so skin factor s = 0."
        },
        {
          id: "q43_5",
          topic: "Skin Factor",
          question: "A negative skin factor (e.g. s = -3.5) is achieved by:",
          options: [
            "Drilling with heavy mud",
            "Matrix acidizing or hydraulic fracturing that increases near-wellbore flow capacity beyond virgin rock permeability",
            "Shutting down the well",
            "Pumping cement into perforations"
          ],
          correctIndex: 1,
          explanation: "Stimulation (acidizing, hydraulic fracturing) creates a negative skin (s < 0), reducing drawdown and boosting deliverability."
        },
        {
          id: "q43_6",
          topic: "Rate-Dependent Skin",
          question: "In high-rate gas wells, apparent skin factor increases linearly with gas flow rate (s = s' + D*q). The coefficient 'D' represents:",
          options: ["Non-Darcy turbulent inertial skin coefficient", "Drill pipe diameter", "Water cut", "Dew point"],
          correctIndex: 0,
          explanation: "D is the non-Darcy turbulence factor; high-velocity gas flow near the wellbore creates turbulence that acts like apparent skin damage."
        },
        {
          id: "q43_7",
          topic: "Flow Efficiency",
          question: "If a well has a Flow Efficiency FE = 1.50, this indicates that the well is:",
          options: ["Severely damaged", "Stimulated (producing 50% more than an ideal undamaged well)", "Dead", "Producing 100% water"],
          correctIndex: 1,
          explanation: "FE > 1.0 means actual productivity exceeds ideal undamaged productivity due to successful stimulation (negative skin)."
        },
        {
          id: "q43_8",
          topic: "Skin Components",
          question: "Which of the following contributes to geometric 'mechanical skin' even in the absence of any rock damage?",
          options: [
            "Partial penetration (perforating only the top 20 ft of an 80 ft sand)",
            "Slanted or deviated well trajectory",
            "Perforation shot density and phasing",
            "All of the above"
          ],
          correctIndex: 3,
          explanation: "Partial penetration, well deviation, and perforation geometry restrict flow streamlines, creating geometric pseudo-skins."
        },
        {
          id: "q43_9",
          topic: "Damage Radius",
          question: "In Hawkins formula, if the depth of mud filtrate invasion (damage radius rs) increases from 1 ft to 3 ft around a 0.35 ft wellbore, the skin factor will:",
          options: ["Decrease", "Increase significantly because ln(rs/rw) increases", "Drop to zero", "Remain unchanged"],
          correctIndex: 1,
          explanation: "Deeper mud filtrate invasion increases rs, which increases ln(rs/rw) and amplifies the positive skin factor."
        },
        {
          id: "q43_10",
          topic: "Production Optimization",
          question: "If a damaged well currently produces 500 BPD at FE = 0.50, what flow rate will it produce after a successful stimulation that removes all skin (FE = 1.0)?",
          options: ["500 BPD", "750 BPD", "1,000 BPD (doubles production)", "2,500 BPD"],
          correctIndex: 2,
          explanation: "q_ideal = q_actual / FE = 500 / 0.50 = 1,000 BPD. Restoring Flow Efficiency to 1.0 doubles production rate."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc43_1",
          title: "Skin Factor, Delta P_skin & Flow Efficiency Calculation",
          scenario: "A buildup test on an oil well yields Horner slope m = 40 psi/cycle, P_1hr = 2,980 psi, and flowing pressure just before shut-in Pwf = 2,240 psi. Reservoir properties: Permeability k = 65 mD, Porosity phi = 0.18, Oil viscosity mu = 1.5 cp, Total compressibility ct = 14 x 10^-6 psi^-1, Wellbore radius rw = 0.35 ft. Static reservoir pressure is Pr = 3,100 psi.",
          formula: "s = 1.151 * [ (P_1hr - P_wf) / m - log10(k / (phi * mu * c_t * r_w^2)) + 3.23 ]; Delta P_skin = 0.869 * m * s; FE = (P_r - P_wf - Delta P_skin) / (P_r - P_wf)",
          givenData: {
            "m (psi/cycle)": 40,
            "P_1hr (psi)": 2980,
            "Pwf (psi)": 2240,
            "Pr (psi)": 3100,
            "k (mD)": 65,
            "phi": 0.18,
            "mu (cp)": 1.5,
            "ct (psi^-1)": 0.000014,
            "rw (ft)": 0.35
          },
          questionText: "Calculate: 1) Skin factor (s), 2) Pressure drop due to skin (Delta P_skin) in psi, and 3) Flow Efficiency (FE) as a percentage.",
          solutionSteps: [
            "Step 1: Calculate term 1 = (P_1hr - Pwf) / m = (2,980 - 2,240) / 40 = 740 / 40 = 18.50",
            "Step 2: Calculate denominator inside log = phi * mu * ct * rw^2",
            "       = 0.18 * 1.5 * 14e-6 * (0.35)^2 = 0.27 * 14e-6 * 0.1225 = 4.6305 x 10^-7",
            "Step 3: Ratio inside log = k / 4.6305e-7 = 65 / 4.6305e-7 = 1.4037 x 10^8",
            "Step 4: log10(1.4037 x 10^8) = 8.1473",
            "Step 5: Bracket term = 18.50 - 8.1473 + 3.23 = 13.5827",
            "Step 6: Skin factor s = 1.151 * 13.5827 = +15.63 (~+15.6, severe damage!)",
            "Step 7: Delta P_skin = 0.869 * m * s = 0.869 * 40 * 15.63 = 543.3 psi",
            "Step 8: Total Drawdown = Pr - Pwf = 3,100 - 2,240 = 860 psi",
            "Step 9: Flow Efficiency FE = (860 - 543.3) / 860 = 316.7 / 860 = 0.368 (or 36.8%)."
          ],
          finalAnswer: "Skin s = +15.6, Delta P_skin = 543 psi, Flow Efficiency = 36.8%",
          inputUnit: "%",
          expectedNumber: 36.8,
          tolerance: 1.0
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int43_1",
        question: "If a well test shows a skin factor of +15 and a Flow Efficiency of 35%, what business and engineering recommendation do you make to the asset manager?",
        whyAsked: "Evaluates whether you can translate raw well test calculations into a high-ROI executive business recommendation.",
        modelAnswer: "A skin of +15 and Flow Efficiency of 35% is a massive commercial opportunity. It means the reservoir rock is high quality, but near-wellbore damage is choking the well so severely that 65% of the available pressure drawdown (over 500 psi) is being completely wasted overcoming near-wellbore skin.\nMy Recommendation to the Asset Manager:\n1. Immediate Remedial Intervention: Candidate the well for an immediate matrix acidizing treatment (or hydraulic reperforating). Because the skin is high ($s = +15$) and the reservoir pressure is healthy, removing this damage will restore Flow Efficiency from 35% to 100%, effectively nearly tripling the current production rate (e.g. from 400 BPD to ~1,100 BPD).\n2. Treatment Design: Analyze drilling and completion records to diagnose the damage mechanism. If drilling mud filtrate and calcium carbonate weighting solids caused the skin, pump a 15% inhibited HCl matrix acid wash with mutual solvents to dissolve the carbonate cake and disperse sludgy emulsions. If clay swelling is suspected, use a mud acid (12% HCl - 3% HF) blend.\n3. Economic Return: An onshore matrix acid job costs roughly $40,000 to $60,000. An incremental gain of 700 BPD at $70/bbl oil yields $49,000/day in gross revenue, delivering a full capital payback period of less than 48 hours. This is one of the highest-ROI projects in the entire asset portfolio.",
        keyPoints: [
          "State clearly: 65% of drawdown is wasted fighting near-wellbore damage.",
          "Recommend matrix acidizing to restore FE to 100%, nearly tripling production.",
          "Present economic ROI: $50k intervention cost pays back in under 48 hours."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Draft a High-Impact Resume Bullet on Well Stimulation ROI",
      instructions: [
        "Craft a compelling resume bullet: 'Evaluated pressure transient buildup tests (Horner analysis), identifying high-skin damage wells (s > +12) and designing matrix acidizing programs that boosted flow efficiency from 35% to 95% with < 5-day payback...'",
        "Save this in your master resume draft."
      ],
      deliverable: "Stimulation economics bullet point integrated into resume draft."
    }
  },

  // DAY 44
  {
    dayNumber: 44,
    phaseId: 2,
    weekNumber: 6,
    title: "Well Test Interpretation: The Bourdet Derivative & Diagnostic Plots",
    category: "well_testing",
    categoryLabel: "Derivative Diagnostics",
    todayGoal: "Master log-log diagnostic plots, pressure change (Delta P) and Bourdet pressure derivative (Delta P'), wellbore storage, and boundary recognition.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In 1983, Dominique Bourdet revolutionized well testing by introducing the Pressure Derivative: Delta P' = d(Delta P) / d[ln(Delta t)]. By plotting both pressure change and its derivative simultaneously on a log-log diagnostic plot, complex reservoir behaviors that were invisible or ambiguous on Horner plots become instantly recognizable patterns. The derivative acts like a fingerprint for every flow regime, from early wellbore storage to radial flow and distant fault boundaries.",
      keyPoints: [
        "Log-Log Diagnostic Plot Layout: x-axis is elapsed test time (Delta t on 4-decade log scale); y-axis is both Pressure Change (Delta P) and Bourdet Pressure Derivative (Delta P') on matching log scale.",
        "Diagnostic Derivative Signatures:\n1. Wellbore Storage: Pure unit-slope straight line (slope = +1.0) on both Delta P and derivative. Pressure change is directly proportional to time as fluid fills/decompresses inside the casing.\n2. Infinite-Acting Radial Flow (IARF): The derivative is perfectly FLAT and HORIZONTAL (zero slope). The height of this plateau is inversely proportional to permeability: Derivative_plateau = 70.6 * q * mu * B / (k * h).\n3. Single Sealing Fault: The derivative doubles from its horizontal plateau to a new plateau at twice the original level (2x).\n4. Closed Bounded Reservoir (PSS): Both Delta P and derivative turn upward with unit slope (+1.0), reflecting boundary-dominated depletion.\n5. Constant Pressure Boundary (Aquifer / Gas Cap): The derivative plummets steeply downward toward zero.\n6. Linear Flow (Hydraulic Fracturing / Channel Sand): Derivative displays a half-slope line (+0.5 slope).\n7. Bilinear Flow: Quarter-slope (+0.25 slope), typical in finite-conductivity hydraulic fractures.",
        "Dual Porosity Reservoirs (Naturally Fractured Carbonates): Warren & Root model displays a classic 'valley' / dip in the derivative representing interporosity fluid transfer from tight matrix blocks into high-permeability fractures."
      ],
      coreFormulas: [
        {
          name: "Bourdet Pressure Derivative",
          formula: "Delta P' = d(Delta P) / d(ln(t)) = t * [d(Delta P) / dt]",
          explanation: "Derivative of pressure change with respect to natural log of time."
        },
        {
          name: "Radial Flow Derivative Plateau Height",
          formula: "Derivative_plateau = (70.6 * q * mu * B) / (k * h) = m / 2.303",
          explanation: "Permeability can be calculated directly from the height of the horizontal plateau."
        }
      ],
      fieldInsight: "The flat horizontal plateau on the Bourdet derivative is the single most important diagnostic feature in all of well testing. You MUST identify this flat line before applying the Horner straight line. If you pick a straight line on a Horner plot before the derivative has flattened out, you are analyzing wellbore storage or transition data, not true reservoir permeability!"
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Test Analysis: The Use of Advanced Interpretation Models (Dominique Bourdet)",
          chapterOrSection: "Chapter 1: The Pressure Derivative Concept & Chapter 2: Homogeneous Reservoir",
          note: "Study the standard Bourdet derivative type curves and diagnostic rules."
        },
        {
          title: "Modern Well Test Analysis (Roland N. Horne)",
          chapterOrSection: "Chapter 3: Diagnostic Plots and Flow Regimes",
          note: "Review derivative signatures for faults, channels, and dual-porosity."
        }
      ],
      recommendedTopics: [
        "Warren & Root dual-porosity parameters: Storativity ratio omega and interporosity flow parameter lambda",
        "Radial flow derivative height relationship to Horner slope: Derivative = m / 2.303",
        "Infinite-conductivity vs Finite-conductivity hydraulic fracture type curves"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q44_1",
          topic: "Bourdet Derivative",
          question: "On a log-log diagnostic well test plot, what is the visual signature of Infinite-Acting Radial Flow (IARF)?",
          options: [
            "A unit slope (+1.0) line",
            "A completely flat, HORIZONTAL derivative line (zero slope)",
            "A downward-falling line toward zero",
            "A half-slope (+0.5) line"
          ],
          correctIndex: 1,
          explanation: "In radial flow, pressure is proportional to ln(t); taking the derivative with respect to ln(t) produces a constant, horizontal flat line."
        },
        {
          id: "q44_2",
          topic: "Wellbore Storage",
          question: "Pure wellbore storage displays which characteristic slope on a log-log plot of pressure change and its derivative?",
          options: ["Quarter-slope (+0.25)", "Half-slope (+0.5)", "Unit-slope (+1.0)", "Horizontal flat line (0 slope)"],
          correctIndex: 2,
          explanation: "During pure wellbore storage, pressure change is directly proportional to time (Delta P proportional to t), which plots as a unit-slope (+1.0) line."
        },
        {
          id: "q44_3",
          topic: "Fault Diagnostics",
          question: "If the Bourdet pressure derivative doubles in value (from plateau value 'L' to '2L') in the late-time region, this diagnoses:",
          options: [
            "A single impermeable sealing fault boundary near the wellbore",
            "A constant pressure water aquifer",
            "A hydraulically fractured well",
            "A gas cap breakthrough"
          ],
          correctIndex: 0,
          explanation: "A single sealing fault cuts the radial flow area from 360° to 180°, which exactly doubles the resistance and doubles the derivative plateau."
        },
        {
          id: "q44_4",
          topic: "Constant Pressure Boundary",
          question: "When the pressure transient reaches an active communicating water aquifer or balanced water injection well, how does the Bourdet derivative respond?",
          options: [
            "It turns upward with unit slope",
            "It plummets steeply downward toward zero as pressure stabilizes",
            "It triples in height",
            "It becomes negative"
          ],
          correctIndex: 1,
          explanation: "At a constant pressure boundary, pressure stops changing (d(Delta P)/dt -> 0), so the derivative plunges downward toward zero."
        },
        {
          id: "q44_5",
          topic: "Hydraulic Fracturing",
          question: "A half-slope (+0.5) line on the early-to-middle time Bourdet derivative indicates which flow regime?",
          options: ["Linear flow (e.g. flow perpendicular into a high-conductivity hydraulic fracture or parallel channel sand)", "Spherical flow", "Radial flow", "Wellbore storage"],
          correctIndex: 0,
          explanation: "Linear flow into a hydraulic fracture or long narrow channel sand displays a characteristic half-slope (+0.5) on log-log plots."
        },
        {
          id: "q44_6",
          topic: "Derivative Height",
          question: "The height of the horizontal radial flow plateau (L) on the Bourdet derivative is related to the Horner semilog slope (m) by:",
          options: ["L = m * 2.303", "L = m / 2.303 = 0.434 * m", "L = m^2", "L = sqrt(m)"],
          correctIndex: 1,
          explanation: "Because ln(x) = 2.303 * log10(x), the natural log derivative plateau L equals the base-10 semilog slope m divided by 2.303 (L = m / 2.303)."
        },
        {
          id: "q44_7",
          topic: "Dual Porosity",
          question: "In naturally fractured carbonate reservoirs (Warren & Root model), the Bourdet derivative exhibits what classic diagnostic feature?",
          options: [
            "A 'valley' or dip representing interporosity fluid transfer from low-permeability matrix blocks into high-permeability fractures",
            "A permanent vertical line",
            "A sine wave oscillation",
            "Zero pressure change"
          ],
          correctIndex: 0,
          explanation: "Fluid transitions from fracture depletion to matrix recharge, creating a characteristic dip ('valley') on the derivative curve."
        },
        {
          id: "q44_8",
          topic: "Closed Boundary",
          question: "In a closed, bounded reservoir under Pseudo-Steady-State (PSS) depletion, the Bourdet derivative turns upward with a slope of:",
          options: ["0.25", "0.50", "Unit slope (+1.0)", "Negative 1.0"],
          correctIndex: 2,
          explanation: "Under PSS, dP/dt = constant; multiplying by time t yields Delta P' = t * constant, which produces a unit slope (+1.0) upward line."
        },
        {
          id: "q44_9",
          topic: "PTA Software",
          question: "Which software package developed by KAPPA Engineering is universally recognized as the global oil & gas industry standard for pressure transient derivative analysis?",
          options: ["KAPPA Saphir", "Microsoft Word", "Photoshop", "MATLAB only"],
          correctIndex: 0,
          explanation: "KAPPA Saphir is the worldwide standard software platform for Pressure Transient Analysis (PTA)."
        },
        {
          id: "q44_10",
          topic: "Diagnostic Workflow",
          question: "Why should you NEVER perform a Horner straight-line analysis before checking the Bourdet derivative plot?",
          options: [
            "Because you might inadvertently pick a straight line through wellbore storage or transition data, producing completely wrong permeability and skin values",
            "Because derivative plots are required by tax law",
            "Because Horner plots cannot be drawn without a computer",
            "Because slope m is always zero"
          ],
          correctIndex: 0,
          explanation: "A Horner plot can appear straight across non-radial flow regimes; only the flat derivative confirms the true Infinite-Acting Radial Flow interval."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc44_1",
          title: "Permeability Directly from Derivative Plateau Height",
          scenario: "A buildup test is recorded on a stable oil well producing q = 550 STB/day with net pay h = 45 ft, oil viscosity mu = 1.2 cp, and formation volume factor Bo = 1.20 bbl/STB. On the KAPPA Saphir log-log diagnostic plot, the Bourdet pressure derivative displays a prominent flat horizontal plateau at a constant height L = 18.0 psi.",
          formula: "L = (70.6 * q * mu * B_o) / (k * h); k = (70.6 * q * mu * B_o) / (L * h)",
          givenData: {
            "Rate q (STB/day)": 550,
            "Net thickness h (ft)": 45,
            "Viscosity mu (cp)": 1.2,
            "Bo (bbl/STB)": 1.20,
            "Derivative plateau L (psi)": 18.0
          },
          questionText: "Calculate: 1) The equivalent Horner semilog slope (m = 2.303 * L), and 2) The reservoir permeability (k) in mD directly from the derivative plateau height.",
          solutionSteps: [
            "Step 1: Equivalent Horner slope m = 2.303 * L = 2.303 * 18.0 = 41.45 psi/cycle",
            "Step 2: Calculate Numerator = 70.6 * q * mu * Bo = 70.6 * 550 * 1.2 * 1.20",
            "       = 70.6 * 550 * 1.44 = 38,830 * 1.44 = 55,915.2",
            "Step 3: Denominator = L * h = 18.0 * 45 = 810",
            "Step 4: Permeability k = 55,915.2 / 810 = 69.03 mD (~69.0 mD)."
          ],
          finalAnswer: "Horner slope m = 41.5 psi/cycle, Permeability k = 69.0 mD",
          inputUnit: "mD",
          expectedNumber: 69.0,
          tolerance: 1.0
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int44_1",
        question: "Sketch or describe the complete Bourdet Pressure Derivative diagnostic curve from early time to late time for a well located near a single sealing fault. Explain every flow regime.",
        whyAsked: "The gold-standard well testing interview question. Tests whether you understand the full life of a pressure transient.",
        modelAnswer: "On a log-log diagnostic plot of elapsed time $\\Delta t$ versus pressure change $\\Delta P$ and Bourdet derivative $\\Delta P'$, the curve unfolds across three distinct chronological regimes:\n1. Early-Time Region (ETR — Wellbore Storage & Skin): Both $\\Delta P$ and the derivative start together on a unit-slope (+1.0) straight line, where fluid expands inside the wellbore before the sandface responds. As the reservoir takes over, the derivative separates from $\\Delta P$, forms a smooth transition hump (whose height reflects skin factor), and turns downward.\n2. Middle-Time Region (MTR — Infinite-Acting Radial Flow): The derivative flattens out into a perfectly horizontal straight line with zero slope. The height of this horizontal plateau ($L$) is inversely proportional to permeability: $L = (70.6 \\cdot q \\cdot \\mu \\cdot B) / (k \\cdot h)$. This plateau proves true radial flow and is where $k$ and $s$ are calculated.\n3. Late-Time Region (LTR — Sealing Fault Encounter): As the radius of investigation expands and the pressure pulse feels the impermeable sealing fault, fluid can no longer be drawn from behind the fault (flow angle drops from 360° to 180°). The derivative leaves its initial horizontal plateau, climbs through a transitional inflection, and levels off at a SECOND horizontal plateau exactly TWICE as high as the first ($2L$). This doubling of the derivative plateau is the definitive diagnostic proof of a single sealing fault.",
        keyPoints: [
          "Early time: Unit slope (+1.0) wellbore storage and skin hump.",
          "Middle time: Flat horizontal plateau ($L$) representing Infinite-Acting Radial Flow (yields $k$ and $s$).",
          "Late time: Derivative doubles ($2L$) to a second flat plateau, proving a single sealing fault."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Save Bourdet Derivative Signatures Cheat-Sheet",
      instructions: [
        "In your study log, draw the 5 signature derivative shapes: 1) Unit slope, 2) Flat line, 3) Fault doubling, 4) Boundary drop, 5) Dual-porosity valley.",
        "Add 'KAPPA Saphir Derivative Diagnostics' to your technical profile."
      ],
      deliverable: "Visual derivative diagnostic reference completed."
    }
  },

  // DAY 45
  {
    dayNumber: 45,
    phaseId: 2,
    weekNumber: 6,
    title: "Primary Recovery Mechanisms & Life-Cycle Depletion",
    category: "eor",
    categoryLabel: "Primary Recovery",
    todayGoal: "Master the physical recovery limits of primary depletion drives, displacement vs volumetric sweep, and the transition to secondary recovery.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Today we transition from single-well testing to field-wide recovery engineering. Primary recovery relies entirely on the natural energy present in the reservoir to produce hydrocarbons. Overall recovery factor (RF) is the product of Microscopic Displacement Efficiency (E_D), Areal Sweep Efficiency (E_A), and Vertical Sweep Efficiency (E_I): RF = E_D * E_A * E_I. When natural energy depletes and the economic limit is approached, secondary recovery (waterflooding or gas reinjection) must be implemented to maintain pressure and sweep remaining oil.",
      keyPoints: [
        "Primary Recovery Benchmarks:\n- Undersaturated Depletion (above Pb): 1% to 3% (fluid/rock compressibility only).\n- Solution Gas Drive: 15% to 25% (low recovery, severe gas channeling).\n- Gas Cap Drive: 20% to 40% (moderate recovery, gas coning risks).\n- Water Drive (Aquifer): 35% to 50%+ (high recovery, pressure maintained).\n- Gravity Drainage: 50% to 75%+ (steep dip, light oil, high vertical perm).\n- Dry Gas Depletion: 70% to 90% (highly efficient gas expansion).",
        "Overall Recovery Factor Components: RF = E_D * E_V = E_D * (E_A * E_I).\n- Microscopic Displacement Efficiency (E_D): E_D = (S_oi - S_or) / S_oi (percentage of pore-level oil swept in contacted rock).\n- Areal Sweep Efficiency (E_A): Fraction of horizontal reservoir area swept by invading fluid between injectors and producers (governed by well patterns and mobility ratio M).\n- Vertical Sweep Efficiency (E_I): Fraction of vertical formation layers swept (governed by Dykstra-Parsons permeability stratification V).",
        "The Secondary Recovery Imperative: Over 60% to 75% of original oil remains unrecovered after primary depletion in most fields. Secondary recovery is the planned injection of external fluids to maintain reservoir pressure and physically displace remaining mobile oil toward producing wells."
      ],
      coreFormulas: [
        {
          name: "Volumetric Recovery Factor",
          formula: "RF = E_D * E_A * E_I",
          explanation: "E_D = pore level; E_A = map view sweep; E_I = vertical layer sweep."
        },
        {
          name: "Microscopic Displacement Efficiency",
          formula: "E_D = (S_oi - S_or) / S_oi",
          explanation: "Expresses pore-scale displacement; S_or is residual oil saturation."
        }
      ],
      fieldInsight: "Never wait until reservoir pressure collapses before implementing secondary waterflooding! If pressure drops below the bubble point, free gas forms in the reservoir. Injected water will waste energy compressing and dissolving that gas, leading to high water channeling and permanently reduced oil recovery. Initiate pressure maintenance early."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 10: Secondary Recovery - Waterflooding",
          note: "Study displacement efficiency, sweep efficiency, and injection patterns."
        }
      ],
      recommendedTopics: [
        "Dykstra-Parsons coefficient of permeability variation (V)",
        "Well patterns: 5-spot, 7-spot, 9-spot, and peripheral line drive",
        "Buckley-Leverett frontal advance equation"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q45_1",
          topic: "Primary Recovery",
          question: "On average across worldwide conventional oilfields, what percentage of Original Oil In Place (STOIIP) remains trapped in the ground after primary recovery is exhausted?",
          options: ["5% to 10%", "20% to 30%", "60% to 75%+", "99%"],
          correctIndex: 2,
          explanation: "Average primary recovery across all drives is only ~30–35%, leaving over 65% to 70%+ of initial oil unrecovered."
        },
        {
          id: "q45_2",
          topic: "Sweep Efficiency",
          question: "Overall Volumetric Recovery Factor (RF) is mathematically the product of which three efficiencies?",
          options: [
            "Microscopic Displacement Efficiency (ED) * Areal Sweep Efficiency (EA) * Vertical Sweep Efficiency (EI)",
            "Porosity * Permeability * Saturation",
            "API gravity * Temperature * Pressure",
            "Drilling rate * Choke size * Separator rate"
          ],
          correctIndex: 0,
          explanation: "RF = ED * EA * EI, combining pore-scale displacement with map-view horizontal sweep and vertical cross-sectional sweep."
        },
        {
          id: "q45_3",
          topic: "Displacement Efficiency",
          question: "If initial oil saturation Soi = 0.80 and residual oil saturation after water sweep is Sor = 0.28, what is the microscopic displacement efficiency (ED)?",
          options: ["35.0%", "52.0%", "65.0%", "80.0%"],
          correctIndex: 2,
          explanation: "ED = (Soi - Sor) / Soi = (0.80 - 0.28) / 0.80 = 0.52 / 0.80 = 0.65 or 65.0%."
        },
        {
          id: "q45_4",
          topic: "Drive Mechanisms",
          question: "Why do dry natural gas reservoirs achieve vastly higher primary recovery factors (70%–90%) than oil reservoirs?",
          options: [
            "Natural gas has high compressibility, high expansion capability, and extremely low viscosity, allowing it to drain efficiently under pure pressure depletion",
            "Gas turns into water",
            "Gas wells are drilled deeper",
            "Gas dissolves rock"
          ],
          correctIndex: 0,
          explanation: "Gas expands dramatically as pressure drops and has viscosity 50x lower than oil, flowing through micro-pores with minimal residual trapping."
        },
        {
          id: "q45_5",
          topic: "Secondary Recovery",
          question: "The primary objective of 'Secondary Recovery' (waterflooding or gas reinjection) is to:",
          options: [
            "Maintain reservoir pressure above bubble point and physically displace mobile oil toward producing wells",
            "Cool the reservoir rock",
            "Change oil color",
            "Clean drilling mud"
          ],
          correctIndex: 0,
          explanation: "Secondary recovery restores voidage energy by injecting water or gas to push remaining mobile oil toward production wells."
        },
        {
          id: "q45_6",
          topic: "Heterogeneity",
          question: "The Dykstra-Parsons coefficient (V) measures what geological characteristic of a reservoir?",
          options: [
            "Vertical permeability stratification / rock heterogeneity (V = 0 is completely homogeneous; V = 1 is infinitely heterogeneous)",
            "Water salinity",
            "Formation depth",
            "Fault slip angle"
          ],
          correctIndex: 0,
          explanation: "Dykstra-Parsons V (from 0 to 1) quantifies permeability variation across layering, dictating vertical sweep efficiency EI."
        },
        {
          id: "q45_7",
          topic: "Primary Depletion",
          question: "Why should water injection ideally be initiated BEFORE reservoir pressure falls below the bubble point (Pb)?",
          options: [
            "To prevent free gas breakout, which causes gas relative permeability to surge and creates severe gas channeling that degrades waterflood sweep efficiency",
            "Because water cannot flow below bubble point",
            "Because casing collapses at bubble point",
            "To freeze the reservoir"
          ],
          correctIndex: 0,
          explanation: "Gas breakout below Pb creates three-phase flow, high compressibility, and gas thief channels that destroy waterflood efficiency."
        },
        {
          id: "q45_8",
          topic: "Recovery Factor",
          question: "Which primary drive mechanism yields only 1% to 3% recovery factor?",
          options: ["Undersaturated volumetric depletion (above Pb)", "Strong water drive", "Gas cap drive", "Gravity drainage"],
          correctIndex: 0,
          explanation: "Above Pb in an isolated reservoir, low fluid and rock compressibility yields only 1% to 3% recovery per 1,000 psi of drawdown."
        },
        {
          id: "q45_9",
          topic: "Sweep Efficiency",
          question: "What well pattern features 4 producing wells at the corners of a square with 1 injection well in the center?",
          options: ["5-Spot Pattern", "7-Spot Pattern", "Line Drive", "Direct Line"],
          correctIndex: 0,
          explanation: "The 5-spot pattern has 4 producers at corners and 1 central injector (ratio of 1 injector to 1 producer)."
        },
        {
          id: "q45_10",
          topic: "Residual Oil",
          question: "What physical force is primarily responsible for trapping residual oil (Sor) in pore throats after water sweep?",
          options: ["Capillary forces (interfacial tension between oil and water)", "Nuclear forces", "Gravity forces only", "Earth rotation"],
          correctIndex: 0,
          explanation: "Capillary forces and interfacial tension cause snap-off of oil droplets in pore throats, trapping residual oil."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc45_1",
          title: "Volumetric Recovery Factor & Remaining Oil In Place",
          scenario: "An oil reservoir has initial STOIIP N = 50.0 MMSTB with initial water saturation Swi = 25% (Soi = 75%). Special core analysis indicates residual oil saturation after waterflood Sorw = 27%. Field reservoir simulation estimates an Areal Sweep Efficiency EA = 78% and a Vertical Sweep Efficiency EI = 70%.",
          formula: "E_D = (S_oi - S_orw) / S_oi; E_V = E_A * E_I; RF = E_D * E_V; N_p = N * RF; Remaining = N - N_p",
          givenData: {
            "STOIIP N (MMSTB)": 50.0,
            "Soi": 0.75,
            "Sorw": 0.27,
            "EA": 0.78,
            "EI": 0.70
          },
          questionText: "Calculate: 1) Microscopic displacement efficiency (ED), 2) Volumetric sweep efficiency (EV), 3) Overall Recovery Factor (RF) as a percentage, and 4) Ultimate recoverable oil (Np) in MMSTB.",
          solutionSteps: [
            "Step 1: ED = (0.75 - 0.27) / 0.75 = 0.48 / 0.75 = 0.640 (64.0%)",
            "Step 2: EV = EA * EI = 0.78 * 0.70 = 0.546 (54.6%)",
            "Step 3: Overall RF = ED * EV = 0.640 * 0.546 = 0.34944 (or 34.9%)",
            "Step 4: Ultimate Recoverable Oil Np = 50.0 * 0.34944 = 17.47 MMSTB",
            "Step 5: Remaining Oil in Place = 50.0 - 17.47 = 32.53 MMSTB (Over 32.5 million barrels remain for EOR!)."
          ],
          finalAnswer: "ED = 64.0%, EV = 54.6%, Overall RF = 34.9%, Recoverable Np = 17.5 MMSTB",
          inputUnit: "MMSTB",
          expectedNumber: 17.5,
          tolerance: 0.2
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int45_1",
        question: "Explain the difference between Microscopic Displacement Efficiency (ED) and Macroscopic (Volumetric) Sweep Efficiency (EV). How do secondary and tertiary recovery methods target each?",
        whyAsked: "Tests understanding of the fundamental boundary between secondary waterflooding and tertiary Enhanced Oil Recovery (EOR).",
        modelAnswer: "Recovery factor is the product of microscopic pore-level physics and macroscopic reservoir-scale geometry: $RF = E_D \\cdot E_V$.\n1. Microscopic Displacement Efficiency ($E_D$): This is the fraction of oil displaced from pore spaces in rocks that have been directly contacted by the displacing fluid: $E_D = (S_{oi} - S_{or}) / S_{oi}$. It is governed by pore-scale capillary forces, rock wettability, and interfacial tension (IFT). Normal waterflooding leaves a high residual oil saturation ($S_{or} \\approx 25–35\\%$) trapped by capillary snap-off.\n2. Macroscopic / Volumetric Sweep Efficiency ($E_V = E_A \\cdot E_I$): This is the fraction of the total reservoir pore volume that is physically contacted or swept by the injected fluid. It depends on well patterns, geological layering (permeability contrast), gravity override, and the Mobility Ratio ($M$). In waterflooding, viscous fingering and high-permeability thief zones cause water to bypass large uncontacted oil zones ($E_V \\approx 50–70\\%$).\nTargeting in Secondary vs Tertiary Recovery:\n- Secondary Waterflooding primarily targets pressure maintenance and improving volumetric sweep ($E_V$) through pattern infill drilling and layer chokes, but cannot reduce $S_{or}$ below the capillary trapping limit.\n- Tertiary EOR targets both: Chemical surfactant flooding lowers IFT to near zero to mobilize trapped capillary residual oil (boosting $E_D$); Polymer flooding increases injected water viscosity to eliminate viscous fingering and level out thief zones (boosting $E_V$); and Miscible Gas ($CO_2$) achieves zero IFT and swells oil (boosting both $E_D$ and $E_V$).",
        keyPoints: [
          "$E_D$: Pore-scale displacement governed by capillary forces and IFT ($S_{or}$).",
          "$E_V$: Reservoir-scale sweep ($E_A \\cdot E_I$) governed by mobility ratio, layering, and well patterns.",
          "Secondary targets pressure/sweep; Tertiary EOR targets capillary trapping (surfactants $\\rightarrow E_D$) and viscous fingering (polymers $\\rightarrow E_V$)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Audit Target Reservoir & EOR Engineering Jobs",
      instructions: [
        "Search for 'Reservoir Engineer - Waterflood', 'EOR Specialist', or 'Asset Development Engineer' at Cairn, ONGC, Shell, or Chevron.",
        "Add keywords (Waterflooding, Sweep Efficiency, EOR Screening) to your target skills list."
      ],
      deliverable: "EOR career opportunities and skills logged."
    }
  },

  // DAY 46
  {
    dayNumber: 46,
    phaseId: 2,
    weekNumber: 6,
    title: "Secondary Recovery: Waterflooding & Mobility Ratio",
    category: "eor",
    categoryLabel: "Waterflooding",
    todayGoal: "Master waterflooding mechanics, end-point mobility ratio (M), viscous fingering, and the Buckley-Leverett fractional flow equation.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Waterflooding is the most widely practiced secondary recovery method worldwide. Water is cheap, readily available (seawater, produced water, aquifer water), and incompressible. In waterflooding, water is injected through dedicated injector wells to maintain reservoir pressure and sweep oil toward producing wells. The single most important parameter governing waterflood success is the Mobility Ratio (M): the mobility of the injected water divided by the mobility of the displaced oil. Favorable mobility (M <= 1.0) creates stable piston-like displacement; unfavorable mobility (M > 1.0) leads to severe viscous fingering and early water breakthrough.",
      keyPoints: [
        "Mobility Ratio (M): M = lambda_w / lambda_o = (k_rw / mu_w) / (k_ro / mu_o) = (k_rw * mu_o) / (k_ro * mu_w).",
        "Mobility Interpretation:\n- Favorable Mobility (M <= 1.0): Displacing water moves slower or with equal ease compared to oil. Result: Stable, piston-like displacement, excellent areal sweep, delayed water breakthrough, high recovery.\n- Unfavorable Mobility (M > 1.0): Injected water moves faster than oil (common in viscous or heavy oils). Result: Viscous fingering—water fingers directly through the oil toward producers, causing premature water breakthrough and poor sweep efficiency.",
        "Buckley-Leverett Fractional Flow (fw): f_w = 1 / [1 + (k_ro * mu_w) / (k_rw * mu_o)] (ignoring dip and capillary pressure). Defines the fraction of water in the flowing fluid stream at any saturation Sw.",
        "Welge Graphical Method: Tangent drawn from initial Swi to the fractional flow curve yields the shock front water saturation (S_wf) and water saturation at breakthrough.",
        "Water Quality & Compatibility: Injected water must be filtered (< 2–5 microns) to prevent sandface plugging, deoxygenated to stop pipeline corrosion, and checked for sulfate content to prevent barium sulfate scaling."
      ],
      coreFormulas: [
        {
          name: "End-Point Mobility Ratio",
          formula: "M = (k_rw_max * mu_o) / (k_ro_max * mu_w)",
          explanation: "k_rw_max at S_or, k_ro_max at S_wirr. M <= 1.0 is favorable."
        },
        {
          name: "Buckley-Leverett Fractional Flow",
          formula: "f_w = 1 / [ 1 + (k_ro / k_rw) * (mu_w / mu_o) ]",
          explanation: "Water cut fraction in the flowing porous media."
        }
      ],
      fieldInsight: "If your calculated mobility ratio is M = 15 (e.g. in a heavy 20 cp oil waterflood), pure waterflooding will be a disaster: water will finger straight through to the producers in weeks. To fix this, you must add polymers to increase injected water viscosity (mu_w), driving M back down below 1.0."
    },
    watchRead: {
      textbooks: [
        {
          title: "The Reservoir Engineering Aspects of Waterflooding (Forrest F. Craig Jr. - SPE Monograph 3)",
          chapterOrSection: "Chapter 2: Mobility Ratio and Areal Sweep Efficiency",
          note: "The seminal reference on waterflooding mechanics and Welge tangent method."
        },
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 10: Waterflooding Performance",
          note: "Work through Buckley-Leverett frontal advance examples."
        }
      ],
      recommendedTopics: [
        "Welge tangent construction on fractional flow curve",
        "Water breakthrough timing calculation: t_bt = (V_pore * (S_wbt - S_wi)) / q_inj",
        "Water quality specifications: Turbidity (NTU), Millipore filtration, and biocide treatment"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q46_1",
          topic: "Mobility Ratio",
          question: "The Mobility Ratio (M) in waterflooding is defined as:",
          options: [
            "Mobility of displacing water divided by mobility of displaced oil: M = (krw / mu_w) / (kro / mu_o)",
            "Oil viscosity divided by water viscosity",
            "Permeability multiplied by porosity",
            "Water cut divided by GOR"
          ],
          correctIndex: 0,
          explanation: "M is the ratio of displacing phase mobility (water) to displaced phase mobility (oil): M = (krw * mu_o) / (kro * mu_w)."
        },
        {
          id: "q46_2",
          topic: "Mobility Ratio",
          question: "A waterflood with a mobility ratio M = 0.5 is classified as:",
          options: [
            "Favorable (displacing water moves slower than oil, promoting stable piston-like displacement)",
            "Unfavorable (severe viscous fingering)",
            "Impossible in nature",
            "Zero recovery"
          ],
          correctIndex: 0,
          explanation: "M <= 1.0 is favorable; the displacing front remains stable and resists fingering, leading to high sweep efficiency."
        },
        {
          id: "q46_3",
          topic: "Viscous Fingering",
          question: "What is 'viscous fingering' in a waterflood with unfavorable mobility ratio (e.g. M = 8.0)?",
          options: [
            "Injecting water by hand",
            "Low-viscosity water channels rapidly through high-viscosity oil in finger-like tongues, causing premature water breakthrough and bypassing large volumes of oil",
            "Rock dissolution",
            "Casing collapse"
          ],
          correctIndex: 1,
          explanation: "When displacing fluid is less viscous than displaced fluid, dynamic instability causes water fingers to bypass oil, leaving poor sweep."
        },
        {
          id: "q46_4",
          topic: "Buckley-Leverett",
          question: "The Buckley-Leverett frontal advance theory calculates:",
          options: [
            "The rate of advance of an immiscible water saturation shock front through porous media",
            "Drill bit wear",
            "Gas well deliverability",
            "BOP pressure rating"
          ],
          correctIndex: 0,
          explanation: "Buckley-Leverett (1942) models the velocity of constant saturation planes: (dx/dt)_Sw = (q_t / [A * phi]) * (dfw/dSw)."
        },
        {
          id: "q46_5",
          topic: "Fractional Flow",
          question: "In the Welge method, the water saturation at the flood front (Swf) is determined on the fractional flow (fw vs Sw) curve by:",
          options: [
            "Drawing a tangent line from initial water saturation (Swi, fw=0) to the fractional flow curve; the point of tangency gives Swf",
            "Finding where fw = 0.5",
            "Reading Sw at fw = 1.0",
            "Taking the square root of permeability"
          ],
          correctIndex: 0,
          explanation: "Welge proved that the shock front saturation Swf is precisely the point where a tangent line from (Swi, 0) touches the S-shaped fw curve."
        },
        {
          id: "q46_6",
          topic: "Water Quality",
          question: "Why must seawater injected into offshore wells undergo deoxygenation (dissolved oxygen < 10 ppb)?",
          options: [
            "Fish cannot breathe",
            "Dissolved oxygen causes severe, rapid pitting corrosion in steel injection pipelines, wellheads, and tubing strings",
            "Oxygen causes oil to freeze",
            "Oxygen increases water weight"
          ],
          correctIndex: 1,
          explanation: "Oxygen in warm saline water causes catastrophic corrosion rates (> 100 mils/year) on carbon steel; vacuum deaerators strip O2 below 10 ppb."
        },
        {
          id: "q46_7",
          topic: "Mobility Ratio",
          question: "In heavy oil reservoirs where oil viscosity mu_o = 100 cp and water viscosity mu_w = 1.0 cp, why is conventional waterflooding ineffective?",
          options: [
            "Because water turns into steam",
            "Because the mobility ratio is extremely unfavorable (M >> 10), leading to catastrophic water channeling and negligible oil recovery",
            "Because heavy oil evaporates",
            "Because water cannot be pumped"
          ],
          correctIndex: 1,
          explanation: "High oil viscosity inflates M to 20–50+, causing severe fingering; water races straight to producers with < 5–10% oil recovery."
        },
        {
          id: "q46_8",
          topic: "Water Treatment",
          question: "Why are biocides (e.g. glutaraldehyde) routinely injected into waterflood streams?",
          options: [
            "To eradicate Sulfate-Reducing Bacteria (SRB) that generate lethal, corrosive H2S gas downhole (reservoir souring)",
            "To make water sweet-tasting",
            "To kill plant algae on the rig floor",
            "To dissolve sand"
          ],
          correctIndex: 0,
          explanation: "SRB bacteria metabolize injected sulfate into toxic, highly corrosive H2S gas (reservoir souring); biocides prevent biofouling and souring."
        },
        {
          id: "q46_9",
          topic: "Injection Pressure",
          question: "The maximum surface water injection pressure must strictly be kept below:",
          options: ["Formation fracture pressure at the injection depth (to prevent uncontrolled fracturing out of zone)", "Atmospheric pressure", "Bubble point pressure", "Zero psi"],
          correctIndex: 0,
          explanation: "Exceeding formation fracture pressure breaks open fractures that can breach caprocks or channel water directly into producers."
        },
        {
          id: "q46_10",
          topic: "Secondary Recovery",
          question: "What is 'Voidage Replacement Ratio' (VRR) in waterflood management?",
          options: [
            "Ratio of reservoir volume of injected water to reservoir volume of produced fluids (oil + water + gas): VRR = Injection_res_bbl / Production_res_bbl",
            "Ratio of oil to gas",
            "Water cut percentage",
            "Drilling rate ratio"
          ],
          correctIndex: 0,
          explanation: "VRR = Injected Volume / Produced Voidage. VRR = 1.0 perfectly maintains reservoir pressure; VRR > 1.0 re-pressurizes the reservoir."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc46_1",
          title: "Waterflood Mobility Ratio (M) Calculation",
          scenario: "A waterflood project is planned for a sandstone reservoir. Special core analysis gives end-point relative permeabilities: krw_max (at residual oil Sor = 25%) = 0.22, and kro_max (at connate water Swi = 22%) = 0.75. In-situ fluid viscosities are: Oil viscosity mu_o = 4.5 cp, Injected water viscosity mu_w = 0.90 cp.",
          formula: "M = (k_rw_max * mu_o) / (k_ro_max * mu_w)",
          givenData: {
            "krw_max": 0.22,
            "kro_max": 0.75,
            "mu_o (cp)": 4.5,
            "mu_w (cp)": 0.90
          },
          questionText: "Calculate: 1) The end-point mobility ratio (M), and 2) State whether the displacement is favorable or unfavorable.",
          solutionSteps: [
            "Step 1: Numerator = krw_max * mu_o = 0.22 * 4.5 = 0.990",
            "Step 2: Denominator = kro_max * mu_w = 0.75 * 0.90 = 0.675",
            "Step 3: Mobility Ratio M = 0.990 / 0.675 = 1.467 (~1.47)",
            "Step 4: Classification: Since M = 1.47 > 1.0, the displacement is UNFAVORABLE (water has higher mobility than oil, resulting in some viscous fingering and early water breakthrough)."
          ],
          finalAnswer: "Mobility Ratio M = 1.47 (Unfavorable Displacement)",
          inputUnit: "dimensionless",
          expectedNumber: 1.47,
          tolerance: 0.05
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int46_1",
        question: "What is the Mobility Ratio (M) in waterflooding? Why is M <= 1.0 desirable, and what engineering solutions can you implement if M is highly unfavorable (e.g. M = 12)?",
        whyAsked: "High-yield reservoir and production engineering question to test whether you connect fluid physics with tertiary chemical EOR solutions.",
        modelAnswer: "The Mobility Ratio ($M$) is the ratio of the mobility of the displacing fluid (water) to the mobility of the displaced fluid (oil):\n$$M = \\frac{\\lambda_w}{\\lambda_o} = \\frac{k_{rw} / \\mu_w}{k_{ro} / \\mu_o} = \\frac{k_{rw} \\cdot \\mu_o}{k_{ro} \\cdot \\mu_w}$$\nWhy $M \\le 1.0$ is Desirable:\nWhen $M \\le 1.0$ (favorable mobility), oil flows more easily than water through the rock. The advancing water front forms a stable, piston-like displacement barrier that sweeps the formation uniformly. Water breakthrough is significantly delayed, and the well produces high oil rates with low water cut for a prolonged period.\nWhat Happens When $M = 12$ (Unfavorable Mobility):\nBecause water moves 12 times more easily than oil, hydrodynamic instability causes viscous fingering. Injected water bypasses the viscous oil, tunneling through high-permeability channels directly into producer wells. Water breakthrough happens almost immediately, and water cut skyrockets to 90%+ while leaving 70%+ of the oil behind uncontacted.\nEngineering Solutions to Fix Unfavorable Mobility ($M = 12$):\n1. Polymer Flooding: Add high-molecular-weight water-soluble polymers (HPAM) to the injection water. This increases water viscosity ($\\mu_w$) from 1 cp up to 15–30 cp, driving the mobility ratio $M$ down from 12 to below 1.0, smoothing the flood front and dramatically improving volumetric sweep.\n2. Inflow Control Devices (ICDs): Install autonomous inflow control devices in horizontal producer wells to choke high-velocity water breakthrough.\n3. Thermal EOR (for Heavy Oil): If the high $M$ is caused by heavy oil viscosity, apply steam injection (SAGD or cyclic steam). Heating the reservoir from 100°F to 350°F drops oil viscosity from hundreds of centipoise down to 5 cp, transforming $M$ into a highly favorable range.",
        keyPoints: [
          "Definition: $M = (k_{rw} \\cdot \\mu_o) / (k_{ro} \\cdot \\mu_w)$.",
          "$M \\le 1$: Favorable, piston-like displacement, high sweep, delayed breakthrough.",
          "Fixing $M = 12$: Polymer flooding (increases $\\mu_w$), Thermal steam (lowers $\\mu_o$), or pattern optimization."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Add Waterflood Surveillance Skills to Master Resume",
      instructions: [
        "Include key waterflood management competencies: 'Waterflood Surveillance & Voidage Replacement (VRR)', 'Mobility Ratio (M) Analysis', 'Buckley-Leverett Displacement'.",
        "Save this in your resume profile notes."
      ],
      deliverable: "Waterflood management competencies added to resume skills."
    }
  },

  // DAY 47
  {
    dayNumber: 47,
    phaseId: 2,
    weekNumber: 6,
    title: "Tertiary Recovery (EOR): Screening Criteria & Fundamentals",
    category: "eor",
    categoryLabel: "EOR Fundamentals",
    todayGoal: "Master Enhanced Oil Recovery (EOR) definitions, the Capillary Number, and technical screening criteria across candidate fields.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Enhanced Oil Recovery (EOR), or Tertiary Recovery, refers to sophisticated recovery methods applied after primary depletion and secondary waterflooding have reached their economic limits. While secondary recovery relies purely on mechanical viscous displacement and pressure maintenance, EOR fundamentally alters physical rock-fluid and fluid-fluid interactions (lowering interfacial tension to near zero, swelling oil, reducing viscosity by heating, or altering rock wettability). Successful EOR requires rigorous technical screening of depth, temperature, permeability, oil viscosity, and salinity.",
      keyPoints: [
        "EOR Target: Mobile oil bypassed by waterflooding (sweep inefficiency) AND residual oil trapped by capillary forces (displacement inefficiency).",
        "The Capillary Number (N_c): N_c = (mu * v) / sigma. Ratio of viscous forces to capillary (interfacial tension) forces. Under normal waterflooding, N_c is ~10^-7 to 10^-6, trapping residual oil (Sor ~ 25–35%). To mobilize trapped oil droplets, N_c must be increased by 3 to 4 orders of magnitude (to 10^-3 or 10^-2) by reducing IFT (sigma) from ~30 dynes/cm down to < 10^-3 dynes/cm (ultra-low IFT).",
        "EOR Classification (3 Pillars): 1) Thermal Methods (Steam injection, SAGD, In-Situ Combustion), 2) Gas Injection Methods (Miscible CO2, Hydrocarbon Gas, Nitrogen), 3) Chemical Methods (Polymer, Surfactant-Polymer SP, Alkali-Surfactant-Polymer ASP).",
        "EOR Technical Screening Criteria (Taber, Martin & Seright):\n- Polymer: Oil viscosity 10–150 cp, perm > 20 mD, temp < 200°F (thermal degradation limit).\n- Surfactant/ASP: Perm > 20 mD, low-to-moderate salinity (< 50,000 ppm TDS), temp < 200°F.\n- Miscible CO2: Deep (> 2,500 ft for MMP), light oil (> 22–25° API), low viscosity (< 10 cp).\n- Steam/Thermal: Heavy oil (< 20° API, viscosity > 100–10,000+ cp), shallow (< 3,000–4,000 ft to avoid wellbore heat loss), high permeability (> 200–500 mD)."
      ],
      coreFormulas: [
        {
          name: "Capillary Number (N_c)",
          formula: "N_c = (mu * v) / sigma",
          explanation: "mu is displacing fluid viscosity, v is Darcy velocity, sigma is interfacial tension."
        },
        {
          name: "Minimum Miscibility Pressure (MMP)",
          formula: "Pressure required for injected gas and crude oil to form a single continuous phase at reservoir temperature.",
          explanation: "If P_res >= MMP, displacement is multi-contact miscible (100% microscopic sweep)."
        }
      ],
      fieldInsight: "Always check formation clay content and salinity before recommending Chemical EOR! Divalent cations (Calcium Ca2+ and Magnesium Mg2+) in hard formation brine precipitate anionic surfactants and break down polymer chains. Pre-flushing with softened brine or using specialized salinity-tolerant polymers is mandatory."
    },
    watchRead: {
      textbooks: [
        {
          title: "Enhanced Oil Recovery (Larry W. Lake)",
          chapterOrSection: "Chapter 1: Overview of EOR & Chapter 2: Microscopic Displacement Physics",
          note: "The definitive master textbook on EOR theory, capillary desaturation, and screening."
        },
        {
          title: "SPE Paper 35385: EOR Screening Methods (Taber, Martin, Seright)",
          chapterOrSection: "Full Paper",
          note: "Study the classic SPE screening criteria tables for all EOR methods."
        }
      ],
      recommendedTopics: [
        "Capillary Desaturation Curve (CDC): Log-log plot of residual oil saturation vs Capillary Number",
        "Minimum Miscibility Pressure (MMP) determination via Slim Tube tests and Rising Bubble tests",
        "Economics of EOR: Chemical and energy costs vs incremental barrels recovered"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q47_1",
          topic: "EOR Fundamentals",
          question: "How does Tertiary Enhanced Oil Recovery (EOR) fundamentally differ from Secondary Waterflooding?",
          options: [
            "EOR alters physical rock-fluid interactions (e.g. lowering interfacial tension, reducing viscosity via heat, or modifying wettability), whereas waterflooding relies purely on mechanical pressure and viscous displacement",
            "EOR uses cold water only",
            "EOR can only be applied to dry gas wells",
            "EOR is free of cost"
          ],
          correctIndex: 0,
          explanation: "EOR modifies microscopic capillary forces (surfactants) or fluid phase behavior (thermal/gas miscibility), unlike conventional waterflooding."
        },
        {
          id: "q47_2",
          topic: "Capillary Number",
          question: "The Capillary Number (Nc = mu * v / sigma) represents the ratio of which two physical forces?",
          options: [
            "Viscous forces to capillary (interfacial tension) forces",
            "Gravity forces to friction forces",
            "Nuclear forces to magnetic forces",
            "Pressure to temperature"
          ],
          correctIndex: 0,
          explanation: "Nc balances viscous forces driving fluid flow against capillary interfacial tension forces trapping oil droplets in pore throats."
        },
        {
          id: "q47_3",
          topic: "Capillary Desaturation",
          question: "To mobilize residual oil trapped by capillary forces after waterflooding, the Capillary Number must be increased by approximately:",
          options: ["10%", "2 times", "3 to 4 orders of magnitude (from ~10^-6 to ~10^-3 or 10^-2)", "Zero change"],
          correctIndex: 2,
          explanation: "The Capillary Desaturation Curve proves that Sor drops significantly only when Nc is elevated by 1,000 to 10,000 times, achieved via ultra-low IFT surfactants."
        },
        {
          id: "q47_4",
          topic: "EOR Screening",
          question: "Which EOR method is universally recognized as best suited for heavy oil (< 20° API, viscosity > 1,000 cp) at shallow depths (< 3,000 ft)?",
          options: ["Thermal EOR (Steam flooding / SAGD / Cyclic Steam Stimulation)", "CO2 miscible gas flooding", "Low-salinity waterflooding", "Nitrogen injection"],
          correctIndex: 0,
          explanation: "Steam dramatically heats heavy crude, reducing viscosity by multiple orders of magnitude, transforming immobile bitumen into free-flowing oil."
        },
        {
          id: "q47_5",
          topic: "Miscibility",
          question: "What is 'Minimum Miscibility Pressure' (MMP) in gas injection EOR?",
          options: [
            "The minimum pressure required for injected gas and reservoir oil to achieve multi-contact miscibility (forming a single homogeneous phase with zero interfacial tension)",
            "The burst pressure of casing",
            "The surface separator pressure",
            "The hydrostatic mud pressure"
          ],
          correctIndex: 0,
          explanation: "Above MMP, gas and oil mix completely into a single phase; capillary forces disappear (sigma = 0), yielding near 100% microscopic displacement efficiency."
        },
        {
          id: "q47_6",
          topic: "Polymer Flooding",
          question: "Polymer flooding improves oil recovery primarily by:",
          options: [
            "Dissolving rock pores with acid",
            "Increasing the viscosity of injected water to lower the mobility ratio (M <= 1), eliminating viscous fingering and improving volumetric sweep efficiency",
            "Burning crude oil downhole",
            "Vaporizing water"
          ],
          correctIndex: 1,
          explanation: "Polymers thicken injected water, correcting unfavorable mobility ratios and forcing water to sweep bypassed oil layers."
        },
        {
          id: "q47_7",
          topic: "Chemical EOR",
          question: "Surfactants added during chemical EOR reduce residual oil saturation by:",
          options: [
            "Lowering the oil-water Interfacial Tension (IFT) from ~30 dynes/cm down to ultra-low values (< 10^-3 dynes/cm)",
            "Increasing water density to 20 ppg",
            "Freezing the water",
            "Generating radioactive isotopes"
          ],
          correctIndex: 0,
          explanation: "Surfactants concentrate at oil-water interfaces, slashing IFT by 10,000-fold, allowing trapped oil droplets to deform and squeeze through pore throats."
        },
        {
          id: "q47_8",
          topic: "Thermal Limitations",
          question: "Why is steam injection generally limited to reservoir depths shallower than 3,500–4,000 ft?",
          options: [
            "Drilling deeper is impossible",
            "Excessive heat loss through thousands of feet of wellbore causes steam to condense into hot water before reaching the sandface, destroying thermal efficiency",
            "Deep rock is too hard",
            "Steam becomes radioactive at depth"
          ],
          correctIndex: 1,
          explanation: "At depths > 4,000 ft, heat conduction to surrounding rock condenses steam into liquid water, wasting thermal energy before it reaches the formation."
        },
        {
          id: "q47_9",
          topic: "Laboratory EOR",
          question: "Which laboratory apparatus is recognized as the global gold standard for measuring Minimum Miscibility Pressure (MMP)?",
          options: ["Slim Tube apparatus", "Dean-Stark apparatus", "Marsh funnel", "Hydrometer"],
          correctIndex: 0,
          explanation: "The Slim Tube test (sand-packed coiled steel tube) measures oil recovery vs injection pressure to find the break point where recovery exceeds 90–95% (MMP)."
        },
        {
          id: "q47_10",
          topic: "EOR Screening",
          question: "According to Taber's EOR screening criteria, CO2 miscible gas injection is ideally suited for reservoirs with:",
          options: [
            "Heavy 10° API bitumen at 500 ft",
            "Light crude (> 25° API, low viscosity < 10 cp) at sufficient depth where reservoir pressure exceeds MMP",
            "Unconsolidated cold sand with 99% water cut",
            "Shale gas source rocks only"
          ],
          correctIndex: 1,
          explanation: "Miscible CO2 requires light oil rich in C2-C6 intermediate components and sufficient reservoir pressure (> MMP) to achieve dynamic miscibility."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc47_1",
          title: "Capillary Number (N_c) Calculation Across Waterflood vs Surfactant EOR",
          scenario: "A waterflood is flowing at Darcy velocity v = 1.0 ft/day (v = 3.53 x 10^-6 m/s) with water viscosity mu = 1.0 cp (0.001 Pa*s). The baseline oil-water interfacial tension is sigma = 30 dynes/cm (0.030 N/m). A chemical surfactant flood is formulated that reduces IFT to an ultra-low value sigma_surf = 0.002 dynes/cm (2.0 x 10^-6 N/m).",
          formula: "N_c = (mu * v) / sigma  [using SI units: mu in Pa*s, v in m/s, sigma in N/m]",
          givenData: {
            "mu (Pa*s)": 0.001,
            "v (m/s)": 0.00000353,
            "sigma_water (N/m)": 0.030,
            "sigma_surf (N/m)": 0.000002
          },
          questionText: "Calculate: 1) The baseline Capillary Number during waterflooding, 2) The Capillary Number during surfactant flooding, and 3) The factor of increase.",
          solutionSteps: [
            "Step 1: Baseline N_c_water = (0.001 * 3.53e-6) / 0.030 = 3.53e-9 / 0.030 = 1.177 x 10^-7",
            "Step 2: Surfactant N_c_surf = (0.001 * 3.53e-6) / 2.0e-6 = 3.53e-9 / 2.0e-6 = 1.765 x 10^-3",
            "Step 3: Factor of Increase = 1.765e-3 / 1.177e-7 = 15,000 times higher!",
            "Conclusion: The 15,000-fold increase in Capillary Number moves the system onto the desaturation curve, successfully mobilizing trapped residual oil."
          ],
          finalAnswer: "Waterflood Nc = 1.18 x 10^-7, Surfactant Nc = 1.77 x 10^-3 (15,000x Increase)",
          inputUnit: "dimensionless",
          expectedNumber: 0.00177,
          tolerance: 0.0001
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int47_1",
        question: "How does the Capillary Number (Nc) explain why residual oil remains trapped after waterflooding, and how does chemical EOR mobilize that oil?",
        whyAsked: "Tests deep fundamental understanding of multiphase pore physics, interfacial tension, and chemical EOR mechanisms.",
        modelAnswer: "The Capillary Number ($N_c$) represents the balance between viscous forces driving fluid flow and capillary forces holding oil droplets trapped in pore throats:\n$$N_c = \\frac{\\mu \\cdot v}{\\sigma}$$\nwhere $\\mu$ is displacing fluid viscosity, $v$ is Darcy interstitial velocity, and $\\sigma$ is interfacial tension (IFT).\nWhy Oil Remains Trapped After Waterflooding:\nUnder conventional waterflooding, reservoir flow velocities are small ($\\approx 1$ ft/day), water viscosity is low ($\<ctrl61>\approx 1$ cp), and water-oil IFT is high ($\\approx 25–35$ dynes/cm). This produces an extremely small Capillary Number of $N_c \\approx 10^{-7}$ to $10^{-6}$. On the Capillary Desaturation Curve (CDC), this operating point sits firmly on the flat plateau: viscous forces cannot overcome the high capillary pressure required to deform oil droplets through narrow pore throats. Consequently, snap-off occurs and a large residual oil saturation ($S_{or} \\approx 25–35\\%$) remains permanently immobilized.\nHow Chemical EOR Mobilizes Trapped Oil:\nTo mobilize these disconnected oil ganglia, the Capillary Number must be elevated by 3 to 4 orders of magnitude (to $N_c \\ge 10^{-3}$ or $10^{-2}$). Because we cannot increase reservoir flow velocity $v$ without exceeding formation fracture pressure, and increasing viscosity $\\mu$ with polymers only yields a 10-fold gain, the ONLY physical mechanism capable of delivering a 10,000-fold increase in $N_c$ is slashing interfacial tension ($\\sigma$). Surfactant flooding reduces IFT from 30 dynes/cm down to ultra-low values ($< 0.001$ dynes/cm). Capillary forces collapse to near zero, allowing oil droplets to coalesce into a continuous mobile oil bank that flows freely to producing wells.",
        keyPoints: [
          "Formula: $N_c = \\mu \\cdot v / \\sigma$ balances viscous against capillary forces.",
          "Waterflooding sits at $N_c \\approx 10^{-7}$, where capillary forces trap 25–35% $S_{or}$.",
          "Surfactants slash IFT by 10,000x (to $< 10^{-3}$ dynes/cm), boosting $N_c$ to $10^{-3}$, mobilizing oil."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Incorporate EOR Fundamentals into LinkedIn Summary",
      instructions: [
        "Update your professional summary: 'Experienced in secondary waterflooding surveillance, mobility ratio control, and technical screening of tertiary EOR methods (Thermal, CO2, Polymer/Surfactant)...'",
        "Save in your profile draft."
      ],
      deliverable: "LinkedIn summary updated with EOR capabilities."
    }
  },

  // DAY 48
  {
    dayNumber: 48,
    phaseId: 2,
    weekNumber: 6,
    title: "EOR Methods: Thermal, Gas Injection & Chemical Systems",
    category: "eor",
    categoryLabel: "EOR Technologies",
    todayGoal: "Master the 3 major EOR families: Thermal (Steam, SAGD), Gas (Miscible CO2, WAG), and Chemical (Polymer, Surfactant, ASP).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Today we dissect the operational mechanics and field deployment of the three major EOR families: 1) Thermal EOR (dominates heavy oil worldwide), 2) Gas Injection EOR (dominates light oil in the US Permian Basin and Middle East), and 3) Chemical EOR (dominant in China's Daqing field and growing globally). Knowing the field injection design, equipment requirements, and operational pitfalls of each method is essential for senior technical roles.",
      keyPoints: [
        "1. Thermal EOR Methods:\n- Cyclic Steam Stimulation (CSS / 'Huff and Puff'): Single well cycles through steam injection (days), soaking (weeks), and production (months).\n- Steam Flooding: Continuous steam injection in dedicated pattern injectors pushing oil to producers.\n- Steam-Assisted Gravity Drainage (SAGD): Dual horizontal parallel wells drilled 15 ft apart vertically in extra-heavy oil/tar sands (e.g. Athabasca). Top well injects steam, creating a rising steam chamber; heated bitumen drains by gravity into bottom horizontal producer.\n2. Gas Injection EOR:\n- Carbon Dioxide (CO2) Flooding: Injected above MMP. Supercritical CO2 dissolves in crude oil, causing oil swelling (10–40%), dramatic viscosity reduction (5–10x), and miscibility extraction.\n- Water-Alternating-Gas (WAG): Alternating slug injection of water and CO2 (e.g. 1:1 ratio) to control gas mobility, mitigate gas gravity override, and prevent gas channeling.\n3. Chemical EOR Systems:\n- Polymer Flooding: Adds hydrolyzed polyacrylamide (HPAM) to increase water viscosity, improving volumetric sweep efficiency.\n- Surfactant-Polymer (SP): Surfactant reduces IFT to mobilize residual oil; polymer drives the mobilized oil bank.\n- Alkali-Surfactant-Polymer (ASP): Inexpensive alkali (Na2CO3 or NaOH) reacts with natural naphthenic acids in crude to generate in-situ soap, reduces surfactant adsorption onto rock, and creates ultra-low IFT at lowest chemical cost."
      ],
      coreFormulas: [
        {
          name: "WAG Ratio",
          formula: "WAG Ratio = V_water_slug / V_gas_slug",
          explanation: "Typically 1:1 to 2:1 on reservoir volume basis."
        },
        {
          name: "Steam-Oil Ratio (SOR)",
          formula: "SOR = Barrels of Steam (CWE) Injected / Barrels of Oil Produced",
          explanation: "Key economic metric for thermal projects. Commercial SAGD requires SOR < 2.5 to 3.5."
        }
      ],
      fieldInsight: "In CO2 EOR projects, corrosion and asphaltene precipitation are severe operational hazards. Supercritical CO2 mixes with formation water to create highly corrosive carbonic acid (H2CO3), requiring corrosion-resistant alloys (13Cr tubing or fiberglass). Furthermore, CO2 strips maltene resins from oil, triggering sudden downhole asphaltene flocculation that plugs near-wellbore perforations."
    },
    watchRead: {
      textbooks: [
        {
          title: "Enhanced Oil Recovery (Larry W. Lake)",
          chapterOrSection: "Chapter 5: Gas Flooding & Chapter 6: Chemical Flooding & Chapter 7: Thermal EOR",
          note: "Comprehensive engineering breakdown of SAGD, CO2 WAG, and ASP chemistry."
        }
      ],
      recommendedTopics: [
        "SAGD steam chamber propagation and temperature observation wells",
        "WAG ratio optimization and gravity segregation (viscous vs gravity crossflow)",
        "Surfactant retention: Adsorption, precipitation, and phase trapping mechanisms"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q48_1",
          topic: "Thermal EOR",
          question: "Steam-Assisted Gravity Drainage (SAGD) uses which configuration of wells in heavy oil tar sand reservoirs?",
          options: [
            "A pair of stacked, parallel horizontal wells (top injector, bottom producer separated vertically by ~15 ft)",
            "A single vertical well with a pumpjack",
            "Four vertical injectors and one central gas well",
            "Underground nuclear detonation"
          ],
          correctIndex: 0,
          explanation: "SAGD uses two parallel horizontal wells: the upper well injects steam to heat bitumen, which drains by gravity into the lower producer."
        },
        {
          id: "q48_2",
          topic: "Gas Injection",
          question: "In CO2 EOR, what is the primary purpose of the Water-Alternating-Gas (WAG) process?",
          options: [
            "To freeze the reservoir",
            "To mitigate CO2 gravity override and early gas channeling by using alternating water slugs to control gas mobility",
            "To eliminate all operating costs",
            "To dissolve the casing"
          ],
          correctIndex: 1,
          explanation: "CO2 has very low density and viscosity; injecting alternating slugs of water controls mobility and suppresses gas fingering."
        },
        {
          id: "q48_3",
          topic: "Chemical EOR",
          question: "What is the key chemical role of adding 'Alkali' (e.g. Sodium Carbonate, Na2CO3) in an Alkali-Surfactant-Polymer (ASP) flood?",
          options: [
            "It reacts with natural naphthenic acids in crude oil to generate in-situ soap and alters rock surface charge to drastically reduce expensive surfactant adsorption",
            "It turns oil into gasoline",
            "It cools the water",
            "It increases sand production"
          ],
          correctIndex: 0,
          explanation: "Alkali generates in-situ surfactants from crude organic acids and increases rock negative charge, preventing expensive synthetic surfactant loss."
        },
        {
          id: "q48_4",
          topic: "Thermal Metrics",
          question: "The Steam-Oil Ratio (SOR) in thermal recovery projects measures:",
          options: [
            "Barrels of steam (cold water equivalent, CWE) injected divided by barrels of oil produced",
            "Temperature of the steam",
            "Pressure of the boiler",
            "The depth of the well"
          ],
          correctIndex: 0,
          explanation: "SOR is the primary economic efficiency metric: lower SOR (e.g. < 2.5–3.0) means less fuel gas burned per barrel of oil produced."
        },
        {
          id: "q48_5",
          topic: "CO2 Physics",
          question: "When supercritical CO2 dissolves into crude oil above Minimum Miscibility Pressure (MMP), it causes:",
          options: [
            "Oil swelling (10% to 40% volume expansion) and a massive reduction in crude oil viscosity",
            "Oil solidification into bitumen",
            "Water to turn into gas",
            "Permeability to drop to zero"
          ],
          correctIndex: 0,
          explanation: "CO2 dissolves into oil, swelling oil volume (pushing it out of dead ends) and reducing viscosity by up to 80–90%."
        },
        {
          id: "q48_6",
          topic: "Polymer Flooding",
          question: "Which water-soluble polymer is most widely used in commercial oilfield polymer flooding?",
          options: ["Hydrolyzed Polyacrylamide (HPAM)", "Polyethylene plastic", "Rubber latex", "Polystyrene foam"],
          correctIndex: 0,
          explanation: "HPAM (Partially Hydrolyzed Polyacrylamide) is the industry workhorse due to low cost, high viscosifying power, and viscoelastic properties."
        },
        {
          id: "q48_7",
          topic: "Thermal EOR",
          question: "'Huff and Puff' is the colloquial oilfield name for which thermal recovery process?",
          options: ["Cyclic Steam Stimulation (CSS)", "SAGD", "In-Situ Combustion", "Air injection"],
          correctIndex: 0,
          explanation: "CSS is called Huff and Puff because the same well is huffed (injected with steam), soaked, and puffed (produced)."
        },
        {
          id: "q48_8",
          topic: "Operational Challenges",
          question: "What severe chemical corrosion hazard occurs when CO2 is injected into wells with wet formation water?",
          options: [
            "CO2 dissolves in water to form Carbonic Acid (H2CO3), causing severe sweet corrosion on carbon steel tubulars",
            "Nitric acid formation",
            "Cyanide poisoning",
            "Plastic melting"
          ],
          correctIndex: 0,
          explanation: "Wet CO2 creates carbonic acid, causing rapid pitting and sweet corrosion that requires 13Cr metallurgy or corrosion inhibitors."
        },
        {
          id: "q48_9",
          topic: "Miscible Gas",
          question: "In addition to CO2, which other gases are routinely injected for miscible gas EOR?",
          options: ["Enriched hydrocarbon gas (methane + ethane/propane) and high-pressure Nitrogen (N2)", "Helium and Argon", "Pure Oxygen", "Carbon monoxide"],
          correctIndex: 0,
          explanation: "Enriched natural gas (lean gas spiked with NGLs) and high-pressure Nitrogen are widely used where CO2 is unavailable."
        },
        {
          id: "q48_10",
          topic: "Chemical EOR",
          question: "What is the primary degradation risk for HPAM polymers in deep, high-temperature reservoirs?",
          options: [
            "Thermal hydrolysis and precipitation with divalent cations (Ca2+, Mg2+) at temperatures above ~180–200°F",
            "Polymer turns into crude oil",
            "Polymer dissolves rock",
            "Polymer freezes"
          ],
          correctIndex: 0,
          explanation: "At temperatures > 200°F, HPAM hydrolyzes rapidly, reacts with calcium/magnesium in brine, precipitates out, and loses viscosity."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc48_1",
          title: "Thermal EOR Steam-Oil Ratio (SOR) & Energy Efficiency",
          scenario: "A SAGD well pair operates continuously over a 30-day period. The steam generation plant injects an average of 1,800 bbl/day of high-pressure steam (Cold Water Equivalent, CWE). Over the 30-day month, the production well yields 18,900 STB of bitumen.",
          formula: "Total_Steam = Daily_Steam * Days; Cumulative_SOR = Total_Steam_bbl / Total_Oil_bbl",
          givenData: {
            "Daily steam rate (bbl/d)": 1800,
            "Days": 30,
            "Total oil produced (STB)": 18900
          },
          questionText: "Calculate: 1) Total cumulative steam injected in barrels, 2) The cumulative Steam-Oil Ratio (SOR), and 3) State whether this operation is commercially efficient (benchmark SOR < 3.5).",
          solutionSteps: [
            "Step 1: Total Steam Injected = 1,800 bbl/day * 30 days = 54,000 bbl CWE",
            "Step 2: Cumulative SOR = 54,000 bbl steam / 18,900 bbl bitumen = 2.857 (~2.86)",
            "Step 3: Commercial Assessment: Since SOR = 2.86 is well below the 3.5 commercial cutoff, the project is operating with high thermal and economic efficiency!"
          ],
          finalAnswer: "Total Steam = 54,000 bbl, Cumulative SOR = 2.86 (Commercially Efficient)",
          inputUnit: "dimensionless",
          expectedNumber: 2.86,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int48_1",
        question: "Explain the Water-Alternating-Gas (WAG) process in CO2 EOR. Why do we alternate water and gas instead of just injecting continuous pure CO2?",
        whyAsked: "Tests understanding of multiphase displacement dynamics, gravity segregation, and field gas flood management.",
        modelAnswer: "In CO2 miscible gas flooding, pure continuous CO2 injection suffers from two severe physical deficiencies:\n1. Unfavorable Mobility Ratio: Supercritical CO2 has a viscosity of only 0.03 to 0.08 cp—typically 20 to 50 times less viscous than reservoir crude oil. Under continuous injection, CO2 experiences intense viscous fingering, racing ahead through high-permeability thief zones and breaking through to production wells prematurely.\n2. Gravity Segregation (Override): Supercritical CO2 density is typically 0.5 to 0.7 g/cm³, significantly lighter than formation water (1.05 g/cm³) and lighter than oil. Under continuous injection, buoyant CO2 segregates to the top of the reservoir, forming a thin gas layer across the ceiling while leaving the lower 80% of the oil column un-swept.\nHow WAG Solves Both Problems:\nThe Water-Alternating-Gas (WAG) process alternates slug injection of water and CO2 (typically in a 1:1 or 2:1 reservoir volume ratio):\n- The water slugs have high viscosity and high relative permeability resistance, which drastically lowers the effective mobility of the advancing gas-liquid front and suppresses viscous fingering.\n- Water is heavier than oil, so it sinks and sweeps the bottom layers of the reservoir, while the lighter CO2 sweeps the upper layers. This creates complementary vertical and areal sweep, achieving significantly higher volumetric sweep efficiency and dramatically lower purchase costs for expensive CO2 gas.",
        keyPoints: [
          "Continuous CO2 suffers from viscous fingering (low gas viscosity) and gravity override (low density).",
          "WAG injects alternating slugs of water and CO2 (typically 1:1 to 2:1 ratio).",
          "Water controls mobility and sweeps lower layers; CO2 achieves miscibility and sweeps upper layers."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Week 6 Well Testing & EOR for Tomorrow's Milestone Test",
      instructions: [
        "Review your formula sheets: Horner slope m, k equation, skin s, Delta P_skin, Flow Efficiency, Mobility Ratio M, Capillary Number Nc, and SOR.",
        "Ensure your workspace is prepared for the 35-question Week 6 Benchmark Test tomorrow."
      ],
      deliverable: "Week 6 study notes reviewed and ready for Day 49 test."
    }
  },

  // DAY 49
  {
    dayNumber: 49,
    phaseId: 2,
    weekNumber: 6,
    title: "TECHNICAL TEST: Well Testing & EOR Benchmark Exam",
    category: "well_testing",
    categoryLabel: "Weekly Exam",
    todayGoal: "Complete the 35-question comprehensive Well Testing & EOR Benchmark Test, solve Horner and EOR calculations, and log weak areas.",
    estimatedTotalMinutes: 130,
    isTestDay: true,
    testId: "week_6_test",
    learn: {
      durationMinutes: 25,
      summary: "Milestone Day. Today is the formal benchmark exam covering Week 6 (Days 41 to 48): Pressure transient testing, Horner plot mechanics, skin factor and flow efficiency, Bourdet derivative diagnostics, primary depletion limits, waterflooding mobility ratio, and EOR technologies (Thermal, CO2 WAG, Chemical ASP). Any missed question will automatically route to your Revision Queue.",
      keyPoints: [
        "Exam scope: 35 technical questions + comprehensive calculation problems covering PTA and EOR.",
        "Pass benchmark: 80% (28 / 35).",
        "Target outcome: Prove your dynamic reservoir evaluation and secondary/tertiary recovery mastery before entering Week 7: Excel Data Analysis."
      ],
      fieldInsight: "Being able to interpret well test derivatives and design EOR flood patterns elevates you from an operational field hand to an asset development engineer. Nail this milestone today."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Week 6 Review",
          chapterOrSection: "Days 41–48 Notes & Formula Cards",
          note: "Quickly scan Horner slope m, skin formula, Bourdet plateaus, and Mobility Ratio M."
        }
      ],
      recommendedTopics: [
        "k = 162.6 * q * mu * B / (m * h)",
        "Delta P_skin = 0.869 * m * s",
        "M = (krw * mu_o) / (kro * mu_w)"
      ]
    },
    practice: {
      durationMinutes: 60,
      questionCount: 10,
      questions: [
        {
          id: "w6_t1",
          topic: "Horner Plot",
          question: "On a Horner buildup semilog plot, what does a flat horizontal Bourdet derivative correspond to on the Horner pressure curve?",
          options: [
            "The straight-line middle-time region representing Infinite-Acting Radial Flow (IARF)",
            "Pure wellbore storage",
            "A sealing fault boundary",
            "A dry gas well"
          ],
          correctIndex: 0,
          explanation: "A flat horizontal derivative confirms Infinite-Acting Radial Flow, validating the straight line on the Horner semilog plot."
        },
        {
          id: "w6_t2",
          topic: "Skin Factor",
          question: "If a well test yields Delta P_skin = 350 psi in a well operating with total drawdown of 500 psi, what is the Flow Efficiency (FE)?",
          options: ["30%", "50%", "70%", "100%"],
          correctIndex: 0,
          explanation: "FE = (500 - 350) / 500 = 150 / 500 = 0.30 or 30%."
        },
        {
          id: "w6_t3",
          topic: "Mobility Ratio",
          question: "A waterflood has an end-point mobility ratio M = 0.65. This displacement is:",
          options: [
            "Favorable (piston-like displacement with delayed water breakthrough)",
            "Unfavorable with severe viscous fingering",
            "Zero recovery",
            "Impossible"
          ],
          correctIndex: 0,
          explanation: "M <= 1.0 represents favorable mobility, creating stable piston-like displacement."
        },
        {
          id: "w6_t4",
          topic: "Bourdet Derivative",
          question: "A single impermeable sealing fault causes the Bourdet derivative to:",
          options: [
            "Double in height to a second horizontal plateau (2x original plateau)",
            "Drop to zero",
            "Turn into a unit slope line",
            "Disappear"
          ],
          correctIndex: 0,
          explanation: "A sealing fault cuts the radial flow angle in half (from 360° to 180°), doubling the pressure resistance and doubling the derivative height."
        },
        {
          id: "w6_t5",
          topic: "Thermal EOR",
          question: "In Canadian oil sands and heavy bitumen, what thermal EOR process uses two parallel horizontal wells separated by ~15 ft vertically?",
          options: ["SAGD (Steam-Assisted Gravity Drainage)", "Polymer flood", "CO2 WAG", "Acidizing"],
          correctIndex: 0,
          explanation: "SAGD uses a stacked pair of horizontal wells: top injector creates a steam chamber; bottom producer drains heated bitumen."
        },
        {
          id: "w6_t6",
          topic: "Capillary Number",
          question: "Surfactants mobilize residual oil trapped by capillary forces after waterflooding by:",
          options: [
            "Slashing interfacial tension (IFT) by 3 to 4 orders of magnitude, vastly increasing the Capillary Number",
            "Increasing water density",
            "Freezing the water",
            "Increasing formation depth"
          ],
          correctIndex: 0,
          explanation: "Surfactants drop IFT from ~30 dynes/cm down to < 10^-3 dynes/cm, elevating the Capillary Number into the desaturation window."
        },
        {
          id: "w6_t7",
          topic: "Gas Injection",
          question: "What is the primary advantage of Water-Alternating-Gas (WAG) over continuous CO2 injection?",
          options: [
            "Controls gas mobility and mitigates gravity override, improving volumetric sweep efficiency",
            "Eliminates the need for water",
            "Requires no compressor",
            "Zero cost"
          ],
          correctIndex: 0,
          explanation: "Alternating water slugs controls the high mobility of gas and suppresses viscous fingering and gravity override."
        },
        {
          id: "w6_t8",
          topic: "Well Testing",
          question: "Why does downhole shut-in during a buildup test yield cleaner, earlier radial flow data than surface shut-in?",
          options: [
            "It minimizes wellbore storage volume, eliminating afterflow and phase redistribution",
            "It costs zero dollars",
            "It eliminates all skin",
            "It cools the gauges"
          ],
          correctIndex: 0,
          explanation: "Downhole shut-in isolates the tubing volume, cutting wellbore storage from days to minutes."
        },
        {
          id: "w6_t9",
          topic: "Polymer Flooding",
          question: "HPAM polymers are added to injection water to:",
          options: [
            "Thicken the water (increase viscosity) to achieve a favorable mobility ratio (M <= 1)",
            "Burn heavy oil",
            "Dissolve scale",
            "Acidize the formation"
          ],
          correctIndex: 0,
          explanation: "Polymers increase water viscosity, lowering M below 1.0 to eliminate viscous fingering."
        },
        {
          id: "w6_t10",
          topic: "EOR Screening",
          question: "Minimum Miscibility Pressure (MMP) in gas flooding is standardly determined in the laboratory using a:",
          options: ["Slim Tube apparatus", "Viscometer", "Marsh funnel", "Centrifuge"],
          correctIndex: 0,
          explanation: "The Slim Tube test packed with sand measures recovery vs pressure to identify the onset of multi-contact miscibility (MMP)."
        }
      ]
    },
    calculation: {
      durationMinutes: 25,
      problemCount: 1,
      problems: [
        {
          id: "calc49_1",
          title: "Comprehensive Well Testing & EOR Benchmark Problem",
          scenario: "A pressure buildup test on an oil well flowed at q = 500 STB/day with h = 40 ft, mu_o = 2.0 cp, and Bo = 1.25 bbl/STB yields a Horner slope m = 45 psi/cycle, P_1hr = 3,120 psi, and Pwf = 2,400 psi. Reservoir properties: phi = 0.18, ct = 15 x 10^-6 psi^-1, rw = 0.35 ft, Pr = 3,300 psi. An offset waterflood has krw_max = 0.20, kro_max = 0.70, and injected water viscosity mu_w = 0.85 cp.",
          formula: "k = (162.6 * q * mu * B_o) / (m * h); s = 1.151 * [ (P_1hr - P_wf) / m - log(k/(phi*mu*ct*rw^2)) + 3.23 ]; M = (k_rw_max * mu_o) / (k_ro_max * mu_w)",
          givenData: {
            "q (STB/d)": 500,
            "h (ft)": 40,
            "mu_o (cp)": 2.0,
            "Bo (bbl/STB)": 1.25,
            "m (psi/cycle)": 45,
            "P_1hr (psi)": 3120,
            "Pwf (psi)": 2400,
            "Pr (psi)": 3300,
            "krw_max": 0.20,
            "kro_max": 0.70,
            "mu_w (cp)": 0.85
          },
          questionText: "Calculate: 1) Permeability k in mD, 2) Pressure drop due to skin (Delta P_skin) assuming s = +12.0, and 3) The waterflood mobility ratio (M).",
          solutionSteps: [
            "Step 1: k = (162.6 * 500 * 2.0 * 1.25) / (45 * 40)",
            "       = (162.6 * 1,250) / 1,800 = 203,250 / 1,800 = 112.9 mD (~113 mD)",
            "Step 2: Delta P_skin = 0.869 * m * s = 0.869 * 45 * 12.0 = 469.3 psi (~469 psi)",
            "Step 3: M = (krw_max * mu_o) / (kro_max * mu_w) = (0.20 * 2.0) / (0.70 * 0.85) = 0.40 / 0.595 = 0.672 (Favorable mobility!)."
          ],
          finalAnswer: "Permeability k = 113 mD, Delta P_skin = 469 psi, Mobility Ratio M = 0.67 (Favorable)",
          inputUnit: "mD",
          expectedNumber: 112.9,
          tolerance: 1.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int49_1",
        question: "How do you evaluate whether a mature, waterflooded oil field is a good candidate for Chemical EOR (Polymer or ASP) versus Miscible Gas (CO2) EOR?",
        whyAsked: "Tests comprehensive asset evaluation, screening criteria synthesis, and technical-economic judgment.",
        modelAnswer: "Evaluating a mature waterflooded field for Chemical EOR vs CO2 Gas EOR follows a 4-step screening protocol:\n1. Depth and Pressure Check (CO2 Screening): Check reservoir depth and pressure against Minimum Miscibility Pressure (MMP). CO2 requires deep reservoirs (typically > 2,500–3,000 ft) where pressure exceeds MMP ($P_{res} > MMP \\approx 1,500–2,500$ psi) and light oil (> 25° API) with low viscosity (< 5–10 cp). If the reservoir is shallow, low-pressure, or heavy crude, miscible CO2 is ruled out.\n2. Temperature and Salinity Check (Chemical EOR Screening): Check reservoir temperature and brine salinity for polymers and surfactants. HPAM polymers thermally degrade above 180–200°F and precipitate in high-salinity brine with divalent cations ($Ca^{2+}, Mg^{2+} > 2,000$ ppm). If reservoir temperature is < 180°F and salinity is manageable, chemical flooding is highly feasible.\n3. Reservoir Heterogeneity & Thief Zones: If the field suffers from extreme permeability layering or fracture channeling where water is bypassing oil, Polymer flooding is ideal to level out the flood front. If the rock is homogeneous and has high capillary residual oil ($S_{or} > 30\\%$), Surfactant/ASP or CO2 is preferred to reduce IFT and desaturate the rock.\n4. Logistics & Supply Availability: CO2 requires a nearby pipeline source or industrial capture source. If CO2 pipelines are non-existent in the region, Chemical EOR (delivered in bulk bags/isotanks) is the only commercially viable option.",
        keyPoints: [
          "Check depth/pressure vs MMP: CO2 needs $P > MMP$, depth $> 2,500$ ft, light oil.",
          "Check temperature/salinity: Polymers need $T < 180–200^\\circ$F and low divalent cations.",
          "Check infrastructure: CO2 requires regional pipeline access; chemicals are trucked."
        ]
      }
    },
    career: {
      durationMinutes: 15,
      actionTitle: "Audit 'Things I Forgot' for Week 6",
      instructions: [
        "Audit missed questions from today's test and add them to your Revision Queue.",
        "Celebrate Day 49! Tomorrow is revision, and on Day 51 we enter Week 7: Excel + Petroleum Data Analysis!"
      ],
      deliverable: "Week 6 Revision Queue updated and verified in dashboard."
    }
  },

  // DAY 50
  {
    dayNumber: 50,
    phaseId: 2,
    weekNumber: 6,
    title: "WELL TESTING & EOR REVISION & HALF-WAY CELEBRATION",
    category: "well_testing",
    categoryLabel: "Weekly Revision",
    todayGoal: "Review weak testing and EOR topics from yesterday's exam, clear the Revision Queue, and celebrate passing the 50-DAY HALFWAY MARK!",
    estimatedTotalMinutes: 120,
    learn: {
      durationMinutes: 45,
      summary: "MILESTONE DAY: You have officially completed 50 DAYS of your 90-day mission! More than 55% of the entire roadmap is behind you. Today, close all remaining gaps in Well Testing and EOR: review Horner superposition time, skin pressure drops, Bourdet derivative signatures, and EOR screening tables. Tomorrow, you shift from analytical theory to hands-on computational tools: Excel Data Analysis and Python.",
      keyPoints: [
        "Horner Analysis Recap: k = 162.6*q*mu*B / (m*h); P* from extrapolation to ratio 1.0; skin s from P_1hr.",
        "Bourdet Diagnostic Summary: Unit slope = wellbore storage / PSS; Flat line = radial flow (yields k & s); Doubling plateau = sealing fault; Plunge = constant pressure boundary.",
        "Waterflood & EOR Recap: M <= 1.0 is favorable; Nc = mu*v/sigma; Surfactants slash IFT by 10,000x; SAGD uses parallel horizontal wells for heavy bitumen; CO2 WAG controls gas mobility.",
        "Half-Way Milestone Reflection: You have rebuilt Fundamentals, Reservoir, Drilling, Production, Well Logging, and Well Testing. You are now technically equipped to hold your own against any 3-year engineer in a technical interview."
      ],
      fieldInsight: "Take a moment to look back at Day 1. On Day 1, core equations like Darcy radial flow, Vogel's IPR, Kill Mud Weight, and Archie's Law were hazy memories. Today, you derive them instinctively and understand their operational nuances. Be proud of this discipline!"
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Weeks 5 & 6 Review",
          chapterOrSection: "Logging, Testing, and EOR Formula Sheets",
          note: "Re-read all items in your personal Revision Queue."
        }
      ],
      recommendedTopics: [
        "Review of all missed questions from Day 39 and Day 49",
        "Preparation for Excel data modeling in Week 7"
      ]
    },
    practice: {
      durationMinutes: 35,
      questionCount: 10,
      questions: [
        {
          id: "q50_1",
          topic: "Horner Plot",
          question: "On a Horner buildup plot, the straight line extrapolation to Horner ratio = 1.0 yields which pressure?",
          options: ["P* (False Pressure)", "Pwf at shut-in", "Separator pressure", "Zero psi"],
          correctIndex: 0,
          explanation: "Extrapolating to HTR = 1.0 (infinite shut-in time) yields False Pressure P*."
        },
        {
          id: "q50_2",
          topic: "Skin Factor",
          question: "Pressure drop across the skin is calculated from Horner slope m and skin s as:",
          options: ["Delta P_skin = 0.869 * m * s", "Delta P_skin = m / s", "Delta P_skin = 141.2 * s", "Delta P_skin = m * s^2"],
          correctIndex: 0,
          explanation: "Delta P_skin = 0.869 * m * s."
        },
        {
          id: "q50_3",
          topic: "Mobility Ratio",
          question: "If water mobility is 50 mD/cp and oil mobility is 100 mD/cp, the mobility ratio M is:",
          options: ["0.50 (Favorable)", "2.00 (Unfavorable)", "5.00", "0.05"],
          correctIndex: 0,
          explanation: "M = lambda_w / lambda_o = 50 / 100 = 0.50 (Favorable displacement!)."
        },
        {
          id: "q50_4",
          topic: "Bourdet Derivative",
          question: "A horizontal flat plateau on the Bourdet derivative diagnoses which flow regime?",
          options: ["Infinite-Acting Radial Flow (IARF)", "Wellbore storage", "Fault boundary", "Channel flow"],
          correctIndex: 0,
          explanation: "A flat horizontal derivative line is the universal signature of Infinite-Acting Radial Flow."
        },
        {
          id: "q50_5",
          topic: "Chemical EOR",
          question: "HPAM polymer flooding improves oil recovery primarily by:",
          options: ["Increasing water viscosity to eliminate viscous fingering and improve volumetric sweep", "Dissolving rock", "Burning oil", "Lowering IFT to zero"],
          correctIndex: 0,
          explanation: "Polymer thickens injected water, lowering the mobility ratio M to improve sweep efficiency."
        },
        {
          id: "q50_6",
          topic: "Thermal EOR",
          question: "What is the primary recovery mechanism of Steam-Assisted Gravity Drainage (SAGD)?",
          options: [
            "Injected steam heats heavy bitumen to reduce viscosity by 10,000-fold, allowing heated oil to drain by gravity into a lower horizontal producer",
            "Steam fractures the rock with explosive pressure",
            "Steam turns into natural gas",
            "Steam cools the well"
          ],
          correctIndex: 0,
          explanation: "Steam heats bitumen, dropping its viscosity from millions of cp down to ~5 cp, allowing gravity drainage into the lower well."
        },
        {
          id: "q50_7",
          topic: "Gas Injection",
          question: "Above Minimum Miscibility Pressure (MMP), CO2 gas displaces crude oil with:",
          options: ["Multi-contact miscibility, zero interfacial tension, and near 100% microscopic displacement efficiency", "Severe fingering only", "Zero recovery", "Ice formation"],
          correctIndex: 0,
          explanation: "Above MMP, CO2 and oil become completely miscible; interfacial tension vanishes, eliminating capillary trapping."
        },
        {
          id: "q50_8",
          topic: "Well Testing",
          question: "Why does the Horner ratio decrease from right to left on a Horner buildup plot?",
          options: [
            "Because early shut-in times produce large ratios plotted on the right, while late times approach 1.0 on the left",
            "Because gauges read backwards",
            "Because pressure is negative",
            "Because time stops"
          ],
          correctIndex: 0,
          explanation: "(tp + Delta t)/Delta t is large at small Delta t (right), decreasing to 1.0 at infinite Delta t (left)."
        },
        {
          id: "q50_9",
          topic: "EOR Screening",
          question: "Which parameter is the primary limit preventing polymer flooding at depths > 8,000 ft with temperatures > 220°F?",
          options: ["Thermal degradation and precipitation of polyacrylamide polymers in hot brines", "Rock is too hard", "Casing is too thick", "Pumps cannot pump"],
          correctIndex: 0,
          explanation: "Standard HPAM polymers hydrolyze and precipitate in high-temperature brines (> 200°F), destroying viscosity."
        },
        {
          id: "q50_10",
          topic: "Half-Way Reflection",
          question: "You have completed 50 days of rigorous daily technical preparation. What is your primary focus for the remaining 40 days?",
          options: [
            "Stop studying completely",
            "Master practical tools (Excel & Python), build two portfolio projects, optimize resume/LinkedIn, execute daily job applications, and crush interview bootcamp",
            "Go back to Day 1",
            "Change careers"
          ],
          correctIndex: 1,
          explanation: "Phase 2 & 3 transform your rebuilt foundation into concrete proof of ability (projects), targeted applications, and interview mastery to get hired!"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc50_1",
          title: "Day 50 Half-Way Milestone Calculation: PTA & Waterflood Synthesis",
          scenario: "A reservoir engineer evaluates a buildup test on an oil well: q = 600 STB/day, h = 50 ft, mu_o = 1.8 cp, Bo = 1.22 bbl/STB, Horner slope m = 35 psi/cycle, and Delta P_skin = 180 psi across total drawdown of 600 psi. An offset waterflood operates with krw_max = 0.18, kro_max = 0.72, and mu_w = 0.90 cp.",
          formula: "k = (162.6 * q * mu * B_o) / (m * h); FE = (Drawdown - Delta P_skin) / Drawdown; M = (k_rw_max * mu_o) / (k_ro_max * mu_w)",
          givenData: {
            "q (STB/d)": 600,
            "h (ft)": 50,
            "mu_o (cp)": 1.8,
            "Bo (bbl/STB)": 1.22,
            "m (psi/cycle)": 35,
            "Delta P_skin (psi)": 180,
            "Drawdown (psi)": 600,
            "krw_max": 0.18,
            "kro_max": 0.72,
            "mu_w (cp)": 0.90
          },
          questionText: "Calculate: 1) Permeability k in mD, 2) Flow Efficiency (FE) as a percentage, and 3) Waterflood Mobility Ratio (M).",
          solutionSteps: [
            "Step 1: k = (162.6 * 600 * 1.8 * 1.22) / (35 * 50)",
            "       = (162.6 * 1,317.6) / 1,750 = 214,241.76 / 1,750 = 122.42 mD (~122.4 mD)",
            "Step 2: FE = (600 - 180) / 600 = 420 / 600 = 0.70 (or 70.0%)",
            "Step 3: M = (0.18 * 1.8) / (0.72 * 0.90) = 0.324 / 0.648 = 0.50 (Highly Favorable!)."
          ],
          finalAnswer: "k = 122.4 mD, Flow Efficiency = 70.0%, Mobility Ratio M = 0.50",
          inputUnit: "mD",
          expectedNumber: 122.4,
          tolerance: 1.0
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int50_1",
        question: "Halfway through your 90-day journey: If an interviewer asks: 'How do you prioritize field development decisions between infill drilling, waterflooding optimization, and artificial lift upgrades?' How do you structure your answer?",
        whyAsked: "Tests macro asset management perspective, capital allocation discipline, and holistic petroleum engineering synthesis.",
        modelAnswer: "I evaluate field development decisions using an Asset Value Hierarchy that maximizes Net Present Value (NPV) per dollar of capital expenditure (CAPEX):\n1. Base Production Optimization (Zero/Low CAPEX — Quickest Payback): Start with what we already have. Optimize existing wellheads, surface chokes, and artificial lift parameters (e.g. adjust ESP frequency or gas lift injection rates via Nodal Analysis). Remediate high-skin wells using low-cost matrix acidizing ($50k cost, < 1-week payback). This generates immediate incremental cash flow to fund larger projects.\n2. Secondary Recovery & Pressure Maintenance (Medium CAPEX — Sustained Value): Ensure Voidage Replacement Ratio ($VRR \\approx 1.0$) is maintained. If reservoir pressure is depleting, drilling new infill wells is a waste of capital because new wells will suffer low pressure and rapid decline. Re-aligning injection patterns, upgrading water treatment, and converting watered-out producers to pattern injectors maintains reservoir energy and boosts field recovery factor from 20% to 40%+.\n3. Infill & Development Drilling (High CAPEX — Resource Growth): Once baseline optimization and pressure maintenance are solid, execute infill drilling targeting un-swept bypassed oil compartments identified through 4D seismic, material balance compartmentalization, and reservoir simulation. Focus on horizontal wells with multi-zone completions to maximize reservoir contact.\nThis disciplined sequence ensures we never risk heavy drilling CAPEX to chase barrels that could have been unlocked with smarter operational surveillance.",
        keyPoints: [
          "Asset Value Hierarchy: Base optimization (low CAPEX) $\\rightarrow$ Pressure maintenance (medium CAPEX) $\\rightarrow$ Infill drilling (high CAPEX).",
          "Fix skin and artificial lift first for immediate cash flow.",
          "Maintain pressure via waterflooding before drilling new infill wells."
        ]
      }
    },
    career: {
      durationMinutes: 10,
      actionTitle: "50-Day Milestone Celebration & Transition to Excel Analytics",
      instructions: [
        "Take a moment to congratulate yourself on finishing 50 Days!",
        "Ensure Microsoft Excel (or Google Sheets / LibreOffice) is installed and open on your computer for tomorrow's Week 7 kick-off.",
        "Your foundation is rebuilt. Now you become a data-driven petroleum practitioner!"
      ],
      deliverable: "Day 50 milestone logged and verified in command center dashboard."
    }
  }
];
