import { DayPlan } from '../../types';

export const WEEK_8_DAYS: DayPlan[] = [
  // DAY 61
  {
    dayNumber: 61,
    phaseId: 2,
    weekNumber: 8,
    title: "Python Environment & The Modern Upstream Petroleum Data Stack",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Set up Python, understand the upstream data ecosystem (NumPy, Pandas, SciPy, Matplotlib, Lasio, Welly), and why top operators require coding engineers.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Over the last decade, the upstream energy sector has undergone a massive digital transformation. Today, leading operators (Chevron, ExxonMobil, BP, Shell, SLB) expect petroleum engineers to possess coding literacy. While commercial software packages like Petrel, Eclipse, and Prosper remain essential, proprietary software cannot automate repetitive multi-well data hygiene or customize predictive machine learning workflows across 5,000 wells. Python has become the universal programming language of the petroleum industry due to its rich scientific ecosystem and dedicated subsurface libraries.",
      keyPoints: [
        "The Upstream Python Stack: 1) NumPy (vectorized mathematical array operations), 2) Pandas (structured tabular timeseries analysis, multi-well aggregations), 3) SciPy (scientific optimization, curve-fitting for DCA and well testing), 4) Matplotlib & Seaborn (engineering visualization, semi-log plots), 5) Lasio & Welly (parsing CWLS standard LAS well log files).",
        "Why Python Over Excel for Multi-Well Portfolios: Excel slows down and crashes with > 100,000 rows. In an unconventional shale basin with 2,000 horizontal wells and 1-minute SCADA telemetry, a Python script processes gigabytes of production data in seconds, cleans outliers programmatically, and generates 2,000 decline curve fits automatically.",
        "Interactive Computing with Jupyter Notebooks: Jupyter notebooks allow engineers to combine LaTeX formulas, live code execution, interactive Plotly charts, and petrophysical interpretations in a shareable, reproducible engineering report.",
        "Virtual Environments & Package Management: Use `venv` or `conda` to isolate upstream project dependencies. Essential installations: `pip install numpy pandas scipy matplotlib seaborn lasio openpyxl`."
      ],
      coreFormulas: [
        {
          name: "Standard Upstream Python Import Convention",
          formula: "import numpy as np; import pandas as pd; import matplotlib.pyplot as plt; import lasio",
          explanation: "Universal standard aliases used across upstream petrophysical and reservoir data science."
        }
      ],
      fieldInsight: "When applying for petroleum engineering positions at top operators, having 'Python' on your resume is only meaningful if backed by subsurface domain projects. Writing 'Proficient in Python' is ignored; writing 'Developed an automated Python pipeline using Lasio and Pandas to evaluate 15 well logs, computing Archie Sw and Net Pay in under 30 seconds' lands interviews."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-201594: Open Source Python Tools in Petroleum Engineering and Subsurface Data Science",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d61-q1",
          question: "Which Python open-source library is the industry standard specifically designed for reading, modifying, and writing Canadian Well Logging Society (CWLS) LAS well log files?",
          options: [
            "lasio",
            "django",
            "tensorflow",
            "requests"
          ],
          correctOptionIndex: 0,
          explanation: "lasio is the specialized Python package universally used in upstream petrophysics to parse ASCII well log (.las) files into pandas DataFrames.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q2",
          question: "Why do reservoir engineering teams increasingly prefer Python over Excel for basin-wide decline curve analysis?",
          options: [
            "Excel cannot calculate division",
            "Python can batch-process thousands of wells simultaneously, automate non-linear curve fitting via SciPy, and integrate directly with SQL databases without memory crashes",
            "Python was invented by oil companies",
            "Excel files are illegal in petroleum offices"
          ],
          correctOptionIndex: 1,
          explanation: "Python handles massive multi-well datasets, executes automated regression loops, and scales seamlessly compared to manual spreadsheet workflows.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q3",
          question: "In Python, which scientific library provides vectorized N-dimensional array processing and serves as the mathematical foundation for Pandas?",
          options: [
            "NumPy",
            "Flask",
            "BeautifulSoup",
            "PyGame"
          ],
          correctOptionIndex: 0,
          explanation: "NumPy provides high-performance multidimensional arrays and vectorized math routines underlying the entire scientific Python stack.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q4",
          question: "What is the primary benefit of documenting petrophysical workflows in a Jupyter Notebook (.ipynb)?",
          options: [
            "It turns Python into C++",
            "It enables literate programming: markdown explanations, petrophysical formulas in LaTeX, live code execution, and log plots are embedded in a single verifiable document",
            "It automatically buys rig equipment",
            "It hides all programming code from the user"
          ],
          correctOptionIndex: 1,
          explanation: "Jupyter Notebooks merge executable code, rich visualization, and engineering commentary into a reproducible audit trail.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q5",
          question: "Which terminal command creates an isolated Python virtual environment named 'petro_env'?",
          options: [
            "python -m venv petro_env",
            "pip install petro_env",
            "npm start petro_env",
            "git clone petro_env"
          ],
          correctOptionIndex: 0,
          explanation: "`python -m venv petro_env` is the standard built-in command to initialize an isolated Python virtual environment.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q6",
          question: "Which SciPy subpackage is most commonly used for fitting non-linear Arps hyperbolic decline models to historical rate data?",
          options: [
            "scipy.optimize (specifically curve_fit)",
            "scipy.fft",
            "scipy.ndimage",
            "scipy.cluster"
          ],
          correctOptionIndex: 0,
          explanation: "`scipy.optimize.curve_fit` utilizes non-linear least squares (Levenberg-Marquardt or Trust Region Reflective) to fit custom equations like Arps.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q7",
          question: "Why should an engineer avoid using standard Python `for` loops to iterate through 500,000 depth rows in a well log dataset?",
          options: [
            "Standard Python loops are interpreted and orders of magnitude slower than vectorized NumPy / Pandas operations implemented in optimized C",
            "Python loops cause depth values to become negative",
            "Loops only work on text data",
            "Loops cannot process numbers greater than 100"
          ],
          correctOptionIndex: 0,
          explanation: "Vectorized operations in NumPy/Pandas run compiled C-level loops, executing mathematical operations 50x to 100x faster than pure Python `for` loops.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q8",
          question: "Which file format is standard for exchanging structured tabular production timeseries between SCADA databases and Python scripts?",
          options: [
            "CSV / Parquet",
            "MP3",
            "EXE",
            "PDF"
          ],
          correctOptionIndex: 0,
          explanation: "CSV (Comma-Separated Values) and Parquet (columnar storage) are the industry standards for high-performance tabular timeseries exchange.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q9",
          question: "If an engineer needs to plot well log curves with Depth on the vertical axis running downward (increasing with depth), how is this achieved in Matplotlib?",
          options: [
            "ax.invert_yaxis()",
            "ax.invert_xaxis()",
            "plt.close()",
            "ax.rotate_90()"
          ],
          correctOptionIndex: 0,
          explanation: "`ax.invert_yaxis()` flips the vertical y-axis so depth 0 is at the top and 10,000 ft is at the bottom, matching standard wireline log convention.",
          topic: "Python for Petroleum"
        },
        {
          id: "d61-q10",
          question: "How does demonstrating Python scripting skills during a technical interview differentiate a junior petroleum engineer?",
          options: [
            "It proves they want to abandon petroleum engineering and become a web developer",
            "It proves they can eliminate hundreds of hours of manual busywork, build automated engineering tools, and handle modern digital oilfield big data",
            "It has no impact because oil companies only use paper logs",
            "It allows them to bypass safety regulations"
          ],
          correctOptionIndex: 1,
          explanation: "Modern operators seek 'bilingual' engineers who possess rock-solid petroleum fundamentals combined with data automation skills to multiply engineering productivity.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A reservoir engineer writes a Python script to calculate the speedup of vectorized NumPy operations versus a pure Python `for` loop across 1,000,000 well log sample depths.\nBenchmark results:\n- Pure Python `for` loop runtime = 1.840 seconds\n- Vectorized NumPy array runtime = 0.0092 seconds\nCalculate: 1) The execution speedup factor (how many times faster NumPy is), 2) Percentage time reduction (%), and 3) If processing 500 wells with 1,000,000 samples each, how much total compute time is saved in minutes?",
      givenValues: [
        { label: "Python Loop Runtime", value: "1.840 seconds" },
        { label: "NumPy Vectorized Runtime", value: "0.0092 seconds" },
        { label: "Number of Wells", value: "500 wells" }
      ],
      stepByStepSolution: [
        "Step 1: Speedup Factor = t_loop / t_numpy = 1.840 s / 0.0092 s = 200.0x faster.",
        "Step 2: Percentage Time Reduction = [(1.840 - 0.0092) / 1.840] * 100 = (1.8308 / 1.840) * 100 = 99.50% reduction.",
        "Step 3: Total time for 500 wells:\n- Using loops: 500 * 1.840 s = 920.0 seconds = 15.33 minutes.\n- Using NumPy: 500 * 0.0092 s = 4.60 seconds = 0.077 minutes.\n- Time saved = 920.0 s - 4.6 s = 915.4 seconds = 15.26 minutes."
      ],
      finalAnswer: "Speedup = 200x faster | Time Reduction = 99.5% | Total Compute Time Saved = 15.26 minutes",
      engineeringSignificance: "Vectorization replaces interpreted Python loops with compiled C-level SIMD instructions. In large basin studies with thousands of wells and gigabytes of 1-second drilling or production data, vectorization transforms hours of waiting into seconds of instant feedback."
    },
    interview: {
      durationMinutes: 15,
      question: "Why should an operator hire a petroleum engineer who writes Python rather than simply hiring a computer science graduate to analyze production data?",
      sampleAnswer: "Because domain context is paramount in subsurface engineering. A computer scientist looking at a sudden 50% drop in production might assume a normal statistical trend and fit an arbitrary polynomial regression. A petroleum engineer who codes immediately recognizes domain realities: Is this liquid loading? Did flowing bottomhole pressure drop below bubble point causing gas breakout? Was there an ESP undercurrent trip, or an offset well being hydraulically fractured? A petroleum engineer knows which physical laws must constrain the model—such as mass conservation in material balance, boundary-dominated flow in DCA, and Archie's physical bounds for water saturation (0 <= Sw <= 1). Combining subsurface physics with Python automation ensures the code solves real reservoir problems without violating geomechanical and thermodynamic truths.",
      conceptCheck: "Emphasize that coding is a lever for domain physics; without subsurface knowledge, data science produces physically impossible reservoir forecasts."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Set up a clean Python 3.10+ virtual environment on your computer: `python -m venv petro_env`, activate it, and run `pip install numpy pandas scipy matplotlib seaborn lasio`."
    },
    checklist: [
      { id: "d61-c1", text: "Understood the role of Python in modern upstream engineering", completed: false },
      { id: "d61-c2", text: "Explored the upstream Python ecosystem (NumPy, Pandas, SciPy, Lasio)", completed: false },
      { id: "d61-c3", text: "Created and activated a virtual environment for petroleum analytics", completed: false },
      { id: "d61-c4", text: "Understood vectorization speed advantages over interpreted loops", completed: false },
      { id: "d61-c5", text: "Installed essential subsurface Python packages", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 62
  {
    dayNumber: 62,
    phaseId: 2,
    weekNumber: 8,
    title: "NumPy & Pandas Foundations for Upstream Engineers",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Master Pandas DataFrames for production data: reading CSV/Excel, datetime indexing, filtering well status, and handling shut-ins.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Pandas is the primary workhorse for tabular upstream data manipulation. In petroleum engineering, production logs, well test records, and completions databases are inherently tabular timeseries. Mastering Pandas allows an engineer to ingest raw field CSV exports, parse timestamps into genuine DatetimeIndex objects, filter out shut-in periods, calculate cumulative production, and slice multi-well assets with concise, expressive syntax.",
      keyPoints: [
        "Reading Data: `pd.read_csv('production.csv', parse_dates=['Date'])` or `pd.read_excel()`. Automatically parses ISO timestamps into native datetime64 objects.",
        "The Pandas DatetimeIndex: Setting `df.set_index('Date', inplace=True)` unlocks timeseries resampling: `df.resample('M').sum()` (converts daily to monthly totals) and `df.resample('D').mean()`.",
        "Filtering & Querying: Boolean masking: `active_wells = df[(df['Oil_Rate'] > 0) & (df['Status'] == 'PRODUCING')]`. Or using `df.query('Oil_Rate > 0 and Water_Cut < 0.90')`.",
        "Handling Missing Data (Nulls): `df.dropna()` vs `df.fillna(0)`. In production data, telemetry sensor dropouts should be interpolated (`df['Pressure'].interpolate(method='linear')`) rather than naively zeroed.",
        "Descriptive Engineering Statistics: `df[['Oil_Rate', 'Gas_Rate', 'Water_Rate']].describe()` provides mean, standard deviation, quartiles, min, and max across the entire field instantly."
      ],
      coreFormulas: [
        {
          name: "Pandas Monthly Resampling Syntax",
          formula: "monthly_df = daily_df.resample('ME').agg({'Oil_Rate': 'sum', 'Gas_Rate': 'sum', 'Water_Rate': 'sum'})",
          explanation: "Aggregates daily production records into monthly field totals."
        }
      ],
      fieldInsight: "Always check `df.dtypes` immediately after loading a CSV file! Often, columns that should be floating-point numbers (e.g. Oil_Rate) load as `object` (strings) because a field technician typed 'N/A' or 'Shut-in' in one cell. Use `pd.to_numeric(df['Oil_Rate'], errors='coerce')` to safely convert text anomalies into `np.nan`."
    },
    watchOrRead: {
      type: "read",
      title: "Pandas Documentation: Essential Basic Functionality & Time Series Analysis",
      url: "https://pandas.pydata.org/docs/",
      platform: "Pandas Open Source Documentation",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d62-q1",
          question: "Which Pandas function safely converts a column of oil rates containing occasional strings like 'OFFLINE' into numeric floats, turning text into NaN?",
          options: [
            "pd.to_numeric(df['Oil_Rate'], errors='coerce')",
            "df['Oil_Rate'].astype(float)",
            "df.drop('OFFLINE')",
            "df['Oil_Rate'].remove_text()"
          ],
          correctOptionIndex: 0,
          explanation: "`errors='coerce'` converts unparseable string values into `np.nan` instead of throwing a ValueError, allowing clean mathematical analysis.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q2",
          question: "What does setting a DataFrame's index to a DatetimeIndex enable?",
          options: [
            "It turns off memory management",
            "It enables timeseries slicing (e.g., df['2023-01':'2023-06']) and frequency resampling (e.g., daily to monthly aggregation)",
            "It encrypts the dates",
            "It deletes all shut-in days"
          ],
          correctOptionIndex: 1,
          explanation: "DatetimeIndex unlocks intuitive date range slicing and temporal resampling (`.resample('M')` or `.resample('Y')`).",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q3",
          question: "In Pandas, how do you filter a DataFrame `df` to keep only rows where Well_ID is 'MIT-01' and Oil_Rate is greater than 50 bbl/d?",
          options: [
            "df[(df['Well_ID'] == 'MIT-01') & (df['Oil_Rate'] > 50)]",
            "df[(df['Well_ID'] == 'MIT-01') and (df['Oil_Rate'] > 50)]",
            "df.filter('MIT-01', 50)",
            "df.where('Oil_Rate' > 50)"
          ],
          correctOptionIndex: 0,
          explanation: "In Pandas, element-wise boolean operations require the bitwise `&` operator and parentheses around each condition.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q4",
          question: "Which Pandas method aggregates daily production volume into total monthly volume for each well?",
          options: [
            "df.resample('ME').sum()",
            "df.monthly()",
            "df.compress('30D')",
            "df.calendar_month()"
          ],
          correctOptionIndex: 0,
          explanation: "`.resample('ME')` (month end) groups timeseries records by calendar month, and `.sum()` computes monthly volume.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q5",
          question: "If a bottomhole pressure gauge drops offline for 4 hours, which Pandas method fills the missing sensor values with smooth linear estimates between the last known points?",
          options: [
            "df['BHP'].fillna(0)",
            "df['BHP'].interpolate(method='linear')",
            "df['BHP'].dropna()",
            "df['BHP'].replace(0)"
          ],
          correctOptionIndex: 1,
          explanation: "`.interpolate(method='linear')` connects valid readings before and after the gap with a straight-line trend, reflecting realistic pressure continuity.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q6",
          question: "How do you calculate the cumulative oil production (Np) column from a daily oil rate column in a DataFrame where each row is 1 day?",
          options: [
            "df['Np'] = df['Oil_Rate'].cumsum()",
            "df['Np'] = df['Oil_Rate'].sum()",
            "df['Np'] = df['Oil_Rate'].diff()",
            "df['Np'] = df['Oil_Rate'] * 365"
          ],
          correctOptionIndex: 0,
          explanation: "`.cumsum()` calculates the cumulative running sum row-by-row, producing the exact cumulative production profile Np(t).",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q7",
          question: "What does `df.groupby('Reservoir_Zone')['Oil_Rate'].sum()` return?",
          options: [
            "The sum of all depths",
            "A Series containing the total oil production rate aggregated by each individual geological reservoir zone",
            "A list of well names",
            "A 3D seismic map"
          ],
          correctOptionIndex: 1,
          explanation: "`groupby()` splits data into groups by zone, applies `.sum()` to the Oil_Rate column, and combines the results.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q8",
          question: "What does the `.iloc[0:10, 0:3]` accessor do on a Pandas DataFrame?",
          options: [
            "Selects the first 10 rows and first 3 columns using integer position indexing",
            "Finds 10 wells located at longitude 0 to 3",
            "Sorts columns alphabetically",
            "Deletes the first 10 rows"
          ],
          correctOptionIndex: 0,
          explanation: "`.iloc` performs pure integer-location based indexing for row and column slicing.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q9",
          question: "How do you export a cleaned DataFrame back to an Excel file with multiple tabs?",
          options: [
            "Using `pd.ExcelWriter()` context manager with `df.to_excel()` specifying sheet names",
            "Renaming the .py file to .xlsx",
            "Using `df.print_excel()`",
            "Copying the screen with a screenshot"
          ],
          correctOptionIndex: 0,
          explanation: "`with pd.ExcelWriter('output.xlsx') as writer: df.to_excel(writer, sheet_name='Clean_Data')` writes multi-tab Excel files.",
          topic: "Python for Petroleum"
        },
        {
          id: "d62-q10",
          question: "Why should an engineer use `.copy()` when creating a subset DataFrame (e.g. `pdp_wells = df[df['Status'] == 'ACTIVE'].copy()`)?",
          options: [
            "To prevent Python's `SettingWithCopyWarning` and ensure modifications to the subset do not unintentionally mutate the original master DataFrame",
            "Because Python cannot filter without making 10 copies",
            "To double the computer's RAM",
            "To send the data to a printer"
          ],
          correctOptionIndex: 0,
          explanation: "Explicit `.copy()` prevents chained assignment warnings and decouples the new DataFrame from the parent slice.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production engineer receives a 6-month daily production CSV containing 180 rows. An automated Pandas script processes the data:\n- Total rows = 180 days\n- Active producing rows (Oil_Rate > 0) = 153 days\n- Shut-in rows (Oil_Rate == 0) = 27 days\n- Cumulative oil produced `df['Oil_Rate'].sum()` = 68,850 STB\nCalculate: 1) Mean Producing Day Rate (bbl/day on-stream), 2) Mean Calendar Day Rate (bbl/day across full period), 3) Operating Uptime Efficiency (%), and 4) If downtime is reduced by 50% through improved lift maintenance, how many additional barrels of oil would be recovered at the producing rate?",
      givenValues: [
        { label: "Total Days", value: "180 days" },
        { label: "Producing Days", value: "153 days" },
        { label: "Shut-in Days", value: "27 days" },
        { label: "Total Cumulative Oil", value: "68,850 STB" }
      ],
      stepByStepSolution: [
        "Step 1: Producing Day Rate = Total Volume / Producing Days = 68,850 STB / 153 days = 450.0 STB/d.",
        "Step 2: Calendar Day Rate = Total Volume / Total Days = 68,850 STB / 180 days = 382.5 STB/d.",
        "Step 3: Uptime Efficiency = (153 / 180) * 100 = 85.0%.",
        "Step 4: Additional barrels from 50% downtime reduction:\nDowntime days saved = 27 days * 0.50 = 13.5 days.\nAdditional Oil = 13.5 days * 450 STB/d = 6,075 STB."
      ],
      finalAnswer: "Producing Rate = 450.0 STB/d | Calendar Rate = 382.5 STB/d | Uptime = 85.0% | Gained Oil = 6,075 STB",
      engineeringSignificance: "Writing this 4-line calculation in Pandas allows an engineer to run it across 500 wells instantly, identifying which wells suffer the greatest downtime losses and quantifying the exact dollar value ($425,000 at $70/bbl) of improving artificial lift uptime."
    },
    interview: {
      durationMinutes: 15,
      question: "Walk me through how you would handle missing or null sensor values in a high-frequency wellhead pressure and rate dataset in Pandas.",
      sampleAnswer: "I never apply a single generic `.fillna()` across all columns because different subsurface variables follow different physical principles. For pressure data (flowing tubing head pressure or bottomhole pressure), pressure is a continuous thermodynamic state variable governed by diffusion; if telemetry drops for a few minutes or hours, I use `.interpolate(method='time')` to preserve physical continuity. For production volumes (oil, gas, water rates), I first check the well status column. If the well status was 'SHUT-IN', the rate was physically 0, so I fill with 0. If the well status was 'PRODUCING' but the rate is NaN due to flowmeter telemetry loss, filling with 0 would falsely distort the decline curve; instead, I forward-fill using the latest verified test rate or flag the row with an anomaly tag for manual engineering review. Finally, for derived ratios like GOR and WOR, I compute them dynamically AFTER cleaning the raw rates, wrapping zero-division with `np.nan`.",
      conceptCheck: "Demonstrate physics-informed data handling: continuous variables interpolate, rates depend on operational status."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Python script using Pandas that imports a sample multi-well CSV, sets a DatetimeIndex, calculates cumulative oil and water cut columns, and exports a monthly summary table."
    },
    checklist: [
      { id: "d62-c1", text: "Mastered reading CSV/Excel files and datetime parsing in Pandas", completed: false },
      { id: "d62-c2", text: "Implemented timeseries indexing and `.resample()` aggregations", completed: false },
      { id: "d62-c3", text: "Applied boolean filtering for active vs shut-in well states", completed: false },
      { id: "d62-c4", text: "Handled missing telemetry data with physics-informed interpolation", completed: false },
      { id: "d62-c5", text: "Computed running cumulative production using `.cumsum()`", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 63
  {
    dayNumber: 63,
    phaseId: 2,
    weekNumber: 8,
    title: "Production Data Cleaning & Feature Engineering in Pandas",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Engineer subsurface surveillance features in Pandas: rolling averages, WOR, GOR, total fluid rate, rate change derivatives, and outlier scrubbing.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Raw upstream SCADA and gauge reports are full of noise, high-frequency meter chatter, slugging fluctuations, and artificial rate spikes. Before running decline curve analysis or training machine learning models, a petroleum data engineer must perform 'Feature Engineering'—transforming raw rate and pressure measurements into meaningful diagnostic indicators like 7-day and 30-day moving averages, instantaneous Water Cut, Gas-Oil Ratio, and rate acceleration derivatives.",
      keyPoints: [
        "Feature Engineering Core Ratios: 1) Total Liquid Rate: `df['Liquid_Rate'] = df['Oil_Rate'] + df['Water_Rate']`; 2) Water Cut: `df['Water_Cut'] = df['Water_Rate'] / df['Liquid_Rate']`; 3) GOR: `df['GOR'] = (df['Gas_Rate'] * 1000) / df['Oil_Rate']`; 4) Water-Oil Ratio: `df['WOR'] = df['Water_Rate'] / df['Oil_Rate']`.",
        "Rolling Window Smoothing: High-frequency slugging obscures true reservoir decline. Use `df['Oil_Rate_7DMA'] = df['Oil_Rate'].rolling(window=7, min_periods=1).mean()`. The 7-day and 30-day moving averages smooth out day-to-day separator dump surging.",
        "Outlier Filtering with Rolling Z-Scores: Calculate rolling mean and rolling standard deviation. Flag rows where `abs(rate - rolling_mean) > 3 * rolling_std` as measurement anomalies (e.g. meter calibration or liquid carryover).",
        "Rate Derivatives & Momentum: `df['dRate_dt'] = df['Oil_Rate'].diff() / df['Days'].diff()`. Negative derivatives measure natural decline rate; sudden extreme negative values indicate operational chokes or mechanical lift failure.",
        "Cumulative Production Integration: `df['Np'] = df['Oil_Rate'].cumsum()`. Creating a clean feature table containing Date, Rates, Ratios, Rolling Averages, and Cumulatives prepares the dataset for automated DCA modeling."
      ],
      coreFormulas: [
        {
          name: "Pandas Rolling Mean Syntax",
          formula: "df['Oil_7DMA'] = df['Oil_Rate'].rolling(window=7, center=True).mean()",
          explanation: "Computes 7-day centered moving average for production surveillance."
        },
        {
          name: "Pandas Vectorized Water Cut",
          formula: "df['Water_Cut'] = np.where(df['Liquid_Rate'] > 0, df['Water_Rate'] / df['Liquid_Rate'], np.nan)",
          explanation: "Calculates water cut while safely preventing zero-division on shut-in days."
        }
      ],
      fieldInsight: "Always compute Water Cut and GOR using `np.where()` rather than raw division! If a well is shut in (qo = 0, qw = 0), raw division results in `0/0` (`NaN` or error). `np.where(condition, x, y)` evaluates the condition and returns NaN or 0 cleanly, preventing corrupted downstream analytics."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-195864: Practical Data Analytics and Feature Engineering for Petroleum Engineers",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d63-q1",
          question: "Why do production engineers compute 7-day or 30-day rolling averages of wellhead oil rate before running regression analysis?",
          options: [
            "To hide all real production drops",
            "To filter out daily flowmeter chatter, slugging fluctuations, and separator dump cycle noise, exposing true underlying reservoir decline",
            "Because Python requires 7 days to calculate an average",
            "To artificially increase reported field reserves"
          ],
          correctOptionIndex: 1,
          explanation: "Moving averages smooth out high-frequency operational noise (slugging, batch trucking) to reveal the genuine reservoir decline trajectory.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q2",
          question: "Which NumPy/Pandas function allows vectorized calculation of GOR while replacing zero-division cases (qo = 0) with `np.nan`?",
          options: [
            "np.where(df['Oil_Rate'] > 0, (df['Gas_Rate']*1000) / df['Oil_Rate'], np.nan)",
            "df['Gas_Rate'] / df['Oil_Rate']",
            "df.dropna()",
            "df.replace(0, 1000)"
          ],
          correctOptionIndex: 0,
          explanation: "`np.where` provides conditional ternary vectorization, safely evaluating the division only when oil rate is positive.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q3",
          question: "What does the `.diff()` method do in Pandas when applied to a cumulative production column `df['Np'].diff()`?",
          options: [
            "It computes the discrete difference between consecutive rows, recovering the incremental daily production volume",
            "It multiplies cumulative volume by 2",
            "It deletes duplicate rows",
            "It calculates the derivative of pressure"
          ],
          correctOptionIndex: 0,
          explanation: "`.diff()` calculates y[i] - y[i-1], converting cumulative production back into incremental daily production.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q4",
          question: "In automated data cleaning, how does a rolling Z-score filter identify telemetry sensor spikes?",
          options: [
            "By checking if the well name contains numbers",
            "By computing Z = (Rate - Rolling_Mean) / Rolling_Std, flagging points where |Z| > 3.0 as statistical outliers",
            "By deleting every third row",
            "By checking if temperature is above boiling"
          ],
          correctOptionIndex: 1,
          explanation: "Points deviating by more than 3 standard deviations from their local rolling baseline represent meter spikes, electrical noise, or flowline surging.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q5",
          question: "What feature should be engineered to assess whether an oil well is suffering from bottomhole liquid loading?",
          options: [
            "The ratio of flowing tubing head pressure to casing pressure, or gas velocity relative to Turner critical velocity",
            "The distance from the well to the refinery",
            "The diameter of the drill bit used 5 years ago",
            "The price of natural gas"
          ],
          correctOptionIndex: 0,
          explanation: "Liquid loading is diagnosed by tracking critical lift gas velocity (Turner/Coleman equations) or diverging tubing/casing pressure trends.",
          topic: "Production Engineering"
        },
        {
          id: "d63-q6",
          question: "How do you calculate a 14-day exponential moving average (EMA) in Pandas, which gives more weight to recent production?",
          options: [
            "df['Oil_Rate'].ewm(span=14).mean()",
            "df['Oil_Rate'].rolling(14).mean()",
            "df['Oil_Rate'].shift(14)",
            "df['Oil_Rate'] * 14"
          ],
          correctOptionIndex: 0,
          explanation: "`.ewm(span=14).mean()` computes exponentially weighted moving average, reacting faster to recent operational changes.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q7",
          question: "Why is tracking `d(Water_Cut)/dt` (the rate of change of water cut) important for waterflood surveillance?",
          options: [
            "It proves oil has disappeared",
            "A sudden spike in the water cut derivative indicates breakthrough of an injection front or water channeling through a high-perm thief zone",
            "It indicates the wellhead has frozen",
            "Water cut derivative is always zero"
          ],
          correctOptionIndex: 1,
          explanation: "The time rate of change of water cut flags the arrival of waterflood fronts, prompting pattern rebalancing or injection choke back.",
          topic: "Production Analytics"
        },
        {
          id: "d63-q8",
          question: "What does `df['Oil_Rate'].shift(1)` do in a Pandas timeseries DataFrame?",
          options: [
            "It moves the oil rate values down by 1 row, allowing row-by-row comparison with the previous day's rate",
            "It deletes the first row",
            "It multiplies the rate by 10",
            "It changes the time zone"
          ],
          correctOptionIndex: 0,
          explanation: "`.shift(1)` offsets the series by 1 period, enabling lag features (e.g. `df['Rate_Change'] = df['Oil_Rate'] - df['Oil_Rate'].shift(1)`).",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q9",
          question: "In feature engineering for machine learning, why is it beneficial to log-transform skewed variables like GOR or Permeability (`np.log1p(df['GOR'])`)?",
          options: [
            "Because logarithms make numbers positive",
            "Subsurface variables like GOR and permeability span multiple orders of magnitude (log-normal distribution); log transformation normalizes variance and improves model convergence",
            "Machine learning only works on negative numbers",
            "Logarithms delete null values"
          ],
          correctOptionIndex: 1,
          explanation: "Log transformation compresses heavy right-tailed distributions (log-normal petrophysical properties), stabilizing variance for linear and ML models.",
          topic: "Python for Petroleum"
        },
        {
          id: "d63-q10",
          question: "What is the recommended approach for handling days where an oil rate meter recorded negative values due to backflow surging?",
          options: [
            "Set negative values to zero or clip them using `df['Oil_Rate'].clip(lower=0)`",
            "Delete the well entirely from the database",
            "Multiply all values by -100",
            "Add 1,000 to all rows"
          ],
          correctOptionIndex: 0,
          explanation: "`.clip(lower=0)` bounds negative flowmeter errors at 0, accurately reflecting that the well cannot produce negative sales volume.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A production engineer engineers features for Well MIT-09 over 5 consecutive days:\nDay 1: qo = 400 bbl/d, qw = 100 bbl/d, qg = 320 Mscf/d\nDay 2: qo = 380 bbl/d, qw = 120 bbl/d, qg = 304 Mscf/d\nDay 3: qo = 360 bbl/d, qw = 140 bbl/d, qg = 288 Mscf/d\nDay 4: qo = 340 bbl/d, qw = 160 bbl/d, qg = 272 Mscf/d\nDay 5: qo = 320 bbl/d, qw = 180 bbl/d, qg = 256 Mscf/d\nCalculate: 1) 3-Day centered moving average of oil rate on Day 3, 2) Water Cut on Day 5 (%), 3) Water-Oil Ratio (WOR) on Day 5, 4) Producing GOR on Day 5 (scf/STB), and 5) Total cumulative liquid produced across all 5 days (STB).",
      givenValues: [
        { label: "Day 1 to 5 Oil Rates", value: "400, 380, 360, 340, 320 bbl/d" },
        { label: "Day 1 to 5 Water Rates", value: "100, 120, 140, 160, 180 bbl/d" },
        { label: "Day 1 to 5 Gas Rates", value: "320, 304, 288, 272, 256 Mscf/d" }
      ],
      stepByStepSolution: [
        "Step 1: 3-Day centered moving average for Day 3 (average of Days 2, 3, 4):\nqo_3DMA = (380 + 360 + 340) / 3 = 1,080 / 3 = 360.0 bbl/d.",
        "Step 2: Water Cut on Day 5:\nql_5 = 320 + 180 = 500 bbl/d.\nWC_5 = (180 / 500) * 100 = 36.00%.",
        "Step 3: Water-Oil Ratio (WOR) on Day 5:\nWOR_5 = qw / qo = 180 / 320 = 0.5625 STB water / STB oil.",
        "Step 4: Producing GOR on Day 5:\nGOR_5 = (256 * 1,000 scf) / 320 STB = 256,000 / 320 = 800.0 scf/STB.",
        "Step 5: Total cumulative liquid produced across all 5 days:\nNotice total daily liquid is constant: 400+100 = 500, 380+120 = 500, etc.\nTotal Liquid = 500 * 5 days = 2,500 STB (Oil = 1,800 STB, Water = 700 STB)."
      ],
      finalAnswer: "3-Day MA (Day 3) = 360 bbl/d | Day 5 WC = 36.0% | Day 5 WOR = 0.5625 | GOR = 800 scf/STB | Cum Liquid = 2,500 STB",
      engineeringSignificance: "This feature engineering script reveals that total liquid rate is rock-steady at 500 bbl/d while oil rate declines linearly by 20 bbl/d each day, matched exactly by a 20 bbl/d water increase. The reservoir is experiencing direct piston-like water displacement."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you use Python feature engineering to automate anomaly detection in a 200-well field?",
      sampleAnswer: "I build an automated daily ETL pipeline using Pandas and NumPy. For each well, the pipeline ingests raw 15-minute SCADA data and engineers five core diagnostic features: 1) 7-day rolling Z-scores of oil rate and flowing tubing pressure to catch abrupt meter dropouts or choke adjustments; 2) Instantaneous Water Cut and GOR with `np.where` guards against zero-division; 3) Cumulative daily uptime hours; 4) Pressure-rate divergence index (identifying wells where pressure drops while rate also drops, indicating scale or liquid loading); and 5) Rolling 14-day production momentum (`df['Oil_Rate'].pct_change(14)`). Wells triggering |Z| > 3.0 or experiencing an un-planned > 15% rate momentum drop are automatically flagged and exported to an exception report emailed to the field production engineer every morning at 6:00 AM.",
      conceptCheck: "Describe an end-to-end automated surveillance pipeline: data ingestion -> feature engineering -> threshold flagging -> exception reporting."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a reusable Python function `engineer_production_features(df)` that accepts a raw production DataFrame and returns clean columns for Liquid_Rate, Water_Cut, GOR, WOR, 7DMA, and Np."
    },
    checklist: [
      { id: "d63-c1", text: "Engineered core petroleum surveillance ratios (WC, GOR, WOR, Ql)", completed: false },
      { id: "d63-c2", text: "Applied rolling moving averages to smooth slugging noise", completed: false },
      { id: "d63-c3", text: "Implemented rolling Z-score anomaly detection in Pandas", completed: false },
      { id: "d63-c4", text: "Calculated rate derivatives and timeseries lag features using `.shift()`", completed: false },
      { id: "d63-c5", text: "Packaged feature engineering into a reusable Python function", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 64
  {
    dayNumber: 64,
    phaseId: 2,
    weekNumber: 8,
    title: "Production Visualization with Matplotlib & Seaborn",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Create publication-quality petroleum production charts: dual-axis rate vs time, semi-log rate vs cumulative oil, water cut diagnostic plots, and Seaborn correlation heatmaps.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Data visualization is how engineers communicate technical findings to managers, investors, and joint-venture partners. A Python script that produces high-resolution, professionally formatted decline curves, semi-log Arps diagnostic plots, and multi-well correlation matrices elevates an engineer's technical credibility. Using Matplotlib's object-oriented API (`fig, ax = plt.subplots()`) combined with Seaborn styling enables complete control over axis scales, twin axes, log grids, and petroleum color standards.",
      keyPoints: [
        "The Dual-Axis Rate vs Time Plot: Primary y-axis (left) displays Oil Rate and Water Rate (STB/d) on a linear or logarithmic scale; secondary y-axis (right, via `ax2 = ax.twinx()`) displays Gas Rate (Mscf/d), GOR, or Flowing Tubing Pressure (psi).",
        "Semi-Log Arps Diagnostic Plot: Plotting Oil Rate on a logarithmic y-axis (`ax.set_yscale('log')`) versus Cumulative Oil (Np) on a linear x-axis. Exponential decline forms a straight line; curvature reveals hyperbolic behavior.",
        "Seaborn Subsurface Correlation Heatmaps: Using `sns.heatmap(df.corr(), annot=True, cmap='coolwarm', vmin=-1, vmax=1)` to visualize correlations between reservoir properties (porosity, permeability, net pay, frac stages) and 12-month cumulative recovery (EUR).",
        "Color Standards & Formatting Best Practices: Green (`#2ca02c`) for Oil, Red (`#d62728`) for Gas, Blue (`#1f77b4`) for Water. Set clear labels with units: `ax.set_ylabel('Oil Rate [STB/d]', color='green')`. Use `ax.grid(True, which='both', linestyle='--', alpha=0.5)` for clean engineering gridlines.",
        "Multi-Panel Dashboards: Use `plt.subplots(2, 2, figsize=(14, 10))` to display: Top-Left: Rate vs Time, Top-Right: Rate vs Np, Bottom-Left: Water Cut vs Np, Bottom-Right: GOR vs Time."
      ],
      coreFormulas: [
        {
          name: "Matplotlib Twin Axis Syntax",
          formula: "ax1.plot(df['Date'], df['Oil_Rate'], color='green'); ax2 = ax1.twinx(); ax2.plot(df['Date'], df['GOR'], color='orange')",
          explanation: "Overlays two different engineering metrics with independent vertical scales on the same time axis."
        }
      ],
      fieldInsight: "Always use Matplotlib's object-oriented API (`fig, ax = plt.subplots()`) instead of state-machine `plt.plot()`! The object-oriented API allows exact control over subplots, secondary twin axes, date formatters, and export resolutions (`dpi=300`), which is essential for formal engineering reports."
    },
    watchOrRead: {
      type: "read",
      title: "Matplotlib Documentation: Creating Multiple Axes & Twin Axis Plots",
      url: "https://matplotlib.org/stable/gallery/subplots_axes_and_figures/two_scales.html",
      platform: "Matplotlib Official Documentation",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d64-q1",
          question: "Which Matplotlib method creates a secondary y-axis sharing the same x-axis (e.g. plotting Gas Rate on the right axis while Oil Rate is on the left)?",
          options: [
            "ax2 = ax.twinx()",
            "ax2 = ax.twiny()",
            "ax2 = ax.copy()",
            "ax2 = plt.secondary_axis()"
          ],
          correctOptionIndex: 0,
          explanation: "`ax.twinx()` creates a twin Axes sharing the x-axis with an independent y-axis on the right.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q2",
          question: "How do you configure the vertical y-axis to display logarithmic scaling in Matplotlib?",
          options: [
            "ax.set_yscale('log')",
            "ax.set_log()",
            "plt.logarithm(True)",
            "ax.scale = 'log10'"
          ],
          correctOptionIndex: 0,
          explanation: "`ax.set_yscale('log')` switches the vertical axis from linear to base-10 logarithmic scaling.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q3",
          question: "What is the primary visual indicator of exponential decline on a semi-log plot of Rate (log y) vs Cumulative Production (linear x)?",
          options: [
            "A horizontal flat line",
            "A straight downward-sloping line",
            "A parabolic curve opening upward",
            "A sine wave"
          ],
          correctOptionIndex: 1,
          explanation: "Since ln(q) = ln(qi) - D*t and q = qi - D*Np, plotting rate on a log or linear scale vs Np exhibits straight-line behavior.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d64-q4",
          question: "Which Seaborn function generates a colored matrix displaying Pearson correlation coefficients between multi-well geological and completion variables?",
          options: [
            "sns.heatmap()",
            "sns.scatterplot()",
            "sns.boxplot()",
            "sns.violinplot()"
          ],
          correctOptionIndex: 0,
          explanation: "`sns.heatmap(df.corr(), annot=True)` renders an annotated color-coded correlation grid, instantly highlighting key drivers of well performance.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q5",
          question: "How do you save a high-resolution, publication-ready production figure suitable for a technical paper or executive slide deck in Python?",
          options: [
            "plt.savefig('production_decline.png', dpi=300, bbox_inches='tight')",
            "Taking a screenshot with Windows Snipping Tool",
            "plt.print()",
            "plt.export_pdf(low_res=True)"
          ],
          correctOptionIndex: 0,
          explanation: "`plt.savefig()` with `dpi=300` and `bbox_inches='tight'` creates crisp, high-resolution vector/raster images with trimmed margins.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q6",
          question: "In Matplotlib date formatting, how do you format timestamps on the x-axis to display cleanly as 'YYYY-MM'?",
          options: [
            "import matplotlib.dates as mdates; ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))",
            "ax.dates = 'YYYY-MM'",
            "plt.format_dates('month')",
            "ax.set_xticklabels(['Jan', 'Feb'])"
          ],
          correctOptionIndex: 0,
          explanation: "`mdates.DateFormatter('%Y-%m')` formats datetime ticks with year and month, preventing overlapping label collisions.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q7",
          question: "Why should an engineer use `alpha` transparency (e.g. `alpha=0.6`) when plotting scatter points of 5,000 wells?",
          options: [
            "To make the plot invisible",
            "To mitigate overplotting: dense overlapping clusters appear darker, revealing true data density distributions",
            "To reduce file size",
            "Because Python runs out of ink"
          ],
          correctOptionIndex: 1,
          explanation: "Alpha transparency solves overplotting, visually highlighting where thousands of well records cluster together.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q8",
          question: "What plot layout displays a 4-panel grid comparing Oil Rate, Gas Rate, Water Cut, and Pressure in a single figure window?",
          options: [
            "fig, axes = plt.subplots(2, 2, figsize=(14, 10))",
            "plt.plot(4)",
            "fig = plt.four_panels()",
            "plt.grid(4)"
          ],
          correctOptionIndex: 0,
          explanation: "`plt.subplots(2, 2)` generates a 2x2 grid of Axes objects (`axes[0,0]`, `axes[0,1]`, etc.) in a single unified figure.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q9",
          question: "Which plot type is best suited to compare the distribution of 12-month cumulative oil production across 4 different artificial lift types?",
          options: [
            "Seaborn Boxplot (`sns.boxplot(x='Lift_Type', y='Cum_Oil', data=df)`)",
            "A single pie chart",
            "A 3D surface plot",
            "A text printout"
          ],
          correctOptionIndex: 0,
          explanation: "Boxplots and violin plots compare medians, interquartile ranges, and outliers across categorical operating groups.",
          topic: "Python for Petroleum"
        },
        {
          id: "d64-q10",
          question: "What command ensures that subplots, titles, and axis labels do not collide or overlap with each other in Matplotlib?",
          options: [
            "plt.tight_layout()",
            "plt.separate()",
            "plt.expand()",
            "plt.no_collision()"
          ],
          correctOptionIndex: 0,
          explanation: "`plt.tight_layout()` automatically adjusts subplot padding and label spacing for clean visual presentation.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A petroleum engineer writes a script to plot a semi-log Arps decline curve for Well MIT-14.\nGiven historical points on the semi-log plot (ln(q) vs time [months]):\n- At Month 0: q = 800 STB/d  -> ln(800) = 6.6846\n- At Month 24: q = 439 STB/d -> ln(439) = 6.0845\nCalculate: 1) The slope of the semi-log line (m = -D_monthly), 2) Nominal monthly decline rate D_monthly (%/month), 3) Nominal annual decline rate D_annual (%/year), 4) Effective annual decline rate (d_annual %), and 5) The projected rate at Month 48 under this trend.",
      givenValues: [
        { label: "Rate at Month 0", value: "800 STB/d" },
        { label: "Rate at Month 24", value: "439 STB/d" },
        { label: "Elapsed Time", value: "24 months" }
      ],
      stepByStepSolution: [
        "Step 1: Slope m = [ln(q24) - ln(q0)] / (t24 - t0) = [6.0845 - 6.6846] / 24 = -0.6001 / 24 = -0.0250 / month.",
        "Step 2: Nominal monthly decline rate D_monthly = -m = 0.0250 / month = 2.50% / month.",
        "Step 3: Nominal annual decline rate D_annual = D_monthly * 12 = 0.0250 * 12 = 0.3000 / year = 30.0% / year.",
        "Step 4: Effective annual decline rate d_annual:\nd_annual = 1 - exp(-D_annual) = 1 - exp(-0.30) = 1 - 0.7408 = 0.2592 = 25.92% / year.",
        "Step 5: Projected Rate at Month 48 (24 months after Month 24):\nq(48) = q(24) * exp(-D_monthly * 24) = 439 * exp(-0.025 * 24) = 439 * exp(-0.60) = 439 * 0.54881 = 240.9 STB/d.\n(Or from month 0: 800 * exp(-0.025 * 48) = 800 * exp(-1.20) = 800 * 0.30119 = 240.9 STB/d)."
      ],
      finalAnswer: "Slope = -0.0250/mo | D_monthly = 2.5%/mo | D_annual = 30.0%/yr | d_annual = 25.92% | Rate(Month 48) = 240.9 STB/d",
      engineeringSignificance: "Plotting this in Matplotlib with a semi-log y-axis displays a straight line connecting 800 STB/d to 439 STB/d and projecting forward to 241 STB/d at month 48. The visual slope directly reflects the 25.9% effective annual decline rate."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you use data visualization to communicate technical risk when presenting a multi-well development forecast to non-technical investors?",
      sampleAnswer: "I avoid showing a single deterministic line, which creates a false sense of certainty. Instead, I use Matplotlib to present probabilistic 'P10, P50, and P90' recovery fan charts. I plot the historical actual production in solid black, and then display the median P50 forecast as a bold blue line flanked by a shaded 80% confidence interval (P90 downside to P10 upside) generated from Monte Carlo decline parameter sampling. I add a secondary twin axis showing cumulative capital expenditure and breakeven payback months. Underneath, I include a Seaborn heatmap showing the primary geological risk factors (water cut sensitivity and frac stage spacing). This visual approach immediately communicates downside risk, upside potential, and capital recovery timelines in an intuitive, transparent format.",
      conceptCheck: "Frame visualization around risk communication: P10/P50/P90 shaded fans, secondary investment metrics, and correlation heatmaps."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Build a Python script that loads production data and plots a 2x2 diagnostic figure: Rate vs Time (dual-axis with GOR), Semi-Log Rate vs Np, Water Cut vs Np, and an inter-well correlation heatmap."
    },
    checklist: [
      { id: "d64-c1", text: "Mastered Matplotlib object-oriented plotting (`fig, ax = plt.subplots`)", completed: false },
      { id: "d64-c2", text: "Built dual-axis rate vs time charts using `ax.twinx()`", completed: false },
      { id: "d64-c3", text: "Created semi-log decline diagnostic plots with logarithmic y-scales", completed: false },
      { id: "d64-c4", text: "Visualized multi-variable correlations using Seaborn heatmaps", completed: false },
      { id: "d64-c5", text: "Exported publication-quality figures at 300 DPI", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 65
  {
    dayNumber: 65,
    phaseId: 2,
    weekNumber: 8,
    title: "Automated Arps Decline Curve Analysis in Python",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Automate Arps decline curve fitting using SciPy `curve_fit`, optimize qi, Di, and b parameters, and calculate EUR and remaining reserves programmatically.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Manually fitting decline curves in commercial software or Excel spreadsheets for hundreds of wells takes weeks. In Python, an engineer can define Arps mathematical equations as functions, pass historical rate-time arrays into `scipy.optimize.curve_fit`, apply physics-based parameter bounds (e.g. 0 <= b <= 1, Di > 0), and fit hundreds of wells in under 10 seconds. This automated workflow calculates Estimated Ultimate Recovery (EUR) and remaining reserves programmatically.",
      keyPoints: [
        "Defining Arps Functions in Python: `def arps_hyperbolic(t, qi, Di, b): return qi / (1.0 + b * Di * t)**(1.0 / b)` and `def arps_exponential(t, qi, Di): return qi * np.exp(-Di * t)`.",
        "Non-Linear Optimization with SciPy: `popt, pcov = curve_fit(arps_hyperbolic, t_data, q_data, p0=[qi_init, Di_init, 0.4], bounds=([0, 0, 0.001], [np.inf, np.inf, 1.0]))`. The `bounds` argument enforces physical subsurface constraints.",
        "Modified Hyperbolic Function: Implement logic that evaluates instantaneous decline `D(t) = Di / (1 + b*Di*t)`. When D(t) drops to D_terminal (e.g. 0.06/year), transition to exponential decay.",
        "Programmatic EUR Calculation: Numerical integration using `scipy.integrate.quad` or closed-form Arps analytical cumulative formulas evaluated from t = 0 to t = t_economic_limit.",
        "Batch Portfolio Looping: Wrap the fitting function inside a `for well_id in df['Well_ID'].unique():` loop, storing fitted parameters (qi, Di, b, EUR, R²) in a summary results DataFrame."
      ],
      coreFormulas: [
        {
          name: "SciPy Curve Fit Call for Hyperbolic Decline",
          formula: "popt, pcov = curve_fit(arps_hyperbolic, t_data, q_data, p0=[q0, 0.3, 0.5], bounds=([0, 0, 0], [np.inf, 2.0, 1.0]))",
          explanation: "Optimizes qi, Di, and b while strictly constraining b between 0.0 and 1.0."
        }
      ],
      fieldInsight: "Always provide intelligent initial guesses (`p0`) to `curve_fit`! Setting `p0=[q_data.max(), 0.3, 0.4]` gives the Levenberg-Marquardt or TRF algorithm a physically realistic starting point. Without `p0`, optimization can wander into local mathematical minima or fail to converge."
    },
    watchOrRead: {
      type: "read",
      title: "SciPy Documentation: scipy.optimize.curve_fit Non-linear Least Squares",
      url: "https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html",
      platform: "SciPy Official Documentation",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d65-q1",
          question: "Which SciPy function performs non-linear least-squares fitting of user-defined functions (such as Arps equations) to historical production data?",
          options: [
            "scipy.optimize.curve_fit",
            "scipy.linalg.inv",
            "scipy.stats.ttest",
            "scipy.spatial.distance"
          ],
          correctOptionIndex: 0,
          explanation: "`scipy.optimize.curve_fit` optimizes parameters of an arbitrary Python function by minimizing the sum of squared residuals.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q2",
          question: "In `curve_fit(f, xdata, ydata, bounds=(lower_bounds, upper_bounds))`, why is the `bounds` parameter critical for decline curve analysis?",
          options: [
            "It turns off Python memory limits",
            "It enforces physical reservoir constraints (e.g., qi > 0, Di > 0, and 0 <= b <= 1.0), preventing unphysical negative rates or infinite reserve projections",
            "It speeds up plotting",
            "Bounds are only used for geography"
          ],
          correctOptionIndex: 1,
          explanation: "Without bounds, unconstrained regression can pick b = -0.5 or b = 3.5, which violate boundary-dominated reservoir physics.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q3",
          question: "What does the second return value `pcov` from `popt, pcov = curve_fit(...)` represent?",
          options: [
            "The estimated covariance matrix of the fitted parameters, whose diagonal elements provide parameter variances for computing standard errors",
            "The percentage of water produced",
            "The name of the operator",
            "The depth of the well"
          ],
          correctOptionIndex: 0,
          explanation: "`pcov` is the covariance matrix. Taking `np.sqrt(np.diag(pcov))` gives the 1-sigma standard error for each fitted parameter (qi, Di, b).",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q4",
          question: "What Python syntax defines the classical Arps hyperbolic rate function?",
          options: [
            "def arps(t, qi, Di, b): return qi / (1.0 + b * Di * t)**(1.0 / b)",
            "def arps(t, qi, Di, b): return qi * exp(-Di * t)",
            "def arps(t, qi, Di, b): return qi + Di * t",
            "def arps(t, qi, Di, b): return qi * b * t"
          ],
          correctOptionIndex: 0,
          explanation: "This directly translates q(t) = qi / (1 + b*Di*t)^(1/b) into standard Python syntax.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q5",
          question: "When automating DCA across 200 wells, how should your script handle wells that fail to converge or throw an exception in `curve_fit`?",
          options: [
            "Let the script crash and stop processing the remaining 199 wells",
            "Wrap the fit in a `try...except RuntimeError:` block, logging the failed well ID to an error list and falling back to a default exponential fit",
            "Delete the computer operating system",
            "Multiply all rates by zero"
          ],
          correctOptionIndex: 1,
          explanation: "Robust batch pipelines catch `RuntimeError` and `ValueError`, log the anomaly, and apply a fallback model without breaking the entire portfolio loop.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q6",
          question: "How is the coefficient of determination (R²) calculated in Python between actual rate `q_act` and fitted rate `q_fit`?",
          options: [
            "R2 = 1.0 - (np.sum((q_act - q_fit)**2) / np.sum((q_act - np.mean(q_act))**2))",
            "R2 = np.mean(q_act) / np.mean(q_fit)",
            "R2 = q_act.max() - q_fit.min()",
            "R2 = np.corrcoef(q_act, q_fit)"
          ],
          correctOptionIndex: 0,
          explanation: "R² = 1 - (SS_res / SS_tot), measuring the proportion of variance in historical rate explained by the Arps model.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q7",
          question: "If an automated Python fit produces b = 0.98 for an undersaturated solution-gas drive well, what physical adjustment should the engineer code into the workflow?",
          options: [
            "Accept b = 0.98 unconditionally",
            "Cap the upper bound of b at 0.5 in `bounds` for solution-gas drive reservoirs, because physical gas breakout physics caps b between 0.1 and 0.4",
            "Change the time units from days to seconds",
            "Shut down the pipeline"
          ],
          correctOptionIndex: 1,
          explanation: "Subsurface engineering physics must govern the algorithm: setting `bounds=([0, 0, 0], [np.inf, 2.0, 0.5])` enforces solution-gas domain constraints.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d65-q8",
          question: "Which SciPy integration function can compute cumulative production EUR by numerically integrating an arbitrary decline function from t=0 to t=t_abandonment?",
          options: [
            "scipy.integrate.quad",
            "scipy.optimize.minimize",
            "scipy.interpolate.interp1d",
            "scipy.signal.find_peaks"
          ],
          correctOptionIndex: 0,
          explanation: "`quad` performs adaptive Gauss-Kronrod quadrature numerical integration of 1D functions.",
          topic: "Python for Petroleum"
        },
        {
          id: "d65-q9",
          question: "In automated DCA, how is the time to economic limit (t_econ) determined programmatically for exponential decline?",
          options: [
            "t_econ = (np.log(qi) - np.log(q_econ)) / Di",
            "t_econ = qi / q_econ",
            "t_econ = 30 * 365",
            "t_econ = Di * q_econ"
          ],
          correctOptionIndex: 0,
          explanation: "Solving q_econ = qi * exp(-Di * t) gives t_econ = ln(qi / q_econ) / Di.",
          topic: "Decline Curve Analysis"
        },
        {
          id: "d65-q10",
          question: "What is the primary advantage of storing multi-well DCA results in a Pandas DataFrame and exporting to Parquet or CSV?",
          options: [
            "It enables immediate corporate aggregation, comparison against production targets, and direct loading into financial cash flow models",
            "It turns data into PDF",
            "It locks the numbers forever",
            "It bypasses tax audits"
          ],
          correctOptionIndex: 0,
          explanation: "Structured summary outputs integrate seamlessly into upstream economic planning models, reserves software, and corporate dashboards.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A Python automated DCA script executes `curve_fit` on 36 months of production data from Well MIT-Bakken-04.\nThe optimization converges with parameters:\n- Fitted initial rate qi = 1,200.0 STB/d\n- Fitted initial nominal decline Di = 0.60 / year (0.050 / month)\n- Fitted hyperbolic exponent b = 0.50\n- Field economic limit q_econ = 30 STB/d\nCalculate: 1) Production rate at t = 24 months (2.0 years), 2) Instantaneous nominal annual decline rate D(t) at t = 24 months, 3) Time in years until rate reaches economic limit (t_econ), and 4) Programmatic EUR down to q_econ.",
      givenValues: [
        { label: "Fitted qi", value: "1,200 STB/d" },
        { label: "Fitted Di", value: "0.60 / year" },
        { label: "Fitted b", value: "0.50" },
        { label: "Economic Limit", value: "30 STB/d" }
      ],
      stepByStepSolution: [
        "Step 1: Production rate at t = 2.0 years:\nq(2) = qi / (1 + b * Di * t)^(1/b)\nq(2) = 1,200 / (1 + 0.50 * 0.60 * 2.0)^(1 / 0.50)\nDenominator term = 1 + 0.60 = 1.60\nExponent = 1 / 0.50 = 2.0\n(1.60)^2.0 = 2.56\nq(2) = 1,200 / 2.56 = 468.75 STB/d.",
        "Step 2: Instantaneous decline rate D at 2 years:\nD(2) = Di / (1 + b * Di * t) = 0.60 / 1.60 = 0.375 / year (37.5%/yr).",
        "Step 3: Time to economic limit q_econ = 30 STB/d:\nq_econ = qi / (1 + b * Di * t_econ)^(1/b)\n30 = 1,200 / (1 + 0.50 * 0.60 * t_econ)^2.0\n(1 + 0.30 * t_econ)^2.0 = 1,200 / 30 = 40.0\n1 + 0.30 * t_econ = sqrt(40.0) = 6.32456\n0.30 * t_econ = 5.32456\nt_econ = 5.32456 / 0.30 = 17.75 years.",
        "Step 4: Cumulative Oil EUR down to 30 STB/d:\nConvert Di to daily: Di_daily = 0.60 / 365 = 0.0016438 / day.\nFormula: Np = [qi^b / (Di_daily * (1 - b))] * [qi^(1-b) - q_econ^(1-b)]\nqi^0.5 = sqrt(1,200) = 34.6410\nDenominator = 0.0016438 * (1 - 0.50) = 0.0008219\nFraction = 34.6410 / 0.0008219 = 42,147.5\nqi^0.5 - q_econ^0.5 = sqrt(1,200) - sqrt(30) = 34.6410 - 5.4772 = 29.1638\nEUR = 42,147.5 * 29.1638 = 1,229,182 STB."
      ],
      finalAnswer: "Rate(2 yrs) = 468.8 STB/d | D(2 yrs) = 37.5%/yr | Well Life = 17.75 years | EUR = 1,229,182 STB",
      engineeringSignificance: "This script output matches professional reserves software (such as Aries, ComboCurve, or Val Nav) to three decimal places. Being able to code this optimization in Python proves you can build corporate-grade reserve forecasting tools from scratch."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you validate that an automated Python DCA algorithm is not producing unphysical or hallucinatory reserve estimates across a 500-well asset?",
      sampleAnswer: "I implement automated engineering sanity checks and guardrails at three stages: 1) Hard Parameter Bounds: During optimization in `curve_fit`, I bound qi between 0.5x and 2.0x of the well's 30-day peak rate, bound Di between 5% and 90%/year, and bound b between 0.0 and 1.0 (or cap at 1.2 with mandatory 6% terminal exponential decline for unbeatables). 2) Statistical & Physical Quality Filters: After fitting, the pipeline checks R² (flagging fits with R² < 0.70 for manual review), checks root-mean-square error (RMSE), and flags any well where the fitted EUR exceeds the reservoir's volumetric Original Oil in Place (OOIP * Maximum Theoretical Recovery Factor). 3) Exception Dashboard: All flagged outlier wells (e.g. wells with poor R², extreme b-values, or severe downtime) are routed to an automated 'Audit Exception' table for manual inspection, ensuring that 90% of normal wells are automated while the 10% problematic wells receive focused human engineering scrutiny.",
      conceptCheck: "Describe parameter bounding, recovery factor sanity checks, and exception management for automated pipelines."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a complete Python script `automated_dca.py` utilizing `scipy.optimize.curve_fit` that reads production data, fits Arps hyperbolic parameters with bounds [0, 0, 0] to [inf, inf, 1.0], and outputs EUR."
    },
    checklist: [
      { id: "d65-c1", text: "Implemented Arps rate equations as vectorized Python functions", completed: false },
      { id: "d65-c2", text: "Applied `scipy.optimize.curve_fit` with parameter initializations (`p0`)", completed: false },
      { id: "d65-c3", text: "Enforced physical subsurface bounds on qi, Di, and hyperbolic b", completed: false },
      { id: "d65-c4", text: "Calculated Estimated Ultimate Recovery (EUR) and remaining reserves", completed: false },
      { id: "d65-c5", text: "Built error handling (`try...except`) for batch multi-well processing", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 66
  {
    dayNumber: 66,
    phaseId: 2,
    weekNumber: 8,
    title: "Well Log LAS File Parsing in Python with Lasio",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Master parsing Canadian Well Logging Society (CWLS) LAS 2.0 files using Python `lasio`, inspect headers and curves, handle nulls (-999.25), and plot wireline logs in Matplotlib.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In petrophysics and subsurface geology, Log ASCII Standard (LAS) is the universal file format for digital wireline and LWD logs. While proprietary geological interpretation suites charge tens of thousands of dollars per seat, Python's open-source `lasio` library enables petroleum engineers to read, manipulate, calculate, and write LAS files directly. An engineer who can write Python scripts to parse 50 LAS files, extract Gamma Ray, Resistivity, and Porosity curves, and plot multi-track log displays is an invaluable asset to any exploration or development team.",
      keyPoints: [
        "The CWLS LAS File Structure: 1) `~Version` (LAS 2.0 / 3.0 specifications), 2) `~Well` (Well name, API number, UWI, surface coordinates, KB elevation, start/stop depth, step), 3) `~Curves` (Curve mnemonics, units, descriptions: DEPT, GR, NPHI, RHOB, ILD), 4) `~Parameter` (Mud type, mud weight, Rm, Rmf, bottomhole temperature), 5) `~Ascii` (Raw data matrix).",
        "Reading LAS with Lasio: `import lasio; las = lasio.read('well_01.las')`. Inspect header: `las.well.WELL.value`, `las.well.API.value`, `las.curves`.",
        "Converting to Pandas DataFrame: `df = las.df()`. Sets depth as index automatically, enabling instant Pandas filtering and petrophysical vectorized math.",
        "Handling Null Values: Standard petroleum logging null values are `-999.25` or `-9999.0`. `lasio` automatically replaces standard null values with `np.nan`. Verify using `df.replace(-999.25, np.nan, inplace=True)`.",
        "Plotting Log Tracks in Matplotlib: Construct standard 3-track display: Track 1: Gamma Ray (0–150 API) + Caliper; Depth Track; Track 2: Deep/Shallow Resistivity (0.2–2000 ohm-m on log scale); Track 3: Density Porosity (RHOB 1.95–2.95 g/cm³) + Neutron Porosity (NPHI 0.45– -0.15). Invert y-axis: `ax.invert_yaxis()`."
      ],
      coreFormulas: [
        {
          name: "Lasio Conversion to Pandas DataFrame",
          formula: "import lasio; las = lasio.read('well.las'); df = las.df()",
          explanation: "Converts CWLS standard LAS well log into a Pandas DataFrame indexed by measured depth."
        }
      ],
      fieldInsight: "Watch out for curve mnemonic variations across logging contractors! Schlumberger might name deep resistivity 'AHT90' or 'ILD', Halliburton calls it 'AT90', and Baker Hughes calls it 'RT'. Always write a normalization dictionary in Python: `mnemonic_map = {'AHT90': 'RT', 'ILD': 'RT', 'AT90': 'RT'}` to standardize curves across different service companies."
    },
    watchOrRead: {
      type: "read",
      title: "Lasio Documentation: Working with CWLS Log ASCII Standard Files in Python",
      url: "https://lasio.readthedocs.io/en/latest/",
      platform: "Lasio ReadTheDocs",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d66-q1",
          question: "Which Python package is specifically designed to read, inspect, and write CWLS Log ASCII Standard (.las) files?",
          options: [
            "lasio",
            "openpyxl",
            "scikit-learn",
            "flask"
          ],
          correctOptionIndex: 0,
          explanation: "`lasio` is the open-source petrophysical package dedicated to parsing LAS 1.2, 2.0, and 3.0 files.",
          topic: "Python for Petroleum"
        },
        {
          id: "d66-q2",
          question: "What is the standard wireline logging null value commonly encountered in raw LAS files?",
          options: [
            "-999.25 (or -9999)",
            "0.000",
            "999999",
            "-1.0"
          ],
          correctOptionIndex: 0,
          explanation: "The CWLS standard designates -999.25 as the universal null value representing missing readings or washed-out tool intervals.",
          topic: "Well Logging"
        },
        {
          id: "d66-q3",
          question: "How do you convert a parsed `lasio` object named `las` into a standard Pandas DataFrame indexed by depth?",
          options: [
            "df = las.df()",
            "df = pd.to_dataframe(las)",
            "df = las.convert_table()",
            "df = las.data"
          ],
          correctOptionIndex: 0,
          explanation: "`las.df()` returns the curve data as a Pandas DataFrame with measured depth automatically assigned as the index.",
          topic: "Python for Petroleum"
        },
        {
          id: "d66-q4",
          question: "Why must the vertical y-axis be inverted (`ax.invert_yaxis()`) when plotting well logs in Matplotlib?",
          options: [
            "To display Depth increasing downward from surface (0 ft at the top to 10,000 ft at the bottom), following standard petrophysical convention",
            "Because Python plots upside down by default",
            "To hide drilling errors",
            "To make resistivity appear higher"
          ],
          correctOptionIndex: 0,
          explanation: "In wireline logs, depth increases downward. Inverting the y-axis puts surface at the top and total depth at the bottom.",
          topic: "Well Logging"
        },
        {
          id: "d66-q5",
          question: "How do you access the Well Name stored in the LAS header using `lasio`?",
          options: [
            "las.well.WELL.value",
            "las.header['name']",
            "las.find_well()",
            "las.metadata.name"
          ],
          correctOptionIndex: 0,
          explanation: "`las.well.WELL.value` retrieves the well name string from the `~Well` header section.",
          topic: "Python for Petroleum"
        },
        {
          id: "d66-q6",
          question: "In a standard 3-track petrophysical log display, which track typically contains the Deep Resistivity curve plotted on a 4-decade logarithmic grid?",
          options: [
            "Track 2 (Middle Track)",
            "Track 1 (Left Track)",
            "Track 3 (Right Track)",
            "Track 4"
          ],
          correctOptionIndex: 0,
          explanation: "By convention, Track 1 displays Lithology (GR/Caliper), Track 2 displays Resistivity (0.2–2000 ohm-m log scale), and Track 3 displays Porosity (RHOB/NPHI).",
          topic: "Well Logging"
        },
        {
          id: "d66-q7",
          question: "How do you write a modified DataFrame back to a new, standardized LAS file using `lasio`?",
          options: [
            "las.set_data(df); las.write('cleaned_well.las', version=2.0)",
            "df.to_csv('cleaned_well.las')",
            "las.save_as_text()",
            "las.export_pdf()"
          ],
          correctOptionIndex: 0,
          explanation: "`las.set_data(df)` updates the internal curve matrix, and `las.write()` serializes it back to valid CWLS LAS format.",
          topic: "Python for Petroleum"
        },
        {
          id: "d66-q8",
          question: "Why do different wireline contractors use different mnemonics for the exact same physical measurement (e.g. GR vs SGR, or ILD vs RT vs AT90)?",
          options: [
            "Contractors use proprietary sensor trademarks and tool generation names; engineers must build mnemonic translation dictionaries to harmonize datasets",
            "They measure completely different physics",
            "The government mandates different letters",
            "It depends on the language of the country"
          ],
          correctOptionIndex: 0,
          explanation: "Service companies brand their tools with proprietary names; creating a dictionary map to standard petrophysical identifiers is essential.",
          topic: "Well Logging"
        },
        {
          id: "d66-q9",
          question: "Which Matplotlib method fills the crossover area between Neutron and Density porosity curves to highlight gas zones?",
          options: [
            "ax.fill_betweenx(depth, nphi, rhob_por, where=(rhob_por > nphi), color='yellow', alpha=0.5)",
            "ax.color_crossover()",
            "plt.paint_gas()",
            "ax.highlight_gas()"
          ],
          correctOptionIndex: 0,
          explanation: "`fill_betweenx` shades the area between two horizontal curve values across depth intervals satisfying a conditional boolean mask.",
          topic: "Python for Petroleum"
        },
        {
          id: "d66-q10",
          question: "What does `las.curves` contain in a loaded `lasio` object?",
          options: [
            "A list of CurveItem objects detailing mnemonic, unit, value, and description for every curve in the file",
            "A 3D seismic volume",
            "The price of drilling pipe",
            "The chemical formula of oil"
          ],
          correctOptionIndex: 0,
          explanation: "`las.curves` stores the complete list of curve metadata (mnemonic, units, descriptions) defined in the `~Curves` section.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A petrophysicist uses Python `lasio` to parse a reservoir interval between 8,000 ft and 8,050 ft (50 ft interval with 0.5 ft depth sampling = 101 depth samples).\nThe script extracts Gamma Ray (GR [API]) and Deep Resistivity (RT [ohm-m]):\n- GR baseline: GR_clean (sand) = 25 API, GR_shale = 125 API\n- Over the 50 ft interval, the script finds that 35 depth samples have GR <= 50 API (clean sandstone) and RT >= 20.0 ohm-m (hydrocarbon bearing).\nCalculate: 1) The Gamma Ray Index (IGR) threshold corresponding to GR = 50 API, 2) The total Gross Interval Thickness (ft), 3) The Net Pay Thickness (ft) meeting the criteria, and 4) The Net-to-Gross (NTG) ratio of this reservoir section.",
      givenValues: [
        { label: "Depth Interval", value: "8,000 ft to 8,050 ft (50 ft gross)" },
        { label: "Depth Step", value: "0.5 ft (101 samples)" },
        { label: "GR Clean / GR Shale", value: "25 API / 125 API" },
        { label: "Pay Criteria", value: "GR <= 50 API and RT >= 20.0 ohm-m" },
        { label: "Qualifying Samples", value: "35 samples" }
      ],
      stepByStepSolution: [
        "Step 1: Gamma Ray Index at GR = 50 API:\nIGR = (GR - GR_clean) / (GR_shale - GR_clean) = (50 - 25) / (125 - 25) = 25 / 100 = 0.25 (25% shale index).",
        "Step 2: Gross Interval Thickness = 8,050 ft - 8,000 ft = 50.0 ft.",
        "Step 3: Net Pay Thickness:\nEach depth sample represents a 0.5 ft interval.\nNet Pay = Qualifying Samples * Depth Step = 35 samples * 0.5 ft/sample = 17.5 ft.",
        "Step 4: Net-to-Gross (NTG) ratio = Net Pay / Gross Interval = 17.5 ft / 50.0 ft = 0.350 = 35.0%."
      ],
      finalAnswer: "IGR threshold = 0.25 | Gross Interval = 50.0 ft | Net Pay = 17.5 ft | Net-to-Gross = 35.0%",
      engineeringSignificance: "This simple 3-line Python calculation automates net pay cutoff determination. Instead of a petrophysicist spending hours manually picking intervals on paper, a Python script applies this across 100 well logs in seconds, standardizing net pay mapping across the entire field."
    },
    interview: {
      durationMinutes: 15,
      question: "Walk me through how you build a Python script to ingest raw LAS well logs and generate an automated petrophysical quick-look report.",
      sampleAnswer: "I structure the script into four modular components: 1) Ingestion & Normalization: Use `lasio.read()` to parse the file, extract KB elevation and well metadata from the `~Well` section, and convert curves into a Pandas DataFrame using `las.df()`. I run a mnemonic harmonization dictionary to standardize vendor curves into canonical names: `GR`, `RT`, `RHOB`, `NPHI`, `CALI`. 2) Quality Control & Null Handling: Replace logging nulls (-999.25) with `np.nan`. Check caliper vs bit size to flag borehole washouts (where density readings are untrustworthy). 3) Vectorized Petrophysical Calculations: Compute Shale Volume (Vsh) via Larionov formula from GR, compute effective porosity (Phie) from density-neutron combination, and calculate water saturation (Sw) using Archie's equation with formation water resistivity Rw. 4) Visualization & Reporting: Use Matplotlib subplots to generate a 3-track log display (Lithology, Resistivity, Porosity with shaded gas crossover and net pay flags) and save as high-resolution PNG, while exporting a summary Net Pay and average porosity table to CSV.",
      conceptCheck: "Structure the answer systematically: Ingestion -> QC/harmonization -> Vectorized petrophysics -> Visualization/export."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a Python script `log_viewer.py` using `lasio` and `matplotlib` that loads a sample LAS file, cleans nulls, and plots a 3-track wireline log display with inverted depth axis."
    },
    checklist: [
      { id: "d66-c1", text: "Understood CWLS LAS 2.0 file architecture and header blocks", completed: false },
      { id: "d66-c2", text: "Parsed LAS files into Pandas DataFrames using `lasio`", completed: false },
      { id: "d66-c3", text: "Handled logging null values (-999.25) and curve mnemonic mapping", completed: false },
      { id: "d66-c4", text: "Created a 3-track log visualization with inverted depth in Matplotlib", completed: false },
      { id: "d66-c5", text: "Calculated Net Pay and Net-to-Gross (NTG) from digital log curves", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 67
  {
    dayNumber: 67,
    phaseId: 2,
    weekNumber: 8,
    title: "Petrophysical Calculations in Python: Archie, Vsh & Net Pay",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Write fully vectorized petrophysical algorithms in Python: Larionov shale volume, density porosity, Archie water saturation, and cutoffs for Net Pay.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Petrophysical interpretation translates raw geophysical wireline measurements into fundamental reservoir storage and flow properties: How much shale is present? What is the effective porosity? What fraction of the pore space contains hydrocarbons? Executing these calculations in vectorized Python allows an engineer to evaluate an entire 10,000 ft borehole with 20,000 depth samples in less than 50 milliseconds, applying customizable cutoffs to determine net reservoir and net pay.",
      keyPoints: [
        "Shale Volume (Vsh) from Gamma Ray: Linear index `IGR = (GR - GR_clean) / (GR_shale - GR_clean)`. Non-linear Larionov for Tertiary rocks: `Vsh = 0.083 * (2**(3.7 * IGR) - 1.0)`. Larionov for Older Mesozoic rocks: `Vsh = 0.33 * (2**(2.0 * IGR) - 1.0)`.",
        "Total & Effective Porosity: Density porosity: `phi_d = (rho_matrix - RHOB) / (rho_matrix - rho_fluid)`. Density-Neutron combination: `phi_total = sqrt((phi_d**2 + NPHI**2) / 2.0)`. Effective Porosity: `phi_e = phi_total * (1.0 - Vsh)`.",
        "Archie Water Saturation (Sw): `Sw = ((a * Rw) / ((phi_e**m) * RT))**(1.0 / n)`. Clip physically: `Sw = np.clip(Sw, 0.0, 1.0)`. Hydrocarbon saturation: `Sh = 1.0 - Sw`.",
        "Net Pay Cutoff Logic: Define boolean masks: 1) Reservoir Sand: `Vsh <= 0.30` and `phi_e >= 0.08`; 2) Net Pay: Reservoir Sand AND `Sw <= 0.50`. Compute `Net_Pay = len(df[net_pay_mask]) * depth_step`.",
        "Reservoir Summary Metrics: Calculate average porosity across net pay: `phi_avg = df.loc[net_pay_mask, 'phi_e'].mean()`, and average water saturation: `Sw_avg = df.loc[net_pay_mask, 'Sw'].mean()`."
      ],
      coreFormulas: [
        {
          name: "Larionov Older Rocks Shale Volume",
          formula: "Vsh = 0.33 * (2.0**(2.0 * IGR) - 1.0)",
          explanation: "Non-linear correction accounting for feldspars and radioactive non-clay minerals."
        },
        {
          name: "Vectorized Archie Water Saturation",
          formula: "Sw = np.clip(((a * Rw) / (df['phi_e']**m * df['RT']))**(1.0 / n), 0.0, 1.0)",
          explanation: "Vectorized Archie equation bounded between 0% and 100% water saturation."
        }
      ],
      fieldInsight: "Always use `np.clip(Sw, 0.0, 1.0)` on your calculated water saturation! In tight or washed-out zones where porosity is low or resistivity is high, raw Archie calculations can output mathematically impossible saturations like -0.05 or 1.45. Bounding Sw between 0 and 1 maintains physical realism."
    },
    watchOrRead: {
      type: "read",
      title: "PetroWiki: Petrophysical Calculation Workflows and Archie Saturation",
      url: "https://petrowiki.spe.org/Water_saturation_determination",
      platform: "SPE PetroWiki",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d67-q1",
          question: "Why is the non-linear Larionov shale volume equation preferred over the simple linear Gamma Ray Index (IGR) in consolidated sandstones?",
          options: [
            "Linear IGR systematically overestimates shale volume because radioactive heavy minerals (zircon, mica, feldspar) in clean sands elevate GR readings",
            "Linear IGR cannot be calculated on computers",
            "Larionov makes all shale disappear",
            "Larionov was mandated by OPEC"
          ],
          correctOptionIndex: 0,
          explanation: "Non-linear equations (Larionov, Steiber) correct for non-clay radioactivity, preventing clean sand from being falsely classified as shale.",
          topic: "Well Logging"
        },
        {
          id: "d67-q2",
          question: "In Python, what is the fastest and most efficient way to compute Archie water saturation across 50,000 depth rows?",
          options: [
            "Vectorized NumPy/Pandas array math: `Sw = ((a * Rw) / (df['phi']**m * df['RT']))**(1/n)`",
            "A Python `for` loop iterating row by row",
            "Exporting to Excel, calculating in a column, and importing back",
            "Calling a web API for every depth point"
          ],
          correctOptionIndex: 0,
          explanation: "Vectorized array operations execute in compiled C memory, completing 50,000 rows in a few milliseconds.",
          topic: "Python for Petroleum"
        },
        {
          id: "d67-q3",
          question: "What does `df['Sw'].clip(lower=0.0, upper=1.0)` do in a petrophysical Python script?",
          options: [
            "It caps water saturation between physical limits of 0% (completely hydrocarbon saturated) and 100% (completely water saturated)",
            "It deletes all water",
            "It converts water to oil",
            "It calculates porosity"
          ],
          correctOptionIndex: 0,
          explanation: "`.clip(0.0, 1.0)` eliminates unphysical artifacts (Sw > 1.0 or Sw < 0.0) caused by log noise or shale contamination.",
          topic: "Python for Petroleum"
        },
        {
          id: "d67-q4",
          question: "How is Effective Porosity (phi_e) calculated from Total Porosity (phi_t) and Shale Volume (Vsh) in shaly sands?",
          options: [
            "phi_e = phi_t * (1.0 - Vsh)  (or phi_t - Vsh * phi_shale)",
            "phi_e = phi_t + Vsh",
            "phi_e = phi_t / Vsh",
            "phi_e = Vsh - phi_t"
          ],
          correctOptionIndex: 0,
          explanation: "Effective porosity discounts clay-bound water volume, measuring only the interconnected pore space available for mobile hydrocarbons.",
          topic: "Well Logging"
        },
        {
          id: "d67-q5",
          question: "What are the standard petrophysical cutoffs commonly applied to identify 'Net Pay' in a conventional sandstone reservoir?",
          options: [
            "Vsh <= 0.30 to 0.40, Effective Porosity >= 0.08 to 0.10, and Water Saturation Sw <= 0.50 to 0.60",
            "Vsh = 1.0, Porosity = 0, Sw = 1.0",
            "Water Cut > 95%",
            "Reservoir temperature > 500 F"
          ],
          correctOptionIndex: 0,
          explanation: "Net pay requires low shale content (reservoir quality), sufficient storage/permeability (porosity cutoff), and hydrocarbon presence (Sw cutoff).",
          topic: "Well Logging"
        },
        {
          id: "d67-q6",
          question: "In Python, how do you filter a DataFrame to calculate the average porosity strictly within the Net Pay interval?",
          options: [
            "df.loc[df['Net_Pay_Flag'] == True, 'phi_e'].mean()",
            "df['phi_e'].mean()",
            "df['Net_Pay_Flag'].sum()",
            "df['phi_e'].max()"
          ],
          correctOptionIndex: 0,
          explanation: "`df.loc[boolean_condition, column].mean()` computes the mean of the specified column restricted strictly to rows satisfying the flag.",
          topic: "Python for Petroleum"
        },
        {
          id: "d67-q7",
          question: "What happens if an engineer calculates Archie Sw using formation water resistivity Rw measured at surface temperature (75 F) without correcting to bottomhole reservoir temperature (200 F)?",
          options: [
            "Water resistivity Rw decreases with temperature; using uncorrected surface Rw will make calculated Sw artificially huge, falsely concluding a commercial oil zone is 100% water wet",
            "Sw will be negative",
            "Porosity will increase by 50%",
            "It has no mathematical impact"
          ],
          correctOptionIndex: 0,
          explanation: "Electrolyte resistivity drops dramatically as temperature rises (Arps temperature formula). Failing to adjust Rw to reservoir temperature ruins Sw calculations.",
          topic: "Well Logging"
        },
        {
          id: "d67-q8",
          question: "Which Arps equation converts water resistivity Rw1 at temperature T1 to Rw2 at reservoir temperature T2?",
          options: [
            "Rw2 = Rw1 * (T1 + 6.77) / (T2 + 6.77)  [for deg F]",
            "Rw2 = Rw1 * T2 / T1",
            "Rw2 = Rw1 + T2 - T1",
            "Rw2 = Rw1 / T2"
          ],
          correctOptionIndex: 0,
          explanation: "Arps temperature formula Rw2 = Rw1*(T1 + 6.77)/(T2 + 6.77) is the universal standard for temperature correction in Fahrenheit.",
          topic: "Well Logging"
        },
        {
          id: "d67-q9",
          question: "In a shaly-sand formation where clay conductivity causes Archie's equation to underestimate hydrocarbon saturation, which advanced petrophysical model is commonly coded in Python?",
          options: [
            "The Simandoux or Indonesian (Poupon-Leveaux) Shaly-Sand Equation",
            "Boyle's Law",
            "Fourier's Law of Heat Conduction",
            "The Bernoulli Equation"
          ],
          correctOptionIndex: 0,
          explanation: "The Simandoux and Indonesian models account for parallel electrical conduction through conductive clay minerals in shaly sands.",
          topic: "Well Logging"
        },
        {
          id: "d67-q10",
          question: "How do you calculate Hydrocarbon Pore Volume (HCPV) for a reservoir interval in Python?",
          options: [
            "HCPV = Net_Pay * phi_avg * (1.0 - Sw_avg)",
            "HCPV = Net_Pay / Sw_avg",
            "HCPV = phi_avg + Sw_avg",
            "HCPV = Net_Pay * 365"
          ],
          correctOptionIndex: 0,
          explanation: "HCPV = Net Pay thickness * average porosity * average hydrocarbon saturation (1 - Sw), representing total hydrocarbon feet.",
          topic: "Well Logging"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A Python petrophysical evaluation script processes a sandstone reservoir zone with the following average wireline parameters:\n- Matrix density rho_ma = 2.65 g/cm³ (sandstone)\n- Fluid density rho_fl = 1.00 g/cm³ (water filtrate)\n- Measured bulk density RHOB = 2.25 g/cm³\n- Gamma Ray index IGR = 0.20\n- True formation resistivity RT = 35.0 ohm-m\n- Formation water resistivity Rw at reservoir temperature = 0.045 ohm-m\n- Archie parameters: a = 1.0, m = 2.0, n = 2.0\nCalculate: 1) Total Density Porosity (phi_d), 2) Shale Volume (Vsh) using Larionov Older Rocks formula, 3) Effective Porosity (phi_e = phi_d * (1 - Vsh)), 4) Water Saturation (Sw) via Archie's law, and 5) Does this zone pass Net Pay cutoffs (Vsh <= 0.30, phi_e >= 0.10, Sw <= 0.50)?",
      givenValues: [
        { label: "Matrix Density (rho_ma)", value: "2.65 g/cm³" },
        { label: "Fluid Density (rho_fl)", value: "1.00 g/cm³" },
        { label: "Bulk Density (RHOB)", value: "2.25 g/cm³" },
        { label: "IGR", value: "0.20" },
        { label: "RT", value: "35.0 ohm-m" },
        { label: "Rw", value: "0.045 ohm-m" },
        { label: "Archie a, m, n", value: "1.0, 2.0, 2.0" }
      ],
      stepByStepSolution: [
        "Step 1: Total Density Porosity:\nphi_d = (rho_ma - RHOB) / (rho_ma - rho_fl) = (2.65 - 2.25) / (2.65 - 1.00) = 0.40 / 1.65 = 0.2424 = 24.24%.",
        "Step 2: Shale Volume (Vsh) via Larionov Older Rocks:\nVsh = 0.33 * (2.0^(2.0 * IGR) - 1.0) = 0.33 * (2.0^(0.40) - 1.0)\n2.0^0.40 = 1.3195\nVsh = 0.33 * (1.3195 - 1.0) = 0.33 * 0.3195 = 0.1054 = 10.54%.",
        "Step 3: Effective Porosity (phi_e):\nphi_e = phi_d * (1.0 - Vsh) = 0.2424 * (1.0 - 0.1054) = 0.2424 * 0.8946 = 0.2168 = 21.68%.",
        "Step 4: Archie Water Saturation (Sw):\nSw = sqrt( (a * Rw) / (phi_e^m * RT) )\nphi_e^2 = 0.2168^2 = 0.0470\nDenominator = 0.0470 * 35.0 = 1.6450\nNumerator = 1.0 * 0.045 = 0.045\nSw^2 = 0.045 / 1.6450 = 0.02735\nSw = sqrt(0.02735) = 0.1654 = 16.54% (Hydrocarbon Saturation Sh = 83.46%).",
        "Step 5: Net Pay Assessment:\n- Vsh = 10.5% <= 30% [PASS]\n- phi_e = 21.7% >= 10% [PASS]\n- Sw = 16.5% <= 50% [PASS]\nResult: Zone is high-grade commercial Net Pay."
      ],
      finalAnswer: "phi_d = 24.2% | Vsh = 10.5% | phi_e = 21.7% | Sw = 16.5% | Net Pay Status = QUALIFIED (Commercial Pay)",
      engineeringSignificance: "This end-to-end petrophysical evaluation proves excellent reservoir quality: over 21% effective porosity with 83.5% hydrocarbon saturation. Vectorizing these exact five steps in Python evaluates millions of depth samples across a 50-well basin in less than one second."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you explain the difference between Net Sand, Net Reservoir, and Net Pay to a junior geoscientist?",
      sampleAnswer: "I explain them as three successive technical filters: 1) Net Sand (or Gross Sand): All rock intervals where lithology indicates sand rather than pure shale, determined by a simple Vsh cutoff (e.g. Vsh < 50%). It includes tight sands, wet sands, and hydrocarbon sands. 2) Net Reservoir: The portion of Net Sand that has sufficient porosity and permeability to store and transmit fluids economically, determined by adding a porosity cutoff (e.g. Vsh < 30% AND phi_e >= 8%). It excludes tight, cemented, or non-permeable sandstones, but still includes both water-bearing and hydrocarbon-bearing zones. 3) Net Pay: The portion of Net Reservoir that contains commercially producible hydrocarbons, determined by adding a water saturation cutoff (e.g. Vsh < 30%, phi_e >= 8%, AND Sw <= 50%). Only Net Pay contributes to hydrocarbon reserves and revenue.",
      conceptCheck: "Define the hierarchical funnel: Gross Interval -> Net Sand (Vsh) -> Net Reservoir (Porosity) -> Net Pay (Sw)."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Write a modular Python script `petrophysics_engine.py` that accepts a Pandas DataFrame containing GR, RHOB, and RT curves and outputs calculated columns for Vsh, phi_e, Sw, and boolean flags for Net_Reservoir and Net_Pay."
    },
    checklist: [
      { id: "d67-c1", text: "Implemented Larionov non-linear shale volume equations in Python", completed: false },
      { id: "d67-c2", text: "Calculated density porosity and effective porosity discounting shale", completed: false },
      { id: "d67-c3", text: "Vectorized Archie's water saturation with physical bounds [0, 1]", completed: false },
      { id: "d67-c4", text: "Applied multi-variable cutoffs to delineate Net Pay thickness", completed: false },
      { id: "d67-c5", text: "Computed average porosity and saturation across net pay zones", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 68
  {
    dayNumber: 68,
    phaseId: 2,
    weekNumber: 8,
    title: "Multi-Well Portfolio Screening Script in Python",
    category: "python_petroleum",
    categoryLabel: "Python for Petroleum",
    todayGoal: "Build an automated Python batch script that iterates through a 20-well portfolio, identifies underperforming wells, and flags high-water-cut and high-GOR candidates for workovers.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "In an active operating asset, a production engineer rarely manages just one well; they are responsible for 50 to 200 wells. Reviewing each well manually every morning is impossible. By writing a multi-well portfolio screening script in Python, an engineer can automate daily surveillance: the script loops through all active wells, calculates 30-day moving averages, checks against operational threshold limits (Water Cut > 85%, GOR > 3,000 scf/STB, liquid loading velocity), and outputs an prioritized ranking of 'Workover Candidates'.",
      keyPoints: [
        "Batch Portfolio Iteration: Structure multi-well data in a single master DataFrame or loop through individual well CSV files: `for well_id, well_df in master_df.groupby('Well_ID'):`.",
        "Candidate Screening Criteria: 1) High Water Cut Candidates (WC > 85% with oil rate > 30 bbl/d -> polymer squeeze or water shut-off); 2) Gas Coning / Breakthrough Candidates (GOR > 3x solution GOR -> choke optimization); 3) Underperforming Deliverability (Current rate < 70% of DCA predicted baseline -> acid wash, scale removal, or pump resizing).",
        "Quantifying Uplift Potential: For each candidate, estimate potential rate gain: e.g. If water cut is reduced from 90% to 50% on a 1,000 bbl/d total fluid well, oil rate jumps from 100 to 500 bbl/d (+400 bbl/d gain).",
        "Economic Prioritization & Ranking: Sort candidates by Net Present Value (NPV) or incremental barrels divided by workover cost: `candidates_df.sort_values(by='Incremental_BOPD', ascending=False)`.",
        "Automated PDF / Excel Reporting: Export the top 10 ranked candidates to an executive Excel spreadsheet with automated conditional formatting and summary KPI cards."
      ],
      coreFormulas: [
        {
          name: "Incremental Oil from Water Cut Reduction",
          formula: "Delta_qo = q_liquid * [(1.0 - WC_target) - (1.0 - WC_current)]",
          explanation: "Calculates barrels of oil gained if total liquid pump displacement is maintained while water cut is reduced."
        }
      ],
      fieldInsight: "When building an automated screening script, never look at rate alone! A well producing 10 bbl/d might seem insignificant, but if it has a 98% water cut lifting 500 bbl/d of water, shutting off the water or installing an insert pump could yield 80 bbl/d at minimal cost. Surveillance scripts should score wells by 'Unrealized Potential' rather than current rate."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-184511: Automated Production Surveillance and Well Candidate Selection Using Machine Learning",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d68-q1",
          question: "What is the primary operational objective of a multi-well portfolio screening script in an upstream operating office?",
          options: [
            "To replace the field gaugers",
            "To programmatically filter hundreds of wells against diagnostic thresholds (high WC, high GOR, deliverability drops) to generate a prioritized list of workover candidates",
            "To delete underperforming wells from company records",
            "To calculate seismic migration"
          ],
          correctOptionIndex: 1,
          explanation: "Screening scripts scan massive portfolios in seconds, ranking candidates by incremental oil gain and workover economics.",
          topic: "Python for Petroleum"
        },
        {
          id: "d68-q2",
          question: "An ESP well produces 1,000 bbl/d of total liquid with a 92% Water Cut. If a polymer water shut-off workover successfully lowers Water Cut to 60% while maintaining total liquid rate, what is the incremental oil gain?",
          options: [
            "80 bbl/d",
            "320 bbl/d",
            "400 bbl/d",
            "600 bbl/d"
          ],
          correctOptionIndex: 1,
          explanation: "Initial oil = 1,000 * (1 - 0.92) = 80 bbl/d. Target oil = 1,000 * (1 - 0.60) = 400 bbl/d. Incremental gain = 400 - 80 = 320 bbl/d.",
          topic: "Production Engineering"
        },
        {
          id: "d68-q3",
          question: "Which Pandas method splits a multi-well master DataFrame into individual well subsets for automated batch analysis?",
          options: [
            "df.groupby('Well_ID')",
            "df.split()",
            "df.divide_wells()",
            "df.pivot()"
          ],
          correctOptionIndex: 0,
          explanation: "`df.groupby('Well_ID')` creates an iterable of (well_id, well_sub_df) tuples, perfect for looping through multi-well portfolios.",
          topic: "Python for Petroleum"
        },
        {
          id: "d68-q4",
          question: "How should a screening script prioritize 15 identified workover candidate wells?",
          options: [
            "Alphabetically by well name",
            "By economic return: sorting by expected Incremental Barrels or Return on Workover Capital (NPV / Capex)",
            "By well depth (deepest first)",
            "By the age of the well"
          ],
          correctOptionIndex: 1,
          explanation: "Engineering projects must be ranked by business impact: maximizing incremental oil and capital efficiency (NPV / Capex).",
          topic: "Production Analytics"
        },
        {
          id: "d68-q5",
          question: "What does an unexpected surge in Gas-Oil Ratio (GOR) with declining bottomhole pressure indicate during well screening?",
          options: [
            "The well has turned into a water injector",
            "Reservoir pressure has dropped below bubble point (free gas breakout) or secondary gas cap coning is occurring",
            "The choke valve has fallen off",
            "The crude oil has frozen"
          ],
          correctOptionIndex: 1,
          explanation: "Pressure dropping below Pb releases solution gas, surging GOR and causing artificial lift inefficiency.",
          topic: "Reservoir Engineering"
        },
        {
          id: "d68-q6",
          question: "If a well's current rate is 40% below its Arps DCA baseline forecast while bottomhole pressure has remained constant, what is the likely diagnosis?",
          options: [
            "Reservoir depletion only",
            "Near-wellbore skin damage (scaling, asphaltenes, fines migration) or tubing restriction, making it an ideal candidate for an acid stimulation wash",
            "Natural gas expansion",
            "A hurricane"
          ],
          correctOptionIndex: 1,
          explanation: "Rate dropping at constant pressure means productivity index (PI) collapsed, signaling remediable skin damage or scale buildup.",
          topic: "Production Engineering"
        },
        {
          id: "d68-q7",
          question: "How do you export a filtered Pandas DataFrame of top candidates to an Excel sheet with column auto-fitting and formatting?",
          options: [
            "Using `pd.ExcelWriter()` with `openpyxl` engine",
            "Taking a screenshot",
            "Saving as a .txt file and renaming to .xlsx",
            "Printing to paper"
          ],
          correctOptionIndex: 0,
          explanation: "Pandas with `openpyxl` allows programmatic creation of formatted Excel workbooks with multiple tabs and custom styling.",
          topic: "Python for Petroleum"
        },
        {
          id: "d68-q8",
          question: "Why should an automated screening script filter out wells that have been on-stream for less than 30 days?",
          options: [
            "Because Python cannot read numbers under 30",
            "New wells are still in cleanup/flowback and transient flush production, which would falsely skew steady-state screening thresholds",
            "New wells do not belong to the company",
            "Regulators prohibit analyzing new wells"
          ],
          correctOptionIndex: 1,
          explanation: "New wells undergo frac flowback and transient cleanup; screening algorithms should focus on established boundary-dominated producers.",
          topic: "Production Analytics"
        },
        {
          id: "d68-q9",
          question: "What is 'Production Deferment' in automated surveillance reporting?",
          options: [
            "Taxes deferred to next year",
            "The difference between demonstrated unconstrained well production capacity and actual volume produced due to surface or mechanical downtime",
            "Oil left in the reservoir after abandonment",
            "Delaying well drilling"
          ],
          correctOptionIndex: 1,
          explanation: "Production deferment measures lost production volume caused by trips, maintenance, compressor shutdowns, or pipeline curtailment.",
          topic: "Production Analytics"
        },
        {
          id: "d68-q10",
          question: "What metric evaluates the financial payback period of a workover project costing $150,000 that generates an incremental 100 BOPD at $70/bbl net margin ($7,000/day)?",
          options: [
            "Payback = $150,000 / $7,000/day = 21.4 days",
            "Payback = 5 years",
            "Payback = 100 days",
            "Payback = $70 / $150,000"
          ],
          correctOptionIndex: 0,
          explanation: "Payback Period = Capex / Daily Cash Flow = $150,000 / $7,000/day = 21.4 days (under 1 month).",
          topic: "Production Engineering"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A Python screening script evaluates 3 underperforming wells for potential workovers:\n- Candidate A: q_liq = 800 bbl/d, Current WC = 90%. Proposed water shut-off lowers WC to 60%. Workover Cost = $120,000.\n- Candidate B: q_liq = 1,500 bbl/d, Current WC = 95%. Proposed recompletion lowers WC to 80%. Workover Cost = $180,000.\n- Candidate C: q_liq = 500 bbl/d, Current WC = 96%. Proposed polymer squeeze lowers WC to 70%. Workover Cost = $90,000.\nAssume net oil margin = $60 / bbl.\nCalculate for each candidate: 1) Current oil rate (BOPD), 2) Target post-workover oil rate (BOPD), 3) Incremental oil gain (Delta BOPD), 4) Daily incremental revenue ($/day), and 5) Capital Payback Period in days. Rank the candidates by shortest payback.",
      givenValues: [
        { label: "Net Oil Margin", value: "$60 / bbl" },
        { label: "Candidate A", value: "800 bbl/d, WC: 90% -> 60%, Cost: $120k" },
        { label: "Candidate B", value: "1,500 bbl/d, WC: 95% -> 80%, Cost: $180k" },
        { label: "Candidate C", value: "500 bbl/d, WC: 96% -> 70%, Cost: $90k" }
      ],
      stepByStepSolution: [
        "Step 1: Candidate A:\n- Current qo = 800 * (1 - 0.90) = 80 BOPD\n- Target qo = 800 * (1 - 0.60) = 320 BOPD\n- Incremental = 320 - 80 = 240 BOPD\n- Daily Revenue = 240 * $60 = $14,400 / day\n- Payback = $120,000 / $14,400 = 8.33 days.",
        "Step 2: Candidate B:\n- Current qo = 1,500 * (1 - 0.95) = 75 BOPD\n- Target qo = 1,500 * (1 - 0.80) = 300 BOPD\n- Incremental = 300 - 75 = 225 BOPD\n- Daily Revenue = 225 * $60 = $13,500 / day\n- Payback = $180,000 / $13,500 = 13.33 days.",
        "Step 3: Candidate C:\n- Current qo = 500 * (1 - 0.96) = 20 BOPD\n- Target qo = 500 * (1 - 0.70) = 150 BOPD\n- Incremental = 150 - 20 = 130 BOPD\n- Daily Revenue = 130 * $60 = $7,800 / day\n- Payback = $90,000 / $7,800 = 11.54 days.",
        "Step 4: Ranking by Shortest Payback:\nRank 1: Candidate A (Payback = 8.3 days, +240 BOPD)\nRank 2: Candidate C (Payback = 11.5 days, +130 BOPD)\nRank 3: Candidate B (Payback = 13.3 days, +225 BOPD)."
      ],
      finalAnswer: "Rank 1: Candidate A (8.3d payback) | Rank 2: Candidate C (11.5d payback) | Rank 3: Candidate B (13.3d payback)",
      engineeringSignificance: "Notice that while Candidate B has the largest total fluid rate (1,500 bbl/d), Candidate A delivers the fastest payback (8.3 days) and the greatest incremental oil gain (+240 BOPD) at lower capital risk ($120k). A Python ranking script eliminates guesswork and guides capital deployment to the highest-return assets."
    },
    interview: {
      durationMinutes: 15,
      question: "If you had 100 producing wells in a mature asset, how would you write a Python script to prioritize workover capital?",
      sampleAnswer: "I would construct a multi-tiered automated screening pipeline in Python: 1) Data Aggregation & Quality Control: Use Pandas to ingest daily rates, pressures, and well test records, computing 30-day rolling averages of Liquid Rate, Oil Rate, Water Cut, and GOR. 2) Diagnostic Classification: Categorize wells into specific remediation buckets: Bucket 1 (Excessive Water: WC > 85% with high total fluid -> polymer water shut-off); Bucket 2 (Skin Damage: rate > 30% below DCA baseline at constant BHP -> solvent/acid wash); Bucket 3 (Artificial Lift Impairment: motor undercurrent or high fluid level above pump -> pump resizing or speed increase). 3) Economic Modeling: For each classified candidate, compute expected incremental oil (Delta BOPD), incremental daily cash flow at current oil price, and capital payback period (Capex / Daily Cash Flow). 4) Prioritization & Executive Dashboard: Sort the portfolio by shortest payback and highest NPV, automatically outputting a formatted Excel ranking sheet with executive summary cards for the asset manager.",
      conceptCheck: "Synthesize data aggregation, diagnostic bucketing, economic uplift modeling, and executive ranking."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Build a Python script `portfolio_screener.py` that loops through a multi-well DataFrame, flags wells with Water Cut > 85% or GOR > 2,500, calculates incremental oil potential, and exports a ranked Excel sheet."
    },
    checklist: [
      { id: "d68-c1", text: "Iterated through multi-well portfolios using `df.groupby('Well_ID')`", completed: false },
      { id: "d68-c2", text: "Defined operational screening criteria for high WC and GOR anomalies", completed: false },
      { id: "d68-c3", text: "Calculated incremental oil gain from water shut-off remediation", completed: false },
      { id: "d68-c4", text: "Ranked workover candidates by financial payback period and NPV", completed: false },
      { id: "d68-c5", text: "Generated an automated executive candidate selection report", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 69
  {
    dayNumber: 69,
    phaseId: 2,
    weekNumber: 8,
    title: "Milestone Test: Upstream Data & Python Scripting",
    category: "milestone_test",
    categoryLabel: "Milestone Test",
    todayGoal: "Score 80%+ on this 15-question comprehensive milestone test covering the upstream Python stack, Pandas timeseries, SciPy curve fitting, Lasio log parsing, and petrophysical vectorization.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "This milestone test assesses complete mastery of Python scripting for upstream petroleum engineering. Top-tier operators and service companies test candidates on their ability to write vectorized code, clean dirty SCADA datasets, execute automated Arps decline fits, parse CWLS standard LAS logs, calculate Archie water saturation, and build multi-well portfolio screening scripts.",
      keyPoints: [
        "Upstream Python Stack: NumPy vectorized arrays, Pandas timeseries DataFrames, SciPy non-linear optimization, Matplotlib engineering visuals, and Lasio petrophysical parsing.",
        "Data Hygiene & Manipulation: Converting text numbers with `pd.to_numeric(errors='coerce')`, setting DatetimeIndex, timeseries resampling, and physics-informed null interpolation.",
        "Automated Decline Modeling: Defining Arps functions, non-linear parameter estimation using `curve_fit`, enforcing physical bounds, and calculating EUR at economic limit.",
        "Digital Well Log Analysis: Parsing `.las` files, extracting curve headers, handling -999.25 nulls, and building 3-track log displays with inverted depth axes.",
        "Petrophysical Algorithms: Vectorized Larionov shale volume, density porosity, Archie Sw with `np.clip(0, 1)`, and Net Pay Boolean cutoff masks.",
        "Multi-Well Surveillance: Grouping multi-well assets, calculating incremental oil potential, and ranking workover candidates by economic payback."
      ],
      coreFormulas: [
        {
          name: "Python Upstream Formulas Summary",
          formula: "q(t)=qi/(1+b*Di*t)^(1/b); Sw=sqrt(a*Rw/(phi^m*Rt)); Vsh=0.33*(2^(2*IGR)-1); Payback=Capex/DailyCashFlow",
          explanation: "Essential mathematical models evaluated in this milestone assessment."
        }
      ],
      fieldInsight: "In coding assessments for petroleum engineering roles, hiring managers look for vectorized thinking. Candidates who write slow `for` loops to iterate through depth rows fail; candidates who write concise, vectorized NumPy and Pandas expressions with proper exception handling receive immediate job offers."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-191398: Best Practices for Python Adoption and Automated Subsurface Analytics",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d69-q1",
          question: "Which Python command parses an ASCII well log file into an object named `las` using the `lasio` library?",
          options: [
            "las = lasio.read('well.las')",
            "las = pd.read_las('well.las')",
            "las = open('well.las').parse()",
            "las = scipy.io.load('well.las')"
          ],
          correctOptionIndex: 0,
          explanation: "`lasio.read()` is the standard method for parsing CWLS standard LAS files.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q2",
          question: "In Pandas, which method converts daily wellhead production volume into total monthly volume using a DatetimeIndex?",
          options: [
            "df.resample('ME').sum()",
            "df.groupby_month()",
            "df.monthly_total()",
            "df.rollup('30D')"
          ],
          correctOptionIndex: 0,
          explanation: "`.resample('ME')` (month end) groups timeseries records into monthly intervals and `.sum()` computes total volume.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q3",
          question: "When fitting an Arps hyperbolic decline model using `scipy.optimize.curve_fit`, how do you enforce that the hyperbolic exponent 'b' stays within physical bounds between 0.0 and 1.0?",
          options: [
            "Pass `bounds=([0, 0, 0.0], [np.inf, np.inf, 1.0])` as an argument",
            "Set b = 1.0 in Excel",
            "Bounds cannot be set in SciPy",
            "By deleting data points where b > 1"
          ],
          correctOptionIndex: 0,
          explanation: "The `bounds` tuple sets lower and upper bounds for each parameter: `([qi_min, Di_min, b_min], [qi_max, Di_max, b_max])`.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q4",
          question: "What is the standard null value in CWLS LAS well log files that must be replaced with `np.nan`?",
          options: [
            "-999.25",
            "0.0",
            "9999",
            "-1.0"
          ],
          correctOptionIndex: 0,
          explanation: "-999.25 is the universal CWLS standard logging null value.",
          topic: "Well Logging"
        },
        {
          id: "d69-q5",
          question: "How do you calculate the cumulative oil production (Np) column row-by-row in a Pandas DataFrame where each row represents 1 day?",
          options: [
            "df['Np'] = df['Oil_Rate'].cumsum()",
            "df['Np'] = df['Oil_Rate'].sum()",
            "df['Np'] = df['Oil_Rate'].diff()",
            "df['Np'] = df['Oil_Rate'] * 365"
          ],
          correctOptionIndex: 0,
          explanation: "`.cumsum()` calculates the cumulative running sum across rows.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q6",
          question: "Why must `ax.invert_yaxis()` be applied when plotting well logs in Matplotlib?",
          options: [
            "To display Depth increasing downward from surface (0 ft at top) to total depth at the bottom",
            "Because Python defaults to upside down",
            "To hide drilling errors",
            "To make water cut appear lower"
          ],
          correctOptionIndex: 0,
          explanation: "In petrophysics, shallow depth is at the top and deep depth is at the bottom; inverting the y-axis honors this convention.",
          topic: "Well Logging"
        },
        {
          id: "d69-q7",
          question: "Which Matplotlib method creates a secondary y-axis on the right side sharing the same horizontal x-axis for plotting GOR alongside Oil Rate?",
          options: [
            "ax2 = ax.twinx()",
            "ax2 = ax.twiny()",
            "ax2 = ax.duplicate()",
            "ax2 = plt.secondary_axis()"
          ],
          correctOptionIndex: 0,
          explanation: "`ax.twinx()` generates a twin vertical axis sharing the identical x-axis.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q8",
          question: "How do you prevent `ZeroDivisionError` when computing Water Cut across days where a well was shut in (Oil_Rate = 0 and Water_Rate = 0)?",
          options: [
            "Use `np.where(ql > 0, qw / ql, np.nan)`",
            "Replace all 0s with 1",
            "Delete the well from the database",
            "Multiply all rates by -1"
          ],
          correctOptionIndex: 0,
          explanation: "`np.where` conditionally evaluates the division only when total liquid rate is greater than zero, safely returning NaN otherwise.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q9",
          question: "In Archie water saturation calculations, why is `np.clip(Sw, 0.0, 1.0)` applied to the output array?",
          options: [
            "To restrict saturation values to physically realistic percentages between 0% and 100%, removing mathematical anomalies caused by tool noise",
            "To convert water to gas",
            "To make all wells commercial",
            "It is required by the Python interpreter"
          ],
          correctOptionIndex: 0,
          explanation: "Clipping restricts calculated saturation to physically possible limits [0, 1].",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q10",
          question: "What does `df.groupby('Well_ID')` accomplish in a multi-well portfolio script?",
          options: [
            "It splits the master DataFrame into distinct subsets grouped by each individual well for batch looping and surveillance",
            "It deletes duplicate wells",
            "It renames the wells",
            "It sums all depths together"
          ],
          correctOptionIndex: 0,
          explanation: "`groupby('Well_ID')` enables automated looping across hundreds of individual wells in a single script.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q11",
          question: "In an automated screening script, an ESP well produces 2,000 bbl/d total fluid at 95% Water Cut. If a workover lowers Water Cut to 75% at the same fluid rate, what is the incremental oil gained?",
          options: [
            "400 bbl/d",
            "100 bbl/d",
            "500 bbl/d",
            "1,500 bbl/d"
          ],
          correctOptionIndex: 0,
          explanation: "Initial oil = 2,000 * 0.05 = 100 bbl/d. Post-workover oil = 2,000 * 0.25 = 500 bbl/d. Incremental = 500 - 100 = 400 bbl/d.",
          topic: "Production Engineering"
        },
        {
          id: "d69-q12",
          question: "Which Seaborn visualization generates an annotated matrix showing correlation coefficients between reservoir parameters (porosity, perm, net pay) and EUR?",
          options: [
            "sns.heatmap(df.corr(), annot=True)",
            "sns.scatterplot()",
            "sns.barplot()",
            "sns.kdeplot()"
          ],
          correctOptionIndex: 0,
          explanation: "`sns.heatmap()` displays a color-coded correlation matrix highlighting key subsurface drivers of well recovery.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q13",
          question: "What is the economic payback period for a workover project costing $140,000 that generates an incremental $10,000 per day in net cash flow?",
          options: [
            "14.0 days",
            "140 days",
            "1.4 years",
            "10.0 days"
          ],
          correctOptionIndex: 0,
          explanation: "Payback = Capex / Daily Cash Flow = $140,000 / $10,000/day = 14.0 days.",
          topic: "Production Engineering"
        },
        {
          id: "d69-q14",
          question: "Which SciPy subpackage contains `curve_fit` for non-linear regression?",
          options: [
            "scipy.optimize",
            "scipy.signal",
            "scipy.interpolate",
            "scipy.spatial"
          ],
          correctOptionIndex: 0,
          explanation: "`curve_fit` is located within `scipy.optimize`.",
          topic: "Python for Petroleum"
        },
        {
          id: "d69-q15",
          question: "Why should an engineer avoid using pure Python `for` loops to iterate through 200,000 well log depth samples?",
          options: [
            "Interpreted Python loops are 50x to 200x slower than compiled C-vectorized operations in NumPy and Pandas",
            "Loops cannot process numbers",
            "Loops cause memory leaks",
            "Loops change the log curves"
          ],
          correctOptionIndex: 0,
          explanation: "Vectorized operations run in compiled C memory, executing in milliseconds compared to seconds or minutes for interpreted Python loops.",
          topic: "Python for Petroleum"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A Python automated subsurface evaluation script evaluates a 40 ft reservoir section with 0.5 ft depth steps (81 depth samples).\nThe script computes:\n- Average Net Pay Effective Porosity = 0.22 (22.0%)\n- Average Net Pay Water Saturation = 0.25 (25.0%)\n- Number of depth samples passing Net Pay cutoffs = 56 samples (out of 81)\n- Drainage area A = 80 acres\n- Formation volume factor Boi = 1.25 res bbl / STB\nCalculate: 1) Net Pay Thickness h_pay (ft), 2) Net-to-Gross (NTG) ratio (%), 3) Hydrocarbon Pore Volume (HCPV in ft), and 4) Volumetric Original Oil in Place (OOIP in STB) for this well's drainage area.",
      givenValues: [
        { label: "Gross Interval", value: "40.0 ft" },
        { label: "Depth Step", value: "0.5 ft" },
        { label: "Qualifying Pay Samples", value: "56 samples" },
        { label: "Avg Porosity (phi)", value: "0.22" },
        { label: "Avg Water Sat (Sw)", value: "0.25" },
        { label: "Drainage Area (A)", value: "80 acres" },
        { label: "Oil FVF (Boi)", value: "1.25 bbl/STB" }
      ],
      stepByStepSolution: [
        "Step 1: Net Pay Thickness h_pay = Qualifying Samples * Depth Step = 56 * 0.5 ft = 28.0 ft.",
        "Step 2: Net-to-Gross (NTG) = Net Pay / Gross Interval = 28.0 / 40.0 = 0.700 = 70.0%.",
        "Step 3: Hydrocarbon Pore Volume (HCPV) = h_pay * phi * (1 - Sw) = 28.0 * 0.22 * (1 - 0.25) = 28.0 * 0.22 * 0.75 = 4.62 hydrocarbon-feet.",
        "Step 4: Volumetric OOIP (STB):\nOOIP = (7,758 * A * h_pay * phi * (1 - Sw)) / Boi\nOOIP = (7,758 * 80 * 4.62) / 1.25\nNumerator = 7,758 * 80 * 4.62 = 2,873,563.2\nOOIP = 2,873,563.2 / 1.25 = 2,298,851 STB (~2.30 MMSTB)."
      ],
      finalAnswer: "Net Pay = 28.0 ft | NTG = 70.0% | HCPV = 4.62 ft | OOIP = 2,298,851 STB",
      engineeringSignificance: "This combines digital well log petrophysics directly with reservoir volumetric reserves calculation. In Python, this exact algorithm can be wrapped in a function and executed across 500 wells to map basin-wide OOIP in less than 5 seconds."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you articulate the business value of your Python scripting skills to a hiring manager who is a traditional petroleum engineer?",
      sampleAnswer: "I explain that Python is not about replacing petroleum engineering fundamentals—it is about multiplying engineering throughput. In a traditional workflow, an engineer might spend 3 days a week manually scrubbing Excel spreadsheets, copy-pasting SCADA telemetry, and hand-picking decline curves for 50 wells, leaving very little time for actual engineering analysis. By writing automated Python scripts, I automate the entire data cleaning, decline curve fitting, and petrophysical calculation pipeline into a 30-second script. This frees up 90% of my time to focus on high-value engineering decisions: diagnosing why bad-actor wells are failing, optimizing artificial lift run life, designing waterflood patterns, and finding profitable workover opportunities that add barrels directly to the bottom line.",
      conceptCheck: "Position Python as an engineering productivity multiplier that frees up time for high-value subsurface optimization."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Score yourself on this 15-question milestone test. Ensure any missed questions are automatically routed to your Revision Queue for targeted drill practice."
    },
    checklist: [
      { id: "d69-c1", text: "Completed the 15-question Upstream Data & Python Milestone Test", completed: false },
      { id: "d69-c2", text: "Achieved an 80%+ passing score on technical programming questions", completed: false },
      { id: "d69-c3", text: "Verified proficiency in Pandas, SciPy, Matplotlib, and Lasio", completed: false },
      { id: "d69-c4", text: "Mastered volumetric OOIP calculation from digital net pay logs", completed: false },
      { id: "d69-c5", text: "Routed any incorrect questions to the automated Revision Queue", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 70
  {
    dayNumber: 70,
    phaseId: 2,
    weekNumber: 8,
    title: "Phase 2 Comprehensive Synthesis & Portfolio Setup",
    category: "phase_synthesis",
    categoryLabel: "Phase Synthesis",
    todayGoal: "Review the full Phase 2 practical skill set (Petrophysics, Well Testing, Production Analytics, Python), audit your GitHub repository, and prepare for Phase 3 Project Execution.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Congratulations on completing Phase 2 (Days 31–70)! You have transformed from reviewing college theory into an active, practical, data-empowered petroleum engineer. Over the past 40 days, you have mastered: 1) Well Logging & Petrophysics (GR, Resistivity invasion, Density-Neutron gas crossover, Archie Sw, Net Pay); 2) Well Testing & Pressure Transient Analysis (Horner plots, skin factor, flow efficiency, Bourdet derivative); 3) Enhanced Oil Recovery (waterflood mobility ratio, fractional flow, EOR screening); 4) Excel Production Surveillance (trackers, back-allocation, Arps DCA, Chan plots, MTBF reliability); and 5) Python for Petroleum (Pandas timeseries, SciPy curve fitting, Lasio log parsing, multi-well screening). Now, you synthesize these skills into your Phase 3 proof-of-ability projects.",
      keyPoints: [
        "Phase 2 Mastery Retrospective: You now possess the practical analytical skills expected of a 2- to 3-year production and reservoir engineer at major international operators.",
        "The Proof-of-Ability Portfolio Architecture: In Phase 3 (Days 71–90), you will construct two flagship portfolio projects that prove your capabilities: Project 1: Production Optimization & Decline Curve Case Study; Project 2: Well Log / Petrophysical Reservoir Evaluation.",
        "GitHub Repository Standards for Petroleum Engineers: A professional repo must contain: 1) Clean folder hierarchy (`/data`, `/notebooks`, `/scripts`, `/deliverables`), 2) A comprehensive `README.md` with problem statement, executive summary, methodology, embedded visual charts, and commercial conclusions, 3) Reproducible Jupyter notebooks with markdown commentary and clean outputs.",
        "Revision Queue Final Audit: Review all questions currently flagged in your '🔴 NEEDS REVISION' queue across Petrophysics, Well Testing, DCA, and Python. Re-drill them until your queue is 100% cleared before starting Phase 3."
      ],
      coreFormulas: [
        {
          name: "Phase 2 Core Technical Pillar Synthesis",
          formula: "Petrophysics (Sw, Vsh, Net Pay) + PTA (Skin, k, P*) + DCA (qi, Di, b, EUR) + Python Automation",
          explanation: "The integrated analytical foundation for Phase 3 project execution."
        }
      ],
      fieldInsight: "Recruiters and hiring managers spend an average of 45 seconds scanning an engineering portfolio. If your GitHub repo only has code files without visual plots or an executive summary, they close the tab. If your README opens with a bold executive dashboard image, a 3-sentence business impact summary ('Identified 320 BOPD of deferred production across 25 wells'), and clean technical conclusions, you immediately go to the top of the interview shortlist."
    },
    watchOrRead: {
      type: "read",
      title: "SPE-197022: The Future Petroleum Engineer: Integrating Subsurface Fundamentals with Data Literacy",
      url: "https://onepetro.org",
      platform: "SPE OnePetro",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d70-q1",
          question: "What is the primary purpose of Phase 3 (Days 71–90) in this 90-day career roadmap?",
          options: [
            "To re-read college textbooks from the beginning",
            "To build concrete proof-of-ability portfolio projects, revamp your resume and LinkedIn, execute targeted job applications, and pass technical interview bootcamps",
            "To learn web design",
            "To take a 20-day vacation"
          ],
          correctOptionIndex: 1,
          explanation: "Phase 3 transforms your rebuilt knowledge and practical skills into tangible career advancement: projects, polished resume, applications, and interview mastery.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q2",
          question: "What are the two flagship portfolio projects you will build in Phase 3?",
          options: [
            "Project 1: Production Optimization & DCA Case Study; Project 2: Well Log / Petrophysical Reservoir Evaluation",
            "Project 1: Mobile App Game; Project 2: Weather Forecast Website",
            "Project 1: Excel formatting; Project 2: Word typing",
            "Project 1: Rig painting; Project 2: Truck driving"
          ],
          correctOptionIndex: 0,
          explanation: "These two projects directly showcase the two most prized upstream competencies: production surveillance/forecasting and petrophysical reservoir evaluation.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q3",
          question: "What is the most critical element of a technical GitHub repository README for petroleum engineering projects?",
          options: [
            "A clear business problem statement, executive summary, methodology, embedded visual figures, and actionable commercial conclusions",
            "A 10,000-word essay with no formatting",
            "Only the code file with zero explanation",
            "A list of your favorite movies"
          ],
          correctOptionIndex: 0,
          explanation: "A professional README tells a compelling engineering story: problem -> methodology -> data visualization -> commercial impact.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q4",
          question: "How should a petroleum engineer present complex technical project findings to a non-technical hiring manager?",
          options: [
            "Translate technical calculations into commercial business metrics (incremental BOPD gained, operating cost savings, payback period, and reserve additions)",
            "Use only obscure mathematical jargon so you sound smart",
            "Refuse to talk about the project",
            "Blame previous employers for any difficulties"
          ],
          correctOptionIndex: 0,
          explanation: "Executive decision-makers care about business impact: reserves, production rate, cost efficiency, and project payback.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q5",
          question: "Why is clearing your automated Revision Queue essential before entering Phase 3?",
          options: [
            "To eliminate underlying knowledge gaps in PVT, well testing, logging, and DCA before technical interviewers probe them in Phase 3",
            "To delete your browser history",
            "Because the website will stop working",
            "To reset your computer"
          ],
          correctOptionIndex: 0,
          explanation: "The Revision Queue captures your authentic weaknesses; drilling them ensures you walk into technical interviews with zero blind spots.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q6",
          question: "Which two resume versions will you prepare in Phase 3 to maximize application callback rates?",
          options: [
            "Resume A: Core Petroleum Engineering; Resume B: Petroleum + Data Analytics Specialist",
            "Resume A: English; Resume B: French",
            "Resume A: 10 pages; Resume B: 20 pages",
            "Resume A: Handwritten; Resume B: Typed"
          ],
          correctOptionIndex: 0,
          explanation: "Tailoring Resume A for traditional operator roles and Resume B for modern digital/analytics teams ensures maximum ATS alignment.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q7",
          question: "In technical petroleum engineering interviews, how should you answer the prompt: 'Walk me through a project you completed'?",
          options: [
            "Use the STAR method (Situation, Task, Action, Result), focusing heavily on your engineering methodology and quantitative results (e.g. +240 BOPD identified, 1.2 MMSTB EUR)",
            "Say that you don't remember any projects",
            "Explain that your college professor did all the work",
            "Talk only about the software user interface"
          ],
          correctOptionIndex: 0,
          explanation: "The STAR framework delivers structured, authoritative answers emphasizing quantitative engineering results.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q8",
          question: "What is the recommended daily job application pace during Phase 3?",
          options: [
            "5 to 10 highly targeted, customized applications per day with direct LinkedIn networking outreach to hiring managers",
            "1 application per month",
            "100 spam applications with identical uncustomized resumes",
            "Waiting for companies to call you without applying"
          ],
          correctOptionIndex: 0,
          explanation: "5–10 targeted applications combined with warm networking consistently generates 3x to 5x higher interview conversion rates.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q9",
          question: "How does having 2 completed, GitHub-hosted petroleum engineering projects impact your 1-year experience resume?",
          options: [
            "It neutralizes the 'junior/fresher' penalty by providing verifiable proof of practical competence and initiative beyond your current job duties",
            "It has no impact at all",
            "It makes you look overqualified for every job",
            "It confuses recruiters"
          ],
          correctOptionIndex: 0,
          explanation: "Projects act as concrete proof of ability, demonstrating that you possess the skills of a 3-year engineer regardless of official job tenure.",
          topic: "Career Strategy"
        },
        {
          id: "d70-q10",
          question: "What is your mindset entering the final 20 days of this 90-day mission?",
          options: [
            "Laser-focused, proactive, confident in my rebuilt fundamentals, ready to execute proof projects and secure a top-tier engineering role",
            "Passive and doubtful",
            "Waiting for someone else to fix my career",
            "Giving up"
          ],
          correctOptionIndex: 0,
          explanation: "You have built authentic domain depth across 70 days; Phase 3 is about aggressive, confident execution to secure the job you deserve.",
          topic: "Career Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "A petroleum engineer conducts a career progress audit at Day 70:\n- Technical subjects mastered: 10 core disciplines (Porosity/Perm, PVT, Reservoir Drive, Vogel IPR, Rig Systems, Well Control, Completions, Well Logging, Well Testing, Production/DCA, Python)\n- Daily practice questions completed across 70 days = 70 days * 10 questions = 700 questions\n- Cumulative study time invested = 70 days * 125 minutes = 8,750 minutes (145.8 hours)\n- Revision Queue items resolved = 45 weak topics re-tested and mastered\nCalculate: 1) Total study hours invested to date, 2) Total technical questions practiced, 3) If Phase 3 adds 20 days * 125 minutes, what will be the final 90-day total time investment in hours, and 4) If your target new role pays an incremental $25,000/year over your current fresher salary, what is the annualized return per hour of study invested?",
      givenValues: [
        { label: "Days Completed", value: "70 days" },
        { label: "Questions per Day", value: "10 questions" },
        { label: "Minutes per Day", value: "125 minutes" },
        { label: "Phase 3 Days", value: "20 days" },
        { label: "Salary Upside", value: "$25,000 / year" }
      ],
      stepByStepSolution: [
        "Step 1: Total Study Hours to Date = 8,750 minutes / 60 = 145.83 hours.",
        "Step 2: Total Technical Questions Practiced = 70 * 10 = 700 questions.",
        "Step 3: Total 90-Day Time Investment:\nTotal Minutes = 90 days * 125 minutes = 11,250 minutes.\nTotal Hours = 11,250 / 60 = 187.50 hours.",
        "Step 4: Annualized Return per Hour of Study:\nReturn = $25,000 salary increase / 187.5 hours = $133.33 / hour in Year 1 alone!\n(Over a 5-year career horizon: 5 * $25,000 = $125,000 -> $666.67 / hour invested)."
      ],
      finalAnswer: "Hours Invested = 145.8 hrs | Questions = 700 | 90-Day Total = 187.5 hrs | Return = $133.33/hr invested",
      engineeringSignificance: "Investing 187.5 hours of disciplined, structured study yields a massive career dividend ($133/hr in year 1, compounding over a 35-year engineering career). This quantitative audit proves that the 90-day system is the highest-ROI investment an engineer can make."
    },
    interview: {
      durationMinutes: 15,
      question: "Why should an upstream operating company hire you over a candidate with 3 years of experience at a major service company?",
      sampleAnswer: "While a 3-year service company specialist often has deep experience in a single narrow domain (such as only running wireline tools or only mixing mud), I bring an integrated, end-to-end subsurface perspective. Over the past 70 days, I have rigorously rebuilt and synthesized fundamentals across the entire asset lifecycle: rock-fluid PVT physics, drilling hydraulics and well control, nodal analysis and artificial lift selection, pressure transient Horner analysis, and petrophysical Archie Sw evaluation. Furthermore, unlike traditional engineers, I combine domain physics with automated Python and Excel analytics: I build automated decline curve algorithms and multi-well screening scripts that identify deferred production and optimize workovers. I offer an operator the complete package: broad multidisciplinary petroleum competence combined with modern digital productivity.",
      conceptCheck: "Frame your breadth and modern data automation as superior to narrow, single-discipline tenure."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Audit your current website progress: check your completed days, verify your score on the Day 69 test, review your Revision Queue, and prepare your workspace for Phase 3 Project 1 kickoff tomorrow!"
    },
    checklist: [
      { id: "d70-c1", text: "Completed the comprehensive Phase 2 retrospective audit", completed: false },
      { id: "d70-c2", text: "Reviewed petrophysics, well testing, production analytics, and Python", completed: false },
      { id: "d70-c3", text: "Audited and cleared weak topics in the Revision Queue", completed: false },
      { id: "d70-c4", text: "Set up GitHub repository structure for Phase 3 proof projects", completed: false },
      { id: "d70-c5", text: "Committed to the final 20-day sprint to secure a top-tier role", completed: false }
    ],
    confidenceRating: 0
  }
];
