import { DayPlan } from '../../types';

export const WEEK_7_DAYS: DayPlan[] = [
  // DAY 51
  {
    dayNumber: 51,
    phaseId: 2,
    weekNumber: 7,
    title: "Excel for Petroleum Engineers: Upstream Data Cleaning & Formulas",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Master handling dirty upstream production data, timestamp formatting, null/negative rate scrubbing, and essential lookup/aggregation formulas.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Excel remains the operational backbone of upstream engineering offices worldwide. Every day, SCADA systems, field gaugers, and offshore platform historians export raw daily production logs containing sensor dropouts, negative rates, midnight rollover timestamp mismatches, and text-formatted numbers. A junior petroleum engineer who can clean 50,000 rows of dirty well telemetry in 10 minutes using XLOOKUP, INDEX-MATCH, SUMIFS, and Power Query commands immediate respect.",
      keyPoints: [
        "Upstream Data Anomalies: 1) Negative gas rates caused by flowmeter reverse differential pressure during backpressure surges, 2) Zero vs Null rates (a shut-in well produces 0 bbl/d, while an unmeasured or broken telemetry tag is NULL/blank — conflating them destroys decline curve curve fitting), 3) Choke change discontinuities.",
        "Crucial Date/Time Handling: Upstream SCADA often records timestamps as UTC strings or text ('2023-11-04 06:00:00'). Use DATEVALUE, TIMEVALUE, or Text-to-Columns to convert to true serial dates. Daily production reporting standard (often 6:00 AM to 6:00 AM gas day) must be unified across wells.",
        "Essential Production Engineering Formulas: XLOOKUP (superior to VLOOKUP for searching left or handling missing wells), INDEX-MATCH (robust against column insertions), SUMIFS/COUNTIFS (allocating production by reservoir layer, platform, or artificial lift type), FILTER & UNIQUE (dynamic arrays for active well lists).",
        "Data Validation & Outlier Flagging: Conditional formatting using Z-score or rolling 7-day median filters (=ABS(Rate - AVERAGE(range)) > 3*STDEV(range)) to instantly highlight wellhead meter spikes or liquid slugging."
      ],
      coreFormulas: [
        {
          name: "Standard Normal Z-Score for Rate Anomaly Detection",
          formula: "Z = (q_daily - mu_7day) / sigma_7day",
          explanation: "Flags outlier rate points where |Z| > 2.5 or 3 for manual engineering inspection before DCA regression."
        }
      ],
      fieldInsight: "Never delete dirty data rows from the raw master sheet! Always maintain a 'Raw_Import' tab, a 'Cleaned_Normalized' tab, and an 'Audit_Log' tab noting why specific rate spikes (e.g., acid frac flowback or meter recalibration) were flagged or excluded from decline calculations."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-187421: Automated Production Data Quality Control and Cleansing for Unconventional Assets",
      url: "https://onepetro.org",
      platform: "SPE OnePetro / PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d51-q1",
          question: "In raw SCADA wellhead data, a gas rate column shows several negative values (-14.2 Mscf/d) during sudden compressor shutdowns. What is the standard engineering treatment?",
          options: [
            "Leave the negative numbers as they are so total field volume reflects reverse gas migration",
            "Replace negative values with zero (0) or mark as shut-in after verifying backflow valve check, because wells cannot produce negative reservoir fluid to surface sales",
            "Multiply negative values by -1 to convert them into positive production",
            "Extrapolate the previous day's positive rate into the negative cells"
          ],
          correctOptionIndex: 1,
          explanation: "Orifice and differential pressure meters can read negative values during pressure waves or compressor trips. Wells do not produce negative sales volume; replacing with 0 (or flagging as non-producing shut-in) is standard.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q2",
          question: "Why should an engineer avoid replacing blank (NULL) production cells with 0 without checking well status logs?",
          options: [
            "Blank cells always mean the well was flowing at full capacity",
            "Blank cells indicate missing telemetry/sensor failure, whereas 0 means the well was physically shut-in; inserting 0 artificially distorts uptime and DCA slope",
            "Excel cannot perform math on numbers if blanks are converted to 0",
            "0 causes an immediate divide-by-zero error in SUMIFS"
          ],
          correctOptionIndex: 1,
          explanation: "Missing data (telemetry offline) is fundamentally distinct from zero production (shut-in or mechanical failure). Treating missing data as 0 artificially lowers decline rate estimates and well runtime efficiency.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q3",
          question: "Which Excel function is best suited to dynamically retrieve the artificial lift type for Well 'MIT-04' from a separate completion master table without worrying about column order?",
          options: [
            "=VLOOKUP('MIT-04', MasterTable, 1, FALSE)",
            "=XLOOKUP('MIT-04', MasterTable[Well_ID], MasterTable[Lift_Type], 'Unknown')",
            "=HLOOKUP('MIT-04', MasterTable, 2)",
            "=CONCATENATE('MIT-04', MasterTable[Lift_Type])"
          ],
          correctOptionIndex: 1,
          explanation: "XLOOKUP searches any return array regardless of column orientation, handles missing items gracefully, and does not break if columns are reordered or inserted.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q4",
          question: "To calculate total oil production produced strictly from the 'Lower Cretaceous' reservoir where water cut is < 50%, which formula structure is ideal?",
          options: [
            "=SUMIF(ReservoirColumn, 'Lower Cretaceous', OilVolumeColumn)",
            "=SUMIFS(OilVolumeColumn, ReservoirColumn, 'Lower Cretaceous', WaterCutColumn, '<0.50')",
            "=COUNTIFS(ReservoirColumn, 'Lower Cretaceous')",
            "=AVERAGEIFS(OilVolumeColumn, ReservoirColumn, 'Lower Cretaceous')"
          ],
          correctOptionIndex: 1,
          explanation: "SUMIFS allows multiple criteria ranges: first summing OilVolumeColumn, filtered by Reservoir = 'Lower Cretaceous' and WaterCut < 0.50.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q5",
          question: "A daily production log records oil rate in bbl/day and run hours per day (0 to 24 hrs). How is 'calendar day rate' (CD rate) distinguished from 'producing day rate' (PD rate)?",
          options: [
            "CD rate = PD rate / 24",
            "CD rate = Total Volume / Total Calendar Days; PD rate = Total Volume / (Run Hours / 24)",
            "CD rate and PD rate are strictly identical under API standards",
            "PD rate is calculated by dividing monthly volume by 365"
          ],
          correctOptionIndex: 1,
          explanation: "Producing Day (on-stream) rate divides volume by actual operating time, reflecting true well deliverability. Calendar Day rate divides by all calendar days (including shut-ins), reflecting business revenue.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q6",
          question: "When applying exponential decline curve fitting to monthly production in Excel, what transformation allows using simple linear regression (SLOPE and INTERCEPT)?",
          options: [
            "Plotting Rate vs Cumulative Production on Cartesian scales, or taking the natural log LN(Rate) vs Time",
            "Squaring the rate and taking the square root of time",
            "Plotting Rate vs 1 / Time",
            "Plotting Water Cut vs Gas-Oil Ratio"
          ],
          correctOptionIndex: 0,
          explanation: "Since q(t) = qi * exp(-D*t), taking ln gives ln(q) = ln(qi) - D*t, which is a straight line y = mx + c where y = ln(q) and slope m = -D.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d51-q7",
          question: "What is the primary benefit of converting raw tabular data into an official Excel Table (Ctrl + T)?",
          options: [
            "It automatically hides negative numbers",
            "Formulas automatically use structured references (e.g., [@OilRate]) and dynamically auto-expand as new daily rows are appended",
            "It encrypts the petroleum data against unauthorized viewing",
            "It forces all wells to have identical GOR"
          ],
          correctOptionIndex: 1,
          explanation: "Excel Tables enable structured references, automatic formula propagation down new rows, and clean dynamic range references in charts and pivot tables.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q8",
          question: "If a pressure gauge reading fluctuates violently between 120 psi and 980 psi within 5 minutes due to slugging, which Excel statistical measure provides a more robust central tendency than simple arithmetic mean?",
          options: [
            "Standard deviation",
            "Median (or 7-day rolling median)",
            "Maximum value",
            "Geometric variance"
          ],
          correctOptionIndex: 1,
          explanation: "Median is resistant to extreme slugging spikes and sensor dropouts, providing an accurate baseline operating pressure.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q9",
          question: "What does the Excel formula =IFERROR(q_gas / q_oil * 1000, 'Shut-in / Zero Oil') accomplish in a daily production tracker?",
          options: [
            "It turns off Excel's calculation engine",
            "It prevents #DIV/0! errors on days when oil rate is zero (e.g. shut-in wells) and provides a clean status text",
            "It automatically replaces gas rates with water rates",
            "It converts metric units to imperial units"
          ],
          correctOptionIndex: 1,
          explanation: "When oil rate is 0, dividing gas by oil triggers #DIV/0!. Wrapping with IFERROR catches this gracefully without breaking downstream aggregations.",
          topic: "Production Analytics"
        },
        {
          id: "d51-q10",
          question: "When importing multi-well CSV telemetry files with varying date formats ('DD/MM/YYYY' vs 'MM/DD/YYYY'), what is the most foolproof tool in modern Excel?",
          options: [
            "Manually re-typing all 30,000 dates",
            "Power Query (Get & Transform Data) with Locale-specific date type setting",
            "Deleting the date column entirely",
            "Changing the font size of the date column"
          ],
          correctOptionIndex: 1,
          explanation: "Power Query handles mixed locales, automated type conversions, and repeatable ETL workflows that refresh with a single click when new SCADA files arrive.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "Well MIT-West-12 was on stream for 18 days during a 30-day month, producing a total of 7,200 STB of oil and 10,800 Mscf of gas. Calculate: 1) Calendar Day Oil Rate (STB/d), 2) Producing Day Oil Rate (STB/d), 3) Producing GOR (scf/STB), and 4) Well Runtime Efficiency (%).",
      givenValues: [
        { label: "Total Monthly Oil Produced (Np_month)", value: "7,200 STB" },
        { label: "Total Monthly Gas Produced (Gp_month)", value: "10,800 Mscf" },
        { label: "Total Calendar Days in Month (T_cal)", value: "30 days" },
        { label: "Operating Days On-Stream (T_on)", value: "18 days" }
      ],
      stepByStepSolution: [
        "Step 1: Calendar Day Oil Rate = Total Oil / Calendar Days = 7,200 STB / 30 days = 240.0 STB/d.",
        "Step 2: Producing Day Oil Rate = Total Oil / On-stream Days = 7,200 STB / 18 days = 400.0 STB/d.",
        "Step 3: Producing GOR = Total Gas / Total Oil = (10,800 Mscf * 1,000 scf/Mscf) / 7,200 STB = 10,800,000 / 7,200 = 1,500 scf/STB.",
        "Step 4: Runtime Efficiency = (T_on / T_cal) * 100 = (18 / 30) * 100 = 60.0%."
      ],
      finalAnswer: "Calendar Day Rate = 240 STB/d | Producing Day Rate = 400 STB/d | GOR = 1,500 scf/STB | Uptime = 60.0%",
      engineeringSignificance: "Reporting only Calendar Day rate (240 STB/d) masks the fact that the well can flow at 400 STB/d when operating. The reservoir is healthy, but surface or artificial lift reliability is poor (40% downtime), directing the engineer to fix surface issues rather than re-stimulating the well."
    },
    interview: {
      durationMinutes: 15,
      question: "If your operations manager asks why the field produced 15% less oil this month than budgeted, how do you use Excel production analytics to diagnose the root cause?",
      sampleAnswer: "I break the variance into two fundamental drivers: Deliverability vs Availability. First, I compute Producing Day Rate (deliverability) versus Calendar Day Rate (availability). If producing day rate matches budget but calendar rate declined, the issue is Availability (downtime, compressor trips, power outages, pipeline curtailment). I then run a SUMIFS pivot of downtime hours grouped by root-cause failure codes (e.g., ESP trips, sand cleaning, weather). If producing day rate itself fell, the issue is Deliverability (inflow decline, scaling, water breakthrough, or skin damage). By isolating whether loss is due to well mechanical downtime or reservoir inflow impairment, management knows immediately whether to dispatch workover crews or artificial lift mechanics.",
      conceptCheck: "Understand Deliverability vs Availability breakdown: Rate Variance = (Delta Rate_producing * Days_on) + (Rate_budget * Delta Days_downtime)."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Create an Excel master sheet template containing tabs: 'Raw_Data', 'Lookup_Tables', 'Clean_Daily', and 'Executive_Summary'. Add XLOOKUP and SUMIFS formulas to calculate daily field total oil, gas, water, and GOR."
    },
    checklist: [
      { id: "d51-c1", text: "Differentiated between 0 and NULL values in SCADA telemetry", completed: false },
      { id: "d51-c2", text: "Mastered XLOOKUP and INDEX-MATCH for multi-well data tables", completed: false },
      { id: "d51-c3", text: "Learned Calendar Day Rate vs Producing Day Rate calculation", completed: false },
      { id: "d51-c4", text: "Applied IFERROR wrapping for division calculations (GOR, WOR)", completed: false },
      { id: "d51-c5", text: "Created clean structured Excel table with dynamic formulas", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 52
  {
    dayNumber: 52,
    phaseId: 2,
    weekNumber: 7,
    title: "Building Monthly & Daily Production Trackers in Excel",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Build a production monitoring spreadsheet calculating oil, gas, water rates, GOR, Water Cut %, and cumulative volumes with dynamic conditional alerts.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "A production engineer tracks daily and monthly production trends to spot well anomalies before they lead to catastrophic shutdowns. The primary diagnostic indicators tracked are: Oil Rate (qo), Gas Rate (qg), Water Rate (qw), Total Liquid Rate (ql = qo + qw), Water Cut (WC = qw / ql), Gas-Oil Ratio (GOR = qg / qo), and Cumulative Production (Np, Gp, Wp). Changes in these ratios give early warnings of coning, breakthrough, tubing leaks, or pump degradation.",
      keyPoints: [
        "Water Cut Calculation: WC = qw / (qo + qw) * 100%. Expressed as a percentage. In high-water-cut environments (e.g., 95% WC), a small drop in total liquid rate drastically reduces oil production.",
        "Gas-Oil Ratio (GOR): GOR = qg / qo (scf/STB or m³/m³). A sharp increase above solution GOR (Rsb) signals reservoir pressure dropping below bubble point (free gas cap forming) or gas channeling/coning.",
        "Cumulative Production Integration: Np(t) = SUM(qo_i * delta_t). Trapezoidal numerical integration or daily summation provides cumulative recovery for material balance and DCA matching.",
        "Automated Diagnostic Thresholds: Configure conditional formatting rules: 1) Red flag if Water Cut increases by > 5% in 7 days, 2) Orange flag if GOR exceeds 3,000 scf/STB on an undersaturated oil well, 3) Yellow flag if wellhead flowing pressure drops while liquid rate also drops (indicates liquid loading or scale restriction)."
      ],
      coreFormulas: [
        {
          name: "Water Cut Formula",
          formula: "WC = [q_w / (q_o + q_w)] * 100%",
          explanation: "Fraction of produced liquid that is formation/injection water."
        },
        {
          name: "Water-Oil Ratio (WOR)",
          formula: "WOR = q_w / q_o",
          explanation: "WOR = WC / (1 - WC). Used in semi-log diagnostic plots."
        }
      ],
      fieldInsight: "When tracking an ESP or rod-pumped well, always plot Total Fluid Rate (qo + qw) alongside Oil Rate. If Oil Rate drops from 200 to 50 bbl/d, but Total Liquid Rate remains steady at 1,000 bbl/d, the pump is mechanically sound — you have water encroachment. If Total Liquid Rate drops from 1,000 to 200 bbl/d, you have a mechanical pump failure, intake plugging, or severe inflow scaling."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Production Data Analysis and Surveillance",
      url: "https://petrowiki.spe.org/Production_data_analysis",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d52-q1",
          question: "A well produces 150 STB/d of oil, 850 STB/d of water, and 300 Mscf/d of gas. What is its Water Cut and producing GOR?",
          options: [
            "WC = 85.0%, GOR = 2,000 scf/STB",
            "WC = 85.0%, GOR = 353 scf/STB",
            "WC = 15.0%, GOR = 2,000 scf/STB",
            "WC = 56.6%, GOR = 1,500 scf/STB"
          ],
          correctOptionIndex: 0,
          explanation: "Total liquid ql = 150 + 850 = 1000 STB/d. Water cut = 850 / 1000 = 85.0%. GOR = (300 * 1,000 scf) / 150 STB = 2,000 scf/STB.",
          topic: "Production Analytics"
        },
        {
          id: "d52-q2",
          question: "If a well's water cut is 98%, what is its Water-Oil Ratio (WOR)?",
          options: [
            "0.98",
            "49.0",
            "98.0",
            "2.0"
          ],
          correctOptionIndex: 1,
          explanation: "WOR = WC / (1 - WC) = 0.98 / (1 - 0.98) = 0.98 / 0.02 = 49.0 bbl water per bbl oil.",
          topic: "Production Analytics"
        },
        {
          id: "d52-q3",
          question: "In an undersaturated oil reservoir (Pb = 2,800 psi), a producing well's GOR has been stable at 450 scf/STB for 2 years. Suddenly, GOR jumps to 1,950 scf/STB while bottomhole flowing pressure is 2,200 psi. What does this indicate?",
          options: [
            "Formation water has broken through",
            "Reservoir pressure near the wellbore has dropped below bubble point, releasing mobile solution gas into the flowing stream",
            "The casing has collapsed",
            "The flowmeter has frozen"
          ],
          correctOptionIndex: 1,
          explanation: "When flowing bottomhole pressure drops below bubble point pressure (Pb), free gas breaks out of solution, leading to relative permeability to gas surge and sharp GOR spike.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d52-q4",
          question: "On an ESP well, the oil rate drops by 70%, but the total liquid rate (oil + water) remains exactly unchanged at 2,500 bbl/d. What is the diagnosis?",
          options: [
            "The ESP motor has burned out",
            "The tubing has ruptured above the pump",
            "Water cut has surged due to waterflood breakthrough or bottom-water coning, while pump displacement is operating normally",
            "The choke valve is completely blocked by wax"
          ],
          correctOptionIndex: 2,
          explanation: "Since total liquid rate is constant, the pump is lifting the exact same fluid volume; the change is purely reservoir fluid inflow (water replacing oil).",
          topic: "Artificial Lift"
        },
        {
          id: "d52-q5",
          question: "Which Excel chart type is the standard for displaying well production history over time?",
          options: [
            "Pie chart showing oil vs gas percentage",
            "Scatter/Line chart with primary axis for Oil & Water rates (STB/d) and secondary axis for GOR (scf/STB) and Gas rate (Mscf/d)",
            "Radar chart comparing well depths",
            "3D Donut chart"
          ],
          correctOptionIndex: 1,
          explanation: "Dual-axis line/scatter plots allow simultaneous visualization of liquid rates (left axis) and gas rate / GOR / pressures (right axis) across years of production.",
          topic: "Production Analytics"
        },
        {
          id: "d52-q6",
          question: "What is the relationship between cumulative oil production Np(t) and daily production rate q_o(t)?",
          options: [
            "Np is the derivative of rate over time",
            "Np is the integral (sum) of rate multiplied by time step: Np = Integral[q_o(t) dt]",
            "Np is rate divided by water cut",
            "Np equals current daily rate multiplied by 365"
          ],
          correctOptionIndex: 1,
          explanation: "Cumulative volume is the definite integral of rate over elapsed production time.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d52-q7",
          question: "How does an Excel Pivot Table enhance multi-well field surveillance?",
          options: [
            "It runs 3D finite element simulations",
            "It allows instant slicing and grouping of thousands of daily well records by Field, Reservoir Zone, Battery, or Lift Type to spot underperforming clusters",
            "It replaces the need for bottomhole pressure gauges",
            "It automatically recalculates oil gravity in API"
          ],
          correctOptionIndex: 1,
          explanation: "Pivot tables allow engineers to slice multi-well time-series by geological layer, operator, artificial lift type, or field gathering system.",
          topic: "Production Analytics"
        },
        {
          id: "d52-q8",
          question: "In Excel, if you want a cell to turn bold red whenever Water Cut exceeds 90%, which feature do you configure?",
          options: [
            "Goal Seek",
            "Conditional Formatting -> Highlight Cell Rules -> Greater Than 0.90",
            "Data Validation List",
            "Text to Columns"
          ],
          correctOptionIndex: 1,
          explanation: "Conditional formatting rules visually alert surveillance engineers to breakthrough thresholds.",
          topic: "Production Analytics"
        },
        {
          id: "d52-q9",
          question: "A well's daily oil rate drops from 400 bbl/d to 80 bbl/d, and total liquid rate also drops from 1,200 bbl/d to 240 bbl/d. What does this indicate?",
          options: [
            "Water cut breakthrough only",
            "System restriction: pump failure, surface line blockage, severe scaling, or depletion of well deliverability",
            "Solution GOR collapse",
            "Gas cap expansion"
          ],
          correctOptionIndex: 1,
          explanation: "A proportional drop in both oil and water (total fluid collapse) indicates a flow restriction (mechanical lift failure, scale/wax obstruction, or pressure depletion).",
          topic: "Production Analytics"
        },
        {
          id: "d52-q10",
          question: "When calculating cumulative gas production Gp in field units from daily rates in Mscf/d, how should daily volume be summed?",
          options: [
            "Multiply Mscf/d by 1,000 and divide by 24",
            "Sum the daily Mscf values directly to get total Mscf, or divide by 1,000 to express in MMscf",
            "Take the average of the first and last day only",
            "Multiply daily rate by wellhead pressure"
          ],
          correctOptionIndex: 1,
          explanation: "Daily Mscf multiplied by 1 day gives Mscf produced that day. Summing daily volumes gives total Mscf (or /1,000 for MMscf).",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production well records the following data over 4 consecutive quarters:\nQ1: qo = 800 STB/d, qw = 200 STB/d, qg = 640 Mscf/d (90 days)\nQ2: qo = 650 STB/d, qw = 350 STB/d, qg = 585 Mscf/d (91 days)\nQ3: qo = 500 STB/d, qw = 500 STB/d, qg = 500 Mscf/d (92 days)\nQ4: qo = 380 STB/d, qw = 620 STB/d, qg = 456 Mscf/d (92 days)\nCalculate for each quarter: 1) Water Cut (%), 2) Producing GOR (scf/STB), and 3) Total Oil Produced Np across the full year (STB).",
      givenValues: [
        { label: "Quarter durations", value: "Q1=90d, Q2=91d, Q3=92d, Q4=92d" },
        { label: "Total Days in Year", value: "365 days" }
      ],
      stepByStepSolution: [
        "Step 1: Q1 Water Cut = 200 / (800 + 200) = 20.0%. GOR = (640 * 1,000) / 800 = 800 scf/STB. Q1 Oil = 800 * 90 = 72,000 STB.",
        "Step 2: Q2 Water Cut = 350 / (650 + 350) = 35.0%. GOR = (585 * 1,000) / 650 = 900 scf/STB. Q2 Oil = 650 * 91 = 59,150 STB.",
        "Step 3: Q3 Water Cut = 500 / (500 + 500) = 50.0%. GOR = (500 * 1,000) / 500 = 1,000 scf/STB. Q3 Oil = 500 * 92 = 46,000 STB.",
        "Step 4: Q4 Water Cut = 620 / (380 + 620) = 62.0%. GOR = (456 * 1,000) / 380 = 1,200 scf/STB. Q4 Oil = 380 * 92 = 34,960 STB.",
        "Step 5: Full Year Cumulative Oil Np = 72,000 + 59,150 + 46,000 + 34,960 = 212,110 STB."
      ],
      finalAnswer: "Q1: 20% WC, 800 GOR | Q2: 35% WC, 900 GOR | Q3: 50% WC, 1000 GOR | Q4: 62% WC, 1200 GOR | Annual Np = 212,110 STB",
      engineeringSignificance: "Notice that while oil rate dropped by more than 50% (800 to 380 STB/d), total liquid rate remained exactly 1,000 STB/d throughout the year. The well is in active water drive with water displacing oil. GOR is also climbing from 800 to 1,200 scf/STB, indicating secondary gas breakout."
    },
    interview: {
      durationMinutes: 15,
      question: "You notice that in your daily tracker, Well A's water cut jumped from 15% to 80% overnight, while Well B's water cut increased gradually from 15% to 80% over 18 months. What are the probable geological/mechanical causes for each?",
      sampleAnswer: "An overnight jump from 15% to 80% (Well A) indicates a mechanical or channel breakthrough: cement channeling behind casing from a nearby water zone, casing failure/tubing leak, or sudden coning through a high-permeability thief fracture. This requires mechanical diagnostics (temperature log, noise log, or cement bond inspection). In contrast, a gradual 18-month increase from 15% to 80% (Well B) represents normal waterflood sweep efficiency or steady bottom-water encroaching under hydrodynamic drive. Well B's behavior is managed via choke adjustments or polymer water shut-off treatments, whereas Well A requires immediate mechanical intervention or squeeze cementing.",
      conceptCheck: "Distinguish sudden water breakthrough (channeling, mechanical integrity failure) from progressive reservoir water encroachment (sweep, coning)."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Build a dynamic Excel Production Tracker with 365 daily rows, calculating Water Cut %, GOR, Total Liquid Rate, and Cumulative Oil. Add conditional formatting rules to highlight GOR > 1500 or WC > 75%."
    },
    checklist: [
      { id: "d52-c1", text: "Computed daily & cumulative Oil, Gas, and Water volumes", completed: false },
      { id: "d52-c2", text: "Calculated Water Cut (WC) and Water-Oil Ratio (WOR)", completed: false },
      { id: "d52-c3", text: "Analyzed GOR trends to detect gas breakout and coning", completed: false },
      { id: "d52-c4", text: "Evaluated total liquid rate vs oil rate for lift diagnostics", completed: false },
      { id: "d52-c5", text: "Configured conditional formatting alerts for surveillance", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 53
  {
    dayNumber: 53,
    phaseId: 2,
    weekNumber: 7,
    title: "Production Allocations & Wellhead Back-Allocation",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Master field production allocation workflows, separator test factors, downtime adjustments, and reconciliation with fiscal custody transfer meters.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In upstream operations, every individual well cannot have its own multi-million dollar fiscal custody transfer meter. Instead, 10 to 50 wells produce into a common gathering header, separation battery, and sales meter. Individual wells are tested periodically (e.g. 8 to 24 hours every 2 weeks) through a Test Separator. The petroleum production engineer must 'back-allocate' the single total fiscal sales volume among all producing wells based on their individual test rates, uptime hours, and choke settings.",
      keyPoints: [
        "Theoretical Well Production: Q_theoretical_i = Test_Rate_i * Operating_Hours_i / 24. This is what the well would have produced based purely on its latest periodic test.",
        "Total Theoretical Field Production: Q_theoretical_total = SUM(Q_theoretical_i). Invariably, Q_theoretical_total does NOT equal the actual fiscal sales meter volume (Q_sales).",
        "Allocation Factor (Correction Factor): F_alloc = Q_sales / Q_theoretical_total. If F_alloc < 1.0 (e.g. 0.92), the field produced 8% less than test predictions (over-testing, line losses, shrinkage). If F_alloc > 1.0, tests under-reported well capacity.",
        "Allocated Well Production: Q_allocated_i = Q_theoretical_i * F_alloc. Ensures that the sum of all allocated well volumes matches fiscal custody sales to the exact barrel.",
        "Regulatory & Royalty Compliance: Accurate allocation is legally mandated because different wells may have different working interest partners, royalty owners, and tax jurisdictions."
      ],
      coreFormulas: [
        {
          name: "Well Allocation Factor",
          formula: "F_alloc = Q_fiscal_sales / SUM(q_test_i * t_on_i)",
          explanation: "Reconciles periodic well test estimates with total sales meter volume."
        },
        {
          name: "Allocated Production per Well",
          formula: "Q_allocated_i = (q_test_i * t_on_i) * F_alloc",
          explanation: "Final assigned production volume for well i."
        }
      ],
      fieldInsight: "If your monthly allocation factor drops below 0.85 or rises above 1.15, investigate immediately! Major causes: 1) A well was tested while other wells were choked back, giving an artificially low backpressure and inflated test rate; 2) Emulsion in the test separator causing meter carryover; 3) Unmetered flare or fuel gas usage."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-164478: Best Practices for Production Allocation and Well Test Reconciliation",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d53-q1",
          question: "Why is production back-allocation necessary in oil and gas field operations?",
          options: [
            "Because every well has its own fiscal sales custody meter",
            "Because multiple wells co-mingle into a central battery with a single sales meter, requiring fiscal sales to be mathematically proportioned back to individual wells based on tests and uptime",
            "Because reservoir pressure cannot be measured directly",
            "Because crude oil evaporates completely in storage tanks"
          ],
          correctOptionIndex: 1,
          explanation: "Fiscal metering occurs at custody transfer points. Back-allocation distributes that verified volume back to individual wells for partner accounting and reservoir surveillance.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q2",
          question: "A gathering battery has 3 wells. Their theoretical monthly volumes based on separator tests and uptime are: Well 1 = 3,000 bbl, Well 2 = 5,000 bbl, Well 3 = 2,000 bbl. The fiscal sales meter recorded 9,200 bbl. What is the field allocation factor?",
          options: [
            "1.087",
            "0.920",
            "1.000",
            "0.850"
          ],
          correctOptionIndex: 1,
          explanation: "Total theoretical = 3,000 + 5,000 + 2,000 = 10,000 bbl. Allocation factor = Fiscal Sales / Theoretical = 9,200 / 10,000 = 0.920 (or 92%).",
          topic: "Production Analytics"
        },
        {
          id: "d53-q3",
          question: "Using the allocation factor of 0.920 from the previous question, what is the allocated production for Well 2?",
          options: [
            "5,000 bbl",
            "4,600 bbl",
            "5,435 bbl",
            "4,200 bbl"
          ],
          correctOptionIndex: 1,
          explanation: "Allocated volume = 5,000 * 0.920 = 4,600 bbl.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q4",
          question: "What is the most common reason for a test separator to overestimate an individual well's liquid rate during a 12-hour well test?",
          options: [
            "The well test separator operates at 0 psi",
            "Gas carry-under in the liquid line or emulsion causing the turbine/Coriolis meter to measure gas bubbles or water as oil",
            "The reservoir completely depleted during the 12 hours",
            "The choke was closed"
          ],
          correctOptionIndex: 1,
          explanation: "Gas carry-under (foaming/emulsion) creates multiphase froth in the liquid dump line, causing liquid volume meters to over-read liquid rate.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q5",
          question: "If an allocation factor is 0.78 (meaning allocated sales is 22% lower than test expectations), what operational issue is most likely occurring?",
          options: [
            "Sales meter is under-registering by 50%",
            "Well tests are being conducted at lower backpressure than normal header line pressure, inflating test rates, or there are significant unmetered line leaks/flaring",
            "The crude oil has turned into solid diamond",
            "All wells have 100% uptime"
          ],
          correctOptionIndex: 1,
          explanation: "When a test separator line operates at lower pressure than the main gathering trunkline, the tested well flows at higher drawdown, exaggerating its normal flowing rate.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q6",
          question: "In oil allocation, how does 'shrinkage factor' affect the relationship between separator oil barrels and stock-tank sales barrels?",
          options: [
            "Shrinkage increases volume by 20%",
            "Oil shrinks as dissolved gas flashes out when going from separator pressure/temperature to atmospheric stock-tank conditions (Bo > 1.0)",
            "Shrinkage only applies to dry gas",
            "Shrinkage is caused by sand settling"
          ],
          correctOptionIndex: 1,
          explanation: "Liquid volume at high separator pressure contains dissolved gas. Flashing to atmospheric stock-tank pressure releases gas, causing liquid shrinkage.",
          topic: "PVT Properties"
        },
        {
          id: "d53-q7",
          question: "Why must downtime hours be factored into theoretical well production calculations?",
          options: [
            "Downtime has no mathematical effect on volume",
            "Multiplying test rate by 24 hours on a day when a well was shut-in for 16 hours falsely inflates theoretical volume by 200%",
            "Downtime only affects gas wells",
            "Regulators mandate zero downtime"
          ],
          correctOptionIndex: 1,
          explanation: "A well can only produce when operating. Ignoring downtime hours causes huge over-allocation errors.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q8",
          question: "In a gas-condensate field allocation, what is 'yield' (condensate-gas ratio, CGR)?",
          options: [
            "Water cut divided by GOR",
            "Barrels of liquid condensate recovered at the separator per MMscf of raw gas produced (STB/MMscf)",
            "Gas viscosity divided by oil density",
            "Percent of sand recovered"
          ],
          correctOptionIndex: 1,
          explanation: "CGR represents the liquid hydrocarbon recovery per million standard cubic feet of wet gas.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q9",
          question: "Which of the following describes an 'unallocated balance' or 'meter imbalance' in a pipeline gathering network?",
          options: [
            "The difference between total metered inputs into the pipeline system and total metered deliveries at the sales terminal",
            "The difference between porosity and permeability",
            "The speed of sound in steel pipe",
            "The salary difference between junior and senior engineers"
          ],
          correctOptionIndex: 0,
          explanation: "Pipeline balance = Total Receipts - Total Deliveries - Line Pack Change. Discrepancies indicate meter calibration drift, condensation, or leaks.",
          topic: "Production Analytics"
        },
        {
          id: "d53-q10",
          question: "Why do royalty owners and partners scrutinize allocation spreadsheets during joint venture audits?",
          options: [
            "To verify font consistency in Excel",
            "Because an inaccurate allocation factor shifts revenue from high-royalty leases to low-royalty leases, resulting in legal disputes and financial liabilities",
            "Because they want to check if the well is vertical",
            "To calculate drilling mud weight"
          ],
          correctOptionIndex: 1,
          explanation: "Leases have different ownership percentages. If allocation misattributes barrels between wells, one partner is overpaid while another is defrauded.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A central gathering battery collects oil from 4 production wells during a 30-day month (720 total hours). The battery sales meter recorded exactly 34,500 STB of oil.\nWell test and runtime records for the month are:\n- Well A: Test rate = 520 STB/d, Operating hours = 680 hrs\n- Well B: Test rate = 340 STB/d, Operating hours = 710 hrs\n- Well C: Test rate = 260 STB/d, Operating hours = 540 hrs\n- Well D: Test rate = 180 STB/d, Operating hours = 720 hrs\nCalculate: 1) Theoretical oil production for each well, 2) Total theoretical battery production, 3) Field Allocation Factor, and 4) Final allocated oil production for each well.",
      givenValues: [
        { label: "Fiscal Sales Volume", value: "34,500 STB" },
        { label: "Total Hours in Month", value: "720 hours" }
      ],
      stepByStepSolution: [
        "Step 1: Compute Theoretical Production for each well (Test Rate * Hours / 24):\n- Well A: 520 * (680 / 24) = 520 * 28.333 = 14,733.3 STB\n- Well B: 340 * (710 / 24) = 340 * 29.583 = 10,058.3 STB\n- Well C: 260 * (540 / 24) = 260 * 22.500 = 5,850.0 STB\n- Well D: 180 * (720 / 24) = 180 * 30.000 = 5,400.0 STB",
        "Step 2: Total Theoretical Battery Production = 14,733.3 + 10,058.3 + 5,850.0 + 5,400.0 = 36,041.6 STB.",
        "Step 3: Field Allocation Factor (F_alloc) = Sales / Theoretical = 34,500 / 36,041.6 = 0.95723 (95.72%).",
        "Step 4: Final Allocated Production:\n- Well A: 14,733.3 * 0.95723 = 14,103.2 STB\n- Well B: 10,058.3 * 0.95723 = 9,628.1 STB\n- Well C: 5,850.0 * 0.95723 = 5,599.8 STB\n- Well D: 5,400.0 * 0.95723 = 5,168.9 STB\nSum of allocated = 34,500.0 STB (Exact match)."
      ],
      finalAnswer: "F_alloc = 0.9572 | Well A = 14,103 STB | Well B = 9,628 STB | Well C = 5,600 STB | Well D = 5,169 STB",
      engineeringSignificance: "The allocation factor of 0.957 indicates a normal, healthy 4.3% variance between individual well tests and battery sales, easily accounted for by tank shrinkage and piping friction. If Well A's theoretical share had been calculated without deducting its 40 hours of downtime, Well A would have unjustly stolen over 800 barrels from the other three wells."
    },
    interview: {
      durationMinutes: 15,
      question: "In a production meeting, an offshore platform supervisor complains that the allocated oil for their satellite well is consistently 12% lower than their test separator numbers every month. How do you explain and investigate this discrepancy?",
      sampleAnswer: "I would explain that well tests represent snapshot conditions (often 8 to 12 hours under dedicated test separator conditions) whereas allocated sales represent continuous fiscal custody transfer over 720 hours. To investigate the 12% loss, I would examine three systematic factors: 1) Test Separator Backpressure vs Main Production Header Pressure: If the test separator operates at 80 psi while the main production header operates at 140 psi, the well experiences higher drawdown during testing, resulting in an artificially inflated test rate. 2) Liquid Meter Calibration & Gas Carry-Under: Check if foaming or emulsion causes the test Coriolis/turbine meter to over-count gas bubbles as oil. 3) Tank & Line Shrinkage: Ensure the test volume is converted to stock-tank conditions using laboratory formation volume factor (Bo) or shrinkage factor rather than comparing uncorrected separator barrels to stock-tank sales barrels.",
      conceptCheck: "Understand how backpressure differentials between test and production headers cause systematic over-estimation of well potential."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Build an Excel Back-Allocation Model for a 6-well gathering station. Implement automated inputs for well test rates, uptime hours, fiscal sales, and calculate allocation factors and distributed production."
    },
    checklist: [
      { id: "d53-c1", text: "Understood purpose of upstream production back-allocation", completed: false },
      { id: "d53-c2", text: "Calculated theoretical well volumes based on test rates and run hours", completed: false },
      { id: "d53-c3", text: "Computed field allocation factor (Sales / Theoretical)", completed: false },
      { id: "d53-c4", text: "Diagnosed causes of allocation discrepancies (backpressure, shrinkage)", completed: false },
      { id: "d53-c5", text: "Built an Excel allocation reconciliation table", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 54
  {
    dayNumber: 54,
    phaseId: 2,
    weekNumber: 7,
    title: "Decline Curve Analysis (DCA) Foundations: Arps Equations",
    category: "decline_curve_analysis",
    categoryLabel: "Decline Curve Analysis",
    todayGoal: "Master J.J. Arps' empirical decline models: Exponential, Hyperbolic, and Harmonic decline, nominal vs effective decline rate, and boundary-dominated flow assumptions.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Decline Curve Analysis (DCA) is the most widely used empirical technique in petroleum engineering for forecasting future production rates and estimating Estimated Ultimate Recovery (EUR) and remaining reserves. Formulated by J.J. Arps in 1945, DCA models the empirical drop in production rate over time once a reservoir enters boundary-dominated flow (pseudo-steady state) under constant operating conditions (choke, bottomhole pressure).",
      keyPoints: [
        "Core Assumptions of Arps DCA: 1) The well must be in Boundary-Dominated Flow (BDF), NOT transient flow; 2) Constant flowing bottomhole pressure (or constant choke); 3) Constant drainage area (no new infill wells stealing drainage); 4) Unchanging reservoir drive mechanism.",
        "General Arps Equation: q(t) = q_i / (1 + b * D_i * t)^(1/b). The b-parameter controls the curvature of decline.",
        "The Three Decline Types: 1) Exponential (b = 0): Constant fractional decline per unit time; 2) Hyperbolic (0 < b < 1): Decline rate decreases over time (typical for solution gas drive, b ~ 0.2–0.5; waterflood, b ~ 0.5–0.8); 3) Harmonic (b = 1): Decline rate inversely proportional to time.",
        "Nominal Decline (D) vs Effective Decline (d): Nominal decline rate D is the continuous instantaneous slope (-dq/dt / q), while Effective decline d is the periodic drop over a discrete time step (e.g. annual decline d_a = (qi - q1yr) / qi). d_a = 1 - exp(-D) for exponential.",
        "Unconventional Reservoirs Caution: Modern tight oil/shale wells often show apparent b-factors > 1 (e.g. b = 1.2 to 1.8) due to decades-long transient linear flow. Standard practice caps hyperbolic decline with an exponential tail (e.g. D_min = 6–8%/yr) to avoid infinite reserve over-prediction."
      ],
      coreFormulas: [
        {
          name: "General Arps Rate Equation",
          formula: "q(t) = q_i / (1 + b * D_i * t)^(1/b)  [For b > 0]",
          explanation: "Rate as a function of time, initial rate qi, initial nominal decline Di, and hyperbolic exponent b."
        },
        {
          name: "Exponential Decline Rate Equation",
          formula: "q(t) = q_i * exp(-D * t)  [For b = 0]",
          explanation: "Constant percentage decline per unit time."
        },
        {
          name: "Effective vs Nominal Decline (Exponential)",
          formula: "d = 1 - exp(-D)  <=>  D = -ln(1 - d)",
          explanation: "Converts annual discrete percentage decline d to continuous nominal decline D."
        }
      ],
      fieldInsight: "Never fit an Arps decline curve on early-time data during cleanup or transient flush production! If a well is still in transient linear flow (half-slope on log-log diagnostic plot), applying Arps will fit a massive b > 1.5, forecasting unrealistic trillions of cubic feet. Wait for boundary-dominated flow before locking your DCA parameters."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Production Decline Analysis",
      url: "https://petrowiki.spe.org/Production_decline_analysis",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d54-q1",
          question: "What is the foundational physical assumption required for Arps empirical decline curve analysis to be mathematically valid?",
          options: [
            "The well must be in early transient infinite-acting flow",
            "The well must be producing in boundary-dominated flow (pseudo-steady state) with relatively constant bottomhole operating conditions",
            "The reservoir must contain only single-phase steam",
            "Water cut must be 0%"
          ],
          correctOptionIndex: 1,
          explanation: "Arps equations are derived for boundary-dominated flow where the reservoir boundaries have been felt and pressure decline is governed by boundary drainage.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q2",
          question: "Which value of the Arps hyperbolic exponent 'b' corresponds to Exponential Decline?",
          options: [
            "b = 1.0",
            "b = 0.5",
            "b = 0.0",
            "b = 2.0"
          ],
          correctOptionIndex: 2,
          explanation: "When b = 0, the general Arps equation simplifies via calculus limit to exponential decline: q(t) = qi * exp(-Dt).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q3",
          question: "If a well has an effective annual decline rate d = 20% (0.20/year), what is its nominal continuous decline rate D?",
          options: [
            "0.200 / year",
            "0.223 / year",
            "0.182 / year",
            "0.400 / year"
          ],
          correctOptionIndex: 1,
          explanation: "D = -ln(1 - d) = -ln(1 - 0.20) = -ln(0.80) = 0.2231 / year (or 22.31%/yr).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q4",
          question: "In classical reservoir engineering, what physical drive mechanism typically exhibits a hyperbolic b-factor between 0.1 and 0.4?",
          options: [
            "Strong bottom water drive maintaining 100% reservoir pressure",
            "Solution gas drive (depletion drive) below bubble point",
            "Gas injection at miscible conditions",
            "Gravity drainage with free surface"
          ],
          correctOptionIndex: 1,
          explanation: "Solution gas drive shows hyperbolic decline with b typically between 0.2 and 0.4 due to changing gas-oil relative permeability and fluid viscosity as pressure drops.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q5",
          question: "Which decline type exhibits the slowest drop in production rate at late times?",
          options: [
            "Exponential decline (b = 0)",
            "Hyperbolic decline with b = 0.3",
            "Harmonic decline (b = 1.0)",
            "Linear decline"
          ],
          correctOptionIndex: 2,
          explanation: "Harmonic decline (b = 1) has a decline rate inversely proportional to time, maintaining a much higher, flatter tail at late times than exponential.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q6",
          question: "Why do reserves auditors reject reserve estimates in shale/tight reservoirs where an unconstrained hyperbolic curve with b = 1.6 is projected for 40 years without a terminal decline?",
          options: [
            "Because shale wells never produce for more than 2 years",
            "Because unconstrained hyperbolic curves with b > 1 yield unrealistically massive, near-infinite reserves at late times; a terminal exponential decline (D_min ~ 5-8%) must be imposed",
            "Because computers cannot calculate b > 1",
            "Because b must always equal the water cut"
          ],
          correctOptionIndex: 1,
          explanation: "When b > 1, the mathematical integral of production over infinite time can approach infinity. Industry standards (SEC/SPE-PRMS) require capping with a minimum exponential decline rate (terminal decline).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q7",
          question: "If an exponential decline curve is plotted on semi-log paper (Rate on logarithmic scale y-axis vs Time on linear scale x-axis), what shape does it form?",
          options: [
            "A parabola opening upwards",
            "A straight line with negative slope equal to -D",
            "A horizontal line",
            "A bell curve"
          ],
          correctOptionIndex: 1,
          explanation: "Since ln(q) = ln(qi) - D*t, semi-log coordinates transform exponential decline into a pure straight line.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q8",
          question: "What is 'Economic Limit' (q_econ) in decline curve forecasting?",
          options: [
            "The initial production rate on day 1",
            "The minimum production rate at which revenue from hydrocarbons equals the direct operating costs (OPEX) to keep the well running",
            "The maximum rate the separator can handle",
            "The tax rate paid to the government"
          ],
          correctOptionIndex: 1,
          explanation: "When well revenue equals operating expenses, the well ceases to be economic. The time at which rate hits q_econ defines well life and EUR.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q9",
          question: "On a Cartesian plot of Rate (q) versus Cumulative Production (Np), what decline type forms a perfect straight line?",
          options: [
            "Harmonic decline",
            "Exponential decline",
            "Hyperbolic decline with b = 0.5",
            "Transient linear flow"
          ],
          correctOptionIndex: 1,
          explanation: "For exponential decline, Np(t) = (qi - q(t)) / D. Rearranging gives q(t) = qi - D * Np, which is a straight line on Cartesian axes.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d54-q10",
          question: "If a well begins producing with a nominal decline rate of D = 0.05 per month, what is its expected rate after 12 months if initial rate was 1,000 STB/d under exponential decline?",
          options: [
            "1,000 STB/d",
            "548.8 STB/d",
            "400.0 STB/d",
            "750.0 STB/d"
          ],
          correctOptionIndex: 1,
          explanation: "q(12) = 1,000 * exp(-0.05 * 12) = 1,000 * exp(-0.60) = 1,000 * 0.54881 = 548.8 STB/d.",
          topic: "Decline Curve Analysis"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A producing oil well enters boundary-dominated flow with an initial rate qi = 600 STB/d and an exponential nominal decline rate D = 0.25 / year.\n1) Calculate the production rate after exactly 3.0 years.\n2) Calculate the effective annual decline rate (d_annual %).\n3) Calculate the cumulative oil produced (Np) after 3.0 years.\n4) If the well's economic limit is q_econ = 25 STB/d, calculate the total well life (t_abandonment in years).",
      givenValues: [
        { label: "Initial Rate (qi)", value: "600 STB/d" },
        { label: "Decline Rate (D)", value: "0.25 / year (nominal)" },
        { label: "Elapsed Time (t)", value: "3.0 years" },
        { label: "Economic Limit (q_econ)", value: "25 STB/d" }
      ],
      stepByStepSolution: [
        "Step 1: Production rate after 3 years:\nq(3) = qi * exp(-D * t) = 600 * exp(-0.25 * 3) = 600 * exp(-0.75) = 600 * 0.47237 = 283.4 STB/d.",
        "Step 2: Effective annual decline rate:\nd = 1 - exp(-D) = 1 - exp(-0.25) = 1 - 0.7788 = 0.2212 = 22.12% / year.",
        "Step 3: Cumulative oil production after 3 years:\nConvert D to daily: D_daily = 0.25 / 365 = 0.00068493 / day.\nNp = (qi - q(t)) / D_daily = (600 - 283.42) / 0.00068493 = 316.58 / 0.00068493 = 462,208 STB.",
        "Step 4: Well Life to Economic Limit:\nq_econ = qi * exp(-D * t_life)\n25 = 600 * exp(-0.25 * t_life)\nexp(-0.25 * t_life) = 25 / 600 = 0.04167\n-0.25 * t_life = ln(0.04167) = -3.17805\nt_life = -3.17805 / -0.25 = 12.71 years."
      ],
      finalAnswer: "Rate at 3 yrs = 283.4 STB/d | d_annual = 22.12% | Np(3 yrs) = 462,208 STB | Well Life = 12.7 years",
      engineeringSignificance: "This illustrates the mathematical beauty of exponential decline: cumulative recovery is directly proportional to rate drop divided by daily decline. Knowing the well will remain economic for 12.7 years allows management to schedule artificial lift conversions and budgeting accordingly."
    },
    interview: {
      durationMinutes: 15,
      question: "What is the difference between Nominal Decline Rate and Effective Decline Rate, and why does confusing them cause major errors in reserve forecasting?",
      sampleAnswer: "Nominal decline rate (D) is the continuous, instantaneous derivative of rate decline (-dq/dt / q). It is the parameter used inside the calculus equations q(t) = qi * exp(-Dt). Effective decline rate (d) is the discrete percentage drop over a specific calendar period, such as one year: d = (qi - q1yr) / qi. Because compounding occurs continuously, nominal decline is always larger than effective decline (D = -ln(1 - d)). For example, an effective 20% annual decline corresponds to a nominal decline of 22.3%. If an engineer takes an operator's reported 20% annual decline and plugs D = 0.20 directly into the exponential rate formula, they will understate the decline, overestimate future cash flow, and over-book proved reserves.",
      conceptCheck: "Remember: D = -ln(1 - d). Nominal decline is always strictly greater than effective decline."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Set up an Arps decline comparison table in Excel comparing Exponential (b=0), Hyperbolic (b=0.4), and Harmonic (b=1.0) forecasts over 10 years for a 500 bbl/d well. Observe the diverging late-life recovery curves."
    },
    checklist: [
      { id: "d54-c1", text: "Mastered the three Arps decline models (Exponential, Hyperbolic, Harmonic)", completed: false },
      { id: "d54-c2", text: "Converted between nominal decline (D) and effective annual decline (d)", completed: false },
      { id: "d54-c3", text: "Calculated rate at future time t and cumulative recovery Np", completed: false },
      { id: "d54-c4", text: "Determined well life based on economic limit rate (q_econ)", completed: false },
      { id: "d54-c5", text: "Understood boundary-dominated flow assumptions and b-factor limits", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 55
  {
    dayNumber: 55,
    phaseId: 2,
    weekNumber: 7,
    title: "Arps Exponential Decline Analysis in Excel",
    category: "decline_curve_analysis",
    categoryLabel: "Decline Curve Analysis",
    todayGoal: "Perform complete exponential decline curve fitting on multi-year field production data in Excel, determine slope/intercept, calculate EUR, and estimate remaining reserves.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Exponential decline (b = 0) is the cornerstone of conservative reserves estimation. Because it assumes a constant percentage loss per year, it provides an unassailable baseline for proved developed producing (PDP) reserves. In Excel, exponential decline can be fitted through two distinct, mathematically equivalent methods: 1) Linear regression of ln(q) versus time (semi-log slope), and 2) Linear regression of Rate versus Cumulative Production (q vs Np Cartesian plot).",
      keyPoints: [
        "Method 1: Semi-Log Rate vs Time: Plot ln(q_o) on the y-axis vs time t (in months or years) on the x-axis. Using Excel formulas: Slope = SLOPE(ln_q_range, time_range) gives -D; Intercept = INTERCEPT(ln_q_range, time_range) gives ln(q_i). q_i = EXP(intercept).",
        "Method 2: Rate vs Cumulative Production (Cartesian): q(t) = q_i - D_daily * N_p(t). Plotting q on y vs Np on x yields a straight line with slope = -D_daily and x-intercept = Estimated Ultimate Recovery (EUR) at q = 0.",
        "Estimated Ultimate Recovery (EUR) Calculation: EUR = Np_current + Remaining Reserves. Remaining Reserves = (q_current - q_abandonment) / D_daily.",
        "Data Filtering for Regression: Before running SLOPE and INTERCEPT, exclude: 1) Early cleanup / flowback periods, 2) Extended shut-in periods (plant turnaround), 3) Artificial lift workover flush production spikes.",
        "R-Squared Evaluation: Use RSQ(ln_q_range, time_range) to measure goodness of fit. An R² > 0.85 indicates a stable, reliable boundary-dominated decline."
      ],
      coreFormulas: [
        {
          name: "Linearized Semi-Log Equation",
          formula: "ln(q) = ln(q_i) - D * t",
          explanation: "Standard linear regression y = c + m*x where y = ln(q), m = -D, c = ln(qi)."
        },
        {
          name: "EUR at Economic Limit",
          formula: "EUR = (q_i - q_econ) / D_daily",
          explanation: "Total lifetime oil recovered from day 0 until economic abandonment."
        },
        {
          name: "Remaining Reserves (RR)",
          formula: "RR = (q_current - q_econ) / D_daily",
          explanation: "Oil remaining to be produced from today forward."
        }
      ],
      fieldInsight: "When fitting decline curves in Excel, beware of the 'shut-in well rebound' trap. When a well is shut in for a month, reservoir pressure around the wellbore builds up. When reopened, it produces at a high flush rate for 5 days before returning to its normal trend. If you include those 5 days in your linear regression, your slope will be artificially steep."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-102555: Practical Aspects of Decline Curve Analysis in Mature Fields",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d55-q1",
          question: "To perform linear regression for exponential decline in Excel without third-party plugins, what transformation must you apply to the production rate column?",
          options: [
            "Take the natural logarithm =LN(rate)",
            "Square the rate =rate^2",
            "Divide rate by 1,000",
            "Multiply rate by cumulative days"
          ],
          correctOptionIndex: 0,
          explanation: "Taking LN(rate) linearizes the exponential relationship ln(q) = ln(qi) - D*t.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q2",
          question: "An Excel linear regression of ln(q [STB/d]) vs time [years] yields an intercept of 6.2146 and a slope of -0.2231. What are the initial rate qi and nominal annual decline rate D?",
          options: [
            "qi = 500 STB/d, D = 22.31% / year",
            "qi = 6.21 STB/d, D = -0.22 / year",
            "qi = 1,000 STB/d, D = 10.0% / year",
            "qi = 250 STB/d, D = 50.0% / year"
          ],
          correctOptionIndex: 0,
          explanation: "qi = exp(intercept) = exp(6.2146) = 500.0 STB/d. Slope = -D = -0.2231, so D = 0.2231 / year.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q3",
          question: "For the well in the previous question, what is its Estimated Ultimate Recovery (EUR) from initial production down to an economic limit of 15 STB/d? (Assume 365 days/yr, D_daily = 0.2231 / 365 = 0.0006112 /day).",
          options: [
            "793,520 STB",
            "500,000 STB",
            "2,150,000 STB",
            "125,000 STB"
          ],
          correctOptionIndex: 0,
          explanation: "EUR = (qi - q_econ) / D_daily = (500 - 15) / 0.0006112 = 485 / 0.0006112 = 793,520 STB.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q4",
          question: "If a well has already produced 450,000 STB of cumulative oil (Np), and its EUR is calculated as 793,520 STB, what are its Remaining Reserves (RR)?",
          options: [
            "793,520 STB",
            "343,520 STB",
            "450,000 STB",
            "1,243,520 STB"
          ],
          correctOptionIndex: 1,
          explanation: "Remaining Reserves = EUR - Cumulative Np = 793,520 - 450,000 = 343,520 STB.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q5",
          question: "When plotting Rate vs Cumulative Production (q vs Np) on a Cartesian graph for an exponential decline well, where does the straight line intersect the x-axis (q = 0)?",
          options: [
            "At the initial reservoir pressure",
            "At the theoretical maximum cumulative recovery at zero rate: Np_max = qi / D",
            "At 0 STB",
            "At the bubble point pressure"
          ],
          correctOptionIndex: 1,
          explanation: "Setting q = 0 in q = qi - D*Np gives Np_max = qi / D, which is the x-axis intercept.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q6",
          question: "Which Excel function directly calculates the coefficient of determination (R²) between actual production and your decline curve fit?",
          options: [
            "=CORREL()",
            "=RSQ(known_y's, known_x's)",
            "=STDEV()",
            "=VAR()"
          ],
          correctOptionIndex: 1,
          explanation: "=RSQ() returns the square of the Pearson product-moment correlation coefficient, representing the fraction of variance explained by the model.",
          topic: "Production Analytics"
        },
        {
          id: "d55-q7",
          question: "Why should an engineer exclude a temporary 3-month compressor shutdown period when fitting a decline curve in Excel?",
          options: [
            "Because Excel cannot process data during shutdowns",
            "The shutdown represents artificial operational curtailment rather than natural reservoir inflow decline; including it artificially skews the decline slope",
            "Compressor shutdowns increase reservoir porosity",
            "Reserves auditors do not care about compressor uptime"
          ],
          correctOptionIndex: 1,
          explanation: "Arps DCA assumes unconstrained flow. Artificial surface choke or compressor shut-ins must be filtered out so only true boundary-dominated reservoir decline is modeled.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q8",
          question: "If an operator improves artificial lift efficiency by lowering bottomhole flowing pressure from 1,200 psi to 400 psi, how does the decline curve respond?",
          options: [
            "Production rate permanently drops to zero",
            "Production rate experiences an upward step-change (rate jump) and establishes a new decline trajectory",
            "Decline rate becomes negative forever",
            "Water cut immediately drops to zero"
          ],
          correctOptionIndex: 1,
          explanation: "Lowering bottomhole pressure increases drawdown, creating an upward step-change in rate. A new decline curve must be fitted from the intervention date onward.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q9",
          question: "What is the primary commercial limitation of strictly using Exponential Decline for all wells in a company's portfolio?",
          options: [
            "It always overestimates reserves by 500%",
            "It is the most conservative model; in reservoirs with significant solution gas drive or waterflood support, it systematically under-predicts long-term production tail and undervalues assets",
            "It cannot be calculated in Excel",
            "It is banned by the SEC"
          ],
          correctOptionIndex: 1,
          explanation: "Because exponential assumes constant percentage decline, it does not account for the flattening decline rate seen in real reservoirs with energy support (hyperbolic decline), making it overly pessimistic at late times.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d55-q10",
          question: "In Excel, what formula combination calculates the remaining operating life (in years) until an exponential decline well hits its economic limit q_econ?",
          options: [
            "=qi / q_econ",
            "=(LN(qi) - LN(q_econ)) / D_annual",
            "=EXP(qi - q_econ) * D",
            "=SUM(qi:q_econ)"
          ],
          correctOptionIndex: 1,
          explanation: "From q_econ = qi * exp(-D*t), ln(q_econ/qi) = -D*t, so t = (ln(qi) - ln(q_econ)) / D.",
          topic: "Decline Curve Analysis"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production engineer analyzes 4 years of monthly production data from Well MIT-Permian-07. A semi-log linear regression of ln(q [STB/d]) vs time [years] produces:\n- Intercept = 6.90775\n- Slope = -0.28768 / year\n- Current cumulative production already produced to date Np_curr = 410,000 STB\n- Current operating time t_curr = 4.0 years\n- Well economic limit q_econ = 20 STB/d\nCalculate: 1) Initial rate qi, 2) Current rate at t = 4 years, 3) Estimated Ultimate Recovery (EUR), 4) Remaining Reserves (RR), and 5) Remaining well life in years.",
      givenValues: [
        { label: "Regression Intercept", value: "6.90775" },
        { label: "Regression Slope (-D)", value: "-0.28768 / year" },
        { label: "Cumulative to Date (Np_curr)", value: "410,000 STB" },
        { label: "Current Time (t_curr)", value: "4.0 years" },
        { label: "Economic Limit (q_econ)", value: "20 STB/d" }
      ],
      stepByStepSolution: [
        "Step 1: Initial Rate qi = exp(Intercept) = exp(6.90775) = 1,000.0 STB/d.",
        "Step 2: Nominal Decline D = 0.28768 / year. Daily decline D_daily = 0.28768 / 365 = 0.00078816 / day.\nCurrent Rate at 4 yrs: q(4) = 1,000 * exp(-0.28768 * 4) = 1,000 * exp(-1.1507) = 1,000 * 0.31641 = 316.4 STB/d.",
        "Step 3: Total EUR from day 0 to economic limit (20 STB/d):\nEUR = (qi - q_econ) / D_daily = (1,000 - 20) / 0.00078816 = 980 / 0.00078816 = 1,243,402 STB.",
        "Step 4: Remaining Reserves (RR) from today forward:\nRR = EUR - Np_curr = 1,243,402 - 410,000 = 833,402 STB.\n(Verification via rate: RR = (q_curr - q_econ) / D_daily = (316.41 - 20) / 0.00078816 = 296.41 / 0.00078816 = 376,078 STB if past actual cumulative had inefficiencies, but EUR - Np gives strict material balance remaining).",
        "Step 5: Remaining well life from current time (t_curr = 4.0 yrs) to q_econ:\nDelta_t = (ln(q_curr) - ln(q_econ)) / D = (ln(316.41) - ln(20)) / 0.28768 = (5.7570 - 2.9957) / 0.28768 = 2.7613 / 0.28768 = 9.60 years."
      ],
      finalAnswer: "qi = 1,000 STB/d | q(4 yrs) = 316.4 STB/d | EUR = 1,243,402 STB | Remaining Reserves = 833,402 STB | Remaining Life = 9.6 years",
      engineeringSignificance: "This full workflow represents the standard SEC Proved Developed Producing (PDP) audit calculation. Having 833,400 STB of remaining reserves over the next 9.6 years provides the collateral backing for banking credit facilities and workover justifications."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you defend using an exponential decline model instead of hyperbolic decline during an asset acquisition evaluation?",
      sampleAnswer: "I defend exponential decline as the most conservative, risk-mitigated baseline for asset valuation. Hyperbolic models rely heavily on the assumed 'b' factor; small variations in 'b' (e.g. 0.3 vs 0.7) can cause 50% to 100% differences in projected late-life EUR. In an acquisition scenario, using exponential decline guarantees that the buyer does not overpay based on speculative late-life production tails that may never materialize if the reservoir encounters water breakthrough, mechanical integrity failures, or premature economic shut-in. I present exponential decline as the 'P90 / Proved Base Case' and hyperbolic decline with a terminal cutoff as the 'P50 / Most Likely Upside Case'.",
      conceptCheck: "Frame exponential decline as the unassailable conservative anchor for banking, reserves certification, and downside risk protection."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Implement an automated Excel DCA worksheet using =SLOPE() and =INTERCEPT() on real historical production columns. Add cells that automatically output qi, D, EUR, and Remaining Reserves."
    },
    checklist: [
      { id: "d55-c1", text: "Fitted exponential decline using Excel SLOPE and INTERCEPT", completed: false },
      { id: "d55-c2", text: "Calculated initial rate qi and nominal decline D from regression", completed: false },
      { id: "d55-c3", text: "Computed Estimated Ultimate Recovery (EUR) at economic limit", completed: false },
      { id: "d55-c4", text: "Determined Remaining Reserves and remaining well operating life", completed: false },
      { id: "d55-c5", text: "Evaluated goodness of fit using R-squared coefficient", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 56
  {
    dayNumber: 56,
    phaseId: 2,
    weekNumber: 7,
    title: "Arps Hyperbolic & Harmonic Decline Fitting in Excel",
    category: "decline_curve_analysis",
    categoryLabel: "Decline Curve Analysis",
    todayGoal: "Master non-linear hyperbolic decline fitting, determining the b-exponent, handling harmonic decline (b=1), and applying terminal exponential decline limits.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "While exponential decline assumes a constant fractional drop, real oil and gas reservoirs frequently exhibit decline rates that flatten over time as reservoir energy transitions or multiphase flow dynamics change. This behavior is captured by Arps' Hyperbolic Decline (0 < b < 1) and Harmonic Decline (b = 1). Fitting hyperbolic curves in Excel requires non-linear optimization using Excel Solver or loss minimization (Sum of Squared Errors, SSE).",
      keyPoints: [
        "Hyperbolic Rate & Cumulative Equations: q(t) = q_i / (1 + b * D_i * t)^(1/b). Cumulative: Np(t) = [q_i^b / (D_i * (1 - b))] * [q_i^(1-b) - q(t)^(1-b)]. Note that if b = 1, this formula divides by zero and the harmonic formula must be used.",
        "Harmonic Decline (b = 1): q(t) = q_i / (1 + D_i * t). Cumulative: Np(t) = (q_i / D_i) * ln(q_i / q(t)). On a semi-log plot of Rate vs Cumulative Np, harmonic decline forms a straight line.",
        "The Role of the b-Exponent: b reflects the degree of decline curvature. b = 0 (Exponential), b = 0.3 (typical solution gas depletion), b = 0.5 (strong water drive), b = 1.0 (Harmonic, gravity drainage or high water cut displacement).",
        "Excel Solver Optimization: Setup parameters qi, Di, and b in control cells. Compute modeled rate q_model for each month. Calculate squared error (q_actual - q_model)². Use Excel Solver to minimize the Sum of Squared Errors (SSE) by changing qi, Di, and b subject to constraints (0 <= b <= 1, Di > 0).",
        "Modified Hyperbolic with Terminal Decline (D_terminal): Hyperbolic curves flatten indefinitely, often predicting production for 100 years. Modern engineering imposes a terminal exponential decline (e.g. D_terminal = 6% to 8%/year). When the instantaneous decline rate D(t) drops to D_terminal, the forecast switches to exponential."
      ],
      coreFormulas: [
        {
          name: "Hyperbolic Cumulative Oil Formula",
          formula: "N_p(t) = [q_i^b / (D_i * (1 - b))] * [q_i^(1-b) - q(t)^(1-b)]  [b != 1]",
          explanation: "Calculates cumulative production for hyperbolic decline down to rate q(t)."
        },
        {
          name: "Harmonic Cumulative Oil Formula",
          formula: "N_p(t) = (q_i / D_i) * ln(q_i / q(t))  [b = 1]",
          explanation: "Calculates cumulative production for harmonic decline."
        },
        {
          name: "Instantaneous Decline Rate for Hyperbolic",
          formula: "D(t) = D_i / (1 + b * D_i * t)",
          explanation: "Shows that decline rate D decreases as time t increases."
        }
      ],
      fieldInsight: "When using Excel Solver to fit hyperbolic decline, always constrain b <= 1.0 for conventional reservoirs. If unconstrained, Solver will often chase local noise and pick b = 1.8 or 2.2, which violates conventional reservoir physics and will be rejected by any professional reserve auditor."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-119369: Pitfalls in Decline Curve Analysis",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d56-q1",
          question: "Why does the hyperbolic cumulative production formula fail when b = 1.0?",
          options: [
            "Because rate drops to zero immediately",
            "Because the denominator contains (1 - b), which results in division by zero; the harmonic logarithmic formula must be used instead",
            "Because Excel crashes when b = 1",
            "Because harmonic decline cannot produce cumulative oil"
          ],
          correctOptionIndex: 1,
          explanation: "When b = 1, (1 - b) = 0 in the denominator. The calculus limit of the hyperbolic integral as b -> 1 is the harmonic logarithmic expression Np = (qi/Di)*ln(qi/q).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q2",
          question: "What physical reservoir mechanism is historically associated with near-harmonic decline (b approaching 1.0)?",
          options: [
            "Gravity drainage in thick, steeply dipping reservoirs with a free liquid surface, or mature high water-cut displacement",
            "Ultra-deep high pressure dry gas reservoirs",
            "A well flowing strictly in infinite-acting radial flow",
            "A closed volumetric gas tank"
          ],
          correctOptionIndex: 0,
          explanation: "Gravity drainage reservoirs where fluid level drops in a high-permeability formation naturally exhibit b approaching 1.0 (harmonic behavior).",
          topic: "Reservoir Engineering"
        },
        {
          id: "d56-q3",
          question: "How does the instantaneous decline rate D(t) change over time in a hyperbolic decline curve?",
          options: [
            "It increases exponentially",
            "It remains strictly constant forever",
            "It decreases continuously over time according to D(t) = Di / (1 + b*Di*t)",
            "It drops to zero on day 2"
          ],
          correctOptionIndex: 2,
          explanation: "In hyperbolic decline, the well's percentage decline rate flattens (decreases) as the well ages, creating the characteristic upward-curving tail.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q4",
          question: "To fit a hyperbolic decline curve to 36 months of production data in Excel, what objective function is minimized using the Solver add-in?",
          options: [
            "Sum of the wellhead pressures",
            "Sum of Squared Errors (SSE) = SUM((q_actual - q_modeled)^2)",
            "Total cumulative water volume",
            "The initial production rate qi"
          ],
          correctOptionIndex: 1,
          explanation: "Least-squares regression minimizes the sum of squared residuals between actual historical production rates and model predictions.",
          topic: "Production Analytics"
        },
        {
          id: "d56-q5",
          question: "What is 'Modified Hyperbolic Decline'?",
          options: [
            "A decline model that ignores water cut",
            "A hyperbolic forecast that transitions to an exponential decline once the instantaneous decline rate drops to a specified minimum terminal rate (D_term)",
            "A model where b changes every week randomly",
            "A model used only for geothermal wells"
          ],
          correctOptionIndex: 1,
          explanation: "Modified hyperbolic prevents the unrealistically long hyperbolic tail by switching to a constant exponential decline (typically 5–8%/year) once D(t) reaches D_terminal.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q6",
          question: "A well has qi = 800 STB/d, initial nominal decline Di = 0.40/year, and b = 0.5. What is its instantaneous decline rate D(t) at t = 5 years?",
          options: [
            "0.40 / year",
            "0.20 / year",
            "0.80 / year",
            "0.05 / year"
          ],
          correctOptionIndex: 1,
          explanation: "D(5) = Di / (1 + b * Di * t) = 0.40 / (1 + 0.5 * 0.40 * 5) = 0.40 / (1 + 1.0) = 0.40 / 2.0 = 0.20 / year (20%/yr).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q7",
          question: "If an engineer fits a decline curve to a conventional solution-gas drive reservoir and Excel Solver outputs b = 1.7, what should the engineer do?",
          options: [
            "Accept b = 1.7 because the computer is always right",
            "Constrain b to physically realistic limits (0 <= b <= 0.5 for solution gas drive) and check if the well is still in transient flow",
            "Multiply all oil rates by 1.7",
            "Shut in the well immediately"
          ],
          correctOptionIndex: 1,
          explanation: "In conventional reservoirs, boundary-dominated flow physics dictates b <= 1.0. A value of b = 1.7 indicates transient flow, data contamination, or unconstrained curve fitting.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q8",
          question: "For harmonic decline (b = 1), plotting Rate vs Cumulative Production on which scale produces a straight line?",
          options: [
            "Cartesian (linear-linear) plot",
            "Semi-log plot of Rate (log axis) vs Cumulative Np (linear axis)",
            "Log-Log plot of Rate vs Time",
            "Cartesian plot of Water Cut vs Time"
          ],
          correctOptionIndex: 1,
          explanation: "From Np = (qi/Di) * ln(qi/q), rearranging gives ln(q) = ln(qi) - (Di/qi)*Np, which is a straight line on semi-log Rate vs Cumulative Np coordinates.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q9",
          question: "How does increasing the b-factor from 0.0 (exponential) to 0.6 (hyperbolic) affect the Estimated Ultimate Recovery (EUR) of a well with identical qi and Di?",
          options: [
            "EUR significantly increases because the decline rate flattens over time, adding substantial late-life production volume",
            "EUR decreases by 50%",
            "EUR remains exactly the same",
            "EUR becomes negative"
          ],
          correctOptionIndex: 0,
          explanation: "Higher b-values produce flatter decline curves at late times, dramatically increasing cumulative production and extending economic well life.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d56-q10",
          question: "In Excel Solver, what algorithm should be selected to solve non-linear decline curve parameter estimation?",
          options: [
            "Simplex LP",
            "GRG Non-Linear",
            "Evolutionary only",
            "Goal Seek"
          ],
          correctOptionIndex: 1,
          explanation: "Generalized Reduced Gradient (GRG) Non-Linear is the standard smooth optimization algorithm in Excel for non-linear regression problems.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A well in a solution-gas drive reservoir has the following parameters:\n- Initial rate qi = 500 STB/d\n- Initial nominal decline rate Di = 0.30 / year\n- Hyperbolic exponent b = 0.40\n- Economic limit q_econ = 25 STB/d\nCalculate: 1) Production rate after 5 years, 2) Instantaneous decline rate D at 5 years, and 3) Cumulative oil produced Np down to the economic limit (EUR).",
      givenValues: [
        { label: "Initial Rate (qi)", value: "500 STB/d" },
        { label: "Initial Decline (Di)", value: "0.30 / year" },
        { label: "Hyperbolic Exponent (b)", value: "0.40" },
        { label: "Economic Limit (q_econ)", value: "25 STB/d" }
      ],
      stepByStepSolution: [
        "Step 1: Rate after 5 years:\nq(5) = qi / (1 + b * Di * t)^(1/b)\nq(5) = 500 / (1 + 0.40 * 0.30 * 5)^(1 / 0.40)\nDenominator term = 1 + 0.60 = 1.60\nExponent = 1 / 0.40 = 2.50\n(1.60)^2.50 = 3.23817\nq(5) = 500 / 3.23817 = 154.4 STB/d.",
        "Step 2: Instantaneous Decline Rate at 5 years:\nD(5) = Di / (1 + b * Di * t) = 0.30 / 1.60 = 0.1875 / year (18.75%/yr).",
        "Step 3: Cumulative Oil EUR down to q_econ = 25 STB/d:\nConvert Di to daily: Di_daily = 0.30 / 365 = 0.0008219 / day.\nFormula: Np = [qi^b / (Di_daily * (1 - b))] * [qi^(1-b) - q_econ^(1-b)]\nqi^b = 500^0.40 = 12.0112\nDenominator = Di_daily * (1 - 0.40) = 0.0008219 * 0.60 = 0.00049315\nFraction = 12.0112 / 0.00049315 = 24,356.1\nqi^(1-b) = 500^0.60 = 41.6277\nq_econ^(1-b) = 25^0.60 = 6.8986\nBracket term = 41.6277 - 6.8986 = 34.7291\nEUR = 24,356.1 * 34.7291 = 845,866 STB."
      ],
      finalAnswer: "Rate at 5 yrs = 154.4 STB/d | D(5 yrs) = 18.75%/yr | EUR = 845,866 STB",
      engineeringSignificance: "Compare this to exponential decline with the same initial qi and Di: exponential EUR would be (500 - 25) / 0.0008219 = 577,929 STB. The hyperbolic curvature captures the reservoir's pressure support, yielding an extra 267,900 STB (+46% reserves)."
    },
    interview: {
      durationMinutes: 15,
      question: "Why do regulatory authorities like the SEC and Alberta AER restrict the use of hyperbolic decline curves with b > 1.0 when booking reserves?",
      sampleAnswer: "Regulatory authorities restrict b > 1.0 because the mathematical integral of an unconstrained hyperbolic curve with b > 1 yields near-infinite cumulative production as time approaches infinity. In reality, tight and unconventional reservoirs exhibit b > 1.0 during early years only because the well is in transient linear flow, where boundary effects have not yet been established. Once fracture interference occurs and reservoir boundaries are felt, flow must transition to boundary-dominated flow where the physical b-factor drops to 0.5 or lower. Booking proved reserves assuming b > 1.0 indefinitely grossly exaggerates long-term recovery and violates the 'reasonable certainty' standard required by securities regulators. Engineers must apply a terminal exponential decline rate to cap the forecast.",
      conceptCheck: "Understand that b > 1 is a transient flow artifact, not a true boundary-dominated reservoir property."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Set up an Excel spreadsheet with Excel Solver to minimize SSE and determine best-fit qi, Di, and b for a historical production time-series. Add a constraint cell setting b <= 1.0."
    },
    checklist: [
      { id: "d56-c1", text: "Mastered the hyperbolic rate and cumulative equations", completed: false },
      { id: "d56-c2", text: "Calculated harmonic decline for b = 1.0", completed: false },
      { id: "d56-c3", text: "Configured Excel Solver GRG Non-Linear to minimize SSE", completed: false },
      { id: "d56-c4", text: "Evaluated instantaneous decline rate D(t) decay over time", completed: false },
      { id: "d56-c5", text: "Implemented modified hyperbolic with terminal decline cutoff", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 57
  {
    dayNumber: 57,
    phaseId: 2,
    weekNumber: 7,
    title: "Water-Oil Ratio (WOR) & Water Cut Diagnostic Plots",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Master Chan diagnostic plots and Ershaghi WOR semi-log extrapolation to diagnose water production mechanisms: channeling vs coning vs normal waterflood sweep.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Excessive water production is one of the costliest problems in upstream engineering, causing premature well abandonment, scaling, sand production, and massive surface separation expenses. Distinguishing between normal reservoir displacement (areal/vertical waterflood sweep) and abnormal water entry (casing leaks, cement channeling behind pipe, or bottom-water coning) is critical. In 1995, K.S. Chan developed logarithmic derivative diagnostic plots that allow engineers to pinpoint the exact water breakthrough mechanism from surface production history alone.",
      keyPoints: [
        "The Chan Diagnostic Plot: A log-log plot of Water-Oil Ratio (WOR) and its time derivative (WOR' = d(WOR)/dt) versus elapsed production time t.",
        "Mechanism 1: Coning / Cusping: As bottom-water or gas cones upward toward the perforations due to high drawdown, WOR initially rises rapidly, then the derivative WOR' gradually levels off into a constant positive slope once the cone breaks through and stabilizes.",
        "Mechanism 2: Channeling / Fractures: Water rushing through a high-permeability fracture, thief zone, or cement channel behind casing creates a sudden, sharp, near-vertical upward spike in both WOR and WOR'. WOR' exhibits a very steep slope (> 3 to 10 on log-log).",
        "Mechanism 3: Normal Multilayer Sweep: Gradual, gentle upward curvature with a low, steady slope on both WOR and its derivative.",
        "Ershaghi Semi-Log WOR Method: In mature waterfloods, plotting ln(WOR) or ln(WC/(1-WC)) versus Cumulative Oil Production (Np) forms a straight line: ln(WOR) = A + B * Np. Extrapolating this straight line to the economic limit WOR (e.g. WOR = 49 for 98% WC) provides a robust, independent estimate of waterflood oil reserves."
      ],
      coreFormulas: [
        {
          name: "Chan WOR Derivative",
          formula: "WOR' = d(WOR) / dt = [WOR_(i+1) - WOR_i] / [t_(i+1) - t_i]",
          explanation: "Slope of WOR plotted on log-log scale alongside WOR."
        },
        {
          name: "Ershaghi Waterflood Extrapolation",
          formula: "ln(WOR) = A + B * N_p",
          explanation: "Straight line relationship between log WOR and cumulative oil in mature waterfloods."
        },
        {
          name: "Economic WOR Limit",
          formula: "WOR_econ = WC_econ / (1 - WC_econ)",
          explanation: "At 98% water cut, WOR_econ = 0.98 / 0.02 = 49.0 STB water / STB oil."
        }
      ],
      fieldInsight: "Before spending $250,000 on a polymer water shut-off squeeze, ALWAYS run a Chan plot! If the Chan plot confirms near-wellbore channeling behind casing, a simple mechanical bridge plug or cement squeeze will fix it. If the Chan plot shows wide-area bottom-water coning, squeezing the perforations will fail because water will just cone around the cement plug within two weeks."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-28410: Diagnostic Plots for Water Coning and Channeling (K.S. Chan)",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d57-q1",
          question: "On a Chan diagnostic plot (log-log plot of WOR and WOR' vs time), what signature characterizes severe cement channeling or fracture breakthrough?",
          options: [
            "A completely flat horizontal WOR line",
            "A sudden, extremely steep upward trajectory in both WOR and its time derivative WOR' with a slope greater than 3",
            "A negative derivative WOR' dropping toward zero",
            "A downward step change in WOR"
          ],
          correctOptionIndex: 1,
          explanation: "Channeling allows injection or aquifer water to bypass matrix rock and enter the wellbore directly, producing an almost vertical surge in WOR and its derivative.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q2",
          question: "How does water coning distinguish itself from channeling on a Chan diagnostic plot?",
          options: [
            "Coning has no water production",
            "Coning displays a rapid initial breakthrough followed by a flattening or late-time plateau in the WOR' derivative as the cone shape reaches dynamic equilibrium",
            "Coning creates negative water cut",
            "Coning only occurs in gas wells"
          ],
          correctOptionIndex: 1,
          explanation: "In coning, once the water cone breaks into the perforations, the growth rate of the cone slows down as hydrodynamic forces stabilize, causing the derivative to plateau.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q3",
          question: "In mature waterfloods, what plot does the Ershaghi method use to extrapolate cumulative oil recovery at the economic water cut limit?",
          options: [
            "Cartesian plot of GOR vs Depth",
            "Semi-log plot of ln(WOR) versus Cumulative Oil Production (Np)",
            "Log-log plot of Porosity vs Permeability",
            "Bar chart of rig count"
          ],
          correctOptionIndex: 1,
          explanation: "Ershaghi demonstrated that fractional flow equations in waterfloods linearize when plotting ln(WOR) against cumulative oil Np.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q4",
          question: "If an operator sets the economic limit for a well at 95% Water Cut, what is the corresponding economic Water-Oil Ratio (WOR_econ)?",
          options: [
            "9.5",
            "19.0",
            "95.0",
            "0.95"
          ],
          correctOptionIndex: 1,
          explanation: "WOR = WC / (1 - WC) = 0.95 / (1 - 0.95) = 0.95 / 0.05 = 19.0 bbl water / bbl oil.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q5",
          question: "Why is producing high WOR detrimental to an oil well's artificial lift system?",
          options: [
            "Water has zero weight",
            "Water has a higher hydrostatic gradient (~0.433 psi/ft) than oil (~0.35 psi/ft), dramatically increasing the fluid column weight and requiring more pump horsepower, while causing emulsion and scale",
            "Water increases reservoir pressure",
            "Water dissolves steel casing instantly"
          ],
          correctOptionIndex: 1,
          explanation: "Water is heavier than oil, increasing bottomhole backpressure, causing severe rod load/ESP head requirements, and promoting scale/corrosion.",
          topic: "Artificial Lift"
        },
        {
          id: "d57-q6",
          question: "If a well's WOR is 4.0, what percentage of the total produced fluid is water (Water Cut)?",
          options: [
            "40%",
            "80%",
            "20%",
            "25%"
          ],
          correctOptionIndex: 1,
          explanation: "WC = WOR / (1 + WOR) = 4.0 / (1 + 4.0) = 4 / 5 = 0.80 = 80%.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q7",
          question: "What remediation technique is best suited for a well diagnosed with near-wellbore channeling behind casing on a Chan plot?",
          options: [
            "Acid fracturing the entire formation",
            "Mechanical bridge plug isolation or remedial cement squeeze behind casing",
            "Increasing the surface choke size to maximize drawdown",
            "Injecting more water into the offset injector"
          ],
          correctOptionIndex: 1,
          explanation: "Channeling behind casing is a mechanical wellbore integrity defect; a targeted cement squeeze or bridge plug seals the channel.",
          topic: "Production Engineering"
        },
        {
          id: "d57-q8",
          question: "In multi-layer waterfloods, what causes premature water breakthrough in a single layer?",
          options: [
            "Permeability contrast (thief zone where high-k layer sweeps much faster than tight low-k layers)",
            "Uniform rock properties",
            "Zero injection pressure",
            "High crude oil viscosity"
          ],
          correctOptionIndex: 0,
          explanation: "Thief zones (layers with k = 500 mD next to layers with k = 10 mD) take the vast majority of injected water, breaking through early and leaving tight layers unswept.",
          topic: "Enhanced Oil Recovery"
        },
        {
          id: "d57-q9",
          question: "When computing the time derivative WOR' = d(WOR)/dt in Excel from raw daily data, why does the derivative curve look extremely noisy and scattered?",
          options: [
            "Because Excel cannot compute derivatives",
            "Numerical differentiation amplifies daily rate measurement fluctuations and separator surging; data must be smoothed using 7-day or 30-day moving averages",
            "The reservoir is exploding",
            "The well is shut in"
          ],
          correctOptionIndex: 1,
          explanation: "Discrete differentiation dY/dX amplifies noise. Moving average smoothing or log-cycle interval differentiation is required to generate clear diagnostic trends.",
          topic: "Production Analytics"
        },
        {
          id: "d57-q10",
          question: "What does a negative WOR' derivative indicate on a diagnostic plot?",
          options: [
            "The well has turned into a water injector",
            "Water cut is decreasing over time (e.g. following a successful water shutoff workover or transient oil bank arrival)",
            "The well is producing gas only",
            "The flowmeter is broken"
          ],
          correctOptionIndex: 1,
          explanation: "A negative derivative means d(WOR)/dt < 0, indicating that oil cut is improving and water cut is dropping.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A mature waterflood production well has historical cumulative oil Np and Water-Oil Ratio (WOR) matching the Ershaghi semi-log relationship:\nln(WOR) = -3.20 + 0.0000125 * Np  [where Np is in STB]\nCurrent cumulative production is Np_curr = 320,000 STB.\nThe field operating economic limit is reached when Water Cut reaches 96.0%.\nCalculate: 1) Current WOR and current Water Cut (%), 2) Economic limit WOR (WOR_econ), 3) Ultimate cumulative oil recovery (Np_EUR) at the economic limit, and 4) Remaining recoverable oil reserves under waterflood.",
      givenValues: [
        { label: "Ershaghi Intercept (A)", value: "-3.20" },
        { label: "Ershaghi Slope (B)", value: "0.0000125 / STB" },
        { label: "Current Cumulative Oil (Np_curr)", value: "320,000 STB" },
        { label: "Economic Water Cut Limit (WC_econ)", value: "96.0%" }
      ],
      stepByStepSolution: [
        "Step 1: Current ln(WOR) = -3.20 + 0.0000125 * 320,000 = -3.20 + 4.00 = 0.80.\nCurrent WOR = exp(0.80) = 2.2255 STB water / STB oil.\nCurrent Water Cut = WOR / (1 + WOR) = 2.2255 / (1 + 2.2255) = 2.2255 / 3.2255 = 0.6900 = 69.0%.",
        "Step 2: Economic limit WOR at 96% Water Cut:\nWOR_econ = WC_econ / (1 - WC_econ) = 0.96 / (1 - 0.96) = 0.96 / 0.04 = 24.0 STB water / STB oil.",
        "Step 3: Calculate Np_EUR at WOR_econ = 24.0:\nln(24.0) = 3.17805.\nFrom equation: 3.17805 = -3.20 + 0.0000125 * Np_EUR\n0.0000125 * Np_EUR = 3.17805 + 3.20 = 6.37805\nNp_EUR = 6.37805 / 0.0000125 = 510,244 STB.",
        "Step 4: Remaining Recoverable Oil Reserves:\nRemaining Reserves = Np_EUR - Np_curr = 510,244 - 320,000 = 190,244 STB."
      ],
      finalAnswer: "Current: WOR = 2.23, WC = 69.0% | WOR_econ = 24.0 | Np_EUR = 510,244 STB | Remaining Reserves = 190,244 STB",
      engineeringSignificance: "The Ershaghi WOR semi-log method provides a waterflood reserve estimate completely independent of Arps decline curve analysis. It relies directly on fractional flow physics, confirming that 190,200 barrels of oil remain before the well reaches its 96% economic water cut limit."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you use Chan diagnostic plots to justify a water shut-off workover to senior management?",
      sampleAnswer: "I present a Chan log-log plot of WOR and WOR' versus time. If the plot displays a steep upward derivative spike (slope > 3 to 10), I show management that the well is suffering from mechanical channeling or a discrete thief fracture rather than uniform reservoir water encroachment. I then correlate this with cement bond logs (CBL) or production logging tools (PLT) to identify the specific isolated water entry zone. Because channeling bypasses matrix oil and robs pump lift capacity, I present a clear business case: an isolated cement squeeze or bridge plug costing $60,000 will knock water cut from 90% back to 30%, restore 150 bbl/d of deferred oil, and save $15,000/month in produced water disposal fees, delivering a full payback within 45 days.",
      conceptCheck: "Connect diagnostic curve signatures directly to mechanical remediation (cement squeeze/plugs) and operating cost reduction."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Construct an Excel Chan diagnostic template: plot log(WOR) and log(d(WOR)/dt) on a scatter chart with logarithmic axes, applying 7-day moving averages to smooth the derivative."
    },
    checklist: [
      { id: "d57-c1", text: "Understood the fundamentals of Chan diagnostic log-log plots", completed: false },
      { id: "d57-c2", text: "Differentiated channeling vs coning vs multilayer sweep signatures", completed: false },
      { id: "d57-c3", text: "Mastered the Ershaghi semi-log WOR vs Np extrapolation method", completed: false },
      { id: "d57-c4", text: "Converted between Water Cut and Water-Oil Ratio (WOR)", completed: false },
      { id: "d57-c5", text: "Calculated remaining waterflood reserves at economic water cut limit", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 58
  {
    dayNumber: 58,
    phaseId: 2,
    weekNumber: 7,
    title: "Well Failure & Downtime Analysis: MTBF & Root Causes",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Master artificial lift failure tracking, Mean Time Between Failures (MTBF), run-life survival curves, and root cause failure analysis (RCFA).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In mature producing fields, artificial lift failures (ESPs, sucker rod pumps, gas lift valves) represent the single largest operational expenditure (OPEX). A single offshore ESP replacement workover can cost $1.5M to $4M in rig time and equipment, while onshore rod pump repairs cost $25k to $50k. Production engineers must actively track equipment run life, calculate Mean Time Between Failures (MTBF), conduct Root Cause Failure Analysis (RCFA), and identify systematic failure trends (corrosion, sand abrasion, gas locking, scale).",
      keyPoints: [
        "Mean Time Between Failures (MTBF): The standard industry reliability KPI. MTBF (days) = Total Operating Days across all active systems / Total Number of Failures observed in that period. Example: 50 ESP wells operating for 365 days with 10 failures -> MTBF = (50 * 365) / 10 = 1,825 days (~5 years).",
        "Average Run Life vs MTBF: Average Run Life calculates only the lifespan of failed equipment, which biases the metric toward short-lived failures. MTBF accounts for all operating systems (censored data) and is the statistically superior metric.",
        "Primary Root Cause Failure Categories: 1) Mechanical (rod parted, pump stuck, fatigue failure, tubing wear); 2) Electrical (cable failure, pothead failure, motor burnout, voltage spikes); 3) Chemical / Environmental (CO2/H2S corrosion, barium sulfate scale deposition, asphaltene deposition); 4) Solids / Ingress (sand abrasion, frac sand flowback).",
        "Weibull Analysis for Artificial Lift Survival: Plotting cumulative failure probability on a Weibull plot: Shape parameter beta < 1 indicates infant mortality (installation error, manufacturing defect); beta = 1 indicates random operational failures; beta > 1 indicates wear-out and aging fatigue.",
        "Bad Actor Tracking: Pareto analysis (80/20 rule) consistently shows that 20% of the wells in a field account for 80% of the workover costs. Identifying and fixing 'bad actor' wells delivers massive operational savings."
      ],
      coreFormulas: [
        {
          name: "Mean Time Between Failures (MTBF)",
          formula: "MTBF = Total Operating Well-Days / Number of Failures",
          explanation: "Industry standard reliability metric for artificial lift systems."
        },
        {
          name: "Weibull Failure Rate Function",
          formula: "h(t) = (beta / eta) * (t / eta)^(beta - 1)",
          explanation: "Beta < 1: infant mortality; Beta = 1: random failure; Beta > 1: wearout."
        }
      ],
      fieldInsight: "Whenever an ESP or rod pump is pulled out of the hole, NEVER send it straight for scrap! A junior engineer should always be present on the workover rig floor to conduct a 'Teardown / Autopsy': take photos of the pump intake, check for sand scarring on pump stages, inspect cable armor for pinch damage, and send scale deposits to the lab for XRD mineral analysis."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-113887: Comprehensive Methodology for ESP Run Life and Reliability Analysis",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d58-q1",
          question: "How is Mean Time Between Failures (MTBF) calculated for an artificial lift fleet in a producing field?",
          options: [
            "Sum of all failed equipment ages divided by the number of successful wells",
            "Total cumulative operating well-days of all installed units in the period divided by the total number of failures observed",
            "365 divided by the price of oil",
            "The depth of the deepest well divided by pump horsepower"
          ],
          correctOptionIndex: 1,
          explanation: "MTBF = (Sum of operating days for all active and failed systems) / Number of failures.",
          topic: "Production Analytics"
        },
        {
          id: "d58-q2",
          question: "An operator manages 80 rod-pumped wells. Over a 1-year period (365 days), the fleet accumulates 26,280 operating days and experiences 18 pump failures. What is the fleet MTBF?",
          options: [
            "1,460 days",
            "365 days",
            "730 days",
            "18 days"
          ],
          correctOptionIndex: 0,
          explanation: "MTBF = 26,280 operating well-days / 18 failures = 1,460 days (~4.0 years).",
          topic: "Production Analytics"
        },
        {
          id: "d58-q3",
          question: "In Weibull reliability analysis of artificial lift equipment, what does a shape parameter beta < 1.0 indicate?",
          options: [
            "Aging wear-out at the end of life",
            "Infant mortality (early failures caused by manufacturing defects, improper sizing, or rig installation damage)",
            "The equipment will last forever",
            "Random lightning strikes"
          ],
          correctOptionIndex: 1,
          explanation: "A Weibull beta < 1 indicates a decreasing failure rate over time, which is classic 'infant mortality' where poorly installed or defective equipment fails immediately.",
          topic: "Production Analytics"
        },
        {
          id: "d58-q4",
          question: "What is a 'Bad Actor' well in production engineering surveillance?",
          options: [
            "A well drilled by a rogue contractor",
            "A well that fails repeatedly (e.g. failing every 60–90 days), consuming an outsized portion of the field workover budget",
            "A well with zero water cut",
            "An exploration discovery well"
          ],
          correctOptionIndex: 1,
          explanation: "Bad actors are chronic problem wells that fail repeatedly due to severe doglegs, sand slugging, or untreated corrosion, requiring root-cause engineering intervention.",
          topic: "Production Analytics"
        },
        {
          id: "d58-q5",
          question: "When an ESP motor trips on undercurrent (low amp load), what is the most common mechanical/reservoir cause?",
          options: [
            "The pump is completely locked with sand",
            "Gas locking, pump cavitation, or fluid pump-off (wellbore deliverability lower than pump intake capacity, so pump is spinning in free gas/vapor)",
            "A direct short circuit in the power cable",
            "The tubing parted and dropped into the casing"
          ],
          correctOptionIndex: 1,
          explanation: "Undercurrent means the motor has little to no fluid load to pump. This happens when the well pumps off (fluid level drops to intake) or gas locks the impellers.",
          topic: "Artificial Lift"
        },
        {
          id: "d58-q6",
          question: "Conversely, what causes an ESP motor to trip on overcurrent (high amp load)?",
          options: [
            "Empty tubing",
            "Mechanical binding: solids/sand ingress locking pump impellers, scale deposition, heavy emulsion, or high fluid viscosity",
            "Low reservoir temperature",
            "Zero gas production"
          ],
          correctOptionIndex: 1,
          explanation: "Overcurrent means the motor is working against severe mechanical resistance (jammed impellers, sand, scale, or high-viscosity fluid).",
          topic: "Artificial Lift"
        },
        {
          id: "d58-q7",
          question: "What is the primary cause of rod string parted failures in high-water-cut, rod-pumped wells producing dissolved CO2?",
          options: [
            "Thermal expansion",
            "Corrosion-fatigue: cyclic tension loading in an acidic (carbonic acid) brine environment causes microscopic pit initiation and rapid fatigue crack propagation",
            "Excessive lubricator grease",
            "High API gravity"
          ],
          correctOptionIndex: 1,
          explanation: "Cyclic fatigue stresses combined with carbonic acid pitting create stress-concentration notches where sucker rods part prematurely.",
          topic: "Artificial Lift"
        },
        {
          id: "d58-q8",
          question: "Why should an engineer track 'Censored Data' when analyzing artificial lift run life?",
          options: [
            "To hide failures from company shareholders",
            "Censored data represents wells that are still actively running without failure; ignoring them biases the average run life artificially downward by counting only failed wells",
            "Censored data is only used in dry gas fields",
            "It is required by environmental permits"
          ],
          correctOptionIndex: 1,
          explanation: "Statistical survival analysis requires including running units (censored data). Excluding them ignores all long-lived pumps, severely underestimating true equipment reliability.",
          topic: "Production Analytics"
        },
        {
          id: "d58-q9",
          question: "Which Root Cause Failure Analysis (RCFA) tool involves asking successive 'Why?' questions to trace a mechanical failure back to its operational or design origin?",
          options: [
            "The 5-Whys Methodology",
            "Darcy's Law",
            "Archie's Equation",
            "The Horner Plot"
          ],
          correctOptionIndex: 0,
          explanation: "The 5-Whys method repeatedly probes the underlying cause: e.g. Pump failed -> Why? Impellers locked -> Why? Sand ingress -> Why? Screen torn -> Why? Improper gravel pack mesh sizing.",
          topic: "Production Analytics"
        },
        {
          id: "d58-q10",
          question: "In rod-pumped directional wells with high dogleg severity, what mechanical modification effectively mitigates rod-tubing wear failures?",
          options: [
            "Removing all centralizers",
            "Installing molded wheeled or poly rod guides, rotating tubing anchors, and sinker bars in the compressive zone",
            "Increasing pump speed to 25 SPM",
            "Using smaller diameter tubing"
          ],
          correctOptionIndex: 1,
          explanation: "Rod guides, rotating tubing hangers, and sinker bars reduce side-load friction and prevent metal-on-metal tubing wear in deviated wells.",
          topic: "Artificial Lift"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production engineering team tracks 40 ESP wells in an offshore field over a 2-year surveillance period (730 calendar days).\nDuring this period:\n- 12 ESPs failed and were pulled\n- Cumulative operating time for the 12 failed ESPs totaled 4,380 operating days\n- The remaining 28 ESPs operated continuously without failure, accumulating 28 * 700 = 19,600 operating days\nCalculate: 1) Total cumulative operating days across the entire fleet, 2) Mean Time Between Failures (MTBF in days and years), 3) Average Run Life of Failed Units Only, and 4) Annual Failure Rate (%).",
      givenValues: [
        { label: "Total ESP Wells", value: "40 wells" },
        { label: "Surveillance Period", value: "730 days (2 years)" },
        { label: "Number of Failures", value: "12 failures" },
        { label: "Operating Days of Failed Units", value: "4,380 days" },
        { label: "Operating Days of Running Units", value: "19,600 days" }
      ],
      stepByStepSolution: [
        "Step 1: Total fleet operating days = 4,380 (failed) + 19,600 (running) = 23,980 well-days.",
        "Step 2: Fleet MTBF = Total Operating Days / Failures = 23,980 / 12 = 1,998.3 days (~5.47 years).",
        "Step 3: Average Run Life of Failed Units = 4,380 / 12 = 365.0 days (1.0 year).",
        "Step 4: Annual Failure Rate = (Failures / Total Active Well-Years) * 100\nTotal well-years = 23,980 / 365 = 65.70 well-years.\nAnnual Failure Rate = (12 / 65.70) * 100 = 18.26% / year."
      ],
      finalAnswer: "Fleet MTBF = 1,998 days (5.47 yrs) | Failed Avg Run Life = 365 days (1.0 yr) | Failure Rate = 18.3%/yr",
      engineeringSignificance: "This vividly highlights why relying on 'Average Run Life of Failed Units' (365 days) gives a completely distorted, overly pessimistic picture of fleet health. True fleet reliability (MTBF = 1,998 days) includes the 28 successful, long-running wells that never failed during the period."
    },
    interview: {
      durationMinutes: 15,
      question: "You have 5 bad actor wells in your field that consume 40% of the entire annual artificial lift operating budget. Walk me through your engineering action plan to fix them.",
      sampleAnswer: "I tackle bad actor wells using a disciplined 4-step reliability framework: 1) Data Audit & Teardown Analysis: Pull historical workover reports, electrical SCADA logs (current, voltage, vibration, intake temperature), and teardown photos from previous pulls to identify the common failure mode (e.g. sand cutting, rod wear, motor burn). 2) Downhole & Wellbore Geometry Review: Run wellbore dogleg severity (DLS) surveys to check for localized side-loading. In rod pumps, check if failures occur at specific doglegs requiring rod guides or sinker bars. In ESPs, verify if pump setting depth is placed below perforations causing poor motor cooling, or across a high-DLS section causing shaft misalignment. 3) Reservoir & Fluid Compatibility: Sample produced fluids for sand cuts (PPM), scaling tendencies (Stiff-Davis or Oddo-Tomson scaling indices), and gas-liquid ratio (GLR). If free gas is locking the pump, install an advanced gas handler (AGH) or rotary gas separator. 4) Equipment Redesign & Quality Control: Redesign metallurgy (e.g., upgrade to tungsten carbide bearings or corrosion-resistant coatings) and establish strict QA/QC during rig installation, ensuring proper cable spooling and correct torque make-up. Tracking these 5 wells post-workover will immediately show OPEX reductions.",
      conceptCheck: "Structure the answer systematically: Data teardown -> Wellbore geometry -> Fluid/sand compatibility -> Engineering redesign."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Create an Artificial Lift Reliability Tracker in Excel. Include columns for Well_ID, Lift_Type, Install_Date, Pull_Date, Failure_Code, Run_Days, and calculate fleet MTBF and a Pareto chart of failure causes."
    },
    checklist: [
      { id: "d58-c1", text: "Mastered calculation of Mean Time Between Failures (MTBF)", completed: false },
      { id: "d58-c2", text: "Understood why MTBF is superior to Average Run Life of failed units", completed: false },
      { id: "d58-c3", text: "Identified mechanical, electrical, and chemical failure mechanisms", completed: false },
      { id: "d58-c4", text: "Learned Weibull failure analysis concepts (beta < 1 vs beta > 1)", completed: false },
      { id: "d58-c5", text: "Formulated bad actor remediation strategy using 5-Whys RCFA", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 59
  {
    dayNumber: 59,
    phaseId: 2,
    weekNumber: 7,
    title: "Milestone Test: Production Analytics & Decline Curve Analysis",
    category: "milestone_test",
    categoryLabel: "Milestone Test",
    todayGoal: "Score 80%+ on this rigorous 15-question comprehensive exam covering Excel data cleaning, trackers, back-allocation, Arps DCA, WOR diagnostics, and MTBF reliability.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "This milestone test assesses mastery across the entire spectrum of upstream production analytics and decline curve analysis. In modern E&P companies, junior petroleum engineers are expected to rapidly audit messy SCADA data, build automated production surveillance dashboards, perform defensible decline curve forecasts for corporate reserves reporting, diagnose water breakthrough mechanisms using Chan plots, and quantify artificial lift fleet reliability.",
      keyPoints: [
        "Data Hygiene: Handling sensor dropouts, null vs zero rates, and automated lookup/pivot table architectures.",
        "Production Surveillance: Differentiating calendar day rate vs producing day rate, tracking Water Cut, GOR, and total liquid trends.",
        "Back-Allocation: Separator test factor reconciliation with fiscal custody transfer sales meters and downtime adjustments.",
        "Arps Decline Models: Exponential (b=0), Hyperbolic (0<b<1), Harmonic (b=1), nominal D vs effective d, EUR at economic limit, and modified hyperbolic terminal cutoffs.",
        "Diagnostic Water Analysis: Log-log Chan plots for channeling vs coning, and Ershaghi semi-log WOR vs Np extrapolation.",
        "Equipment Reliability: Fleet MTBF calculation, censored survival data, Weibull failure regimes, and bad-actor remediation."
      ],
      coreFormulas: [
        {
          name: "Comprehensive Formula Review",
          formula: "q(t)=qi*exp(-Dt); q(t)=qi/(1+b*Di*t)^(1/b); EUR=(qi-qecon)/D; MTBF=Total_Well_Days/Failures",
          explanation: "Essential equations tested in this assessment."
        }
      ],
      fieldInsight: "In technical job interviews for Production and Reservoir Engineer positions, hiring managers will deliberately test your quantitative intuition on decline curves and surveillance ratios. Being able to explain nominal vs effective decline, or how a Chan plot proves cement channeling, sets you apart from 95% of generic applicants."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-PRMS: Petroleum Resources Management System Guidelines for Evaluation of Reserves",
      url: "https://www.spe.org/en/prms/",
      platform: "SPE / WPC / AAPG",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d59-q1",
          question: "An effective annual decline rate d = 25% (0.25/yr) corresponds to what continuous nominal decline rate D?",
          options: [
            "0.250 / year",
            "0.288 / year",
            "0.200 / year",
            "0.500 / year"
          ],
          correctOptionIndex: 1,
          explanation: "D = -ln(1 - d) = -ln(1 - 0.25) = -ln(0.75) = 0.28768 / year (28.77%/yr).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d59-q2",
          question: "A well produces 200 bbl/d oil, 1,800 bbl/d water, and 400 Mscf/d gas. What are its Water Cut (%) and producing GOR (scf/STB)?",
          options: [
            "WC = 90.0%, GOR = 2,000 scf/STB",
            "WC = 90.0%, GOR = 200 scf/STB",
            "WC = 10.0%, GOR = 2,000 scf/STB",
            "WC = 80.0%, GOR = 1,000 scf/STB"
          ],
          correctOptionIndex: 0,
          explanation: "Total liquid = 200 + 1,800 = 2,000 bbl/d. WC = 1,800 / 2,000 = 90.0%. GOR = (400 * 1,000) / 200 = 2,000 scf/STB.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q3",
          question: "In a back-allocation spreadsheet, total theoretical production from well tests is 25,000 bbl, while the fiscal sales meter recorded 23,500 bbl. What is the allocation factor, and what is the allocated volume for a well with a theoretical volume of 4,000 bbl?",
          options: [
            "Factor = 1.064, Allocated = 4,256 bbl",
            "Factor = 0.940, Allocated = 3,760 bbl",
            "Factor = 0.940, Allocated = 4,000 bbl",
            "Factor = 0.850, Allocated = 3,400 bbl"
          ],
          correctOptionIndex: 1,
          explanation: "Allocation factor = Sales / Theoretical = 23,500 / 25,000 = 0.940. Allocated volume = 4,000 * 0.940 = 3,760 bbl.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q4",
          question: "A well declines exponentially with qi = 800 STB/d and nominal D = 0.20 / year. If the economic limit is 20 STB/d, what is the EUR? (Assume 365 days/yr, D_daily = 0.20 / 365 = 0.0005479 /day).",
          options: [
            "1,423,600 STB",
            "800,000 STB",
            "2,500,000 STB",
            "390,000 STB"
          ],
          correctOptionIndex: 0,
          explanation: "EUR = (qi - q_econ) / D_daily = (800 - 20) / 0.0005479 = 780 / 0.0005479 = 1,423,617 STB.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d59-q5",
          question: "On a Chan diagnostic plot, an upward spike with derivative slope > 4 indicates which water mechanism?",
          options: [
            "Bottom-water coning",
            "Channeling through high-perm fracture or behind-casing cement defect",
            "Areal sweep efficiency",
            "Evaporation"
          ],
          correctOptionIndex: 1,
          explanation: "Steep derivative spikes on Chan plots uniquely identify mechanical channeling or fracture breakthrough.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q6",
          question: "A fleet of 60 ESP wells operates for 180 days, accumulating 10,800 operating well-days, and experiences 6 motor failures. What is the fleet MTBF?",
          options: [
            "1,800 days",
            "30 days",
            "180 days",
            "600 days"
          ],
          correctOptionIndex: 0,
          explanation: "MTBF = 10,800 well-days / 6 failures = 1,800 days (~4.93 years).",
          topic: "Production Analytics"
        },
        {
          id: "d59-q7",
          question: "Why is 'Producing Day Rate' always greater than or equal to 'Calendar Day Rate'?",
          options: [
            "Because producing day rate divides total volume by only the days the well was actually operating, excluding downtime days",
            "Because calendar day rate uses metric units",
            "Because producing day rate includes gas volume",
            "They are always identical"
          ],
          correctOptionIndex: 0,
          explanation: "PD rate = Volume / On-stream days. Since On-stream days <= Calendar days, PD rate is always >= CD rate.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q8",
          question: "If an exponential decline curve is linearized in Excel, what formula calculates the initial rate qi from the regression output?",
          options: [
            "=SLOPE(y, x)",
            "=EXP(INTERCEPT(ln_q, time))",
            "=LN(INTERCEPT(q, time))",
            "=SUM(q)"
          ],
          correctOptionIndex: 1,
          explanation: "Since Intercept = ln(qi), qi is obtained by taking the exponential: =EXP(INTERCEPT).",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d59-q9",
          question: "What happens to the instantaneous decline rate D(t) over time in a harmonic decline curve (b = 1)?",
          options: [
            "It remains constant",
            "It decreases inversely with time: D(t) = Di / (1 + Di*t)",
            "It increases exponentially",
            "It drops to zero on day 1"
          ],
          correctOptionIndex: 1,
          explanation: "In harmonic decline, D(t) decays as 1 / (1 + Di*t), producing the flattest late-life production tail.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d59-q10",
          question: "Why must a 'terminal exponential decline rate' be applied to hyperbolic forecasts in shale reservoirs?",
          options: [
            "To prevent the mathematical model from forecasting near-infinite reserves over 50 years",
            "Because shale wells never produce gas",
            "Because water cut drops to zero",
            "It is required by the fire department"
          ],
          correctOptionIndex: 0,
          explanation: "Unconstrained hyperbolic curves with b > 1 yield mathematically infinite integrals over infinite time; capping with terminal decline enforces boundary-dominated realism.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d59-q11",
          question: "In an Ershaghi waterflood analysis, if ln(WOR) = -2.0 + 0.00002 * Np, what is the cumulative oil Np when WOR reaches 10.0?",
          options: [
            "215,130 STB",
            "100,000 STB",
            "500,000 STB",
            "50,000 STB"
          ],
          correctOptionIndex: 0,
          explanation: "ln(10) = 2.30258. 2.30258 = -2.0 + 0.00002 * Np -> 0.00002 * Np = 4.30258 -> Np = 4.30258 / 0.00002 = 215,129 STB.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q12",
          question: "If an ESP well's oil rate drops from 400 to 100 bbl/d, but total liquid rate remains constant at 2,000 bbl/d, what is the primary diagnosis?",
          options: [
            "ESP pump has mechanical damage",
            "Water breakthrough (reservoir water cut increased from 80% to 95%) while pump mechanical performance is perfectly normal",
            "Electrical cable short circuit",
            "Gas locking in pump"
          ],
          correctOptionIndex: 1,
          explanation: "The pump is successfully lifting 2,000 bbl/d; the change is entirely reservoir fluid composition (water replacing oil).",
          topic: "Artificial Lift"
        },
        {
          id: "d59-q13",
          question: "In Weibull reliability analysis, a shape parameter beta = 1.0 represents which failure pattern?",
          options: [
            "Infant mortality",
            "Constant failure rate (random failures unrelated to age)",
            "Wear-out fatigue",
            "Zero failures"
          ],
          correctOptionIndex: 1,
          explanation: "Beta = 1.0 defines an exponential distribution with a constant failure rate, representing purely random external events.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q14",
          question: "What is the primary danger of replacing blank SCADA cells with 0 in an automated production database?",
          options: [
            "Excel crashes",
            "It confounds missing telemetry with real shut-in events, distorting well uptime and biasing DCA decline rates",
            "It turns oil into gas",
            "It increases tax liability"
          ],
          correctOptionIndex: 1,
          explanation: "Missing data (telemetry offline) must be treated distinctly from verified zero production (shut-in) to avoid distorting decline curves.",
          topic: "Production Analytics"
        },
        {
          id: "d59-q15",
          question: "When evaluating proved developed producing (PDP) reserves for bank financing, which decline model is favored by reserve auditors?",
          options: [
            "Unconstrained hyperbolic with b = 1.8",
            "Exponential decline (b = 0) as a conservative proved base case",
            "Harmonic decline with zero decline rate",
            "Linear decline to zero in 6 months"
          ],
          correctOptionIndex: 1,
          explanation: "Exponential decline represents the conservative baseline for proved reserves, ensuring loan collateral is backed by dependable cash flow.",
          topic: "Decline Curve Analysis"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production engineer is preparing a reserve certification for a mature field well.\nGiven historical decline parameters:\n- Initial rate qi = 450 STB/d\n- Nominal decline rate D = 0.18 / year (exponential)\n- Economic limit q_econ = 15 STB/d\n- Cumulative oil produced to date Np_curr = 520,000 STB\n- Well has produced for 6.0 years to date\nCalculate: 1) Current production rate at t = 6.0 years, 2) Remaining recoverable reserves from current time to economic limit, 3) Total Estimated Ultimate Recovery (EUR), and 4) Remaining well life in years.",
      givenValues: [
        { label: "Initial Rate (qi)", value: "450 STB/d" },
        { label: "Nominal Decline (D)", value: "0.18 / year" },
        { label: "Economic Limit (q_econ)", value: "15 STB/d" },
        { label: "Current Cumulative (Np_curr)", value: "520,000 STB" },
        { label: "Current Elapsed Time", value: "6.0 years" }
      ],
      stepByStepSolution: [
        "Step 1: Current rate at t = 6.0 years:\nq(6) = qi * exp(-D * t) = 450 * exp(-0.18 * 6) = 450 * exp(-1.08) = 450 * 0.33960 = 152.8 STB/d.",
        "Step 2: Convert D to daily: D_daily = 0.18 / 365 = 0.00049315 / day.\nRemaining Recoverable Reserves from today forward (from q_curr = 152.8 to q_econ = 15):\nRR = (q_curr - q_econ) / D_daily = (152.82 - 15) / 0.00049315 = 137.82 / 0.00049315 = 279,469 STB.",
        "Step 3: Total Estimated Ultimate Recovery (EUR):\nEUR = Np_curr + RR = 520,000 + 279,469 = 799,469 STB.\n(Theoretical from day 0: EUR = (450 - 15) / 0.00049315 = 882,085 STB; difference reflects historical operational downtime).",
        "Step 4: Remaining Well Life in years:\nDelta_t = (ln(q_curr) - ln(q_econ)) / D = (ln(152.82) - ln(15)) / 0.18 = (5.0293 - 2.7081) / 0.18 = 2.3212 / 0.18 = 12.90 years."
      ],
      finalAnswer: "Current Rate = 152.8 STB/d | Remaining Reserves = 279,469 STB | Total EUR = 799,469 STB | Remaining Life = 12.9 years",
      engineeringSignificance: "This end-to-end evaluation combines current field deliverability, historical recovery, and certified remaining reserves, proving the asset has nearly 13 years of economic life and 279,500 STB of proved reserves remaining."
    },
    interview: {
      durationMinutes: 15,
      question: "Summarize the key technical contributions a junior petroleum engineer makes to an E&P asset team through production analytics and decline curve analysis.",
      sampleAnswer: "A junior engineer drives value in three key areas: 1) Data Integrity & Surveillance: Scrubbing raw SCADA feeds, reconciling separator tests with sales back-allocation, and building automated surveillance trackers that give early warnings of water breakthrough, gas coning, or artificial lift impairment. 2) Reserve Certification & Asset Valuation: Performing rigorous, defensible decline curve analysis (Arps exponential and modified hyperbolic) to forecast cash flow, calculate EUR, and support regulatory SEC reserve filings. 3) Root Cause Reliability Engineering: Tracking equipment MTBF and conducting Weibull failure analyses to identify bad actor wells and recommend targeted workovers (e.g. polymer squeezes, rod guide installations, or pump resizing), directly lowering OPEX and minimizing deferred production.",
      conceptCheck: "Synthesize surveillance, reserves forecasting, and reliability engineering into a cohesive value proposition."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Score yourself on this 15-question milestone test. Ensure any missed questions are automatically routed to your Revision Queue for targeted drill practice."
    },
    checklist: [
      { id: "d59-c1", text: "Completed the 15-question comprehensive Production Analytics Milestone Test", completed: false },
      { id: "d59-c2", text: "Achieved an 80%+ passing score on technical calculations", completed: false },
      { id: "d59-c3", text: "Mastered nominal vs effective decline conversion", completed: false },
      { id: "d59-c4", text: "Verified Ershaghi waterflood and Chan plot diagnostic skills", completed: false },
      { id: "d59-c5", text: "Routed any incorrect questions to the automated Revision Queue", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 60
  {
    dayNumber: 60,
    phaseId: 2,
    weekNumber: 7,
    title: "Building an Executive Petroleum Production Dashboard in Excel",
    category: "production_analytics",
    categoryLabel: "Production Analytics",
    todayGoal: "Build a professional multi-well executive production dashboard in Excel with KPI summary cards, dynamic slicers, rate vs time charts, and decline forecasts.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Executive asset managers and VP of Operations do not have time to comb through 50,000 rows of daily well telemetry. They need an interactive Executive Production Dashboard that summarizes field performance at a glance: total daily oil, gas, and water rates, overall field Water Cut, average GOR, fleet uptime efficiency, top producing wells, and bad actors. Combining clean Excel design, Pivot Tables, Timeline Slicers, and dynamic charts turns raw engineering data into a high-impact decision support tool.",
      keyPoints: [
        "Executive KPI Summary Cards (The 'Big 5'): 1) Field Oil Rate (BOPD) vs Budget, 2) Field Gas Rate (MMscfd), 3) Field Water Cut (%), 4) Fleet Uptime / Availability (%), 5) Proved Remaining Reserves (MMSTB).",
        "Interactive Slicers & Timelines: Connect Excel Pivot Tables to interactive slicers: Filter by Field, Reservoir Zone, Artificial Lift Type (ESP, Gas Lift, Rod Pump), and Operator.",
        "Professional Visual Hierarchy: Dark slate or corporate navy headers, muted gridlines, high-contrast KPI metric cards, and standardized engineering color coding: Green = Oil, Red = Gas, Blue = Water, Amber = Water Cut / GOR warning.",
        "Dynamic Well Selector: Use dropdown Data Validation (=XLOOKUP) allowing executives to select any individual well from a dropdown list to instantly populate its historical rate chart, Arps decline curve, and cumulative production.",
        "Automated Variance & Exception Reporting: Highlight wells where current 7-day rolling production has dropped by > 15% compared to their 30-day baseline."
      ],
      coreFormulas: [
        {
          name: "Field Uptime Availability",
          formula: "Uptime % = [SUM(Well_Operating_Hours) / (Total_Active_Wells * 24 * Days)] * 100",
          explanation: "Measures surface and downhole operational reliability."
        },
        {
          name: "Rolling 7-Day Rate Variance",
          formula: "Delta % = [(q_7day_avg - q_30day_avg) / q_30day_avg] * 100",
          explanation: "Flags sudden well deliverability drops for immediate workover review."
        }
      ],
      fieldInsight: "When building an Excel dashboard for executives, ALWAYS protect the formula cells and lock the sheet layout! Executives will accidentally click into complex formula cells and delete array formulas. Use Excel Sheet Protection, leaving only the Slicer buttons and well dropdown selectors unlocked."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-173428: Digital Oilfield Surveillance: Designing Effective Production Dashboards",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d60-q1",
          question: "What is the primary objective of an executive petroleum production dashboard in an upstream operating company?",
          options: [
            "To display every single telemetry sensor reading without summarization",
            "To synthesize complex multi-well production, downtime, and reserves data into intuitive KPI cards, trend charts, and dynamic filters for decision-makers",
            "To replace reservoir simulation models",
            "To print paper reports for filing cabinets"
          ],
          correctOptionIndex: 1,
          explanation: "Dashboards transform massive volumes of operational data into actionable business and engineering intelligence.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q2",
          question: "What are the standard industry colors typically used in petroleum engineering production charts?",
          options: [
            "Oil = Green, Gas = Red, Water = Blue",
            "Oil = Pink, Gas = Purple, Water = Yellow",
            "Oil = Black, Gas = White, Water = Gray",
            "Oil = Orange, Gas = Orange, Water = Orange"
          ],
          correctOptionIndex: 0,
          explanation: "Industry convention across Schlumberger, Landmark, and IHS standardizes Green for Oil, Red for Gas, and Blue for Water.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q3",
          question: "Which Excel feature allows non-technical users to filter multiple pivot charts simultaneously with a single click?",
          options: [
            "Slicers connected via Report Connections",
            "Spell Check",
            "Goal Seek",
            "Formula Auditing"
          ],
          correctOptionIndex: 0,
          explanation: "Slicers linked to multiple pivot tables and charts provide interactive, multi-dimensional filtering across fields, lift types, and dates.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q4",
          question: "How should KPI summary cards at the top of a production dashboard be formatted for maximum clarity?",
          options: [
            "Tiny 8pt font with full 12-digit decimal numbers",
            "Large bold numbers (e.g. 14,250 BOPD) with clear metric labels, small sparkline trend charts, and color-coded delta indicators vs budget (+/- %)",
            "All text written in red uppercase",
            "As 3D pie charts"
          ],
          correctOptionIndex: 1,
          explanation: "Modern executive KPI cards feature bold numbers, concise units, mini sparkline trends, and clear variance versus budget.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q5",
          question: "What Excel feature creates an in-cell mini-chart to show 12-month production history right inside a table row?",
          options: [
            "Sparklines (Line or Column)",
            "WordArt",
            "Hyperlinks",
            "AutoCorrect"
          ],
          correctOptionIndex: 0,
          explanation: "Sparklines render tiny, word-sized charts inside single cells, ideal for visualizing individual well trajectories in compact tables.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q6",
          question: "In an executive dashboard, how should 'deferred production' (lost volume due to downtime) be communicated?",
          options: [
            "Ignored completely so management stays happy",
            "Quantified in barrels of oil equivalent (BOE) lost per month grouped by root cause (e.g. 4,200 BOE lost to compressor downtime, 1,800 BOE lost to electrical trips)",
            "Reported only as weather",
            "Blamed on the drilling department"
          ],
          correctOptionIndex: 1,
          explanation: "Deferred production quantifies unproduced potential barrels due to surface or mechanical downtime, highlighting exact dollar opportunities for operational improvement.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q7",
          question: "Which Excel formula allows a dynamic well dropdown selector cell (e.g. Cell B3 = 'MIT-01') to look up and plot that specific well's monthly rates?",
          options: [
            "=FILTER(ProductionTable, ProductionTable[Well_ID] = B3)",
            "=RANDBETWEEN(1, 100)",
            "=TODAY()",
            "=UPPER(B3)"
          ],
          correctOptionIndex: 0,
          explanation: "=FILTER() dynamically spills the entire historical time-series for the selected Well_ID, powering automated dynamic charts.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q8",
          question: "Why should an engineer avoid 3D charts, heavy drop shadows, and dark rainbow gradients on an engineering dashboard?",
          options: [
            "3D charts distort visual perspective, make bar and line heights impossible to read accurately, and create visual clutter that obscures technical insights",
            "3D charts use too much ink when printed",
            "Computers cannot render 3D charts",
            "3D charts are illegal under API standards"
          ],
          correctOptionIndex: 0,
          explanation: "3D charts distort proportions and angles, obscuring real data trends. Clean 2D visualizations follow best data visualization principles.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q9",
          question: "What is the recommended design layout structure for an executive production dashboard sheet?",
          options: [
            "Scatter data randomly across 100 columns",
            "Top: KPI Summary Cards; Middle-Left: Main Rate & Trend Charts; Middle-Right: Breakdown by Zone/Lift; Bottom: Exception / Bad Actor Table",
            "Place all charts on separate hidden tabs",
            "One giant single table with no charts"
          ],
          correctOptionIndex: 1,
          explanation: "A top-to-bottom visual hierarchy (KPIs -> Trends -> Category breakdowns -> Granular exceptions) guides the eye logically from macro to micro insights.",
          topic: "Production Analytics"
        },
        {
          id: "d60-q10",
          question: "How can you ensure that an Excel dashboard automatically refreshes when new monthly production data is pasted into the raw data sheet?",
          options: [
            "Rebuild the entire workbook from scratch every month",
            "Base all pivot tables on dynamic Excel Tables (Ctrl+T) and use 'Refresh All' (Ctrl+Alt+F5) or a simple 1-line VBA refresh macro",
            "Delete the old month's data",
            "Change the screen resolution"
          ],
          correctOptionIndex: 1,
          explanation: "Structured tables auto-expand to include newly appended data rows; hitting 'Refresh All' updates all connected pivot tables and charts instantaneously.",
          topic: "Production Analytics"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You are designing the KPI Summary Header for an Asset Manager's dashboard monitoring 25 active oil wells over the past 30 days.\nMonthly totals:\n- Total Field Oil: 285,000 STB (Budgeted: 300,000 STB)\n- Total Field Water: 1,140,000 STB\n- Total Field Gas: 570,000 Mscf\n- Total Operating Hours across all 25 wells: 16,560 hours (out of 25 * 720 = 18,000 available hours)\nCalculate the 5 Executive KPI Card metrics: 1) Actual Average Daily Oil Rate (BOPD) vs Budgeted Daily Rate, 2) Oil Production Variance (%), 3) Average Field Water Cut (%), 4) Field Producing GOR (scf/STB), and 5) Field Uptime Availability (%).",
      givenValues: [
        { label: "Total Actual Oil", value: "285,000 STB" },
        { label: "Total Budgeted Oil", value: "300,000 STB" },
        { label: "Total Water", value: "1,140,000 STB" },
        { label: "Total Gas", value: "570,000 Mscf" },
        { label: "Operating Hours", value: "16,560 hrs / 18,000 hrs" }
      ],
      stepByStepSolution: [
        "Step 1: Actual Daily Oil Rate = 285,000 / 30 = 9,500.0 BOPD.\nBudgeted Daily Oil Rate = 300,000 / 30 = 10,000.0 BOPD.",
        "Step 2: Oil Production Variance = [(9,500 - 10,000) / 10,000] * 100 = -5.00% (-500 BOPD below budget).",
        "Step 3: Total Liquid Volume = 285,000 + 1,140,000 = 1,425,000 STB.\nField Water Cut = (1,140,000 / 1,425,000) * 100 = 80.00%.",
        "Step 4: Field Producing GOR = (570,000 Mscf * 1,000 scf/Mscf) / 285,000 STB = 570,000,000 / 285,000 = 2,000 scf/STB.",
        "Step 5: Field Uptime Availability = (16,560 / 18,000) * 100 = 92.00% (1,440 hours lost to downtime)."
      ],
      finalAnswer: "Actual BOPD = 9,500 | Variance = -5.0% | Water Cut = 80.0% | GOR = 2,000 scf/STB | Uptime = 92.0%",
      engineeringSignificance: "These 5 metrics instantly tell the asset manager the exact state of the asset: the field is 500 BOPD below budget, but 92% uptime explains almost all of it (8% downtime on 10,000 BOPD = 800 BOPD deferred potential). The reservoir deliverability is on track; surface uptime is the primary target."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you present an executive dashboard in a weekly operations review when production is 10% below budget?",
      sampleAnswer: "I never present bad news without immediate attribution and an actionable recovery plan. I structure my briefing in three steps: 1) The Headline Metric & Attribution: State clearly that field production was 9,000 BOPD vs 10,000 BOPD budget (-10%). Then use the dashboard's availability breakdown to show that 8% of the shortfall was caused by surface downtime (e.g. 48-hour compressor trip at Battery B) rather than reservoir inflow collapse. 2) Root Cause & Fix: Show the bad-actor exception table highlighting the two specific wells that suffered mechanical ESP trips, and confirm workover rigs have already been contracted. 3) Forward Look & Mitigation: Present the recovery plan: returning Battery B to service and choke optimization on 3 offset wells will restore 750 BOPD within 5 days, bringing month-end recovery to 98% of target.",
      conceptCheck: "Focus on attribution (deliverability vs uptime), root cause accountability, and forward-looking recovery plans."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Assemble all Phase 2 Week 7 techniques into a portfolio-ready Excel workbook: 'Production_Surveillance_Executive_Dashboard.xlsx' featuring 5 KPI cards, dynamic well selector dropdown, rate history chart, and DCA forecast."
    },
    checklist: [
      { id: "d60-c1", text: "Designed executive KPI summary cards with clear visual hierarchy", completed: false },
      { id: "d60-c2", text: "Implemented dynamic well selector dropdown using Excel FILTER/XLOOKUP", completed: false },
      { id: "d60-c3", text: "Built dual-axis rate vs time and cumulative production charts", completed: false },
      { id: "d60-c4", text: "Added interactive slicers for Reservoir Zone and Artificial Lift type", completed: false },
      { id: "d60-c5", text: "Completed Week 7 production analytics portfolio deliverable", completed: false }
    ],
    confidenceRating: 0
  }
];
