import { DayPlan } from '../../types';

export const WEEK_3_DAYS: DayPlan[] = [
  // DAY 15
  {
    dayNumber: 15,
    phaseId: 1,
    weekNumber: 3,
    title: "Drilling Process, Rig Components & Well Architecture",
    category: "drilling",
    categoryLabel: "Drilling Systems",
    todayGoal: "Re-master the rotary drilling system, the 6 major rig subsystems, offshore rig types, and standard casing programs.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Drilling engineering transforms an underground prospect into a physical conduit connecting the reservoir to the surface. A modern rotary drilling rig comprises six primary interdependent systems: Hoisting, Rotating, Circulating, Well Control (BOP), Power, and Monitoring/Data Logging. Well architecture consists of concentric telescopic casing strings cemented in place to isolate formations and protect groundwater.",
      keyPoints: [
        "6 Rig Systems: 1) Hoisting (derrick, drawworks, crown & traveling blocks, drill line), 2) Rotating (top drive / rotary table, kelly, swivel), 3) Circulating (mud pumps, standpipe, drill string, annulus, shale shakers, degasser, desander/desilter, mud pits), 4) Well Control (BOP stack, choke & kill manifolds), 5) Power (diesel generators, SCR/VFD drives), 6) Monitoring (driller's console, mud logging, MWD/LWD).",
        "Rig Types: Land rigs (conventional, mobile, pad/walking rigs) vs. Offshore rigs: Bottom-supported (jackup rigs up to ~400–500 ft water depth, platform rigs) vs. Floating rigs (semi-submersibles and drillships with dynamic positioning for deepwater 1,000–12,000 ft).",
        "Well Architecture Casing Program: Conductor pipe (isolates topsoil/loose sands) → Surface casing (protects freshwater aquifers, supports BOP) → Intermediate casing (isolates weak formations, abnormal pressure, or sloughing shales) → Production casing/liner (set across target pay zone)."
      ],
      coreFormulas: [
        {
          name: "Drill Line Safety Factor",
          formula: "SF = Nominal Breaking Strength / Fast Line Tension",
          explanation: "Typically maintained between 2.0 and 3.0 during normal drilling operations."
        },
        {
          name: "Block Velocity vs Hook Velocity",
          formula: "v_fastline = N_lines * v_hook",
          explanation: "N_lines is number of lines strung between crown and traveling blocks (typically 8, 10, or 12)."
        }
      ],
      fieldInsight: "On a drilling rig, safety and pressure containment are paramount. Never proceed to drill out a casing shoe until the cement has set to compressive strength, the casing has been pressure tested, and a Leak-Off Test (LOT) or Formation Integrity Test (FIT) has established the maximum allowable annular surface pressure (MAASP)."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Drilling Engineering (Bourgoyne, Millheim, Chenevert, Young)",
          chapterOrSection: "Chapter 1: Rotary Drilling",
          note: "Study rig equipment ratings, block-and-tackle mechanical advantage, and casing points."
        },
        {
          title: "Formulas and Calculations for Drilling, Production, and Workover (Norton J. Lapeyrouse)",
          chapterOrSection: "Chapter 1: Basic Drilling Calculations",
          note: "Review capacity and displacement tables for drill pipe and casing."
        }
      ],
      recommendedTopics: [
        "Mechanical advantage of traveling block: MA = N_lines",
        "Casing seat selection criteria based on pore pressure and fracture gradient margins",
        "Top Drive System (TDS) vs conventional rotary table and kelly"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q15_1",
          topic: "Rig Systems",
          question: "Which component of the circulating system is responsible for removing the largest drilled rock cuttings from the returning mud stream as it exits the bell nipple?",
          options: ["Desilter", "Shale shaker", "Degasser", "Mud balance"],
          correctIndex: 1,
          explanation: "Shale shakers use vibrating wire-mesh screens to filter out coarse drill cuttings from the mud as the first primary solids-control equipment."
        },
        {
          id: "q15_2",
          topic: "Offshore Rigs",
          question: "Which offshore drilling unit is bottom-supported and has movable legs that lower to rest on the seafloor in water depths up to ~400–500 ft?",
          options: ["Drillship", "Jackup rig", "Semi-submersible", "Tension Leg Platform (TLP)"],
          correctIndex: 1,
          explanation: "Jackup rigs are towed to location, lower their 3 or 4 lattice legs to the seabed, and jack the hull out of the water to provide a stable bottom-supported platform."
        },
        {
          id: "q15_3",
          topic: "Casing Design",
          question: "What is the primary regulatory and environmental function of setting and cementing the 'Surface Casing' string?",
          options: [
            "To isolate depleted reservoir gas zones",
            "To isolate and protect shallow freshwater aquifers from contamination and provide blowout containment for subsequent drilling",
            "To hold the drill collars",
            "To store extra drilling mud"
          ],
          correctIndex: 1,
          explanation: "Surface casing isolates freshwater drinking aquifers from drilling fluids and provides anchor strength to install the primary blowout preventer (BOP) stack."
        },
        {
          id: "q15_4",
          topic: "Hoisting System",
          question: "If 10 lines are strung between the crown block and traveling block, what is the ideal mechanical advantage (ignoring sheave friction)?",
          options: ["5", "10", "20", "100"],
          correctIndex: 1,
          explanation: "The mechanical advantage of a block-and-tackle system equals the number of lines supporting the traveling block: MA = N = 10."
        },
        {
          id: "q15_5",
          topic: "Rig Systems",
          question: "What is the primary advantage of a Top Drive System (TDS) compared to a traditional rotary table with kelly?",
          options: [
            "Top drives can rotate the drill string while back-reaming out of the hole and can drill with 90-ft stands (3 joints) instead of single 30-ft joints",
            "Top drives do not require electrical power",
            "Top drives eliminate the need for drill collars",
            "Top drives make the mud lighter"
          ],
          correctIndex: 0,
          explanation: "Top drives rotate the pipe directly from the traveling block, enabling drilling with 90-ft triples, reducing connections by 66%, and allowing rotation while reaming up and down."
        },
        {
          id: "q15_6",
          topic: "Well Architecture",
          question: "What is a 'Liner' in well casing nomenclature?",
          options: [
            "A casing string that extends all the way from the reservoir back to the surface wellhead",
            "A casing string that does not extend to the surface wellhead, but is anchored and sealed inside the previous casing string with a liner hanger",
            "A rubber seal inside the drill bit",
            "The mud tank lining"
          ],
          correctIndex: 1,
          explanation: "A liner hangs from the lower section of the previous casing string via a liner hanger, saving substantial steel and cementing costs."
        },
        {
          id: "q15_7",
          topic: "Offshore Rigs",
          question: "Which offshore rig type uses Dynamic Positioning (DP thrusters linked to GPS) to remain on station over the wellhead in deepwater (5,000+ ft)?",
          options: ["Jackup rig", "Drillship", "Barge rig", "Platform rig"],
          correctIndex: 1,
          explanation: "Drillships (and deepwater semi-submersibles) use computer-controlled azimuth thrusters and GPS acoustic transponders to maintain station without physical mooring anchors."
        },
        {
          id: "q15_8",
          topic: "Circulation System",
          question: "Triplex mud pumps are universally preferred over duplex pumps on modern rigs because:",
          options: [
            "They are single-acting, deliver smoother pressure pulses, and handle higher discharge pressures with less weight",
            "They do not use pistons",
            "They run on compressed air only",
            "They cannot wear out"
          ],
          correctIndex: 0,
          explanation: "Triplex pumps have three single-acting pistons, delivering smoother discharge pressure with smaller pulsation dampers and higher hydraulic horsepower efficiency."
        },
        {
          id: "q15_9",
          topic: "Rig Systems",
          question: "The drawworks on a drilling rig is part of which system?",
          options: ["Circulating system", "Hoisting system", "Well control system", "Power generation system"],
          correctIndex: 1,
          explanation: "The drawworks is the primary winch mechanism in the hoisting system that spools the wire rope drill line to raise and lower the traveling block."
        },
        {
          id: "q15_10",
          topic: "Casing Program",
          question: "What is 'Casing Seat Selection' primarily based on?",
          options: [
            "Available drill pipe lengths",
            "Balancing pore pressure, fracture gradient, and hole stability margins to avoid kicks and lost circulation",
            "The color of the drill cuttings",
            "Rig crew shift hours"
          ],
          correctIndex: 1,
          explanation: "Casing seats are chosen where pore pressure approaches fracture gradient limits, ensuring the open hole can withstand the required mud weights without fracturing."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc15_1",
          title: "Hoisting System Fastline Tension & Horsepower",
          scenario: "A drilling rig is pulling a hook load of 450,000 lbs (hook load W = 450,000 lbs). The block and tackle system has 10 lines strung (N = 10). Mechanical efficiency of the sheaves and block system is estimated at 84% (E = 0.84). The traveling block is being hoisted at a hook velocity v = 60 ft/min.",
          formula: "T_fastline = W / (N * E); HP_hook = (W * v) / 33,000; HP_drawworks = HP_hook / E",
          givenData: {
            "Hook Load W (lbs)": 450000,
            "Number of lines N": 10,
            "Efficiency E": 0.84,
            "Hook Velocity (ft/min)": 60
          },
          questionText: "Calculate: 1) Fast line tension on the drawworks drum in lbs, 2) Useful hook horsepower (HP), and 3) Required drawworks input horsepower.",
          solutionSteps: [
            "Step 1: Fast line tension T_fastline = W / (N * E) = 450,000 / (10 * 0.84) = 450,000 / 8.4 = 53,571 lbs",
            "Step 2: Useful Hook Horsepower HP_hook = (450,000 * 60) / 33,000 = 27,000,000 / 33,000 = 818.2 HP",
            "Step 3: Drawworks Input HP = HP_hook / E = 818.2 / 0.84 = 974 HP"
          ],
          finalAnswer: "Fastline Tension = 53,571 lbs, Hook HP = 818 HP, Drawworks HP = 974 HP",
          inputUnit: "lbs",
          expectedNumber: 53571,
          tolerance: 500
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int15_1",
        question: "Walk me through how you select casing setting depths for a deep exploration well using a pore pressure and fracture gradient window.",
        whyAsked: "A classic drilling engineering interview question to see whether you understand the fundamental safety window of well design.",
        modelAnswer: "Casing seat selection is designed from bottom to top using the pore pressure and fracture gradient profile:\n1. Establish the Drilling Window: We plot pore pressure (PP), collapse pressure, and fracture gradient (FG) against True Vertical Depth (TVD). We apply safety design margins: typically +0.5 ppg trip margin above pore pressure, and -0.5 ppg kick tolerance / surge margin below fracture gradient.\n2. Design from TD to Surface (Bottom-Up Method): Start at total depth (TD) with the required mud weight to control pore pressure at bottom. Trace a vertical line upward representing this hydrostatic mud weight. Where this line intersects the fracture gradient minus safety margin, the rock will break down. This intersection defines the intermediate casing seat.\n3. Repeat for Next Interval: At that depth, look at the pore pressure at that point. Choose the mud weight required, trace upward until it hits the fracture gradient line again to set the surface casing seat. This ensures we never drill an open hole section where the mud weight needed to prevent a kick at the bottom exceeds the fracture strength at the casing shoe at the top.",
        keyPoints: [
          "Plot Pore Pressure, Fracture Gradient, and safety margins vs TVD.",
          "Design bottom-up: start at TD, find where bottom mud weight exceeds upper rock fracture gradient.",
          "Ensures open-hole drilling margin prevents kicks at the bottom and lost circulation at the shoe."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Audit Drilling Engineering Roles at Halliburton & SLB",
      instructions: [
        "Examine job descriptions for 'Field Engineer - Drilling', 'Directional Drilling Specialist', or 'Wellsite Drilling Engineer'.",
        "Add key drilling buzzwords (BHA, casing design, drilling fluids, hydraulics) to your study notes."
      ],
      deliverable: "Summary of 3 key drilling competencies requested by top service companies."
    }
  },

  // DAY 16
  {
    dayNumber: 16,
    phaseId: 1,
    weekNumber: 3,
    title: "Drill String, Drill Collars & Bottom Hole Assembly (BHA)",
    category: "drilling",
    categoryLabel: "Drill String",
    todayGoal: "Master drill string design, drill pipe grades, heavy-weight drill pipe, drill collars, neutral point, and BHA components.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "The drill string conveys rotary torque and drilling mud to the bit while supplying weight-on-bit (WOB) to crush rock. A drill string consists of standard Drill Pipe (DP), Heavy-Weight Drill Pipe (HWDP), and the Bottom Hole Assembly (BHA). The BHA includes Drill Collars (heavy thick-walled steel cylinders), stabilizers, jars, reamers, and MWD/LWD sensor collars. Drill collars provide compressive WOB while keeping the slender drill pipe in tension to prevent catastrophic helical buckling.",
      keyPoints: [
        "Drill Pipe API Grades: E-75 (yield strength 75,000 psi), X-95 (95,000 psi), G-105 (105,000 psi), and S-135 (135,000 psi). S-135 is the highest strength steel used for deep, high-tension wells.",
        "Drill Collars (DC): Thick-walled heavy tubulars that provide WOB. They keep the neutral point of tension-compression inside the rigid BHA, preventing drill pipe fatigue and buckling.",
        "Heavy-Weight Drill Pipe (HWDP): Intermediate weight pipe with thick walls and center wear pads. Used as a flexible transition zone between stiff drill collars and flexible drill pipe to reduce stress concentrations.",
        "Neutral Point: The point along the drill string where axial tension transitions to axial compression. Drill pipe must NEVER be run in compression in vertical holes; the neutral point must strictly stay within the drill collars.",
        "Buoyancy Factor (BF): Steel weighs less when submerged in drilling fluid: BF = 1 - (rho_mud / 65.5) = (65.5 - rho_mud) / 65.5, where steel density = 65.5 ppg (489.5 lb/cu ft)."
      ],
      coreFormulas: [
        {
          name: "Buoyancy Factor (BF)",
          formula: "BF = (65.5 - rho_mud) / 65.5",
          explanation: "rho_mud in ppg. For example, in 10 ppg mud: BF = (65.5 - 10)/65.5 = 0.847."
        },
        {
          name: "Drill Collar Length for WOB",
          formula: "L_DC = WOB / [W_DC * BF * cos(alpha) * Safety_Factor]",
          explanation: "W_DC is air weight in lb/ft, alpha is well inclination angle, safety factor typically 0.80 to 0.85 (80-85% rule)."
        }
      ],
      fieldInsight: "Always use the 80% rule (safety margin of 15–20%) when sizing drill collars for Weight on Bit. If bit bounce or unexpected friction consumes BHA weight, the neutral point will migrate upward into the slender drill pipe, causing rapid cyclical bending fatigue, washouts, and expensive twist-offs."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Drilling Engineering (Bourgoyne et al.)",
          chapterOrSection: "Chapter 7: Drill String Design",
          note: "Study tension, collapse, burst, and shock loading design factors for drill pipe."
        },
        {
          title: "Standard Handbook of Petroleum and Natural Gas Engineering (William C. Lyons)",
          chapterOrSection: "Section 4: Drilling and Well Completions - Drill Strings",
          note: "Review API tool joint connections (NC38, NC50 / 4-1/2 IF) and makeup torque."
        }
      ],
      recommendedTopics: [
        "Neutral point calculation (buoyancy method vs axial force method)",
        "Drilling jars (hydraulic/mechanical) and jar accelerator placement",
        "Bit stabilization: Packed hole assembly vs pendulum assembly"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q16_1",
          topic: "Drill String",
          question: "What is the primary function of Drill Collars in a drilling BHA?",
          options: [
            "To filter mud cuttings",
            "To provide compressive Weight on Bit (WOB) and keep the slender drill pipe in tension to prevent buckling",
            "To measure formation resistivity",
            "To insulate the wellbore thermally"
          ],
          correctIndex: 1,
          explanation: "Drill collars are thick-walled heavy steel tubulars designed to provide compressive weight onto the bit while keeping the rest of the drill string above in tension."
        },
        {
          id: "q16_2",
          topic: "API Grades",
          question: "Which of the following API drill pipe steel grades has the HIGHEST minimum yield strength?",
          options: ["E-75", "X-95", "G-105", "S-135"],
          correctIndex: 3,
          explanation: "S-135 has a minimum yield strength of 135,000 psi, making it the strongest standard API drill pipe grade."
        },
        {
          id: "q16_3",
          topic: "Buoyancy Factor",
          question: "What is the Buoyancy Factor (BF) for steel tubulars submerged in a 12.0 ppg drilling fluid?",
          options: ["0.655", "0.817", "0.950", "1.120"],
          correctIndex: 1,
          explanation: "BF = (65.5 - rho_mud) / 65.5 = (65.5 - 12.0) / 65.5 = 53.5 / 65.5 = 0.8168 (~0.817)."
        },
        {
          id: "q16_4",
          topic: "HWDP",
          question: "Heavy-Weight Drill Pipe (HWDP) is strategically placed in the drill string to:",
          options: [
            "Provide a gradual stiffness transition between rigid drill collars and flexible drill pipe, reducing fatigue failures",
            "Replace the drill bit",
            "Act as a casing string",
            "Reduce mud density"
          ],
          correctIndex: 0,
          explanation: "HWDP has wall thickness between standard drill pipe and drill collars, smoothing out stress concentrations and preventing abrupt bending fatigue."
        },
        {
          id: "q16_5",
          topic: "Neutral Point",
          question: "Why is it dangerous for the Neutral Point of tension-compression to migrate up into standard drill pipe during vertical drilling?",
          options: [
            "The mud pump will trip offline",
            "Slender drill pipe will buckle helically under compressive axial load, leading to rapid cyclical fatigue, washouts, and twist-offs",
            "Casing will expand",
            "The bit will rotate backwards"
          ],
          correctIndex: 1,
          explanation: "Standard drill pipe is slender and cannot support compressive axial loads without buckling, leading to rapid metal fatigue and mechanical failure (twist-off)."
        },
        {
          id: "q16_6",
          topic: "BHA Components",
          question: "What is the purpose of a 'Drilling Jar' installed in the BHA?",
          options: [
            "To deliver high-impact mechanical shock blows (upward or downward) to free stuck drill string components",
            "To store lubricant for the drill bit",
            "To measure formation porosity",
            "To mix bentonite"
          ],
          correctIndex: 0,
          explanation: "Jars store mechanical or hydraulic energy and release it in a sharp impact blow to free differentially stuck or mechanically wedged drill string assemblies."
        },
        {
          id: "q16_7",
          topic: "Tool Joints",
          question: "Drill pipe tool joints are threaded with API rotary shouldered connections that achieve sealing via:",
          options: ["Teflon tape", "Precision-machined metal-to-metal torque shoulder seal under proper makeup torque", "Rubber O-rings only", "Cement glue"],
          correctIndex: 1,
          explanation: "Rotary shouldered connections seal via high compressive pre-load between the pin and box metal torque shoulders under specified makeup torque."
        },
        {
          id: "q16_8",
          topic: "Stabilizers",
          question: "In a rotary BHA, 'Near-Bit Stabilizers' and 'String Stabilizers' are used primarily to:",
          options: [
            "Centralize the BHA, control well trajectory (build, hold, or drop inclination), and minimize bit wobble/vibration",
            "Pump mud faster",
            "Cool the surface mud tanks",
            "Increase hook load"
          ],
          correctIndex: 0,
          explanation: "Stabilizers align the BHA within the wellbore wall, controlling directional inclination tendencies and dampening destructive lateral vibrations."
        },
        {
          id: "q16_9",
          topic: "Drill String Failure",
          question: "What does 'Washout' mean in drill pipe inspection?",
          options: [
            "Cleaning mud off the pipe on the rig floor",
            "A small fatigue crack that has been enlarged by high-velocity drilling mud erosion into a fluid leak",
            "Excessive cement behind casing",
            "Corrosion on the derrick"
          ],
          correctIndex: 1,
          explanation: "A washout occurs when a fatigue crack penetrates the pipe wall, allowing abrasive pressurized drilling mud to erode and wash out the metal."
        },
        {
          id: "q16_10",
          topic: "Drill Bits",
          question: "Which type of drill bit uses synthetic polycrystalline diamond compact cutters bonded to tungsten carbide studs to shear rock continuously?",
          options: ["Roller cone milled-tooth bit", "PDC (Polycrystalline Diamond Compact) bit", "Percussion hammer bit", "Drag bit"],
          correctIndex: 1,
          explanation: "PDC bits have no moving parts; synthetic diamond cutters shear rock via continuous rotary scraping, dominating modern drilling for rate of penetration."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc16_1",
          title: "Drill Collar Weight & Required Length Calculation",
          scenario: "A drilling engineer requires a Weight on Bit WOB = 40,000 lbs in a vertical well (inclination alpha = 0°). The drilling fluid density is 11.0 ppg. The selected drill collars have an air weight of 147 lb/ft. The operator mandates an 85% safety factor to ensure the neutral point stays strictly within the drill collars (Safety Factor = 0.85).",
          formula: "BF = (65.5 - rho_mud) / 65.5; L_DC = WOB / (W_DC * BF * Safety_Factor)",
          givenData: {
            "WOB (lbs)": 40000,
            "rho_mud (ppg)": 11.0,
            "Drill collar weight W_DC (lb/ft)": 147,
            "Safety Factor": 0.85
          },
          questionText: "Calculate: 1) The buoyancy factor (BF), and 2) The minimum total length of drill collars (L_DC) required in feet.",
          solutionSteps: [
            "Step 1: Calculate Buoyancy Factor BF = (65.5 - 11.0) / 65.5 = 54.5 / 65.5 = 0.8321",
            "Step 2: Effective submerged weight per foot = W_DC * BF = 147 * 0.8321 = 122.32 lb/ft",
            "Step 3: Factored available weight per foot = 122.32 * 0.85 = 103.97 lb/ft",
            "Step 4: Minimum Length L_DC = WOB / 103.97 = 40,000 / 103.97 = 384.7 ft",
            "Step 5: Assuming standard 31-ft drill collar joints: 384.7 / 31 = 12.4 -> 13 drill collars (~403 ft)."
          ],
          finalAnswer: "Buoyancy Factor = 0.832, Minimum DC Length = 385 ft (13 joints)",
          inputUnit: "ft",
          expectedNumber: 385,
          tolerance: 5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int16_1",
        question: "What causes drill string twist-offs, and what operational steps do you take as a wellsite engineer to prevent them?",
        whyAsked: "Evaluates your understanding of drilling dynamics, torque-and-drag, fatigue limits, and proactive wellsite risk mitigation.",
        modelAnswer: "A twist-off is the catastrophic mechanical parting of the drill string downhole. The primary causes are:\n1. Metal Fatigue: Cyclical reverse bending stress caused by rotating the drill string through doglegs or sharp trajectory deviations. If the neutral point moves into the slender drill pipe, compressive buckling accelerates fatigue exponentially.\n2. Excessive Torque & Torsional Vibration: Stick-slip oscillations where the bit momentarily halts and suddenly releases, generating torsional shockwaves that exceed the yield rating of tool joints.\n3. Hydrogen Embrittlement & Corrosion: H2S or CO2 cracking and pitting in brine muds acting as stress concentrators.\nTo prevent twist-offs:\n- Ensure sufficient drill collar and HWDP weight so the neutral point remains strictly within the lower 80% of the BHA at all times.\n- Monitor surface and downhole MWD shock and vibration sensors for stick-slip and whirl; adjust RPM and WOB immediately to move out of resonance.\n- Strictly adhere to API makeup torque specifications using calibrated torque gauges on the rig floor.\n- Regularly run non-destructive electromagnetic and ultrasonic inspections (EMI/UT) on pipe tubes and tool joints to retire fatigued joints before washouts become twist-offs.",
        keyPoints: [
          "Primary causes: Bending fatigue in doglegs, compressive buckling, stick-slip torsional shock, washouts.",
          "Prevention: Maintain neutral point in BHA via 80% rule, manage RPM/WOB to kill vibration.",
          "Rig floor controls: Calibrated makeup torque, routine EMI/UT pipe inspection."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Draft a Drilling Technical Project or Coursework Description",
      instructions: [
        "In your master resume file, write a 3-bullet description of your academic or field drilling experience: 'Designed BHA and drill collar programs ensuring neutral point stability and buckling prevention...'",
        "Include MIT Pune drilling laboratory or simulation modules."
      ],
      deliverable: "3 tailored drilling resume bullet points ready for application customization."
    }
  },

  // DAY 17
  {
    dayNumber: 17,
    phaseId: 1,
    weekNumber: 3,
    title: "Drilling Fluids, Mud Rheology & Filtration",
    category: "drilling",
    categoryLabel: "Drilling Fluids",
    todayGoal: "Master water-based vs non-aqueous muds, Bingham Plastic & Power Law rheology, mud weight control, and API fluid loss.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Drilling fluid ('mud') is the lifeblood of rotary drilling operations. It performs crucial functions: controlling formation pore pressures (hydrostatic overbalance), removing rock cuttings from bottom, cooling and lubricating the bit, suspending cuttings when circulation stops, and building a thin, impermeable filter cake to protect permeability. Understanding rheology (Plastic Viscosity, Yield Point, Gel Strength) is essential for hydraulic optimization and hole cleaning.",
      keyPoints: [
        "Mud Classifications: Water-Based Mud (WBM: bentonite, polymers), Non-Aqueous / Oil-Based Mud (OBM / SBM: diesel or synthetic mineral oil continuous phase with emulsified brine droplets; superior shale inhibition and lubricity), Pneumatic (air/foam/mist for underbalanced drilling).",
        "Rheological Models: Bingham Plastic Model: Shear Stress tau = YP + PV * gamma. Plastic Viscosity (PV = theta_600 - theta_300) reflects mechanical friction between solids. Yield Point (YP = theta_300 - PV) reflects chemical electrochemical attractive forces and lifting capacity.",
        "Power Law Model (Ostwald de Waele): tau = K * gamma^n. Petroleum muds are pseudoplastic (shear-thinning, n < 1): viscosity is high at low annular shear rates (lifting cuttings) and low at high bit nozzle shear rates (reducing pump pressure).",
        "Gel Strength (10-second & 10-minute): Quantifies thixotropic gel structure formed when mud is static, preventing cuttings from sinking to the bottom during connections.",
        "API Filter Press: Measures fluid loss through paper at 100 psi differential pressure (standard WBM < 5-8 mL/30 min; OBM < 2 mL)."
      ],
      coreFormulas: [
        {
          name: "Plastic Viscosity (PV) & Yield Point (YP)",
          formula: "PV = theta_600 - theta_300 (in cP); YP = theta_300 - PV = 2 * theta_300 - theta_600 (in lb/100 sq ft)",
          explanation: "From Fann 35 rotational viscometer dial readings at 600 and 300 RPM."
        },
        {
          name: "Barite Sacks for Mud Weight Increase",
          formula: "Sacks / 100 bbl = [1470 * (rho_2 - rho_1)] / (35.0 - rho_2)",
          explanation: "Barite SG = 4.2 (density = 35.0 ppg). 1 sack = 100 lbs."
        }
      ],
      fieldInsight: "Always watch the Yield Point to Plastic Viscosity ratio (YP/PV). If YP drops too low, cuttings will slip backward in the annulus, causing cuttings beds, tight hole, and pipe sticking. Conversely, if YP becomes too high, circulating equivalent circulating density (ECD) will surge, potentially exceeding formation fracture pressure and causing lost circulation."
    },
    watchRead: {
      textbooks: [
        {
          title: "Composition and Properties of Drilling and Completion Fluids (Ryder, Gray, Darley)",
          chapterOrSection: "Chapter 3: Mud Rheology & Chapter 5: Drilling Fluid Types",
          note: "Study Bingham Plastic, Herschel-Bulkley models, and barite weighting."
        },
        {
          title: "Applied Drilling Engineering (Bourgoyne et al.)",
          chapterOrSection: "Chapter 2: Drilling Fluids",
          note: "Review Fann viscometer testing, Marsh funnel, and API fluid loss procedures."
        }
      ],
      recommendedTopics: [
        "Equivalent Circulating Density (ECD) = rho_mud + Delta P_annulus / (0.052 * TVD)",
        "Shale stability: Osmotic water transfer and potassium chloride (KCl) / glycol inhibition",
        "Thixotropy: Progressive vs flat gel strength development"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q17_1",
          topic: "Mud Rheology",
          question: "On a standard Fann rotational viscometer, the Plastic Viscosity (PV) is calculated from the 600 RPM and 300 RPM dial readings as:",
          options: ["PV = theta_600 + theta_300", "PV = theta_600 - theta_300", "PV = theta_300 / 2", "PV = 2 * theta_600 - theta_300"],
          correctIndex: 1,
          explanation: "PV in centipoise (cP) equals the difference between the 600 RPM and 300 RPM dial readings: PV = theta_600 - theta_300."
        },
        {
          id: "q17_2",
          topic: "Mud Rheology",
          question: "What physical property does 'Plastic Viscosity' (PV) primarily reflect in a drilling fluid?",
          options: [
            "The chemical attractive charges between clay platelets",
            "The mechanical friction between solid particles and liquid molecules in the mud",
            "The hydrostatic pressure at bottom-hole",
            "The water loss to permeable sands"
          ],
          correctIndex: 1,
          explanation: "PV represents internal mechanical resistance to fluid shear caused by particle size, shape, concentration, and continuous phase viscosity."
        },
        {
          id: "q17_3",
          topic: "Mud Rheology",
          question: "Yield Point (YP) is measured in which petroleum engineering units?",
          options: ["cP (centipoise)", "lb / 100 sq ft", "psi / ft", "Gallons / minute"],
          correctIndex: 1,
          explanation: "Yield Point represents the threshold shear stress required to initiate fluid flow, measured in pounds per 100 square feet (lb/100 ft²)."
        },
        {
          id: "q17_4",
          topic: "Drilling Fluids",
          question: "What common high-density mineral additive (Specific Gravity ~ 4.2) is universally added to drilling fluids to increase mud weight?",
          options: ["Bentonite", "Barite (Barium Sulfate, BaSO4)", "Sodium Chloride", "Xanthan gum"],
          correctIndex: 1,
          explanation: "Barite (BaSO4, SG ~ 4.20) is insoluble and chemically inert, making it the primary weighting material to raise mud weight up to 18–20+ ppg."
        },
        {
          id: "q17_5",
          topic: "Fluid Behavior",
          question: "Drilling muds are engineered to be 'shear-thinning' (pseudoplastic). This means:",
          options: [
            "Viscosity increases as flow rate increases",
            "Effective viscosity decreases as shear rate increases (low viscosity at bit nozzles, high viscosity in annulus)",
            "Viscosity is completely independent of shear rate",
            "The mud freezes under pressure"
          ],
          correctIndex: 1,
          explanation: "Pseudoplastic fluids thin under high shear rates (reducing pressure loss through nozzles) and thicken at lower annular shear rates (enhancing cutting carrying capacity)."
        },
        {
          id: "q17_6",
          topic: "Gel Strength",
          question: "What is the primary operational purpose of 'Gel Strength' in drilling mud?",
          options: [
            "To permanently cement the pipe in place",
            "To suspend drilled cuttings and barite weighting material when the mud pumps are shut down during connections",
            "To decrease hydrostatic pressure",
            "To dissolve rock"
          ],
          correctIndex: 1,
          explanation: "Gel strength provides thixotropic structure to suspend cuttings when mud circulation ceases, preventing cuttings from packing off the BHA."
        },
        {
          id: "q17_7",
          topic: "ECD",
          question: "Equivalent Circulating Density (ECD) is always higher than static mud weight because of:",
          options: ["Annular friction pressure drop created when mud is pumped up the hole", "Cooling of the mud", "Gas expansion", "Casing weight"],
          correctIndex: 0,
          explanation: "ECD = rho_static + (Delta P_annular) / (0.052 * TVD). The frictional resistance of the moving fluid column adds dynamic backpressure onto the formation."
        },
        {
          id: "q17_8",
          topic: "Oil-Based Mud",
          question: "What is a major advantage of Oil-Based Mud (OBM / SBM) over conventional Water-Based Mud?",
          options: [
            "Superior shale stability (prevents reactive clays from swelling/sloughing) and high lubricity that reduces torque and drag",
            "Lower purchase cost",
            "Environmentally friendly disposal directly into marine waters",
            "Zero need for weighting materials"
          ],
          correctIndex: 0,
          explanation: "OBM contains emulsified saline brine in an oil continuous phase; water cannot contact water-sensitive clays, preventing hydration and borehole collapse."
        },
        {
          id: "q17_9",
          topic: "Filtration",
          question: "An ideal drilling filter cake deposited across a permeable reservoir formation should be:",
          options: [
            "Thick (over 1 inch) and porous",
            "Thin, tough, and impermeable with low fluid loss",
            "Made of solid steel",
            "Completely soluble in crude oil"
          ],
          correctIndex: 1,
          explanation: "A thin, low-permeability mud cake minimizes mud filtrate invasion into the pay zone (reducing formation damage) and prevents differential pipe sticking."
        },
        {
          id: "q17_10",
          topic: "Marsh Funnel",
          question: "The Marsh Funnel on the rig floor measures what quantity?",
          options: ["True plastic viscosity in centipoise", "Funnel viscosity: the time in seconds for one quart (946 mL) of mud to flow out", "Mud weight in ppg", "Pore pressure"],
          correctIndex: 1,
          explanation: "The Marsh Funnel is a quick rig-site qualitative indicator: it measures the seconds required for 1 quart of fluid to outflow (freshwater = 26 seconds)."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc17_1",
          title: "Barite Requirement to Increase Mud Weight",
          scenario: "An active mud pit system contains V = 800 bbl of drilling fluid at an initial density rho_1 = 9.8 ppg. A kick occurs, and the mud engineer must increase mud weight to rho_2 = 11.5 ppg using commercial barite (barite density = 35.0 ppg, 100 lb/sack).",
          formula: "Sacks_per_100_bbl = [1470 * (rho_2 - rho_1)] / (35.0 - rho_2); Total_Sacks = Sacks_per_100_bbl * (V / 100)",
          givenData: {
            "Total Mud Volume V (bbl)": 800,
            "Initial Mud Weight rho_1 (ppg)": 9.8,
            "Target Mud Weight rho_2 (ppg)": 11.5,
            "Barite Density (ppg)": 35.0
          },
          questionText: "Calculate: 1) Sacks of barite required per 100 bbl of mud, and 2) Total sacks of barite required for the 800 bbl system.",
          solutionSteps: [
            "Step 1: Numerator = 1470 * (rho_2 - rho_1) = 1470 * (11.5 - 9.8) = 1470 * 1.7 = 2,499",
            "Step 2: Denominator = 35.0 - rho_2 = 35.0 - 11.5 = 23.5",
            "Step 3: Sacks per 100 bbl = 2,499 / 23.5 = 106.34 sacks/100 bbl",
            "Step 4: Total Sacks for 800 bbl = 106.34 * (800 / 100) = 106.34 * 8 = 850.7 sacks (~851 sacks)."
          ],
          finalAnswer: "106.3 sacks/100 bbl; Total = 851 sacks of barite",
          inputUnit: "sacks",
          expectedNumber: 851,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int17_1",
        question: "What is Equivalent Circulating Density (ECD), why is it critical during narrow-margin drilling, and how do you reduce it?",
        whyAsked: "High-frequency drilling interview question, especially for deepwater or depleted reservoir drilling.",
        modelAnswer: "Equivalent Circulating Density (ECD) is the effective downhole pressure exerted against the formation when the mud pumps are actively circulating, expressed in terms of equivalent fluid density:\n$$ECD = \\rho_{static} + \\frac{\\Delta P_{annular}}{0.052 \\cdot TVD}$$\nwhere $\\Delta P_{annular}$ is the frictional pressure drop of fluid traveling up the annulus.\nIn deepwater or depleted mature reservoirs, the drilling window between pore pressure and fracture gradient can be razor-thin (often less than 0.5 to 0.8 ppg). While the static mud weight might be safely below fracture gradient, starting the mud pumps adds frictional backpressure. If the resulting ECD exceeds the fracture gradient, the formation will fracture at the weakest point (usually the casing shoe), causing massive lost circulation and a subsequent underground blowout.\nTo reduce ECD:\n1. Lower Plastic Viscosity (PV) by diluting the mud or running shale shakers and centrifuges efficiently to dump fine drill solids,\n2. Optimize flow rate (GPM) to maintain adequate hole cleaning without excessive turbulent annular friction,\n3. Use larger annular clearance (larger casing/hole geometry),\n4. Rotate the drill string to break gel structures without needing excessive hydraulic pressure.",
        keyPoints: [
          "ECD is static mud weight plus annular friction head: $ECD = \\rho_{static} + \\Delta P_{ann} / (0.052 \\cdot TVD)$.",
          "Critical in narrow drilling margins to avoid exceeding fracture gradient and inducing lost circulation.",
          "Reduction: Control drill solids to lower PV, optimize pump rate, manage pipe rotation."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Connect with 2 Drilling Fluids Specialists on LinkedIn",
      instructions: [
        "Search for 'Mud Engineer' or 'Fluids Specialist' at M-I SWACO (SLB), Halliburton Baroid, or Baker Hughes.",
        "Send connection requests noting your interest in drilling hydraulics and fluids optimization."
      ],
      deliverable: "2 networking connections initiated with drilling fluids professionals."
    }
  },

  // DAY 18
  {
    dayNumber: 18,
    phaseId: 1,
    weekNumber: 3,
    title: "Pressure Control: Pore Pressure, Fracture Gradient & Kick Influx",
    category: "drilling",
    categoryLabel: "Pressure Control",
    todayGoal: "Master the drilling safety margin, kick warning signs, shut-in procedures, and kick tolerance calculations.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Pressure control is the foundation of well integrity. Primary well control is maintained by the hydrostatic pressure of the drilling fluid column preventing formation fluid from entering the wellbore (P_hyd >= P_pore). If hydrostatic pressure drops below pore pressure, a kick occurs. If not recognized and shut in immediately, a kick can escalate into an uncontrollable surface blowout. Understanding early kick detection signs and immediate shut-in protocols saves lives and assets.",
      keyPoints: [
        "Primary Well Control: Hydrostatic pressure of mud column > Pore pressure (under normal operations, overbalance margin of 100–300 psi).",
        "Secondary Well Control: Mechanical blowout preventers (BOPs) closed to contain wellbore pressure when primary control fails.",
        "Kick Warning Signs While Drilling: 1) Sudden drilling break (rapid increase in Rate of Penetration ROP), 2) Increase in mud pit volume (pit gain), 3) Increase in returning flow rate while pump rate is constant, 4) Decrease in standpipe pump pressure with increased stroke rate (lighter influx fluid in annulus), 5) Cut mud weight / gas-cut mud at shakers.",
        "Kick Warning Signs While Tripping: Hole does not take the calculated volume of mud when pulling pipe (swabbing), or well flows with pumps off.",
        "Shut-In Protocol (Hard vs Soft Shut-In): Stop pumps, raise string until tool joint clears rotary table, shut annular or pipe rams, open choke line to manifold, record Shut-In Drill Pipe Pressure (SIDPP) and Shut-In Casing Pressure (SICP)."
      ],
      coreFormulas: [
        {
          name: "Formation Pressure from SIDPP",
          formula: "P_pore = P_hyd_DP + SIDPP = (0.052 * rho_mud * TVD) + SIDPP",
          explanation: "SIDPP reflects true formation pore pressure because the drill string contains clean, uncontaminated drilling mud."
        },
        {
          name: "Kill Mud Weight (KMW)",
          formula: "KMW = rho_mud + [SIDPP / (0.052 * TVD)]",
          explanation: "The new mud density required to balance formation pore pressure exactly with zero surface pressure."
        }
      ],
      fieldInsight: "Always use Shut-In Drill Pipe Pressure (SIDPP), NEVER Shut-In Casing Pressure (SICP), to calculate formation pore pressure and kill mud weight. The drill pipe contains an uncontaminated column of known mud weight, whereas the casing annulus is contaminated by an unknown mixture of gas, oil, or water."
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Control for the Rig-Site Team",
          chapterOrSection: "Chapter 4: Kick Causes and Detection",
          note: "Study swab and surge pressures, lost circulation, and early kick indicators."
        },
        {
          title: "Applied Drilling Engineering (Bourgoyne et al.)",
          chapterOrSection: "Chapter 6: Well Control",
          note: "Review hard vs soft shut-in procedures and choke manifold configuration."
        }
      ],
      recommendedTopics: [
        "Swabbing vs Surging during tripping pipe",
        "Kick Tolerance: Maximum allowable gas influx volume before fracturing casing shoe",
        "Maximum Allowable Annular Surface Pressure: MAASP = (LOT_EMW - rho_mud) * 0.052 * TVD_shoe"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q18_1",
          topic: "Kick Detection",
          question: "What is the single most reliable positive indicator that a kick has entered the wellbore while drilling?",
          options: [
            "Sudden increase in rotary torque",
            "An unexplained increase in active mud pit volume (pit gain)",
            "Mud pump temperature increases by 2°F",
            "Shale shakers vibrate faster"
          ],
          correctIndex: 1,
          explanation: "When formation fluid enters the wellbore, it displaces drilling mud upward into the surface pits, causing a direct, measurable pit volume gain."
        },
        {
          id: "q18_2",
          topic: "Well Control",
          question: "Why must Shut-In Drill Pipe Pressure (SIDPP)—and NOT Shut-In Casing Pressure (SICP)—be used to calculate Kill Mud Weight?",
          options: [
            "Because the drill pipe has thicker steel walls",
            "Because the drill pipe contains a solid, uncontaminated column of original drilling fluid of known density",
            "Because the casing gauge is always broken",
            "Because casing pressure is always zero"
          ],
          correctIndex: 1,
          explanation: "The inside of the drill string is clean original mud with known hydrostatic head, so SIDPP + DP Hydrostatic = exact formation pore pressure."
        },
        {
          id: "q18_3",
          topic: "Kick Detection",
          question: "A 'drilling break' is defined as:",
          options: [
            "The drill bit breaks into pieces",
            "A sudden, dramatic increase in Rate of Penetration (ROP), often indicating entry into a porous, overpressured formation",
            "The crew taking a coffee break",
            "Shutting down the rig generators"
          ],
          correctIndex: 1,
          explanation: "A drilling break occurs when entering higher porosity or underbalanced overpressured rock, serving as a primary early warning to perform a flow check."
        },
        {
          id: "q18_4",
          topic: "Pressure Control",
          question: "What does MAASP stand for in well control engineering?",
          options: [
            "Maximum Allowable Annular Surface Pressure",
            "Minimum Air Activated Safety Pressure",
            "Mud Acid Acidizing Standard Practice",
            "Mechanical Annular Area Safety Parameter"
          ],
          correctIndex: 0,
          explanation: "MAASP is the maximum surface pressure permissible on the casing annulus before fracturing the formation at the casing shoe: MAASP = (LOT_EMW - rho_mud) * 0.052 * TVD_shoe."
        },
        {
          id: "q18_5",
          topic: "Pressure Calculations",
          question: "If TVD = 10,000 ft, current mud weight is 10.0 ppg, and SIDPP = 520 psi, what is the required Kill Mud Weight (KMW)?",
          options: ["10.5 ppg", "11.0 ppg", "12.2 ppg", "13.5 ppg"],
          correctIndex: 1,
          explanation: "KMW = rho_mud + [SIDPP / (0.052 * TVD)] = 10.0 + [520 / (0.052 * 10,000)] = 10.0 + [520 / 520] = 10.0 + 1.0 = 11.0 ppg."
        },
        {
          id: "q18_6",
          topic: "Swabbing",
          question: "'Swabbing' occurs while pulling pipe out of the hole when:",
          options: [
            "Cleaning the deck with water",
            "The upward motion of the drill string reduces bottom-hole pressure due to viscous piston suction, sucking formation fluids into the well",
            "Pumping mud at maximum rate",
            "Rotating the pipe too fast"
          ],
          correctIndex: 1,
          explanation: "Swabbing reduces bottom-hole pressure below pore pressure as pipe is pulled, especially if mud viscosity is high or annular clearance is tight."
        },
        {
          id: "q18_7",
          topic: "Well Control",
          question: "If Shut-In Casing Pressure (SICP) is significantly higher than Shut-In Drill Pipe Pressure (SIDPP), this indicates that the influx fluid is:",
          options: [
            "Heavy saline water",
            "Natural gas (or oil with gas), because its low density exerts very little hydrostatic pressure in the annulus",
            "Barite settlement",
            "Freshwater"
          ],
          correctIndex: 1,
          explanation: "Gas has very low density, so the annular hydrostatic column is much lighter than the drill pipe column. To balance the same pore pressure, surface casing pressure must be higher."
        },
        {
          id: "q18_8",
          topic: "BOP Systems",
          question: "Which component of a standard BOP stack can seal around any size or shape of pipe in the hole, as well as on an open hole (in emergencies)?",
          options: ["Pipe rams", "Blind shear rams", "Annular preventer", "Choke valve"],
          correctIndex: 2,
          explanation: "The annular preventer uses a reinforced elastomeric doughnut packing unit that can close around drill pipe, collars, casing, or open hole."
        },
        {
          id: "q18_9",
          topic: "Well Control",
          question: "When a kick is confirmed during drilling, what is the very FIRST action the driller must take?",
          options: [
            "Call the company head office",
            "Stop rotary, space out the drill string (position tool joint above table), stop mud pumps, and shut in the well",
            "Pump barite at maximum rate",
            "Drop the drill string"
          ],
          correctIndex: 1,
          explanation: "Immediate shut-in protocol: Stop rotation, pick up off bottom to clear tool joint, shut down pumps, shut in the well (close BOP), and observe pressures."
        },
        {
          id: "q18_10",
          topic: "Secondary Control",
          question: "What is the primary role of 'Blind Shear Rams' in a BOP stack?",
          options: [
            "To measure mud flow",
            "To cut through the drill pipe and completely seal the open wellbore in a catastrophic emergency",
            "To center the pipe during normal drilling",
            "To inject cement"
          ],
          correctIndex: 1,
          explanation: "Blind shear rams feature high-strength hardened steel cutting blades designed to shear through drill pipe and provide a complete pressure seal across the wellbore."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc18_1",
          title: "Kill Mud Weight & MAASP Calculation",
          scenario: "A vertical well is drilled to 12,000 ft TVD with 10.5 ppg mud. Casing shoe is set at 8,000 ft TVD. A Leak-Off Test at the shoe gave a fracture gradient equivalent of 14.0 ppg. While drilling, a kick occurs. The well is shut in, yielding: SIDPP = 450 psi, SICP = 650 psi, Pit gain = 20 bbl.",
          formula: "KMW = rho_mud + [SIDPP / (0.052 * TVD)]; MAASP = (LOT_EMW - rho_mud) * 0.052 * TVD_shoe",
          givenData: {
            "TVD (ft)": 12000,
            "TVD_shoe (ft)": 8000,
            "Current mud weight (ppg)": 10.5,
            "LOT EMW (ppg)": 14.0,
            "SIDPP (psi)": 450,
            "SICP (psi)": 650
          },
          questionText: "Calculate: 1) Kill Mud Weight (KMW) in ppg, and 2) Current Maximum Allowable Annular Surface Pressure (MAASP) in psi.",
          solutionSteps: [
            "Step 1: Calculate KMW = 10.5 + [450 / (0.052 * 12,000)] = 10.5 + [450 / 624] = 10.5 + 0.721 = 11.22 ppg (~11.3 ppg)",
            "Step 2: Calculate MAASP with current 10.5 ppg mud at casing shoe (8,000 ft TVD):",
            "       MAASP = (LOT_EMW - rho_mud) * 0.052 * TVD_shoe",
            "       MAASP = (14.0 - 10.5) * 0.052 * 8,000 = 3.5 * 416 = 1,456 psi"
          ],
          finalAnswer: "Kill Mud Weight = 11.3 ppg, MAASP = 1,456 psi",
          inputUnit: "ppg",
          expectedNumber: 11.3,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int18_1",
        question: "Explain the difference between a Hard Shut-In and a Soft Shut-In. Which one is preferred in modern drilling operations, and why?",
        whyAsked: "Evaluates your well control training (IWCF / IADC WellSharp standards) and understanding of water hammer shock vs influx minimization.",
        modelAnswer: "In well control, the choice between Hard Shut-In and Soft Shut-In governs how the BOP is actuated:\n1. Hard Shut-In: The choke on the choke line is already kept in a closed position during normal drilling. When a kick is detected: 1) Stop rotation and space out tool joint, 2) Stop mud pumps, 3) Immediately close the annular preventer or pipe rams, 4) Open the Hydraulic Choke Valve (HCR). Because the choke is closed, the well is shut in instantly. The primary advantage is speed: it stops influx entry in the shortest time, minimizing kick volume and peak casing pressures.\n2. Soft Shut-In: The choke is kept open during drilling. When a kick is detected: 1) Space out and stop pumps, 2) Open the HCR valve, 3) Close the annular or pipe ram, 4) Manually close the choke valve while observing casing pressure. The historical intent was to prevent pressure shock ('water hammer') on the casing shoe.\nModern Industry Standard: Most major operators (Shell, ExxonMobil, BP) and IWCF/IADC guidelines now mandate Hard Shut-In. Modern drilling research proved that water hammer pressure spikes are negligible compared to the massive danger of allowing an extra 10 to 30 barrels of gas influx into the wellbore while fiddling with choke valves in a soft shut-in. Smaller influx volume means lower casing pressures and far less risk of shoe breakdown.",
        keyPoints: [
          "Hard shut-in: Choke is closed; close BOP directly; fastest shut-in method.",
          "Soft shut-in: Choke open; open HCR, close BOP, then close choke; slower.",
          "Industry standard: Hard shut-in is preferred to minimize influx volume and reduce maximum surface pressures."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Research IWCF / IADC Well Control Certification Standards",
      instructions: [
        "Review the syllabus of IWCF Level 2 / Level 3 or IADC WellSharp Well Control courses.",
        "Note the key well control formulas and principles to highlight during drilling interviews."
      ],
      deliverable: "Summary of IWCF core topics added to interview preparation binder."
    }
  },

  // DAY 19
  {
    dayNumber: 19,
    phaseId: 1,
    weekNumber: 3,
    title: "Well Control Procedures: Driller's Method vs Wait & Weight",
    category: "drilling",
    categoryLabel: "Well Control Kill",
    todayGoal: "Master constant bottom-hole pressure well-kill methods: Driller's Method, Wait & Weight (Engineer's Method), and kill sheets.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Once a well is shut in on a kick, the influx must be circulated out while maintaining bottom-hole pressure equal to or slightly above formation pore pressure. The two primary constant bottom-hole pressure methods are the Driller's Method (two circulations) and the Wait & Weight / Engineer's Method (one circulation). Understanding how surface drill pipe and casing pressures evolve as gas expands during circulation is crucial to preventing shoe fracture.",
      keyPoints: [
        "Driller's Method (Two Circulations): 1st Circulation: Influx is circulated out using original mud weight while maintaining constant drill pipe pressure (Initial Circulating Pressure ICP). 2nd Circulation: Kill mud is circulated from surface to bit (DP pressure drops from ICP to Final Circulating Pressure FCP) and up the annulus. Simpler, requires no waiting time to weight up mud, but exerts higher surface casing pressures.",
        "Wait & Weight Method (One Circulation): Well is shut in while kill mud is weighted up in pits. Kill mud is then pumped in a single circulation. Kill mud reaches the bit while influx is still in the annulus. Produces LOWER maximum surface casing pressure and lower pressure on the casing shoe.",
        "Initial Circulating Pressure (ICP): ICP = SIDPP + Slow Circulating Rate Pressure (SCR / kill rate pressure).",
        "Final Circulating Pressure (FCP): FCP = SCR * (KMW / rho_original). The pressure when kill mud fills the drill string.",
        "Boyle's Law & Gas Expansion: P1 * V1 = P2 * V2. As gas bubbles rise up the annulus, hydrostatic head above them decreases, causing gas to expand rapidly near the surface. Choke must be opened gradually to allow gas expansion without breaking down the shoe."
      ],
      coreFormulas: [
        {
          name: "Initial Circulating Pressure (ICP)",
          formula: "ICP = SIDPP + P_SCR",
          explanation: "Measured at kill rate (e.g. 30 SPM) with original mud weight."
        },
        {
          name: "Final Circulating Pressure (FCP)",
          formula: "FCP = P_SCR * (KMW / rho_mud_orig)",
          explanation: "Friction pressure of kill mud in drill string at kill rate."
        }
      ],
      fieldInsight: "Gas expansion occurs predominantly in the top 1,000–2,000 feet of the hole. As gas nears the surface, casing pressure will accelerate rapidly. If the choke operator does not open the choke quickly to vent the expanding gas, casing pressure will spike and blow past MAASP, fracturing the casing shoe."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Drilling Engineering (Bourgoyne et al.)",
          chapterOrSection: "Chapter 6: Well-Control Procedures",
          note: "Step-by-step kill sheet preparation and graphical pressure schedules."
        },
        {
          title: "Well Control Manual (IWCF / IADC Standards)",
          chapterOrSection: "Section 5: Constant Bottomhole Pressure Methods",
          note: "Compare surface pressure profiles between Driller's vs Wait & Weight."
        }
      ],
      recommendedTopics: [
        "Kill Sheet calculation steps (strokes to bit, strokes from bit to shoe, strokes to surface)",
        "Volumetric method and lubricate-and-bleed method when drill pipe is plugged or off bottom",
        "Underground blowouts and broaching around casing shoe"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q19_1",
          topic: "Well Kill Methods",
          question: "How many complete circulations are required in the standard 'Driller's Method' of well control?",
          options: ["One circulation", "Two circulations", "Three circulations", "Zero circulations"],
          correctIndex: 1,
          explanation: "The Driller's Method requires two circulations: 1st to circulate out the influx using original mud, and 2nd to circulate kill mud throughout the well."
        },
        {
          id: "q19_2",
          topic: "Well Kill Methods",
          question: "What is the primary advantage of the Wait & Weight (Engineer's) Method over the Driller's Method?",
          options: [
            "It requires zero calculations",
            "It results in lower maximum surface casing pressures and lower pressures at the casing shoe",
            "It can be completed with pumps turned off",
            "It uses less water"
          ],
          correctIndex: 1,
          explanation: "Because kill mud is pumped immediately behind the influx, the heavier hydrostatic column in the drill pipe and lower annulus reduces surface casing pressure."
        },
        {
          id: "q19_3",
          topic: "Circulating Pressures",
          question: "Initial Circulating Pressure (ICP) is calculated as:",
          options: [
            "SIDPP + Slow Circulating Rate Pressure (SCR)",
            "SICP + Hydrostatic pressure",
            "MAASP minus SIDPP",
            "Pore pressure divided by 0.052"
          ],
          correctIndex: 0,
          explanation: "ICP = SIDPP + SCR pressure. It represents the total pressure required to overcome formation pore pressure and pump friction at kill speed."
        },
        {
          id: "q19_4",
          topic: "Circulating Pressures",
          question: "If original SCR pressure is 600 psi with 10.0 ppg mud, what is the Final Circulating Pressure (FCP) when pumping 12.0 ppg kill mud at the same pump speed?",
          options: ["500 psi", "600 psi", "720 psi", "1,200 psi"],
          correctIndex: 2,
          explanation: "FCP = SCR * (KMW / rho_orig) = 600 * (12.0 / 10.0) = 600 * 1.2 = 720 psi."
        },
        {
          id: "q19_5",
          topic: "Gas Behavior",
          question: "During gas kick circulation, as the gas bubble approaches the surface, what happens to its volume according to Boyle's Law (P1*V1 = P2*V2)?",
          options: [
            "Gas volume contracts to zero",
            "Gas volume expands rapidly because hydrostatic pressure above it decreases",
            "Gas volume remains strictly unchanged",
            "Gas turns into solid hydrate"
          ],
          correctIndex: 1,
          explanation: "As gas rises, hydrostatic head above it drops, allowing the gas bubble to expand dramatically as it nears the surface."
        },
        {
          id: "q19_6",
          topic: "Choke Operation",
          question: "During the first circulation of the Driller's Method, while gas is expanding near the surface, how must the choke operator adjust the choke to maintain constant bottom-hole pressure?",
          options: [
            "Close the choke completely",
            "Gradually open the choke to allow the expanding gas to vent without generating excessive backpressure",
            "Keep the choke locked in one position",
            "Turn off the power"
          ],
          correctIndex: 1,
          explanation: "As gas expands, it displaces mud out of the hole rapidly; the choke must be opened to allow rapid gas exit while holding constant drill pipe pressure."
        },
        {
          id: "q19_7",
          topic: "Well Kill Methods",
          question: "When kill mud is pumped from surface to the bit during the Wait & Weight method, drill pipe pressure must be controlled to decline from:",
          options: ["Zero to ICP", "ICP down to FCP according to the drill pipe pressure step-down graph", "FCP up to MAASP", "SICP to zero"],
          correctIndex: 1,
          explanation: "As heavier kill mud fills the drill string, hydrostatic head inside the string increases, so surface drill pipe pressure must decline linearly from ICP to FCP."
        },
        {
          id: "q19_8",
          topic: "Kill Sheet",
          question: "On a standard API/IADC kill sheet, what are 'Strokes to Bit' (Surface to Bit Strokes)?",
          options: [
            "Total pump strokes required to displace the internal volume of the drill string from surface to the bit nozzles",
            "Strokes needed to drill 100 feet",
            "Strokes to fill the shaker pit",
            "Strokes to close the BOP"
          ],
          correctIndex: 0,
          explanation: "Surface-to-bit strokes equals internal drill string volume (bbl) divided by pump displacement (bbl/stroke)."
        },
        {
          id: "q19_9",
          topic: "Well Control",
          question: "If the drill bit is 2,000 ft off bottom when a kick occurs and pipe cannot be run back to bottom, which well control method is applied?",
          options: ["Driller's method at full speed", "Volumetric method / Lubricate and Bleed method", "Wait & Weight method", "Open the annular preventer"],
          correctIndex: 1,
          explanation: "When pipe is off bottom and normal circulation cannot reach the influx, the Volumetric Method is used to allow gas to migrate while bleeding off calculated mud volumes."
        },
        {
          id: "q19_10",
          topic: "Equipment",
          question: "The Mud-Gas Separator (Poor Boy Degasser) on a drilling rig is installed downstream of the choke manifold to:",
          options: [
            "Separate free gas from returning mud during a well kill and vent gas safely through the derrick vent line",
            "Increase pump speed",
            "Filter rock cuttings",
            "Cool the drill bit"
          ],
          correctIndex: 0,
          explanation: "The mud-gas separator receives high-pressure gas-cut mud from the choke manifold, separates free gas via internal baffles, vents gas safely, and returns mud to the shakers."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc19_1",
          title: "Well Control Kill Sheet Calculation: ICP & FCP",
          scenario: "A well is shut in on a kick at 10,500 ft TVD with 10.2 ppg mud. Measured data: SIDPP = 420 psi, SICP = 580 psi. Slow Circulating Rate (SCR) at 30 SPM = 550 psi. Kill Mud Weight is determined to be 11.0 ppg.",
          formula: "ICP = SIDPP + P_SCR; FCP = P_SCR * (KMW / rho_mud_orig)",
          givenData: {
            "TVD (ft)": 10500,
            "Original Mud Weight (ppg)": 10.2,
            "Kill Mud Weight KMW (ppg)": 11.0,
            "SIDPP (psi)": 420,
            "SCR pressure (psi)": 550
          },
          questionText: "Calculate: 1) Initial Circulating Pressure (ICP) at 30 SPM, and 2) Final Circulating Pressure (FCP) at 30 SPM.",
          solutionSteps: [
            "Step 1: Calculate ICP = SIDPP + P_SCR = 420 + 550 = 970 psi",
            "Step 2: Calculate FCP = P_SCR * (KMW / rho_orig)",
            "       FCP = 550 * (11.0 / 10.2) = 550 * 1.0784 = 593.1 psi (~593 psi)"
          ],
          finalAnswer: "ICP = 970 psi, FCP = 593 psi",
          inputUnit: "psi",
          expectedNumber: 970,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int19_1",
        question: "Compare the Driller's Method vs the Wait & Weight Method. Under what specific field conditions would you choose one over the other?",
        whyAsked: "Tests practical wellsite decision-making, understanding of rig logistics, and well control mechanics.",
        modelAnswer: "Here is how I choose between the Driller's Method and Wait & Weight:\n1. Choose Driller's Method when:\n- We do not have sufficient weighting materials (barite) immediately on site, or mixing facilities are slow. We can begin circulating out the influx immediately with existing mud, preventing gas migration and reducing shut-in time.\n- Influx is small and casing shoe fracture margin is large (MAASP is high).\n- The rig crew is less experienced, because the Driller's Method is mechanically simpler: 1st circulation maintains constant drill pipe pressure without needing a pressure step-down chart.\n2. Choose Wait & Weight Method when:\n- Drilling with narrow margins between pore pressure and fracture gradient, where casing shoe fracture is a critical risk. Wait & Weight produces lower peak surface casing pressure and lower pressure at the casing shoe because kill mud enters the annulus while the influx is still low in the hole.\n- Handling a large gas kick with high SIDPP where high surface pressures could exceed the rating of the choke manifold or wellhead.\n- Adequate bulk barite and high-capacity mixing hoppers are ready to weight up the entire active system quickly.",
        keyPoints: [
          "Driller's: Start immediately, two circulations, simpler, but higher shoe & surface pressures.",
          "Wait & Weight: Wait to mix kill mud, one circulation, lower surface and shoe pressures.",
          "Selection criteria: Rig barite mixing capacity, kick volume size, and casing shoe fracture margin."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Drilling Contractor Target Companies",
      instructions: [
        "Identify 5 major drilling contractors and service providers: Transocean, Valaris, Noble Corp, Nabors, Helmerich & Payne, SLB, Baker Hughes.",
        "Add them to your company tracking pipeline."
      ],
      deliverable: "5 drilling contractors added to your target career database."
    }
  },

  // DAY 20
  {
    dayNumber: 20,
    phaseId: 1,
    weekNumber: 3,
    title: "Directional Drilling & Well Trajectory Concepts",
    category: "drilling",
    categoryLabel: "Directional Drilling",
    todayGoal: "Master directional drilling profiles, kick-off point (KOP), build/drop rates, dogleg severity (DLS), mud motors, and Rotary Steerable Systems (RSS).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Directional drilling is the intentional deflection of a wellbore along a planned trajectory toward a designated subsurface target. Common applications include offshore platform cluster drilling, horizontal drilling in unconventional shales, sidetracking around fish, fault crossing, and multilateral completions. Directional tools have evolved from whipstocks and bent-sub positive displacement motors (mud motors) to advanced closed-loop Rotary Steerable Systems (RSS) that steer continuously while rotating.",
      keyPoints: [
        "Trajectory Profiles: 1) Type I (Build and Hold / 'L' profile): Vertical to KOP, build angle, hold straight to target. 2) Type II (S-type): Vertical to KOP, build angle, hold tangent, drop angle back to vertical at target. 3) Type III (Continuous build / Deep KOP): Horizontal and extended-reach wells.",
        "Key Geometric Parameters: Measured Depth (MD), True Vertical Depth (TVD), Kick-Off Point (KOP), Build-Up Rate (BUR, deg/100 ft), End of Build (EOB), Dogleg Severity (DLS, deg/100 ft), Azimuth (compass direction 0° to 360°).",
        "Steering Tools: Positive Displacement Motor (PDM / Mud Motor): Powered by mud flow through a Moineau rotor/stator; steers in 'sliding mode' (drill string does not rotate, bent housing points in toolface direction) or drills straight in 'rotary mode'.",
        "Rotary Steerable Systems (RSS): Push-the-bit or Point-the-bit systems that steer continuously while the entire drill string rotates, achieving superior rate of penetration (ROP), smooth hole, and elimination of differential sticking.",
        "Survey Calculation Methods: Minimum Curvature Method is the industry standard for calculating 3D coordinates from survey stations (MD, inclination I, azimuth A)."
      ],
      coreFormulas: [
        {
          name: "Dogleg Angle (Mason & Chen)",
          formula: "cos(DL) = cos(I1) * cos(I2) + sin(I1) * sin(I2) * cos(A2 - A1)",
          explanation: "I1, I2 are inclinations; A1, A2 are azimuths at survey stations 1 and 2."
        },
        {
          name: "Dogleg Severity (DLS)",
          formula: "DLS = (DL / Delta_MD) * 100",
          explanation: "Measured in degrees per 100 feet (deg/100 ft). Typically kept below 3–5°/100 ft in casing sections to prevent drill pipe fatigue and casing wear."
        }
      ],
      fieldInsight: "Sliding with a mud motor creates severe borehole friction and high risk of differential sticking because the pipe is stationary against the borehole wall. Rotary Steerable Systems (RSS) keep the string rotating 100% of the time, dramatically reducing torque and drag in long horizontal laterals (10,000+ ft)."
    },
    watchRead: {
      textbooks: [
        {
          title: "Applied Drilling Engineering (Bourgoyne et al.)",
          chapterOrSection: "Chapter 8: Directional Drilling and Deviation Control",
          note: "Study trajectory planning, minimum curvature survey math, and steering mechanisms."
        },
        {
          title: "Directional Drilling (Tom Inglis)",
          chapterOrSection: "Chapter 4: Directional Tools & Surveying",
          note: "Review MWD telemetry (mud pulse, EM) and RSS push-the-bit vs point-the-bit."
        }
      ],
      recommendedTopics: [
        "MWD survey sensors: Triaxial accelerometers (inclination) & magnetometers (azimuth)",
        "Push-the-bit vs Point-the-bit RSS operational comparison",
        "Geosteering using azimuthal gamma ray and resistivity boundary mappers"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q20_1",
          topic: "Trajectory Profiles",
          question: "What is the Kick-Off Point (KOP) in directional drilling?",
          options: [
            "The depth where the mud pump kicks off",
            "The measured depth where the wellbore is intentionally deflected away from vertical",
            "The total depth of the well",
            "The depth of the blowout preventer"
          ],
          correctIndex: 1,
          explanation: "KOP is the planned depth where directional tools begin building angle away from the vertical wellbore."
        },
        {
          id: "q20_2",
          topic: "Dogleg Severity",
          question: "Dogleg Severity (DLS) is standardly expressed in which engineering units?",
          options: ["Darcies per foot", "Degrees per 100 feet (°/100 ft) or degrees per 30 meters", "psi per barrel", "Barrels per hour"],
          correctIndex: 1,
          explanation: "DLS measures the 3D curvature rate of the wellbore, expressed as degrees per 100 feet (°/100 ft) in field units."
        },
        {
          id: "q20_3",
          topic: "Surveying",
          question: "Which 3D directional survey calculation method is recognized as the global oil & gas industry standard for accuracy?",
          options: ["Tangential method", "Minimum Curvature method", "Average Angle method", "Compass method"],
          correctIndex: 1,
          explanation: "The Minimum Curvature method fits a circular spherical arc between two survey stations, providing the most accurate 3D wellbore trajectory reconstruction."
        },
        {
          id: "q20_4",
          topic: "Mud Motors",
          question: "When steering with a conventional mud motor with a bent housing in 'sliding mode':",
          options: [
            "The entire drill string is rotated from the surface at 120 RPM",
            "The surface drill string is NOT rotated; only the bit rotates, powered by mud flow through the motor stator/rotor",
            "The well drills directly vertical",
            "No mud is circulated"
          ],
          correctIndex: 1,
          explanation: "In sliding mode, the surface pipe is held stationary with the bent sub oriented toward the desired toolface; mud circulation drives the motor rotor to turn the bit."
        },
        {
          id: "q20_5",
          topic: "Rotary Steerable Systems",
          question: "What is the major operational advantage of Rotary Steerable Systems (RSS) over positive displacement mud motors?",
          options: [
            "RSS eliminates the need for a drill bit",
            "RSS can steer continuously while the entire drill string is continuously rotating, reducing friction, eliminating sliding, and smoothing the wellbore",
            "RSS costs less than a rental hammer bit",
            "RSS works with air only"
          ],
          correctIndex: 1,
          explanation: "RSS steers continuously while the string rotates, preventing stationary pipe sticking, boosting penetration rate, and producing smooth extended-reach laterals."
        },
        {
          id: "q20_6",
          topic: "Directional Profiles",
          question: "An 'S-shaped' directional well profile is typically chosen when:",
          options: [
            "Targeting deep unconventional shale laterals",
            "Drilling from an offshore cluster platform where the well must be kicked off to reach a lateral target and then returned to vertical through the pay zone",
            "Drilling a water well",
            "Drilling with zero mud"
          ],
          correctIndex: 1,
          explanation: "S-type wells build angle to achieve lateral displacement, then drop back to vertical to facilitate easier logging, coring, and artificial lift installation in the reservoir."
        },
        {
          id: "q20_7",
          topic: "Geosteering",
          question: "In horizontal drilling, 'Geosteering' is the practice of:",
          options: [
            "Steering the bit strictly based on surface seismic coordinates without logs",
            "Adjusting the wellbore trajectory in real-time based on downhole LWD petrophysical measurements (e.g., gamma ray, resistivity) to stay within the sweet-spot pay zone",
            "Shutting down the rig to change drill bits",
            "Measuring casing cement thickness"
          ],
          correctIndex: 1,
          explanation: "Geosteering uses real-time Logging While Drilling (LWD) measurements to actively steer the bit inside thin reservoir sweet spots between bed boundaries."
        },
        {
          id: "q20_8",
          topic: "MWD Systems",
          question: "How do conventional MWD (Measurement While Drilling) tools transmit downhole survey data to surface through thousands of feet of rock?",
          options: [
            "Fiber optic cable wrapped around the bit",
            "Mud Pulse Telemetry (generating coded pressure pulses through the mud column inside the drill string)",
            "FM radio waves through air",
            "Sound waves through the derrick"
          ],
          correctIndex: 1,
          explanation: "MWD tools use positive, negative, or continuous mud sirens to generate acoustic pressure pulses through the mud column inside the drill pipe to surface pressure transducers."
        },
        {
          id: "q20_9",
          topic: "Dogleg Severity",
          question: "Why is high Dogleg Severity (e.g. > 6°/100 ft) undesirable in upper casing hole sections?",
          options: [
            "It looks bad on paper",
            "It creates severe keyseats, excessive casing wear from rotating drill pipe, and prevents running large casing strings or completion packers",
            "It turns oil into gas",
            "It causes the mud to lose weight"
          ],
          correctIndex: 1,
          explanation: "Sharp doglegs cause drill pipe tool joints to gouge into borehole walls (creating keyseats), wear through casing, and prevent stiff casing or completions from passing."
        },
        {
          id: "q20_10",
          topic: "Toolface",
          question: "What does 'Magnetic Toolface' (MTF) vs 'Gravity Toolface' (GTF) indicate?",
          options: [
            "MTF is used in near-vertical holes relative to magnetic north; GTF is used in inclined holes (> 5°) relative to the high-side of the hole",
            "They are identical",
            "MTF is used only offshore",
            "GTF uses gravity drainage"
          ],
          correctIndex: 0,
          explanation: "In near-vertical wells (inclination < 5°), high-side cannot be reliably resolved, so magnetic toolface (relative to north) is used; in deviated holes, gravity high-side is used."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc20_1",
          title: "Build-Up Rate (BUR) & Radius of Curvature Calculation",
          scenario: "A directional well is planned to kick off at KOP = 4,000 ft TVD. The trajectory must build from vertical (I1 = 0°) to a tangent inclination I2 = 36° at a Measured Depth of 5,200 ft MD.",
          formula: "Delta_MD = MD_2 - MD_1; BUR = [(I_2 - I_1) / Delta_MD] * 100; R = 5729.58 / BUR",
          givenData: {
            "KOP MD (ft)": 4000,
            "Target MD (ft)": 5200,
            "Initial Inclination I1 (deg)": 0,
            "Final Inclination I2 (deg)": 36
          },
          questionText: "Calculate: 1) The Build-Up Rate (BUR) in degrees per 100 ft (°/100 ft), and 2) The radius of curvature (R) of the build section in feet.",
          solutionSteps: [
            "Step 1: Calculate Delta_MD = 5,200 - 4,000 = 1,200 ft",
            "Step 2: Calculate Delta_I = 36° - 0° = 36°",
            "Step 3: Build-Up Rate BUR = (36 / 1,200) * 100 = 0.03 * 100 = 3.0°/100 ft",
            "Step 4: Radius of Curvature R = 5,729.58 / BUR = 5,729.58 / 3.0 = 1,909.86 ft (~1,910 ft)"
          ],
          finalAnswer: "Build-Up Rate = 3.0°/100 ft, Radius of Curvature = 1,910 ft",
          inputUnit: "deg/100 ft",
          expectedNumber: 3.0,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int20_1",
        question: "Explain the operating mechanisms of 'Push-the-Bit' versus 'Point-the-Bit' Rotary Steerable Systems (RSS). Which one produces a smoother hole and why?",
        whyAsked: "Tests specialized, high-end directional drilling knowledge frequently probed by service giants like SLB, Baker Hughes, and Halliburton.",
        modelAnswer: "Rotary Steerable Systems (RSS) allow continuous 3D directional control while continuously rotating the entire drill string:\n1. Push-the-Bit RSS: Uses external hydraulic pads positioned directly behind the bit (e.g., SLB PowerDrive). The internal valve directs pressurized mud to expand specific pads against the borehole wall as the collar rotates, pushing the side of the bit in the opposite direction. It relies on side-cutting force against the formation. While highly aggressive and reliable in soft-to-medium formations, it can create a slightly stepped or spiraled borehole pattern in interbedded formations.\n2. Point-the-Bit RSS: Contains an internal drive shaft articulated inside an external housing (e.g., Baker Hughes AutoTrak or Halliburton Geo-Pilot). The internal shaft is flexed or tilted by internal eccentric rings or cams to point the axis of the bit directly in the intended trajectory direction, while the outer sleeve remains largely geostationary. The bit drills forward along its tilted axis like an arrow.\nSmoothness Comparison: Point-the-Bit systems generally produce a significantly smoother, higher-quality borehole with lower micro-tortuosity. Because it tilts the bit rather than pushing pads against the wall, it avoids ledges and spiraling, making it the preferred choice for running long, tight-tolerance casing strings and complex completion liners.",
        keyPoints: [
          "Push-the-bit: External pads push against wall to deflect bit side-cutting force.",
          "Point-the-bit: Internal articulated shaft tilts the bit axis directly in trajectory direction.",
          "Point-the-bit produces smoother borehole with lower tortuosity and fewer ledges."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Review Week 3 Drilling Engineering Summary for Tomorrow's Exam",
      instructions: [
        "Review your formula sheets for Buoyancy Factor, Drill Collar length, Rheology (PV/YP), Hydrostatics, Kill Mud Weight, and DLS.",
        "Ensure your workspace is prepared for the 40-question scenario-based Drilling Milestone Exam tomorrow."
      ],
      deliverable: "Drilling review completed and ready for Day 21's Drilling Benchmark."
    }
  },

  // DAY 21
  {
    dayNumber: 21,
    phaseId: 1,
    weekNumber: 3,
    title: "DRILLING TEST: Drilling Engineering & Well Control Benchmark",
    category: "drilling",
    categoryLabel: "Weekly Exam",
    todayGoal: "Complete the 40-question scenario-based Drilling & Well Control Exam, solve rig calculation problems, and log weak areas.",
    estimatedTotalMinutes: 130,
    isTestDay: true,
    testId: "week_3_test",
    learn: {
      durationMinutes: 25,
      summary: "Milestone Day. Today is the comprehensive Drilling Engineering & Well Control Exam covering Days 15 to 20: Rig systems, drill strings and BHA, drilling fluids and rheology, pressure control, well kill procedures, and directional drilling. Every missed question is automatically directed to your Revision Queue.",
      keyPoints: [
        "Exam scope: 40 scenario-based questions matching real-world offshore and onshore rig operations.",
        "Pass benchmark: 80% (32 / 40).",
        "Target outcome: Test your rapid operational problem-solving before entering Week 4: Production Engineering."
      ],
      fieldInsight: "Drilling operations move fast and can be high risk. Interviewers look for engineers who can stay calm, know the shut-in sequence by heart, understand ECD margins, and can calculate kill mud weights without hesitating."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Week 3 Review",
          chapterOrSection: "Days 15–20 Notes & Formula Cards",
          note: "Quickly scan KMW, MAASP, PV/YP formulas, and Driller's method steps."
        }
      ],
      recommendedTopics: [
        "Kill Mud Weight formula KMW = rho + SIDPP / (0.052 * TVD)",
        "Buoyancy Factor BF = (65.5 - rho) / 65.5",
        "Kick detection signs: Pit gain, flow increase, drilling break"
      ]
    },
    practice: {
      durationMinutes: 60,
      questionCount: 10,
      questions: [
        {
          id: "w3_t1",
          topic: "Well Control",
          question: "If a drilling crew experiences a sudden pit gain of 15 bbl and an unexplained increase in returning mud flow rate, what should they do immediately?",
          options: [
            "Wait 30 minutes to see if the pit level stabilizes",
            "Perform a flow check immediately (stop pumps and check for flow); if positive, shut in the well",
            "Increase pump speed to wash away cuttings",
            "Add 100 sacks of bentonite"
          ],
          correctIndex: 1,
          explanation: "Pit gain and increased flow rate are classic primary kick warnings. The crew must immediately perform a flow check and shut in if positive."
        },
        {
          id: "w3_t2",
          topic: "Drill String",
          question: "In an 11.5 ppg drilling fluid, what is the Buoyancy Factor (BF)?",
          options: ["0.655", "0.824", "0.912", "1.150"],
          correctIndex: 1,
          explanation: "BF = (65.5 - 11.5) / 65.5 = 54.0 / 65.5 = 0.8244 (~0.824)."
        },
        {
          id: "w3_t3",
          topic: "Mud Rheology",
          question: "A Fann viscometer gives dial readings of theta_600 = 54 and theta_300 = 32. What is the Yield Point (YP)?",
          options: ["10 lb/100 ft²", "22 lb/100 ft²", "32 lb/100 ft²", "10 cP"],
          correctIndex: 0,
          explanation: "PV = 54 - 32 = 22 cP. YP = theta_300 - PV = 32 - 22 = 10 lb/100 sq ft."
        },
        {
          id: "w3_t4",
          topic: "Well Kill",
          question: "Why does Shut-In Casing Pressure (SICP) usually read HIGHER than Shut-In Drill Pipe Pressure (SIDPP) on a gas kick?",
          options: [
            "Because casing is larger in diameter",
            "Because the annular column is contaminated by low-density gas, creating less hydrostatic head than the clean drill pipe mud column",
            "Because the drill string is empty",
            "Because casing pressure gauge is inaccurate"
          ],
          correctIndex: 1,
          explanation: "Gas has much lower density than drilling mud; an annular column containing gas exerts less hydrostatic pressure, requiring higher surface casing pressure to balance pore pressure."
        },
        {
          id: "w3_t5",
          topic: "Directional Drilling",
          question: "A well trajectory builds 24 degrees of inclination over a measured depth interval of 800 feet. What is the Build-Up Rate (BUR)?",
          options: ["1.5°/100 ft", "2.0°/100 ft", "3.0°/100 ft", "4.5°/100 ft"],
          correctIndex: 2,
          explanation: "BUR = (Delta I / Delta MD) * 100 = (24 / 800) * 100 = 0.03 * 100 = 3.0°/100 ft."
        },
        {
          id: "w3_t6",
          topic: "Pressure Control",
          question: "If TVD = 8,500 ft, current mud weight = 10.0 ppg, and SIDPP = 442 psi, what is the Kill Mud Weight (KMW)?",
          options: ["10.5 ppg", "11.0 ppg", "11.5 ppg", "12.0 ppg"],
          correctIndex: 1,
          explanation: "KMW = 10.0 + [442 / (0.052 * 8,500)] = 10.0 + [442 / 442] = 10.0 + 1.0 = 11.0 ppg."
        },
        {
          id: "w3_t7",
          topic: "Drill String",
          question: "Why should drill pipe NEVER be run in axial compression in a vertical wellbore?",
          options: [
            "It will buckle helically, leading to extreme friction, fatigue failure, and twist-off",
            "It will cause mud to leak into the ocean",
            "The rig floor will sink",
            "The top drive will stall"
          ],
          correctIndex: 0,
          explanation: "Slender drill pipe cannot tolerate compressive loads without buckling, which causes rapid cyclic fatigue wear and catastrophic twist-offs."
        },
        {
          id: "w3_t8",
          topic: "Casing Design",
          question: "Which casing string is set specifically to protect shallow freshwater drinking aquifers and provide BOP anchoring?",
          options: ["Conductor casing", "Surface casing", "Intermediate liner", "Production tubing"],
          correctIndex: 1,
          explanation: "Surface casing isolates freshwater zones and provides the mechanical structural base to support the blowout preventer stack."
        },
        {
          id: "w3_t9",
          topic: "Well Kill",
          question: "In the Driller's Method, what is held constant during the first circulation while pumping out the influx?",
          options: ["Casing pressure", "Drill pipe pressure (at Initial Circulating Pressure ICP)", "Mud pit volume", "Annular preventer pressure"],
          correctIndex: 1,
          explanation: "During the 1st circulation of the Driller's Method, drill pipe pressure is maintained constant at ICP by adjusting the choke, ensuring constant bottom-hole pressure."
        },
        {
          id: "w3_t10",
          topic: "Directional Tools",
          question: "What tool allows continuous steering while the entire drill string rotates 100% of the time?",
          options: ["Rotary Steerable System (RSS)", "Whipstock", "Bent housing mud motor in sliding mode", "Stabilizer blade"],
          correctIndex: 0,
          explanation: "Rotary Steerable Systems steer continuously while rotating, eliminating sliding and dramatically improving hole cleaning and penetration rate."
        }
      ]
    },
    calculation: {
      durationMinutes: 25,
      problemCount: 1,
      problems: [
        {
          id: "calc21_1",
          title: "Comprehensive Drilling Milestone Problem: Complete Kill Sheet",
          scenario: "A vertical well is shut in on a kick at TVD = 11,000 ft. Original mud weight rho_orig = 10.4 ppg. Casing shoe is at 7,500 ft TVD with LOT = 13.8 ppg. Measured well control data: SIDPP = 400 psi, SICP = 620 psi. Slow Circulating Rate (SCR) pressure at 30 SPM = 520 psi.",
          formula: "KMW = rho_orig + [SIDPP / (0.052 * TVD)]; ICP = SIDPP + SCR; FCP = SCR * (KMW / rho_orig); MAASP = (LOT - rho_orig) * 0.052 * TVD_shoe",
          givenData: {
            "TVD (ft)": 11000,
            "TVD_shoe (ft)": 7500,
            "rho_orig (ppg)": 10.4,
            "LOT (ppg)": 13.8,
            "SIDPP (psi)": 400,
            "SICP (psi)": 620,
            "SCR (psi)": 520
          },
          questionText: "Calculate: 1) Kill Mud Weight (ppg), 2) Initial Circulating Pressure (ICP in psi), 3) Final Circulating Pressure (FCP in psi), and 4) MAASP with original mud (psi).",
          solutionSteps: [
            "Step 1: KMW = 10.4 + [400 / (0.052 * 11,000)] = 10.4 + [400 / 572] = 10.4 + 0.699 = 11.10 ppg (~11.1 ppg)",
            "Step 2: ICP = SIDPP + SCR = 400 + 520 = 920 psi",
            "Step 3: FCP = SCR * (KMW / rho_orig) = 520 * (11.1 / 10.4) = 520 * 1.0673 = 555 psi",
            "Step 4: MAASP = (13.8 - 10.4) * 0.052 * 7,500 = 3.4 * 390 = 1,326 psi"
          ],
          finalAnswer: "KMW = 11.1 ppg, ICP = 920 psi, FCP = 555 psi, MAASP = 1,326 psi",
          inputUnit: "ppg",
          expectedNumber: 11.1,
          tolerance: 0.1
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int21_1",
        question: "Imagine you are the wellsite engineer on a night shift. While drilling ahead at 10,000 ft, you notice a 15-barrel pit gain and ROP increases from 25 ft/hr to 80 ft/hr. Walk me through your immediate actions step-by-step.",
        whyAsked: "High-stress operational simulation question. The interviewer wants to see if you instinctively execute proper well control protocol without panic.",
        modelAnswer: "I immediately treat this as a confirmed kick and follow the standard hard shut-in sequence without hesitation:\n1. Alert the Driller & Space Out: Immediately confirm the drilling break and pit gain. Instruct the driller to pick up off bottom and space out so that a tool joint is not across the BOP rams.\n2. Stop Pumps & Flow Check: Shut down the mud pumps and check the flow line. If fluid is flowing with the pumps off, the kick is confirmed.\n3. Hard Shut-In: Close the annular preventer immediately. Open the hydraulic choke line (HCR) to the choke manifold (with the remote choke in the closed position). The well is now securely shut in.\n4. Inform Rig Leadership: Notify the Company Man (Company Representative) and Rig Superintendent immediately.\n5. Monitor & Record Pressures: Allow pressures to stabilize (typically 10–15 minutes). Record Shut-In Drill Pipe Pressure (SIDPP), Shut-In Casing Pressure (SICP), pit gain volume, and time.\n6. Verify Well Integrity: Check casing pressure against MAASP to ensure we are not exceeding the fracture gradient at the shoe.\n7. Prepare Kill Sheet: Calculate Kill Mud Weight, ICP, and FCP, and align with the team on whether to execute the Driller's Method or Wait & Weight based on pit barite readiness.",
        keyPoints: [
          "Space out, stop rotation and pumps, flow check.",
          "Hard shut-in: Close annular/pipe rams, open HCR to closed choke.",
          "Record stabilized SIDPP and SICP; verify SICP < MAASP; calculate KMW and prepare kill sheet."
        ]
      }
    },
    career: {
      durationMinutes: 15,
      actionTitle: "Audit 'Things I Forgot' for Week 3",
      instructions: [
        "Record every missed drilling question in your Revision Queue.",
        "Celebrate completing 3 full weeks (21 days) of intensive engineering rebuilding!"
      ],
      deliverable: "Drilling Revision Queue updated and verified in dashboard."
    }
  }
];
