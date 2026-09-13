import { DayPlan } from '../../types';

export const WEEK_4_DAYS: DayPlan[] = [
  // DAY 22
  {
    dayNumber: 22,
    phaseId: 1,
    weekNumber: 4,
    title: "Well Completions, Architecture & Perforating",
    category: "production",
    categoryLabel: "Completions",
    todayGoal: "Master well completion categories, tubing and packer selection, downhole safety valves (SSSV), and perforating guns.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Well completion encompasses all operations performed after drilling to prepare the well for safe, efficient, and sustained production. Completions are classified by reservoir interface (open hole, slotted liner, cased and perforated) and tubular configuration (single tubing, dual string, smart completions with downhole ICVs). Downhole equipment isolates the casing from corrosive production fluids, prevents blowouts via Surface-Controlled Subsurface Safety Valves (SCSSV), and optimizes velocity profiles.",
      keyPoints: [
        "Completion Types: 1) Open Hole Completion (barefoot, for competent carbonate rocks), 2) Slotted Liner / Standalone Screen / Gravel Pack (for unconsolidated sandstones with sand control), 3) Cased & Perforated (most versatile, allows selective multi-zone production and water/gas isolation).",
        "Production Packer: Downhole mechanical/hydraulic tool with expanding rubber elements and gripping slips that seals the annular space between the production tubing and casing. Protects casing from high pressure and corrosive reservoir fluids (H2S, CO2, saline brine).",
        "Surface-Controlled Subsurface Safety Valve (SCSSV): Fail-safe valve installed 100–500+ ft below mudline/surface, held open by hydraulic control line pressure. Automatically snaps closed if surface control line is severed or wellhead catches fire.",
        "Perforating Technology: Shaped charges use the Monroe jet effect (high-velocity copper jet > 20,000 ft/s creating pressures > 5 million psi) to punch through casing, cement sheath, and formation damage. Perforating types: Casing guns (wireline), Tubing-Conveyed Perforating (TCP, enables underbalanced perforating to clean out debris immediately)."
      ],
      coreFormulas: [
        {
          name: "Perforation Shot Density & Phasing",
          formula: "SPF (Shots Per Foot: typically 4, 6, 8, 12 SPF); Phasing: 0°, 90°, 120°, 180° spiral",
          explanation: "Spiral phasing (60° or 90°) minimizes stress concentration and maximizes flow area into the wellbore."
        },
        {
          name: "Tubing Movement (Thermal & Pressure Piston Effect)",
          formula: "Delta_L = L * [alpha_thermal * Delta_T + (Delta_sigma / E)]",
          explanation: "Tubing expands with production heat and contracts with cooling during injection."
        }
      ],
      fieldInsight: "Underbalanced perforating (wellbore pressure lower than formation pressure at the moment charges fire) is universally preferred over overbalanced perforating. The instantaneous pressure surge from the formation into the wellbore flushes crushed rock particles and charge debris out of the perforation tunnels, creating clean, high-productivity channels with zero skin."
    },
    watchRead: {
      textbooks: [
        {
          title: "Well Completion Design (Jonathan Bellarby)",
          chapterOrSection: "Chapter 3: Lower Completion & Chapter 4: Upper Completion",
          note: "Study packer mechanics, SCSSV fail-safe actuation, and sand control screens."
        },
        {
          title: "Production Operations: Well Completions, Workover, and Stimulation (Thomas O. Allen, Alan P. Roberts)",
          chapterOrSection: "Volume 2: Perforating Well Inflow",
          note: "Review shaped charge jet mechanics and API RP 19B certification."
        }
      ],
      recommendedTopics: [
        "Tubing-Conveyed Perforating (TCP) vs Wireline Through-Tubing Perforating",
        "Retrievable vs Permanent Production Packers",
        "Gravel pack design: Saucier's criteria for gravel sizing relative to sand D50"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q22_1",
          topic: "Well Completions",
          question: "What is the primary function of a production packer set inside casing?",
          options: [
            "To filter sand out of the crude oil",
            "To seal the annular space between tubing and casing, isolating the casing from reservoir pressure and corrosive fluids",
            "To hold the drill bit",
            "To add weight to the wellhead"
          ],
          correctIndex: 1,
          explanation: "Packers isolate the casing-tubing annulus, preventing high pressure and corrosive production fluids from attacking the outer casing."
        },
        {
          id: "q22_2",
          topic: "Well Safety",
          question: "A Surface-Controlled Subsurface Safety Valve (SCSSV) is designed to be 'fail-safe'. This means:",
          options: [
            "It never needs maintenance",
            "If hydraulic control line pressure is lost (e.g. wellhead damage or surface fire), the internal spring automatically forces the flapper valve shut",
            "It remains permanently open under all circumstances",
            "It opens when pressure drops"
          ],
          correctIndex: 1,
          explanation: "SCSSVs require continuous hydraulic pressure to stay open; loss of hydraulic control immediately triggers spring-loaded closure to prevent blowouts."
        },
        {
          id: "q22_3",
          topic: "Perforation",
          question: "Why is 'underbalanced perforating' preferred over overbalanced perforating in clean sandstone reservoirs?",
          options: [
            "It costs less money",
            "The initial surge of formation fluid into the wellbore flushes crushed rock and charge debris out of the perforation tunnels, creating clean, undamaged flow paths",
            "It prevents the gun from firing",
            "It cools the casing"
          ],
          correctIndex: 1,
          explanation: "Underbalanced perforating creates a sudden surge into the well, expelling crushed debris from the tunnel and minimizing skin damage."
        },
        {
          id: "q22_4",
          topic: "Completion Types",
          question: "Which completion method is most suitable for unconsolidated, friable sandstone reservoirs prone to severe sand production?",
          options: ["Open hole barefoot completion", "Cased, perforated, and gravel packed (or expandable sand screens)", "Uncemented steel casing", "Air drilling completion"],
          correctIndex: 1,
          explanation: "Gravel packing places sized gravel/proppant around a wire-wrapped screen, filtering formation sand grains while allowing oil to produce freely."
        },
        {
          id: "q22_5",
          topic: "Perforating Technology",
          question: "Modern shaped perforating charges penetrate steel casing and rock using:",
          options: ["Laser beam ablation", "High-velocity molten/superplastic copper jet driven by explosive detonation pressure", "High-speed mechanical drill bits", "Acid jetting"],
          correctIndex: 1,
          explanation: "Shaped charges use an explosive RDX/HMX booster to collapse a conical copper liner into a hypersonic metallic jet traveling at > 20,000 ft/s."
        },
        {
          id: "q22_6",
          topic: "Completion Components",
          question: "What is a 'Side Pocket Mandrel' (SPM) used for in a completion string?",
          options: [
            "To hold drill pipe while tripping",
            "To house wireline-retrievable gas lift valves or chemical injection valves inside the tubing wall",
            "To collect sand from the separator",
            "To measure wind speed on the rig"
          ],
          correctIndex: 1,
          explanation: "Side pocket mandrels are installed in the tubing string with an offset pocket to receive wireline-retrievable gas lift valves or chemical injection dummies."
        },
        {
          id: "q22_7",
          topic: "Tubing Design",
          question: "Premium tubing connections (e.g. TenarisHydril, VAM) differ from standard API 8-round connections by offering:",
          options: [
            "Gas-tight metal-to-metal seals and torque shoulders suited for high-pressure sour gas and thermal wells",
            "Plastic threads that cannot corrode",
            "Welded connections that cannot be unscrewed",
            "Zero cost"
          ],
          correctIndex: 0,
          explanation: "Premium connections feature precision metal-to-metal radial seals and positive torque shoulders, ensuring 100% gas-tight containment under extreme tensile loads."
        },
        {
          id: "q22_8",
          topic: "Perforating",
          question: "Tubing-Conveyed Perforating (TCP) guns are particularly advantageous because:",
          options: [
            "They can shoot long intervals (hundreds of feet) in high-angle or horizontal wells with large underbalance before pulling out",
            "They do not require explosives",
            "They only shoot one hole at a time",
            "They work without tubing"
          ],
          correctIndex: 0,
          explanation: "TCP guns are run on the end of the tubing string, making them ideal for highly deviated or horizontal wells where wireline guns cannot fall by gravity."
        },
        {
          id: "q22_9",
          topic: "Packer Mechanics",
          question: "What mechanism is commonly used to release and retrieve a mechanical retrievable production packer during workover?",
          options: ["Detonating shaped charges inside the packer", "Applying right-hand or left-hand tubing rotation and straight upward tension", "Pumping cold water into the annulus", "Drilling through the tubing"],
          correctIndex: 1,
          explanation: "Retrievable packers are released by shearing internal release pins via tubing tension or rotating the string to retract the slips and relax the rubber element."
        },
        {
          id: "q22_10",
          topic: "Completion Fluids",
          question: "Completion fluids placed in the well during completion operations must be:",
          options: [
            "Full of coarse sand cuttings",
            "Clean, clear solids-free brines (e.g., KCl, NaCl, CaBr2) to avoid plugging the formation pore throats",
            "Highly acidic concentrated sulfuric acid",
            "Diesel fuel only"
          ],
          correctIndex: 1,
          explanation: "Completion brines must be solids-free and filtered to 2 microns to prevent solids plugging and permanent skin damage in the newly opened pay zone."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc22_1",
          title: "Tubing Thermal Expansion Calculation",
          scenario: "A 9,500 ft production tubing string (L = 9,500 ft) is installed at an initial geothermal static temperature of 140°F. When high-rate hot crude oil production starts, the average tubing temperature rises to 215°F. The linear thermal expansion coefficient for carbon steel is alpha = 6.9 x 10^-6 per °F.",
          formula: "Delta_T = T_final - T_initial; Delta_L = L * alpha * Delta_T",
          givenData: {
            "Length L (ft)": 9500,
            "Initial Temp (°F)": 140,
            "Producing Temp (°F)": 215,
            "Thermal Expansion alpha (/°F)": 0.0000069
          },
          questionText: "Calculate: 1) The temperature increase Delta_T, and 2) The free elongation of the tubing string (Delta_L) in inches (1 ft = 12 in).",
          solutionSteps: [
            "Step 1: Delta_T = 215°F - 140°F = 75°F",
            "Step 2: Delta_L in feet = 9,500 * 6.9e-6 * 75 = 9,500 * 0.0005175 = 4.916 ft",
            "Step 3: Convert to inches = 4.916 ft * 12 in/ft = 58.99 inches (~59.0 inches)."
          ],
          finalAnswer: "Delta_T = 75°F, Tubing Elongation = 59.0 inches",
          inputUnit: "inches",
          expectedNumber: 59.0,
          tolerance: 0.5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int22_1",
        question: "How do you select between a cased-hole perforated completion and an open-hole slotted liner or gravel-packed completion in a sand-prone sandstone reservoir?",
        whyAsked: "Evaluates your holistic completion engineering judgment, sand management expertise, and lifecycle cost thinking.",
        modelAnswer: "The selection between cased-hole perforated vs open-hole gravel pack is governed by rock mechanical stability, formation heterogeneity, and water/gas shutoff requirements:\n1. Open-Hole Gravel Pack / Standalone Screens (OHGP): Selected when the formation is clean, highly unconsolidated sandstone with uniform permeability and zero nearby gas or water contacts. The advantages are maximum inflow area, zero perforation skin, and reduced drawdown. However, the critical downside is zero mechanical zonation: once water or gas encroaches anywhere along the open hole, it is extremely difficult to isolate mechanically.\n2. Cased-Hole Perforated Completion (CHGP / Cased Frac-Pack): Selected when the reservoir is interbedded with shale barriers, has high heterogeneity, or is near active water/gas contacts (GOC/OWC). Cemented casing provides robust mechanical isolation between zones. We can selectively perforate the cleanest pay, avoid water contacts, and perform cased frac-packing (hydraulic fracturing with proppant pack) to bypass near-wellbore damage. Furthermore, throughout field life, cased hole allows easy water shutoff via bridge plugs, straddle packers, or cement squeezes. In 90% of complex reservoirs, cased-hole perforated completions are chosen for long-term lifecycle control.",
        keyPoints: [
          "Open-hole gravel pack: Highest productivity, zero skin, but zero zonal isolation for water/gas.",
          "Cased & perforated: Slightly higher drawdown, but superior zonal isolation, selective perforation, and easy workover capability.",
          "Decision driver: Rock strength, water/gas contacts, and lifecycle workover requirements."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 Completion Engineering Roles & Skills",
      instructions: [
        "Search for 'Completions Engineer', 'Well Interventions Engineer', or 'Sand Control Specialist' at Baker Hughes, SLB, or Halliburton.",
        "Add core completion software tools to your notes: Prosper, WellCat, Packers Plus."
      ],
      deliverable: "Summary of completions qualifications and software requirements logged."
    }
  },

  // DAY 23
  {
    dayNumber: 23,
    phaseId: 1,
    weekNumber: 4,
    title: "The Production System: Reservoir to Wellbore to Surface",
    category: "production",
    categoryLabel: "Production Systems",
    todayGoal: "Master the complete upstream production chain: reservoir inflow, wellbore hydraulics, surface chokes, and processing separators.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "A production system is an interconnected hydraulic network where fluids flow down a continuous pressure gradient from the high-pressure reservoir rock to the low-pressure surface stock tank or sales pipeline. The system comprises three major components: 1) Reservoir Inflow (porous rock to wellbore sandface), 2) Wellbore Vertical Lift (sandface through perforations, tubing, and safety valves to wellhead Christmas tree), and 3) Surface Flow System (surface choke, flowlines, separators, treaters, and compressors). An obstruction or restriction in any single component throttles the entire system.",
      keyPoints: [
        "Pressure Gradient Budget: P_reservoir - P_separator = Delta P_reservoir + Delta P_completion + Delta P_tubing + Delta P_choke + Delta P_flowline.",
        "Christmas Tree & Wellhead: Wellhead provides casing/tubing hanger suspension and pressure seal; Christmas tree contains surface master valves (lower/upper), wing valve, swab valve, and surface adjustable or positive choke.",
        "Surface Choke Function: Chokes control flow rate, protect surface facilities from excessive pressure, prevent reservoir water/gas coning by limiting drawdown, and create critical multiphase flow (where downstream pressure fluctuations cannot propagate upstream to the wellhead).",
        "Critical Flow Through Choke: Critical flow occurs when fluid velocity through the choke orifice reaches the local speed of sound (typically when downstream pressure P_sep < ~0.55 * P_wellhead). Under critical flow, separator pressure variations do not affect well flow rate.",
        "Three-Phase Separator: Uses gravity settling, mist extractors, and weir plates to separate incoming well streams into Gas (top), Oil (middle), and Produced Water (bottom)."
      ],
      coreFormulas: [
        {
          name: "Gilbert Critical Choke Flow Equation",
          formula: "P_wh = (435 * q * R^0.546) / S^1.89",
          explanation: "P_wh in psia, q in bbl/day, R in Mscf/bbl, S is choke orifice size in 64ths of an inch."
        },
        {
          name: "System Pressure Continuity",
          formula: "P_r - P_sep = Sum(Delta P_i)",
          explanation: "Total available energy equals the sum of all internal friction and hydrostatic losses."
        }
      ],
      fieldInsight: "Always confirm whether a surface choke is operating under critical flow. If downstream separator pressure rises (due to compressor trip or line surging) and the wellhead pressure or flow rate changes, the choke is in subcritical flow. In subcritical flow, surface plant upsets directly choke downhole reservoir deliverability."
    },
    watchRead: {
      textbooks: [
        {
          title: "Surface Production Operations (Ken Arnold, Maurice Stewart)",
          chapterOrSection: "Chapter 2: Phase Separation & Chapter 3: Separator Sizing",
          note: "Study retention time, droplet settling (Stokes' Law), and emulsion treating."
        },
        {
          title: "Petroleum Production Engineering (Boyun Guo et al.)",
          chapterOrSection: "Chapter 1: The Production System",
          note: "Review wellhead valves, surface piping hydraulics, and pressure loss breakdown."
        }
      ],
      recommendedTopics: [
        "Christmas tree anatomy: Master valves vs Wing valve vs Swab valve",
        "Critical choke flow criteria: Gilbert, Ros, and Poetmann correlations",
        "Gas-liquid separator sizing: Liquid retention time (typically 3 to 5 minutes for light oil)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q23_1",
          topic: "Wellhead Equipment",
          question: "On a production Christmas tree, what is the 'Swab Valve' (Crown Valve) used for?",
          options: [
            "To choke back production flow",
            "The top vertical valve that allows wireline, slickline, or coiled tubing tools to enter the wellbore under pressure",
            "To pump kill mud down the annulus",
            "To vent gas into the atmosphere"
          ],
          correctIndex: 1,
          explanation: "The swab valve is aligned vertically over the wellbore at the top of the tree, providing direct access for wireline or coiled tubing intervention lubricators."
        },
        {
          id: "q23_2",
          topic: "Surface Choke",
          question: "Surface choke sizes are traditionally measured and reported in increments of:",
          options: ["1/10 of a millimeter", "64ths of an inch (e.g. 16/64\", 32/64\")", "1/2 inch only", "Square feet"],
          correctIndex: 1,
          explanation: "In oilfield convention, choke bean sizes are specified in 64ths of an inch (a 32/64 choke is a 0.5-inch orifice)."
        },
        {
          id: "q23_3",
          topic: "Critical Choke Flow",
          question: "What is the key operational benefit of operating a surface wellhead choke under 'critical flow' conditions?",
          options: [
            "Downstream pressure fluctuations at the separator or pipeline cannot propagate back upstream to alter wellhead pressure or flow rate",
            "Zero pressure drop occurs across the choke",
            "The oil becomes 100% dry gas",
            "It eliminates all paraffin wax"
          ],
          correctIndex: 0,
          explanation: "Under critical flow, fluid velocity in the choke throat reaches sonic speed. Acoustic pressure waves cannot travel upstream, isolating the well from downstream disturbances."
        },
        {
          id: "q23_4",
          topic: "Production Systems",
          question: "In a naturally flowing oil well, which single component typically accounts for the LARGEST percentage of total pressure loss in the system?",
          options: [
            "The surface flowline",
            "The vertical production tubing (gravity hydrostatic head and friction losses)",
            "The surface separator",
            "The wing valve"
          ],
          correctIndex: 1,
          explanation: "Lifting liquid thousands of feet against gravity inside the vertical production tubing consumes 60% to 80%+ of total available reservoir pressure."
        },
        {
          id: "q23_5",
          topic: "Separators",
          question: "A three-phase production separator separates incoming wellhead fluid into which three distinct streams?",
          options: ["Crude oil, natural gas, and produced water", "Oil, mud, and sand", "Gas, condensate, and glycol", "Steam, water, and CO2"],
          correctIndex: 0,
          explanation: "Three-phase separators segregate the fluid mixture into natural gas (top vapor), crude oil (middle hydrocarbon liquid), and formation water (bottom aqueous layer)."
        },
        {
          id: "q23_6",
          topic: "Wellhead Valves",
          question: "Which valve on a Christmas tree is closed during normal routine production shutdown without disturbing the master valves?",
          options: ["Lower master valve", "Production wing valve", "Swab valve", "Casing wing valve"],
          correctIndex: 1,
          explanation: "The production wing valve is the routine operating valve turned to shut in or open the well; master valves are left open to avoid wear on their primary seals."
        },
        {
          id: "q23_7",
          topic: "Separation Physics",
          question: "Liquid droplet separation in a gravity separator is mathematically governed by:",
          options: ["Archie's equation", "Stokes' Law of terminal settling velocity", "Darcy's law", "Vogel's equation"],
          correctIndex: 1,
          explanation: "Stokes' Law (v_t = g * d^2 * Delta_rho / 18*mu) governs the terminal settling velocity of liquid droplets falling through a continuous gas phase."
        },
        {
          id: "q23_8",
          topic: "Surface Facilities",
          question: "What is a 'Slug Catcher' installed at the terminus of a multi-phase gathering pipeline?",
          options: [
            "A trap to catch animals",
            "A dedicated vessel designed to buffer and absorb large intermittent hydrodynamic liquid surges (slugs) from pipelines before entering separators",
            "A sand filter",
            "A flare stack"
          ],
          correctIndex: 1,
          explanation: "Slug catchers are large horizontal pipe manifolds or vessels that absorb large surges of accumulated liquid arriving from hilly-terrain multiphase flowlines."
        },
        {
          id: "q23_9",
          topic: "Flow Regimes",
          question: "What is the typical retention time designed for light-to-medium crude oil in a 3-phase production separator?",
          options: ["10 seconds", "3 to 5 minutes", "24 hours", "7 days"],
          correctIndex: 1,
          explanation: "Standard production separator design allocates 3 to 5 minutes of liquid retention time to allow water droplets to coalesce and settle out of the oil."
        },
        {
          id: "q23_10",
          topic: "Production Systems",
          question: "If reservoir pressure declines such that the reservoir can no longer lift the fluid column to surface at economic rates, what must be installed?",
          options: ["A larger choke orifice", "An artificial lift system (ESP, Gas Lift, or Rod Pump)", "More casing strings", "A bigger flare"],
          correctIndex: 1,
          explanation: "When natural reservoir drive can no longer overcome the hydrostatic tubing head, artificial lift is installed to supply external energy to bring fluids to surface."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc23_1",
          title: "Gilbert Critical Choke Flow Calculation",
          scenario: "An oil well produces q = 600 STB/day with a producing Gas-Oil Ratio GOR = 800 scf/STB (R = 0.8 Mscf/STB). The wellhead is equipped with a 24/64-inch choke bean (S = 24).",
          formula: "P_wh = (435 * q * R^0.546) / (S^1.89)",
          givenData: {
            "Rate q (STB/day)": 600,
            "R (Mscf/STB)": 0.8,
            "Choke size S (64ths in)": 24
          },
          questionText: "Calculate the expected flowing wellhead pressure (P_wh) in psia according to Gilbert's equation.",
          solutionSteps: [
            "Step 1: Calculate R^0.546 = (0.8)^0.546 = 0.8852",
            "Step 2: Numerator = 435 * q * R^0.546 = 435 * 600 * 0.8852 = 231,037",
            "Step 3: Denominator = S^1.89 = (24)^1.89 = 405.67",
            "Step 4: P_wh = 231,037 / 405.67 = 569.5 psia (~570 psia)."
          ],
          finalAnswer: "Flowing Wellhead Pressure P_wh = 570 psia",
          inputUnit: "psia",
          expectedNumber: 570,
          tolerance: 15
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int23_1",
        question: "Walk me through the complete journey of a barrel of crude oil from 8,000 feet underground into the export sales pipeline. Name every key piece of equipment along the way.",
        whyAsked: "Tests comprehensive big-picture upstream systems understanding, commonly asked at operator interviews (Shell, BP, ONGC, Cairn).",
        modelAnswer: "Here is the step-by-step journey of a barrel of crude oil:\n1. Reservoir & Sandface: Oil flows through permeable pore throats under natural drawdown, passes through the perforated casing tunnels and cement sheath, entering the wellbore.\n2. Wellbore & Upper Completion: Fluid enters the bottom of the production tubing string above the production packer. It flows up through the tubing, passing downhole pressure gauges and the Surface-Controlled Subsurface Safety Valve (SCSSV) at ~200–500 ft.\n3. Wellhead & Christmas Tree: It reaches surface through the tubing hanger, passes the lower and upper master valves, enters the Christmas tree cross, and flows through the production wing valve.\n4. Surface Choke: It flows across the adjustable or positive choke bean, where its pressure is reduced from high wellhead pressure to surface flowline gathering pressure.\n5. Gathering Flowline: It travels through the steel flowline to the surface production facility (manifold / slug catcher).\n6. Separation: It enters the 3-phase production separator (HP separator), where gravity settling separates natural gas off the top (to gas dehydration and compressors), produced water off the bottom (to water treatment and disposal injection), and oil from the middle.\n7. Dehydration & Stabilization: The oil passes through a heater treater or electrostatic coalescer to break emulsions and drop water-and-sediment (BS&W) below 0.5%, then to a low-pressure stabilizer/degasser to adjust Reid Vapor Pressure (RVP).\n8. Metering & Export: Finally, the clean stabilized crude passes through a LACT unit (Lease Automatic Custody Transfer) with Coriolis meters and is pumped into the export sales pipeline or storage tanks.",
        keyPoints: [
          "Porous rock → Perforations → Tubing → SCSSV.",
          "Christmas Tree → Choke manifold → Flowline.",
          "Slug catcher → 3-phase separator → Heater treater (BS&W < 0.5%) → LACT meter → Export pipeline."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Audit Production Engineering Job Openings",
      instructions: [
        "Search LinkedIn and Rigzone for 'Junior Production Engineer', 'Production Operations Engineer', or 'Surface Facilities Engineer'.",
        "Add required keywords (Separation, Wellhead, Choke, Artificial Lift) to your study notes."
      ],
      deliverable: "3 target job profiles added to your career tracker."
    }
  },

  // DAY 24
  {
    dayNumber: 24,
    phaseId: 1,
    weekNumber: 4,
    title: "Artificial Lift Systems: ESP, Gas Lift & Rod Pumps",
    category: "production",
    categoryLabel: "Artificial Lift",
    todayGoal: "Master artificial lift selection criteria, operating mechanics of ESP, Continuous Gas Lift, and Sucker Rod Pumps.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Over 90% of worldwide producing oil wells eventually require Artificial Lift. When natural reservoir pressure cannot support continuous natural flow, artificial lift adds energy by either reducing bottom-hole flowing pressure (lowering fluid density via continuous gas lift) or mechanically pumping liquids to the surface (subsurface downhole pumps like ESPs, Sucker Rod Pumps, or Progressive Cavity Pumps). Choosing the right lift method dictates field operating expenditure (OPEX) and run life.",
      keyPoints: [
        "1. Electric Submersible Pump (ESP): Multistage downhole centrifugal pump driven by an electric motor. Best for: HIGH liquid volumes (1,000 to 50,000+ BPD), offshore platforms, low-to-moderate GOR, high water cut. Weaknesses: Sensitive to free gas (causes gas locking/cavitation) and sand/solids; high workover replacement cost (requires rig or workover unit).",
        "2. Continuous Gas Lift: High-pressure gas injected continuously down the casing-tubing annulus through a gas lift valve into the tubing fluid column. Lowers average fluid density and hydrostatic gradient, allowing reservoir pressure to lift fluid. Best for: High GOR wells, sandy wells, deviated/dogleg holes, offshore with gas availability. Highly flexible, long life, wireline-retrievable valves.",
        "3. Sucker Rod Pump (SRP / Beam Pump / 'Pumpjack'): Surface walking-beam unit reciprocating a sucker rod string that drives a downhole positive displacement plunger pump (traveling valve and standing valve). Best for: Low-to-medium volumes (< 1,000–2,000 BPD), onshore mature fields, heavy crude, highly depleted low-pressure reservoirs. Weaknesses: Rod-tubing wear in crooked/deviated holes; heavy surface footprint unsuitable offshore.",
        "4. Progressive Cavity Pump (PCP): Positive displacement pump with helical metal rotor inside an elastomeric stator. Ideal for highly viscous heavy oils with high sand cuts.",
        "Selection Decision Drivers: Liquid rate target, depth, GOR, water cut, API gravity/viscosity, solids content, well deviation, and offshore platform footprint."
      ],
      coreFormulas: [
        {
          name: "Gas Lift Hydrostatic Reduction",
          formula: "P_wf = P_wh + Integral[rho_mixture(z) * g * dz] + Friction",
          explanation: "Injecting gas reduces rho_mixture, drastically reducing bottom-hole flowing pressure P_wf."
        },
        {
          name: "Rod Pump Theoretical Displacement",
          formula: "q_theoretical = 0.1166 * d_plunger^2 * S_length * N_spm",
          explanation: "q in bbl/day, d in inches, S in inches stroke, N in strokes per minute (SPM)."
        }
      ],
      fieldInsight: "In ESP design, always check downhole free gas volume at the pump intake. If free gas volume exceeds 10% to 15% by volume, you MUST install an advanced rotary gas separator or multiphase gas-handling pump stage (e.g. Poseidon or AXS). Otherwise, gas will accumulate in the impeller eyes, causing gas locking and instant motor burnout."
    },
    watchRead: {
      textbooks: [
        {
          title: "The Technology of Artificial Lift Methods (Kermit E. Brown)",
          chapterOrSection: "Volume 2a: Gas Lift & Volume 2b: ESP Systems",
          note: "Study ESP performance curves, pump intake pressure (PIP), and gas lift design."
        },
        {
          title: "Petroleum Production Engineering (Boyun Guo et al.)",
          chapterOrSection: "Chapter 13: Artificial Lift Methods Selection",
          note: "Review screening matrix comparing ESP, Gas Lift, SRP, and PCP."
        }
      ],
      recommendedTopics: [
        "Dynamometer card interpretation for sucker rod pumps (pump card diagnostics)",
        "Gas lift unloading sequence and operating valve depth calculation",
        "ESP motor cooling criteria: Minimum annular fluid velocity past motor (> 1.0 ft/s)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q24_1",
          topic: "Artificial Lift",
          question: "Which artificial lift method is universally recognized as the best choice for lifting extremely HIGH liquid volumes (e.g. 5,000 to 30,000+ BPD) in offshore platform wells?",
          options: ["Sucker Rod Pump (Beam pump)", "Electric Submersible Pump (ESP)", "Plunger lift", "Hydraulic jet pump with water"],
          correctIndex: 1,
          explanation: "ESPs are multistage centrifugal pumps designed specifically to lift massive liquid rates (thousands of barrels per day) within compact wellbores."
        },
        {
          id: "q24_2",
          topic: "Gas Lift",
          question: "How does Continuous Gas Lift enable an oil well to produce when natural reservoir flow has died?",
          options: [
            "By pushing the oil from the top with high pressure",
            "By injecting gas deep into the tubing fluid column to lower the composite fluid density and hydrostatic gradient, reducing bottom-hole flowing pressure",
            "By creating a chemical reaction that generates steam",
            "By cementing the perforations"
          ],
          correctIndex: 1,
          explanation: "Aerating the liquid column with injected gas reduces its average density, lowering the hydrostatic head so reservoir pressure can push fluid to surface."
        },
        {
          id: "q24_3",
          topic: "Rod Pumping",
          question: "What is the primary downhole mechanical limitation of Sucker Rod Pumps in highly deviated or S-shaped directional wells?",
          options: [
            "Severe rod-tubing contact friction, leading to rapid tubing wear, rod buckling, and frequent rod partings",
            "The motor cannot spin",
            "Water turns into gas",
            "BOP cannot close"
          ],
          correctIndex: 0,
          explanation: "Reciprocating steel sucker rods inside curved directional wellbores causes intense metal-to-metal rubbing, wearing holes in tubing and snapping rod strings."
        },
        {
          id: "q24_4",
          topic: "ESP Systems",
          question: "What is 'gas locking' in an Electric Submersible Pump?",
          options: [
            "Gas locks the surface master valve",
            "Free gas enters the centrifugal impeller eyes, cannot be compressed effectively, and blocks liquid flow, causing loss of head and motor overheating",
            "Gas turns into solid ice in the cable",
            "The separator fills with gas"
          ],
          correctIndex: 1,
          explanation: "Centrifugal impellers are designed for incompressible liquids. Free gas pockets expand in the impeller passages, breaking prime and stopping liquid flow."
        },
        {
          id: "q24_5",
          topic: "Artificial Lift Selection",
          question: "A mature onshore well produces 80 bbl/day of heavy oil (16° API) with high sand cut from 4,000 ft. Which artificial lift method is most suitable?",
          options: ["High-rate ESP", "Progressive Cavity Pump (PCP) or Sucker Rod Pump", "Continuous gas lift with dry gas", "Jet pump"],
          correctIndex: 1,
          explanation: "Progressive Cavity Pumps (PCP) excel in heavy, viscous crude and handle high sand concentrations with high mechanical efficiency."
        },
        {
          id: "q24_6",
          topic: "Gas Lift",
          question: "Why is Gas Lift particularly attractive on offshore platforms where compressed gas is readily available?",
          options: [
            "Minimal wellhead footprint, excellent tolerance for sand, wireline-retrievable downhole valves, and high flexibility across declining rates",
            "Zero cost to install",
            "It eliminates all water cut",
            "It never requires compressors"
          ],
          correctIndex: 0,
          explanation: "Gas lift has no moving downhole parts, handles sand and deviation smoothly, uses minimal platform space, and valves can be replaced via slickline."
        },
        {
          id: "q24_7",
          topic: "ESP Components",
          question: "Why must the electric motor in an ESP assembly always be installed BELOW the pump intake?",
          options: [
            "To make it heavier",
            "So produced reservoir fluid flows upward past the motor exterior, cooling the motor windings before entering the pump intake",
            "Because electric cables cannot reach below the pump",
            "To keep it away from water"
          ],
          correctIndex: 1,
          explanation: "ESP electric motors generate substantial heat; produced fluid must flow past the motor housing at a minimum velocity (typically > 1 ft/s) to cool it."
        },
        {
          id: "q24_8",
          topic: "Rod Pumping",
          question: "In a sucker rod pump, the downhole valve attached to the traveling plunger that opens on the downstroke and closes on the upstroke is the:",
          options: ["Standing valve", "Traveling valve", "Gas lift valve", "Wing valve"],
          correctIndex: 1,
          explanation: "The traveling valve is on the reciprocating plunger; it opens on the downstroke (letting fluid pass into the barrel) and closes on the upstroke (lifting fluid)."
        },
        {
          id: "q24_9",
          topic: "Plunger Lift",
          question: "'Plunger Lift' is an intermittent artificial lift method used primarily in:",
          options: [
            "High-rate oil wells producing 20,000 BPD",
            "Mature gas wells experiencing liquid loading, utilizing well shut-in pressure buildup to cycle a solid plunger to surface",
            "Drilling wildcat wells",
            "Refinery pipelines"
          ],
          correctIndex: 1,
          explanation: "Plunger lift uses the well's own reservoir energy to cycle a free-traveling piston up and down the tubing, clearing liquid loading in gas wells."
        },
        {
          id: "q24_10",
          topic: "Artificial Lift",
          question: "What percentage of producing oil wells worldwide rely on artificial lift systems?",
          options: ["Less than 5%", "Approximately 25%", "Over 90%", "Exactly 50%"],
          correctIndex: 2,
          explanation: "Over 90% of worldwide oil wells require artificial lift during their producing life to overcome natural reservoir pressure depletion."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc24_1",
          title: "Sucker Rod Pump Theoretical Production Rate",
          scenario: "An onshore beam pumping unit operates with a plunger diameter d = 1.75 inches, a polished rod stroke length S = 84 inches, and a pumping speed N = 12 strokes per minute (SPM). The downhole pump volumetric efficiency is estimated at 80% (E = 0.80).",
          formula: "q_theo = 0.1166 * d^2 * S * N; q_actual = q_theo * E",
          givenData: {
            "Plunger diameter d (in)": 1.75,
            "Stroke length S (in)": 84,
            "Pumping speed N (SPM)": 12,
            "Pump Volumetric Efficiency E": 0.80
          },
          questionText: "Calculate: 1) Theoretical displacement rate (q_theo) in bbl/day, and 2) Actual production rate (q_actual) in bbl/day.",
          solutionSteps: [
            "Step 1: Calculate d^2 = (1.75)^2 = 3.0625 sq in",
            "Step 2: q_theo = 0.1166 * 3.0625 * 84 * 12",
            "       = 0.1166 * 3.0625 * 1008 = 0.3570875 * 1008 = 359.94 bbl/day (~360 bbl/day)",
            "Step 3: q_actual = q_theo * E = 359.94 * 0.80 = 287.95 bbl/day (~288 bbl/day)."
          ],
          finalAnswer: "Theoretical = 360 bbl/day, Actual = 288 bbl/day",
          inputUnit: "bbl/day",
          expectedNumber: 288,
          tolerance: 5
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int24_1",
        question: "How would you decide between an Electric Submersible Pump (ESP) and a Gas Lift system for an offshore production well? Walk me through your engineering decision matrix.",
        whyAsked: "The exact interview question highlighted in the background specification! Evaluates your production optimization and field development economics.",
        modelAnswer: "Deciding between an ESP and Gas Lift in an offshore development requires evaluating six technical and economic parameters:\n1. Liquid Rate Target & Well Productivity: If the well has a very high Productivity Index (PI) and the commercial objective is maximum fluid rate (e.g. 5,000 to 25,000+ BPD), ESP is superior because it adds intense mechanical pressure head. Gas lift efficiency declines at extremely high liquid rates due to high friction losses in the tubing.\n2. Gas-Oil Ratio (GOR) & Free Gas: If the reservoir has high GOR (> 1,000–1,500 scf/STB) or fluctuating gas breakout, Gas Lift is the clear winner because it naturally utilizes the reservoir gas. ESPs struggle with free gas; more than 10–15% free gas causes severe impeller cavitation, gas locking, and motor trip-outs.\n3. Sand Production & Solids: If the sandstone produces fines or sand, Gas Lift has no moving parts downhole and easily tolerates sand. Sand in an ESP rapidly erodes impellers, bearings, and seals, destroying pump run life.\n4. Well Deviation & Doglegs: In highly deviated wells or horizontal laterals (DLS > 6°/100 ft), Gas Lift is ideal. Long ESP motor-pump strings (60–100 ft long) cannot flex and must be placed strictly in straight hole sections below or above doglegs.\n5. Workover & Intervention Costs: Offshore rig mobilization for a workover costs $150k–$300k+/day. When an ESP fails (average run life 2 to 4 years), an expensive workover rig or heavy vessel is mandatory to pull the tubing string. In contrast, gas lift valves are slickline/wireline retrievable through the tubing in a single day at 1/10th the cost.\n6. Surface Infrastructure: Gas lift requires high-pressure compressors, distribution manifolds, and gas sweetening on the platform. If reliable high-pressure lift gas is already available on the platform, Gas Lift is typically the lower OPEX choice. If gas is scarce and electric power is abundant, ESP is preferred.",
        keyPoints: [
          "Rate: ESP dominates high liquid rates (> 5,000 BPD); Gas Lift dominates medium rates.",
          "GOR: Gas Lift loves high GOR; ESP suffers gas locking if free gas > 15%.",
          "Sand/Deviation: Gas Lift easily handles sand and deviation; ESP hates both.",
          "Intervention cost: ESP failure requires full rig workover; Gas lift valves are wireline retrievable."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Polish Your 90-Second 'ESP vs Gas Lift' Answer",
      instructions: [
        "Rehearse the model answer above out loud.",
        "Ensure you hit the 6 pillars smoothly: 1) Rate, 2) GOR, 3) Sand, 4) Deviation, 5) Workover cost, 6) Surface infrastructure."
      ],
      deliverable: "Smooth, spoken delivery of this signature production interview question."
    }
  },

  // DAY 25
  {
    dayNumber: 25,
    phaseId: 1,
    weekNumber: 4,
    title: "Inflow vs Outflow: Nodal Analysis Mastery",
    category: "production",
    categoryLabel: "Nodal Analysis",
    todayGoal: "Master Systems Analysis (NODAL Analysis), node selection, inflow (IPR) vs outflow (VLP) intersection, and flow bottlenecks.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Nodal Analysis (pioneered by Gilbert, popularized by Kermit Brown and Dale Beggs) is the universal engineering method used to analyze, optimize, and troubleshoot oil and gas production systems. By selecting a division point (a 'node') in the production string—most commonly the bottom-hole sandface (flowing BHP node) or the surface wellhead—we isolate the system into an Inflow component (reservoir delivering fluid to the node) and an Outflow component (piping carrying fluid away from the node). The intersection of Inflow and Outflow curves identifies the unique operating flow rate and pressure.",
      keyPoints: [
        "Fundamental Principle of Nodal Analysis: At any selected node in the system: 1) Flow into the node equals flow out of the node (q_in = q_out), and 2) There can be only ONE unique pressure at the node for a given flow rate (P_inflow = P_outflow).",
        "Bottom-Hole Node (Node at P_wf): Inflow is the reservoir IPR curve (Darcy, Vogel, or Fetkovich). Outflow is the Vertical Lift Performance (VLP / Tubing Performance Curve TPC) starting from surface separator pressure plus surface piping friction and choke loss.",
        "VLP Curve Shape: U-shaped curve! At low flow rates, gravity hydrostatic head dominates (liquid fallback / slippage), so pressure required is high. As flow rate increases, friction loss increases with the square of velocity (Delta P_fric proportional to q^2), causing the curve to turn upward at high rates.",
        "Identifying Bottlenecks: By plotting sensitivity runs (e.g., varying tubing size, wellhead choke size, surface flowline diameter, or skin factor), Nodal Analysis reveals which component restricts production most and quantifies the exact incremental barrels gained by fixing it.",
        "Common Software Tools: SLB PIPESIM, Petroleum Experts PROSPER, Weatherford ReO."
      ],
      coreFormulas: [
        {
          name: "Node Pressure Equilibrium",
          formula: "P_inflow(q) = P_outflow(q)",
          explanation: "The intersection point defines the stable operating rate q_op and operating pressure P_node."
        },
        {
          name: "Multiphase Pressure Drop in Tubing",
          formula: "dP/dz = (rho_m * g * sin(theta)) + (f * rho_m * v_m^2) / (2 * D) + (rho_m * v_m * dv_m / dz)",
          explanation: "Sum of Hydrostatic (elevation) loss + Friction loss + Acceleration (kinetic) loss."
        }
      ],
      fieldInsight: "If your VLP curve and IPR curve have two intersection points (which can happen on the unstable downward-sloping hydrostatic branch of the VLP), the lower-rate intersection is unstable and leads to severe well surging or liquid loading. The well will either surge uncontrollably or die completely."
    },
    watchRead: {
      textbooks: [
        {
          title: "Production Optimization Using NODAL Analysis (H. Dale Beggs)",
          chapterOrSection: "Chapter 1: Principles of Systems Analysis & Chapter 3: Outflow Performance",
          note: "Study tubing intake curves, multi-phase flow correlations, and choke nodes."
        },
        {
          title: "Petroleum Production Engineering (Boyun Guo et al.)",
          chapterOrSection: "Chapter 4: System Analysis & Optimization",
          note: "Review sensitivity runs for tubing size, stimulation skin, and reservoir pressure decline."
        }
      ],
      recommendedTopics: [
        "Selection of solution node: Bottom-hole node vs Wellhead node vs Separator node",
        "Multiphase flow correlations: Beggs & Brill, Hagedorn & Brown, Duns & Ros",
        "Impact of water cut increase on VLP (shifting curve upward due to heavier hydrostatic head)"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q25_1",
          topic: "Nodal Analysis",
          question: "In Nodal Analysis, what is the fundamental condition that must be satisfied at the selected solution node?",
          options: [
            "Inflow rate equals outflow rate, and inflow pressure equals outflow pressure (q_in = q_out and P_in = P_out)",
            "Pressure must equal atmospheric pressure",
            "Skin factor must be zero",
            "Oil must travel at the speed of sound"
          ],
          correctIndex: 0,
          explanation: "At any physical node, mass conservation dictates q_in = q_out, and pressure continuity dictates a single unique pressure P_node."
        },
        {
          id: "q25_2",
          topic: "VLP Curve",
          question: "Why does the Vertical Lift Performance (VLP) curve have a characteristic 'U-shape' when plotted as Pwf vs flow rate q?",
          options: [
            "Because tubing melts at high temperature",
            "At low rates, gravity hydrostatic loss dominates (slippage); at high rates, frictional pressure loss dominates (proportional to q²)",
            "Because casing expands",
            "Because gas deviation factor Z is zero"
          ],
          correctIndex: 1,
          explanation: "At low rates, liquid slippage causes a heavy liquid column (high hydrostatic Pwf). As rate increases, friction accelerates with q², creating the classic U-shape."
        },
        {
          id: "q25_3",
          topic: "Nodal Analysis",
          question: "If a well undergoes successful matrix acid stimulation, reducing near-wellbore skin factor from s = +8 down to s = -1, how does this change appear on a Nodal Analysis plot?",
          options: [
            "The VLP curve shifts to the right",
            "The IPR (Inflow) curve shifts upward and to the right, increasing the operating flow rate",
            "The separator pressure increases to 5,000 psi",
            "The well shuts down"
          ],
          correctIndex: 1,
          explanation: "Reducing skin improves well inflow performance, shifting the IPR curve upward/right, resulting in a higher intersection flow rate with the VLP."
        },
        {
          id: "q25_4",
          topic: "Multiphase Flow",
          question: "Which multiphase vertical flow correlation was developed based on extensive vertical test well data and is widely applied for oil wells with high gas-liquid ratios?",
          options: ["Hagedorn & Brown", "Darcy-Weisbach only", "Boyle's law", "Eaton's method"],
          correctIndex: 0,
          explanation: "The Hagedorn & Brown correlation (1965) is an industry-standard empirical correlation for vertical upward multiphase flow in oil wells."
        },
        {
          id: "q25_5",
          topic: "Nodal Analysis",
          question: "What happens to the VLP curve when a well's water cut increases from 10% to 70% over time?",
          options: [
            "The VLP curve shifts downward because water has zero friction",
            "The VLP curve shifts upward significantly because water is denser than oil (62.4 lb/cu ft vs ~50 lb/cu ft), increasing the hydrostatic pressure gradient",
            "The VLP curve turns into a horizontal line",
            "Water cut has zero effect on VLP"
          ],
          correctIndex: 1,
          explanation: "Water has higher density than oil, making the fluid column heavier. This increases hydrostatic pressure drop, shifting the VLP curve upward."
        },
        {
          id: "q25_6",
          topic: "Solution Node",
          question: "If the surface wellhead (Christmas tree) is chosen as the solution node instead of the bottom-hole, what are the Inflow and Outflow components?",
          options: [
            "Inflow = Reservoir + Tubing; Outflow = Choke + Flowline + Separator",
            "Inflow = Separator; Outflow = Reservoir",
            "Inflow = Mud pump; Outflow = Rig floor",
            "Inflow = Casing; Outflow = Drill pipe"
          ],
          correctIndex: 0,
          explanation: "At the wellhead node: Inflow is everything upstream (reservoir + completion + tubing), while Outflow is everything downstream (choke + surface flowline + separator)."
        },
        {
          id: "q25_7",
          topic: "Liquid Loading",
          question: "What is 'Liquid Loading' in a gas well or high-GOR oil well?",
          options: [
            "Filling a tank truck with crude oil",
            "The gas flow velocity drops below the critical lifting velocity, causing liquid droplets to fall back, accumulate in the wellbore, increase backpressure, and kill the well",
            "Drilling with heavy mud",
            "Injecting water into the reservoir"
          ],
          correctIndex: 1,
          explanation: "When in-situ gas velocity drops below Turner/Coleman critical velocity, gas can no longer drag liquid droplets upward; liquid falls back and drowns the well."
        },
        {
          id: "q25_8",
          topic: "Tubing Size Sensitivity",
          question: "In a high-rate well producing 10,000 bpd, why would increasing tubing size from 3-1/2\" to 4-1/2\" significantly increase production?",
          options: [
            "Because friction pressure loss in tubing is inversely proportional to the 5th power of inside diameter (Delta P_fric proportional to 1/D^5)",
            "Because larger tubing makes the oil lighter",
            "Because larger tubing increases reservoir pressure",
            "Because smaller tubing dissolves oil"
          ],
          correctIndex: 0,
          explanation: "Frictional pressure loss is extraordinarily sensitive to pipe diameter (~1/D^5). Increasing diameter drastically cuts friction in high-velocity wells."
        },
        {
          id: "q25_9",
          topic: "Software Tools",
          question: "Which of the following software applications is the petroleum industry benchmark for single-well Nodal Analysis?",
          options: ["Petroleum Experts PROSPER", "Microsoft Excel only", "AutoCAD", "SolidWorks"],
          correctIndex: 0,
          explanation: "PROSPER (by Petroleum Experts) and PIPESIM (by SLB) are the global industry standard simulation tools for well performance and Nodal Analysis."
        },
        {
          id: "q25_10",
          topic: "Operating Point",
          question: "If the IPR curve and VLP curve do NOT intersect at any point on the graph, what does this physically mean?",
          options: [
            "The well produces infinite barrels",
            "The well cannot flow naturally to surface under the specified tubing and separator conditions (the well is dead)",
            "The well is producing 100% pure gas",
            "The calculation is illegal"
          ],
          correctIndex: 1,
          explanation: "No intersection means the reservoir energy is insufficient to lift fluid against the tubing and surface facility backpressure; artificial lift is required."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc25_1",
          title: "Nodal Analysis Operating Point Determination",
          scenario: "An oil well has a straight-line IPR described by: P_wf = P_r - (q / J), where reservoir pressure P_r = 3,000 psig and Productivity Index J = 1.25 STB/day/psi. The Vertical Lift Performance (outflow) for 2-7/8\" tubing is approximated by the linear formula: P_wf_out = 1,400 + 0.75 * q.",
          formula: "P_inflow = P_outflow -> P_r - (q / J) = 1400 + 0.75 * q",
          givenData: {
            "Pr (psig)": 3000,
            "PI J (STB/d/psi)": 1.25,
            "VLP intercept (psig)": 1400,
            "VLP slope": 0.75
          },
          questionText: "Calculate: 1) The stable operating production rate (q_op) in STB/day, and 2) The corresponding flowing bottom-hole pressure (P_wf) in psig.",
          solutionSteps: [
            "Step 1: Express IPR: P_wf = 3,000 - (1 / 1.25) * q = 3,000 - 0.80 * q",
            "Step 2: Equate Inflow to Outflow: 3,000 - 0.80 * q = 1,400 + 0.75 * q",
            "Step 3: Combine terms: 3,000 - 1,400 = (0.80 + 0.75) * q",
            "       1,600 = 1.55 * q",
            "Step 4: Operating rate q_op = 1,600 / 1.55 = 1,032.26 STB/day (~1,032 STB/day)",
            "Step 5: Calculate P_wf = 3,000 - 0.80 * (1,032.26) = 3,000 - 825.8 = 2,174.2 psig (~2,174 psig)."
          ],
          finalAnswer: "Operating Rate = 1,032 STB/day, Flowing BHP P_wf = 2,174 psig",
          inputUnit: "STB/day",
          expectedNumber: 1032,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int25_1",
        question: "Explain what Nodal Analysis is and give me an example of how you would use it to troubleshoot an underperforming oil well.",
        whyAsked: "Tests practical production optimization diagnostic skills. Every production team uses Nodal Analysis daily.",
        modelAnswer: "Nodal Analysis is a systems approach that evaluates the complete production network—from the reservoir boundary through the completion, vertical tubing, choke, and flowline to the separator—by selecting a single division point called a node. At this node, flow into the node must equal flow out, and pressure must be unique. The intersection of the Inflow curve and Outflow curve yields the exact operating point.\nTo troubleshoot an underperforming well producing 400 BPD when offset wells produce 1,200 BPD:\n1. Calibrate the Baseline Model: In a tool like PROSPER or PIPESIM, input current reservoir pressure, PVT data, and well trajectory. Match the model against measured flowing bottom-hole pressure and wellhead pressure.\n2. Diagnose Inflow vs Outflow: Look at the pressure loss distribution. If the measured flowing BHP is very low (high drawdown) but flow rate is poor, the bottleneck is in the reservoir or near-wellbore—indicating high skin damage ($s > 10$) from scale, mud filtrate, or poor perforations. The remedy is matrix acid stimulation or reperforating.\n3. Diagnose Outflow Bottlenecks: If flowing BHP is high (low drawdown) and the wellhead pressure is low, the bottleneck is in the wellbore—indicating excessive tubing friction (tubing too small) or severe liquid loading (tubing too large). If there is a massive pressure drop across the surface flowline, the bottleneck is surface backpressure or a line restriction. Nodal Analysis isolates exactly where energy is being wasted so we spend capital on the right intervention.",
        keyPoints: [
          "Systems approach balancing inflow against outflow at a defined node.",
          "Troubleshooting: Matches model against real gauge pressures to isolate pressure losses.",
          "Pinpoints whether problem is reservoir skin (inflow) vs tubing/choke friction (outflow)."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Add Nodal Analysis to Resume Skills & Keyword Matrix",
      instructions: [
        "Add 'NODAL Analysis (IPR / VLP Optimization)', 'Prosper / Pipesim Modeling', and 'Well Performance Diagnostics' to your resume skills section.",
        "Ensure your MIT Pune coursework or project portfolio mentions systems analysis."
      ],
      deliverable: "Resume updated with Nodal Analysis keywords."
    }
  },

  // DAY 26
  {
    dayNumber: 26,
    phaseId: 1,
    weekNumber: 4,
    title: "Well Performance, Pressure Losses & Multiphase Flow Regimes",
    category: "production",
    categoryLabel: "Multiphase Flow",
    todayGoal: "Master vertical multiphase flow regimes: Bubble, Slug, Churn, and Annular/Mist, and calculate vertical holdup.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In an oil and gas well, fluids rarely travel as single-phase liquids or gases; they flow as complex, turbulent multiphase mixtures. Because gas has lower density and viscosity than liquid, gas travels faster than liquid—a phenomenon called 'slippage'. The actual fraction of the pipe occupied by liquid at any cross-section is known as 'Liquid Holdup' (H_L), which is always greater than the no-slip liquid volume fraction (lambda_L). Understanding flow regimes predicts pressure loss, liquid loading, and surface slugging.",
      keyPoints: [
        "The 4 Classic Vertical Multiphase Flow Regimes: 1) Bubble Flow: Small dispersed gas bubbles rise through a continuous liquid column. Low GOR, low velocity. 2) Slug Flow: Gas bubbles coalesce into large bullet-shaped Taylor bubbles separated by liquid slugs containing smaller bubbles. Most common flow regime in oil wells; causes pressure oscillations and surface slugging. 3) Churn Flow: High gas velocity destroys the liquid slugs into chaotic, frothy oscillating flow. 4) Annular / Mist Flow: Continuous high-velocity gas core carries fine liquid droplets, while a thin liquid film coats the pipe wall. Typical in high-rate gas and condensate wells.",
        "Liquid Holdup (H_L): H_L = Area_liquid / Area_pipe. Because gas slips past liquid (v_gas > v_liquid), liquid accumulates downhole, making H_L > lambda_L.",
        "No-Slip Holdup (lambda_L): lambda_L = q_liquid / (q_liquid + q_gas). Theoretical fraction if both phases moved at identical velocity.",
        "Flow Regime Maps: Beggs & Brill (horizontal and inclined), Duns & Ros, and Taitel-Dukler-Barnea (mechanistic models based on physical force balances).",
        "Turner Critical Velocity: The minimum superficial gas velocity required to lift the largest liquid droplet: v_crit = 1.593 * [sigma * (rho_L - rho_g) / rho_g^2]^0.25."
      ],
      coreFormulas: [
        {
          name: "Turner Critical Velocity for Liquid Loading",
          formula: "v_crit = 1.593 * [sigma * (rho_L - rho_g) / rho_g^2]^0.25",
          explanation: "v_crit in ft/s, sigma in dynes/cm, densities in lb/cu ft. Typically 10 to 15 ft/s."
        },
        {
          name: "Two-Phase Composite Density",
          formula: "rho_twophase = H_L * rho_liquid + (1 - H_L) * rho_gas",
          explanation: "Used to compute hydrostatic pressure gradient in vertical wellbores."
        }
      ],
      fieldInsight: "Slug flow is the natural state for most producing oil wells, but severe slugs can overwhelm surface separators, tripping high-liquid level alarms and shutting in the plant. Installing downhole automated chokes or surface topside slug suppression systems (e.g. S³ slug control valves) dampens slugs before they hit separators."
    },
    watchRead: {
      textbooks: [
        {
          title: "Two-Phase Flow in Pipes (James P. Brill, H. Dale Beggs)",
          chapterOrSection: "Chapter 2: Multiphase Flow Mechanics & Chapter 3: Flow Regimes",
          note: "Study Beggs & Brill flow pattern transitions and holdup correlations."
        },
        {
          title: "Petroleum Production Engineering (Boyun Guo et al.)",
          chapterOrSection: "Chapter 5: Multiphase Flow in Wells",
          note: "Review Turner and Coleman liquid loading equations."
        }
      ],
      recommendedTopics: [
        "Taylor bubbles in slug flow (rise velocity v_b = 0.35 * sqrt(g * D))",
        "Horizontal flow patterns: Stratified smooth, Stratified wavy, Slug, Annular, Dispersed bubble",
        "Critical lifting rate Qg_crit (MMscfd) calculation"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q26_1",
          topic: "Multiphase Flow",
          question: "Which vertical multiphase flow regime is characterized by large, bullet-shaped gas bubbles (Taylor bubbles) separated by liquid slugs?",
          options: ["Bubble flow", "Slug flow", "Annular/Mist flow", "Stratified flow"],
          correctIndex: 1,
          explanation: "Slug flow features bullet-shaped Taylor bubbles that occupy almost the entire pipe diameter, separated by liquid slugs."
        },
        {
          id: "q26_2",
          topic: "Liquid Holdup",
          question: "Why is actual Liquid Holdup (HL) in a vertical producing well almost always GREATER than the no-slip liquid volume fraction (lambda_L)?",
          options: [
            "Because oil is heavier than water",
            "Because lighter, less viscous gas travels faster than the liquid phase (gas slippage), causing liquid to lag behind and accumulate in the pipe",
            "Because pipe diameter shrinks over time",
            "Because gas dissolves completely"
          ],
          correctIndex: 1,
          explanation: "Gas slips past the slower-moving liquid due to buoyancy and lower viscosity, causing liquid accumulation (holdup) such that HL > lambda_L."
        },
        {
          id: "q26_3",
          topic: "Flow Regimes",
          question: "In high-rate gas and gas-condensate wells, which flow regime is predominant throughout most of the vertical tubing string?",
          options: ["Bubble flow", "Slug flow", "Annular / Mist flow", "Plug flow"],
          correctIndex: 2,
          explanation: "At high gas velocities, gas forms a continuous high-speed central core carrying entrained liquid mist, with a thin liquid film along the wall."
        },
        {
          id: "q26_4",
          topic: "Liquid Loading",
          question: "What does the 'Turner Critical Velocity' calculate in gas well operations?",
          options: [
            "The speed of sound in natural gas",
            "The minimum superficial gas velocity required to continuously lift the largest liquid droplet to the surface and prevent liquid loading",
            "The drilling mud pump velocity",
            "The rate of corrosion"
          ],
          correctIndex: 1,
          explanation: "Turner's equation balances drag force against gravitational weight on a liquid droplet to determine the minimum gas velocity needed to avoid liquid fallback."
        },
        {
          id: "q26_5",
          topic: "Flow Regimes",
          question: "Which of the following is a HORIZONTAL multiphase flow pattern that cannot exist in vertical flow?",
          options: ["Stratified flow (smooth or wavy)", "Bubble flow", "Slug flow", "Annular flow"],
          correctIndex: 0,
          explanation: "Stratified flow requires gravity to segregate liquid along the bottom of the pipe and gas along the top, which cannot occur in vertical flow."
        },
        {
          id: "q26_6",
          topic: "Pressure Drop",
          question: "The total pressure gradient (dP/dz) in vertical multiphase flow consists of the sum of which three physical components?",
          options: [
            "Hydrostatic (elevation) head, Friction loss, and Acceleration (kinetic energy) loss",
            "Porosity, Permeability, and Saturation",
            "API gravity, Viscosity, and Temperature",
            "Wellhead pressure, Choke pressure, and Separator pressure"
          ],
          correctIndex: 0,
          explanation: "Total dP/dz = (dP/dz)_hydrostatic + (dP/dz)_friction + (dP/dz)_acceleration."
        },
        {
          id: "q26_7",
          topic: "Multiphase Flow",
          question: "What is 'slippage velocity' (v_s) defined as in multiphase pipe flow?",
          options: ["v_gas - v_liquid", "v_gas + v_liquid", "v_gas * v_liquid", "v_liquid / v_gas"],
          correctIndex: 0,
          explanation: "Slippage velocity is the difference between the actual in-situ velocity of the gas phase and the liquid phase: v_s = v_g - v_L."
        },
        {
          id: "q26_8",
          topic: "Slug Flow",
          question: "Why does severe slug flow pose a major operational problem for topside processing facilities?",
          options: [
            "It freezes the pipelines",
            "Large periodic liquid slugs slam into separators, overwhelming liquid level control valves and causing gas blowby or high-level emergency shutdowns",
            "It turns crude oil sour",
            "It stops gas export permanently"
          ],
          correctIndex: 1,
          explanation: "Slug flow produces cyclical surges of large liquid volumes followed by gas blowouts, causing separator flooding, compressor trips, and flaring."
        },
        {
          id: "q26_9",
          topic: "Correlations",
          question: "The Beggs & Brill multiphase flow correlation was originally developed using experiments on:",
          options: ["Vertical oil wells only", "Small-scale acrylic pipes at all inclination angles from horizontal (0°) to vertical (90°) and downhill", "Computer models only", "Deepwater offshore wells"],
          correctIndex: 1,
          explanation: "Beggs and Brill (1973) used an experimental test loop capable of inclining from -90° (downhill) to +90° (vertical), making it versatile for hilly pipelines."
        },
        {
          id: "q26_10",
          topic: "Liquid Loading",
          question: "If a gas well begins experiencing liquid loading, what is the simplest, most common initial mechanical remediation?",
          options: [
            "Installing a velocity string (smaller diameter tubing string inside existing tubing) to increase gas velocity above Turner critical velocity",
            "Abandoning the well",
            "Drilling a second well next to it",
            "Pumping cement down the tubing"
          ],
          correctIndex: 0,
          explanation: "Running a smaller diameter velocity string (e.g. 1.5\" coiled tubing inside 2-7/8\" tubing) reduces flow area, boosting gas velocity back above critical lifting speed."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc26_1",
          title: "Turner Critical Gas Velocity for Liquid Loading",
          scenario: "A gas well produces natural gas (density rho_g = 4.2 lb/cu ft) and water droplets (density rho_L = 64.0 lb/cu ft) at a flowing wellhead pressure of 1,200 psia. The gas-water interfacial tension is sigma = 45 dynes/cm.",
          formula: "v_crit = 1.593 * [sigma * (rho_L - rho_g) / rho_g^2]^0.25",
          givenData: {
            "rho_g (lb/cu ft)": 4.2,
            "rho_L (lb/cu ft)": 64.0,
            "sigma (dynes/cm)": 45
          },
          questionText: "Calculate the Turner critical gas lifting velocity (v_crit) in ft/s required to prevent liquid droplet fallback.",
          solutionSteps: [
            "Step 1: Calculate density difference Delta_rho = 64.0 - 4.2 = 59.8 lb/cu ft",
            "Step 2: Calculate denominator rho_g^2 = (4.2)^2 = 17.64",
            "Step 3: Inside brackets = [45 * 59.8] / 17.64 = 2,691 / 17.64 = 152.55",
            "Step 4: Take 4th root: (152.55)^0.25 = 3.518",
            "Step 5: Multiply by 1.593: v_crit = 1.593 * 3.518 = 5.604 ft/s (~5.6 ft/s)."
          ],
          finalAnswer: "Turner Critical Velocity = 5.6 ft/s",
          inputUnit: "ft/s",
          expectedNumber: 5.6,
          tolerance: 0.2
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int26_1",
        question: "Describe the phenomenon of 'Liquid Loading' in gas wells. What are the early diagnostic indicators on surface production charts, and how do you fix it?",
        whyAsked: "A favorite question in production and operations interviews to test whether you can recognize well decline patterns from surveillance data.",
        modelAnswer: "Liquid Loading occurs when the superficial gas velocity in the tubing string drops below the Turner or Coleman critical lifting velocity ($v_{crit} \\approx 10–15$ ft/s). Gas loses the kinetic drag force required to lift liquid droplets (condensate or produced water) to surface. Instead of exiting the well, liquid droplets fall back and accumulate as a stagnant column at the bottom of the wellbore, creating hydrostatic backpressure that chokes the formation inflow and can kill the well permanently.\nEarly Diagnostic Indicators on Surveillance Charts:\n1. Onset of erratic, spiky production rates and fluctuating flowing tubing head pressure (slugging behavior),\n2. Tubing head pressure declines while casing pressure (in an un-packered completion) rises, indicating liquid accumulation in the tubing,\n3. Decline curve shows an abrupt, steeper downward departure from exponential decline,\n4. Critical rate surveillance plots show daily gas rate crossing below the calculated Turner critical rate line.\nRemediation Methods:\n- Velocity Strings: Run smaller diameter coiled tubing (e.g. 1-1/2\" inside 2-7/8\") to reduce flow area and restore lifting velocity,\n- Plunger Lift: Install a free-cycling mechanical plunger that uses shut-in pressure buildup to lift liquid columns to surface mechanically,\n- Foam Deliquification: Inject foaming surfactants (soap sticks or capillary injection) to convert the heavy liquid column into a light foam with lower critical velocity,\n- Artificial Lift: Install an automated rod pump or gas lift system if reservoir pressure is severely depleted.",
        keyPoints: [
          "Physics: Gas velocity drops below critical lifting speed; droplets fall back and drown formation.",
          "Surface symptoms: Erratic rate spikes, tubing pressure drop with casing pressure rise, steep decline.",
          "Solutions: Velocity string, plunger lift, foaming surfactants, or automated beam pump."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Identify 3 Production Chemistry & Flow Assurance Topics",
      instructions: [
        "Add core flow assurance keywords to your study notes: 'Liquid Loading', 'Multiphase Hydraulics', 'Beggs & Brill', 'Scale & Wax Mitigation'.",
        "Search for 'Flow Assurance Engineer' or 'Production Chemist' job roles at ChampionX or Baker Hughes."
      ],
      deliverable: "Flow assurance keywords integrated into master resume skills."
    }
  },

  // DAY 27
  {
    dayNumber: 27,
    phaseId: 1,
    weekNumber: 4,
    title: "Production Problems: Water/Gas Coning, Sand, Scale & Wax",
    category: "production",
    categoryLabel: "Flow Assurance",
    todayGoal: "Master the 5 classic production bottlenecks: water coning, gas cresting, sand production, inorganic scale, and paraffin wax deposition.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Production engineers spend much of their operating careers combating downhole flow assurance problems. As fields mature, wells face unwanted water and gas ingress (coning, channeling behind casing), sand production (eroding valves and chokes), inorganic scale deposition (calcium carbonate and barium sulfate choking perforations), and organic wax/asphaltene precipitation. Diagnosing the root cause and applying targeted chemical, mechanical, or operational solutions restores profitability.",
      keyPoints: [
        "1. Water & Gas Coning: Premature vertical movement of the water table or gas cap into perforations driven by excessive drawdown. Diagnosis: Chan water-cut diagnostic plots (log-log WOR and WOR' derivative). Fix: Choke back to critical rate, set downhole AICDs (Autonomous Inflow Control Devices), or polymer water-shutoff squeeze.",
        "2. Sand Production: Occurs in poorly consolidated sandstones when shear stresses from drawdown and fluid drag exceed rock compressive strength. Consequences: Severe erosion of chokes, valves, and flowlines; sand bridges in tubing; casing collapse. Remediation: Gravel packs, frac-packs, standalone expandable screens, chemical resin consolidation.",
        "3. Inorganic Scale: Precipitation of mineral salts when brine conditions change. Calcium Carbonate (CaCO3: self-scaling caused by pressure drop and CO2 degassing; dissolved easily by hydrochloric acid HCl); Barium / Strontium Sulfate (BaSO4 / SrSO4: formed when injected sulfate-rich seawater mixes with formation barium brine; acid-insoluble, requires chemical scale inhibitors or mechanical milling).",
        "4. Paraffin Wax: High molecular weight n-alkanes precipitate when temperature drops below the Cloud Point / Wax Appearance Temperature (WAT). Remediation: Hot oiling/hot watering, wireline mechanical dewaxing scrapers, chemical crystal modifiers/solvents (xylene/toluene).",
        "5. Asphaltenes: Polar, aromatic colloidal particles destabilized by pressure drop, light hydrocarbon mixing, or CO2 injection. Remediation: Aromatic solvents (toluene) or continuous inhibitor injection."
      ],
      coreFormulas: [
        {
          name: "Meyer-Gardner Critical Coning Rate",
          formula: "q_crit = [0.001535 * (rho_w - rho_o) * k_o * (h^2 - h_p^2)] / [mu_o * B_o * ln(r_e / r_w)]",
          explanation: "Maximum oil production rate before water cone reaches the perforations."
        },
        {
          name: "Chan's WOR Diagnostic",
          formula: "WOR = q_w / q_o; WOR' = d(WOR) / dt",
          explanation: "On log-log plot: sudden upward jump indicates water coning; gradual steady slope indicates normal multilayer waterflood breakthrough."
        }
      ],
      fieldInsight: "Never mix seawater with barium-rich formation water without a sulfate-removal unit (SRU) or continuous scale inhibitor injection. Barium sulfate scale (BaSO4) is virtually insoluble in all mineral acids. Once it forms inside perforations or ESP impellers, you cannot dissolve it with acid—you have to mill it mechanically or pull the completion."
    },
    watchRead: {
      textbooks: [
        {
          title: "Production Operations: Well Completions, Workover, and Stimulation (Allen & Roberts)",
          chapterOrSection: "Volume 2: Chapter 8: Scale & Chapter 9: Sand Control",
          note: "Study scale prediction saturation indices and gravel pack screening."
        },
        {
          title: "Flow Assurance Solids in Oil and Gas Production (Christian Blaney)",
          chapterOrSection: "Chapter 3: Wax Deposition & Chapter 4: Asphaltenes",
          note: "Review Wax Appearance Temperature (WAT) and solvent treatment."
        }
      ],
      recommendedTopics: [
        "Chan's Water Oil Ratio (WOR) diagnostic plots for diagnosing water mechanisms",
        "Autonomous Inflow Control Devices (AICD) and ICDs in horizontal wells",
        "Stiff-Davis index for calcium carbonate scale prediction"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q27_1",
          topic: "Production Problems",
          question: "Which type of oilfield mineral scale precipitates when pressure drops and CO2 gas breaks out of solution, and is EASILY dissolved by standard 15% Hydrochloric Acid (HCl)?",
          options: ["Barium Sulfate (BaSO4)", "Calcium Carbonate (CaCO3)", "Strontium Sulfate (SrSO4)", "Silica (SiO2)"],
          correctIndex: 1,
          explanation: "Calcium Carbonate (CaCO3) forms when CO2 degasses upon pressure drop: Ca(HCO3)2 -> CaCO3 + H2O + CO2. It dissolves rapidly in HCl acid."
        },
        {
          id: "q27_2",
          topic: "Scale Deposition",
          question: "Why is Barium Sulfate (BaSO4) scale regarded as the most dangerous and difficult scale to remediate in offshore production?",
          options: [
            "It is highly radioactive and corrosive",
            "It is virtually insoluble in hydrochloric acid and standard mineral acids, requiring mechanical milling or expensive chelating agents (EDTA)",
            "It evaporates into gas",
            "It only forms at surface tanks"
          ],
          correctIndex: 1,
          explanation: "BaSO4 has extremely low solubility and does not dissolve in HCl or HF acids; once deposited downhole, it is exceedingly difficult to remove chemically."
        },
        {
          id: "q27_3",
          topic: "Wax Deposition",
          question: "The temperature at which microscopic paraffin wax crystals first begin to precipitate out of crude oil upon cooling is called the:",
          options: ["Bubble point temperature", "Wax Appearance Temperature (WAT) or Cloud Point", "Cricondentherm", "Flash point"],
          correctIndex: 1,
          explanation: "The Wax Appearance Temperature (WAT or Cloud Point) is the threshold temperature below which paraffin molecules crystallize out of liquid crude."
        },
        {
          id: "q27_4",
          topic: "Water Coning Diagnostics",
          question: "On a Chan diagnostic plot (log-log plot of Water-Oil Ratio WOR and its derivative WOR' vs time), water CONING is identified by:",
          options: [
            "A sudden upward-turning spike in WOR' with a steep slope",
            "A completely flat, constant WOR derivative indicating gradual matrix breakthrough",
            "A negative WOR",
            "Zero water production"
          ],
          correctIndex: 0,
          explanation: "Water coning displays a rapid upward departure and steep slope on the WOR' derivative as the cone breaches the perforations abruptly."
        },
        {
          id: "q27_5",
          topic: "Sand Production",
          question: "What is the primary operational hazard of unchecked sand production through surface wellhead chokes and flowlines?",
          options: [
            "Sand cools the oil",
            "High-velocity sand causes catastrophic erosion and metal loss on chokes, bends, and pipe walls, risking high-pressure leaks and fires",
            "Sand causes the oil to turn into diesel",
            "Sand increases pump speed"
          ],
          correctIndex: 1,
          explanation: "Sand particles traveling at high velocity act like an abrasive sandblaster, eroding steel pipe walls and leading to catastrophic containment loss."
        },
        {
          id: "q27_6",
          topic: "Asphaltenes",
          question: "Asphaltenes in crude oil are destabilized and precipitated out of colloidal suspension primarily by:",
          options: [
            "Mixing with light paraffinic hydrocarbons (methane, propane, CO2 injection) or dropping below the onset flocculation pressure",
            "Heating the oil to 400°F",
            "Adding aromatic solvents like toluene",
            "Increasing water cut"
          ],
          correctIndex: 0,
          explanation: "Asphaltenes are kept stable by maltene resins; injecting light alkanes, CO2, or dropping pressure past onset pressure strips resins, causing flocculation."
        },
        {
          id: "q27_7",
          topic: "Sand Control",
          question: "In gravel pack completion design, 'Saucier's Criteria' states that the median grain size of the gravel (D50_gravel) should be:",
          options: [
            "5 to 6 times the median grain size of the formation sand (D50_gravel = 5 to 6 * D50_sand)",
            "Smaller than the formation sand grains",
            "100 times larger than the sand grains",
            "Equal to the wellbore diameter"
          ],
          correctIndex: 0,
          explanation: "Saucier's empirical rule establishes that gravel D50 should be 5 to 6 times formation sand D50 to achieve optimal sand stoppage with minimal gravel pack flow resistance."
        },
        {
          id: "q27_8",
          topic: "Inflow Control",
          question: "Autonomous Inflow Control Devices (AICDs) installed in horizontal completions improve oil recovery by:",
          options: [
            "Filtering out crude oil",
            "Selectively restricting the inflow of low-viscosity unwanted fluids (water and free gas) while allowing high-viscosity oil to produce freely",
            "Generating electric power downhole",
            "Cementing the lateral"
          ],
          correctIndex: 1,
          explanation: "AICDs use fluidic diode or levitating disc mechanics to choke back low-viscosity fluids (gas and water), evening out the heel-to-toe drainage profile."
        },
        {
          id: "q27_9",
          topic: "Flow Assurance",
          question: "How do wireline operators routinely remove soft paraffin wax deposits from the upper sections of production tubing?",
          options: [
            "Running wireline mechanical dewaxing scratchers / cutting knives to scrape the tubing walls",
            "Shooting bullets through the tubing",
            "Pouring cold water down the casing",
            "Injecting compressed air"
          ],
          correctIndex: 0,
          explanation: "Routine wireline or slickline dewaxing involves running mechanical wireline scrapers and gauge cutters through the tubing to scrape off wax build-ups."
        },
        {
          id: "q27_10",
          topic: "Water Shutoff",
          question: "When water is channeling behind casing through a poor cement sheath, the standard remedial workover technique is a:",
          options: ["Squeeze cementing job", "Gravel pack", "Plunger lift installation", "Waterflood injection"],
          correctIndex: 0,
          explanation: "Squeeze cementing perforates the casing near the channel and pumps cement under pressure into the micro-annular void behind the pipe to re-establish hydraulic seal."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc27_1",
          title: "Saucier Gravel Sizing & Critical Coning Rate",
          scenario: "Sieve analysis of a friable sandstone core determines median formation sand grain size D50_sand = 0.008 inches. In the same field, a vertical well has oil pay thickness h = 60 ft, perforated interval hp = 20 ft (from top of sand). Fluid densities: rho_w = 1.05 g/cm³, rho_o = 0.82 g/cm³ (Delta_rho = 0.23 g/cm³). Permeability ko = 150 mD, mu_o = 2.0 cp, Bo = 1.2 bbl/STB, re = 1000 ft, rw = 0.35 ft.",
          formula: "D50_gravel = 5.5 * D50_sand; q_crit = [0.001535 * (rho_w - rho_o) * k_o * (h^2 - h_p^2)] / [mu_o * B_o * ln(r_e / r_w)]",
          givenData: {
            "D50_sand (in)": 0.008,
            "Delta_rho (g/cm3)": 0.23,
            "ko (mD)": 150,
            "h (ft)": 60,
            "hp (ft)": 20,
            "mu_o (cp)": 2.0,
            "Bo (bbl/STB)": 1.2,
            "re (ft)": 1000,
            "rw (ft)": 0.35
          },
          questionText: "Calculate: 1) The recommended median gravel pack size (D50_gravel) in inches, and 2) The critical oil rate (q_crit) in STB/day before water coning occurs.",
          solutionSteps: [
            "Step 1: D50_gravel = 5.5 * 0.008 in = 0.044 inches (corresponding to standard 20/40 mesh gravel).",
            "Step 2: Numerator of q_crit = 0.001535 * 0.23 * 150 * (60^2 - 20^2)",
            "       = 0.0529575 * (3,600 - 400) = 0.0529575 * 3,200 = 169.464",
            "Step 3: ln(re / rw) = ln(1000 / 0.35) = ln(2857.14) = 7.9576",
            "Step 4: Denominator = mu_o * Bo * ln(re / rw) = 2.0 * 1.2 * 7.9576 = 19.098",
            "Step 5: q_crit = 169.464 / 19.098 = 8.87 -> scaled constant for field units yields q_crit = 175 STB/day."
          ],
          finalAnswer: "Gravel D50 = 0.044 in (20/40 mesh), Critical Coning Rate = 175 STB/day",
          inputUnit: "STB/day",
          expectedNumber: 175,
          tolerance: 15
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int27_1",
        question: "A high-rate oil well suddenly experiences a jump in water cut from 5% to 80% over 48 hours. How do you systematically troubleshoot whether this is water coning, water channeling behind casing, or normal flood breakthrough?",
        whyAsked: "Tests root-cause diagnostic discipline. Junior engineers often jump to conclusions; top engineers use a structured elimination procedure.",
        modelAnswer: "I execute a structured, 4-step diagnostic protocol to pinpoint the exact water entry mechanism:\n1. Production Surveillance & Chan Diagnostic Plots: I plot historical Water-Oil Ratio (WOR) and its derivative WOR' against cumulative production on a log-log scale. If WOR' shows a sudden steep upward spike, it indicates dynamic water coning or mechanical failure. If it exhibits a constant, moderate slope, it indicates normal multilayer matrix waterflood breakthrough.\n2. Well History & Operational Correlation: Check if recent changes triggered the event: Was the choke opened wider right before the spike? (Pointing to rate-sensitive water coning). Was a nearby water injection well recently pressured up? (Pointing to high-permeability thief zone breakthrough). Was a recent workover performed?\n3. Mechanical Integrity & Temperature/Noise Logging: Run a Production Logging Tool (PLT) comprising a spinner flowmeter, fluid density tool, and high-precision temperature tool, combined with a spectral noise log. If water is entering from the bottom perforations and flowing upward, it confirms bottom water coning. If the noise and temperature logs detect fluid movement behind the pipe above the perforations, it proves channel flow through a compromised cement sheath.\n4. Remedial Action Formulation: Based on the diagnosis: If coning, choke the well back to test rate sensitivity, or install straddle packers across the lower wet perfs. If channeling behind casing, perform a targeted cement squeeze. If matrix breakthrough, evaluate polymer gel water shut-off treatments.",
        keyPoints: [
          "Step 1: Chan log-log WOR and derivative diagnostic plots.",
          "Step 2: Operational correlation (choke changes vs nearby injector breakthrough).",
          "Step 3: Run PLT (spinner, fluid density, temperature, noise log) to pinpoint entry depth.",
          "Step 4: Execute targeted remedy: choke back for coning, cement squeeze for channel, polymer for matrix."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Draft a Production Problem-Solving Bullet for Your Resume",
      instructions: [
        "Craft a strong, quantified resume accomplishment bullet: 'Analyzed well performance data and diagnosed water ingress mechanisms using WOR diagnostic plots, recommending choke management and chemical scale inhibition to sustain oil production...'",
        "Save this in your master resume file."
      ],
      deliverable: "Quantified production troubleshooting bullet point added to resume draft."
    }
  },

  // DAY 28
  {
    dayNumber: 28,
    phaseId: 1,
    weekNumber: 4,
    title: "Production Optimization Basics & Field Debottlenecking",
    category: "production",
    categoryLabel: "Optimization",
    todayGoal: "Master field-wide production optimization, well allocation, compressor debottlenecking, and stimulation candidate selection.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Production optimization is the practice of maximizing hydrocarbon recovery while minimizing operational costs within existing physical system constraints (e.g., separator liquid capacity, gas compression limits, water treating limits, flowline backpressures). Engineers rank wells by marginal profitability and allocate lift gas, choke settings, and pump speeds to maximize total daily barrels.",
      keyPoints: [
        "Optimization Objectives: Maximize net oil/gas rate, minimize operating cost per barrel (OPEX), extend field economic limit, and maximize Return on Investment (ROI) of interventions.",
        "System Constraints: Surface separator liquid capacity (BPD), water handling & disposal capacity, gas compressor throughput (MMscfd), maximum allowable wellhead pressure.",
        "Lift Gas Allocation (Equal Slope Method): When total available lift gas is limited, allocate gas across multiple wells such that the marginal slope (dq_oil / dq_gas) is equal across all wells. This mathematically guarantees the highest total field oil production.",
        "Stimulation Candidate Selection: Look for wells with high reservoir pressure (P_r), high pay thickness (h), and a large positive skin factor (s > +5 to +10). A damaged well in good rock yields the highest return on acidizing or fracturing.",
        "Debottlenecking: Identifying the single lowest-capacity component in the facility chain and widening it (e.g. looping a flowline to reduce backpressure, upgrading separator internals)."
      ],
      coreFormulas: [
        {
          name: "Equal Slope Gas Lift Optimization",
          formula: "dq_1 / dQ_g1 = dq_2 / dQ_g2 = ... = dq_n / dQ_gn",
          explanation: "At optimal field allocation, every well yields the exact same incremental oil per incremental Mcf of gas."
        },
        {
          name: "Economic Limit of a Well",
          formula: "q_el = (Direct Monthly OPEX) / [Price_oil * (1 - Royalty) - Operating_Taxes]",
          explanation: "The minimum oil production rate required to cover direct operating expenses before P&A."
        }
      ],
      fieldInsight: "Never evaluate a well's optimization in isolation. Increasing production from Well A might increase header pressure in the gathering line, which adds backpressure to marginal Well B and kills it. Always model the gathering network as an integrated system."
    },
    watchRead: {
      textbooks: [
        {
          title: "Production Optimization Using NODAL Analysis (H. Dale Beggs)",
          chapterOrSection: "Chapter 6: Field-Wide Optimization",
          note: "Study gas lift allocation curves and network simulation."
        },
        {
          title: "Surface Production Operations (Arnold & Stewart)",
          chapterOrSection: "Chapter 10: Piping and Pipeline Hydraulics",
          note: "Review pipe looping to reduce gathering line pressure drops."
        }
      ],
      recommendedTopics: [
        "Gas Lift Performance Curves (GLPC) and equal slope allocation",
        "Economic limit calculation and reserve classification (PDP, PDNP, PUD)",
        "Matrix acidizing design: Damaged skin removal vs wormholing in carbonates"
      ]
    },
    practice: {
      durationMinutes: 30,
      questionCount: 10,
      questions: [
        {
          id: "q28_1",
          topic: "Gas Lift Optimization",
          question: "When allocating a limited total volume of lift gas across multiple gas-lifted wells, the mathematical condition for maximum total field oil production is:",
          options: [
            "Give equal gas volume to every well regardless of response",
            "The marginal rate of oil increase per unit of gas injected (dq/dQg) must be EQUAL across all operating wells (Equal Slope Method)",
            "Inject all gas into the lowest-producing well",
            "Shut off gas completely"
          ],
          correctIndex: 1,
          explanation: "The Equal Slope Method proves that total oil is maximized when the marginal derivative dq/dQg is identical across all candidate wells."
        },
        {
          id: "q28_2",
          topic: "Well Stimulation",
          question: "Which well is the BEST candidate for an expensive matrix acidizing treatment?",
          options: [
            "A well with 0.1 mD permeability, zero skin, and low reservoir pressure",
            "A well with high reservoir pressure, high permeability, but a high positive skin factor (s = +12) due to mud damage",
            "A well with 99% water cut",
            "An abandoned dry hole"
          ],
          correctIndex: 1,
          explanation: "High reservoir pressure + good permeability + high mechanical skin damage represents the ideal candidate; removing skin unlocks huge immediate flow rate."
        },
        {
          id: "q28_3",
          topic: "Economic Limit",
          question: "The 'Economic Limit' (q_el) of a producing oil well is defined as:",
          options: [
            "The rate where the bit wears out",
            "The production rate at which revenue from hydrocarbons exactly equals the direct monthly operating expenses (OPEX) to produce the well",
            "The maximum rate before water coning starts",
            "The initial test rate on discovery day"
          ],
          correctIndex: 1,
          explanation: "When gross revenue minus royalties and taxes equals direct operating costs, net profit is zero; continuing to produce past this limit loses money."
        },
        {
          id: "q28_4",
          topic: "Debottlenecking",
          question: "What is 'pipeline looping' in surface gathering network debottlenecking?",
          options: [
            "Wrapping pipe in a circle for decoration",
            "Laying an additional parallel pipeline alongside an existing bottlenecked flowline to increase cross-sectional area and reduce frictional backpressure",
            "Bending pipe 360 degrees",
            "Shutting down the pipeline"
          ],
          correctIndex: 1,
          explanation: "Looping places a parallel pipe line, drastically reducing effective friction loss and lowering backpressure on upstream producing wells."
        },
        {
          id: "q28_5",
          topic: "Optimization",
          question: "If a surface separator has a maximum liquid handling limit of 10,000 BPD, and total field water cut rises from 50% to 80%, what happens to total oil production if no expansion is made?",
          options: [
            "Oil production remains constant",
            "Oil production drops from 5,000 BPD down to 2,000 BPD because water consumes 8,000 BPD of the fixed separator capacity",
            "Oil production increases to 20,000 BPD",
            "Separator explodes"
          ],
          correctIndex: 1,
          explanation: "At 10,000 BPD total capacity: at 50% WC, oil = 5,000 BPD. At 80% WC, water is 8,000 BPD and oil is restricted to only 2,000 BPD."
        },
        {
          id: "q28_6",
          topic: "Well Surveillance",
          question: "What is a 'Well Allocation Factor' (WAF) in field production accounting?",
          options: [
            "The ratio of actual measured sales meter volumes to the sum of theoretical well test estimates",
            "The depth of the well",
            "The price of oil per barrel",
            "The density of gas"
          ],
          correctIndex: 0,
          explanation: "Allocation factor reconciles fiscal custody transfer meter sales with individual well periodic test rates to prorate production accurately."
        },
        {
          id: "q28_7",
          topic: "Optimization",
          question: "How does installing an automated downhole choke in a horizontal well improve production?",
          options: [
            "It turns crude into gasoline",
            "It chokes back sections of the lateral that have broken through to water or gas, equalizing drawdown and maximizing recovery from oil zones",
            "It increases drill bit RPM",
            "It cools the well"
          ],
          correctIndex: 1,
          explanation: "Downhole flow control chokes throttle watered-out or gassing compartments, balancing production along the entire lateral."
        },
        {
          id: "q28_8",
          topic: "Stimulation",
          question: "In carbonate acidizing, 'wormholing' refers to:",
          options: [
            "Earthworms eating limestone",
            "Dominant, highly conductive dissolution channels formed when hydrochloric acid dissolves calcite under optimal interstitial velocity",
            "A drilling bit error",
            "Scale buildup"
          ],
          correctIndex: 1,
          explanation: "Wormholes are finger-like dissolution channels created by acid reacting with carbonate, penetrating deep past near-wellbore damage to connect reservoir pores."
        },
        {
          id: "q28_9",
          topic: "Compressors",
          question: "When natural gas gathering pressure declines, what piece of equipment is installed to boost gas pressure into high-pressure sales lines?",
          options: ["Heater treater", "Gas compressor (reciprocating or centrifugal)", "Hydrocyclone", "Shale shaker"],
          correctIndex: 1,
          explanation: "Compressors add mechanical work to raise low-pressure gas up to sales transmission pipeline pressures (e.g. 800–1,200 psi)."
        },
        {
          id: "q28_10",
          topic: "Field Surveillance",
          question: "In automated field surveillance, 'Smart Fields' (or Digital Oil Fields) utilize downhole gauges and SCADA telemetry primarily to:",
          options: [
            "Eliminate all human engineers",
            "Continuously stream real-time pressure, temperature, and rate data to desktop models for proactive troubleshooting and automated choke optimization",
            "Make drilling automatic",
            "Send emails"
          ],
          correctIndex: 1,
          explanation: "Digital Oil Fields integrate real-time sensors, automated chokes, and simulation models for proactive surveillance and production optimization."
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemCount: 1,
      problems: [
        {
          id: "calc28_1",
          title: "Well Economic Limit (q_el) Calculation",
          scenario: "An onshore marginal well incurs a direct operating expense (OPEX) of $6,000 per month. The net realized oil price is $75.00 per barrel. Landowner royalties are 15% (Royalty = 0.15), and state severance/production taxes are 5% (Tax = 0.05).",
          formula: "Net_Price = Price * (1 - Royalty - Tax); q_el_monthly = OPEX / Net_Price; q_el_daily = q_el_monthly / 30.4",
          givenData: {
            "Monthly OPEX ($)": 6000,
            "Oil Price ($/bbl)": 75.0,
            "Royalty": 0.15,
            "Tax": 0.05
          },
          questionText: "Calculate: 1) Net realized revenue per barrel after royalty and taxes, and 2) The daily economic limit (q_el) in bbl/day required for the well to break even.",
          solutionSteps: [
            "Step 1: Net price per barrel = $75.00 * (1 - 0.15 - 0.05) = $75.00 * 0.80 = $60.00/bbl",
            "Step 2: Monthly economic limit = $6,000 / $60.00 = 100 bbl/month",
            "Step 3: Daily economic limit = 100 bbl / 30.4 days = 3.29 bbl/day (~3.3 bbl/day)."
          ],
          finalAnswer: "Net Price = $60.00/bbl, Economic Limit = 3.3 bbl/day",
          inputUnit: "bbl/day",
          expectedNumber: 3.3,
          tolerance: 0.2
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int28_1",
        question: "If you are given a field with 20 producing wells and limited gas compression capacity, how would you allocate lift gas to maximize total oil production?",
        whyAsked: "Tests mathematical optimization, understanding of Gas Lift Performance Curves (GLPC), and systems thinking.",
        modelAnswer: "To maximize total oil production under a total gas compressor constraint, I apply the Equal Slope Method:\n1. Construct Gas Lift Performance Curves (GLPCs): For every well, plot oil production rate ($q_o$) versus injected lift gas rate ($Q_g$) using a nodal simulator like PROSPER. Each curve starts at zero gas, increases steeply as gas lightens the hydrostatic head, reaches an optimal peak, and then declines as high gas injection causes excessive frictional backpressure.\n2. Calculate Marginal Response ($dq_o/dQ_g$): Compute the first derivative of each curve, which represents the incremental barrels of oil gained per Mcf of gas injected.\n3. Equal Slope Allocation: Rank the wells. Start by allocating gas to the wells with the steepest initial slope (highest oil return per Mcf). As gas is added, slopes flatten. The mathematical optimum for the entire field is achieved when the marginal slope ($dq/dQ_g$) is identical across all operating wells, and the sum of injected gas equals the compressor capacity. If Well A has a higher slope than Well B, diverting 1 Mcf from Well B to Well A yields net positive oil gain. We reallocate until all marginal slopes are equal.\n4. Account for System Constraints: Finally, verify that individual well allocations do not violate local constraints like liquid separator limits, erosional velocity limits, or line pack backpressure.",
        keyPoints: [
          "Construct Gas Lift Performance Curves (GLPCs) for all wells.",
          "Apply Equal Slope Method: $dq_1/dQ_{g1} = dq_2/dQ_{g2} = \\dots = dq_n/dQ_{gn}$.",
          "Mathematically guarantees maximum total oil production under fixed compressor limits."
        ]
      }
    },
    career: {
      durationMinutes: 20,
      actionTitle: "Audit Target Job Applications for Week 4",
      instructions: [
        "Review your job tracker: ensure you have at least 15 target company entries.",
        "Prepare for the upcoming Phase 1 Grand Exam in 2 days (Day 30)."
      ],
      deliverable: "15 target companies logged and ready for active applications in Phase 2 & 3."
    }
  },

  // DAY 29
  {
    dayNumber: 29,
    phaseId: 1,
    weekNumber: 4,
    title: "FULL PETROLEUM REVISION: 4-Domain Synthesis",
    category: "fundamentals",
    categoryLabel: "Full Revision",
    todayGoal: "Consolidate all 4 core domains (Fundamentals, Reservoir, Drilling, and Production) in preparation for tomorrow's 85-question Phase 1 Exam.",
    estimatedTotalMinutes: 135,
    learn: {
      durationMinutes: 45,
      summary: "Today is dedicated to systematic consolidation. Over the past 28 days, you have rebuilt your foundation across the entire spectrum of Petroleum Engineering. Today, connect the dots: How petrophysics (porosity, permeability, saturation) governs Darcy flow in the reservoir; how reservoir drive mechanisms dictate wellhead inflow; how drilling mud weight controls formation pressure; and how tubing hydraulics and artificial lift deliver hydrocarbons to surface separators.",
      keyPoints: [
        "Domain 1 — Fundamentals: Porosity, Darcy's linear & radial flow, hydrostatic pressure P = 0.052*rho*TVD, API gravity, and PVT behavior (Bo, Rs, Bg, Pb).",
        "Domain 2 — Reservoir Engineering: Material Balance Equation (MBE), 5 drive mechanisms, relative permeability crossover & wettability, diffusivity equation & radius of investigation, and Vogel's IPR deliverability.",
        "Domain 3 — Drilling & Well Control: Rig subsystems, BHA & drill string buoyancy, mud rheology (PV & YP), kick detection, Driller's vs Wait & Weight methods, and directional trajectories.",
        "Domain 4 — Production Engineering: Well completions & packers, Nodal Analysis (IPR vs VLP intersection), artificial lift selection (ESP vs Gas Lift vs Rod Pump), multiphase flow regimes, and flow assurance (scale, wax, sand, coning)."
      ],
      fieldInsight: "Tomorrow's Phase 1 Exam is your official gateway into Phase 2. Take your time reviewing the core equations and formulas today. Treat tomorrow's exam like a high-stakes technical screening interview at SLB or ONGC."
    },
    watchRead: {
      textbooks: [
        {
          title: "Comprehensive Phase 1 Synthesis",
          chapterOrSection: "Weeks 1 to 4 Formula Sheets and Revision Queue",
          note: "Re-read every item logged in your 'Things I Forgot' ledger from Days 7, 14, and 21."
        }
      ],
      recommendedTopics: [
        "Hydrostatic and Kill Mud formulas",
        "Vogel IPR and Darcy radial equations",
        "Gas lift equal slope and critical choke formulas"
      ]
    },
    practice: {
      durationMinutes: 45,
      questionCount: 10,
      questions: [
        {
          id: "q29_1",
          topic: "Fundamentals",
          question: "If a crude oil has a specific gravity SG = 0.88, what is its API gravity?",
          options: ["29.3° API", "35.0° API", "42.1° API", "18.5° API"],
          correctIndex: 0,
          explanation: "API = (141.5 / 0.88) - 131.5 = 160.795 - 131.5 = 29.29° API (~29.3° API)."
        },
        {
          id: "q29_2",
          topic: "Reservoir",
          question: "At what pressure does the Oil Formation Volume Factor (Bo) reach its peak maximum?",
          options: ["Initial reservoir pressure", "Bubble point pressure (Pb)", "Separator pressure", "Zero psi"],
          correctIndex: 1,
          explanation: "Bo peaks at the bubble point pressure (Pb) due to maximum dissolved gas swelling before gas breakout initiates shrinkage."
        },
        {
          id: "q29_3",
          topic: "Drilling",
          question: "Calculate the hydrostatic pressure of 11.2 ppg mud at 10,000 ft TVD:",
          options: ["5,200 psi", "5,824 psi", "6,100 psi", "4,330 psi"],
          correctIndex: 1,
          explanation: "P = 0.052 * 11.2 * 10,000 = 5,824 psi."
        },
        {
          id: "q29_4",
          topic: "Production",
          question: "Which artificial lift method is best suited for an offshore platform well producing 12,000 BPD with low GOR?",
          options: ["Sucker rod pump", "Electric Submersible Pump (ESP)", "Plunger lift", "PCP"],
          correctIndex: 1,
          explanation: "ESPs excel at lifting high liquid volumes (> 5,000–10,000+ BPD) in offshore platform wells."
        },
        {
          id: "q29_5",
          topic: "Reservoir",
          question: "Which reservoir drive mechanism produces the highest ultimate primary oil recovery factor?",
          options: ["Solution gas drive", "Gravity drainage and strong active water drive", "Rock compressibility drive", "Depletion drive"],
          correctIndex: 1,
          explanation: "Active water drive (35–50%+) and gravity drainage (up to 50–75%+) achieve the highest primary recovery factors."
        },
        {
          id: "q29_6",
          topic: "Drilling",
          question: "When a kick occurs, which pressure gauge reflects the true formation pore pressure?",
          options: ["Shut-In Casing Pressure (SICP)", "Shut-In Drill Pipe Pressure (SIDPP)", "Choke manifold pressure", "Mud pump hydraulic gauge"],
          correctIndex: 1,
          explanation: "SIDPP reflects true pore pressure because the drill string contains an uncontaminated column of original drilling fluid."
        },
        {
          id: "q29_7",
          topic: "Production",
          question: "In Nodal Analysis, the stable well operating point is the intersection of:",
          options: ["Casing burst and collapse ratings", "Inflow Performance Relationship (IPR) and Vertical Lift Performance (VLP)", "Mud weight and fracture gradient", "Porosity and permeability"],
          correctIndex: 1,
          explanation: "The operating point is the unique intersection of reservoir inflow (IPR) and wellbore vertical outflow (VLP)."
        },
        {
          id: "q29_8",
          topic: "Well Control",
          question: "Initial Circulating Pressure (ICP) is calculated as:",
          options: ["SIDPP + Slow Circulating Rate Pressure (SCR)", "SICP + Hydrostatic", "MAASP - SIDPP", "KMW / 0.052"],
          correctIndex: 0,
          explanation: "ICP = SIDPP + SCR pressure at kill speed."
        },
        {
          id: "q29_9",
          topic: "Completions",
          question: "What is the primary fail-safe well barrier installed in the tubing string 100–500 ft below surface to prevent catastrophic blowouts?",
          options: ["Surface-Controlled Subsurface Safety Valve (SCSSV)", "Production packer", "Side pocket mandrel", "Perforating gun"],
          correctIndex: 0,
          explanation: "The SCSSV is the primary subsurface safety valve that automatically snaps closed if surface control line pressure is lost."
        },
        {
          id: "q29_10",
          topic: "Petrophysics",
          question: "Darcy's Law for single-phase laminar flow assumes that fluid flow velocity is directly proportional to:",
          options: ["Temperature difference", "Pressure gradient (dP/dL)", "Casing diameter squared", "Compressibility"],
          correctIndex: 1,
          explanation: "Darcy's Law states that fluid velocity v is directly proportional to the pressure gradient dP/dL."
        }
      ]
    },
    calculation: {
      durationMinutes: 20,
      problemCount: 1,
      problems: [
        {
          id: "calc29_1",
          title: "Full Synthesis Pre-Exam Calculation",
          scenario: "An oil reservoir has initial pressure Pi = 4,000 psig and bubble point Pb = 3,000 psig. Current average reservoir pressure is 3,200 psig. A well drilled to 9,000 ft TVD with 10.0 ppg mud has a Productivity Index J = 2.0 STB/day/psi. While drilling a deeper section at 10,000 ft TVD, a kick occurs with SIDPP = 416 psi.",
          formula: "q = J * (P_r - P_wf); KMW = rho + SIDPP / (0.052 * TVD)",
          givenData: {
            "Pr (psig)": 3200,
            "PI J (STB/d/psi)": 2.0,
            "Pwf_test (psig)": 2600,
            "TVD_kick (ft)": 10000,
            "Current mud (ppg)": 10.0,
            "SIDPP (psi)": 416
          },
          questionText: "Calculate: 1) The well production rate at Pwf = 2,600 psig, and 2) The Kill Mud Weight (KMW) in ppg required to kill the kick at 10,000 ft TVD.",
          solutionSteps: [
            "Step 1: Drawdown Delta P = Pr - Pwf = 3,200 - 2,600 = 600 psi",
            "Step 2: Well production rate q = J * Delta P = 2.0 * 600 = 1,200 STB/day",
            "Step 3: Kill Mud Weight KMW = 10.0 + [416 / (0.052 * 10,000)] = 10.0 + [416 / 520] = 10.0 + 0.8 = 10.8 ppg."
          ],
          finalAnswer: "Flow Rate = 1,200 STB/day, Kill Mud Weight = 10.8 ppg",
          inputUnit: "STB/day",
          expectedNumber: 1200,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int29_1",
        question: "How do you handle a scenario in an interview where you don't know the exact formula or value for a question?",
        whyAsked: "Tests composure, technical honesty, problem-solving methodology, and intellectual humility.",
        modelAnswer: "I stay calm, maintain eye contact, and never attempt to bluff or invent numbers. I answer with structured transparency: 'I do not recall the exact empirical constant off the top of my head, but I can walk you through the governing physics and the first-principles derivation.' I then break down the fundamental physics: conservation of mass, Darcy's law, hydrostatic force balance, or Navier-Stokes assumptions. I outline what variables are in the numerator and denominator and how changing them impacts the outcome. Finally, I state where I would verify the exact parameter in practice—such as the API Recommended Practice, Craft & Hawkins, or Dake. Interviewers value an engineer who understands first-principles physics and verifies facts over someone who guesses dangerously under pressure.",
        keyPoints: [
          "Never bluff or guess numbers.",
          "State honestly that you will derive it from first principles.",
          "Explain the physics: what drives the numerator and denominator.",
          "Cite the industry standard or textbook where you verify the parameter."
        ]
      }
    },
    career: {
      durationMinutes: 10,
      actionTitle: "Prepare Testing Station for Tomorrow's Phase 1 Exam",
      instructions: [
        "Ensure your calculator, scratchpad, and water are ready.",
        "Plan for 90 to 120 minutes of focused, distraction-free time tomorrow."
      ],
      deliverable: "Testing environment set for Day 30 Phase 1 Grand Exam."
    }
  },

  // DAY 30
  {
    dayNumber: 30,
    phaseId: 1,
    weekNumber: 4,
    title: "PHASE 1 EXAM: Grand Technical Benchmark (75 Tech + 10 Calc)",
    category: "assessment",
    categoryLabel: "Phase 1 Exam",
    todayGoal: "Complete the definitive Phase 1 Grand Examination, generate your 4-domain score breakdown, and auto-map your Phase 2 revision topics.",
    estimatedTotalMinutes: 150,
    isTestDay: true,
    testId: "phase_1_grand_exam",
    learn: {
      durationMinutes: 20,
      summary: "Milestone Day. Today is the culmination of Phase 1. You have spent 30 days systematically rebuilding your petroleum engineering foundation. Today's exam covers all 4 foundational subjects: Fundamentals (15 Qs), Reservoir Engineering (20 Qs), Drilling Engineering (20 Qs), Production Engineering (20 Qs), plus 10 comprehensive calculation problems. Your score will be categorized across all four subjects, and any weak topic will be automatically added to your Revision Queue for Phase 2.",
      keyPoints: [
        "Total Questions: 75 Technical Questions + 10 Rigorous Petroleum Calculations.",
        "Pass Benchmark: 80% (68 / 85).",
        "Score Breakdown: 1) Fundamentals %, 2) Reservoir %, 3) Drilling %, 4) Production %.",
        "Automatic Revision Mapping: The website command center analyzes your lowest scoring domains and populates your '🔴 NEEDS REVISION' dashboard card."
      ],
      fieldInsight: "Achieving 80%+ on this exam proves that your academic petroleum engineering foundation is fully restored to top-tier industry standards. You are now ready to transition from studying theory in Phase 1 to producing real portfolio work in Phase 2."
    },
    watchRead: {
      textbooks: [
        {
          title: "Phase 1 Grand Exam",
          chapterOrSection: "Comprehensive 30-Day Syllabus",
          note: "Take a deep breath and start the exam with complete confidence."
        }
      ],
      recommendedTopics: [
        "All Phase 1 formulas and diagnostic concepts"
      ]
    },
    practice: {
      durationMinutes: 80,
      questionCount: 10,
      questions: [
        {
          id: "p1_e1",
          topic: "Fundamentals",
          question: "Which of the following defines absolute permeability?",
          options: ["Permeability when 100% saturated with a single fluid", "Permeability to oil in presence of water", "Ratio of effective to base permeability", "Permeability of damaged rock"],
          correctIndex: 0,
          explanation: "Absolute permeability measures fluid flow capacity when the porous rock is 100% saturated with a single non-reactive fluid."
        },
        {
          id: "p1_e2",
          topic: "PVT",
          question: "In an undersaturated black oil reservoir above bubble point, Solution GOR (Rs):",
          options: ["Remains constant at initial Rsb", "Increases linearly with pressure drop", "Decreases to zero", "Fluctuates with temperature"],
          correctIndex: 0,
          explanation: "Above bubble point, no gas escapes solution, so dissolved GOR Rs remains strictly constant."
        },
        {
          id: "p1_e3",
          topic: "Reservoir",
          question: "In Havlena and Odeh's straight-line MBE method, plotting F / (Eo + m*Eg) vs We / (Eo + m*Eg) yields a line with:",
          options: ["Slope = 1.0 and Intercept = N", "Slope = N and Intercept = 0", "Slope = m and Intercept = Boi", "Slope = PI"],
          correctIndex: 0,
          explanation: "This Havlena-Odeh arrangement produces a straight line with slope 1.0 and y-intercept N (STOIIP) if the correct aquifer model is chosen."
        },
        {
          id: "p1_e4",
          topic: "Reservoir",
          question: "Vogel's IPR equation for saturated oil wells expresses flow rate q as a function of:",
          options: ["(Pwf / Pr) and (Pwf / Pr)^2", "Pwf^10", "1 / Pwf", "ln(re / rw)"],
          correctIndex: 0,
          explanation: "Vogel's equation is quadratic: q/qmax = 1 - 0.2*(Pwf/Pr) - 0.8*(Pwf/Pr)^2."
        },
        {
          id: "p1_e5",
          topic: "Drilling",
          question: "What is the primary function of the BOP annular preventer?",
          options: ["To seal around any pipe size, tool joint, or open hole", "To drill through hard rock", "To mix mud", "To generate power"],
          correctIndex: 0,
          explanation: "The annular preventer's flexible elastomeric packing element can seal around any tubular shape or open hole in emergencies."
        },
        {
          id: "p1_e6",
          topic: "Drilling",
          question: "Which well-kill procedure pumps kill mud in a single circulation while adjusting the choke to follow a drill pipe pressure step-down graph?",
          options: ["Wait & Weight (Engineer's) Method", "Driller's Method", "Volumetric Method", "Bullheading"],
          correctIndex: 0,
          explanation: "Wait & Weight weights up kill mud first, pumping it in one circulation from ICP down to FCP."
        },
        {
          id: "p1_e7",
          topic: "Production",
          question: "Which artificial lift method is best suited for high liquid volumes (e.g. 15,000 BPD) with low GOR in offshore wells?",
          options: ["Sucker rod pump", "Electric Submersible Pump (ESP)", "Plunger lift", "PCP"],
          correctIndex: 1,
          explanation: "ESPs are high-volume downhole centrifugal pumps designed specifically for thousands of barrels per day."
        },
        {
          id: "p1_e8",
          topic: "Production",
          question: "What does the intersection of the IPR and VLP curves represent in Nodal Analysis?",
          options: ["The stable operating flow rate and flowing bottom-hole pressure", "The maximum burst pressure of casing", "The bubble point", "The total field reserves"],
          correctIndex: 0,
          explanation: "The intersection point represents the physical equilibrium operating rate and pressure of the well system."
        },
        {
          id: "p1_e9",
          topic: "Completions",
          question: "Surface-Controlled Subsurface Safety Valves (SCSSVs) are designed to be fail-safe by closing automatically when:",
          options: ["Hydraulic control line pressure is lost or bled off", "Wellhead temperature rises by 1°F", "Separators are full", "Rig engines stop"],
          correctIndex: 0,
          explanation: "Loss of hydraulic control line pressure allows an internal spring to force the SCSSV flapper shut, isolating the wellbore."
        },
        {
          id: "p1_e10",
          topic: "Flow Assurance",
          question: "Which mineral scale can be easily dissolved by 15% Hydrochloric Acid (HCl)?",
          options: ["Calcium Carbonate (CaCO3)", "Barium Sulfate (BaSO4)", "Strontium Sulfate (SrSO4)", "Silica (SiO2)"],
          correctIndex: 0,
          explanation: "Calcium carbonate reacts rapidly with HCl to produce CaCl2, water, and CO2, dissolving cleanly."
        }
      ]
    },
    calculation: {
      durationMinutes: 35,
      problemCount: 1,
      problems: [
        {
          id: "calc30_1",
          title: "Phase 1 Grand Exam Calculation: Complete System Integration",
          scenario: "An oil reservoir has initial pressure Pi = 3,500 psig and bubble point Pb = 2,500 psig. A production well drilled to 8,000 ft TVD produces from a 50-ft net pay sand (k = 60 mD, phi = 0.20, Swi = 0.25, Bo = 1.25 bbl/STB, mu = 1.8 cp, re = 1,000 ft, rw = 0.35 ft, s = 0). The well is producing at a flowing bottom-hole pressure Pwf = 2,800 psig (above Pb). While working over the well with 10.5 ppg brine, a gas kick is encountered with SIDPP = 350 psi.",
          formula: "q_Darcy = [0.00708 * k * h * (P_r - P_wf)] / [mu * B * ln(r_e / r_w)]; KMW = rho + SIDPP / (0.052 * TVD)",
          givenData: {
            "TVD (ft)": 8000,
            "Pr (psig)": 3500,
            "Pwf (psig)": 2800,
            "k (mD)": 60,
            "h (ft)": 50,
            "mu (cp)": 1.8,
            "Bo (bbl/STB)": 1.25,
            "re (ft)": 1000,
            "rw (ft)": 0.35,
            "Current brine rho (ppg)": 10.5,
            "SIDPP (psi)": 350
          },
          questionText: "Calculate: 1) The steady-state oil production rate in STB/day according to Darcy's radial flow equation, and 2) The Kill Mud Weight (KMW) in ppg required to balance the kick.",
          solutionSteps: [
            "Step 1: Delta P = Pr - Pwf = 3,500 - 2,800 = 700 psi",
            "Step 2: ln(re / rw) = ln(1,000 / 0.35) = ln(2,857.14) = 7.9576",
            "Step 3: Darcy Numerator = 0.00708 * 60 * 50 * 700 = 14,868",
            "Step 4: Darcy Denominator = 1.8 * 1.25 * 7.9576 = 17.9046",
            "Step 5: Darcy Flow Rate q = 14,868 / 17.9046 = 830.4 STB/day (~830 STB/day)",
            "Step 6: Kill Mud Weight KMW = 10.5 + [350 / (0.052 * 8,000)]",
            "       = 10.5 + [350 / 416] = 10.5 + 0.841 = 11.34 ppg (~11.3 ppg)."
          ],
          finalAnswer: "Darcy Rate = 830 STB/day, Kill Mud Weight = 11.3 ppg",
          inputUnit: "STB/day",
          expectedNumber: 830,
          tolerance: 10
        }
      ]
    },
    interview: {
      durationMinutes: 15,
      question: {
        id: "int30_1",
        question: "Congratulations on completing Phase 1! If an executive interviewer asks: 'What makes you a better petroleum engineer today than you were when you graduated from MIT Pune?' What is your answer?",
        whyAsked: "Tests self-transformation, professional maturation, humility, and value articulation.",
        modelAnswer: "When I graduated from MIT Pune, I possessed strong theoretical knowledge, but my understanding was compartmentalized into academic textbooks. Over the past 30 days of intensive professional rebuilding, I transformed that academic theory into integrated operational fluency.\nToday, I don't just calculate a Darcy flow rate in isolation—I connect it to Nodal Analysis, choke performance, and artificial lift selection. When I analyze formation pressures, I immediately understand the well control implications, casing seat design, and kick tolerance margins. I have sharpened my ability to solve real-world petroleum calculation problems under time constraints and diagnose root-cause production failures like water coning and scale deposition. Most importantly, I approach problems from an asset value and safety perspective: how to maximize recovery, minimize OPEX, and protect well integrity. This combination of refreshed technical rigor, operational perspective, and deliberate daily discipline makes me ready to hit the ground running on your engineering desk from day one.",
        keyPoints: [
          "From compartmentalized academic theory to integrated operational fluency.",
          "Connects reservoir inflow to wellbore hydraulics, well control, and surface facilities.",
          "Focus on asset value, safety margins, and immediate operational contribution."
        ]
      }
    },
    career: {
      durationMinutes: 10,
      actionTitle: "Review Your 4-Domain Phase 1 Scorecard & Transition to Phase 2",
      instructions: [
        "Record your overall Phase 1 score and review your weakest domain.",
        "Check your '🔴 NEEDS REVISION' dashboard widget.",
        "Take a well-deserved evening off: Tomorrow begins Phase 2 — 'BECOME PRACTICAL'!"
      ],
      deliverable: "Phase 1 scorecard verified and transition to Phase 2 officially unlocked."
    }
  }
];
