import { DayPlan } from '../../types';

export const WEEK_2_DAYS: DayPlan[] = [
  // DAY 8
  {
    dayNumber: 8,
    phaseId: 1,
    weekNumber: 2,
    title: "Reservoir Types & Material Balance Concept",
    category: "reservoir",
    categoryLabel: "Reservoir Engineering",
    todayGoal: "Master reservoir classifications, volumetric vs non-volumetric systems, and the fundamental conservation of mass concept.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Reservoir engineering is rooted in conservation of mass: Initial Volume In Place = Volume Produced + Remaining Volume In Place. Reservoirs are broadly classified by fluid type (undersaturated oil, saturated oil with initial gas cap, gas-condensate, dry gas) and boundary conditions (volumetric/closed vs edge/bottom water drive). In a volumetric reservoir, there is no fluid influx or leakage across boundaries; production is driven entirely by internal fluid and rock expansion.",
      keyPoints: [
        "Conservation of Mass principle: Every barrel of hydrocarbon produced at the surface must be compensated for by fluid expansion, gas cap expansion, rock pore compaction, or water influx at reservoir conditions.",
        "Volumetric (Closed) Reservoir: Sealed by impermeable faults or pinch-outs with zero active aquifer water influx (We = 0). Pressure drops continuously with cumulative production.",
        "Water-Drive Reservoir: Connected to an active communicating aquifer. Aquifer encroachment (We) partially or fully supports reservoir pressure.",
        "Drive Indices: Fractional contributions of drive mechanisms (Depletion Drive DDI, Gas Cap SDI, Water Drive WDI, Rock/Fluid Compaction CDI). Their sum always equals 1.0."
      ],
      coreFormulas: [
        {
          name: "Material Balance Principle",
          formula: "Underground Withdrawal = Fluid Expansion + Water Influx",
          explanation: "N_p * [B_o + (R_p - R_s) * B_g] + W_p * B_w = N * [(B_o - B_oi) + (R_si - R_s) * B_g] + m * N * B_oi * [(B_g / B_gi) - 1] + (W_e - W_p * B_w)"
        }
      ],
      fieldInsight: "In asset appraisal, identifying whether a reservoir is volumetric early on is critical. If you mistake a volumetric reservoir for a water-drive reservoir, you will overestimate long-term primary recovery factor by a factor of 2x (solution gas drive achieves only 15–25% recovery vs 35–50%+ for active water drive)."
    },
    watchRead: {
      textbooks: [
        {
          title: "Fundamentals of Reservoir Engineering (L.P. Dake)",
          chapterOrSection: "Chapter 3: The Material Balance Equation",
          note: "Study Havlena & Odeh straight-line material balance formulation."
        },
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 3: Undersaturated Oil Reservoirs",
          note: "Review rock and connate water compressibility contributions."
        }
      ],
      recommendedTopics: [
        "Classification of hydrocarbon reservoirs based on initial pressure and bubble point",
        "Schilthuis Material Balance Equation derivation",
        "Havlena-Odeh diagnostic plots (F vs E_o, F/E_o vs E_g/E_o)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q8_1",
          topic: "Material Balance",
          question: "What is the primary defining characteristic of a 'volumetric' oil reservoir?",
          options: [
            "It has an infinitely large active water aquifer",
            "It is completely sealed with no water influx (We = 0) and no fluid injection",
            "Reservoir pressure never drops during production",
            "It produces 100% dry gas without liquids"
          ],
          correctIndex: 1,
          explanation: "A volumetric reservoir is bounded by impermeable boundaries on all sides, meaning water encroachment We = 0."
        },
        {
          id: "q8_2",
          topic: "Material Balance",
          question: "The sum of all Drive Indices (Depletion DDI + Segregation SDI + Water Drive WDI + Compaction CDI) is always equal to:",
          options: ["0.5", "1.0", "Depends on permeability", "100 bbl"],
          correctIndex: 1,
          explanation: "Drive indices represent the fractional contribution of each energy mechanism to total underground withdrawal; by definition, their sum equals 1.0 (or 100%)."
        },
        {
          id: "q8_3",
          topic: "Reservoir Types",
          question: "In an undersaturated oil reservoir above the bubble point, what provides the energy for production?",
          options: [
            "Free gas cap expansion",
            "Expansion of oil and connate water plus rock pore compaction",
            "Gravity drainage only",
            "Gas condensation"
          ],
          correctIndex: 1,
          explanation: "Above bubble point, no free gas exists. Fluid expansion (oil and connate water) and pore volume compaction (reduction of pore volume) expel fluids."
        },
        {
          id: "q8_4",
          topic: "Material Balance",
          question: "In Havlena and Odeh's straight line MBE method, what does 'F' represent?",
          options: ["Formation volume factor", "Total underground withdrawal of oil, gas, and water at reservoir conditions", "Skin factor", "Fracture gradient"],
          correctIndex: 1,
          explanation: "F represents the total net reservoir voidage / underground withdrawal: F = Np*[Bo + (Rp - Rs)*Bg] + Wp*Bw."
        },
        {
          id: "q8_5",
          topic: "Gas Cap Ratio",
          question: "In the Material Balance Equation, what is the parameter 'm' defined as?",
          options: [
            "Ratio of initial gas cap pore volume to initial oil zone pore volume",
            "Ratio of water production to oil production",
            "Molecular weight of natural gas",
            "Slope of the Horner plot"
          ],
          correctIndex: 0,
          explanation: "Parameter m is the ratio of the initial reservoir volume of the gas cap to the initial reservoir volume of the oil zone: m = V_g / V_o."
        },
        {
          id: "q8_6",
          topic: "Material Balance",
          question: "If a plot of F vs E_o for an undersaturated reservoir passes through the origin with a straight line, what does the slope represent?",
          options: ["Aquifer influx constant", "Original Oil In Place (N)", "Gas cap ratio m", "Permeability k"],
          correctIndex: 1,
          explanation: "For an undersaturated volumetric reservoir, F = N * E_o. Plotting F versus E_o yields a straight line passing through the origin whose slope is N (initial oil in place)."
        },
        {
          id: "q8_7",
          topic: "Reservoir Types",
          question: "Which of the following reservoir fluids has the highest initial solution gas-oil ratio (Rs)?",
          options: ["Black oil", "Volatile oil", "Heavy crude", "Bitumen"],
          correctIndex: 1,
          explanation: "Volatile oils have high initial dissolved GOR (typically 2,000 to 3,500+ scf/STB) and high Bo (> 2.0 bbl/STB) compared to ordinary black oils."
        },
        {
          id: "q8_8",
          topic: "Material Balance",
          question: "What is 'cumulative GOR' (Rp)?",
          options: ["Current daily gas rate divided by oil rate", "Cumulative produced gas (Gp) divided by cumulative produced oil (Np)", "Solution gas in place", "Separator gas capacity"],
          correctIndex: 1,
          explanation: "Rp is the cumulative produced gas-oil ratio: Rp = Gp / Np (in scf/STB)."
        },
        {
          id: "q8_9",
          topic: "Reservoir Energy",
          question: "Why is water encroachment (We) often difficult to quantify accurately in early field life?",
          options: [
            "Because water cannot flow through rock",
            "Because aquifer properties (size, permeability, boundary continuity) are rarely well-known until pressure history matures",
            "Because water has zero compressibility",
            "Because gas always dissolves all water"
          ],
          correctIndex: 1,
          explanation: "Aquifers extend far beyond the hydrocarbon-bearing zone where few or no appraisal wells are drilled, making aquifer volume and boundary geometry uncertain."
        },
        {
          id: "q8_10",
          topic: "Material Balance",
          question: "The material balance equation is a 'zero-dimensional' (tank) model because it:",
          options: [
            "Treats the entire reservoir as a single homogeneous tank with uniform average pressure and properties",
            "Only works when zero barrels have been produced",
            "Requires no mathematics",
            "Cannot calculate oil in place"
          ],
          correctIndex: 0,
          explanation: "MBE is zero-dimensional because it does not account for spatial geometry or pressure gradients between wells; it balances mass for the whole reservoir tank."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc8_1",
          title: "Underground Withdrawal (Net Voidage F) Calculation",
          scenario: "An oil reservoir has produced cumulative oil Np = 1,200,000 STB, cumulative gas Gp = 2.16 x 10^9 scf, and cumulative water Wp = 150,000 STB. At current reservoir pressure: Bo = 1.28 bbl/STB, Rs = 650 scf/STB, Bg = 0.00105 bbl/scf, and Bw = 1.02 bbl/STB.",
          formula: "R_p = G_p / N_p; F = N_p * [B_o + (R_p - R_s) * B_g] + W_p * B_w",
          givenData: {
            "Np (STB)": 1200000,
            "Gp (scf)": 2160000000,
            "Wp (STB)": 150000,
            "Bo (bbl/STB)": 1.28,
            "Rs (scf/STB)": 650,
            "Bg (bbl/scf)": 0.00105,
            "Bw (bbl/STB)": 1.02
          },
          questionText: "Calculate: 1) Cumulative produced GOR (Rp in scf/STB), and 2) Total underground voidage (F) in reservoir barrels (res bbl).",
          solutionSteps: [
            "Step 1: Rp = Gp / Np = 2,160,000,000 / 1,200,000 = 1,800 scf/STB",
            "Step 2: Free gas term = (Rp - Rs) * Bg = (1800 - 650) * 0.00105 = 1150 * 0.00105 = 1.2075 bbl/STB",
            "Step 3: Two-phase composite factor = Bo + 1.2075 = 1.28 + 1.2075 = 2.4875 bbl/STB",
            "Step 4: Hydrocarbon withdrawal = Np * 2.4875 = 1,200,000 * 2.4875 = 2,985,000 res bbl",
            "Step 5: Water withdrawal = Wp * Bw = 150,000 * 1.02 = 153,000 res bbl",
            "Step 6: Total Voidage F = 2,985,000 + 153,000 = 3,138,000 res bbl"
          ],
          finalAnswer: "Rp = 1,800 scf/STB, Total Voidage F = 3.14 x 10^6 res bbl",
          inputUnit: "res bbl",
          expectedNumber: 3138000,
          tolerance: 20000
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int8_1",
        question: "What is the difference between Volumetric Reserve Estimation and Material Balance Reserve Estimation, and at what stage of field development do you use each?",
        whyAsked: "Tests understanding of field development timelines and data reliability.",
        modelAnswer: "Volumetric estimation is a static method calculated as $N = 7758 \\cdot A \\cdot h \\cdot \\phi \\cdot (1 - S_w) / B_{oi}$. It relies on static geological and petrophysical data (seismic maps, core porosity, log saturations) and is the only method available before production begins (during exploration and initial field development). However, it has high uncertainty in bulk volume and boundary faulting.\nIn contrast, the Material Balance Equation (MBE) is a dynamic method based on conservation of mass using production history ($N_p, G_p, W_p$) and reservoir pressure decline ($P$ vs $t$). It requires at least 5% to 10% of reservoir fluid withdrawal before sufficient pressure drop occurs to yield reliable results. MBE does not need reservoir area or thickness; it directly measures the hydrocarbon pore volume actively communicating with the producing wells, allowing us to diagnose whether reservoir boundaries are compartmentalized or open to an aquifer.",
        keyPoints: [
          "Volumetric = Static (pre-production; uses seismic, logs, cores; high boundary uncertainty).",
          "Material Balance = Dynamic (requires production & pressure depletion history; zero-D tank model).",
          "MBE verifies if the entire volumetric container is actually communicating with the wells."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 Reservoir Engineering Key Deliverables",
      instructions: [
        "On your study sheet, write down the 3 core tasks a junior reservoir engineer performs: 1) Reserve estimation (Volumetric & MBE), 2) Decline Curve Analysis (DCA), 3) Well test interpretation.",
        "Align these three terms with your MIT Pune coursework for interview talking points."
      ],
      deliverable: "Bullet points matching MIT Pune reservoir coursework with real job requirements."
    }
  },

  // DAY 9
  {
    dayNumber: 9,
    phaseId: 1,
    weekNumber: 2,
    title: "Material Balance Equation (MBE) & Calculations",
    category: "reservoir",
    categoryLabel: "Reservoir Engineering",
    todayGoal: "Master the general MBE for undersaturated and saturated oil reservoirs and solve practical reserve calculation problems.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Today we dive deep into the mathematical mechanics of the Schilthuis General Material Balance Equation. For an undersaturated oil reservoir above bubble point, the equation simplifies gracefully to equate fluid withdrawal with rock and fluid compressibility expansion: N_p * B_o = N * B_oi * c_e * Delta_P. Below bubble point, we account for free gas cap expansion and solution gas liberation.",
      keyPoints: [
        "Effective Compressibility (c_e): c_e = [S_oi * c_o + S_wi * c_w + c_f] / S_oi (typically 10 to 30 x 10^-6 psi^-1).",
        "Undersaturated MBE Formula: N = (N_p * B_o) / [B_oi * c_e * (P_i - P)].",
        "Above bubble point, recovery is very low: usually only 1% to 3% of STOIIP per 1,000 psi of pressure drop because fluids and rocks have low compressibility.",
        "Saturated Oil Reservoir: Below bubble point, solution gas bubbles out of oil, and any original gas cap expands. Gas expansion is typically 10 to 100 times more effective than rock/water compressibility."
      ],
      coreFormulas: [
        {
          name: "Undersaturated Oil MBE",
          formula: "N = (N_p * B_o) / [B_oi * c_e * (P_i - P)]",
          explanation: "N in STB, N_p in STB, B_o & B_oi in bbl/STB, c_e in psi^-1, P in psi."
        },
        {
          name: "Effective Compressibility",
          formula: "c_e = c_o + (S_wi * c_w + c_f) / (1 - S_wi)",
          explanation: "Combines oil, connate water, and rock pore volume compressibility."
        }
      ],
      fieldInsight: "If you calculate an initial oil in place (N) using the undersaturated MBE and it turns out to be 5 times larger than your volumetric seismic estimate, look for two things: 1) Active water influx is leaking in across a fault, or 2) The reservoir is actually at or below bubble point and you have unaccounted gas liberation."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 4: Saturated Oil Reservoirs",
          note: "Study gas cap expansion equations and differential liberation adjustments."
        },
        {
          title: "Reservoir Engineering Handbook (Tarek Ahmed)",
          chapterOrSection: "Chapter 11: The Material Balance Equation",
          note: "Work through step-by-step example calculations for undersaturated reservoirs."
        }
      ],
      recommendedTopics: [
        "Havlena-Odeh diagnostics for identifying water drive vs gas cap",
        "Pore volume compressibility (c_f) measurement from rock mechanics testing",
        "Solution gas expansion term E_g = B_oi * [(B_g / B_gi) - 1]"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q9_1",
          topic: "Material Balance",
          question: "For an undersaturated oil reservoir producing above its bubble point without water influx, the primary expansion term is driven by:",
          options: ["Free gas cap expansion", "c_e (effective compressibility of oil, water, and rock)", "Aquifer recharge", "Thermal convection"],
          correctIndex: 1,
          explanation: "Above bubble point, with no free gas and no water influx, production is sustained solely by the composite expansion of oil, connate water, and rock pore contraction."
        },
        {
          id: "q9_2",
          topic: "Recovery Factor",
          question: "What is the typical primary oil recovery factor for an undersaturated volumetric reservoir produced purely by fluid and rock expansion down to the bubble point?",
          options: ["1% to 3%", "15% to 25%", "40% to 50%", "70% to 80%"],
          correctIndex: 0,
          explanation: "Because liquids and rocks are relatively incompressible, only 1% to 3% of original oil in place is recovered during the initial depletion down to the bubble point."
        },
        {
          id: "q9_3",
          topic: "Material Balance",
          question: "In the Havlena-Odeh method, what does a straight line plot of F / E_o versus E_g / E_o yield?",
          options: ["Slope = m*N and Intercept = N", "Slope = N and Intercept = 0", "Slope = k and Intercept = skin", "Slope = PI and Intercept = Pwf"],
          correctIndex: 0,
          explanation: "The equation F = N*(Eo + m*Eg) rearranges to F/Eo = N + (m*N)*(Eg/Eo). The y-intercept is N (STOIIP) and the slope is m*N (gas cap volume)."
        },
        {
          id: "q9_4",
          topic: "Rock Compressibility",
          question: "Formation (pore volume) compressibility c_f typically ranges between:",
          options: ["10^-8 to 10^-9 psi^-1", "3 x 10^-6 to 10 x 10^-6 psi^-1", "10^-2 to 10^-3 psi^-1", "100 psi^-1"],
          correctIndex: 1,
          explanation: "Pore volume compressibility for consolidated sandstones typically ranges between 3 x 10^-6 and 10 x 10^-6 psi^-1."
        },
        {
          id: "q9_5",
          topic: "Material Balance",
          question: "If a reservoir engineer ignores rock and water compressibility in an undersaturated oil reservoir MBE calculation, the calculated STOIIP (N) will be:",
          options: ["Drastically overestimated", "Accurate", "Zero", "Underestimated"],
          correctIndex: 0,
          explanation: "Since N = (Np*Bo) / (Boi * c_e * Delta P), underestimating c_e (by omitting cf and cw) causes the denominator to be too small, artificially inflating the estimated oil in place N."
        },
        {
          id: "q9_6",
          topic: "PVT Properties",
          question: "What happens to the Oil Formation Volume Factor (Bo) as pressure drops from 4,500 psi to 3,500 psi, if the bubble point is 2,500 psi?",
          options: ["Bo decreases steeply", "Bo increases slightly due to oil expansion upon pressure reduction", "Bo drops to zero", "Bo becomes negative"],
          correctIndex: 1,
          explanation: "Above Pb, as confining pressure decreases, the liquid oil slightly expands, so Bo increases marginally until it reaches its maximum at Pb (2,500 psi)."
        },
        {
          id: "q9_7",
          topic: "Gas Cap",
          question: "An oil reservoir has a gas cap with m = 0.5. This means:",
          options: ["Gas cap pore volume is half (50%) of the oil zone pore volume", "Water zone is half of the gas cap", "Recovery will be 50%", "GOR is 50 scf/STB"],
          correctIndex: 0,
          explanation: "m is defined as initial reservoir gas cap volume divided by initial reservoir oil zone volume: m = V_gcap / V_oil = 0.5."
        },
        {
          id: "q9_8",
          topic: "Material Balance",
          question: "Which of the following field measurements is the most critical for reliable MBE calculations?",
          options: ["Accurate static reservoir pressure surveys (P_avg) and cumulative production metering", "Daily drilling mud weight", "Casing collar locator depths", "Drill bit revolutions per minute"],
          correctIndex: 0,
          explanation: "Material balance fundamentally balances mass withdrawal against pressure drop; inaccurate average reservoir pressure or misallocated production destroys MBE validity."
        },
        {
          id: "q9_9",
          topic: "Compressibility",
          question: "Which fluid has higher compressibility under typical reservoir conditions: natural gas or water?",
          options: ["Natural gas (several orders of magnitude higher)", "Water", "They are identical", "Water at high salinity"],
          correctIndex: 0,
          explanation: "Natural gas is a compressible vapor with c_g ~ 1/P (e.g., 200–500 x 10^-6 psi^-1), whereas water has c_w ~ 3 x 10^-6 psi^-1 (100 times less compressible)."
        },
        {
          id: "q9_10",
          topic: "Material Balance",
          question: "In a gas reservoir MBE (p/z plot), a straight line extrapolating to p/z = 0 on the cumulative production axis (Gp) indicates:",
          options: ["Strong bottom water drive", "Volumetric depletion gas reservoir", "Gas reinjection is taking place", "Severe casing collapse"],
          correctIndex: 1,
          explanation: "A straight p/z vs Gp plot is the hallmark of a closed, volumetric depletion gas reservoir. The x-intercept at p/z = 0 gives the initial Original Gas In Place (OGIP, G)."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc9_1",
          title: "Undersaturated Oil MBE Reserve Calculation",
          scenario: "An undersaturated volumetric oil reservoir has an initial pressure Pi = 4,500 psi. Bubble point pressure Pb = 2,800 psi. The reservoir has produced Np = 350,000 STB of oil, causing average pressure to drop to 3,800 psi. Initial Boi = 1.250 bbl/STB; current Bo = 1.258 bbl/STB. Initial water saturation Swi = 0.25. Oil compressibility co = 12 x 10^-6 psi^-1, water compressibility cw = 3.2 x 10^-6 psi^-1, formation rock compressibility cf = 4.5 x 10^-6 psi^-1.",
          formula: "c_e = [S_oi * c_o + S_wi * c_w + c_f] / S_oi; N = (N_p * B_o) / [B_oi * c_e * (P_i - P)]",
          givenData: {
            "Pi (psi)": 4500,
            "P (psi)": 3800,
            "Np (STB)": 350000,
            "Bo (bbl/STB)": 1.258,
            "Boi (bbl/STB)": 1.250,
            "Soi": 0.75,
            "Swi": 0.25,
            "co (psi^-1)": 0.000012,
            "cw (psi^-1)": 0.0000032,
            "cf (psi^-1)": 0.0000045
          },
          questionText: "Calculate: 1) The effective compressibility ce, and 2) The Original Oil In Place (N) in MMSTB.",
          solutionSteps: [
            "Step 1: Soi = 1 - Swi = 1 - 0.25 = 0.75",
            "Step 2: Numerator of ce = (0.75 * 12e-6) + (0.25 * 3.2e-6) + 4.5e-6 = 9.0e-6 + 0.8e-6 + 4.5e-6 = 14.3e-6 psi^-1",
            "Step 3: ce = 14.3e-6 / 0.75 = 19.067 x 10^-6 psi^-1",
            "Step 4: Pressure drop Delta P = 4500 - 3800 = 700 psi",
            "Step 5: Denominator = Boi * ce * Delta P = 1.250 * 19.067e-6 * 700 = 0.016683",
            "Step 6: Numerator = Np * Bo = 350,000 * 1.258 = 440,300 res bbl",
            "Step 7: STOIIP N = 440,300 / 0.016683 = 26,392,000 STB = 26.39 MMSTB"
          ],
          finalAnswer: "ce = 19.1 x 10^-6 psi^-1, STOIIP (N) = 26.4 MMSTB",
          inputUnit: "MMSTB",
          expectedNumber: 26.39,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int9_1",
        question: "On a p/z vs Gp plot for a gas reservoir, what does it mean if the curve bends downward or bends upward instead of following a straight line?",
        whyAsked: "Evaluates your diagnostic abilities in dynamic reservoir analysis, frequently tested in reservoir engineering technical rounds.",
        modelAnswer: "In a volumetric gas reservoir with constant pore volume, the p/z vs cumulative gas production (Gp) plot is a straight line that extrapolates directly to total Original Gas In Place (G) at p/z = 0.\n1. Upward Bending (Concave Up): An upward deviation indicates water influx from an active communicating aquifer. The invading water maintains reservoir pressure higher than pure volumetric depletion would, artificially flattening the p/z decline. If extrapolated naively, it causes a severe overestimation of reserves. Specialized water-drive gas models (like Cole plot or Havlena-Odeh) must be applied to correct for water influx.\n2. Downward Bending (Concave Down): A downward curvature typically indicates reservoir compartmentalization or permeability layering. Initially, the well drains only the high-permeability inner compartment (giving an initial optimistic slope); as that compartment depletes and boundary resistance slows replenishment from tighter outer zones, the pressure drops more rapidly, bending the curve downward. It can also occur in tight gas / shale gas due to pressure-dependent permeability or rock compaction.",
        keyPoints: [
          "Straight line = Volumetric depletion (closed reservoir).",
          "Upward curve = Water influx / aquifer support (maintains pressure, risk of overestimating G).",
          "Downward curve = Compartmentalization, rock compaction, or dual-porosity drainage."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Draft Resume Bullet for Material Balance Competency",
      instructions: [
        "Formulate a professional resume bullet point based on today's learning: 'Performed Material Balance Analysis (MBE) to estimate original oil in place (STOIIP) and quantify drive indices for depletion vs water-drive reservoirs.'",
        "Save this bullet in your resume draft file."
      ],
      deliverable: "Refined resume bullet point highlighting material balance calculation capability."
    }
  },

  // DAY 10
  {
    dayNumber: 10,
    phaseId: 1,
    weekNumber: 2,
    title: "Reservoir Drive Mechanisms & Recovery Factors",
    category: "reservoir",
    categoryLabel: "Drive Mechanisms",
    todayGoal: "Master the 5 primary drive mechanisms, their pressure and GOR signatures, and their expected ultimate recovery factors (EUR).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Every oil and gas reservoir possesses one or more natural energy sources that move fluids into the wellbore. The five classic drive mechanisms are: 1) Rock & Fluid Expansion (Depletion Drive above Pb), 2) Solution Gas Drive (Internal Gas Drive below Pb), 3) Gas Cap Drive, 4) Water Drive (Bottom/Edge Water), and 5) Gravity Drainage. Knowing the diagnostic pressure decline, producing GOR trend, water cut behavior, and typical recovery factor for each drive is a foundational petroleum engineering competency.",
      keyPoints: [
        "Solution Gas Drive (Depletion Drive): Rapid pressure decline, GOR rises steeply as free gas breaks out and flows with high mobility, recovery factor is LOW (15% to 25%).",
        "Gas Cap Drive: Gas cap expands downward into oil zone; pressure declines moderately, GOR rises rapidly in updip wells as gas cap breaks through, recovery factor is MODERATE (20% to 40%).",
        "Water Drive (Active Aquifer): Water encroaches into oil zone; pressure remains high and stable, GOR remains low and constant near Rsb, water cut rises steadily in downdip wells, recovery factor is HIGH (35% to 50%+).",
        "Gravity Drainage: Occurs in high-relief, steeply dipping reservoirs with high permeability and low oil viscosity. Gas migrates updip while oil drains downdip. Recovery factor can reach 50% to 75%+.",
        "Combination Drive: Most real-world reservoirs exhibit combination drive (e.g., partial water influx + solution gas + small gas cap)."
      ],
      coreFormulas: [
        {
          name: "Recovery Factor (RF)",
          formula: "RF = N_p / N = (S_oi / B_oi - S_or / B_o) / (S_oi / B_oi)",
          explanation: "Expresses fraction of initial oil produced. S_or is residual oil saturation."
        }
      ],
      fieldInsight: "In water-drive reservoirs, producing wells at excessive drawdowns causes 'water coning'—drawing bottom water vertically into the perforations prematurely. Once a water cone breaks through, the water cut skyrockets and oil production is severely strangled. Determining the critical coning rate is vital."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 5: Water-Drive and Gas-Cap Reservoirs",
          note: "Compare producing GOR and pressure decline curves across all drives."
        },
        {
          title: "Fundamentals of Reservoir Engineering (L.P. Dake)",
          chapterOrSection: "Chapter 4: Energy Drive Mechanisms",
          note: "Study gravity drainage mechanics and critical coning rates (Chaperon & Meyer-Gardner)."
        }
      ],
      recommendedTopics: [
        "Water coning vs gas cresting (critical rate equations)",
        "Drive mechanism diagnostic summary table (Pressure, GOR, Water-cut, RF)",
        "Displacement efficiency E_D = (S_oi - S_or) / S_oi"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q10_1",
          topic: "Drive Mechanisms",
          question: "Which reservoir drive mechanism typically yields the LOWEST ultimate oil recovery factor (typically only 15% to 25%)?",
          options: ["Strong water drive", "Solution gas drive (depletion drive)", "Gravity drainage", "Active gas cap drive"],
          correctIndex: 1,
          explanation: "Solution gas drive yields low recovery (15–25%) because liberated gas flows with high relative permeability, rapidly exhausting reservoir energy and leaving high residual oil saturation."
        },
        {
          id: "q10_2",
          topic: "Drive Mechanisms",
          question: "In an oil field with a strong bottom water drive, how does producing GOR behave over time?",
          options: [
            "GOR rises exponentially to over 50,000 scf/STB",
            "GOR remains relatively low and stable (near initial solution GOR) because reservoir pressure remains maintained above or near bubble point",
            "GOR drops to absolute zero immediately",
            "GOR fluctuates randomly with no pattern"
          ],
          correctIndex: 1,
          explanation: "In an active water drive, water encroachment maintains reservoir pressure near initial pressure, preventing extensive gas breakout and keeping GOR low and stable."
        },
        {
          id: "q10_3",
          topic: "Drive Mechanisms",
          question: "Gravity drainage operates most effectively under which geological conditions?",
          options: [
            "Flat horizontal bedding with 1 mD permeability and heavy 10° API oil",
            "Steeply dipping formation, high vertical permeability, low oil viscosity, and thick pay zone",
            "Low-permeability fractured shale",
            "Depleted gas condensate reservoir"
          ],
          correctIndex: 1,
          explanation: "Gravity drainage requires high vertical permeability, steep structural dip, and light low-viscosity oil so gravity forces dominate over viscous forces, allowing oil to drain downward."
        },
        {
          id: "q10_4",
          topic: "Production Problems",
          question: "What is 'water coning' in an oil well?",
          options: [
            "Injecting water in a cone shape into an offshore pipeline",
            "Upward dynamic movement of the oil-water contact toward well perforations caused by excessive vertical pressure drawdown",
            "Freezing of water inside the separator",
            "A drilling bit malfunction"
          ],
          correctIndex: 1,
          explanation: "Water coning occurs when high near-wellbore dynamic drawdown overcomes the hydrostatic gravity difference between oil and water, pulling water upward into perforations."
        },
        {
          id: "q10_5",
          topic: "Drive Mechanisms",
          question: "What is the typical expected oil recovery factor from an efficient active water drive reservoir?",
          options: ["5% to 10%", "15% to 20%", "35% to 50%+", "85% to 95%"],
          correctIndex: 2,
          explanation: "Active water drives typically achieve 35% to 50%+ recovery factor because encroaching water sweeps oil effectively toward producing wells while maintaining pressure."
        },
        {
          id: "q10_6",
          topic: "Drive Mechanisms",
          question: "A reservoir shows: rapid pressure decline, sharp increase in producing GOR across all wells, and virtually zero water production. This indicates:",
          options: ["Solution gas drive", "Edge water drive", "Bottom water drive", "Gas cap injection"],
          correctIndex: 0,
          explanation: "This is the textbook signature of solution gas drive: steep pressure drop, skyrocketing GOR as free gas mobilizes, and zero water production."
        },
        {
          id: "q10_7",
          topic: "Drive Mechanisms",
          question: "In a gas cap drive reservoir, where should producing oil wells ideally be perforated?",
          options: [
            "Directly into the gas cap at the crest of the structure",
            "Structurally downdip as far from the Gas-Oil Contact (GOC) as possible to avoid premature gas breakthrough",
            "Directly at the GOC line",
            "In the caprock"
          ],
          correctIndex: 1,
          explanation: "Oil wells should be completed low on structure, far below the GOC, to maximize the distance the expanding gas cap must travel before gas coning or breakthrough occurs."
        },
        {
          id: "q10_8",
          topic: "Reservoir Energy",
          question: "Why does solution gas drive lose efficiency rapidly once gas saturation exceeds 'critical gas saturation' (Sgc)?",
          options: [
            "Because gas solidifies in pores",
            "Because free gas becomes mobile, has lower viscosity than oil, and is produced rapidly, depleting reservoir energy",
            "Because oil turns into water",
            "Because rock permeability disappears"
          ],
          correctIndex: 1,
          explanation: "Once gas saturation exceeds critical saturation (Sgc ~ 5–10%), gas bubbles coalesce into a continuous mobile phase. Since gas viscosity is ~50x lower than oil, gas races to the wellbore, dissipating pressure."
        },
        {
          id: "q10_9",
          topic: "Drive Mechanisms",
          question: "What is the primary operational disadvantage of producing a water-drive reservoir at water breakthrough?",
          options: [
            "Handling and treating huge volumes of produced water at surface, scaling, and artificial lift costs",
            "Gas becomes too sweet",
            "Drilling rig costs increase",
            "Porosity increases"
          ],
          correctIndex: 0,
          explanation: "Water breakthrough causes water cut to climb (often exceeding 90–98%), requiring large-scale water treatment facilities, scaling mitigation, corrosion control, and high-volume artificial lift (ESPs)."
        },
        {
          id: "q10_10",
          topic: "Recovery Factor",
          question: "If initial oil saturation Soi = 0.75 and residual oil saturation after water sweep is Sor = 0.25, what is the microscopic displacement efficiency (E_D)?",
          options: ["33.3%", "50.0%", "66.7%", "75.0%"],
          correctIndex: 2,
          explanation: "E_D = (Soi - Sor) / Soi = (0.75 - 0.25) / 0.75 = 0.50 / 0.75 = 0.667 or 66.7%."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc10_1",
          title: "Microscopic Displacement Efficiency & Ultimate Recovery",
          scenario: "A water-drive sandstone reservoir has initial water saturation Swi = 28% and Boi = 1.22 bbl/STB. Special Core Analysis (SCAL) waterflood tests measure a residual oil saturation to water sweep Sorw = 24% and Bo at abandonment = 1.15 bbl/STB. Volumetric sweep efficiency (Ev = Ea * Ei) is estimated at 70%.",
          formula: "S_oi = 1 - S_wi; E_D = (S_oi - S_orw) / S_oi; Overall RF = E_D * E_v",
          givenData: {
            "Swi": 0.28,
            "Sorw": 0.24,
            "Boi (bbl/STB)": 1.22,
            "Bo_ab (bbl/STB)": 1.15,
            "Sweep Efficiency Ev": 0.70
          },
          questionText: "Calculate: 1) Initial oil saturation Soi, 2) Microscopic displacement efficiency ED, and 3) Overall recovery factor (RF) as a percentage.",
          solutionSteps: [
            "Step 1: Soi = 1 - Swi = 1 - 0.28 = 0.72 (72%)",
            "Step 2: Microscopic displacement efficiency ED = (Soi - Sorw) / Soi",
            "       = (0.72 - 0.24) / 0.72 = 0.48 / 0.72 = 0.6667 (66.7%)",
            "Step 3: Overall Recovery Factor RF = ED * Ev = 0.6667 * 0.70 = 0.4667 (46.7%)"
          ],
          finalAnswer: "Soi = 72%, ED = 66.7%, Overall RF = 46.7%",
          inputUnit: "%",
          expectedNumber: 46.7,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int10_1",
        question: "Compare Solution Gas Drive vs Water Drive across four metrics: Pressure decline, Producing GOR, Water cut, and Recovery Factor.",
        whyAsked: "A standard interview test to verify you can summarize complex reservoir engineering behavior concisely.",
        modelAnswer: "Here is the side-by-side technical comparison:\n1. Reservoir Pressure: In Solution Gas Drive, pressure declines steeply and continuously because there is no replenishment. In Water Drive, pressure remains relatively high and steady due to aquifer encroachment supporting the voidage.\n2. Producing GOR: In Solution Gas Drive, GOR initially stays at Rsb, then increases dramatically to high levels as free gas mobilizes, before declining when reservoir gas is exhausted. In Water Drive, GOR remains low and constant near initial solution GOR because pressure stays maintained.\n3. Water Cut: In Solution Gas Drive, water cut is negligible or zero (producing only connate water). In Water Drive, water cut increases steadily and often reaches 90%+ as water sweeps the reservoir and breaches the wellbore.\n4. Recovery Factor: Solution Gas Drive has poor recovery (15%–25%) due to rapid energy depletion. Water Drive achieves high recovery (35%–50%+) due to effective displacement and pressure maintenance.",
        keyPoints: [
          "Pressure: Solution gas = rapid decline; Water drive = steady/well-maintained.",
          "GOR: Solution gas = sharp rise; Water drive = low and stable.",
          "Water cut: Solution gas = zero/negligible; Water drive = climbs to 90%+.",
          "Recovery: Solution gas = 15-25%; Water drive = 35-50%+."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Create a Reservoir Engineering Interview Q&A Flashcard Set",
      instructions: [
        "Create flashcards (digital or handwritten) for the 5 drive mechanisms and Havlena-Odeh equations.",
        "Practice delivering the 4-metric comparison out loud in under 90 seconds."
      ],
      deliverable: "Recorded or timed 90-second spoken summary of drive mechanisms."
    }
  },

  // DAY 11
  {
    dayNumber: 11,
    phaseId: 1,
    weekNumber: 2,
    title: "Relative Permeability, Capillary Pressure & Wettability",
    category: "reservoir",
    categoryLabel: "Special Core Analysis",
    todayGoal: "Master relative permeability curves, Corey correlations, wettability indices, and capillary pressure transition zones.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "When multiple immiscible fluid phases (oil, water, gas) flow simultaneously through rock pores, each phase interferes with the flow of the others. Special Core Analysis (SCAL) evaluates Relative Permeability (k_r), Capillary Pressure (P_c), and Wettability. These rock-fluid interaction curves control multi-phase flow in reservoir simulation, waterflood sweep, and transition zone thickness.",
      keyPoints: [
        "Wettability: The preference of a solid rock surface to be in contact with one fluid phase rather than another. Water-wet rock has contact angle theta < 90°; oil-wet rock has theta > 90°.",
        "Amott-Harvey & USBM Indices: Standard laboratory tests to quantify wettability from -1.0 (strongly oil-wet) to +1.0 (strongly water-wet).",
        "Relative Permeability End-Points: k_rw at S_or (water relative perm at residual oil), and k_ro at S_wirr (oil relative perm at irreducible water).",
        "Cross-over Point: In water-wet rocks, the k_rw and k_ro curves cross at Sw > 50% (typically 55% to 65%). In oil-wet rocks, the crossover occurs at Sw < 50% (typically 35% to 45%).",
        "Capillary Pressure (P_c): P_c = P_nonwetting - P_wetting = (2 * sigma * cos(theta)) / r. Governs the height of the transition zone above the Free Water Level (FWL)."
      ],
      coreFormulas: [
        {
          name: "Capillary Pressure (Young-Laplace)",
          formula: "P_c = (2 * sigma * cos(theta)) / r",
          explanation: "sigma is interfacial tension (dynes/cm), theta is contact angle, r is pore throat radius."
        },
        {
          name: "Height Above Free Water Level",
          formula: "h = P_c / [0.433 * (SG_w - SG_o)]",
          explanation: "Relates capillary pressure in psi to vertical height above FWL in feet."
        }
      ],
      fieldInsight: "Many carbonate reservoirs in the Middle East and worldwide are mixed-wet or strongly oil-wet. In an oil-wet reservoir, water injected during waterflooding channels through the centers of large pores, leading to early water breakthrough and sluggish oil recovery compared to water-wet sandstones."
    },
    watchRead: {
      textbooks: [
        {
          title: "Fundamentals of Reservoir Engineering (L.P. Dake)",
          chapterOrSection: "Chapter 2: Relative Permeability & Capillary Pressure",
          note: "Study Craig's rules of thumb for wettability classification."
        },
        {
          title: "Petroleum Reservoir Simulation (K. Aziz & A. Settari)",
          chapterOrSection: "Chapter 2: Multiphase Flow Equations",
          note: "Review fractional flow equation (Buckley-Leverett theory)."
        }
      ],
      recommendedTopics: [
        "Craig's Rules for wettability identification from rel-perm curves",
        "Hysteresis: Drainage (hydrocarbon migration) vs Imbibition (waterflood)",
        "Interfacial Tension (IFT) and capillary number N_vc = (mu * v) / sigma"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q11_1",
          topic: "Wettability",
          question: "According to Craig's Rules of Thumb, in a strongly WATER-WET reservoir rock, the relative permeability crossover point (where kro = krw) occurs at water saturation (Sw):",
          options: ["Less than 30%", "Less than 45%", "Greater than 50% (typically 55% to 65%)", "Exactly at 100%"],
          correctIndex: 2,
          explanation: "In water-wet systems, water preferentially occupies small pores, so oil flow is maintained up to higher water saturations; kro and krw cross at Sw > 50%."
        },
        {
          id: "q11_2",
          topic: "Capillary Pressure",
          question: "The Free Water Level (FWL) in a reservoir is defined as the depth where:",
          options: ["Water saturation is 100% and Capillary Pressure Pc = 0", "Porosity reaches 30%", "Oil saturation is 100%", "Gas begins to bubble"],
          correctIndex: 0,
          explanation: "By definition, the Free Water Level (FWL) is the level where phase pressures are equal (Po = Pw), so capillary pressure Pc = 0."
        },
        {
          id: "q11_3",
          topic: "Relative Permeability",
          question: "In a laboratory core test, 'Drainage' refers to a displacement process where:",
          options: [
            "The wetting phase saturation is increasing",
            "The non-wetting phase saturation is increasing (e.g., oil displacing water during initial reservoir trap filling)",
            "Rock is heated to 500°F",
            "Permeability drops to zero"
          ],
          correctIndex: 1,
          explanation: "Drainage is the displacement of a wetting phase by a non-wetting phase (such as oil entering a water-wet rock). Imbibition is when wetting phase increases."
        },
        {
          id: "q11_4",
          topic: "Capillary Transition Zone",
          question: "Why is the capillary transition zone much thicker in low-permeability rocks (e.g., chalk, tight siltstone) than in high-permeability sandstones?",
          options: [
            "Because tight rocks have smaller pore throat radii (r), creating much higher capillary entry pressures (Pc = 2*sigma*cos(theta)/r)",
            "Because low-permeability rocks have higher temperatures",
            "Because water has higher density in tight rocks",
            "Because gas cannot dissolve in tight rocks"
          ],
          correctIndex: 0,
          explanation: "Capillary pressure is inversely proportional to pore throat radius r. Small pore throats create large capillary forces that pull water high above the FWL, creating thick transition zones."
        },
        {
          id: "q11_5",
          topic: "Wettability",
          question: "A contact angle theta of 30° measured through the water phase indicates that the solid rock surface is:",
          options: ["Strongly oil-wet", "Strongly water-wet", "Neutral-wet", "Gas-wet"],
          correctIndex: 1,
          explanation: "Contact angles theta < 90° indicate water-wetness; theta < 60° (such as 30°) signifies a strongly water-wet rock."
        },
        {
          id: "q11_6",
          topic: "Relative Permeability",
          question: "At irreducible water saturation (Swirr), the relative permeability to water (krw) is:",
          options: ["1.0", "0.5", "Zero (immobile water phase)", "Infinite"],
          correctIndex: 2,
          explanation: "At Swirr, water is trapped as discontinuous pendular rings or held tightly by capillary forces; it cannot flow, so krw = 0."
        },
        {
          id: "q11_7",
          topic: "Capillary Pressure",
          question: "What laboratory method uses high centrifugal acceleration to drain fluids from core plugs to measure capillary pressure curves?",
          options: ["Centrifuge method", "Mercury Injection Capillary Pressure (MICP)", "Porous plate method", "All of the above"],
          correctIndex: 3,
          explanation: "Centrifuge, MICP (high-pressure mercury intrusion), and the porous plate method are the three primary laboratory SCAL techniques for measuring Pc."
        },
        {
          id: "q11_8",
          topic: "Residual Saturation",
          question: "What is 'Residual Oil Saturation' (Sor)?",
          options: [
            "The oil saturation remaining trapped in isolated pores by capillary forces after extensive waterflooding",
            "The oil produced at surface stock tanks",
            "The initial oil in place",
            "The oil dissolved in gas"
          ],
          correctIndex: 0,
          explanation: "Sor represents residual, disconnected oil droplets trapped by capillary snap-off mechanisms that cannot be displaced by normal viscous waterflooding."
        },
        {
          id: "q11_9",
          topic: "Capillary Number",
          question: "The Capillary Number (N_c = mu * v / sigma) represents the ratio of:",
          options: ["Viscous forces to capillary (interfacial tension) forces", "Gravity forces to friction forces", "Permeability to porosity", "Gas rate to oil rate"],
          correctIndex: 0,
          explanation: "Capillary number N_c = (mu * v) / sigma balances viscous forces (driving flow) against capillary forces (trapping oil). Increasing N_c by 10^3 to 10^4 (via surfactant EOR) mobilizes residual oil."
        },
        {
          id: "q11_10",
          topic: "Wettability",
          question: "The Amott-Harvey wettability index ranges from:",
          options: ["0 to 100", "-1.0 (strongly oil-wet) to +1.0 (strongly water-wet)", "1 to 10 Darcy", "-50 to +50 psi"],
          correctIndex: 1,
          explanation: "The Amott-Harvey index ranges from -1.0 (purely oil-wet) through 0 (intermediate/neutral wet) to +1.0 (purely water-wet)."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc11_1",
          title: "Capillary Height Above Free Water Level Calculation",
          scenario: "An oil reservoir has an oil density rho_o = 0.82 g/cm³ and formation brine density rho_w = 1.05 g/cm³. At a certain depth in the reservoir, the measured capillary pressure from mercury injection (converted to reservoir conditions) is Pc = 5.2 psi.",
          formula: "Delta_rho = rho_w - rho_o (in g/cm3); Grad_diff = 0.433 * Delta_rho (psi/ft); h = P_c / Grad_diff",
          givenData: {
            "rho_w (g/cm3)": 1.05,
            "rho_o (g/cm3)": 0.82,
            "Pc (psi)": 5.2
          },
          questionText: "Calculate: 1) The fluid gradient difference in psi/ft, and 2) The vertical height (h) above the Free Water Level (FWL) in feet.",
          solutionSteps: [
            "Step 1: Calculate density difference Delta_rho = 1.05 - 0.82 = 0.23 g/cm³",
            "Step 2: Gradient difference Grad_diff = 0.433 * 0.23 = 0.09959 psi/ft",
            "Step 3: Height above FWL h = Pc / Grad_diff = 5.2 / 0.09959 = 52.21 ft"
          ],
          finalAnswer: "Gradient difference = 0.100 psi/ft, Height = 52.2 ft above FWL",
          inputUnit: "ft",
          expectedNumber: 52.2,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int11_1",
        question: "What is the difference between the Free Water Level (FWL) and the Oil-Water Contact (OWC)? Can they be at different depths?",
        whyAsked: "A critical petrophysical and reservoir question to see if you understand capillary pressure in transition zones.",
        modelAnswer: "Yes, they are at different depths in almost every real reservoir.\n1. Free Water Level (FWL): This is a zero-capillary pressure reference plane ($P_c = P_o - P_w = 0$). At FWL, water saturation $S_w = 100\\%$ and water phase pressure exactly equals hydrocarbon phase pressure. It is identified mathematically from wireline formation tester (MDT) pressure gradient intersections.\n2. Oil-Water Contact (OWC): This is the lowest depth in the rock at which hydrocarbons are first detected or can be produced. Because rocks have finite pore throat sizes, a threshold capillary entry pressure ($P_{ce}$) must be overcome before oil can displace water and enter the pores: $h_{OWC} - h_{FWL} = P_{ce} / (\\Delta \\rho \\cdot 0.433)$. Therefore, the OWC is always higher than the FWL. In high-permeability coarse sandstones, the entry pressure is small, so OWC is just 1 to 3 feet above FWL. In low-permeability fine sands or carbonates, the entry pressure is high, so OWC can be 20 to 50+ feet above the FWL.",
        keyPoints: [
          "FWL: $P_c = 0$, determined from MDT pressure gradient intersections.",
          "OWC: Lowest depth where hydrocarbon is present; requires overcoming capillary entry pressure $P_{ce}$.",
          "OWC is always structurally higher than FWL ($h = P_{ce} / \\Delta \\gamma$)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 Petrophysics / SCAL Skill Keywords",
      instructions: [
        "Add core SCAL terms to your profile and resume notes: 'Special Core Analysis (SCAL)', 'Relative Permeability (kr)', 'Capillary Pressure (Pc) & Wettability'.",
        "Search for 'Petrophysicist' or 'Formation Evaluation Engineer' roles at SLB or Baker Hughes to note their hiring criteria."
      ],
      deliverable: "SCAL keywords logged and verified against 2 live job descriptions."
    }
  },

  // DAY 12
  {
    dayNumber: 12,
    phaseId: 1,
    weekNumber: 2,
    title: "Reservoir Fluid Flow Regimes: Transient vs Steady-State",
    category: "reservoir",
    categoryLabel: "Diffusivity & Regimes",
    todayGoal: "Master the diffusivity equation, transient (infinite-acting) radial flow, pseudo-steady-state flow, and radius of investigation.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Understanding how pressure disturbances propagate through the reservoir over time is the heart of Pressure Transient Analysis (Well Testing). We transition from steady-state (constant boundary pressure) to transient flow (infinite-acting radial flow where boundaries are not yet felt) and pseudo-steady-state flow (closed bounded reservoir where pressure drops uniformly everywhere).",
      keyPoints: [
        "Diffusivity Equation: (1/r) * d/dr (r * dP/dr) = (phi * mu * c_t / k) * dP/dt. Combines Darcy's Law + Law of Conservation of Mass + Equation of State.",
        "Hydraulic Diffusivity Constant (eta): eta = k / (phi * mu * c_t). Measures the speed at which a pressure pulse travels through the reservoir rock.",
        "Radius of Investigation (r_inv): Distance a pressure transient has propagated into the reservoir at time t: r_inv = sqrt[(k * t) / (948 * phi * mu * c_t)], with r_inv in ft and t in hours.",
        "Transient Flow (IARF): Well behaves as if draining an infinite reservoir. Pressure drawdown is linear with log of time: P_wf(t) = P_i - m * [log(t) + ...]. This forms the foundation of Horner well test interpretation.",
        "Pseudo-Steady-State (PSS): Boundaries are felt; pressure drops at constant rate dP/dt = constant = -q / (c_t * V_pore)."
      ],
      coreFormulas: [
        {
          name: "Radius of Investigation",
          formula: "r_inv = sqrt[(k * t) / (948 * phi * mu * c_t)]",
          explanation: "Field units: k in mD, t in hours, phi fraction, mu in cp, c_t in psi^-1, r_inv in ft."
        },
        {
          name: "Transient Drawdown Equation (Line Source)",
          formula: "P_wf(t) = P_i - [162.6 * q * mu * B / (k * h)] * [log(t) + log(k / (phi * mu * c_t * r_w^2)) - 3.23 + 0.869 * s]",
          explanation: "Slope m = 162.6 * q * mu * B / (k * h) on semilog plot of Pwf vs log(t)."
        }
      ],
      fieldInsight: "When flowing a well on test, you cannot determine reservoir size or boundary distance during early transient flow. Only after the pressure pulse travels out and reflects off fault boundaries (reaching PSS or boundary-dominated flow) can you estimate drainage area."
    },
    watchRead: {
      textbooks: [
        {
          title: "Pressure Transient Analysis (John Lee)",
          chapterOrSection: "Chapter 1: The Diffusivity Equation & Infinite-Acting Flow",
          note: "Derivation of the line-source solution and Ei(-x) function."
        },
        {
          title: "Well Testing (John Lee, John B. Rollins, John P. Spivey)",
          chapterOrSection: "Chapter 2: Fundamentals of Fluid Flow in Porous Media",
          note: "Study radius of investigation and flow regimes summary."
        }
      ],
      recommendedTopics: [
        "Exponential Integral function Ei(-x) and logarithmic approximation for x < 0.01",
        "Total reservoir compressibility c_t = c_o * S_o + c_w * S_w + c_g * S_g + c_f",
        "Diagnostic log-log derivative plot (Bourdet derivative)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q12_1",
          topic: "Flow Regimes",
          question: "During Infinite-Acting Radial Flow (transient flow), how does bottom-hole flowing pressure (Pwf) decline with time (t) in a constant-rate well?",
          options: ["Linearly with time (t)", "Linearly with the logarithm of time (log t)", "With the square of time (t^2)", "Pressure remains strictly constant"],
          correctIndex: 1,
          explanation: "The logarithmic approximation of the line-source solution proves that Pwf declines linearly with log(t), which produces a straight line on a semilog plot."
        },
        {
          id: "q12_2",
          topic: "Diffusivity",
          question: "The hydraulic diffusivity coefficient eta = k / (phi * mu * c_t) represents:",
          options: ["The speed at which a pressure disturbance propagates through the porous rock", "The total barrels of oil produced", "The skin factor", "The wellbore volume"],
          correctIndex: 0,
          explanation: "Diffusivity eta governs how rapidly pressure changes diffuse through the rock. High permeability and low compressibility result in fast pressure propagation."
        },
        {
          id: "q12_3",
          topic: "Radius of Investigation",
          question: "In the radius of investigation equation r_inv = sqrt[(k*t)/(948*phi*mu*ct)], if flow time (t) increases by a factor of 4, the radius investigated:",
          options: ["Quadruples (4x)", "Doubles (2x)", "Increases 16 times", "Remains unchanged"],
          correctIndex: 1,
          explanation: "Because r_inv is proportional to the square root of time (sqrt(t)), quadrupling time (4x) doubles the investigated radius (sqrt(4) = 2x)."
        },
        {
          id: "q12_4",
          topic: "Flow Regimes",
          question: "In a closed, bounded reservoir producing under Pseudo-Steady-State (PSS) conditions, the rate of pressure decline (dP/dt) is:",
          options: ["Zero", "Constant throughout the reservoir", "Proportional to 1/t", "Infinite"],
          correctIndex: 1,
          explanation: "Under PSS, the boundary is felt and the pressure declines at the exact same constant rate everywhere: dP/dt = -q / (ct * V_pore) = constant."
        },
        {
          id: "q12_5",
          topic: "Total Compressibility",
          question: "Total reservoir compressibility (c_t) in an oil reservoir with connate water and zero free gas is given by:",
          options: ["c_o only", "c_o * S_o + c_w * S_w + c_f", "c_f / c_o", "c_o + c_w + c_g"],
          correctIndex: 1,
          explanation: "c_t is the saturation-weighted sum of all fluid compressibilities plus rock pore volume compressibility: c_t = S_o*c_o + S_w*c_w + c_f."
        },
        {
          id: "q12_6",
          topic: "Semilog Analysis",
          question: "On a semilog plot of flowing bottom-hole pressure (Pwf) versus log(t), the slope 'm' is inversely proportional to which key reservoir property?",
          options: ["Skin factor", "Permeability-thickness product (k * h)", "Wellbore radius", "Drainage radius"],
          correctIndex: 1,
          explanation: "The slope is m = 162.6 * q * mu * B / (k * h). Transmissibility (k*h) is in the denominator; higher permeability yields a flatter slope."
        },
        {
          id: "q12_7",
          topic: "Flow Regimes",
          question: "Steady-State flow condition (dP/dt = 0) occurs in practice when:",
          options: [
            "A well is shut in permanently",
            "Strong aquifer support or water injection exactly balances reservoir fluid withdrawal",
            "Permeability is zero",
            "The well produces only gas"
          ],
          correctIndex: 1,
          explanation: "Steady-state (dP/dt = 0) requires that pressure at every point remains constant over time, which occurs only when constant pressure boundaries (active aquifer or balanced injection) replenish the reservoir."
        },
        {
          id: "q12_8",
          topic: "Well Testing",
          question: "The Ei function approximation Ei(-x) ~ ln(1.781 * x) is valid when argument x = (phi * mu * c_t * r^2) / (0.00105 * k * t) is:",
          options: ["Greater than 100", "Less than 0.01", "Equal to 1.0", "Negative"],
          correctIndex: 1,
          explanation: "The logarithmic approximation of the exponential integral is mathematically accurate when x < 0.01 (which occurs for r = rw after a very short flow time)."
        },
        {
          id: "q12_9",
          topic: "Radius of Investigation",
          question: "If reservoir permeability is very low (e.g., 0.1 mD in tight gas), the pressure disturbance will:",
          options: ["Travel much slower, requiring weeks or months of testing to investigate significant distance", "Travel instantly to the outer boundary", "Never move", "Reverse direction"],
          correctIndex: 0,
          explanation: "Because r_inv is proportional to sqrt(k), tight formations have very slow pressure propagation speeds, requiring extended test durations to detect boundaries."
        },
        {
          id: "q12_10",
          topic: "Wellbore Storage",
          question: "At the very early beginning of a well test, fluid production comes from expansion/unloading of fluid inside the wellbore casing rather than from the reservoir. This effect is known as:",
          options: ["Wellbore storage (afterflow)", "Skin damage", "Horner effect", "Forchheimer turbulence"],
          correctIndex: 0,
          explanation: "Wellbore storage occurs when the wellbore itself acts as a capacitor, releasing or storing fluid volume before the reservoir sandface responds."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc12_1",
          title: "Radius of Investigation Calculation",
          scenario: "An exploratory oil well is tested at a constant rate for t = 48 hours. Reservoir properties are: Permeability k = 45 mD, Porosity phi = 0.16, Oil viscosity mu = 1.5 cp, Total compressibility ct = 15 x 10^-6 psi^-1.",
          formula: "r_inv = sqrt[(k * t) / (948 * phi * mu * c_t)]",
          givenData: {
            "Permeability k (mD)": 45,
            "Flow Time t (hours)": 48,
            "Porosity phi": 0.16,
            "Viscosity mu (cp)": 1.5,
            "ct (psi^-1)": 0.000015
          },
          questionText: "Calculate the radius of investigation (r_inv) in feet after 48 hours of flow.",
          solutionSteps: [
            "Step 1: Numerator = k * t = 45 * 48 = 2,160",
            "Step 2: Denominator = 948 * phi * mu * ct",
            "       = 948 * 0.16 * 1.5 * 15e-6",
            "       = 227.52 * 15e-6 = 0.0034128",
            "Step 3: Ratio = 2,160 / 0.0034128 = 632,911.4",
            "Step 4: r_inv = sqrt(632,911.4) = 795.55 ft"
          ],
          finalAnswer: "Radius of Investigation = 796 ft",
          inputUnit: "ft",
          expectedNumber: 796,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int12_1",
        question: "Explain the three main flow regimes in well testing: Early-Time (Wellbore Storage), Middle-Time (Infinite-Acting Radial Flow), and Late-Time (Boundary-Dominated Flow).",
        whyAsked: "A standard question asked by testing specialists and reservoir managers to see if you can interpret well test diagnostic plots.",
        modelAnswer: "When a well is produced or shut in during a well test, the pressure response evolves across three distinct chronological regimes:\n1. Early-Time Region (ETR): Governed by wellbore storage and near-wellbore skin. Fluid expands or decompresses inside the casing string before the reservoir rock responds. On a log-log diagnostic plot of pressure change and Bourdet derivative, wellbore storage displays a unit-slope (slope = 1) line.\n2. Middle-Time Region (MTR): This is Infinite-Acting Radial Flow (IARF). The pressure transient has propagated past the wellbore skin into the undisturbed reservoir, but has not yet encountered any outer boundary. On a semilog plot, pressure is linear with log(t); on the log-log Bourdet derivative plot, it appears as a flat, horizontal line. This regime is used to calculate true reservoir permeability ($k$) and skin factor ($s$).\n3. Late-Time Region (LTR): The pressure pulse reaches the outer reservoir boundaries (faults, pinch-outs, or communicating aquifers). If the boundary is an impermeable sealed fault, the derivative doubles; if closed on all sides, it enters pseudo-steady-state (unit slope on Cartesian plot); if a constant-pressure aquifer is reached, the derivative drops steeply toward zero.",
        keyPoints: [
          "Early-Time: Wellbore storage (unit slope on log-log) & skin.",
          "Middle-Time: Infinite-Acting Radial Flow (IARF; flat horizontal derivative; yields $k$ and $s$).",
          "Late-Time: Boundary effects (faults, channel boundaries, or closed reservoir PSS)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 Well Testing Job Requirements",
      instructions: [
        "Review open listings for 'Well Test Engineer', 'PTA Specialist', or 'Slickline/E-line Operations' at SLB, Weatherford, or Expro.",
        "Note the common software tools used: Ecrin (Saphir), Kappa, PanSystem."
      ],
      deliverable: "Recorded list of industry PTA software and skills to mention on your resume."
    }
  },

  // DAY 13
  {
    dayNumber: 13,
    phaseId: 1,
    weekNumber: 2,
    title: "Productivity Index & Inflow Performance Relationship (IPR)",
    category: "reservoir",
    categoryLabel: "Well Deliverability",
    todayGoal: "Master Productivity Index (PI), Darcy linear IPR, Vogel's empirical IPR for two-phase flow, and well deliverability curves.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Inflow Performance Relationship (IPR) defines the relationship between bottom-hole flowing pressure (P_wf) and surface liquid production rate (q). For single-phase undersaturated oil (P_wf >= P_b), the relationship is a straight line governed by the Productivity Index (PI or J). However, when bottom-hole flowing pressure drops below bubble point (P_wf < P_b), free gas evolves in the reservoir rock, drastically increasing viscosity and reducing oil relative permeability. In 1968, J.V. Vogel developed his classic non-linear empirical equation to model this two-phase inflow behavior.",
      keyPoints: [
        "Productivity Index (PI or J): J = q / (P_r - P_wf) (measured in STB/day/psi). Valid for P_wf >= P_b.",
        "Maximum Flow Rate (AOFP / q_max): The theoretical absolute open-flow potential when bottom-hole flowing pressure P_wf = 0.",
        "Vogel's Non-Linear IPR Equation: q / q_max = 1 - 0.2 * (P_wf / P_r) - 0.8 * (P_wf / P_r)^2. Valid for saturated oil reservoirs (P_r <= P_b).",
        "Composite (Generalized) IPR: When initial P_r > P_b but well is drawn down such that P_wf < P_b. The IPR is linear above P_b and curves downward below P_b according to Vogel's quadratic curve.",
        "Fetkovich IPR: Alternative empirical equation: q = C * (P_r^2 - P_wf^2)^n, widely used for high-drawdown and gas wells."
      ],
      coreFormulas: [
        {
          name: "Vogel's IPR Equation",
          formula: "q_o / q_max = 1 - 0.2 * (P_wf / P_r) - 0.8 * (P_wf / P_r)^2",
          explanation: "For saturated oil reservoirs. Relates flow rate to flowing BHP."
        },
        {
          name: "Vogel's q_max from Test Rate",
          formula: "q_max = q_test / [1 - 0.2 * (P_wftest / P_r) - 0.8 * (P_wftest / P_r)^2]",
          explanation: "Determines absolute maximum well deliverability from a single flow test."
        }
      ],
      fieldInsight: "Never use a straight-line PI to predict production rates when bottom-hole pressure drops below bubble point. If you use a linear PI, you will significantly overestimate production rate at low Pwf, leading to over-sized tubing or artificial lift ESP pumps that pump off and fail."
    },
    watchRead: {
      textbooks: [
        {
          title: "Production Optimization Using NODAL Analysis (H. Dale Beggs)",
          chapterOrSection: "Chapter 2: Reservoir Inflow Performance",
          note: "Study Vogel, Standing, and Fetkovich IPR curves."
        },
        {
          title: "Petroleum Production Engineering (Boyun Guo, William C. Lyons)",
          chapterOrSection: "Chapter 3: Well Inflow Performance",
          note: "Work through composite IPR examples and future IPR predictions."
        }
      ],
      recommendedTopics: [
        "Standing's extension of Vogel for damaged/stimulated wells (Flow Efficiency EF)",
        "Vogel IPR vs Tubing Performance Curve (VLP) intersection point",
        "Gas well deliverability: Rawlins & Schellhardt backpressure equation q = C*(Pr^2 - Pwf^2)^n"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q13_1",
          topic: "IPR",
          question: "Why does the Inflow Performance Relationship (IPR) curve bend downward when flowing pressure (Pwf) drops below the bubble point (Pb)?",
          options: [
            "Because casing collapses under pressure",
            "Because liberated free gas reduces oil relative permeability and increases gas-oil ratio near the wellbore",
            "Because oil turns into paraffin crystals",
            "Because reservoir temperature drops to freezing"
          ],
          correctIndex: 1,
          explanation: "Below Pb, gas boils out of the oil. The gas occupies pore space, lowering relative permeability to oil (kro) and increasing fluid resistance, causing the IPR to curve downward."
        },
        {
          id: "q13_2",
          topic: "Productivity Index",
          question: "A well produces 800 STB/day with an average reservoir pressure Pr = 3,000 psi and flowing BHP Pwf = 2,600 psi (above bubble point). What is the Productivity Index (J)?",
          options: ["0.5 STB/d/psi", "1.0 STB/d/psi", "2.0 STB/d/psi", "4.0 STB/d/psi"],
          correctIndex: 2,
          explanation: "Drawdown Delta P = 3000 - 2600 = 400 psi. PI J = q / Delta P = 800 / 400 = 2.0 STB/day/psi."
        },
        {
          id: "q13_3",
          topic: "Vogel IPR",
          question: "In Vogel's equation q/qmax = 1 - 0.2*(Pwf/Pr) - 0.8*(Pwf/Pr)^2, if flowing BHP Pwf is drawn down to zero (Pwf = 0), what is q / qmax?",
          options: ["0", "0.5", "0.8", "1.0 (Maximum potential flow rate)"],
          correctIndex: 3,
          explanation: "Plugging in Pwf = 0 yields q / qmax = 1 - 0 - 0 = 1.0, representing the Absolute Open Flow Potential (AOFP or qmax)."
        },
        {
          id: "q13_4",
          topic: "Vogel IPR",
          question: "If Pwf = Pr (zero drawdown), what is the production rate according to Vogel's equation?",
          options: ["q = qmax", "q = 0", "q = 0.5 * qmax", "q is undefined"],
          correctIndex: 1,
          explanation: "Plugging in Pwf = Pr yields (Pwf/Pr) = 1.0; q/qmax = 1 - 0.2*(1) - 0.8*(1)^2 = 1 - 0.2 - 0.8 = 0."
        },
        {
          id: "q13_5",
          topic: "Standing Correlation",
          question: "Standing extended Vogel's equation to account for wellbore damage and stimulation by introducing:",
          options: ["Flow Efficiency (FE)", "API Gravity", "Viscosity index", "Water cut percentage"],
          correctIndex: 0,
          explanation: "Standing introduced Flow Efficiency FE = (Pr - Pwf - Delta P_skin) / (Pr - Pwf) to modify Vogel's curve for skin factor s."
        },
        {
          id: "q13_6",
          topic: "Well Deliverability",
          question: "The operating point of a producing oil well is defined by the intersection of:",
          options: [
            "Drilling mud weight and casing burst pressure",
            "Inflow Performance Relationship (IPR) and Vertical Lift Performance (VLP / Outflow curve)",
            "Porosity log and resistivity log",
            "Bubble point and dew point"
          ],
          correctIndex: 1,
          explanation: "In Nodal Analysis, the stable operating flow rate and flowing pressure are determined precisely where the reservoir inflow curve (IPR) intersects the tubing intake lift curve (VLP)."
        },
        {
          id: "q13_7",
          topic: "Fetkovich IPR",
          question: "In the Fetkovich deliverability equation q = C * (Pr^2 - Pwf^2)^n, what is the typical physical range for exponent 'n'?",
          options: ["0.5 to 1.0", "1.5 to 3.0", "10 to 20", "Negative 1.0"],
          correctIndex: 0,
          explanation: "The turbulence exponent n ranges from 1.0 (completely laminar Darcy flow) down to 0.5 (fully turbulent non-Darcy flow)."
        },
        {
          id: "q13_8",
          topic: "Composite IPR",
          question: "For a well where reservoir pressure Pr > Pb, but flowing pressure Pwf < Pb, the composite IPR curve is:",
          options: [
            "Straight line for Pwf >= Pb, and curved below Pb using Vogel's relationship",
            "Curved above Pb and straight below Pb",
            "A horizontal flat line",
            "A vertical line"
          ],
          correctIndex: 0,
          explanation: "Above Pb, single-phase oil flows linearly with constant PI. Below Pb, two-phase gas-oil interference causes Vogel quadratic curvature."
        },
        {
          id: "q13_9",
          topic: "IPR",
          question: "If reservoir pressure declines from 3,500 psi to 2,500 psi over several years, how does the IPR curve shift?",
          options: ["Shifts upward and to the right", "Shifts downward and to the left (lower max rate and lower shut-in pressure)", "Remains identical", "Rotates 180 degrees"],
          correctIndex: 1,
          explanation: "As reservoir pressure depletes, the y-intercept (shut-in reservoir pressure) drops and the maximum deliverability (qmax) decreases, shifting the curve downward and to the left."
        },
        {
          id: "q13_10",
          topic: "Productivity Index",
          question: "How does hydraulic fracturing affect a well's Productivity Index (PI)?",
          options: ["Drastically increases PI by reducing near-wellbore flow resistance and creating a negative skin", "Decreases PI", "Has zero effect on PI", "Doubles reservoir pressure"],
          correctIndex: 0,
          explanation: "Hydraulic fracturing creates a highly conductive channel deep into the reservoir (negative skin), drastically increasing the Productivity Index J."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc13_1",
          title: "Vogel's IPR Maximum Deliverability (q_max) & Rate Prediction",
          scenario: "A production well completed in a saturated oil reservoir has an average reservoir pressure Pr = 2,500 psig (Pr = Pb). A production test measures an oil flow rate q_test = 450 STB/day at a flowing bottom-hole pressure Pwf_test = 1,800 psig.",
          formula: "q_max = q_test / [1 - 0.2 * (P_wf / P_r) - 0.8 * (P_wf / P_r)^2]; q_new = q_max * [1 - 0.2 * (P_wf_new / P_r) - 0.8 * (P_wf_new / P_r)^2]",
          givenData: {
            "Pr (psig)": 2500,
            "q_test (STB/day)": 450,
            "Pwf_test (psig)": 1800,
            "Pwf_target (psig)": 1200
          },
          questionText: "Calculate: 1) The maximum potential flow rate (q_max) of the well in STB/day, and 2) The expected production rate if flowing BHP is drawn down to 1,200 psig.",
          solutionSteps: [
            "Step 1: Calculate test pressure ratio: Pwf_test / Pr = 1800 / 2500 = 0.72",
            "Step 2: Calculate denominator for q_max:",
            "       1 - 0.2 * (0.72) - 0.8 * (0.72)^2 = 1 - 0.144 - 0.8 * (0.5184)",
            "       = 1 - 0.144 - 0.41472 = 0.44128",
            "Step 3: Calculate q_max = 450 / 0.44128 = 1,019.76 STB/day (~1,020 STB/day)",
            "Step 4: For Pwf = 1200 psig: ratio = 1200 / 2500 = 0.48",
            "Step 5: Factor at 1200 psig = 1 - 0.2 * (0.48) - 0.8 * (0.48)^2",
            "       = 1 - 0.096 - 0.8 * (0.2304) = 1 - 0.096 - 0.18432 = 0.71968",
            "Step 6: Expected rate q_new = 1,019.76 * 0.71968 = 733.9 STB/day"
          ],
          finalAnswer: "q_max = 1,020 STB/day, Rate at 1,200 psi = 734 STB/day",
          inputUnit: "STB/day",
          expectedNumber: 734,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int13_1",
        question: "Explain what happens during Nodal Analysis when you change tubing diameter from 2-3/8\" to 3-1/2\". Does production always increase?",
        whyAsked: "Tests understanding of multiphase flow dynamics, liquid loading, and nodal intersection points.",
        modelAnswer: "No, production does not always increase when installing larger tubing. In Nodal Analysis, the operating point is the intersection of the reservoir Inflow Performance Relationship (IPR) and the tubing Vertical Lift Performance (VLP).\n1. High-Rate / High-Productivity Wells: In prolific wells with high PI and high flow rates, friction pressure drop dominates. Switching from 2-3/8\" to 3-1/2\" tubing significantly reduces frictional pressure loss ($\\Delta P_{fric} \\propto 1/D^5$), lowering the VLP curve and moving the intersection point to a substantially higher flow rate.\n2. Low-Rate / Depleted Wells: In low-rate or mature wells, hydrostatic pressure (gravity head of the liquid column) dominates over friction. If you install 3-1/2\" tubing in a low-rate well, the in-situ gas velocity drops below the Turner critical velocity ($v_{crit} \\approx 10–15$ ft/s). The gas cannot carry liquid droplets to the surface; liquids fall back and accumulate at the bottom of the well, causing severe liquid loading that increases bottom-hole backpressure and can kill the well completely. Therefore, tubing size must be carefully balanced between friction loss and liquid loading velocity.",
        keyPoints: [
          "Not always an increase; depends on whether friction or hydrostatic head dominates.",
          "High-rate wells: Larger tubing reduces friction $\\Delta P \\propto 1/D^5$, boosting rate.",
          "Low-rate wells: Larger tubing drops gas velocity below Turner critical lifting velocity, causing liquid loading and killing the well."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Week 2 Reservoir Engineering Topics for Tomorrow's Test",
      instructions: [
        "Review your formula sheets for Material Balance, Drive Mechanisms, Rel-Perm/Capillary Pressure, Diffusivity, and Vogel's IPR.",
        "Ensure your calculator is ready for the 40-question Reservoir Milestone Exam tomorrow."
      ],
      deliverable: "Refreshed study summary ready for Day 14's Reservoir Engineering Test."
    }
  },

  // DAY 14
  {
    dayNumber: 14,
    phaseId: 1,
    weekNumber: 2,
    title: "RESERVOIR TEST: Reservoir Engineering Milestone",
    category: "reservoir",
    categoryLabel: "Weekly Exam",
    todayGoal: "Complete the 40-question comprehensive Reservoir Engineering Test, solve technical calculations, and diagnose weak subjects.",
    estimatedTotalMinutes: 130,
    isTestDay: true,
    testId: "week_2_test",
    learn: {
      durationMinutes: 25,
      summary: "Milestone Day. Today is the comprehensive Reservoir Engineering Exam covering Days 8 to 13: Reservoir types, Material Balance Equation (MBE), drive mechanisms, relative permeability, fluid flow regimes, and Vogel's IPR. Every incorrect answer is automatically routed to your Revision Queue.",
      keyPoints: [
        "Exam scope: Material balance, Havlena-Odeh plots, 5 drive mechanisms, SCAL curves, diffusivity equations, radius of investigation, and Vogel IPR deliverability.",
        "Pass benchmark: 80% (32 / 40).",
        "Target outcome: Pinpoint exactly which sub-topic (e.g. MBE, Drive Mechanisms, or IPR) requires revision before Phase 1 Exam."
      ],
      fieldInsight: "Reservoir engineering questions are the centerpiece of technical interviews at operators like ONGC, Cairn, Shell, and ADNOC. An engineer who can talk intelligently about drive mechanisms and IPR curves instantly sets themselves apart from 90% of freshers."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Week 2 Review",
          chapterOrSection: "Days 8–13 Notes & Formula Cards",
          note: "Quickly scan Havlena-Odeh equations, Vogel formula, and radius of investigation."
        }
      ],
      recommendedTopics: [
        "Undersaturated MBE formula",
        "Vogel quadratic equation",
        "Drive mechanism recovery factor comparisons"
      ]
    },
    practice: {
      durationMinutes: 60,
      questionCount: 10,
      questions: [
        {
          id: "w2_t1",
          topic: "Material Balance",
          question: "Which of the following describes an active water drive reservoir's pressure profile?",
          options: [
            "Pressure drops sharply from day one and never recovers",
            "Pressure remains relatively constant or declines very slowly because aquifer water influx replaces produced fluid volume",
            "Pressure increases continuously above discovery pressure",
            "Pressure drops to absolute zero within 6 months"
          ],
          correctIndex: 1,
          explanation: "In an active water drive, aquifer encroachment offsets voidage, maintaining reservoir pressure."
        },
        {
          id: "w2_t2",
          topic: "Vogel IPR",
          question: "Vogel's equation was developed specifically for which type of reservoir condition?",
          options: [
            "Single-phase dry gas reservoirs",
            "Solution-gas drive (saturated) oil reservoirs where flowing bottom-hole pressure is below bubble point",
            "Infinite water-drive reservoirs above bubble point",
            "High-viscosity bitumen reservoirs"
          ],
          correctIndex: 1,
          explanation: "J.V. Vogel ran computerized simulation models specifically for solution gas drive reservoirs producing below bubble point."
        },
        {
          id: "w2_t3",
          topic: "Drive Mechanisms",
          question: "What is the typical oil recovery factor achieved by a strong solution gas drive reservoir without pressure maintenance?",
          options: ["5% to 8%", "15% to 25%", "45% to 60%", "75% to 85%"],
          correctIndex: 1,
          explanation: "Solution gas drive achieves only 15% to 25% primary recovery because gas mobility is high and energy dissipates rapidly."
        },
        {
          id: "w2_t4",
          topic: "Radius of Investigation",
          question: "If reservoir permeability k = 100 mD and flow time t = 100 hours, what is the effect on radius of investigation compared to k = 25 mD and t = 100 hours?",
          options: ["r_inv doubles (2x)", "r_inv quadruples (4x)", "r_inv is halved", "r_inv remains unchanged"],
          correctIndex: 0,
          explanation: "r_inv is proportional to sqrt(k). Since permeability increased 4-fold (100 / 25 = 4), r_inv increases by sqrt(4) = 2x."
        },
        {
          id: "w2_t5",
          topic: "Wettability",
          question: "On a relative permeability curve, a crossover point at water saturation Sw = 40% typically indicates that the rock is:",
          options: ["Water-wet", "Oil-wet", "100% clean quartz", "Unpermeable"],
          correctIndex: 1,
          explanation: "Under Craig's rules, crossover at Sw < 50% (such as 40%) is a standard indicator of an oil-wet rock."
        },
        {
          id: "w2_t6",
          topic: "Material Balance",
          question: "In Havlena and Odeh's straight-line MBE, plotting F vs E_o for an undersaturated reservoir without water influx yields a straight line with slope equal to:",
          options: ["Gas cap size m", "Total Oil In Place N", "Aquifer influx We", "Skin factor s"],
          correctIndex: 1,
          explanation: "For an undersaturated volumetric reservoir, F = N * Eo. Plotting F vs Eo gives a straight line passing through the origin with slope N."
        },
        {
          id: "w2_t7",
          topic: "Well Deliverability",
          question: "If a well has a linear Productivity Index PI = 1.5 STB/d/psi and static reservoir pressure is 3,200 psi, what is its flow rate at Pwf = 2,400 psi?",
          options: ["600 STB/d", "800 STB/d", "1,200 STB/d", "2,400 STB/d"],
          correctIndex: 2,
          explanation: "Drawdown Delta P = 3,200 - 2,400 = 800 psi. q = PI * Delta P = 1.5 * 800 = 1,200 STB/day."
        },
        {
          id: "w2_t8",
          topic: "Capillary Pressure",
          question: "Capillary pressure Pc between oil and water is mathematically expressed as:",
          options: ["Pc = Pw - Po", "Pc = Po - Pw", "Pc = Po * Pw", "Pc = Po / Pw"],
          correctIndex: 1,
          explanation: "Capillary pressure is defined as non-wetting phase pressure minus wetting phase pressure. In a water-wet system, Pc = Po - Pw."
        },
        {
          id: "w2_t9",
          topic: "Diffusivity",
          question: "Which flow regime immediately follows wellbore storage and precedes boundary effects in a drawdown well test?",
          options: ["Infinite-Acting Radial Flow (IARF)", "Pseudo-steady-state flow", "Late-time linear flow", "Steady-state flow"],
          correctIndex: 0,
          explanation: "Infinite-Acting Radial Flow (IARF) is the middle-time regime where the reservoir behaves infinitely and the derivative is flat."
        },
        {
          id: "w2_t10",
          topic: "Drive Mechanisms",
          question: "Why is water coning more severe in thick reservoirs with high vertical permeability (kv/kh ~ 1)?",
          options: [
            "Because water cannot move vertically",
            "Because high vertical permeability provides an easy low-resistance path for bottom water to cone upward into perforations",
            "Because oil turns into ice",
            "Because gas cap disappears"
          ],
          correctIndex: 1,
          explanation: "High kv/kh allows water to easily overcome gravity and cone vertically upward directly into perforations under dynamic drawdown."
        }
      ]
    },
    calculation: {
      durationMinutes: 25,
      problemCount: 1,
      problems: [
        {
          id: "calc14_1",
          title: "Comprehensive Reservoir Milestone Calculation: IPR & Recovery",
          scenario: "An oil reservoir has initial STOIIP N = 30 MMSTB and initial Boi = 1.25 bbl/STB. It has produced 3.6 MMSTB under solution gas drive down to bubble point Pb = 2,400 psig. At Pb, a well in this field produces 400 STB/day at a flowing bottom-hole pressure Pwf = 1,800 psig.",
          formula: "RF_current = N_p / N; q_max = q_test / [1 - 0.2*(P_wf/P_b) - 0.8*(P_wf/P_b)^2]",
          givenData: {
            "STOIIP N (MMSTB)": 30.0,
            "Cumulative produced Np (MMSTB)": 3.6,
            "Pb (psig)": 2400,
            "q_test (STB/d)": 400,
            "Pwf_test (psig)": 1800
          },
          questionText: "Calculate: 1) Current recovery factor (RF) as a percentage, 2) The well's maximum open-flow potential (q_max) using Vogel's equation.",
          solutionSteps: [
            "Step 1: Recovery Factor RF = (Np / N) * 100 = (3.6 / 30.0) * 100 = 12.0%",
            "Step 2: Pressure ratio Pwf / Pb = 1800 / 2400 = 0.75",
            "Step 3: Vogel denominator = 1 - 0.2*(0.75) - 0.8*(0.75)^2",
            "       = 1 - 0.15 - 0.8*(0.5625) = 1 - 0.15 - 0.45 = 0.40",
            "Step 4: q_max = q_test / 0.40 = 400 / 0.40 = 1,000 STB/day"
          ],
          finalAnswer: "Current Recovery = 12.0%, q_max = 1,000 STB/day",
          inputUnit: "STB/day",
          expectedNumber: 1000,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int14_1",
        question: "How do you defend your reservoir engineering analysis if management wants to increase production targets but your model shows water coning will occur?",
        whyAsked: "Tests engineering integrity, communication under executive pressure, and technical risk management.",
        modelAnswer: "I present a structured, data-driven business case that balances short-term volume against long-term asset value:\n1. Technical Evidence: I show the analytical coning calculation (e.g., Chaperon or Meyer-Gardner critical rate) alongside current water-cut trends and RFT/MDT fluid contact data. I demonstrate clearly that exceeding the critical rate of, say, 800 bbl/day to produce 1,200 bbl/day creates a dynamic drawdown that exceeds the hydrostatic head of the oil column, pulling bottom water directly into the perforated interval.\n2. Economic Consequence: I show the cost of premature breakthrough: once water cones, oil relative permeability plummets, water cut can jump to 90%+ within weeks, oil production drops below even the baseline rate, and the company incurs massive surface water handling, treatment, and artificial lift costs.\n3. Constructive Alternative Solutions: Rather than simply saying 'no', I offer engineering solutions: 1) Drill a horizontal well or recomplete updip to distribute drawdown over a larger contact area, 2) Install downhole Autonomous Inflow Control Devices (AICDs) to choke water influx, or 3) Optimize other offset wells that have higher standoff from the OWC.",
        keyPoints: [
          "Present clear physics: dynamic drawdown vs gravity head (critical rate).",
          "Demonstrate financial loss: high water cut strangles oil rate and increases surface treating costs.",
          "Provide constructive engineering alternatives: horizontal wells, AICDs, recompletions."
        ]
      }
    },
    career: {
      durationMinutes: 15,
      actionTitle: "Update 'Things I Forgot' with Week 2 Results",
      instructions: [
        "Audit every incorrect question from today's 40-question Reservoir Test.",
        "Add any weak topics (e.g. Vogel IPR, Radius of Investigation, MBE) into your Revision Queue.",
        "Celebrate completing 14 days (over 15% of your 90-day mission)!"
      ],
      deliverable: "Populated Week 2 Revision Queue and updated milestone tracker."
    }
  }
];
