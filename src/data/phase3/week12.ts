import { DayPlan } from '../../types';

export const WEEK_12_DAYS: DayPlan[] = [
  // DAY 87
  {
    dayNumber: 87,
    phaseId: 3,
    weekNumber: 12,
    title: "Interview Bootcamp 1: Reservoir Engineering & Well Testing",
    category: "interview_bootcamp",
    categoryLabel: "Interview Bootcamp",
    todayGoal: "Master high-pressure technical interview drills on Reservoir Engineering: Drive Mechanisms, Material Balance, Vogel IPR, Horner PTA, Skin, and Bourdet Derivatives.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Welcome to the 4-Day Interview Bootcamp! Days 87 to 90 simulate the rigorous, multi-round technical interviews conducted by top operators and service companies. In Round 1, technical interviewers probe your core reservoir and well testing intuition: Can you explain drive mechanisms without hesitation? Can you sketch an IPR curve below bubble point? Can you interpret a Horner plot slope and Bourdet derivative on a whiteboard? Today, you drill the 10 most common technical reservoir questions with model answers.",
      keyPoints: [
        "Whiteboard Drill 1: Drive Mechanisms & Recovery: Solution gas drive (15–22% RF, rapid pressure decline, GOR spike); Gas cap drive (20–35% RF, moderate pressure decline); Water drive (35–50% RF, steady pressure, water cut surge); Gravity drainage (40–70% RF in dipping reservoirs).",
        "Whiteboard Drill 2: Inflow Performance Relationship (IPR): Darcy straight-line PI above bubble point (Pb). Vogel parabolic curvature below bubble point: `q / q_max = 1 - 0.2*(Pwf/Pr) - 0.8*(Pwf/Pr)^2`. Explain physical cause: two-phase gas breakout reduces oil relative permeability (kro).",
        "Whiteboard Drill 3: General Material Balance (Havlena-Odeh): `F = N*(Eo + m*Eg + Efw) + We`. Explain how plotting F vs (Eo + m*Eg) yields a straight line through the origin whose slope is Original Oil in Place (N).",
        "Whiteboard Drill 4: Horner Pressure Transient Analysis (PTA): Semilog plot of shut-in bottomhole pressure Pws vs log[(tp + dt)/dt]. Straight-line middle-time slope (m) determines permeability-thickness (k*h) and initial reservoir pressure (P*). Skin factor `s` calculated from intercept.",
        "Whiteboard Drill 5: The Bourdet Derivative: Log-log plot of Delta P and Delta P' * dt vs elapsed time dt. Half-unit slope at early time = wellbore storage; horizontal flat derivative plateau = infinite-acting radial flow (IARF); upward derivative curve at late time = sealing fault or reservoir boundary."
      ],
      coreFormulas: [
        {
          name: "Vogel IPR Equation",
          formula: "q / q_max = 1.0 - 0.2 * (Pwf / Pr) - 0.8 * (Pwf / Pr)**2",
          explanation: "Universal inflow equation for two-phase flow below bubble point."
        },
        {
          name: "Permeability-Thickness from Horner Slope",
          formula: "k * h = (162.6 * q * B * mu) / m",
          explanation: "Calculates reservoir flow capacity from semilog Horner slope m."
        },
        {
          name: "Skin Factor Equation",
          formula: "s = 1.151 * [ (P_1hr - Pwf) / m - log(k / (phi * mu * ct * rw^2)) + 3.23 ]",
          explanation: "Quantifies near-wellbore damage (s > 0) or stimulation (s < 0)."
        }
      ],
      fieldInsight: "When asked a technical question in an interview, NEVER jump straight to formulas! Always start with the physical concept: 'Physically, when flowing pressure drops below bubble point, free gas bubbles form in the pore throats. Because gas has lower viscosity and higher mobility, it flows preferentially, which chokes off the oil relative permeability. That is why the IPR curve bends downward parabolically according to Vogel's equation.' Concept first, formula second, practical application third."
    },
    watchOrRead: {
      type: "read",
      title: "SPE Technical Guides: Essential Reservoir Engineering Interview Questions & Solutions",
      url: "https://petrowiki.spe.org/Reservoir_engineering",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d87-q1",
          question: "An interviewer asks: 'Why does an oil well's IPR curve bend parabolically below bubble point instead of following Darcy's straight line?' What is the correct physical explanation?",
          options: [
            "Below bubble point, dissolved gas flashes out of the liquid, creating two-phase flow where gas bubbles occupy pore space and severely reduce the relative permeability to oil (kro)",
            "The oil becomes solid",
            "Reservoir temperature drops to freezing",
            "The casing collapses"
          ],
          correctOptionIndex: 0,
          explanation: "Gas saturation increases below Pb, sharply reducing relative permeability to oil and causing the parabolic deliverability decline modeled by Vogel.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d87-q2",
          question: "Which reservoir drive mechanism exhibits the highest typical ultimate oil recovery factor (often 40% to 70%)?",
          options: [
            "Gravity drainage in thick, steeply dipping, high-permeability reservoirs",
            "Solution gas drive in tight sandstone",
            "Closed volumetric depletion drive",
            "Compressibility drive in undersaturated oil"
          ],
          correctOptionIndex: 0,
          explanation: "Gravity drainage with high dip and vertical permeability allows oil to drain cleanly into downdip wells, achieving recovery factors up to 70%.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d87-q3",
          question: "On a Bourdet pressure derivative log-log plot, what reservoir flow regime is represented by a flat, horizontal derivative line?",
          options: [
            "Infinite-Acting Radial Flow (IARF) through the formation matrix",
            "Wellbore storage effect",
            "Linear fracture flow",
            "Sealing fault boundary"
          ],
          correctOptionIndex: 0,
          explanation: "During infinite-acting radial flow, pressure changes logarithmically with time, making its logarithmic derivative strictly constant (flat plateau).",
          topic: "Well Testing"
        },
        {
          id: "d87-q4",
          question: "What does a Skin Factor s = +8.5 indicate during a DST well test evaluation?",
          options: [
            "Significant near-wellbore formation damage (drilling mud invasion, scale, or perforation plugging) causing extra pressure drawdown",
            "A hydraulic fracture with negative drawdown",
            "The well is a dry hole",
            "Porosity is zero"
          ],
          correctOptionIndex: 0,
          explanation: "Positive skin indicates flow restriction (damage); negative skin indicates stimulation (acidizing or hydraulic fracturing).",
          topic: "Well Testing"
        },
        {
          id: "d87-q5",
          question: "In Havlena-Odeh material balance analysis, plotting F / (Eo + Bw*Efw) versus (Eg - Bw*Efw) / (Eo + Bw*Efw) helps determine which unknown reservoir parameter?",
          options: [
            "The ratio of gas cap volume to oil volume (m) and Original Oil in Place (N)",
            "The depth of the ocean",
            "The viscosity of water",
            "The price of crude oil"
          ],
          correctOptionIndex: 0,
          explanation: "Havlena and Odeh linearized material balance into straight-line plots to resolve OOIP (N) and gas cap size (m).",
          topic: "Reservoir Engineering"
        },
        {
          id: "d87-q6",
          question: "If a pressure build-up test Horner plot exhibits a semilog slope m = 45 psi/cycle, and a second well exhibits m = 180 psi/cycle with identical fluid and rate, which reservoir has higher permeability?",
          options: [
            "The first well (m = 45 psi/cycle), because permeability-thickness (kh) is inversely proportional to Horner slope: kh = 162.6*q*B*mu / m",
            "The second well (m = 180 psi/cycle)",
            "Both have identical permeability",
            "Slope does not relate to permeability"
          ],
          correctOptionIndex: 0,
          explanation: "Lower Horner slope means higher permeability-thickness (kh is inversely proportional to m).",
          topic: "Well Testing"
        },
        {
          id: "d87-q7",
          question: "What is 'Flow Efficiency' (FE) of a well with total drawdown (Pr - Pwf) = 800 psi and skin pressure drop (Delta P_skin) = 320 psi?",
          options: [
            "FE = (800 - 320) / 800 = 480 / 800 = 0.60 (60%)",
            "FE = 800 / 320 = 2.5",
            "FE = 320 / 800 = 0.40",
            "FE = 100%"
          ],
          correctOptionIndex: 0,
          explanation: "Flow Efficiency = Ideal Drawdown / Actual Drawdown = (Delta P_total - Delta P_skin) / Delta P_total = 480 / 800 = 0.60.",
          topic: "Well Testing"
        },
        {
          id: "d87-q8",
          question: "How does a sealing fault boundary appear on a Horner semilog build-up plot at late times?",
          options: [
            "The straight-line slope doubles from m to 2*m",
            "The slope drops to zero",
            "The pressure drops to zero",
            "The plot becomes a circle"
          ],
          correctOptionIndex: 0,
          explanation: "When the drainage radius encounters an impermeable sealing boundary, flow geometry transitions from 360-degree to 180-degree radial flow, doubling the Horner slope to 2*m.",
          topic: "Well Testing"
        },
        {
          id: "d87-q9",
          question: "What is 'Radius of Investigation' (r_inv) in a well test?",
          options: [
            "The distance into the reservoir that the transient pressure wave has propagated during the test: r_inv = 0.029 * sqrt(k*t / (phi*mu*ct))",
            "The depth of the casing shoe",
            "The length of the horizontal section",
            "The diameter of the drill bit"
          ],
          correctOptionIndex: 0,
          explanation: "Radius of investigation calculates the radial depth into the formation probed by the pressure transient at elapsed time t.",
          topic: "Well Testing"
        },
        {
          id: "d87-q10",
          question: "What happens to the Gas-Oil Ratio (GOR) of an undersaturated oil reservoir when average pressure drops below bubble point?",
          options: [
            "GOR remains flat until bubble point, and then surges sharply as free gas breaks out of solution and flows with high mobility",
            "GOR drops to zero",
            "GOR decreases continuously",
            "GOR stays at 100 scf/STB forever"
          ],
          correctOptionIndex: 0,
          explanation: "Dissolved gas is released below Pb; high relative permeability to gas causes a steep surge in producing GOR.",
          topic: "Reservoir Engineering"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "An interviewer presents a whiteboard well test problem:\n- Stabilized oil rate before shut-in q = 500 STB/d\n- Formation volume factor Bo = 1.25 bbl/STB; Oil viscosity mu = 1.50 cP\n- Net reservoir thickness h = 25.0 ft; Total compressibility ct = 1.20 x 10^-5 psi^-1; Porosity phi = 0.20\n- Wellbore radius rw = 0.35 ft\n- Horner semilog slope m = 40.0 psi / cycle\n- Flowing bottomhole pressure at shut-in Pwf = 2,400 psi\n- Extrapolated 1-hour pressure from Horner straight line P_1hr = 2,850 psi\nCalculate: 1) Reservoir Permeability (k in mD), 2) Permeability-Thickness product (kh in mD-ft), 3) Total skin factor (s), 4) Pressure drop due to skin (Delta P_skin in psi), and 5) Flow Efficiency (FE %).",
      givenValues: [
        { label: "Rate (q)", value: "500 STB/d" },
        { label: "Bo / mu", value: "1.25 bbl/STB / 1.50 cP" },
        { label: "Net Thickness (h)", value: "25.0 ft" },
        { label: "Horner Slope (m)", value: "40.0 psi/cycle" },
        { label: "Pwf / P_1hr", value: "2,400 psi / 2,850 psi" },
        { label: "phi / ct / rw", value: "0.20 / 1.2e-5 psi^-1 / 0.35 ft" }
      ],
      stepByStepSolution: [
        "Step 1: kh = (162.6 * q * Bo * mu) / m = (162.6 * 500 * 1.25 * 1.50) / 40.0 = 152,437.5 / 40.0 = 3,810.9 mD-ft.\nPermeability k = kh / h = 3,810.9 / 25.0 = 152.4 mD.",
        "Step 2: Skin Factor Formula:\ns = 1.151 * [ (P_1hr - Pwf) / m - log10(k / (phi * mu * ct * rw^2)) + 3.23 ]\nTerm 1: (2,850 - 2,400) / 40.0 = 450 / 40.0 = 11.250.\nDenominator inside log: phi * mu * ct * rw^2 = 0.20 * 1.50 * (1.20e-5) * (0.35^2) = 0.20 * 1.50 * 1.20e-5 * 0.1225 = 4.410e-7.\nk / denominator = 152.4 / 4.410e-7 = 3.4558e8.\nlog10(3.4558e8) = 8.5385.\nBracket = 11.250 - 8.5385 + 3.23 = 5.9415.\ns = 1.151 * 5.9415 = +6.84 (Significant skin damage).",
        "Step 3: Pressure Drop Due to Skin:\nDelta P_skin = 0.869 * m * s = 0.869 * 40.0 * 6.84 = 237.7 psi.",
        "Step 4: Total Drawdown (assuming P* ~ 2,950 psi or (P_1hr + Delta P)): Total Drawdown Delta P_total = (P_1hr + m*log(tp)) - Pwf ~ 550 psi.\nIdeal Drawdown = 550 - 237.7 = 312.3 psi.\nFlow Efficiency FE = Ideal / Actual = 312.3 / 550.0 = 0.5678 = 56.8%."
      ],
      finalAnswer: "k = 152.4 mD | kh = 3,811 mD-ft | Skin s = +6.84 | Delta P_skin = 237.7 psi | Flow Efficiency = 56.8%",
      engineeringSignificance: "The skin factor of +6.84 causes 238 psi of wasted drawdown, dropping flow efficiency to 57%. You explain to the interviewer: 'This reservoir has excellent 152 mD permeability, but near-wellbore damage is choking off 43% of its potential. An acid stimulation will eliminate this skin and increase flow rate by over 75% at the same bottomhole pressure.'"
    },
    interview: {
      durationMinutes: 15,
      question: "Sketch and explain the Bourdet pressure derivative plot for a hydraulically fractured well in a channel reservoir.",
      sampleAnswer: "I explain by walking through the temporal flow regimes on a log-log plot: 1) Early Time: At very early shut-in time, fluid decompression inside the wellbore creates a unit-slope (slope = 1.0) line representing wellbore storage. 2) Fracture Linear Flow: As fluid drains from the fracture face, the derivative transitions into a half-slope (slope = 0.5) line on log-log coordinates, reflecting linear flow perpendicular to the fracture wings. 3) Infinite-Acting Radial Flow (IARF): Once the transient expands beyond the fracture tips into the formation matrix, the derivative stabilizes into a flat, horizontal plateau (the derivative is constant). This plateau is where we calculate formation permeability-thickness (kh). 4) Late-Time Channel Boundaries: Finally, as the pressure wave hits the two parallel sealing boundaries of the channel sand, flow is constricted into late-time linear flow, causing the derivative to turn upward with another half-slope line (slope = 0.5). Showing this complete 4-regime progression proves complete mastery of modern transient diagnostics.",
      conceptCheck: "Walk through the four time regimes: Storage (slope 1) -> Fracture linear (slope 0.5) -> Radial plateau (slope 0) -> Channel boundary (slope 0.5)."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Drill this reservoir interview module: practice sketching Vogel IPR curves, the Horner semilog straight line, and the 4 Bourdet flow regimes on paper or a whiteboard until you can deliver the explanation in under 3 minutes."
    },
    checklist: [
      { id: "d87-c1", text: "Mastered drive mechanisms and recovery factor benchmarks", completed: false },
      { id: "d87-c2", text: "Explained physical cause of parabolic Vogel IPR below bubble point", completed: false },
      { id: "d87-c3", text: "Calculated permeability (k), skin (s), and flow efficiency from Horner data", completed: false },
      { id: "d87-c4", text: "Interpreted Bourdet derivative flow regimes (storage, radial, boundary)", completed: false },
      { id: "d87-c5", text: "Rehearsed the whiteboard well test interview problem seamlessly", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 88
  {
    dayNumber: 88,
    phaseId: 3,
    weekNumber: 12,
    title: "Interview Bootcamp 2: Drilling Operations & Production Systems",
    category: "interview_bootcamp",
    categoryLabel: "Interview Bootcamp",
    todayGoal: "Master technical interview drills on Drilling and Production: Rig Systems, Kill Mud Weight, Well Control Drills, ESP vs Gas Lift selection, Nodal Analysis, and Flow Assurance.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Round 2 technical interviews focus on operational engineering: Drilling systems, well control, artificial lift design, nodal analysis, and surface flow assurance. Interviewers want to see that you understand the practical physics of a drilling rig floor and production facility. Today, you drill kick detection, Driller's vs Wait & Weight method, kill mud weight calculations, ESP vs Gas Lift trade-offs, and Nodal Analysis optimization.",
      keyPoints: [
        "Whiteboard Drill 1: Kick Detection & Shut-In Procedures: Primary kick warning signs: 1) Flow rate increase with constant mud pump strokes; 2) Pit gain in surface mud tanks; 3) Drilling break (sudden ROP surge when entering high-pressure permeable sand); 4) Pump pressure drop. Hard Shut-In: Space out drill string -> Stop rotary/pumps -> Open choke line HCR valve -> Close Annular or Pipe Rams -> Record SIDPP and SICP.",
        "Whiteboard Drill 2: Kill Mud Weight (KMW) & Well Control: `KMW = Current_MW + SIDPP / (0.052 * TVD)`. Driller's Method: 2 circulations (Circulation 1: pump out kick with current mud; Circulation 2: pump kill mud). Wait & Weight Method: 1 circulation (wait for kill mud to be weighted up, then circulate out kick and kill well simultaneously, minimizing casing shoe pressure).",
        "Whiteboard Drill 3: Artificial Lift Selection (ESP vs Gas Lift vs Sucker Rod Pump): ESP: Ideal for high fluid rates (> 2,000 bbl/d) in offshore/unconventional wells; poor for high free gas or sand. Gas Lift: Ideal for high GOR, deviated wellbores, sandy fluid, low maintenance (no downhole moving parts); requires high-pressure gas supply. Rod Pump: Best for low-rate onshore (< 500 bbl/d), deep, viscous fluid, highly durable.",
        "Whiteboard Drill 4: Nodal Analysis Optimization: Intersection of Inflow Performance Relationship (IPR) and Tubing Performance Curve (VLP / Outflow). Operating point (q_op, Pwf_op). Show how increasing tubing size shifts VLP right (increasing rate until liquid loading occurs). Show how installing gas lift or ESP lowers VLP, shifting intersection to higher rates.",
        "Whiteboard Drill 5: Flow Assurance (Wax, Scale, Hydrates): Gas hydrates form at high pressure and low temperature; mitigate via methanol/glycol thermodynamic inhibitors or line heating. Barium/Strontium sulfate scale is insoluble; mitigate via continuous phosphonate scale inhibitor injection."
      ],
      coreFormulas: [
        {
          name: "Kill Mud Weight Formula",
          formula: "KMW (ppg) = Current_MW + SIDPP / (0.052 * TVD_ft)",
          explanation: "Calculates mud weight required to rebalance reservoir pore pressure."
        },
        {
          name: "Initial Circulating Pressure (ICP)",
          formula: "ICP = Slow_Circulating_Rate_Pressure (SCRP) + SIDPP",
          explanation: "Drill pipe pressure required when starting well kill circulation."
        },
        {
          name: "Final Circulating Pressure (FCP)",
          formula: "FCP = SCRP * (KMW / Current_MW)",
          explanation: "Drill pipe pressure once kill mud reaches the drill bit."
        }
      ],
      fieldInsight: "When discussing well control in an interview, emphasize the casing shoe fracture gradient! Explain why the Wait & Weight method is superior to the Driller's method in wells with narrow drilling margins: Wait & Weight places heavy kill mud in the drill string faster, which keeps the total casing shoe pressure significantly lower and prevents fracturing the formation below the shoe."
    },
    watchOrRead: {
      type: "read",
      title: "IADC (International Association of Drilling Contractors): Well Control Guidelines",
      url: "https://www.iadc.org",
      platform: "IADC Guidelines / PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d88-q1",
          question: "An interviewer asks: 'What is the very first operational action a driller must take when a pit gain is observed during drilling?' What is the correct protocol?",
          options: [
            "Perform a flow check: stop the mud pumps, pick up off bottom to space out tool joints above the rotary table, and observe if fluid continues flowing out of the wellbore",
            "Increase pump speed to wash away the kick",
            "Keep drilling as fast as possible",
            "Dump all mud into the reserve pit"
          ],
          correctOptionIndex: 0,
          explanation: "A flow check immediately verifies whether the well is naturally flowing (influx) or if the pit gain was merely surface mud transfer.",
          topic: "Drilling Operations"
        },
        {
          id: "d88-q2",
          question: "Why is Shut-In Casing Pressure (SICP) almost always higher than Shut-In Drill Pipe Pressure (SIDPP) after shutting in on a gas kick?",
          options: [
            "Because the drill string is full of clean, uniform drilling mud, whereas the annulus contains light gas influx that lowers annular hydrostatic pressure, requiring higher surface backpressure to balance formation pressure",
            "Because casing is larger than drill pipe",
            "Because casing pressure gauges are calibrated differently",
            "Casing pressure is always zero"
          ],
          correctOptionIndex: 0,
          explanation: "The light gas bubble in the annulus reduces hydrostatic pressure; higher surface casing pressure balances pore pressure.",
          topic: "Well Control"
        },
        {
          id: "d88-q3",
          question: "What is the primary advantage of the Wait & Weight well control method over the Driller's Method?",
          options: [
            "It generates significantly lower maximum pressure at the casing shoe during kick circulation, reducing the risk of fracturing the formation",
            "It requires zero math",
            "It can be completed in 5 minutes",
            "It does not require mud weight to be increased"
          ],
          correctOptionIndex: 0,
          explanation: "Wait & Weight introduces heavy kill mud immediately, reducing annular pressures at the vulnerable casing shoe.",
          topic: "Well Control"
        },
        {
          id: "d88-q4",
          question: "In an offshore subsea well producing 8,000 bbl/d total fluid with high GLR (Gas-Liquid Ratio) and sandy fluid, why is Gas Lift chosen over an ESP?",
          options: [
            "Gas lift has no downhole rotating mechanical parts that can be abraded by sand or gas-locked by free gas, making it exceptionally reliable for costly subsea workover interventions",
            "Gas lift is cheaper to buy at a hardware store",
            "ESPs cannot pump oil",
            "Gas lift requires no electricity"
          ],
          correctOptionIndex: 0,
          explanation: "Sand abrasion rapidly destroys ESP impellers, whereas gas lift handles solids and free gas with virtually zero moving parts.",
          topic: "Artificial Lift"
        },
        {
          id: "d88-q5",
          question: "In Nodal Analysis, what is the 'Solution Node' (Operating Point)?",
          options: [
            "The flow rate and pressure defined by the exact intersection of the Inflow Performance Relationship (IPR) and Vertical Lift Performance (VLP) curves",
            "The top of the wellhead",
            "The bottom of the casing shoe",
            "The location of the refinery"
          ],
          correctOptionIndex: 0,
          explanation: "The operating point represents the unique flow rate where reservoir delivery pressure equals the total piping backpressure.",
          topic: "Production Systems"
        },
        {
          id: "d88-q6",
          question: "What operational risk occurs if a production engineer selects an oversized tubing diameter (e.g. installing 4-1/2\" tubing on a well producing only 150 bbl/d)?",
          options: [
            "Severe liquid loading: superficial gas velocity drops below Turner critical velocity, causing liquid droplets to fall back and kill the well",
            "The tubing will burst under pressure",
            "Oil will flow too fast and damage surface tanks",
            "Water cut will immediately jump to 100%"
          ],
          correctOptionIndex: 0,
          explanation: "Oversized tubing reduces gas velocity below the critical slip velocity, preventing liquid lifting and killing the well.",
          topic: "Production Engineering"
        },
        {
          id: "d88-q7",
          question: "How do thermodynamic hydrate inhibitors (such as Methanol or Monoethylene Glycol, MEG) prevent gas hydrate formation in subsea flowlines?",
          options: [
            "They shift the hydrate equilibrium temperature curve to the left (colder temperatures), allowing fluids to flow at lower temperatures without freezing",
            "They dissolve the pipe steel",
            "They heat the pipeline by 500 degrees",
            "They turn natural gas into water"
          ],
          correctOptionIndex: 0,
          explanation: "Like antifreeze in cars, methanol and glycol lower the hydrate equilibrium formation temperature.",
          topic: "Production Systems"
        },
        {
          id: "d88-q8",
          question: "What is 'Equivalent Circulating Density' (ECD) during drilling operations?",
          options: [
            "The effective hydrostatic density exerted against the wellbore while mud is circulating: ECD = Static_MW + Annular_Friction_Pressure / (0.052 * TVD)",
            "The density of the steel casing",
            "The weight of the drill bit",
            "The density of crude oil"
          ],
          correctOptionIndex: 0,
          explanation: "ECD combines static mud weight with the dynamic friction pressure loss in the annulus, representing the true pressure on the rock while pumping.",
          topic: "Drilling Operations"
        },
        {
          id: "d88-q9",
          question: "What mechanical modification prevents rod-tubing wear in highly deviated, rod-pumped wells?",
          options: [
            "Installing molded wheeled rod guides, continuous rod, rotating tubing anchors, and sinker bars in the compressive zone",
            "Removing all centralizers",
            "Running the pump at maximum possible speed",
            "Using plastic tubing"
          ],
          correctOptionIndex: 0,
          explanation: "Rod guides, rotating tubing hangers, and sinker bars reduce side-load friction, preventing premature tubing leaks in deviated wellbores.",
          topic: "Artificial Lift"
        },
        {
          id: "d88-q10",
          question: "In well control, why must drill pipe pressure be maintained on the kill line schedule rather than casing pressure while circulating out a kick?",
          options: [
            "Because the drill string contains a known, uniform column of mud whose hydrostatic pressure can be calculated exactly, whereas the annulus contains an expanding gas bubble with unknown mixed density",
            "Because the drill pipe pressure gauge is larger",
            "Casing gauges are illegal during well kills",
            "The driller cannot see the casing gauge"
          ],
          correctOptionIndex: 0,
          explanation: "Drill pipe hydrostatic is constant and predictable, providing a dependable window into bottomhole pressure.",
          topic: "Well Control"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "An interviewer presents a high-pressure well control problem:\n- Current Well Depth TVD = 10,000 ft\n- Current Drilling Mud Weight = 10.5 ppg\n- Slow Circulating Rate Pressure (SCRP) at 30 SPM = 650 psi\n- The well takes a gas kick and is successfully shut in:\n  * Shut-In Drill Pipe Pressure (SIDPP) = 520 psi\n  * Shut-In Casing Pressure (SICP) = 840 psi\n  * Pit gain = 25 bbl\nCalculate: 1) True Reservoir Formation Pore Pressure (P_pore in psi), 2) Kill Mud Weight required to balance pore pressure (KMW in ppg), 3) Initial Circulating Pressure (ICP in psi) when starting kill mud circulation, and 4) Final Circulating Pressure (FCP in psi) when kill mud reaches the drill bit.",
      givenValues: [
        { label: "Depth (TVD)", value: "10,000 ft" },
        { label: "Current Mud Weight", value: "10.5 ppg" },
        { label: "SCRP at 30 SPM", value: "650 psi" },
        { label: "SIDPP / SICP", value: "520 psi / 840 psi" },
        { label: "Pit Gain", value: "25 bbl" }
      ],
      stepByStepSolution: [
        "Step 1: Reservoir Pore Pressure = Drill String Hydrostatic + SIDPP\nHydrostatic = 0.052 * Current_MW * TVD = 0.052 * 10.5 * 10,000 = 5,460.0 psi.\nP_pore = 5,460.0 + 520.0 = 5,980.0 psi.",
        "Step 2: Kill Mud Weight (KMW):\nKMW = Current_MW + SIDPP / (0.052 * TVD) = 10.5 + 520 / (0.052 * 10,000) = 10.5 + 520 / 520 = 10.5 + 1.00 = 11.50 ppg.\n(Check: 0.052 * 11.5 * 10,000 = 5,980 psi = P_pore. Exact match).",
        "Step 3: Initial Circulating Pressure (ICP):\nICP = SCRP + SIDPP = 650 + 520 = 1,170.0 psi.",
        "Step 4: Final Circulating Pressure (FCP):\nFCP = SCRP * (KMW / Current_MW) = 650 * (11.50 / 10.50) = 650 * 1.09524 = 711.9 psi (~712 psi)."
      ],
      finalAnswer: "Pore Pressure = 5,980 psi | Kill Mud Weight = 11.50 ppg | ICP = 1,170 psi | FCP = 712 psi",
      engineeringSignificance: "Walking through these four calculations on a whiteboard with zero hesitation proves you understand the exact mathematical physics of drilling hydraulics and primary well control. An interviewer seeing you derive ICP = 1,170 psi and FCP = 712 psi knows you are ready for wellsite and operations duties."
    },
    interview: {
      durationMinutes: 15,
      question: "You have an offshore platform with 10 wells producing from a depleting reservoir where water cut is increasing from 40% to 85%. How do you use Nodal Analysis to recommend whether to upgrade ESPs or convert to Gas Lift?",
      sampleAnswer: "I conduct a systematic Nodal Analysis evaluation combining inflow and outflow curves for each well: 1) Inflow Performance (IPR): As water cut increases, fluid density increases (water hydrostatic gradient 0.433 psi/ft vs oil 0.35 psi/ft), increasing total fluid hydrostatic head. I model the composite IPR for each well at 85% water cut. 2) Outflow Curves (VLP): For ESPs, higher water cut increases liquid density and head requirements, meaning current ESP pumps will operate to the left of their recommended operating range, risking motor overheating or downthrust wear unless upsized. For Gas Lift, gas injection lightens the heavy water column, reducing bottomhole flowing pressure and shifting the VLP curve downward to maximize inflow drawdown. 3) Facility & Economic Constraints: If the platform already has high-pressure separator gas and a reliable compressor train, Gas Lift is the superior long-term choice because it has zero downhole rotating parts and can handle sandy flowback without costly workover interventions. If gas is scarce or pipeline pressure is low, I recommend upgrading to high-capacity variable-speed ESPs with tungsten carbide bearings.",
      conceptCheck: "Synthesize fluid density impact on VLP, artificial lift mechanical limits, platform gas infrastructure, and workover costs."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Rehearse this drilling and production drill: practice calculating KMW, ICP, and FCP from memory, and sketch a complete Nodal Analysis graph showing IPR, VLP, and artificial lift shift."
    },
    checklist: [
      { id: "d88-c1", text: "Mastered kick detection indicators and hard shut-in protocol", completed: false },
      { id: "d88-c2", text: "Calculated Kill Mud Weight (11.5 ppg), ICP, and FCP", completed: false },
      { id: "d88-c3", text: "Compared Driller's Method vs Wait & Weight casing shoe risks", completed: false },
      { id: "d88-c4", text: "Evaluated ESP vs Gas Lift vs Rod Pump engineering trade-offs", completed: false },
      { id: "d88-c5", text: "Mastered Nodal Analysis IPR-VLP operating point optimization", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 89
  {
    dayNumber: 89,
    phaseId: 3,
    weekNumber: 12,
    title: "Behavioral & HR Interview Mastery: The Upstream STAR Method",
    category: "interview_bootcamp",
    categoryLabel: "Interview Bootcamp",
    todayGoal: "Master behavioral and HR interviews: answer using the STAR framework, handle the 1-year experience question, articulate your MIT Pune background, and master salary negotiation.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Even candidates with brilliant technical knowledge get rejected if they stumble in behavioral and HR interview rounds. Upstream energy companies operate in safety-critical, high-stakes environments where teamwork, communication under pressure, ethical integrity, and proactive ownership are paramount. Today, you master the STAR framework (Situation, Task, Action, Result) for petroleum behavioral questions, prepare compelling answers to common HR traps ('Why are you leaving your current job?', 'You only have 1 year of experience'), and learn upstream salary negotiation tactics.",
      keyPoints: [
        "The Upstream STAR Method: 1) Situation (Set the operational context in 2 sentences); 2) Task (State the engineering challenge); 3) Action (Detail your specific engineering actions—data cleaning, modeling, diagnostic plots, team collaboration); 4) Result (State the quantitative business impact—BOPD gained, dollars saved, hours eliminated, safety risk mitigated).",
        "The '1-Year Experience' Question: Reframe tenure into velocity: 'While my tenure is one year, my engineering density is equivalent to three years. Beyond routine duties, I took ownership of our data systems, built automated Python decline curve algorithms across 15 wells, and evaluated complex North Sea wireline logs. I deliver the output of a 3-year engineer on day one.'",
        "The 'Why Are You Leaving?' Question: Never speak negatively about your current employer! Answer: 'I am extremely grateful for the foundational operational experience at my current company. However, I have developed advanced competencies in production optimization, decline curve analysis, and digital reservoir analytics, and I am ready to step into a higher-impact role where I can apply these skills directly to major brownfield and greenfield assets.'",
        "HSE & Safety Culture Questions: Upstream operators prioritize 'Stop Work Authority'. Prepare a real story where you identified a safety hazard (e.g. pressure gauge zero drift, corroded flare line, or unchocked chemical tote) and proactively intervened before an incident occurred.",
        "Salary Negotiation Strategy: Never give a single rigid salary number first! Anchor high using market benchmarks: 'Based on my research for Petroleum Engineers with strong subsurface and data automation skills in this region, the typical range is [Range, e.g. $80k–$95k or INR 14–18 LPA]. I am primarily focused on the right technical fit and long-term career growth, and I am confident we can agree on a mutually fair package.'"
      ],
      coreFormulas: [
        {
          name: "STAR Behavioral Structure",
          formula: "STAR = Situation (15%) + Task (15%) + Action (50%) + Quantified_Result (20%)",
          explanation: "Optimal time allocation during behavioral interview responses."
        }
      ],
      fieldInsight: "When asked: 'Do you have any questions for us?' at the end of an interview, NEVER say 'No, you covered everything'! Ask two high-level engineering questions: 1) 'What are the primary operational bottlenecks facing your reservoir surveillance team over the next 12 months?' 2) 'How is your department integrating digital workflows and Python into traditional Petrel/Prosper surveillance?' This proves you are already thinking like a member of their team."
    },
    watchOrRead: {
      type: "read",
      title: "MIT Career Advising: Master the Behavioral Interview Using the STAR Framework",
      url: "https://capd.mit.edu",
      platform: "MIT Career Services",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d89-q1",
          question: "In the STAR interview methodology, which component should consume the largest portion (approximately 50%) of your answer time?",
          options: [
            "Action (detailing the specific engineering analyses, calculations, and operational steps you personally executed)",
            "Situation (talking about the weather and company history)",
            "Complaining about your previous boss",
            "Listing every software tool ever invented"
          ],
          correctOptionIndex: 0,
          explanation: "Interviewers want to understand your personal technical problem-solving actions; Action should be the centerpiece of every story.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q2",
          question: "How should you answer the HR question: 'Why are you looking to leave your current company after only 1 year?'",
          options: [
            "Express genuine gratitude for the foundational field experience gained, and articulate that you have developed advanced skills in production optimization and analytics that you are eager to deploy in a higher-impact role",
            "Complain that the salary is terrible and the manager is unfair",
            "State that you were bored and did no work",
            "Say that you don't know"
          ],
          correctOptionIndex: 0,
          explanation: "Positive, growth-oriented framing projects professional maturity and ambition without burning bridges.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q3",
          question: "When an interviewer asks: 'Tell me about a time you had a disagreement with a senior engineer', what is the ideal response structure?",
          options: [
            "Describe a technical difference of opinion, explain how you gathered data and objective calculations (e.g. DCA decline rates or well test plots) to facilitate a constructive discussion, and describe the collaborative outcome",
            "Explain how you proved the senior engineer was completely wrong and humiliated them",
            "Say you have never disagreed with anyone in your life",
            "Refuse to answer"
          ],
          correctOptionIndex: 0,
          explanation: "Focus on data-driven, respectful problem solving and collaborative consensus.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q4",
          question: "In the oil and gas industry, what does 'Stop Work Authority' (SWA) mean, and why do interviewers test you on it?",
          options: [
            "The universal responsibility and legal obligation of ANY employee or contractor—regardless of rank—to halt operations immediately if an unsafe condition or hazard is observed",
            "The authority of the CEO only",
            "A union strike protocol",
            "Stopping work when it rains"
          ],
          correctOptionIndex: 0,
          explanation: "SWA is the sacred cornerstone of upstream safety culture; proving you have the courage to stop work to protect lives is vital.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q5",
          question: "How should you answer: 'What is your greatest technical weakness?'",
          options: [
            "Mention an advanced, specialized domain (such as geomechanical hydraulic fracture modeling or 3D compositional PVT simulation) where you have foundational knowledge and describe active steps you are taking to deepen your expertise",
            "Say 'I am a perfectionist and work too hard'",
            "Say 'I don't know anything about petroleum engineering'",
            "Say 'I have no weaknesses whatsoever'"
          ],
          correctOptionIndex: 0,
          explanation: "Choosing an advanced specialization and demonstrating proactive self-study proves self-awareness and continuous learning.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q6",
          question: "What is the best tactical response when an HR recruiter asks: 'What is your current salary, and what are your salary expectations?'",
          options: [
            "Provide a researched, competitive market range based on the role and industry standards, and emphasize that you are focused on total compensation and technical fit",
            "Give a single rigid number and refuse to negotiate",
            "Say you will work for free",
            "Demand triple what the company pays"
          ],
          correctOptionIndex: 0,
          explanation: "Giving a researched market range anchors negotiations favorably while maintaining collaborative flexibility.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q7",
          question: "Why should you prepare 2 to 3 insightful questions to ask the interviewer at the end of the meeting?",
          options: [
            "It demonstrates intellectual curiosity, commercial awareness, and proves you are actively evaluating the role as a serious peer",
            "To waste the interviewer's time",
            "To prove you know more than them",
            "It is required by law"
          ],
          correctOptionIndex: 0,
          explanation: "High-caliber questions leave a lasting impression of professionalism and strategic thinking.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q8",
          question: "When discussing your MIT Pune educational background, what aspect should you emphasize?",
          options: [
            "The rigorous subsurface engineering curriculum, active SPE student chapter participation, hands-on lab work in drilling fluids and rock mechanics, and strong industry alumni network",
            "Only the college festival",
            "The distance from your house",
            "That you forgot most of your classes"
          ],
          correctOptionIndex: 0,
          explanation: "Emphasize the practical rigor, lab experience, and technical curriculum of MIT Pune's petroleum program.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q9",
          question: "What should you do within 12 to 24 hours following any job interview?",
          options: [
            "Send a personalized thank-you email referencing a specific technical discussion from the interview and reiterating your enthusiasm for the role",
            "Call the interviewer at home",
            "Post on social media complaining about the questions",
            "Do nothing and wait"
          ],
          correctOptionIndex: 0,
          explanation: "A prompt, thoughtful thank-you note reinforces your communication skills and keeps your candidacy top of mind.",
          topic: "Interview Bootcamp"
        },
        {
          id: "d89-q10",
          question: "What is the single most important mental mindset during behavioral interviews?",
          options: [
            "Poised confidence: you are an engineering problem solver with verified proof-of-ability projects on GitHub, having an peer-to-peer technical conversation",
            "Desperation and pleading for a job",
            "Arrogance and dismissiveness",
            "Fear and anxiety"
          ],
          correctOptionIndex: 0,
          explanation: "Viewing the interview as a collaborative peer conversation transforms anxiety into professional authority.",
          topic: "Interview Bootcamp"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You evaluate two competing job offers secured through your Phase 3 application and interview campaign:\n- Offer A (Domestic Major Operator, e.g. Cairn / Reliance Upstream):\n  * Base Salary = INR 14,00,000 / year ($17,000 USD)\n  * Annual Performance Bonus target = 15.0% of base\n  * Field Location Allowance = INR 2,50,000 / year\n  * Retirement & Benefits = INR 1,50,000 / year\n- Offer B (International Service Company Digital Hub, e.g. SLB Pune):\n  * Base Salary = INR 16,00,000 / year ($19,500 USD)\n  * Annual Performance Bonus target = 10.0% of base\n  * Signing Bonus (Year 1 only) = INR 2,00,000\n  * Retirement & Benefits = INR 1,20,000 / year\nCalculate: 1) Total Year 1 Compensation for Offer A, 2) Total Year 1 Compensation for Offer B, 3) Percentage compensation difference in Year 1, and 4) If your current fresher salary was INR 6,00,000, what is the percentage salary increase achieved with Offer B?",
      givenValues: [
        { label: "Offer A Base", value: "INR 14,00,000 + 15% bonus + 2.5L allowance + 1.5L benefits" },
        { label: "Offer B Base", value: "INR 16,00,000 + 10% bonus + 2.0L sign-on + 1.2L benefits" },
        { label: "Current Salary", value: "INR 6,00,000" }
      ],
      stepByStepSolution: [
        "Step 1: Offer A Total Comp:\nBase = 14,00,000\nBonus = 14,00,000 * 0.15 = 2,10,000\nAllowance = 2,50,000\nBenefits = 1,50,000\nTotal Year 1 Offer A = 14,00,000 + 2,10,000 + 2,50,000 + 1,50,000 = INR 20,10,000 (~20.1 LPA).",
        "Step 2: Offer B Total Comp:\nBase = 16,00,000\nBonus = 16,00,000 * 0.10 = 1,60,000\nSign-on = 2,00,000\nBenefits = 1,20,000\nTotal Year 1 Offer B = 16,00,000 + 1,60,000 + 2,00,000 + 1,20,000 = INR 20,80,000 (~20.8 LPA).",
        "Step 3: Comp Difference = [(20,80,000 - 20,10,000) / 20,10,000] * 100 = +3.48% (Offer B is slightly higher in Year 1).",
        "Step 4: Increase Over Current Fresher Salary:\nPercentage Increase = [(20,80,000 - 6,00,000) / 6,00,000] * 100 = (14,80,000 / 6,00,000) * 100 = +246.67% increase! (Nearly 3.5x your current income!)."
      ],
      finalAnswer: "Offer A = INR 20.10 LPA | Offer B = INR 20.80 LPA | Comp Difference = +3.5% | Increase Over Current = +246.7% (3.5x current salary)",
      engineeringSignificance: "Securing competing offers gives you supreme negotiating leverage and transforms your financial trajectory from a 6 LPA fresher into a 20+ LPA upstream professional (+246% increase), proving that the 90-day investment pays massive lifelong dividends."
    },
    interview: {
      durationMinutes: 15,
      question: "Give me an example of a time when you identified a significant operational hazard and exercised Stop Work Authority.",
      sampleAnswer: "I answer using the STAR method: 'During wellsite operations, our team was preparing to pressure-test an artificial lift surface flowline manifold to 3,000 psi following a choke valve replacement. While reviewing the lineup, I noticed that the digital pressure recorder on the test truck was reading 45 psi while open to atmospheric pressure—a clear zero-drift calibration error. A junior technician was about to start the high-pressure triplex pump regardless, assuming the drift was minor. I exercised Stop Work Authority immediately, halted the pressure test, and notified the rig supervisor. We inspected the transducer and found a clogged bleed-off port full of pipe dope that was masking true manifold pressure. Had we proceeded, the actual hydraulic pressure inside the manifold would have exceeded the 3,000 psi flange rating by over 400 psi, risking a catastrophic high-pressure line rupture. We replaced the transducer, verified calibration, and completed the test safely. The operations superintendent praised our proactive intervention during the safety debrief.'",
      conceptCheck: "Deliver a structured safety story: Danger recognized -> SWA exercised -> Root cause identified -> Safe completion."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write out bullet points for your 5 core STAR interview stories: 1) Challenging technical problem solved (Project 1 or 2), 2) Disagreement with a colleague, 3) Exercising Stop Work Authority, 4) Working under high pressure, 5) Explaining your 1-year tenure."
    },
    checklist: [
      { id: "d89-c1", text: "Mastered the Upstream STAR storytelling framework", completed: false },
      { id: "d89-c2", text: "Rehearsed the '1-Year Experience' tenure-to-velocity reframe", completed: false },
      { id: "d89-c3", text: "Prepared authentic Stop Work Authority (SWA) safety story", completed: false },
      { id: "d89-c4", text: "Formulated upstream salary negotiation strategy and market ranges", completed: false },
      { id: "d89-c5", text: "Drafted 3 high-impact questions to ask interviewers at the conclusion", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 90
  {
    dayNumber: 90,
    phaseId: 3,
    weekNumber: 12,
    title: "Day 90 Capstone: Final Assessment & Your Next 30 Days Action Plan",
    category: "capstone",
    categoryLabel: "Capstone Assessment",
    todayGoal: "Score 85%+ on the comprehensive 15-question Day 90 Final Assessment, celebrate your 90-day transformation, and activate your 'Next 30 Days' post-bootcamp daily action plan.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "YOU HAVE MADE IT TO DAY 90! Look back at where you started 90 days ago: a junior engineer with forgotten college fundamentals, feeling stuck in a fresher-level role. Today, you stand transformed: you have rebuilt rock-solid technical fundamentals across PVT, Reservoir, Drilling, and Completions; mastered practical Petrophysics, Well Testing, Production Analytics, and Python; published TWO world-class proof-of-ability projects on GitHub; revamped your resume and LinkedIn into recruiter magnets; and drilled every technical and behavioral interview question. Today, you complete your final comprehensive assessment and receive your structured 'Next 30 Days' daily execution plan to cross the finish line and sign your dream job offer.",
      keyPoints: [
        "The 90-Day Transformation Audit: 90 days completed, 900 technical practice questions mastered, 90 engineering calculations solved, 2 flagship GitHub projects published, 2 tailored resume versions ready, and zero knowledge gaps remaining in your Revision Queue.",
        "The Day 90 Final Comprehensive Assessment: 15 multi-disciplinary questions spanning the entire 90-day curriculum: PVT, Vogel IPR, Darcy, KMW, Well Control, Completions, Wireline Logs, Horner PTA, Arps DCA, Python, and Upstream Economics.",
        "The 'Next 30 Days' Post-Bootcamp Battle Plan: Day 91 to 120 is pure execution: 1) Apply to 6 to 8 targeted roles every single morning (Power Hour); 2) Send 5 to 10 personalized LinkedIn messages daily to MIT Pune alumni and engineering managers; 3) Conduct 2 to 3 informational coffee chats weekly; 4) Maintain interview readiness by drilling the Interview Bootcamp questions twice a week; 5) Track every stage in your Job Tracker until you hold competing offers.",
        "Your Professional Identity: You are no longer just a fresher. You are a modern, data-empowered Petroleum Engineer with verified proof of competence. Walk into every interview room with the confidence of an engineer who has earned their seat at the table."
      ],
      coreFormulas: [
        {
          name: "The 90-Day Mastery Equation",
          formula: "Competence = Rebuilt_Fundamentals + Practical_Analytics + Verifiable_Proof_Projects + Relentless_Outreach",
          explanation: "The formula that guarantees your transition to a top-tier petroleum engineering career."
        }
      ],
      fieldInsight: "The biggest mistake candidates make after finishing a 90-day program is stopping their daily momentum! Do not pause to 'wait and see'. Continue the daily Power Hour: 6 applications every morning, 5 networking messages, and technical review. Consistency over the next 3 weeks will deliver the job offer you have worked so hard to achieve."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-205934: Lifelong Learning and Career Acceleration for the Next Generation of Energy Leaders",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 85,
      questions: [
        {
          id: "d90-q1",
          question: "An oil reservoir is producing under solution gas drive. When reservoir pressure drops below bubble point (Pb), what happens to oil formation volume factor (Bo) and dissolved gas-oil ratio (Rs)?",
          options: [
            "Both Bo and Rs decrease because gas flashes out of the liquid phase, causing the remaining liquid oil to shrink",
            "Both Bo and Rs increase to infinity",
            "Bo increases while Rs drops to zero",
            "Neither parameter changes"
          ],
          correctOptionIndex: 0,
          explanation: "Below bubble point, gas liberated from solution reduces solution GOR (Rs) and causes oil shrinkage, decreasing Bo.",
          topic: "PVT Properties"
        },
        {
          id: "d90-q2",
          question: "Using Vogel's equation, if a well's average reservoir pressure is Pr = 3,000 psi and maximum theoretical open-flow potential is q_max = 1,000 STB/d, what is the flow rate at bottomhole pressure Pwf = 1,500 psi (Pwf / Pr = 0.5)?",
          options: [
            "700 STB/d",
            "500 STB/d",
            "900 STB/d",
            "300 STB/d"
          ],
          correctOptionIndex: 0,
          explanation: "q = q_max * [1 - 0.2*(0.5) - 0.8*(0.5)^2] = 1,000 * [1 - 0.10 - 0.20] = 1,000 * 0.70 = 700 STB/d.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d90-q3",
          question: "A well takes a kick at 10,000 ft TVD with 10.0 ppg mud in the hole. Shut-In Drill Pipe Pressure is SIDPP = 520 psi. What is the required Kill Mud Weight (KMW)?",
          options: [
            "11.0 ppg",
            "10.5 ppg",
            "12.5 ppg",
            "15.0 ppg"
          ],
          correctOptionIndex: 0,
          explanation: "KMW = 10.0 + 520 / (0.052 * 10,000) = 10.0 + 520 / 520 = 10.0 + 1.0 = 11.0 ppg.",
          topic: "Well Control"
        },
        {
          id: "d90-q4",
          question: "In Archie's equation, if formation water resistivity Rw = 0.05 ohm-m, effective porosity phi = 0.20, cementation exponent m = 2.0, saturation exponent n = 2.0, and true formation resistivity Rt = 25.0 ohm-m, what is the water saturation Sw?",
          options: [
            "Sw = 22.36%",
            "Sw = 50.00%",
            "Sw = 10.00%",
            "Sw = 80.00%"
          ],
          correctOptionIndex: 0,
          explanation: "phi^2 = 0.04. Ro = 0.05 / 0.04 = 1.25 ohm-m. Sw = sqrt(Ro / Rt) = sqrt(1.25 / 25.0) = sqrt(0.05) = 0.2236 = 22.36%.",
          topic: "Well Logging"
        },
        {
          id: "d90-q5",
          question: "On a Bourdet pressure transient derivative plot, an upward-sloping derivative curve with slope = 0.5 at late time indicates which reservoir boundary?",
          options: [
            "Parallel sealing faults (channel reservoir boundary flow)",
            "Constant pressure aquifer support",
            "Infinite radial flow",
            "Wellbore storage"
          ],
          correctOptionIndex: 0,
          explanation: "Parallel sealing boundaries restrict radial flow to linear flow along the channel axis, creating a half-slope late-time derivative.",
          topic: "Well Testing"
        },
        {
          id: "d90-q6",
          question: "An oil well declines exponentially with initial rate qi = 600 STB/d and nominal decline D = 0.20 / year. If the economic limit is 20 STB/d, what is the Estimated Ultimate Recovery (EUR)? (Assume 365 days/yr, D_daily = 0.20 / 365 = 0.0005479 /day).",
          options: [
            "1,058,587 STB",
            "600,000 STB",
            "2,500,000 STB",
            "350,000 STB"
          ],
          correctOptionIndex: 0,
          explanation: "EUR = (qi - q_econ) / D_daily = (600 - 20) / 0.0005479 = 580 / 0.0005479 = 1,058,587 STB.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d90-q7",
          question: "On a Chan diagnostic plot (log-log plot of WOR and d(WOR)/dt vs time), what signature characterizes bottom-water coning under dynamic equilibrium?",
          options: [
            "An initial rapid increase in WOR followed by a distinct flattening or plateau in the WOR' derivative",
            "A vertical spike with slope > 4",
            "A negative derivative",
            "A straight horizontal line at zero"
          ],
          correctOptionIndex: 0,
          explanation: "Coning reaches dynamic steady-state shape as hydrodynamic forces balance, causing the time derivative WOR' to flatten into a plateau.",
          topic: "Production Analytics"
        },
        {
          id: "d90-q8",
          question: "Which Python function in `scipy.optimize` is the standard tool for non-linear regression fitting of Arps decline parameters (qi, Di, b)?",
          options: [
            "curve_fit",
            "linear_regression",
            "fft",
            "kmeans"
          ],
          correctOptionIndex: 0,
          explanation: "`scipy.optimize.curve_fit` utilizes non-linear least squares to optimize custom parametric equations like Arps.",
          topic: "Python for Petroleum"
        },
        {
          id: "d90-q9",
          question: "What is the primary operational cause of sudden rod-string parted failures in high-water-cut wells producing dissolved CO2?",
          options: [
            "Corrosion-fatigue: cyclic mechanical tension loading combined with carbonic acid pitting creating stress-concentration cracks",
            "Extreme high temperature",
            "Low water cut",
            "Excessive paraffin wax"
          ],
          correctOptionIndex: 0,
          explanation: "Cyclic tension fatigue combined with CO2 (carbonic acid) pitting initiates microscopic notches where sucker rods part prematurely.",
          topic: "Artificial Lift"
        },
        {
          id: "d90-q10",
          question: "How is Mean Time Between Failures (MTBF) calculated for an artificial lift fleet?",
          options: [
            "Total cumulative operating well-days of all installed units divided by the total number of failures observed in that period",
            "Average age of only the failed units",
            "365 divided by the number of wells",
            "Depth divided by pump speed"
          ],
          correctOptionIndex: 0,
          explanation: "MTBF = Total Operating Well-Days / Number of Failures, accounting for all running (censored) systems.",
          topic: "Production Analytics"
        },
        {
          id: "d90-q11",
          question: "What is the economic payback period for a workover project costing $150,000 that generates an incremental 200 BOPD at a net oil margin of $50/bbl ($10,000/day)?",
          options: [
            "15.0 days",
            "150 days",
            "1.5 years",
            "30 days"
          ],
          correctOptionIndex: 0,
          explanation: "Payback = $150,000 / $10,000/day = 15.0 days.",
          topic: "Production Engineering"
        },
        {
          id: "d90-q12",
          question: "In Python Pandas, what is the fastest way to compute water saturation across 100,000 well log depth rows without using slow Python `for` loops?",
          options: [
            "Vectorized NumPy/Pandas array expressions: `df['Sw'] = np.clip(((a * Rw) / (df['phi']**m * df['RT']))**(1/n), 0, 1)`",
            "Writing a Python `for` loop row-by-row",
            "Exporting to text file",
            "Re-typing in Excel"
          ],
          correctOptionIndex: 0,
          explanation: "Vectorized array operations execute in compiled C memory, completing in milliseconds.",
          topic: "Python for Petroleum"
        },
        {
          id: "d90-q13",
          question: "What does an unexpected surge in Gas-Oil Ratio (GOR) accompanied by declining flowing bottomhole pressure indicate during field surveillance?",
          options: [
            "Reservoir pressure has dropped below bubble point (releasing mobile solution gas) or secondary gas cap coning is occurring",
            "The well has turned into a water injector",
            "The casing collapsed",
            "Paraffin wax has plugged the tubing"
          ],
          correctOptionIndex: 0,
          explanation: "Pressure dropping below Pb causes solution gas to break out, surging GOR and causing artificial lift inefficiency.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d90-q14",
          question: "Which of the following describes the Wait & Weight well control method?",
          options: [
            "A 1-circulation method where the well is shut in until kill mud is weighted up, then kill mud is pumped down drill pipe while circulating the kick out simultaneously",
            "A 2-circulation method where the kick is circulated out with original mud first",
            "A method where you wait 24 hours without pumping",
            "A method used only in dry gas wells"
          ],
          correctOptionIndex: 0,
          explanation: "Wait & Weight is the 1-circulation method that minimizes maximum casing shoe pressures by placing heavy mud downhole immediately.",
          topic: "Well Control"
        },
        {
          id: "d90-q15",
          question: "What is your daily operational plan for Days 91 to 120 following completion of this program?",
          options: [
            "Maintain the daily morning Power Hour: submit 6 to 8 tailored applications, send 5 to 10 personalized outreach messages, track all stages in the Job Tracker, and drill interview questions weekly until multiple offers are signed",
            "Stop applying and wait for recruiters to call",
            "Delete all project files",
            "Take a 6-month break"
          ],
          correctOptionIndex: 0,
          explanation: "Sustained execution over the next 30 days is the final bridge between portfolio preparation and signing your dream job offer.",
          topic: "Career Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "As your final 90-day calculation, calculate the Lifetime Career ROI of this 90-day transformation:\n- Total daily time invested across 90 days = 90 days * 125 minutes = 11,250 minutes = 187.5 hours\n- Initial baseline junior/fresher salary = INR 6,00,000 / year ($7,300 USD)\n- Target new petroleum engineering salary = INR 18,00,000 / year ($22,000 USD)\n- Annualized salary uplift = INR 12,00,000 / year ($14,700 USD/year)\n- Career horizon over next 10 years (assuming conservative 8% annual career growth)\nCalculate: 1) Initial salary increase in Year 1 alone (INR and %), 2) Return earned per hour of study invested in Year 1 (INR/hour), 3) Cumulative 10-year career earnings increase without compounding (10 * Annual Uplift), and 4) If cumulative 10-year earnings increase with 8% compound career growth totals INR 1,73,80,000 (~1.74 Crore / $212,000 USD), what is the 10-year return per hour of study invested in this 90-day mission?",
      givenValues: [
        { label: "Study Hours Invested", value: "187.5 hours (90 days)" },
        { label: "Baseline Salary", value: "INR 6,00,000 / year" },
        { label: "Target New Salary", value: "INR 18,00,000 / year" },
        { label: "Annual Uplift", value: "INR 12,00,000 / year" },
        { label: "10-Year Compounded Uplift", value: "INR 1,73,80,000" }
      ],
      stepByStepSolution: [
        "Step 1: Year 1 Salary Increase = INR 18,00,000 - INR 6,00,000 = INR 12,00,000 / year.\nPercentage Increase = (12,00,000 / 6,00,000) * 100 = +200.0% increase (3x salary!).",
        "Step 2: Return per Hour of Study in Year 1:\nReturn = INR 12,00,000 / 187.5 hours = INR 6,400 per hour invested! (~$78 / hour).",
        "Step 3: Cumulative 10-Year Simple Uplift = 10 * 12,00,000 = INR 1,20,00,000 (1.20 Crore).",
        "Step 4: 10-Year Compounded Return per Hour of Study:\n10-Year Return = INR 1,73,80,000 / 187.5 hours = INR 92,693 per hour of study! (~$1,130 USD / hour).",
        "Conclusion: Every single hour of the 187.5 hours you dedicated to this 90-day program is worth over INR 92,000 ($1,130) in long-term career wealth."
      ],
      finalAnswer: "Year 1 Uplift = +INR 12 LPA (+200%) | Year 1 Return = INR 6,400/hr | 10-Yr Compounded Value = INR 1.74 Crore ($212k) | 10-Yr Return = INR 92,693/hr ($1,130/hr)",
      engineeringSignificance: "There is no financial investment on Earth—not stocks, real estate, or crypto—that pays INR 92,000 ($1,130) per hour of focused effort with zero capital risk. You have invested in your own subsurface engineering human capital, and the return compounds for the rest of your life."
    },
    interview: {
      durationMinutes: 15,
      question: "Looking back at the entire 90-day journey, what has been your greatest technical and professional takeaway?",
      sampleAnswer: "My greatest takeaway is that true engineering excellence occurs at the intersection of classical domain physics and modern data automation. Ninety days ago, I had theoretical college knowledge that had grown rusty during routine junior field work. Through this rigorous 90-day mission, I did not just re-memorize equations—I applied them to real subsurface challenges. I proved that when you combine rock-fluid PVT physics and Horner transient analysis with automated Python decline curves and digital well log petrophysics, you can unlock millions of dollars in deferred production and certified reserves. Today, I walk into any operating asset not as an inexperienced fresher hoping for instructions, but as a confident, proactive petroleum engineer equipped to identify bottlenecks, optimize artificial lift, quantify reserves, and deliver immediate economic impact.",
      conceptCheck: "Deliver an authoritative, inspiring summary of your transformation from passive fresher to proactive engineering leader."
    },
    career: {
      durationMinutes: 20,
      actionItem: "CONGRATULATIONS ON GRADUATING DAY 90! Download your completion certificate, review your 100% completed Roadmap, and print your 'Next 30 Days' Daily Execution Plan to sign your dream petroleum engineering job offer."
    },
    checklist: [
      { id: "d90-c1", text: "Scored 85%+ on the comprehensive Day 90 Final Technical Assessment", completed: false },
      { id: "d90-c2", text: "Audited the 90-day transformation: 900 questions, 90 calculations, 2 projects", completed: false },
      { id: "d90-c3", text: "Calculated Lifetime Career ROI (INR 92,000 / $1,130 per hour invested)", completed: false },
      { id: "d90-c4", text: "Activated the 'Next 30 Days' post-bootcamp daily application battle plan", completed: false },
      { id: "d90-c5", text: "Graduated with full technical authority ready to secure your target role!", completed: false }
    ],
    confidenceRating: 0
  }
];
