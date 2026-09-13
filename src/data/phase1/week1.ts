import { DayPlan } from '../../types';

export const WEEK_1_DAYS: DayPlan[] = [
  // DAY 1
  {
    dayNumber: 1,
    phaseId: 1,
    weekNumber: 1,
    title: "Petroleum Industry Overview & Life Cycle",
    category: "fundamentals",
    categoryLabel: "Fundamentals",
    todayGoal: "Re-master the upstream-to-downstream value chain, oil & gas lifecycle stages, and basic reservoir fluid classifications.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "The petroleum industry operates across three distinct sectors: Upstream (Exploration & Production - E&P), Midstream (Transportation, Gathering, Pipeline, LNG), and Downstream (Refining, Petrochemicals, Retail Marketing). As a Petroleum Engineer, your primary domain is Upstream, governing the asset lifecycle from initial seismic exploration and wildcat drilling through reservoir appraisal, field development, production operations, workovers, and eventual abandonment (P&A).",
      keyPoints: [
        "Upstream value chain: Seismic Survey → Exploratory/Wildcat Well → Appraisal Wells → FDP (Field Development Plan) → Drilling/Completions → Primary/Secondary/Tertiary Production → P&A (Plugging and Abandonment).",
        "Hydrocarbon classification by phase envelope: Black Oil, Volatile Oil, Retrograde Condensate, Wet Gas, Dry Gas.",
        "Reservoir rock prerequisites: Porosity (storage capacity) and Permeability (flow capacity), sealed by an impermeable caprock/seal (shale, evaporites/salt).",
        "Trap types: Structural traps (anticlines, fault traps, salt domes) vs. Stratigraphic traps (pinch-outs, unconformities, reef buildups)."
      ],
      coreFormulas: [
        {
          name: "API Gravity",
          formula: "API = (141.5 / SG) - 131.5",
          explanation: "Inversely related to Specific Gravity (SG at 60°F/60°F water). Light crude > 31.1° API; Heavy crude < 22.3° API."
        }
      ],
      fieldInsight: "In junior interviews at service companies (SLB, Baker Hughes) or operators (ONGC, Cairn), you will frequently be asked: 'Walk me through the lifecycle of an oilfield from discovery to abandonment.' Always emphasize economics: cash flow is negative during exploration and drilling, turning positive only when first oil reaches surface facilities."
    },
    watchRead: {
      textbooks: [
        {
          title: "Petroleum Engineering: Principles and Practice",
          chapterOrSection: "Chapter 1: The Upstream Oil & Gas Industry",
          note: "Review life cycle stages, risk profiles, and basic hydrocarbon chemistry."
        },
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 1: Introduction to Reservoir Engineering",
          note: "Read classification of reservoir fluids based on phase envelopes."
        }
      ],
      recommendedTopics: [
        "Phase diagram of hydrocarbon systems (P-T envelopes and critical point)",
        "Major petroleum traps: Anticline vs Fault Block vs Pinchout",
        "Upstream Capex vs Opex breakdown"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q1_1",
          topic: "Industry Overview",
          question: "Which of the following activities is classified under the MIDSTREAM sector of the oil and gas industry?",
          options: ["Wildcat exploratory drilling", "Crude oil pipeline transmission & LNG transport", "Fractional distillation in refineries", "Reservoir pressure maintenance by water injection"],
          correctIndex: 1,
          explanation: "Midstream bridges production and refining, covering oil & gas gathering pipelines, long-distance transmission lines, LNG liquefaction/transport, and storage terminals."
        },
        {
          id: "q1_2",
          topic: "Reservoir Fluids",
          question: "In a retrograde gas-condensate reservoir, what happens when reservoir pressure drops below the dew point pressure during production?",
          options: ["Gas vaporizes into supercritical steam", "Liquid hydrocarbons condense out in the reservoir pores", "The reservoir immediately transitions into a dry gas phase", "Permeability to gas increases dramatically"],
          correctIndex: 1,
          explanation: "In retrograde condensation, isothermally decreasing pressure below the dew point causes liquid to condense out of the gas. This dropped-out liquid often becomes trapped as immobile liquid saturation, causing condensate banking."
        },
        {
          id: "q1_3",
          topic: "Fluid Properties",
          question: "A crude oil sample has a specific gravity of 0.85 (relative to water). What is its approximate API gravity?",
          options: ["28.5° API", "35.0° API", "15.0° API", "42.3° API"],
          correctIndex: 1,
          explanation: "API = (141.5 / 0.85) - 131.5 = 166.47 - 131.5 = 34.97° API (~35.0° API, classifying it as a light-to-medium sweet crude)."
        },
        {
          id: "q1_4",
          topic: "Geology & Traps",
          question: "Which rock type commonly acts as the most effective reservoir seal / caprock in conventional petroleum systems?",
          options: ["Coarse sandstone", "Unfractured shale or thick halite (salt)", "Fractured limestone", "Conglomerate"],
          correctIndex: 1,
          explanation: "Shales and evaporites (salt/anhydrite) have extremely low permeabilities and high capillary entry pressures, preventing oil and gas from migrating vertically out of the reservoir trap."
        },
        {
          id: "q1_5",
          topic: "Industry Overview",
          question: "What is the primary difference between an 'Appraisal well' and a 'Development well'?",
          options: [
            "Appraisal wells are drilled solely to produce maximum barrels immediately",
            "Appraisal wells delineate reservoir boundaries and fluid contacts after discovery, whereas development wells are drilled for planned long-term drainage",
            "Development wells are drilled before seismic surveys are run",
            "Appraisal wells are only drilled offshore"
          ],
          correctIndex: 1,
          explanation: "After an exploration discovery, appraisal wells assess the reservoir dimensions, fluid contacts (OWC, GOC), and commercial viability to formulate the Field Development Plan (FDP)."
        },
        {
          id: "q1_6",
          topic: "Reservoir Fluids",
          question: "A black oil reservoir is characterized by which of the following initial conditions?",
          options: [
            "Reservoir temperature is significantly higher than the critical temperature",
            "Reservoir temperature is well below the critical temperature of the fluid mixture",
            "Initial GOR is typically greater than 50,000 scf/STB",
            "Oil formation volume factor (Bo) is always above 3.5 bbl/STB"
          ],
          correctIndex: 1,
          explanation: "Black oil reservoirs exist at reservoir temperatures substantially lower than the fluid mixture's critical temperature (Tc), with initial GOR generally under 2,000 scf/STB and Bo < 2.0 bbl/STB."
        },
        {
          id: "q1_7",
          topic: "Drilling & Production",
          question: "What does 'P&A' stand for at the conclusion of an oil or gas well's economic lifecycle?",
          options: ["Production & Appraisal", "Plug & Abandonment", "Pressure & Allocation", "Perforation & Acidizing"],
          correctIndex: 1,
          explanation: "Plugging and Abandonment (P&A) involves setting cement plugs and mechanical barriers inside the casing and open hole to permanently isolate all hydrocarbon and freshwater zones."
        },
        {
          id: "q1_8",
          topic: "Fluid Properties",
          question: "Crude oil with an API gravity of 18° API is classified as:",
          options: ["Light crude", "Medium crude", "Heavy crude", "Condensate"],
          correctIndex: 2,
          explanation: "Under standard industry classification, crude oils with API gravity less than 22.3° API are considered heavy crude oils."
        },
        {
          id: "q1_9",
          topic: "Geology & Traps",
          question: "An anticline trap is classified as which category of petroleum trap?",
          options: ["Stratigraphic trap", "Structural trap", "Hydrodynamic trap", "Diagenetic trap"],
          correctIndex: 1,
          explanation: "Anticlines and fault-bounded closures are structural traps formed by tectonic deformation and folding of sedimentary rock strata."
        },
        {
          id: "q1_10",
          topic: "Industry Overview",
          question: "Why is Natural Gas Condensate highly valued by operators and refiners?",
          options: [
            "It has very high viscosity and requires expensive steam heating",
            "It is rich in light liquid hydrocarbons (NGLs/pentanes+) and sells near crude oil benchmark prices with minimal refining",
            "It can only be flared according to environmental standards",
            "It contains over 99% asphalt and bitumens"
          ],
          correctIndex: 1,
          explanation: "Condensate yields valuable light naphtha, kerosene, and petrochemical feedstock, command high market prices, and requires minimal processing compared to heavy sour crude."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc1_1",
          title: "API Gravity & Specific Gravity Calculation",
          scenario: "A production separator at a wellhead collects crude oil with a measured density of 53.0 lb/cu ft at standard conditions (60°F). Water density is 62.4 lb/cu ft.",
          formula: "SG = rho_oil / rho_water; API = (141.5 / SG) - 131.5",
          givenData: {
            "Oil Density (lb/cu ft)": 53.0,
            "Freshwater Density (lb/cu ft)": 62.4
          },
          questionText: "Calculate the specific gravity (SG) and the corresponding API gravity of the produced oil. State whether it is classified as light, medium, or heavy crude.",
          solutionSteps: [
            "Step 1: Calculate Specific Gravity (SG) = 53.0 / 62.4 = 0.8494",
            "Step 2: Calculate API Gravity = (141.5 / 0.8494) - 131.5",
            "Step 3: API = 166.59 - 131.5 = 35.09° API",
            "Step 4: Classification: Since 35.09° API > 31.1° API, it is classified as Light Crude Oil."
          ],
          finalAnswer: "SG = 0.849, API = 35.1° API (Light Crude)",
          inputUnit: "°API",
          expectedNumber: 35.1,
          tolerance: 0.3
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int1_1",
        question: "How would you explain the difference between a conventional and an unconventional reservoir to a non-technical manager?",
        whyAsked: "Tests your ability to simplify core concepts, explain permeability constraints, and demonstrate awareness of hydraulic fracturing vs conventional gravity-drainage production.",
        modelAnswer: "In a conventional reservoir, hydrocarbons have naturally migrated from organic-rich source rocks into highly porous and permeable reservoir rock (like sandstone or limestone) and are trapped under an impermeable caprock. Fluid flows freely into the wellbore due to natural buoyancy and rock permeability. In contrast, in an unconventional reservoir (such as shale gas or tight oil), the hydrocarbons remain trapped directly inside the ultra-low-permeability source rock (nanodarcy range). The rock has storage capacity but practically zero natural flow capacity. To produce from an unconventional reservoir, we must engineer permeability by drilling horizontal wells and performing massive multistage hydraulic fracturing to create synthetic flow pathways.",
        keyPoints: [
          "Permeability contrast: millidarcies (conventional) vs micro/nanodarcies (unconventional).",
          "Migration: Conventional has migrated into a trap; unconventional is often self-sourced (source is the reservoir).",
          "Completion requirement: Conventional can produce with simple vertical/slanted perforations; unconventional requires horizontal drilling + multi-stage hydraulic fracturing."
        ],
        followUps: [
          "What is the typical permeability cutoff between conventional and tight gas?",
          "Why do unconventional wells exhibit steep initial decline rates?"
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Target Company Mapping & Baseline Resume Audit",
      instructions: [
        "Open a dedicated notebook or doc for your 90-day journey.",
        "List 10 target upstream companies operating in your region or internationally (e.g. SLB, Halliburton, Baker Hughes, Weatherford, ONGC, Cairn Oil & Gas, Reliance E&P, Shell, ExxonMobil, ADNOC).",
        "Note your current graduation date (MIT Pune) and highlight 3 core subjects you took that you need to refresh immediately."
      ],
      deliverable: "10-company target sheet with current hiring hubs and your initial 90-day commitment statement."
    }
  },

  // DAY 2
  {
    dayNumber: 2,
    phaseId: 1,
    weekNumber: 1,
    title: "Porosity, Permeability & Saturation",
    category: "fundamentals",
    categoryLabel: "Rock Properties",
    todayGoal: "Master core petrophysical parameters: total vs effective porosity, absolute vs effective permeability, and fluid saturations.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Reservoir rock quality is primarily determined by three interrelated properties: Porosity (phi), Permeability (k), and Fluid Saturation (S). Porosity represents the fraction of bulk rock volume occupied by pore spaces. Permeability is the measure of the rock's capacity to transmit fluids through interconnected pore channels. Saturation expresses the fraction of the pore space filled by a specific fluid phase (oil, gas, or water).",
      keyPoints: [
        "Total Porosity (phi_t) vs Effective Porosity (phi_e): Total porosity includes all void spaces (isolated + connected). Effective porosity includes only interconnected pore channels available for fluid storage and flow.",
        "Absolute Permeability (k): Fluid flow capacity when the rock is 100% saturated with a single homogeneous fluid.",
        "Effective Permeability (k_o, k_w, k_g): Flow capacity to a specific phase in the presence of other immiscible fluids (always less than absolute k).",
        "Relative Permeability (k_ro = k_o / k): Dimensionless ratio of effective permeability to a base permeability (usually absolute k).",
        "Fluid Saturation rule: S_w + S_o + S_g = 1.0 (or 100% of pore volume). Irreducible water saturation (S_wirr) is capillary-bound water held in small pores that cannot be displaced by hydrocarbons."
      ],
      coreFormulas: [
        {
          name: "Effective Porosity",
          formula: "phi_e = V_connected_pores / V_bulk",
          explanation: "Dimensionless or percentage. Clean sandstones typically range from 15% to 30%."
        },
        {
          name: "Fluid Saturation",
          formula: "S_i = V_fluid_i / V_pore",
          explanation: "Fraction of pore space occupied by fluid phase i. Sum of all phase saturations equals 1."
        }
      ],
      fieldInsight: "In log evaluation and reservoir modeling, never confuse total porosity with effective porosity. Clay minerals contain bound water within their crystal lattices (clay-bound water). If you use total porosity without correcting for shale volume, you will drastically overestimate recoverable reserves."
    },
    watchRead: {
      textbooks: [
        {
          title: "Fundamentals of Reservoir Engineering (L.P. Dake)",
          chapterOrSection: "Chapter 1: Some Basic Reservoir Engineering Concepts",
          note: "Study rock compressibility, wettability, and relative permeability concepts."
        },
        {
          title: "Petrophysics: Theory and Practice (Djebbar Tiab & Erle C. Donaldson)",
          chapterOrSection: "Chapter 2: Porosity & Permeability",
          note: "Review core analysis measurement techniques (Boyle's law porosimeter, Hassler core holder)."
        }
      ],
      recommendedTopics: [
        "Primary vs Secondary porosity (intergranular vs vuggy/fracture porosity)",
        "Klinkenberg effect (gas slippage at low core pressure)",
        "Hysteresis in relative permeability curves (drainage vs imbibition)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q2_1",
          topic: "Porosity",
          question: "Effective porosity differs from total porosity because effective porosity only accounts for:",
          options: ["Pores containing saline water", "Interconnected pore spaces that contribute to fluid flow", "Pores occupied exclusively by mobile oil", "Pores smaller than 2 microns in diameter"],
          correctIndex: 1,
          explanation: "Total porosity includes both isolated and interconnected pores, whereas effective porosity accounts only for the interconnected pore network through which fluids can migrate."
        },
        {
          id: "q2_2",
          topic: "Permeability",
          question: "When measuring gas permeability in a laboratory core plug, the measured permeability is often higher than the liquid permeability due to which phenomenon?",
          options: ["Jamin effect", "Klinkenberg effect (gas slippage)", "Capillary end effect", "Darcy-Weisbach friction"],
          correctIndex: 1,
          explanation: "The Klinkenberg effect occurs because gas molecules slip along the pore walls when the mean free path of gas molecules is comparable to pore throat size. Extrapolating 1/P to zero yields the true equivalent liquid permeability."
        },
        {
          id: "q2_3",
          topic: "Saturation",
          question: "In an unproduced oil reservoir, if water saturation (Sw) is 25% and no free gas cap is present, what is the initial oil saturation (So)?",
          options: ["25%", "50%", "75%", "100%"],
          correctIndex: 2,
          explanation: "Since Sw + So + Sg = 1.0 and Sg = 0 in an undersaturated oil reservoir, So = 1.0 - 0.25 = 0.75 (or 75%)."
        },
        {
          id: "q2_4",
          topic: "Relative Permeability",
          question: "What is 'Irreducible Water Saturation' (Swirr)?",
          options: [
            "The maximum water saturation before water coning initiates",
            "The minimum water saturation retained in pore capillaries by surface tension forces that cannot be displaced by hydrocarbon migration",
            "The percentage of water produced at surface separators",
            "The amount of water injected during waterflooding"
          ],
          correctIndex: 1,
          explanation: "Swirr (or connate water) is capillary-bound water clinging to grain surfaces and tiny pore throats that hydrocarbons could not displace during initial migration."
        },
        {
          id: "q2_5",
          topic: "Rock Properties",
          question: "Which of the following rock types typically exhibits secondary vuggy or fracture porosity?",
          options: ["Well-sorted quartz sandstone", "Carbonate (limestone / dolomite)", "Unconsolidated river sand", "Laminated siltstone"],
          correctIndex: 1,
          explanation: "Carbonates frequently undergo diagenetic dissolution (creating vugs and caverns) and tectonic fracturing, creating substantial secondary porosity."
        },
        {
          id: "q2_6",
          topic: "Permeability Units",
          question: "1 Darcy is equivalent to approximately how many square micrometers (sq microns)?",
          options: ["0.001 sq um", "0.987 sq um (~1 sq um)", "100 sq um", "987 sq um"],
          correctIndex: 1,
          explanation: "1 Darcy = 0.986923 x 10^-12 m^2 = ~0.987 sq um (often rounded to 1 sq micron in engineering approximations)."
        },
        {
          id: "q2_7",
          topic: "Wettability",
          question: "If a reservoir rock is strongly water-wet, which fluid phase preferentially coats the sand grain surfaces?",
          options: ["Crude oil", "Water", "Natural gas", "Bitumen"],
          correctIndex: 1,
          explanation: "In a water-wet rock, water occupies the smallest pores and coats the solid rock grain surfaces, while oil occupies the centers of the larger pore channels."
        },
        {
          id: "q2_8",
          topic: "Permeability",
          question: "What is the relationship between absolute permeability (k) and effective permeability to oil (ko) in the presence of connate water?",
          options: ["ko is always equal to k", "ko is always greater than k", "ko is always less than k", "ko is independent of fluid saturation"],
          correctIndex: 2,
          explanation: "The presence of a second immiscible phase (water) restricts the available flow pathways for oil, so effective permeability ko is strictly less than absolute permeability k."
        },
        {
          id: "q2_9",
          topic: "Porosity Measurement",
          question: "Which laboratory apparatus uses Boyle's Law (P1*V1 = P2*V2) with helium gas to determine grain volume of a core plug?",
          options: ["Viscometer", "Helium Porosimeter", "Centrifuge", "Dean-Stark apparatus"],
          correctIndex: 1,
          explanation: "A helium porosimeter expands helium at known pressures into a reference cell and sample chamber to measure grain volume, because helium molecules penetrate even minute pore throats without adsorbing."
        },
        {
          id: "q2_10",
          topic: "Saturation Measurement",
          question: "Which laboratory distillation method is standard for directly extracting and measuring water saturation from core samples?",
          options: ["Dean-Stark extraction", "Hydrometer test", "Horner plot", "Mud balance"],
          correctIndex: 0,
          explanation: "The Dean-Stark extraction method uses boiling toluene solvent to vaporize and condense water out of core plugs into a graduated receiving trap to measure Sw directly."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc2_1",
          title: "Core Porosity & Hydrocarbon Pore Volume Calculation",
          scenario: "A cylindrical core plug has a diameter of 1.5 inches and a length of 3.0 inches. Laboratory helium expansion determines the grain volume to be 68.0 cm³. Core analysis yields a connate water saturation (Sw) of 22%.",
          formula: "V_bulk = pi * (d/2)^2 * L; phi = (V_bulk - V_grain) / V_bulk; HCPV = V_pore * (1 - Sw)",
          givenData: {
            "Diameter (in)": 1.5,
            "Length (in)": 3.0,
            "Grain Volume (cm3)": 68.0,
            "Sw": 0.22
          },
          questionText: "Calculate: 1) Bulk volume in cm³ (1 inch = 2.54 cm), 2) Porosity (%), and 3) Hydrocarbon pore volume (HCPV) in cm³.",
          solutionSteps: [
            "Step 1: Convert dimensions: d = 1.5 * 2.54 = 3.81 cm; L = 3.0 * 2.54 = 7.62 cm",
            "Step 2: V_bulk = pi * (3.81 / 2)^2 * 7.62 = 3.1416 * 3.629 * 7.62 = 86.87 cm³",
            "Step 3: Pore Volume = V_bulk - V_grain = 86.87 - 68.0 = 18.87 cm³",
            "Step 4: Porosity phi = 18.87 / 86.87 = 0.2172 or 21.7%",
            "Step 5: HCPV = V_pore * (1 - Sw) = 18.87 * (1 - 0.22) = 18.87 * 0.78 = 14.72 cm³"
          ],
          finalAnswer: "V_bulk = 86.9 cm³, Porosity = 21.7%, HCPV = 14.7 cm³",
          inputUnit: "%",
          expectedNumber: 21.7,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int2_1",
        question: "Can a reservoir rock have high porosity but very low permeability? Give a real-world example.",
        whyAsked: "Tests whether you understand pore throat geometry and connectivity rather than just memorizing definitions.",
        modelAnswer: "Yes, absolutely. Porosity is a static storage measure (void volume over bulk volume), whereas permeability is a dynamic flow capacity governed by pore throat size and interconnectedness. A classic example is chalk or diatomite (such as the Valhall or Ekofisk chalks in the North Sea), which can exhibit porosities as high as 35% to 45%, but permeabilities of only 1 to 5 millidarcies because the pore throats between coccolith fragments are sub-micron in size. Another common example is un-fractured shale, which can have 8% to 15% porosity but nanodarcy permeability because the pores are isolated and capillary forces prevent fluid transmission without hydraulic stimulation.",
        keyPoints: [
          "Porosity is void capacity; permeability depends on pore throat radius ($k \\propto r^2$).",
          "Real-world examples: Chalk formations (Ekofisk: high $\\phi$, low $k$), shales, pumice/scoria.",
          "Engineering impact: High STOIIP in place, but requires massive stimulation or horizontal wells to produce economically."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "LinkedIn Headline & Professional Summary Refresh",
      instructions: [
        "Update your LinkedIn headline from 'Ex-Student' or 'Seeking Opportunities' to a professional engineering brand: 'Petroleum Engineer | Production & Reservoir Analysis | MIT Pune Alumnus'.",
        "Add core keywords: Reservoir Characterization, Well Performance, Well Logging, Petrophysics, SPE Member."
      ],
      deliverable: "Refined LinkedIn headline and updated technical skills section with 10 core petroleum tags."
    }
  },

  // DAY 3
  {
    dayNumber: 3,
    phaseId: 1,
    weekNumber: 1,
    title: "Darcy's Law & Fluid Flow Through Porous Media",
    category: "fundamentals",
    categoryLabel: "Fluid Flow",
    todayGoal: "Master Henry Darcy's empirical law for linear and radial flow, field conversion units, and pressure gradient fundamentals.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Darcy's Law (1856) is the fundamental equation governing laminar fluid flow through porous media. In petroleum reservoir engineering, we adapt Darcy's law for both linear laboratory core flow and radial flow toward a cylindrical wellbore. Understanding the field unit conversions (converting darcies to millidarcies, cp, psi, and barrels/day) is an essential skill tested in every technical interview.",
      keyPoints: [
        "Darcy's Law (Linear Form, Darcy Units): q = (k * A / mu) * (dP / dL).",
        "Field Units (Oil flow in bbl/day): q_o = 0.001127 * (k * A / (mu_o * B_o)) * (Delta_P / L), where k is in mD, A in ft^2, Delta_P in psi, L in ft, mu_o in cp, and B_o in bbl/STB.",
        "Radial Steady-State Flow (Wellbore geometry): q = [0.00708 * k * h * (P_e - P_wf)] / [mu * B * ln(r_e / r_w)].",
        "Assumptions of Darcy's Law: Laminar flow (Reynolds number < 1), 100% single-phase saturation, non-reactive Newtonian fluid, homogeneous and isotropic medium, no rock-fluid chemical interaction.",
        "When Darcy's law fails: High-velocity gas flow near wellbore (turbulence / Forchheimer non-Darcy flow), non-Newtonian heavy oils, and multi-phase interference."
      ],
      coreFormulas: [
        {
          name: "Steady-State Radial Flow",
          formula: "q_o = (0.00708 * k * h * (P_e - P_wf)) / (mu_o * B_o * ln(r_e / r_w))",
          explanation: "Field units: q_o in STB/day, k in mD, h in ft, pressures in psi, mu in cp, B_o in bbl/STB, radii in ft."
        },
        {
          name: "Field Unit Conversion Factor",
          formula: "1 Darcy = 1000 mD; Darcy constant in field units = 1.127 x 10^-3 bbl-cp / (day-ft-psi)",
          explanation: "Derived by reconciling metric darcy units with petroleum field units."
        }
      ],
      fieldInsight: "When calculating production rates in gas wells, never use the liquid Darcy equation directly. High flow velocities near the wellbore cause inertial pressure losses described by the Forchheimer equation: -dP/dL = (mu/k)*v + beta*rho*v^2, where beta is the non-Darcy turbulence coefficient."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 6: Fluid Flow in Reservoirs",
          note: "Derivation of radial steady-state, pseudo-steady-state, and transient diffusivity equations."
        },
        {
          title: "Reservoir Engineering Handbook (Tarek Ahmed)",
          chapterOrSection: "Chapter 6: Fundamentals of Fluid Flow",
          note: "Review flow regimes, boundaries, and skin factor definitions."
        }
      ],
      recommendedTopics: [
        "Diffusivity equation derivation from Darcy + Continuity + Real Gas Law",
        "Skin factor 's' impact on wellbore pressure drop: Delta P_skin = 141.2 * q * mu * B / (k * h) * s",
        "Turbulent non-Darcy flow coefficient beta"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q3_1",
          topic: "Darcy's Law",
          question: "Which of the following is an explicit assumption required for the classical validity of Darcy's Law?",
          options: ["Turbulent flow with Reynolds number > 4000", "Laminar (viscous) fluid flow through porous channels", "Multiphase emulsion with foam", "Fluid velocity increases with square of pressure drop"],
          correctIndex: 1,
          explanation: "Darcy's Law is valid strictly for laminar (creeping) flow where viscous shear forces dominate over inertial forces (typically Reynolds number < 1 in porous media)."
        },
        {
          id: "q3_2",
          topic: "Radial Flow",
          question: "In the radial steady-state Darcy equation for an oil well, if the drainage radius (re) increases while all other parameters remain constant, the production rate (q):",
          options: ["Increases linearly", "Decreases logarithmically due to ln(re/rw)", "Decreases with square of radius", "Remains exactly identical"],
          correctIndex: 1,
          explanation: "The denominator contains ln(re/rw). As re increases, ln(re/rw) increases, which decreases the flow rate q logarithmically."
        },
        {
          id: "q3_3",
          topic: "Skin Factor",
          question: "A well has a positive skin factor (s = +7). What does this indicate about the near-wellbore formation?",
          options: ["The well has been successfully acid stimulated", "The near-wellbore zone is damaged (e.g., mud filtrate invasion, scale, perforation plugging)", "Permeability around the wellbore is higher than virgin reservoir permeability", "The well produces zero water"],
          correctIndex: 1,
          explanation: "A positive skin factor (s > 0) indicates near-wellbore formation damage, causing an extra pressure drop. A negative skin (s < 0) indicates stimulation (hydraulic fracturing or matrix acidizing)."
        },
        {
          id: "q3_4",
          topic: "Field Units",
          question: "In the field-units radial flow equation, what is the numerical constant in the numerator: q = [Constant * k * h * Delta P] / [mu * B * ln(re/rw)]?",
          options: ["0.00708", "1.127", "141.2", "0.052"],
          correctIndex: 0,
          explanation: "The conversion constant for radial oil flow in STB/day with k in mD and h in ft is 0.00708 (which is 2 * pi * 0.001127)."
        },
        {
          id: "q3_5",
          topic: "Non-Darcy Flow",
          question: "Which equation accounts for non-Darcy turbulent pressure drop at high flow velocities?",
          options: ["Vogel's equation", "Forchheimer equation", "Archie's equation", "Clapeyron equation"],
          correctIndex: 1,
          explanation: "The Forchheimer equation adds a second-order inertial term: -dP/dL = (mu/k)*v + beta*rho*v^2 to capture high-velocity turbulence, especially critical in gas wells."
        },
        {
          id: "q6_6",
          topic: "Compressibility",
          question: "The isothermal compressibility of undersaturated crude oil is typically in the order of magnitude of:",
          options: ["10^-1 psi^-1", "10^-3 psi^-1", "10^-5 to 10^-6 psi^-1", "10^-9 psi^-1"],
          correctIndex: 2,
          explanation: "Liquid crude oils are relatively incompressible; their isothermal compressibility c_o typically ranges between 5 x 10^-6 and 25 x 10^-6 psi^-1."
        },
        {
          id: "q3_7",
          topic: "Wellbore Geometry",
          question: "If a wellbore radius (rw) is enlarged by under-reaming or hydraulic fracturing, how does it affect flow efficiency?",
          options: ["Decreases inflow because of friction", "Reduces ln(re/rw), thereby reducing pressure drop and increasing inflow", "Has zero impact on deliverability", "Shuts off all hydrocarbon flow"],
          correctIndex: 1,
          explanation: "Increasing effective wellbore radius rw decreases ln(re/rw), reducing the near-wellbore converging flow resistance and boosting deliverability (equivalent to a negative skin)."
        },
        {
          id: "q3_8",
          topic: "Units",
          question: "1 cp (centipoise) is equal to how many Pa*s (Pascal-seconds)?",
          options: ["1.0 Pa*s", "0.001 Pa*s (10^-3 Pa*s)", "100 Pa*s", "0.052 Pa*s"],
          correctIndex: 1,
          explanation: "1 Poise = 0.1 Pa*s, therefore 1 centipoise (cp) = 10^-3 Pa*s = 0.001 Pa*s. Pure water at 20°C has a viscosity of ~1 cp."
        },
        {
          id: "q3_9",
          topic: "Flow Regimes",
          question: "In reservoir engineering, what characterizes 'Pseudo-Steady-State' (PSS) flow in a closed, bounded reservoir?",
          options: [
            "Pressure waves have not yet reached the outer reservoir boundary",
            "The reservoir boundary has been felt and reservoir pressure declines at a constant rate throughout the drainage area (dP/dt = constant)",
            "The pressure at the outer boundary remains infinitely constant due to infinite aquifer support",
            "Flow velocity equals the speed of sound"
          ],
          correctIndex: 1,
          explanation: "In Pseudo-Steady-State (depletion flow in a closed reservoir), the boundary is reached and pressure declines at the same rate everywhere in the reservoir: dP/dt = constant."
        },
        {
          id: "q3_10",
          topic: "Darcy's Law",
          question: "What is the primary physical driving force behind fluid flow according to Darcy's Law?",
          options: ["Gravitational shear only", "Pressure gradient (potential gradient)", "Capillary suction only", "Thermal convection"],
          correctIndex: 1,
          explanation: "The pressure gradient (or more rigorously, potential gradient dPhi/dL accounting for gravity) drives fluid movement through permeable rock pores."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc3_1",
          title: "Radial Steady-State Well Flow Rate Calculation",
          scenario: "An oil well penetrates a clean sandstone reservoir with the following parameters: Permeability k = 75 mD, Net pay thickness h = 40 ft, Drainage radius re = 1,320 ft, Wellbore radius rw = 0.35 ft, Reservoir pressure Pe = 3,200 psi, Flowing bottom-hole pressure Pwf = 2,400 psi, Oil viscosity mu_o = 1.8 cp, Formation volume factor Bo = 1.25 bbl/STB, Skin factor s = 0.",
          formula: "q_o = [0.00708 * k * h * (P_e - P_wf)] / [mu_o * B_o * ln(r_e / r_w)]",
          givenData: {
            "Permeability k (mD)": 75,
            "Net thickness h (ft)": 40,
            "Pe (psi)": 3200,
            "Pwf (psi)": 2400,
            "Viscosity mu (cp)": 1.8,
            "Bo (bbl/STB)": 1.25,
            "re (ft)": 1320,
            "rw (ft)": 0.35
          },
          questionText: "Calculate the steady-state oil production rate in STB/day.",
          solutionSteps: [
            "Step 1: Calculate Pressure Drawdown Delta P = Pe - Pwf = 3200 - 2400 = 800 psi",
            "Step 2: Calculate logarithmic radius ratio ln(re / rw) = ln(1320 / 0.35) = ln(3771.4) = 8.235",
            "Step 3: Calculate Numerator = 0.00708 * k * h * Delta P = 0.00708 * 75 * 40 * 800 = 17,000",
            "Step 4: Calculate Denominator = mu_o * Bo * ln(re / rw) = 1.8 * 1.25 * 8.235 = 18.529",
            "Step 5: Calculate Flow Rate q_o = 17000 / 18.529 = 917.5 STB/day"
          ],
          finalAnswer: "q_o = 918 STB/day",
          inputUnit: "STB/day",
          expectedNumber: 918,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int3_1",
        question: "Explain the concept of 'Skin Factor' (s). How does a skin of +5 versus -2 affect well drawdown and productivity?",
        whyAsked: "A favorite interview question across drilling, production, and reservoir teams to evaluate whether you understand near-wellbore physics.",
        modelAnswer: "Skin factor (s) is a dimensionless number that quantifies near-wellbore alteration compared to the virgin reservoir permeability. A skin of zero represents an undamaged, unaltered well. A positive skin (e.g., s = +5) indicates near-wellbore damage caused by drilling mud filtrate invasion, clay swelling, perforation debris, or scale. This creates an additional mechanical pressure drop: Delta P_skin = 141.2 * q * mu * B / (k * h) * s. To produce the same flow rate, the well requires a much higher drawdown, which wastes reservoir energy and lowers the Productivity Index. Conversely, a negative skin (e.g., s = -2) indicates stimulation, achieved through matrix acidizing to dissolve minerals or hydraulic fracturing to bypass damage. It reduces near-wellbore resistance, allowing the well to produce higher flow rates at a lower pressure drawdown.",
        keyPoints: [
          "Dimensionless factor representing additional pressure drop $\\Delta P_{skin}$.",
          "$s > 0$: Damage (mud cake invasion, asphalt deposition, partial penetration).",
          "$s < 0$: Stimulation (acidizing, fracturing, horizontal well trajectory).",
          "Hawkins formula for skin: $s = (k/k_s - 1) \\ln(r_s/r_w)$."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 5 Production & Reservoir Job Listings",
      instructions: [
        "Go to LinkedIn Jobs, Rigzone, or Oilandgasjobsearch.com.",
        "Search for 'Junior Petroleum Engineer', 'Production Engineer', 'Reservoir Engineer'.",
        "Save 5 job listings to your application tracking sheet and note their required technical keywords (e.g., DCA, Well Performance, Prosper, OFM)."
      ],
      deliverable: "5 saved job descriptions added to your career tracker."
    }
  },

  // DAY 4
  {
    dayNumber: 4,
    phaseId: 1,
    weekNumber: 1,
    title: "Reservoir Pressure, Hydrostatics & Gradients",
    category: "fundamentals",
    categoryLabel: "Pressure Regimes",
    todayGoal: "Master hydrostatic pressure, formation pressure gradients, normal vs overpressure mechanisms, and BHP calculations.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Pressure is the primary natural energy driving hydrocarbons out of the reservoir rock into the wellbore. Petroleum engineers must understand hydrostatic pressure (the weight of a static fluid column), normal vs abnormal (overpressure/underpressure) formation pressure regimes, fracture gradient, and how bottom-hole pressure (BHP) governs both drilling safety (kicks/blowouts) and production deliverability.",
      keyPoints: [
        "Hydrostatic Pressure Equation: P_hyd = 0.052 * rho_fluid * TVD (where rho is in lb/gal / ppg and TVD is true vertical depth in ft) or P_hyd = grad * TVD (psi/ft * ft).",
        "Normal Pressure Gradients: Freshwater = 0.433 psi/ft (rho = 8.33 ppg); Typical Gulf of Mexico / Offshore saline water = 0.465 psi/ft (rho ~ 8.95 ppg); High salinity brines = 0.49 - 0.52 psi/ft.",
        "Overpressure (Abnormal Pressure): Formation pore pressure higher than normal hydrostatic gradient for that depth (> 0.465 psi/ft).",
        "Mechanisms of Overpressure: Undercompaction (disequilibrium compaction in rapid sedimentation), hydrocarbon generation (kerogen maturation expanding fluid volume), aquathermal expansion, tectonic compression, and fault seal trapping.",
        "Overburden Gradient: Weight of both rock matrix and pore fluids, typically ~1.0 psi/ft (corresponding to average bulk density of ~19.2 ppg or 2.3 g/cm^3)."
      ],
      coreFormulas: [
        {
          name: "Hydrostatic Pressure (Field Units)",
          formula: "P = 0.052 * rho_ppg * TVD_ft",
          explanation: "The constant 0.052 converts ppg * ft to psi (1 gal = 231 in^3; 1 ft = 12 in; 12 / 231 = 0.051948 ~ 0.052)."
        },
        {
          name: "Pressure Gradient to Density",
          formula: "rho_ppg = Gradient_(psi/ft) / 0.052",
          explanation: "Converts a formation pressure gradient into equivalent mud weight (EMW)."
        }
      ],
      fieldInsight: "Always distinguish True Vertical Depth (TVD) from Measured Depth (MD). In directional and horizontal wells, hydrostatic pressure is strictly a function of TVD, never MD. Using MD in hydrostatic calculations will dangerously overestimate bottom-hole pressure and cause lost circulation."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Drilling Engineering (Bourgoyne, Millheim, Chenevert, Young)",
          chapterOrSection: "Chapter 6: Pore Pressure and Fracture Gradient Estimation",
          note: "Study Eaton's method for pore pressure detection from sonic logs and seismic."
        },
        {
          title: "Well Control for the Rig-Site Team",
          chapterOrSection: "Chapter 2: Formation Pressures and Fluid Gradients",
          note: "Review normal, subnormal, and abnormal pressure classifications."
        }
      ],
      recommendedTopics: [
        "Eaton's sonic log equation: Pp/D = (S/D) - [(S/D) - (Pp/D)_n] * (Delta t_normal / Delta t_observed)^3",
        "Fracture gradient determination via Leak-Off Test (LOT) and FIT",
        "Drilling margin window: Pore Pressure < Mud Weight < Fracture Gradient"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q4_1",
          topic: "Hydrostatic Pressure",
          question: "What is the hydrostatic pressure exerted at a True Vertical Depth (TVD) of 10,000 ft by a static column of 10.0 ppg drilling mud?",
          options: ["520 psi", "5,200 psi", "4,330 psi", "6,800 psi"],
          correctIndex: 1,
          explanation: "P = 0.052 * rho * TVD = 0.052 * 10.0 * 10,000 = 5,200 psi."
        },
        {
          id: "q4_2",
          topic: "Pressure Gradients",
          question: "The normal hydrostatic pressure gradient for pure freshwater (density = 62.4 lb/cu ft or 8.33 ppg) is approximately:",
          options: ["0.350 psi/ft", "0.433 psi/ft", "0.465 psi/ft", "1.000 psi/ft"],
          correctIndex: 1,
          explanation: "P_grad = 0.052 * 8.33 = 0.433 psi/ft (or 62.4 lb/ft^3 / 144 in^2/ft^2 = 0.4333 psi/ft)."
        },
        {
          id: "q4_3",
          topic: "Overpressure",
          question: "Which geological mechanism is the most common cause of abnormal formation overpressure in young, rapidly deposited deltaic basins (e.g., Gulf of Mexico, Niger Delta)?",
          options: ["Chemical leaching of quartz", "Disequilibrium compaction (undercompaction) of low-permeability shales", "Deep geothermal cooling", "Mantle degassing"],
          correctIndex: 1,
          explanation: "Rapid deposition prevents pore water from escaping low-permeability shales. As overburden increases, trapped water bears part of the rock weight, generating severe overpressure."
        },
        {
          id: "q4_4",
          topic: "Equivalent Mud Weight",
          question: "If a formation at 8,000 ft TVD has a pore pressure of 4,160 psi, what is its Equivalent Mud Weight (EMW)?",
          options: ["8.5 ppg", "10.0 ppg", "11.2 ppg", "12.8 ppg"],
          correctIndex: 1,
          explanation: "EMW = Pressure / (0.052 * TVD) = 4,160 / (0.052 * 8,000) = 4,160 / 416 = 10.0 ppg."
        },
        {
          id: "q4_5",
          topic: "Overburden",
          question: "What is the typical average overburden gradient assumed in sedimentary basins when specific density logs are unavailable?",
          options: ["0.433 psi/ft", "0.465 psi/ft", "1.00 psi/ft", "1.50 psi/ft"],
          correctIndex: 2,
          explanation: "Assuming an average rock bulk density of ~2.3 g/cm^3 (~19.2 ppg), the overburden gradient is 0.052 * 19.2 ~ 1.0 psi/ft."
        },
        {
          id: "q4_6",
          topic: "Directional Wells",
          question: "In an S-shaped directional well with a Measured Depth (MD) of 12,500 ft and a True Vertical Depth (TVD) of 9,000 ft, which depth value MUST be used to calculate hydrostatic pressure?",
          options: ["Measured Depth (MD = 12,500 ft)", "True Vertical Depth (TVD = 9,000 ft)", "Average of MD and TVD", "Horizontal displacement"],
          correctIndex: 1,
          explanation: "Hydrostatic pressure depends solely on the vertical height of the fluid column (TVD). Fluid in deviated sections exerts pressure proportional to its vertical head, not along-hole length."
        },
        {
          id: "q4_7",
          topic: "Well Control",
          question: "If formation pore pressure exceeds the hydrostatic pressure of the drilling mud column, what event occurs?",
          options: ["Lost circulation", "A kick (formation fluid influx into the wellbore)", "Differential sticking", "Bit balling"],
          correctIndex: 1,
          explanation: "When formation pore pressure > wellbore hydrostatic pressure (underbalanced condition), formation fluids flow into the wellbore, which is defined as a kick."
        },
        {
          id: "q4_8",
          topic: "Fracture Gradient",
          question: "A Leak-Off Test (LOT) is conducted primarily to determine:",
          options: ["The porosity of the target pay zone", "The pressure at which the formation fracture breaks down at the casing shoe", "The bubble point of reservoir crude oil", "The productivity index of the well"],
          correctIndex: 1,
          explanation: "An LOT pressurizes the open hole immediately below the casing shoe until fluid begins leaking into micro-fractures, establishing the maximum allowable mud weight before fracturing the rock."
        },
        {
          id: "q4_9",
          topic: "Pressure Gradients",
          question: "A typical dry natural gas pressure gradient in a reservoir is approximately:",
          options: ["0.05 to 0.10 psi/ft", "0.35 to 0.40 psi/ft", "0.433 psi/ft", "1.00 psi/ft"],
          correctIndex: 0,
          explanation: "Because natural gas has very low density (e.g., 0.1 to 0.2 g/cm³ under reservoir conditions), its pressure gradient is very shallow, typically 0.05 to 0.10 psi/ft."
        },
        {
          id: "q4_10",
          topic: "Fluid Contacts",
          question: "On a pressure vs. depth plot, the intersection point of the oil gradient line and the water gradient line defines the:",
          options: ["Gas-Oil Contact (GOC)", "Oil-Water Contact (OWC)", "Top of the caprock", "Spud point"],
          correctIndex: 1,
          explanation: "Because oil (gradient ~0.35 psi/ft) and water (gradient ~0.45 psi/ft) have different fluid densities, their pressure-depth lines intersect precisely at the free water level / Oil-Water Contact (OWC)."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc4_1",
          title: "Hydrostatic Pressure & Trip Margin Mud Weight",
          scenario: "A drilling rig is at 11,500 ft TVD. Pore pressure prediction indicates an overpressured shale zone with a pore pressure of 6,210 psi. The drilling engineer requires a 250 psi overbalance (trip margin) to prevent kicks while tripping pipe.",
          formula: "P_req = P_pore + Overbalance; rho_mud = P_req / (0.052 * TVD)",
          givenData: {
            "TVD (ft)": 11500,
            "Pore Pressure (psi)": 6210,
            "Required Overbalance (psi)": 250
          },
          questionText: "Calculate: 1) The required bottom-hole hydrostatic pressure, and 2) The minimum mud weight (in ppg) rounded to one decimal place.",
          solutionSteps: [
            "Step 1: Calculate total required pressure P_req = 6,210 + 250 = 6,460 psi",
            "Step 2: Calculate minimum mud weight rho_mud = P_req / (0.052 * TVD)",
            "Step 3: rho_mud = 6,460 / (0.052 * 11,500) = 6,460 / 598 = 10.802 ppg",
            "Step 4: Round up for safety: 10.8 ppg (or 10.9 ppg in field practice)."
          ],
          finalAnswer: "Required BHP = 6,460 psi, Mud Weight = 10.8 ppg",
          inputUnit: "ppg",
          expectedNumber: 10.8,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int4_1",
        question: "How do you determine the Gas-Oil Contact (GOC) and Oil-Water Contact (OWC) using wireline formation tester (MDT / RFT) pressure data?",
        whyAsked: "Tests practical petrophysical and reservoir engineering interpretation. MDT pressure gradient analysis is standard in every exploration and appraisal team.",
        modelAnswer: "Wireline formation testers (like Schlumberger MDT or Halliburton RDT) take direct point pressure measurements at multiple precise depths across the reservoir interval. When we plot pressure versus True Vertical Depth (TVD), fluids of different densities display distinct linear hydrostatic pressure gradients: gas displays a very flat gradient (0.05–0.10 psi/ft), oil has a moderate gradient (0.30–0.38 psi/ft depending on API), and formation brine has a steeper gradient (0.43–0.50 psi/ft). The intersection of the gas line and oil line gives the exact depth of the Gas-Oil Contact (GOC). The intersection of the oil line and water line gives the Free Water Level (FWL), which corresponds to the Oil-Water Contact (OWC) in high-permeability sands where capillary transition zones are thin.",
        keyPoints: [
          "Plot measured pressures vs True Vertical Depth (TVD).",
          "Gradient slope = fluid density ($dP/dZ = \\rho \\cdot g$). Gas (~0.08 psi/ft) < Oil (~0.35 psi/ft) < Water (~0.45 psi/ft).",
          "Line intersections define fluid contacts (Gas-Oil Contact and Oil-Water Contact)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 MIT Pune Seniors in Petroleum Roles",
      instructions: [
        "Search LinkedIn for alumni: 'Petroleum Engineering MIT Pune' or 'Maharashtra Institute of Technology Pune Petroleum'.",
        "Filter for graduates working at SLB, Baker Hughes, ONGC, Shell, Halliburton, or Cairn.",
        "Send 2 polite connection requests with a personalized note mentioning your shared MIT Pune petroleum background."
      ],
      deliverable: "2 personalized alumni outreach messages sent."
    }
  },

  // DAY 5
  {
    dayNumber: 5,
    phaseId: 1,
    weekNumber: 1,
    title: "PVT Fundamentals & Phase Behavior",
    category: "fundamentals",
    categoryLabel: "PVT Analysis",
    todayGoal: "Master pressure-volume-temperature properties: bubble point, dew point, formation volume factors (Bo, Bg), and solution GOR (Rs).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Hydrocarbon fluids change phase and volume drastically as they travel from deep, high-temperature, high-pressure reservoirs to surface separator conditions (60°F and 14.7 psia). PVT (Pressure-Volume-Temperature) analysis quantifies these volumetric shrinkage and gas liberation behaviors. Every material balance equation, reserve estimation, and pipeline hydraulic model depends directly on accurate PVT parameters.",
      keyPoints: [
        "Bubble Point Pressure (P_b): The pressure at which the first microscopic bubble of gas comes out of solution from liquid oil at reservoir temperature.",
        "Dew Point Pressure (P_d): The pressure at which the first drop of liquid condenses out of a gas mixture.",
        "Oil Formation Volume Factor (B_o): Volume of reservoir oil (with dissolved gas) at reservoir conditions required to produce one stock tank barrel (STB) of oil at standard surface conditions (bbl/STB). Always B_o >= 1.0. At bubble point, B_o reaches its maximum.",
        "Gas Formation Volume Factor (B_g): Ratio of gas volume at reservoir conditions to gas volume at standard conditions (rcf/scf or bbl/scf). B_g = 0.02827 * (Z * T) / P (in rcf/scf).",
        "Solution Gas-Oil Ratio (R_s): The amount of gas dissolved in oil at a given pressure and temperature (scf/STB). Below P_b, R_s decreases as gas evolves.",
        "Total (Two-Phase) Formation Volume Factor (B_t): B_t = B_o + (R_sb - R_s) * B_g."
      ],
      coreFormulas: [
        {
          name: "Gas Formation Volume Factor",
          formula: "B_g = 0.02827 * (Z * T_R) / P_psia",
          explanation: "Yields Bg in cu ft / scf. T_R is in Rankine (°F + 460). Often converted to bbl/scf by dividing by 5.615."
        },
        {
          name: "Stock Tank Oil In Place (STOIIP Volumetric)",
          formula: "N = (7758 * A * h * phi * (1 - S_wi)) / B_oi",
          explanation: "N in STB, A in acres, h in ft, phi fraction, Swi fraction, Boi in bbl/STB. 7758 is acre-ft to bbl conversion."
        }
      ],
      fieldInsight: "Watch the behavior of Bo above versus below bubble point. Above bubble point (undersaturated oil), as pressure decreases, the oil expands slightly due to oil compressibility (Bo increases slightly). At bubble point, Bo reaches its maximum peak. Below bubble point, gas boils out of the liquid, causing the remaining oil to shrink drastically (Bo plummets)."
    },
    watchRead: {
      textbooks: [
        {
          title: "Properties of Petroleum Reservoir Fluids (William D. McCain Jr.)",
          chapterOrSection: "Chapter 7: Properties of Black Oils - Definitions",
          note: "Study the exact curves for Bo, Rs, viscosity, and isothermal compressibility vs pressure."
        },
        {
          title: "Applied Petroleum Reservoir Engineering (Craft & Hawkins)",
          chapterOrSection: "Chapter 2: Reservoir Fluid Properties",
          note: "Review laboratory experiments: Constant Composition Expansion (CCE) and Differential Liberation (DL)."
        }
      ],
      recommendedTopics: [
        "CCE (Flash) vs Differential Liberation laboratory procedures",
        "Z-factor calculation using Standing-Katz chart and Hall-Yarborough correlation",
        "Oil viscosity behavior below vs above bubble point pressure"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q5_1",
          topic: "PVT Properties",
          question: "At what pressure does the Oil Formation Volume Factor (Bo) reach its MAXIMUM value for a black oil system?",
          options: ["Initial reservoir pressure (P_i)", "Bubble point pressure (P_b)", "Standard separator pressure (14.7 psia)", "Dew point pressure"],
          correctIndex: 1,
          explanation: "Bo reaches its maximum at the bubble point pressure (Pb). Above Pb, liquid compresses as pressure increases; below Pb, dissolved gas boils out, causing liquid shrinkage."
        },
        {
          id: "q5_2",
          topic: "PVT Properties",
          question: "Why is the Oil Formation Volume Factor (Bo) almost always greater than 1.0 bbl/STB?",
          options: [
            "Because surface oil contains more paraffin crystals",
            "Because oil expands at elevated reservoir temperatures and contains large volumes of dissolved gas in solution",
            "Because reservoir pressure compresses liquid to a larger volume",
            "Because oil turns into water at high temperature"
          ],
          correctIndex: 1,
          explanation: "High reservoir temperature causes thermal expansion and dissolved natural gas swells the oil. When brought to surface, dissolved gas evolves and cooling causes shrinkage."
        },
        {
          id: "q5_3",
          topic: "Solution GOR",
          question: "What happens to the Solution Gas-Oil Ratio (Rs) when reservoir pressure declines BELOW the bubble point pressure?",
          options: ["Rs increases rapidly", "Rs remains constant", "Rs decreases because gas liberates from the oil into a free gas phase", "Rs becomes negative"],
          correctIndex: 2,
          explanation: "Below Pb, the oil can hold less gas in solution at lower pressure, so gas bubbles out of solution, causing dissolved Rs to drop steadily."
        },
        {
          id: "q5_4",
          topic: "Gas Deviation Factor",
          question: "The gas compressibility factor (Z) in the Real Gas Law (P*V = Z*n*R*T) represents:",
          options: [
            "The volume of condensate dissolved in gas",
            "The ratio of actual gas volume to the volume the gas would occupy if it behaved as an ideal gas",
            "The viscosity ratio between gas and water",
            "The percentage of CO2 and H2S in the gas stream"
          ],
          correctIndex: 1,
          explanation: "Z is the gas deviation factor: Z = V_actual / V_ideal. For an ideal gas Z = 1.0; for real gases at high pressure, intermolecular forces cause Z to deviate."
        },
        {
          id: "q5_5",
          topic: "Laboratory PVT",
          question: "Which laboratory PVT test models the separation process of gas evolving in the reservoir where gas has higher mobility and leaves the oil behind?",
          options: ["Constant Composition Expansion (CCE)", "Differential Liberation (DL)", "Flash Vaporization", "Dean-Stark extraction"],
          correctIndex: 1,
          explanation: "Differential Liberation removes liberated gas at each pressure depletion step while keeping temperature constant, closely modeling reservoir gas segregation."
        },
        {
          id: "q5_6",
          topic: "Oil Viscosity",
          question: "How does dead oil viscosity (mu_od) compare to live oil viscosity (mu_o with dissolved gas) at the same temperature?",
          options: ["Dead oil viscosity is much lower", "Dead oil viscosity is substantially higher because dissolved gas reduces liquid viscosity", "They are exactly equal", "Dead oil has zero viscosity"],
          correctIndex: 1,
          explanation: "Dissolved gas acts as a solvent that drastically lowers the viscosity of oil. Stripping the gas out (leaving 'dead oil') increases viscosity significantly."
        },
        {
          id: "q5_7",
          topic: "PVT Properties",
          question: "What is the physical unit of Gas Formation Volume Factor (Bg) in common petroleum field units?",
          options: ["STB/bbl", "rcf/scf (reservoir cu ft / standard cu ft) or bbl/scf", "psi/ft", "cp/mD"],
          correctIndex: 1,
          explanation: "Bg represents reservoir volume per standard volume, measured in reservoir cubic feet per standard cubic foot (rcf/scf) or reservoir barrels per scf (res bbl/scf)."
        },
        {
          id: "q5_8",
          topic: "Phase Behavior",
          question: "What is the 'Cricondentherm' on a multi-component hydrocarbon pressure-temperature (P-T) phase envelope?",
          options: ["The lowest pressure at which liquid forms", "The maximum temperature above which liquid cannot exist regardless of pressure", "The critical point where gas and liquid densities are identical", "The freezing point of paraffin wax"],
          correctIndex: 1,
          explanation: "The Cricondentherm is the maximum temperature on the phase envelope boundary; at temperatures higher than the cricondentherm, no two-phase liquid-vapor state can exist."
        },
        {
          id: "q5_9",
          topic: "Volumetric Reserves",
          question: "In the volumetric STOIIP formula: N = 7758 * A * h * phi * (1 - Sw) / Bo, what is the constant 7758?",
          options: ["Conversion from acres to square miles", "Conversion factor from acre-feet of rock to standard 42-gallon barrels", "Average depth of worldwide oil wells", "Gas compressibility constant"],
          correctIndex: 1,
          explanation: "1 acre = 43,560 sq ft. 1 acre-ft = 43,560 cu ft. Since 1 barrel = 5.61458 cu ft, 43,560 / 5.61458 = 7,758.36 bbl/acre-ft."
        },
        {
          id: "q5_10",
          topic: "PVT Properties",
          question: "If a reservoir fluid exists at 4,000 psi and 200°F with a bubble point of 2,800 psi, the reservoir is classified as:",
          options: ["Saturated oil reservoir", "Undersaturated oil reservoir", "Retrograde condensate reservoir", "Dry gas reservoir"],
          correctIndex: 1,
          explanation: "When reservoir pressure (4,000 psi) > bubble point pressure (2,800 psi), no free gas exists in the reservoir; all gas is dissolved in liquid, defining an undersaturated oil reservoir."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc5_1",
          title: "Volumetric STOIIP Calculation",
          scenario: "An oil reservoir has a productive area A = 640 acres, average net pay thickness h = 35 ft, average effective porosity phi = 18%, initial water saturation Swi = 25%, and initial oil formation volume factor Boi = 1.30 bbl/STB.",
          formula: "N = [7758 * A * h * phi * (1 - S_wi)] / B_oi",
          givenData: {
            "Area A (acres)": 640,
            "Thickness h (ft)": 35,
            "Porosity phi": 0.18,
            "Swi": 0.25,
            "Boi (bbl/STB)": 1.30
          },
          questionText: "Calculate the Stock Tank Original Oil In Place (STOIIP) in MMSTB (million stock tank barrels). If the expected recovery factor is 30%, calculate recoverable reserves.",
          solutionSteps: [
            "Step 1: Calculate Reservoir Pore Volume (bbl) = 7758 * A * h * phi",
            "       = 7758 * 640 * 35 * 0.18 = 31,279,296 bbl",
            "Step 2: Hydrocarbon Pore Volume = Pore Volume * (1 - Swi) = 31,279,296 * (1 - 0.25) = 23,459,472 res bbl",
            "Step 3: Convert to Stock Tank Barrels N = 23,459,472 / 1.30 = 18,045,748 STB = 18.05 MMSTB",
            "Step 4: Recoverable Reserves = N * Recovery Factor = 18.05 * 0.30 = 5.41 MMSTB"
          ],
          finalAnswer: "STOIIP = 18.05 MMSTB; Recoverable Reserves = 5.41 MMSTB",
          inputUnit: "MMSTB",
          expectedNumber: 18.05,
          tolerance: 0.2
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int5_1",
        question: "Sketch or describe how Oil Formation Volume Factor (Bo), Solution GOR (Rs), and Oil Viscosity (mu_o) behave as reservoir pressure drops from initial pressure to below the bubble point.",
        whyAsked: "This is a signature technical screening question for reservoir and production engineers. Drawing this curve accurately proves foundational mastery.",
        modelAnswer: "Let's trace pressure dropping from initial reservoir pressure Pi down past bubble point Pb:\n1. Bo (Formation Volume Factor): Above Pb, as pressure drops, liquid expands slightly due to oil compressibility, so Bo increases slightly until it reaches its maximum peak at Pb. Below Pb, gas rapidly comes out of solution, so the oil shrinks and Bo drops sharply toward 1.0 at surface conditions.\n2. Rs (Solution GOR): Above Pb, all gas is dissolved and cannot escape, so Rs remains perfectly constant (Rs = Rsb). Below Pb, gas boils out into the reservoir pores, so Rs declines continuously with decreasing pressure.\n3. Oil Viscosity (mu_o): Above Pb, dropping pressure causes slight liquid expansion which slightly decreases viscosity. Below Pb, the loss of light dissolved gas molecules (methane, ethane) leaves heavier hydrocarbon fractions behind, causing oil viscosity to rise steeply.",
        keyPoints: [
          "Bo peaks at Pb, increases slightly above Pb, drops steeply below Pb.",
          "Rs is constant above Pb, drops steadily below Pb.",
          "Viscosity reaches minimum at Pb, increases dramatically below Pb as light ends vaporize."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Draft a 150-Word Professional Self-Introduction",
      instructions: [
        "Write your standard interview opener: 'Tell me about yourself'.",
        "Structure: 1) Education (MIT Pune Petroleum Engineering), 2) Current experience (~1 yr in field/junior engineering operations), 3) Key technical strengths (reservoir calculations, well performance, logging), 4) Why you are seeking your next career advancement."
      ],
      deliverable: "Refined 150-word elevator pitch ready to rehearse out loud."
    }
  },

  // DAY 6
  {
    dayNumber: 6,
    phaseId: 1,
    weekNumber: 1,
    title: "Oil & Gas Physical Properties",
    category: "fundamentals",
    categoryLabel: "Fluid Physics",
    todayGoal: "Master fluid density, viscosity, compressibility, gas specific gravity, and pseudo-critical property estimation.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Understanding the physical behavior of natural gases and crude oils is vital for hydraulic flow calculations, surface separator sizing, pipeline transmission, and well deliverability. We focus on gas specific gravity (relative to air), pseudo-critical pressure (Ppc) and temperature (Tpc) via Sutton's correlations, oil compressibility (c_o), and the impact of temperature on crude viscosity.",
      keyPoints: [
        "Gas Specific Gravity (gamma_g): Molecular weight of the gas mixture divided by molecular weight of dry air (M_air = 28.96 lb/lb-mol). gamma_g = M_gas / 28.96.",
        "Gas Density: rho_g = (P * M_gas) / (Z * R * T) = (2.7 * P * gamma_g) / (Z * T), where rho is in lb/cu ft, P in psia, T in Rankine (°R).",
        "Pseudo-Critical Properties: For gas mixtures, Sutton correlations estimate Pseudo-Critical Pressure (P_pc) and Temperature (T_pc). Reduced properties are P_pr = P / P_pc and T_pr = T / T_pc.",
        "Oil Isothermal Compressibility (c_o): Fractional volume change per unit pressure change at constant temperature: c_o = -(1/V) * (dV/dP)_T (typically 5 to 25 x 10^-6 psi^-1).",
        "Crude Viscosity Classifications: Dead oil viscosity (degassed), Saturated oil viscosity (at Pb), and Undersaturated oil viscosity (above Pb)."
      ],
      coreFormulas: [
        {
          name: "Gas Density Formula",
          formula: "rho_g = (2.7 * P * gamma_g) / (Z * T)",
          explanation: "P in psia, gamma_g dimensionless, T in °R (°F + 460), Z dimensionless, rho_g in lb/cu ft."
        },
        {
          name: "Gas Molecular Weight",
          formula: "M_gas = Sum(y_i * M_i) = 28.96 * gamma_g",
          explanation: "y_i is the mole fraction of component i; M_i is molecular weight."
        }
      ],
      fieldInsight: "Always check for non-hydrocarbon acid gases (CO2 and H2S) in natural gas analyses. If sour gases are present, you must apply the Wichert-Aziz or Carr-Kobayashi-Burrows corrections to pseudo-critical temperature and pressure before reading the Z-factor from the Standing-Katz chart."
    },
    watchRead: {
      textbooks: [
        {
          title: "Properties of Petroleum Reservoir Fluids (william D. McCain Jr.)",
          chapterOrSection: "Chapter 4: Properties of Natural Gases",
          note: "Study pseudo-critical property calculations and acid gas corrections."
        },
        {
          title: "Gas Pipeline Hydraulics (E. Shashi Menon)",
          chapterOrSection: "Chapter 1: Gas Properties",
          note: "Review heating value (BTU/scf), compressibility, and pipeline flow equations."
        }
      ],
      recommendedTopics: [
        "Standing-Katz compressibility chart reading for Ppr and Tpr",
        "Wichert-Aziz correction for acid gas content (H2S + CO2)",
        "Dead oil viscosity correlations (Beggs & Robinson)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q6_1",
          topic: "Gas Properties",
          question: "What is the standard reference molecular weight of dry air used to compute gas specific gravity?",
          options: ["18.02 lb/lb-mol", "28.96 lb/lb-mol", "32.00 lb/lb-mol", "44.01 lb/lb-mol"],
          correctIndex: 1,
          explanation: "Air is primarily composed of ~78% N2 (28 g/mol), ~21% O2 (32 g/mol), and ~1% Ar (40 g/mol), yielding an average molecular weight of 28.96 lb/lb-mol."
        },
        {
          id: "q6_2",
          topic: "Gas Gravity",
          question: "A natural gas stream has a measured molecular weight of 20.27 lb/lb-mol. What is its gas specific gravity (relative to air)?",
          options: ["0.55", "0.70", "0.85", "1.10"],
          correctIndex: 1,
          explanation: "gamma_g = M_gas / 28.96 = 20.27 / 28.96 = 0.70."
        },
        {
          id: "q6_3",
          topic: "Reduced Properties",
          question: "In thermodynamics, 'Pseudo-Reduced Temperature' (Tpr) is defined as:",
          options: ["T / T_critical (in absolute temperature Rankine or Kelvin)", "T_critical - T", "T in Celsius divided by 100", "T multiplied by pressure"],
          correctIndex: 0,
          explanation: "Pseudo-reduced properties are dimensionless ratios of system property to pseudo-critical property: Tpr = T / Tpc (where T and Tpc are in absolute units, °R or K)."
        },
        {
          id: "q6_4",
          topic: "Crude Viscosity",
          question: "As the temperature of a liquid crude oil increases, its dynamic viscosity:",
          options: ["Increases exponentially", "Decreases significantly", "Remains constant", "Fluctuates erratically"],
          correctIndex: 1,
          explanation: "In liquids, increasing temperature increases thermal kinetic energy, weakening intermolecular cohesive forces and causing viscosity to decrease."
        },
        {
          id: "q6_5",
          topic: "Sour Gas",
          question: "Why must gas containing significant percentages of CO2 and H2S be corrected using the Wichert-Aziz method before evaluating Z-factors?",
          options: [
            "Because acid gases are flammable",
            "Because polar intermolecular forces in acid gases cause deviation from standard hydrocarbon Standing-Katz correlations",
            "Because sour gas cannot be compressed",
            "Because air weighs more than CO2"
          ],
          correctIndex: 1,
          explanation: "Standing-Katz charts were developed for pure sweet hydrocarbon mixtures. Polar acid gas molecules alter critical properties, requiring temperature and pressure corrections."
        },
        {
          id: "q6_6",
          topic: "Compressibility",
          question: "The isothermal compressibility of undersaturated crude oil is typically in the order of magnitude of:",
          options: ["10^-1 psi^-1", "10^-3 psi^-1", "10^-5 to 10^-6 psi^-1", "10^-9 psi^-1"],
          correctIndex: 2,
          explanation: "Liquid crude oils are relatively incompressible; their isothermal compressibility c_o typically ranges between 5 x 10^-6 and 25 x 10^-6 psi^-1."
        },
        {
          id: "q6_7",
          topic: "Gas Density",
          question: "If reservoir pressure is doubled at constant temperature while gas deviation factor Z remains approximately constant, the natural gas density will:",
          options: ["Be halved", "Approximately double", "Increase fourfold", "Remain unchanged"],
          correctIndex: 1,
          explanation: "From rho_g = (P * M) / (Z * R * T), density is directly proportional to pressure P when T and Z remain constant."
        },
        {
          id: "q6_8",
          topic: "Fluid Properties",
          question: "What is the primary constituent hydrocarbon of pipeline-specification natural gas?",
          options: ["Propane (C3H8)", "Methane (CH4)", "Hexane (C6H14)", "Ethylene (C2H4)"],
          correctIndex: 1,
          explanation: "Treated sales natural gas is typically 90% to 98%+ Methane (CH4), with small amounts of ethane and trace inert nitrogen."
        },
        {
          id: "q6_9",
          topic: "Viscosity Units",
          question: "Kinematic viscosity is related to dynamic viscosity by which equation?",
          options: ["Kinematic Viscosity = Dynamic Viscosity * Density", "Kinematic Viscosity = Dynamic Viscosity / Density", "Kinematic Viscosity = Dynamic Viscosity + Pressure", "Kinematic Viscosity = 1 / Dynamic Viscosity"],
          correctIndex: 1,
          explanation: "Kinematic viscosity nu (centistokes or m^2/s) equals dynamic viscosity mu (centipoise or Pa*s) divided by fluid density rho."
        },
        {
          id: "q6_10",
          topic: "Gas Heating Value",
          question: "Pure methane has a Gross Heating Value (Higher Heating Value) of approximately:",
          options: ["100 BTU/scf", "500 BTU/scf", "1,010 BTU/scf", "5,000 BTU/scf"],
          correctIndex: 2,
          explanation: "The standard gross heating value of pure methane at standard conditions is approximately 1,010 to 1,012 BTU/scf."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc6_1",
          title: "Natural Gas Density Calculation",
          scenario: "A gas reservoir is producing natural gas with a specific gravity gamma_g = 0.65 at a reservoir pressure of 3,000 psia and a reservoir temperature of 180°F. The gas compressibility factor Z at these conditions is 0.86.",
          formula: "T_R = T_F + 460; rho_g = (2.7 * P * gamma_g) / (Z * T_R)",
          givenData: {
            "Pressure P (psia)": 3000,
            "Gas Specific Gravity gamma_g": 0.65,
            "Temperature (°F)": 180,
            "Z-factor": 0.86
          },
          questionText: "Calculate: 1) The absolute temperature in Rankine, and 2) The reservoir gas density in lb/cu ft.",
          solutionSteps: [
            "Step 1: Convert temperature to Rankine: T_R = 180 + 460 = 640 °R",
            "Step 2: Numerator = 2.7 * P * gamma_g = 2.7 * 3000 * 0.65 = 5,265",
            "Step 3: Denominator = Z * T_R = 0.86 * 640 = 550.4",
            "Step 4: Density rho_g = 5,265 / 550.4 = 9.566 lb/cu ft"
          ],
          finalAnswer: "Temperature = 640 °R, Gas Density = 9.57 lb/cu ft",
          inputUnit: "lb/cu ft",
          expectedNumber: 9.57,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int6_1",
        question: "Why does the presence of condensate or dissolved gas in crude oil lower its viscosity, and what operational problems happen when light gas flashes off during production?",
        whyAsked: "Evaluates whether you connect fluid physics with wellbore and pipeline operational challenges.",
        modelAnswer: "Dissolved gas molecules (like methane and ethane) are small and highly mobile; when dissolved in crude oil, they break up the intermolecular attraction and entanglement of heavier asphaltic and paraffinic hydrocarbon chains, acting as an internal lubricant that drastically lowers dynamic viscosity. When pressure drops below the bubble point in the tubing or surface lines, these light components flash out of liquid into the vapor phase. Operationally, this causes two major issues: First, the remaining liquid oil experiences a sharp increase in viscosity and can precipitate heavy paraffin wax or asphaltenes onto tubing walls and chokes, causing flow restrictions. Second, the sudden release of gas creates high-velocity multi-phase flow regimes (slugging or mist flow), causing severe surface backpressure, vibration, and separator foaming.",
        keyPoints: [
          "Dissolved gas breaks up heavy hydrocarbon chain attraction, decreasing viscosity.",
          "Flashing below Pb strips light ends, causing oil viscosity spike.",
          "Operational risks: Wax/asphaltene precipitation, tubing deposition, flow regime slugging, and emulsion stability."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Prepare for Tomorrow's Week 1 Milestone Exam",
      instructions: [
        "Review your notes from Days 1 to 6 (Upstream overview, Porosity/Permeability, Darcy's law, Hydrostatics, PVT, and Fluid properties).",
        "Set up a dedicated notebook section titled 'Things I Forgot' where any question missed tomorrow will be logged immediately."
      ],
      deliverable: "Ready mindset and testing environment for Day 7's 30-question technical milestone exam."
    }
  },

  // DAY 7
  {
    dayNumber: 7,
    phaseId: 1,
    weekNumber: 1,
    title: "WEEK 1 TEST: Petroleum Fundamentals Benchmark",
    category: "fundamentals",
    categoryLabel: "Weekly Exam",
    todayGoal: "Complete the 30-question comprehensive Fundamentals Benchmark, review every wrong answer, and build your 'Things I Forgot' list.",
    estimatedTotalMinutes: 125,
    isTestDay: true,
    testId: "week_1_test",
    learn: {
      durationMinutes: 30,
      summary: "Milestone Day. Today is an active diagnostic assessment designed to stress-test your grasp of Week 1 fundamentals before moving into Reservoir Engineering. Every question is calibrated to typical technical interview standards for junior petroleum engineers.",
      keyPoints: [
        "Test scope: Industry lifecycle, rock petrophysics, fluid flow equations, pressure regimes, and PVT behavior.",
        "Pass benchmark: 80% (24 / 30).",
        "Every incorrect question automatically triggers an entry in your command center's 'Revision Queue' and your personal 'Things I Forgot' ledger."
      ],
      fieldInsight: "Top operators do not look for memorization; they look for rapid conceptual clarity. If you missed a calculation or confused effective vs absolute permeability, log it honestly. The gap you fix today is an interview question you nail next month."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Week 1 Review",
          chapterOrSection: "Days 1–6 Notes & Formula Cards",
          note: "Quickly scan Darcy equations, Hydrostatic formula, and PVT curves before starting."
        }
      ],
      recommendedTopics: [
        "Darcy radial flow field units",
        "Hydrostatic 0.052 constant origin",
        "Bubble point vs dew point behavior"
      ]
    },
    practice: {
      durationMinutes: 50,
      questionCount: 10,
      questions: [
        {
          id: "w1_t1",
          topic: "Hydrostatics",
          question: "What is the equivalent pressure gradient of an 11.5 ppg drilling fluid in psi/ft?",
          options: ["0.433 psi/ft", "0.520 psi/ft", "0.598 psi/ft", "0.650 psi/ft"],
          correctIndex: 2,
          explanation: "Gradient = 0.052 * 11.5 = 0.598 psi/ft."
        },
        {
          id: "w1_t2",
          topic: "Darcy's Law",
          question: "If reservoir permeability k is doubled and net pay thickness h is halved, while drawdown and fluid properties remain constant, what is the effect on steady-state flow rate q?",
          options: ["Flow rate quadruples", "Flow rate is halved", "Flow rate remains exactly the same", "Flow rate doubles"],
          correctIndex: 2,
          explanation: "In Darcy's equation, flow rate is directly proportional to the product (k * h), known as transmissibility. If k doubles (x2) and h halves (x0.5), the product remains 1.0 (unchanged)."
        },
        {
          id: "w1_t3",
          topic: "PVT Analysis",
          question: "In an undersaturated oil reservoir produced by pressure depletion above the bubble point, the primary energy mechanism expelling oil is:",
          options: ["Free gas cap expansion", "Water drive influx", "Rock and fluid compressibility expansion", "Gravity drainage"],
          correctIndex: 2,
          explanation: "Above the bubble point in an isolated volumetric reservoir, oil recovery occurs entirely due to the slight expansion of the oil, connate water, and compaction of pore volume (rock compressibility)."
        },
        {
          id: "w1_t4",
          topic: "Petrophysics",
          question: "A core plug is 100% saturated with brine and yields a permeability of 120 mD. When oil is injected until irreducible water saturation is reached, the measured effective permeability to oil is 78 mD. What is the end-point relative permeability to oil (k_ro)?",
          options: ["0.50", "0.65", "0.78", "1.54"],
          correctIndex: 1,
          explanation: "k_ro = k_o / k_base = 78 mD / 120 mD = 0.65."
        },
        {
          id: "w1_t5",
          topic: "Industry Overview",
          question: "Which of the following describes a 'Wildcat well'?",
          options: ["A well drilled to pump water into an existing field", "An exploratory well drilled in an unproven or previously non-producing area", "A well undergoing recompletion", "A horizontal multilateral development well"],
          correctIndex: 1,
          explanation: "A wildcat well is an exploratory well drilled in an area where no previous oil or gas production has been established, carrying higher geological risk."
        },
        {
          id: "w1_t6",
          topic: "Reservoir Pressure",
          question: "If a formation has a pore pressure gradient of 0.62 psi/ft, it is considered:",
          options: ["Severely depleted", "Normal hydrostatic pressure", "Abnormally overpressured", "Underpressured"],
          correctIndex: 2,
          explanation: "Since 0.62 psi/ft is significantly higher than typical normal hydrostatic gradients (0.433–0.465 psi/ft), it represents abnormal overpressure."
        },
        {
          id: "w1_t7",
          topic: "Fluid Properties",
          question: "Which crude oil has higher commercial value in refining: 40° API sweet crude or 18° API sour crude?",
          options: ["18° API sour crude", "40° API sweet crude", "Both sell for the identical price", "API has no influence on crude pricing"],
          correctIndex: 1,
          explanation: "40° API sweet crude is light and low in sulfur, requiring less expensive refining and yielding high proportions of valuable transportation fuels (gasoline, diesel, jet fuel)."
        },
        {
          id: "w1_t8",
          topic: "Darcy Units",
          question: "Transmissibility of a reservoir is defined as:",
          options: ["k / mu", "k * h / mu", "k * h", "phi * h"],
          correctIndex: 2,
          explanation: "Reservoir transmissibility is defined as the product of permeability and net pay thickness: (k * h), usually expressed in mD-ft."
        },
        {
          id: "w1_t9",
          topic: "Capillary Pressure",
          question: "At the free water level (FWL) in a reservoir, capillary pressure (Pc = Po - Pw) is equal to:",
          options: ["Infinite", "Zero", "100 psi", "The bubble point pressure"],
          correctIndex: 1,
          explanation: "By definition, the Free Water Level (FWL) is the level where oil phase pressure equals water phase pressure, hence capillary pressure Pc = 0."
        },
        {
          id: "w1_t10",
          topic: "PVT Properties",
          question: "What is the relationship between Gas Formation Volume Factor Bg and reservoir pressure P?",
          options: ["Bg is directly proportional to P", "Bg is inversely proportional to P (Bg decreases as P increases)", "Bg is independent of pressure", "Bg is constant"],
          correctIndex: 1,
          explanation: "From real gas relations, Bg = 0.02827 * Z * T / P. As pressure increases, gas is compressed into a smaller reservoir volume per standard volume, so Bg decreases."
        }
      ]
    },
    calculation: {
      durationMinutes: 20,
      problemCount: 1,
      problems: [
        {
          id: "calc7_1",
          title: "Milestone Transmissibility & Productivity Index Calculation",
          scenario: "A vertical appraisal well in a newly discovered oil reservoir produces 650 STB/day with a bottom-hole flowing pressure Pwf of 2,100 psi. Static reservoir pressure Pe is 2,750 psi.",
          formula: "PI = q / (P_e - P_wf)",
          givenData: {
            "Rate q (STB/day)": 650,
            "Pe (psi)": 2750,
            "Pwf (psi)": 2100
          },
          questionText: "Calculate the Productivity Index (PI) of this well in STB/day/psi. If the operator requires a production rate of 1,000 STB/day, what flowing bottom-hole pressure (Pwf) is required assuming constant PI?",
          solutionSteps: [
            "Step 1: Calculate drawdown Delta P = Pe - Pwf = 2750 - 2100 = 650 psi",
            "Step 2: Calculate Productivity Index PI = q / Delta P = 650 / 650 = 1.00 STB/day/psi",
            "Step 3: To produce 1,000 STB/day: Delta P_req = q_req / PI = 1,000 / 1.00 = 1,000 psi",
            "Step 4: Required Pwf = Pe - Delta P_req = 2,750 - 1,000 = 1,750 psi"
          ],
          finalAnswer: "Productivity Index = 1.00 STB/day/psi, Required Pwf = 1,750 psi",
          inputUnit: "STB/d/psi",
          expectedNumber: 1.0,
          tolerance: 0.05
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int7_1",
        question: "If an interviewer asks: 'What were your 3 weakest areas during your first year of petroleum engineering, and what have you done to fix them?' How do you answer professionally?",
        whyAsked: "Tests humility, self-awareness, technical honesty, and whether you take proactive ownership of your professional competence.",
        modelAnswer: "I answer with transparency and concrete evidence of improvement: 'During my first year as a junior engineer, transitioning from academic theory to operational realities highlighted three specific areas I needed to strengthen: First, converting theoretical equations into rapid field-unit calculations under time constraints, such as hydrostatic trip margins and Darcy radial deliverability. Second, interpreting PVT phase envelopes and understanding how fluid shrinkage below bubble point directly impacts artificial lift sizing. Third, connecting static well log petrophysics with dynamic well test behavior. Over the past several weeks, I have instituted a rigorous daily technical regimen: solving real-world engineering calculation problems daily, rebuilding my fundamentals in reservoir mechanics and pressure regimes, and actively auditing my technical gaps through weekly assessments. This deliberate practice has restored my technical fluency and made me much more confident in making sound operational recommendations.'",
        keyPoints: [
          "Be specific with real engineering concepts, not generic fluff.",
          "Demonstrate active ownership and what concrete steps you took to close the gap.",
          "Transition into how this makes you an immediate asset on their engineering desk."
        ]
      }
    },
    career: {
      durationMinutes: 10,
      actionTitle: "Create Your 'Things I Forgot' Action Ledger",
      instructions: [
        "In your study log, write down the header: 'Things I Forgot - Week 1'.",
        "Add any question you answered incorrectly or guessed on today.",
        "Verify that these topics appear in your website dashboard's Revision Queue."
      ],
      deliverable: "Populated 'Things I Forgot' ledger with clear action items for Week 2."
    }
  }
];
