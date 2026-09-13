import { DayPlan } from '../../types';

export const WEEK_11_DAYS: DayPlan[] = [
  // DAY 81
  {
    dayNumber: 81,
    phaseId: 3,
    weekNumber: 11,
    title: "High-Impact 1-Page Petroleum Engineering Resume Overhaul",
    category: "resume_linkedin",
    categoryLabel: "Resume & LinkedIn",
    todayGoal: "Overhaul your resume into a high-impact, single-page document; reframe 1-year junior experience into quantifiable engineering achievements; eliminate fluff.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Most junior engineering resumes fail for three predictable reasons: 1) They read like a passive job description ('Responsible for monitoring wells') rather than an active achievement record; 2) They omit numbers, percentages, and financial metrics; 3) They are buried in multi-page formatting that Applicant Tracking Systems (ATS) reject. Today, you overhaul your resume into a razor-sharp, single-page document that highlights your MIT Pune degree, reframes your 1-year junior experience into quantifiable operational accomplishments, and anchors your two flagship GitHub proof projects at the top.",
      keyPoints: [
        "The Universal 1-Page Rule: For professionals with under 5 years of experience, a 2-page resume is an immediate disqualifier. Recruiters spend 6 to 8 seconds scanning. Every word must fight for its space on a single page.",
        "The Google X-Y-Z Achievement Formula: 'Accomplished [X], as measured by [Y], by doing [Z]'. Example: Bad: 'Worked on well surveillance in Excel.' Good: 'Identified 860 BOPD in deferred production and eliminated 40% of downtime across 15 wells by developing an automated Arps decline curve and Chan diagnostic surveillance model in Python and Excel.'",
        "Strategic Layout Architecture: Top: Contact info & GitHub / LinkedIn hyperlinks; Section 1: Professional Summary (2 powerful lines framing you as a Petroleum Engineer from MIT Pune with production, petrophysics, and data automation competencies); Section 2: Technical Skills Matrix (Subsurface, Tools, Programming, Industry Standards); Section 3: Flagship Engineering Projects (Project 1 & Project 2 with live GitHub links); Section 4: Professional Experience (Junior Engineer role reframed with quantified impact); Section 5: Education (B.Tech Petroleum Engineering, MIT Pune).",
        "ATS Optimization Rules: Single-column format, standard clean fonts (Calibri, Arial, Georgia 10-11pt), 0.5-inch margins, standard section headers ('Technical Skills', 'Professional Experience'), zero tables/text-boxes/graphics that choke ATS parsers.",
        "Reframing 1-Year Fresher Experience: Even if your daily tasks were routine logging or paperwork, highlight your engineering initiative: procedural improvements, data audits, safety hazard identifications, and automated tracking sheets."
      ],
      coreFormulas: [
        {
          name: "The X-Y-Z Resume Bullet Formula",
          formula: "Strong_Bullet = Action_Verb + Specific_Task(X) + Quantified_Result(Y) + Engineering_Method(Z)",
          explanation: "Universal standard for high-converting engineering resume accomplishments."
        }
      ],
      fieldInsight: "Never put a headshot photo or date of birth on an international engineering resume (especially for US, Canadian, UK, or Middle East operator roles). Photos cause automated ATS rejection due to employment discrimination compliance laws. Keep your resume strictly text-focused and achievement-driven."
    },
    watchOrRead: {
      type: "read",
      title: "Harvard OCS: Resume and Cover Letter Guide for Technical & Engineering Roles",
      url: "https://careerservices.fas.harvard.edu",
      platform: "Harvard Office of Career Services",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d81-q1",
          question: "What is the maximum recommended page length for a petroleum engineer with 1 year of work experience?",
          options: [
            "Exactly 1 page",
            "3 to 4 pages",
            "10 pages including college transcripts",
            "Half a page"
          ],
          correctOptionIndex: 0,
          explanation: "For candidates with under 5 years of experience, a concise, high-density 1-page resume is the universal corporate standard.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q2",
          question: "Which resume bullet point follows the Google X-Y-Z formula most effectively?",
          options: [
            "Identified 860 BOPD of deferred production across 15 wells and modeled a 4-well workover program generating $15.1M in first-year net cash by developing automated Arps decline curves in Python",
            "Responsible for doing decline curves on wells",
            "Helped the senior engineer with daily tasks and attended meetings",
            "Good team player with knowledge of petroleum engineering"
          ],
          correctOptionIndex: 0,
          explanation: "It states the specific achievement (860 BOPD, $15.1M), quantifies the scope (15 wells, 4 workovers), and explains the method (Arps DCA in Python).",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q3",
          question: "Why should multi-column layouts, tables, and graphic text boxes be avoided on an engineering resume?",
          options: [
            "Applicant Tracking Systems (ATS) parse documents sequentially and frequently scramble or completely drop text inside multi-column tables and text boxes",
            "Because recruiters hate computers",
            "Because tables make the file too small",
            "Tables are illegal under international law"
          ],
          correctOptionIndex: 0,
          explanation: "Standard single-column text ensures 100% parsing accuracy across major ATS platforms (Workday, Taleo, Greenhouse).",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q4",
          question: "How should an MIT Pune graduate position their academic background on their resume?",
          options: [
            "B.Tech in Petroleum Engineering, MIT Pune | Relevant Coursework: Reservoir Engineering, Well Logging, Drilling Hydraulics, Production Optimization",
            "Just write 'College Graduate' with no institution name",
            "Put education at the very bottom in tiny 6pt font",
            "List every single test grade from freshman year"
          ],
          correctOptionIndex: 0,
          explanation: "MIT Pune has a strong regional and international alumni network in the energy sector; highlighting the degree and core coursework builds immediate trust.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q5",
          question: "What is the primary danger of using passive language like 'Assisted with' or 'Responsible for' on your resume?",
          options: [
            "It obscures your individual contribution, making you sound like a passive observer rather than an active engineering problem-solver",
            "It triggers an automatic spelling error",
            "It turns the text red",
            "Recruiters are allergic to the word 'with'"
          ],
          correctOptionIndex: 0,
          explanation: "Strong action verbs (Engineered, Quantified, Modeled, Evaluated, Diagnosed) convey leadership and ownership.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q6",
          question: "Where should your two GitHub proof projects be placed on your 1-year experience resume?",
          options: [
            "Prominently in a dedicated 'Flagship Technical Projects' section directly beneath Technical Skills and above or alongside Professional Experience",
            "Hidden in a footnote on the back of the page",
            "Only mentioned if the interviewer asks",
            "Deleted so you look like everyone else"
          ],
          correctOptionIndex: 0,
          explanation: "Positioning your flagship projects prominently immediately proves you possess practical skills beyond your 1-year tenure.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q7",
          question: "How should GitHub and LinkedIn links be formatted on your resume?",
          options: [
            "As clean, clickable hyperlinks (e.g., github.com/username/project-1) embedded directly in the header contact block and project descriptions",
            "As raw 200-character tracking URLs with random numbers",
            "Printed as QR codes only",
            "Described in words without links"
          ],
          correctOptionIndex: 0,
          explanation: "Clickable, clean hyperlinks allow recruiters reviewing PDFs on screens to access your code and live profiles with a single click.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q8",
          question: "What margin width and font size strike the optimal balance between readability and high information density on a 1-page resume?",
          options: [
            "0.5 to 0.75-inch margins, 10 to 11 pt body text, and 12 to 14 pt bold section headers in standard fonts (Calibri, Arial, Georgia)",
            "2.0-inch margins and 8 pt font",
            "Zero margins with 16 pt font",
            "3 pt font with all text uppercase"
          ],
          correctOptionIndex: 0,
          explanation: "0.5-inch margins and 10-11 pt font maximize printable area while preserving crisp visual white space.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q9",
          question: "How can a junior engineer reframe routine daily field gauge reporting into an impressive achievement bullet?",
          options: [
            "Streamlined field surveillance across 20 wells by building an automated daily production tracker, eliminating 5 hours of manual reporting per week and flagging GOR anomalies 48 hours earlier",
            "Wrote down numbers from gauges every morning",
            "Did daily gauge reports as instructed",
            "Watched the meters"
          ],
          correctOptionIndex: 0,
          explanation: "Focus on the business process improvement, time saved, and early anomaly detection rather than the manual data entry.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d81-q10",
          question: "In what file format should you always submit your finalized resume to job applications?",
          options: [
            "PDF format (named professionally: `FirstName_LastName_Petroleum_Engineer.pdf`)",
            ".docx file with track changes turned on",
            ".txt plain text with no formatting",
            "A JPEG screenshot image"
          ],
          correctOptionIndex: 0,
          explanation: "PDF preserves formatting, fonts, and hyperlinks identically across all operating systems and devices.",
          topic: "Resume & LinkedIn"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You conduct an ATS keyword density and spatial layout audit on your draft 1-page resume:\n- Total vertical page height = 11.0 inches (792 points at 72 pt/in)\n- Top and bottom margins = 0.50 inches each (1.0 inch total margin)\n- Printable vertical height = 10.0 inches (720 points)\n- Target sections: Header (60 pt), Summary (50 pt), Skills Matrix (75 pt), Flagship Projects (210 pt), Experience (220 pt), Education (65 pt), Spacing (40 pt) = 720 points total\n- Word count target = 450 to 520 words\n- Target ATS keyword occurrences: 'Petroleum', 'Reservoir', 'Production', 'Well Logging', 'Decline Curve', 'Archie', 'Python', 'Excel', 'Water Cut', 'MIT Pune'\nCalculate: 1) The percentage of printable space allocated to technical projects and experience combined, 2) If your current draft has 620 words, by what percentage must you condense your text to hit the 480-word sweet spot, and 3) If 10 core technical keywords appear an average of 2.5 times each, what is your keyword density across a 480-word document (%)?",
      givenValues: [
        { label: "Printable Height", value: "720 points (10.0 inches)" },
        { label: "Projects + Experience Height", value: "210 pt + 220 pt = 430 points" },
        { label: "Current Draft Words", value: "620 words" },
        { label: "Target Sweet Spot", value: "480 words" },
        { label: "Keyword Occurrences", value: "10 keywords * 2.5 = 25 total hits" }
      ],
      stepByStepSolution: [
        "Step 1: Projects + Experience Space % = (430 pt / 720 pt) * 100 = 59.72% (~60% of page dedicated to proof of ability).",
        "Step 2: Text Condensation % = [(620 - 480) / 620] * 100 = (140 / 620) * 100 = 22.58% reduction needed.",
        "Step 3: Keyword Density % = (Total Keyword Hits / Total Word Count) * 100 = (25 / 480) * 100 = 5.21%.\n(ATS sweet spot is 4% to 7% keyword density; 5.2% provides maximum algorithmic matching without spam penalty)."
      ],
      finalAnswer: "Core Experience Space = 59.7% | Condensation Needed = 22.6% (140 words cut) | ATS Keyword Density = 5.21% (Optimal)",
      engineeringSignificance: "Allocating 60% of your resume to concrete projects and experience while maintaining a 5.2% ATS keyword density guarantees that your resume passes automated filters and gives recruiters an immediate high-density scan."
    },
    interview: {
      durationMinutes: 15,
      question: "When a recruiter asks: 'Your resume shows about 1 year of experience—why should we consider you for a role asking for 2 to 3 years?'",
      sampleAnswer: "I welcome that question because it highlights the difference between passive tenure and active competence. I explain: 'While my official post-graduate tenure is approximately one year, my practical engineering velocity is equivalent to an engineer with 3 years of experience. At MIT Pune and during my field work, I focused aggressively on real subsurface problem-solving rather than just routine tasks. Over the last several months, I have built two published, end-to-end petroleum engineering projects on GitHub: a 15-well production optimization study where I modeled Arps decline curves, diagnosed water channeling, and engineered a 4-well workover program adding 860 BOPD; and a digital petrophysical evaluation of North Sea Volve wireline logs calculating Archie water saturation and volumetric OOIP. Furthermore, I bring modern data automation skills in Python and advanced Excel that traditional engineers often lack, allowing me to audit datasets, evaluate multi-well assets, and deliver results on day one with zero training curve.'",
      conceptCheck: "Frame tenure vs velocity: emphasize proof-of-ability projects, modern Python automation, and zero-onboarding ramp time."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Open your current resume, eliminate all fluff and passive verbs, apply the Google X-Y-Z formula, format into a clean 1-page layout, and embed hyperlinks to your Project 1 and Project 2 GitHub repositories."
    },
    checklist: [
      { id: "d81-c1", text: "Enforced the strict 1-page limit with 0.5-inch margins", completed: false },
      { id: "d81-c2", text: "Rewrote all experience bullets using the Google X-Y-Z formula", completed: false },
      { id: "d81-c3", text: "Embedded clickable hyperlinks to Project 1 and Project 2 GitHub repos", completed: false },
      { id: "d81-c4", text: "Highlighted MIT Pune B.Tech Petroleum Engineering credentials", completed: false },
      { id: "d81-c5", text: "Optimized ATS keyword density for Reservoir, Production, and Logging", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 82
  {
    dayNumber: 82,
    phaseId: 3,
    weekNumber: 11,
    title: "Resume A (Core Petroleum) vs Resume B (Petroleum + Data Analytics)",
    category: "resume_linkedin",
    categoryLabel: "Resume & LinkedIn",
    todayGoal: "Build two targeted, ATS-optimized resume variants: Resume A (for traditional Operator / Service Company roles) and Resume B (for Digital Oilfield / Production Analytics roles).",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "One generic resume sent to every job posting produces a dismal 2% callback rate. In the modern upstream energy job market, job descriptions fall into two distinct philosophical camps: 1) Traditional Petroleum Engineering (Production, Reservoir, Drilling, Wellsite operations at companies like ONGC, Cairn, ADNOC, SLB, Baker Hughes), and 2) Modern Digital Oilfield / Production Analytics (Subsurface data science, digital surveillance, automated forecasting at major operators, analytics consultancies, and tech service teams). Today, you construct and polish both tailored versions.",
      keyPoints: [
        "Resume A (Core Petroleum Engineer): Focuses on field operations, subsurface physics, well testing, artificial lift selection, nodal analysis, wellsite surveillance, workovers, and material balance. Technical Skills highlight: Nodal Analysis, Prosper, MBAL, Petrel, Eclipse, DST/PTA Horner analysis, ESP/Rod pump troubleshooting, API standards.",
        "Resume B (Petroleum Data Analytics Specialist): Focuses on automated decline curve analysis, SCADA telemetry cleaning, multi-well portfolio screening, petrophysical LAS parsing, and digital surveillance. Technical Skills highlight: Python (NumPy, Pandas, SciPy, Matplotlib, Lasio), SQL, Power BI, Excel Power Query, automated DCA algorithms, regression modeling.",
        "Strategic ATS Customization: When an applicant tracking system scans your resume, it computes a keyword match percentage against the specific job description. Matching 80%+ of their required terms moves you directly to the human recruiter's desk.",
        "Cross-Pollination Strength: Resume A still mentions Python as an automation tool (showing you are modern); Resume B still demonstrates deep rock-fluid and Archie physics (proving you are a genuine petroleum engineer, not just a generic coder).",
        "Exporting Ready-to-Send PDF Artifacts: Save as `FirstName_LastName_Petroleum_Engineer_Resume_A.pdf` and `FirstName_LastName_Petro_Data_Analyst_Resume_B.pdf`."
      ],
      coreFormulas: [
        {
          name: "ATS Target Match Threshold",
          formula: "ATS_Score = (Matched_Keywords / Total_Job_Keywords) >= 80%",
          explanation: "Minimum keyword alignment required to pass automated resume screening."
        }
      ],
      fieldInsight: "Always match the exact terminology used in the job posting! If the job description says 'Electric Submersible Pumps', do not write only 'ESP'; write 'Electric Submersible Pumps (ESP)'. If they say 'Pressure Transient Analysis', write 'Pressure Transient Analysis (PTA / Horner Plot)'. Using both the full term and the industry acronym guarantees that every ATS parser catches the keyword."
    },
    watchOrRead: {
      type: "read",
      title: "SPE Industry Insights: Emerging Job Roles at the Intersection of Petroleum Engineering and Data Analytics",
      url: "https://www.spe.org/en/jpt/",
      platform: "SPE Journal of Petroleum Technology (JPT)",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d82-q1",
          question: "Why is maintaining two distinct resume variants (Resume A: Core Petroleum vs Resume B: Petro + Data) far superior to using a single generic resume?",
          options: [
            "It allows you to tailor your technical emphasis and ATS keywords to match the exact requirements of traditional operations roles vs modern digital surveillance roles",
            "Because companies require you to submit two resumes at once",
            "To hide your graduation date",
            "It is required by the government"
          ],
          correctOptionIndex: 0,
          explanation: "Tailoring resumes to specific job families dramatically increases ATS relevance scores and human recruiter alignment.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q2",
          question: "When applying for a 'Reservoir Surveillance Engineer' role at an operating company emphasizing field operations and nodal analysis, which resume version should you submit?",
          options: [
            "Resume A: Core Petroleum Engineering",
            "Resume B: Petroleum + Data Analytics",
            "A software engineering resume",
            "An empty template"
          ],
          correctOptionIndex: 0,
          explanation: "Traditional operator roles prioritize reservoir drive, nodal analysis, well testing, and field surveillance.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q3",
          question: "Conversely, when applying for an 'Analytics Specialist' or 'Digital Oilfield Engineer' position at SLB or an E&P company, which version is optimal?",
          options: [
            "Resume B: Petroleum + Data Analytics Specialist",
            "Resume A: Core Petroleum",
            "A graphic design portfolio",
            "A printed business card"
          ],
          correctOptionIndex: 0,
          explanation: "Digital oilfield roles prioritize Python, automated DCA algorithms, telemetry data pipelines, and multi-well screening.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q4",
          question: "Why should an engineer include both the full phrase and the common acronym (e.g. 'Electric Submersible Pumps (ESP)') on their resume?",
          options: [
            "Different ATS systems and human recruiters may search for either the full term or the abbreviation; including both guarantees 100% keyword capture",
            "To make the bullet longer",
            "Because acronyms are forbidden alone",
            "To confuse the software"
          ],
          correctOptionIndex: 0,
          explanation: "Including both full term and acronym guarantees hits regardless of which keyword query the recruiter executes.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q5",
          question: "In Resume A (Core Petroleum), what technical competencies should lead the Technical Skills section?",
          options: [
            "Reservoir Engineering (MBE, Vogel IPR, Decline Curves), Well Logging (Archie, Net Pay, Density-Neutron), Production Systems (ESP, Gas Lift, Nodal Analysis), Well Testing (Horner, Skin)",
            "Web development (HTML, CSS, JavaScript)",
            "Video editing and animation",
            "Social media marketing"
          ],
          correctOptionIndex: 0,
          explanation: "Highlighting core subsurface engineering domains immediately signals deep classical engineering competence.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q6",
          question: "In Resume B (Petroleum Data Analytics), what technical competencies should lead the Technical Skills section?",
          options: [
            "Subsurface Data Science: Python (NumPy, Pandas, SciPy, Matplotlib, Lasio), Automated DCA Curve-Fitting, SCADA Telemetry Cleansing, SQL, Power BI, Excel Power Query",
            "Operating manual drilling brakes only",
            "Changing oil in automobiles",
            "Writing fiction novels"
          ],
          correctOptionIndex: 0,
          explanation: "Highlighting data manipulation, subsurface libraries, and automated analytics positions you as an upstream data specialist.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q7",
          question: "What is the strategic advantage of keeping both Project 1 and Project 2 on BOTH versions of your resume?",
          options: [
            "Because Project 1 showcases production optimization/DCA and Project 2 showcases petrophysics/reserves; altering the bullet emphasis highlights the relevant angle without losing technical breadth",
            "To make the resume 5 pages long",
            "Because you are not allowed to change projects",
            "It saves printing ink"
          ],
          correctOptionIndex: 0,
          explanation: "The two projects represent the core pillars of upstream engineering; adjusting the bullet point focus tailors the story perfectly.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q8",
          question: "What professional summary formula is most effective on Resume A?",
          options: [
            "'Petroleum Engineer (B.Tech, MIT Pune) with 1+ year of upstream experience specializing in production surveillance, artificial lift optimization, and reservoir evaluation. Proven track record in Arps DCA forecasting, well log petrophysics, and workover economics.'",
            "'Hardworking graduate looking for any job in any company.'",
            "'I love petroleum engineering and want to learn more.'",
            "'Experienced VP with 30 years experience.'"
          ],
          correctOptionIndex: 0,
          explanation: "It succinctly states degree institution, tenure, core technical disciplines, and proven project achievements in two authoritative sentences.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q9",
          question: "How should you name the finalized PDF files on your computer before applying?",
          options: [
            "`Umar_Karajagi_Petroleum_Engineer.pdf` and `Umar_Karajagi_Petro_Data_Analyst.pdf`",
            "`Resume_final_v3_final_final.pdf`",
            "`Document1.pdf`",
            "`asdfgh.pdf`"
          ],
          correctOptionIndex: 0,
          explanation: "A clean, professional file naming convention ensures recruiters can identify and retrieve your file easily from their download folder.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d82-q10",
          question: "What should you do before submitting either resume version to a specific job opening?",
          options: [
            "Quickly scan the target job description, identify 3 to 5 unique keywords (e.g. 'Waterflood Management' or 'Power BI'), and ensure they appear naturally in your summary or skills section",
            "Change your name to match the CEO",
            "Delete your phone number",
            "Submit 50 times in one hour"
          ],
          correctOptionIndex: 0,
          explanation: "A 2-minute keyword polish against the target job posting guarantees an 85%+ ATS match score.",
          topic: "Resume & LinkedIn"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You perform an ATS keyword alignment audit on a target job posting for a 'Junior Reservoir & Production Surveillance Engineer' at Cairn / Vedanta:\n- Total required skill keywords in Job Description = 20 keywords\n- Keywords present in your default draft = 12 keywords (Match rate = 60.0% -> ATS Reject)\n- Missing target keywords identified: 1) 'Waterflood Surveillance', 2) 'Nodal Analysis', 3) 'Horner Plot', 4) 'Vogel IPR', 5) 'Electric Submersible Pumps (ESP)', 6) 'Estimated Ultimate Recovery (EUR)'\nCalculate: 1) Match score before tailoring (%), 2) If you integrate all 6 missing keywords into your Resume A summary and project bullets, what is your new keyword match score (out of 20, %), 3) Does this exceed the 80% ATS pass threshold, and 4) If typical candidate conversion from ATS pass to recruiter phone screen is 25%, how many phone screens do you expect from 20 applications scoring >= 85%?",
      givenValues: [
        { label: "Total Required Keywords", value: "20 keywords" },
        { label: "Initial Matches", value: "12 keywords" },
        { label: "Integrated Keywords", value: "+6 keywords" },
        { label: "ATS Pass Threshold", value: "80.0%" },
        { label: "Conversion Rate", value: "25.0%" }
      ],
      stepByStepSolution: [
        "Step 1: Initial Match Score = (12 / 20) * 100 = 60.0% (Fails ATS filter).",
        "Step 2: New Match Score with 6 integrated keywords:\nTotal Matches = 12 + 6 = 18 keywords.\nNew Score = (18 / 20) * 100 = 90.0%.",
        "Step 3: Threshold Evaluation: 90.0% >= 80.0% [PASSES with top-tier ranking].",
        "Step 4: Expected Recruiter Phone Screens from 20 tailored applications:\nExpected Screens = 20 applications * 0.25 conversion = 5.0 recruiter phone screens!"
      ],
      finalAnswer: "Initial Score = 60.0% (Fail) | Tailored Score = 90.0% (Pass) | Exceeds 80% Threshold: YES | Expected Phone Screens = 5"
    },
    interview: {
      durationMinutes: 15,
      question: "Which type of petroleum engineering role do you see yourself in: classical operations or modern digital analytics?",
      sampleAnswer: "I see myself as an integrated bridge between classical operations and modern digital analytics. I believe the most effective petroleum engineers are those who have dirty boots and clean code: they deeply understand the physical subsurface realities—multiphase flow, relative permeability, well control, and artificial lift mechanical teardowns—while leveraging modern Python and data analytics to multiply their operational productivity. In a classical reservoir or production surveillance role, my data automation skills allow me to evaluate 50 wells in the time it takes another engineer to review 5. In a digital oilfield team, my rock-fluid domain knowledge ensures that our algorithms and predictive models always honor physical reservoir laws. I am fully prepared to excel in either environment.",
      conceptCheck: "Position yourself as a bilingual hybrid: strong subsurface physics combined with automated data literacy."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Finalize both Resume A (Core Petroleum) and Resume B (Petro Data Analytics). Export both to professional single-page PDFs: `FirstName_LastName_Petroleum_Engineer_Resume_A.pdf` and `FirstName_LastName_Petro_Data_Analyst_Resume_B.pdf`."
    },
    checklist: [
      { id: "d82-c1", text: "Crafted Resume A tailored for traditional Operator / Service roles", completed: false },
      { id: "d82-c2", text: "Crafted Resume B tailored for Digital Oilfield / Analytics roles", completed: false },
      { id: "d82-c3", text: "Integrated dual full-term and acronym keywords (e.g. ESP, PTA, DCA)", completed: false },
      { id: "d82-c4", text: "Achieved > 85% ATS keyword match score across target postings", completed: false },
      { id: "d82-c5", text: "Exported high-resolution, single-page PDF artifacts for both versions", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 83
  {
    dayNumber: 83,
    phaseId: 3,
    weekNumber: 11,
    title: "LinkedIn Profile Optimization & Upstream Networking Strategy",
    category: "resume_linkedin",
    categoryLabel: "Resume & LinkedIn",
    todayGoal: "Optimize your LinkedIn profile into a recruiter magnet: write a compelling headline, feature your GitHub projects, revamp your About section, and connect with MIT Pune petroleum alumni.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Over 85% of upstream technical recruiters and hiring managers use LinkedIn Recruiter to headhunt candidates before ever reading through incoming job board applications. An optimized LinkedIn profile acts as a 24/7 inbound recruiter magnet. Today, you will optimize every section of your LinkedIn profile: craft a keyword-rich headline that replaces generic 'Seeking Opportunities' phrasing, write a compelling first-person About narrative, feature your GitHub Project 1 and Project 2 visual banners, and tap into the powerful MIT Pune alumni network across global operators.",
      keyPoints: [
        "The High-Conversion Headline Formula: Do NOT write 'Unemployed Petroleum Engineer seeking entry-level job'. Write: 'Petroleum Engineer | Production Surveillance, Reservoir Evaluation & DCA | Python & Petrophysics | B.Tech MIT Pune | +860 BOPD Optimization Case Study'. Includes job title, core competencies, technical tools, institution, and proof metric.",
        "The 'About' Section Storytelling Framework: Paragraph 1: Who you are and your engineering passion; Paragraph 2: Core technical pillars (Production optimization, decline curve analysis, wireline petrophysics, well control); Paragraph 3: Proof of ability (summary of Project 1 and Project 2 with key metrics); Paragraph 4: Call to action ('Let's connect: [Email] | [GitHub Link]').",
        "The 'Featured' Section Visual Showcase: Upload high-resolution graphic banners for Project 1 (Decline Curve & Chan Plot) and Project 2 (Composite Log Display) with direct links to your GitHub repositories. When recruiters land on your profile, they see professional engineering graphics immediately.",
        "Skills Endorsements Matrix: Add top 15 petroleum keywords: Petroleum Engineering, Reservoir Management, Well Logging, Production Optimization, Decline Curve Analysis, Artificial Lift, Nodal Analysis, Well Testing, Petrophysics, Python, Data Analysis, Upstream Oil & Gas.",
        "MIT Pune Alumni Search Protocol: Go to the 'MIT World Peace University / MIT Pune' LinkedIn page -> Alumni tab -> Filter by 'Petroleum Engineering' -> Filter by companies: SLB, Baker Hughes, Halliburton, Cairn Oil & Gas, ONGC, Shell, Reliance, ADNOC. Send 10 personalized connection requests daily."
      ],
      coreFormulas: [
        {
          name: "Recruiter Search Visibility Formula",
          formula: "Visibility = (Target_Job_Title_in_Headline * 5) + (Keywords_in_About * 3) + (Project_Visuals_in_Featured * 2)",
          explanation: "Algorithmic weights driving LinkedIn Recruiter search rankings."
        }
      ],
      fieldInsight: "When reaching out to MIT Pune alumni on LinkedIn, NEVER ask for a job in the very first message! That gets ignored. Instead, ask for a 10-minute 'Informational Interview / Advice': 'Hi [Name], as a fellow MIT Pune Petroleum graduate, I really admire your career trajectory at [Company]. I've recently completed two deep-dive production and petrophysical projects on GitHub and would love to ask your quick perspective on emerging skills in your team.' Fellow alumni love giving advice, and 40% of advice calls turn into internal job referrals."
    },
    watchOrRead: {
      type: "read",
      title: "LinkedIn Talent Solutions: How Technical Recruiters Search and Filter Engineering Talent",
      url: "https://business.linkedin.com/talent-solutions",
      platform: "LinkedIn Talent Insights",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d83-q1",
          question: "Why is writing 'Aspiring Petroleum Engineer seeking entry-level opportunities' in your LinkedIn headline an ineffective strategy?",
          options: [
            "Technical recruiters never search for the words 'aspiring' or 'seeking'; they search for target job titles like 'Petroleum Engineer', 'Production Engineer', or 'Reservoir Analyst'",
            "Because LinkedIn deletes profiles with the word 'seeking'",
            "Recruiters prefer all caps",
            "Headlines should only contain your name"
          ],
          correctOptionIndex: 0,
          explanation: "LinkedIn Recruiter search matches on exact job titles and technical skills; leading with 'Petroleum Engineer' maximizes search ranking.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q2",
          question: "Which LinkedIn headline follows the recommended high-conversion formula most effectively?",
          options: [
            "Petroleum Engineer | Production Surveillance, Reservoir Evaluation & DCA | Python & Petrophysics | B.Tech MIT Pune | +860 BOPD Optimization Case Study",
            "Graduate Engineer Looking for Work",
            "Experienced with computers and petroleum",
            "MIT Pune Student"
          ],
          correctOptionIndex: 0,
          explanation: "Combines target job title, core disciplines, technical tools, academic institution, and quantified proof-of-ability metric.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q3",
          question: "What content should be showcased in your LinkedIn 'Featured' section?",
          options: [
            "Visual image banners and direct clickable links to your Project 1 (Production DCA) and Project 2 (Well Log Petrophysics) GitHub repositories",
            "Vacation photos",
            "Random news articles",
            "Personal diary entries"
          ],
          correctOptionIndex: 0,
          explanation: "The Featured section sits above the fold; embedding professional engineering graphics immediately grabs recruiter attention.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q4",
          question: "When sending a LinkedIn connection request to an MIT Pune alumni working as a Senior Engineer at Cairn or SLB, what should your initial message say?",
          options: [
            "Mention your shared MIT Pune petroleum background, express genuine admiration for their work, and ask for a 10-minute informational chat to seek advice on skills",
            "'Please give me a job at your company immediately'",
            "'Here is my resume, please hire me'",
            "Send a blank connection request with no note"
          ],
          correctOptionIndex: 0,
          explanation: "Warm alumni connections built on seeking advice generate massive rapport and frequently lead to internal employee referrals.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q5",
          question: "How does having a professional, high-resolution headshot in corporate attire affect LinkedIn profile click-through rates?",
          options: [
            "Profiles with professional photos receive up to 14x more profile views and 9x more connection acceptance rates",
            "It has zero effect",
            "It causes recruiters to skip the profile",
            "Photos are prohibited on LinkedIn"
          ],
          correctOptionIndex: 0,
          explanation: "A polished, friendly, professional headshot establishes instant credibility and human connection.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q6",
          question: "What is the primary benefit of toggling the 'Open to Work' setting on LinkedIn visible to 'Recruiters Only'?",
          options: [
            "It signals to external recruiters using LinkedIn Recruiter that you are actively interviewing without alerting your current employer or putting a public green banner on your photo",
            "It turns off your profile",
            "It hides your education",
            "It sends automated emails to your friends"
          ],
          correctOptionIndex: 0,
          explanation: "'Recruiters Only' selectively alerts corporate headhunters while protecting discretion from your current workplace.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q7",
          question: "How should technical skills be arranged in your LinkedIn Skills section?",
          options: [
            "Pin your top 3 primary skills (e.g. Petroleum Engineering, Reservoir Engineering, Production Optimization) to the top, followed by tools (Python, Petrophysics, Well Logging)",
            "Alphabetical order only",
            "Random order",
            "Only list generic skills like 'Microsoft Word'"
          ],
          correctOptionIndex: 0,
          explanation: "Pinning your 3 core petroleum disciplines ensures they are immediately visible to anyone scanning your profile.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q8",
          question: "What is the recommended weekly connection cadence for building your upstream industry network?",
          options: [
            "Sending 10 to 15 personalized connection requests per day (50 to 75 per week) to alumni, technical recruiters, and engineering managers",
            "1 request per month",
            "500 spam requests in 5 minutes",
            "Never connecting with anyone"
          ],
          correctOptionIndex: 0,
          explanation: "A steady, consistent cadence of 10–15 warm requests daily builds a 500+ relevant upstream network within a few weeks.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q9",
          question: "How does posting a short, professional summary of your Project 1 or Project 2 on your LinkedIn feed drive recruiter visibility?",
          options: [
            "Engaging technical posts with embedded charts appear in your connections' feeds, generating organic likes, comments, and direct recruiter messages",
            "It causes your account to be locked",
            "Nobody reads LinkedIn posts",
            "It lowers your search ranking"
          ],
          correctOptionIndex: 0,
          explanation: "Sharing technical case studies demonstrates authentic enthusiasm and routinely generates inbound recruiter outreach.",
          topic: "Resume & LinkedIn"
        },
        {
          id: "d83-q10",
          question: "What should you do immediately after an alumnus agrees to a 10-minute informational coffee chat?",
          options: [
            "Thank them, provide a seamless scheduling link (or 2 specific time options), prepare 3 thoughtful technical questions, and research their background",
            "Cancel the call",
            "Demand that they hire you before the call starts",
            "Show up 20 minutes late with no questions"
          ],
          correctOptionIndex: 0,
          explanation: "Flawless preparation, punctuality, and thoughtful questions demonstrate professional respect and maturity.",
          topic: "Resume & LinkedIn"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You analyze your LinkedIn outreach funnel over a 2-week networking sprint:\n- Total personalized connection requests sent to MIT Pune alumni & recruiters = 100 requests\n- Connection requests accepted = 42 accepted (42.0% acceptance rate)\n- Follow-up informational chat requests sent = 42 messages\n- Informational phone/video chats secured = 14 chats (33.3% conversion)\n- Internal employee job referrals generated from chats = 4 direct referrals to hiring managers\nCalculate: 1) Connection Acceptance Rate (%), 2) Chat Conversion Rate from accepted connections (%), 3) Direct Referral Rate from total outreach (%), and 4) If an internal employee referral has a 40% probability of converting to a formal interview, how many formal interviews are expected from this 100-person outreach sprint?",
      givenValues: [
        { label: "Total Requests Sent", value: "100 requests" },
        { label: "Connections Accepted", value: "42 accepted" },
        { label: "Chats Secured", value: "14 chats" },
        { label: "Referrals Generated", value: "4 referrals" },
        { label: "Referral-to-Interview Rate", value: "40.0%" }
      ],
      stepByStepSolution: [
        "Step 1: Connection Acceptance Rate = (42 / 100) * 100 = 42.00%.",
        "Step 2: Chat Conversion Rate = (14 / 42) * 100 = 33.33%.",
        "Step 3: Direct Referral Rate = (4 / 100) * 100 = 4.00% of cold outreach.",
        "Step 4: Expected Formal Interviews = 4 referrals * 0.40 = 1.6 formal interview rounds! (Nearly 2 first-round interviews from just 100 targeted alumni messages)."
      ],
      finalAnswer: "Acceptance Rate = 42.0% | Chat Conversion = 33.3% | Referral Rate = 4.0% | Expected Interviews = 1.6 rounds",
      engineeringSignificance: "Cold job board applications convert at only 2%, meaning 100 job board clicks yield zero to two interviews. In contrast, alumni networking yields a 4% referral rate with a 40% interview conversion, delivering an 8x higher return on time."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you conduct an informational coffee chat with a senior petroleum engineer so it naturally leads to a job referral?",
      sampleAnswer: "I run the informational chat with a strict 3-part agenda: 1) Build Rapport & Listen (Minutes 0–5): Thank them for their time, acknowledge their work at their company, and ask about their career path since leaving MIT Pune. People love sharing their journey, and it establishes common ground. 2) Demonstrate Competence & Seek Advice (Minutes 5–12): Transition into technical discussion by asking a smart question about their current field challenges: 'I recently completed a 15-well decline curve and Chan plot optimization project on GitHub, where I found behind-casing channeling was causing 90% water cut. In your mature waterflood assets, what are the primary surveillance bottlenecks your team is tackling?' This proves I know the domain without sounding boastful. 3) The Pivot to Referral (Minutes 12–15): Ask: 'Given your experience at [Company], what advice would you give to someone with my background looking to transition into a role on your team or in your department?' If they are impressed by your technical preparation, 8 times out of 10 they will respond: 'Actually, send me your resume—we have an opening on our production team and I'd be happy to pass it to the hiring manager.'",
      conceptCheck: "Structure the informational interview: Rapport -> Subsurface technical dialogue -> The natural referral pivot."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Update your live LinkedIn profile today: rewrite your headline using the 5-part formula, update your About section, feature Project 1 & 2 GitHub links with graphic banners, and send 10 personalized connection requests to MIT Pune petroleum alumni."
    },
    checklist: [
      { id: "d83-c1", text: "Rewrote LinkedIn headline with target title, skills, and proof metrics", completed: false },
      { id: "d83-c2", text: "Revamped About section into a compelling first-person engineering story", completed: false },
      { id: "d83-c3", text: "Featured Project 1 and Project 2 banners with direct GitHub links", completed: false },
      { id: "d83-c4", text: "Configured 'Open to Work' setting set to 'Recruiters Only'", completed: false },
      { id: "d83-c5", text: "Sent 10 personalized connection requests to MIT Pune alumni in upstream", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 84
  {
    dayNumber: 84,
    phaseId: 3,
    weekNumber: 11,
    title: "Target Companies & Upstream Petroleum Market Mapping",
    category: "job_search_strategy",
    categoryLabel: "Job Search Strategy",
    todayGoal: "Map the upstream oil & gas landscape across Operators, Tier-1 Service Companies, EPCs, and Subsurface Consultancies across India, Middle East, and Global hubs.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "A successful job search requires systematic market intelligence rather than applying randomly to whatever appears on generic job boards. The petroleum industry is structured into distinct tiers: 1) Major Operators (who own the oil and capital), 2) National Oil Companies (NOCs), 3) Tier-1 Oilfield Service Companies (who execute the downhole technology), 4) Specialist Subsurface Consultancies (reserves and simulation experts), and 5) EPC & Surface Facilities Engineering firms. Today, you will build a comprehensive Target Company Master Matrix of 50 companies across India, the Middle East, Southeast Asia, and North America.",
      keyPoints: [
        "Tier 1: Upstream Operators in India: Cairn Oil & Gas (Vedanta), ONGC, Oil India Limited (OIL), Reliance Industries (RIL Upstream / KG-D6), HOEC, Sun Petrochemicals, Essar Oil & Gas (CBM).",
        "Tier 2: Global Service Companies in India & Middle East: SLB (Schlumberger), Baker Hughes, Halliburton, Weatherford, Petrofac, Wood, TechnipFMC. Many maintain massive subsurface digital delivery centers in Pune, Mumbai, Bangalore, and Dubai.",
        "Tier 3: Middle East Operators (Active Recruiters): ADNOC (UAE), Saudi Aramco, QatarEnergy, Petroleum Development Oman (PDO), Kuwait Oil Company (KOC), Dragon Oil.",
        "Tier 4: Subsurface Consultancies & Software Teams: Ryder Scott, DeGolyer and MacNaughton, Sproule, GaffneyCline, Landmark (Halliburton), SIS (SLB), IHS Markit / S&P Global Commodity Insights.",
        "The Master Tracking Database: Set up your Job Tracker with fields: Company Name, Tier, Location, Target Role Titles, Careers Portal Link, Key Alumni / Hiring Managers, Date Applied, Application Status, and Follow-Up Date."
      ],
      coreFormulas: [
        {
          name: "Application Pipeline Capacity",
          formula: "Active_Pipeline = Target_Companies (50) * Avg_Openings_per_Company (1.5) = 75 potential roles",
          explanation: "Total addressable job application surface area."
        }
      ],
      fieldInsight: "Pay special attention to the massive engineering and digital technical centers in India! Schlumberger's Pune Technology Center, Baker Hughes' Bangalore Technical Center, and Cairn's Gurgaon offices are constantly hiring junior to mid-level petroleum engineers who understand subsurface physics combined with digital analytics. As an MIT Pune graduate, you have an immense geographical and institutional advantage in Pune and Mumbai."
    },
    watchOrRead: {
      type: "read",
      title: "IOGP (International Association of Oil & Gas Producers): Global Upstream Industry Report",
      url: "https://www.iogp.org",
      platform: "IOGP Reports",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d84-q1",
          question: "What is the fundamental business difference between an Upstream Operator (e.g. Cairn, ONGC, Shell) and an Oilfield Service Company (e.g. SLB, Halliburton)?",
          options: [
            "Operators own the exploration licenses, reservoir equity, and production revenues; Service companies sell specialized technology, tools, and technical personnel to the operators",
            "Operators drill wells, while service companies own the gas stations",
            "Service companies own the oil underground",
            "There is no difference"
          ],
          correctOptionIndex: 0,
          explanation: "Operators manage the assets and invest capital; service companies provide downhole tools, logging, drilling rigs, and engineering services.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q2",
          question: "Which major international service company maintains a massive global subsurface technology and software center in Pune, India?",
          options: [
            "SLB (Schlumberger Pune Technology Center)",
            "NASA",
            "Boeing",
            "Pfizer"
          ],
          correctOptionIndex: 0,
          explanation: "SLB operates a major technology center in Pune developing petrophysical, reservoir simulation, and digital oilfield software.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q3",
          question: "What role titles are most suitable for a petroleum engineer with ~1 year of experience and strong Python/analytics skills?",
          options: [
            "Junior Petroleum Engineer, Production Surveillance Engineer, Associate Reservoir Engineer, Petrophysical Analyst, Subsurface Data Analyst",
            "Chief Executive Officer (CEO)",
            "Vice President of Global Exploration",
            "Chief Financial Officer (CFO)"
          ],
          correctOptionIndex: 0,
          explanation: "These entry-to-junior titles match 1–3 years of experience and align with your rebuilt core competencies and proof projects.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q4",
          question: "Why should an engineer track applications in a structured database (Kanban or Excel table) rather than relying on memory?",
          options: [
            "To track follow-up dates, customize outreach, manage multi-stage interview prep, and ensure zero applications slip through the cracks",
            "Because job boards mandate it",
            "To show your friends",
            "To delete your resume"
          ],
          correctOptionIndex: 0,
          explanation: "Systematic tracking prevents duplicate applications, manages follow-up timelines, and keeps your pipeline full.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q5",
          question: "Which of the following Indian companies is the largest private upstream oil producer, operating the Mangala field in Rajasthan?",
          options: [
            "Cairn Oil & Gas (Vedanta Limited)",
            "Tata Motors",
            "Infosys",
            "State Bank of India"
          ],
          correctOptionIndex: 0,
          explanation: "Cairn Oil & Gas operates the prolific Barmer Basin in Rajasthan, contributing significant domestic crude production.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q6",
          question: "What is an 'Independent Subsurface Reserves Consultancy' (e.g. Ryder Scott, DeGolyer and MacNaughton, Sproule)?",
          options: [
            "Third-party technical evaluation firms that audit and certify oil and gas reserves for regulatory filings and banking loan facilities",
            "Companies that drill water wells",
            "Firms that build offshore platforms",
            "Financial tax accountants with no engineers"
          ],
          correctOptionIndex: 0,
          explanation: "Reserves consultancies provide independent technical certifications of EUR and reserves, hiring quantitative reservoir analysts.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q7",
          question: "How does mapping target companies in Middle Eastern hubs (Dubai, Abu Dhabi, Doha, Muscat) benefit an Indian petroleum engineer?",
          options: [
            "Middle Eastern operators and service hubs actively recruit Indian petroleum engineering talent due to geographic proximity, high technical rigor, and competitive cost structures",
            "Middle East has no oil",
            "Indian degrees are not recognized",
            "Visas are never granted"
          ],
          correctOptionIndex: 0,
          explanation: "The Middle East is the largest global market for upstream talent and has thousands of Indian petroleum engineering alumni in senior leadership.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q8",
          question: "What is 'Hidden Job Market' in petroleum engineering?",
          options: [
            "Up to 60–70% of engineering vacancies that are filled through internal promotions, recruiter direct headhunting, or employee referrals before ever being advertised publicly",
            "Jobs that do not pay a salary",
            "Illegal underground mining",
            "Jobs on secret websites"
          ],
          correctOptionIndex: 0,
          explanation: "Most high-quality engineering roles are filled via warm networking and internal referrals without public job board postings.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q9",
          question: "Which petroleum professional society hosts the world's premier upstream job board, technical conferences, and local chapter networking events?",
          options: [
            "SPE (Society of Petroleum Engineers)",
            "IEEE",
            "ASME",
            "AMA"
          ],
          correctOptionIndex: 0,
          explanation: "SPE is the global home of petroleum professionals, providing job boards, webinars, local section meetings, and OnePetro publications.",
          topic: "Job Search Strategy"
        },
        {
          id: "d84-q10",
          question: "How many target companies should you map in your master target company matrix?",
          options: [
            "At least 40 to 50 active upstream operators, service companies, and consultancies across your target geographic regions",
            "Exactly 1 company",
            "5,000 companies",
            "Zero"
          ],
          correctOptionIndex: 0,
          explanation: "A focused target list of 40–50 verified companies provides sufficient market depth without diluting your customization effort.",
          topic: "Job Search Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You construct your Target Company Master Matrix categorized into 4 tiers:\n- Tier 1 (Domestic Operators): 8 companies with an average of 2 relevant open roles per company\n- Tier 2 (International Service Companies): 12 companies with an average of 3 relevant open roles per company\n- Tier 3 (Middle East Operators): 15 companies with an average of 1.5 relevant open roles per company\n- Tier 4 (Subsurface Consultancies): 15 companies with an average of 1 relevant open role per company\nCalculate: 1) Total addressable job openings in your matrix, 2) The percentage of roles located in Tier 1 and Tier 2 combined, 3) If you submit 5 tailored applications per day, how many business days will it take to complete your first sweep of all addressable openings in the matrix?",
      givenValues: [
        { label: "Tier 1", value: "8 companies * 2 roles = 16 roles" },
        { label: "Tier 2", value: "12 companies * 3 roles = 36 roles" },
        { label: "Tier 3", value: "15 companies * 1.5 roles = 22.5 roles" },
        { label: "Tier 4", value: "15 companies * 1 role = 15 roles" },
        { label: "Application Pace", value: "5 applications / day" }
      ],
      stepByStepSolution: [
        "Step 1: Total Addressable Openings = 16 + 36 + 22.5 + 15 = 89.5 (~90 active opportunities).",
        "Step 2: Tier 1 + Tier 2 Roles = 16 + 36 = 52 roles.\nPercentage = (52 / 89.5) * 100 = 58.10%.",
        "Step 3: Sweep Time at 5 applications/day:\nBusiness Days = 89.5 / 5 = 17.9 business days (~3.5 working weeks)."
      ],
      finalAnswer: "Addressable Roles = 90 opportunities | Tier 1+2 Share = 58.1% | Initial Sweep Time = 18 business days",
      engineeringSignificance: "This quantitative market map transforms vague job anxiety into a concrete, executable 18-day engineering pipeline. You have 90 real targets to pursue systematically."
    },
    interview: {
      durationMinutes: 15,
      question: "Why are you targeting our company specifically rather than any other oil and gas company?",
      sampleAnswer: "I target your company because of your active brownfield asset portfolio and your commitment to digital subsurface technology. For example, I follow your operations in [Field/Region], where maintaining waterflood sweep efficiency and managing artificial lift reliability in mature high-water-cut wells is a primary operational objective. That is the exact challenge I tackled in my recent 15-well production optimization case study, where I diagnosed behind-casing water channeling using Chan diagnostic plots and modeled workovers delivering 860 BOPD. Furthermore, unlike generic applicants who apply to 100 random postings, I know your asset type, I know your reservoir challenges, and my background in both classical petrophysics and Python data automation means I can add immediate value to your surveillance team without requiring months of training.",
      conceptCheck: "Connect their specific assets/challenges to your Project 1 or Project 2 proof deliverables."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Build your Target Company Master Matrix in your Job Tracker: list 50 companies across Tier 1 Operators, Tier 2 Service Companies, Middle East Hubs, and Subsurface Consultancies, adding links to their career portals."
    },
    checklist: [
      { id: "d84-c1", text: "Mapped 50 target companies across Operators, Service, and Consultancies", completed: false },
      { id: "d84-c2", text: "Identified key regional technology hubs (Pune, Mumbai, Bangalore, Dubai)", completed: false },
      { id: "d84-c3", text: "Identified addressable junior engineering job titles", completed: false },
      { id: "d84-c4", text: "Populated the Master Job Tracker spreadsheet with career links", completed: false },
      { id: "d84-c5", text: "Calculated the 18-day systematic application sweep schedule", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 85
  {
    dayNumber: 85,
    phaseId: 3,
    weekNumber: 11,
    title: "Daily Job Application System & Pipeline Management",
    category: "job_search_strategy",
    categoryLabel: "Job Search Strategy",
    todayGoal: "Implement a disciplined daily application routine (5–10 targeted applications per day), track candidates across Kanban stages, and write high-converting tailored cover notes.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Job searching is a numbers game governed by conversion funnel metrics: Applications -> Recruiter Phone Screens -> Technical Interviews -> Final Rounds -> Job Offers. Submitting 2 applications a week guarantees failure. Submitting 5 to 10 highly targeted, customized applications daily with follow-up outreach builds an unstoppable pipeline. Today, you implement a disciplined daily application system, configure your Kanban pipeline stages, and master writing concise, high-converting 3-paragraph tailored cover notes.",
      keyPoints: [
        "The Daily Power Hour Routine (9:00 AM – 11:30 AM): Block 2.5 hours every morning: 1) 30 min: Review new postings on LinkedIn, Rigzone, Oil and Gas Job Search, and company portals; 2) 60 min: Submit 5 tailored applications (matching ATS keywords and choosing Resume A vs B); 3) 30 min: Send 5 cold LinkedIn outreach notes to engineers/recruiters at those companies; 4) 30 min: Log records into your Job Tracker.",
        "The Kanban Pipeline Stages: 1) Wishlist / Researched, 2) Applied (Resume A/B logged), 3) Networking Follow-Up Sent, 4) Recruiter Screen Scheduled, 5) Technical Interview Round, 6) Offer Received / Negotiating, 7) Archived / Rejected.",
        "The 3-Paragraph High-Impact Cover Note Formula: Paragraph 1: The Hook (Target role title, reference to their specific asset/project, and your MIT Pune Petroleum Engineering degree); Paragraph 2: The Proof (Brief quantitative highlight of Project 1: +860 BOPD optimization, or Project 2: Volve petrophysics, with GitHub link); Paragraph 3: The Close (Clear call to action for a 15-minute conversation). Total length: under 150 words.",
        "Managing Rejections Resiliently: A 10% to 15% interview rate is elite in upstream engineering. 85% of applications will be ignored or rejected by automated filters. Rejection is merely data; maintaining a 5-app/day pace generates 25 applications weekly and 2 to 3 interviews every single week."
      ],
      coreFormulas: [
        {
          name: "Weekly Application Pipeline Funnel",
          formula: "Weekly_Apps (25) -> Recruiter_Screens (3-4) -> Technical_Interviews (1-2) -> Monthly_Offers (1)",
          explanation: "Standard conversion funnel metrics for targeted engineering applications."
        }
      ],
      fieldInsight: "Always tailor your cover note directly into the online application form's 'Additional Information' or 'Cover Letter' box! Recruiters rarely open separate attached cover letter PDFs, but they always read text pasted directly into the application portal textbox. Keep it under 150 punchy words."
    },
    watchOrRead: {
      type: "read",
      title: "Rigzone / Oil and Gas Job Search: Career Guides for Upstream Job Applications",
      url: "https://www.rigzone.com",
      platform: "Rigzone Career Center",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d85-q1",
          question: "What is the recommended daily pace of targeted, customized job applications during Phase 3?",
          options: [
            "5 to 10 highly targeted, customized applications per day",
            "1 application per week",
            "100 spam applications with zero customization",
            "Zero applications"
          ],
          correctOptionIndex: 0,
          explanation: "5 to 10 tailored applications daily creates steady pipeline velocity without sacrificing quality or ATS keyword customization.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q2",
          question: "What is the ideal word count for a tailored cover note submitted through an online portal?",
          options: [
            "Under 150 words (3 punchy paragraphs: Hook, Proof Project Metric, Call to Action)",
            "2,000 words detailing your entire life story",
            "1 single sentence",
            "Cover notes should be blank"
          ],
          correctOptionIndex: 0,
          explanation: "Busy recruiters scan cover notes in 15 seconds; a concise 150-word note focused on your proof project gets read completely.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q3",
          question: "In your Kanban job pipeline tracker, what action should immediately follow moving an application to 'Applied'?",
          options: [
            "Identify an MIT Pune alumni or engineering manager at that company and send a warm LinkedIn follow-up note referencing your application",
            "Forget about the company forever",
            "Call the front desk 20 times",
            "Delete your resume"
          ],
          correctOptionIndex: 0,
          explanation: "Pairing an online application with warm alumni/recruiter outreach triples your chance of getting your resume pulled from the pile.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q4",
          question: "Why should an engineer track which resume version (Resume A vs Resume B) was sent to each specific company?",
          options: [
            "So that when a recruiter calls for an interview, you know exactly which technical narrative (Core Petroleum vs Data Analytics) they reviewed",
            "Because the computer will erase both files",
            "To report to the tax department",
            "It is not necessary to track"
          ],
          correctOptionIndex: 0,
          explanation: "Knowing whether the interviewer reviewed your core operations resume or data analytics resume is crucial for interview alignment.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q5",
          question: "What is an elite conversion rate from submitted applications to first-round recruiter phone screens in technical engineering?",
          options: [
            "10% to 15% (1 to 2 interviews per 10 targeted applications)",
            "100%",
            "0.01%",
            "50%"
          ],
          correctOptionIndex: 0,
          explanation: "A 10–15% interview rate indicates outstanding ATS keyword optimization and strong proof-of-ability portfolio projects.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q6",
          question: "When should you send a polite follow-up inquiry if you have not received any response after submitting an application?",
          options: [
            "7 to 10 business days after submitting the application",
            "2 hours after submitting",
            "6 months later",
            "Never follow up"
          ],
          correctOptionIndex: 0,
          explanation: "A 7 to 10-day window gives the talent team time to review while keeping your name top-of-mind.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q7",
          question: "How should an engineer psychologically interpret automated rejection emails?",
          options: [
            "As neutral statistical data points inherent to high-volume recruiting; immediately review the job description for missing keywords and move to the next target",
            "As proof that you are a failure",
            "By giving up on engineering entirely",
            "By sending an angry response email"
          ],
          correctOptionIndex: 0,
          explanation: "Rejection is part of the numbers game; resilience and relentless pipeline replenishment guarantee ultimate success.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q8",
          question: "Which platforms besides LinkedIn are primary sources for upstream oil and gas job postings?",
          options: [
            "Rigzone, Oil and Gas Job Search, SPE Job Board, and direct company career portals (Cairn, SLB, Baker Hughes, ONGC)",
            "Instagram and TikTok",
            "Craigslist",
            "Local newspaper classifieds"
          ],
          correctOptionIndex: 0,
          explanation: "Specialized energy boards (Rigzone, SPE) and direct corporate portals feature exclusive upstream technical openings.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q9",
          question: "What is the primary benefit of blocking a dedicated 'Power Hour' every morning for job applications?",
          options: [
            "It establishes an unbroken daily habit, ensures you apply to new job postings within the first 24 hours of release, and maintains high pipeline momentum",
            "It prevents you from drinking coffee",
            "It makes the computer run faster",
            "Companies only hire in the morning"
          ],
          correctOptionIndex: 0,
          explanation: "Applying within the first 24 hours puts your application at the top of the recruiter's inbox before hundreds of applicants flood in.",
          topic: "Job Search Strategy"
        },
        {
          id: "d85-q10",
          question: "How does having a live Job Tracker dashboard inside this website keep you accountable?",
          options: [
            "It visually tracks your daily application count, conversion percentages, active interviews, and upcoming follow-ups in a single view",
            "It posts your data on social media",
            "It locks your screen if you don't apply",
            "It has no purpose"
          ],
          correctOptionIndex: 0,
          explanation: "Visual pipeline metrics hold you accountable to your daily goals and celebrate incremental progress toward offers.",
          topic: "Job Search Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You model your 4-week Phase 3 application campaign pipeline:\n- Target daily application pace = 6 targeted applications / day\n- Working days per week = 5 days (30 applications / week)\n- Campaign duration = 4 weeks (120 total applications submitted)\n- Historical conversion rates for tailored applications with GitHub proof projects:\n  * Recruiter Phone Screen rate = 12.5% of applications\n  * Technical Interview rate = 50.0% of phone screens\n  * Final Round / Offer rate = 33.3% of technical interviews\nCalculate: 1) Total applications submitted across 4 weeks, 2) Expected number of Recruiter Phone Screens, 3) Expected number of Technical Interview rounds, and 4) Expected number of formal Job Offers.",
      givenValues: [
        { label: "Daily Applications", value: "6 apps / day" },
        { label: "Days per Week", value: "5 days" },
        { label: "Weeks", value: "4 weeks" },
        { label: "Screen Conversion", value: "12.5%" },
        { label: "Tech Interview Conversion", value: "50.0%" },
        { label: "Offer Conversion", value: "33.3%" }
      ],
      stepByStepSolution: [
        "Step 1: Total Applications = 6 * 5 * 4 = 120 applications submitted.",
        "Step 2: Expected Recruiter Phone Screens = 120 * 0.125 = 15.0 phone screens.",
        "Step 3: Expected Technical Interviews = 15.0 * 0.50 = 7.5 technical interview rounds.",
        "Step 4: Expected Job Offers = 7.5 * 0.3333 = 2.5 formal job offers!"
      ],
      finalAnswer: "Total Applications = 120 | Phone Screens = 15 | Technical Interviews = 7 to 8 | Expected Job Offers = 2 to 3 offers",
      engineeringSignificance: "This pipeline math proves mathematically why a disciplined 6-app/day pace works: it generates 15 recruiter screens, 7 to 8 deep technical interviews, and 2 to 3 competing job offers. You are not hoping for a job; you are engineering multiple competing offers."
    },
    interview: {
      durationMinutes: 15,
      question: "What is your current job search status, and are you actively interviewing with other companies?",
      sampleAnswer: "I answer with professional confidence: 'Yes, I am actively interviewing with two other upstream operators and service teams for production surveillance and reservoir analytics roles. However, I have been following your team's work in [Asset/Basin] very closely because your asset challenges directly match my technical expertise in decline curve forecasting and well log petrophysics. While I have active discussions underway, your company remains my top choice because of [Specific Company Project/Culture], and I am keen to see if there is a mutual fit.'",
      conceptCheck: "Communicate active market demand without arrogance; create healthy urgency while expressing genuine enthusiasm."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Set up your daily application routine: execute your first 6 applications today, log each one in the Job Tracker with company, role, resume version, and date, and craft tailored 150-word cover notes."
    },
    checklist: [
      { id: "d85-c1", text: "Established the daily 2.5-hour morning application Power Hour", completed: false },
      { id: "d85-c2", text: "Configured the Kanban job tracker pipeline stages", completed: false },
      { id: "d85-c3", text: "Mastered the 3-paragraph 150-word tailored cover note formula", completed: false },
      { id: "d85-c4", text: "Submitted and logged first 6 targeted applications today", completed: false },
      { id: "d85-c5", text: "Mapped the 120-application pipeline funnel to generate 2–3 offers", completed: false }
    ],
    confidenceRating: 0
  },

  // DAY 86
  {
    dayNumber: 86,
    phaseId: 3,
    weekNumber: 11,
    title: "Cold Outreach & Coffee Chat Scripts for Recruiters and Managers",
    category: "job_search_strategy",
    categoryLabel: "Job Search Strategy",
    todayGoal: "Master direct cold outreach to technical recruiters and engineering managers; copy and customize high-conversion message templates for LinkedIn and email.",
    estimatedTotalMinutes: 125,
    learn: {
      durationMinutes: 45,
      summary: "Submitting an application online and waiting passively is amateur job hunting. Top-performing engineers take control of their destiny by pairing every application with targeted, direct outreach to technical recruiters, HR talent partners, and engineering team leads. A well-crafted, respectful 4-sentence message that highlights your MIT Pune degree and includes a clickable link to your GitHub proof project gets your resume pulled straight out of the 300-person applicant pile onto the hiring manager's desk.",
      keyPoints: [
        "The Technical Recruiter Outreach Script (LinkedIn): 'Hi [Name], I noticed you lead technical talent acquisition for [Company]'s upstream team. I recently submitted an application for the [Job Title] role (Req #[ID]). As a Petroleum Engineer from MIT Pune with 1+ year of experience, I recently completed a 15-well production optimization and DCA case study on GitHub (+860 BOPD identified). I’d welcome the chance to briefly share how my subsurface and data skills align with your team. Best, [Your Name] | [GitHub Link]'.",
        "The Engineering Manager Outreach Script (Email / InMail): 'Dear [Name], I've been following your team's reservoir surveillance work in [Basin/Field]. As a Petroleum Engineer (B.Tech MIT Pune) specializing in decline curve analysis and well log petrophysics, I recently published an end-to-end evaluation of the North Sea Volve field (78 ft Net Pay, 10.85 MMSTB OOIP). I'd love to ask for your quick 10-minute perspective on technical challenges facing your assets. [GitHub Link] | [Your Name]'.",
        "The MIT Pune Alumni Warm Connection Script: 'Hi [Name], fellow MIT Pune Petroleum graduate here! I really admire your journey to [Company] as a [Current Title]. I've recently been working on digital production surveillance and petrophysics projects and would love to connect and hear your insights on the industry. Best regards, [Your Name]'.",
        "The 5-Day Polite Follow-Up Cadence: If no response after 5 business days, send a short 1-line reply to the same thread: 'Hi [Name], just following up briefly on my note below—would love to connect if you have a brief moment next week!' This single follow-up doubles response rates.",
        "Email Finding Tools: Use professional email permutation patterns (`firstname.lastname@company.com`) and tools like Hunter.io or Apollo to locate verified corporate email addresses."
      ],
      coreFormulas: [
        {
          name: "Direct Outreach Response Multiplier",
          formula: "Response_Rate = Base_Rate (3%) * Alumni_Connection (3x) * Proof_Project_Link (2.5x) = ~22.5%",
          explanation: "Combining alumni commonality and proof project links generates 7x higher responses."
        }
      ],
      fieldInsight: "Always include the specific Job Requisition Number (Req ID) when messaging recruiters! Recruiters manage 15 to 25 different job searches simultaneously across multiple departments. Telling them 'I applied for Req #12845: Junior Production Engineer in Barmer' saves them 10 minutes of searching and makes it effortless for them to open your file immediately."
    },
    watchOrRead: {
      type: "read",
      title: "The Muse / Fast Company: The Ultimate Guide to Cold Outreach and Informational Interviews",
      url: "https://www.themuse.com",
      platform: "Career Strategy Guides",
      durationMinutes: 20
    },
    practice: {
      durationMinutes: 30,
      passingScorePercent: 80,
      questions: [
        {
          id: "d86-q1",
          question: "Why should an engineer message a technical recruiter on LinkedIn immediately after submitting an online application?",
          options: [
            "It humanizes your application, separates you from the 300 faceless resumes in the ATS queue, and provides a direct link to your GitHub proof projects",
            "Because job boards disqualify you if you don't message within 5 minutes",
            "To demand an immediate salary offer",
            "To ask what the company does"
          ],
          correctOptionIndex: 0,
          explanation: "Direct outreach ensures a human recruiter actually opens and audits your profile rather than leaving it buried in software filters.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q2",
          question: "What critical piece of information should always be included when messaging a recruiter about an open position?",
          options: [
            "The specific Job Title and Requisition Number (Req ID)",
            "Your high school grades",
            "A photo of your pet",
            "The weather in your city"
          ],
          correctOptionIndex: 0,
          explanation: "Recruiters manage dozens of requisitions; providing the Req ID allows them to locate your application in 5 seconds.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q3",
          question: "What is the recommended response if a recruiter or manager does not reply to your first LinkedIn message after 5 business days?",
          options: [
            "Send a polite, 1-sentence follow-up reply to the same thread asking if they have a brief moment next week",
            "Send 50 angry messages",
            "Report their profile to LinkedIn",
            "Never message anyone again"
          ],
          correctOptionIndex: 0,
          explanation: "A brief, respectful follow-up brings your message back to the top of their busy inbox, frequently doubling response rates.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q4",
          question: "Why is reaching out to an Engineering Team Lead / Manager often more effective than messaging generic HR recruiters?",
          options: [
            "Engineering managers directly feel the pain of understaffed teams, understand the technical depth of your GitHub projects, and have the authority to request immediate interviews",
            "Managers have nothing else to do",
            "HR recruiters do not have computers",
            "Managers are required to interview everyone who messages them"
          ],
          correctOptionIndex: 0,
          explanation: "Engineering managers appreciate technical rigor (Arps DCA, Archie Sw) and can instruct HR to schedule an interview immediately.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q5",
          question: "What makes the MIT Pune petroleum alumni connection so powerful in outreach messages?",
          options: [
            "Shared university heritage creates instant psychological commonality, trust, and willingness to help a fellow junior alumnus",
            "MIT Pune requires alumni to hire graduates by law",
            "Alumni get a bonus for every graduate they speak with",
            "There are only 3 alumni in the world"
          ],
          correctOptionIndex: 0,
          explanation: "Alumni networks are built on mutual pride; graduates naturally advocate for qualified juniors from their own alma mater.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q6",
          question: "What is the ideal length for a cold LinkedIn InMail or message to a busy engineering manager?",
          options: [
            "4 to 5 concise sentences (under 100 words) with clear technical relevance and a frictionless call to action",
            "1,500 words with full attachments",
            "A single word 'Hi'",
            "A 30-minute voice recording"
          ],
          correctOptionIndex: 0,
          explanation: "Short, respectful messages respect the recipient's time and are much more likely to be read on a mobile screen.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q7",
          question: "How should you include your GitHub project link in an outreach message?",
          options: [
            "Naturally embedded alongside a quantified result: e.g. 'I recently published a 15-well DCA and workover optimization case study (+860 BOPD identified): [github.com/link]'",
            "Pasted 10 times consecutively",
            "As an encrypted QR code",
            "As a hidden bit.ly link with no explanation"
          ],
          correctOptionIndex: 0,
          explanation: "Pairing the link with a concrete quantitative result entices the recipient to click and inspect your work.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q8",
          question: "What standard email format do most upstream corporate organizations follow?",
          options: [
            "`firstname.lastname@company.com` (or `firstinitiallastname@company.com`)",
            "`user12345@gmail.com`",
            "`oilman@yahoo.com`",
            "`company_employee@hotmail.com`"
          ],
          correctOptionIndex: 0,
          explanation: "Corporate IT systems universally follow standardized first.last or firstinitial.last naming patterns.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q9",
          question: "What should you do if an engineering manager replies: 'We don't have open headcount right now, but good luck'?",
          options: [
            "Thank them warmly, ask if you can stay connected on LinkedIn, and ask if they would recommend another team or contact in their network",
            "Argue with them about their budget",
            "Delete them",
            "Insult their company"
          ],
          correctOptionIndex: 0,
          explanation: "Gracious responses build lasting relationships; heads open up months later, and managers frequently refer polite candidates elsewhere.",
          topic: "Job Search Strategy"
        },
        {
          id: "d86-q10",
          question: "What is the goal of cold outreach: getting hired on the spot, or securing a 15-minute conversation?",
          options: [
            "Securing a 15-minute introductory phone call or recruiter screen where you can showcase your technical depth",
            "Getting hired on the spot with no interview",
            "Asking for money",
            "Selling software"
          ],
          correctOptionIndex: 0,
          explanation: "Nobody hires directly from a LinkedIn message; the sole objective is securing a 15-minute conversation to enter the interview process.",
          topic: "Job Search Strategy"
        }
      ]
    },
    calculation: {
      durationMinutes: 15,
      problemStatement: "You conduct a 5-day cold outreach experiment sending tailored LinkedIn messages to recruiters and engineering managers:\n- Outreach batch size = 50 messages sent (10 per day over 5 business days)\n- Initial replies received within 5 days = 8 replies (16.0% response)\n- On Day 6, you send a polite 1-sentence follow-up to the 42 non-responders\n- Additional replies received from follow-up = 6 additional replies\n- Total replies across both waves = 8 + 6 = 14 replies\n- Phone calls / screening interviews scheduled from replies = 5 interviews\nCalculate: 1) Initial Response Rate (%), 2) Follow-up Response Rate on non-responders (%), 3) Total Cumulative Response Rate (%), 4) Percentage increase in total replies gained by sending the simple 1-sentence follow-up, and 5) Conversion rate from replies to scheduled phone screens (%).",
      givenValues: [
        { label: "Total Messages Sent", value: "50 messages" },
        { label: "Initial Replies", value: "8 replies" },
        { label: "Follow-up Replies", value: "6 replies" },
        { label: "Scheduled Interviews", value: "5 interviews" }
      ],
      stepByStepSolution: [
        "Step 1: Initial Response Rate = (8 / 50) * 100 = 16.00%.",
        "Step 2: Follow-up Response Rate = (6 / 42) * 100 = 14.29% of non-responders.",
        "Step 3: Total Cumulative Response Rate = (14 / 50) * 100 = 28.00% (Over 1 in 4 people replied!).",
        "Step 4: Percentage Increase in Replies = (6 / 8) * 100 = 75.00% more replies gained purely by following up!",
        "Step 5: Reply-to-Interview Conversion = (5 / 14) * 100 = 35.71%."
      ],
      finalAnswer: "Initial Response = 16.0% | Follow-up Boost = +75% more replies | Cumulative Response = 28.0% | Scheduled Screens = 5 (35.7% conversion)",
      engineeringSignificance: "This test proves that a polite 1-sentence follow-up boosted total replies by 75%, generating 5 formal recruiter screening calls from just 50 messages. Outreach combined with follow-up is the ultimate career accelerator."
    },
    interview: {
      durationMinutes: 15,
      question: "How do you introduce yourself at the start of a cold recruiter phone screen after they reached out from your LinkedIn message?",
      sampleAnswer: "I lead with energy and structured clarity: 'Thank you so much for setting up this call, [Name]. To give you a quick 60-second snapshot: I am a Petroleum Engineer with a B.Tech from MIT Pune and approximately 1 year of upstream operational experience. My focus is on production optimization, decline curve analysis, and wireline petrophysics. Recently, I completed two comprehensive subsurface projects published on GitHub: a 15-well production case study where I modeled Arps decline curves and diagnosed water channeling to unlock 860 BOPD; and an open-hole petrophysical evaluation of the North Sea Volve field calculating Archie water saturation and 10.85 MMSTB of OOIP. I combine solid rock-fluid physics with modern Python and Excel data automation, and I saw that your team is actively tackling surveillance on [Specific Asset]. I’m very excited to learn more about your current priorities and discuss how my skills can contribute.'",
      conceptCheck: "Deliver a polished 60-second elevator pitch: degree, experience, proof projects, data literacy, and direct relevance to their team."
    },
    career: {
      durationMinutes: 20,
      actionItem: "Copy the 3 outreach templates into your notes: Recruiter Template, Engineering Manager Template, and MIT Pune Alumni Template. Send 5 direct outreach messages today to recruiters and managers at companies where you applied."
    },
    checklist: [
      { id: "d86-c1", text: "Mastered the 4-sentence LinkedIn recruiter outreach template with Req ID", completed: false },
      { id: "d86-c2", text: "Mastered the Engineering Manager outreach script with GitHub link", completed: false },
      { id: "d86-c3", text: "Mastered the warm MIT Pune alumni informational interview script", completed: false },
      { id: "d86-c4", text: "Implemented the 5-day polite 1-sentence follow-up cadence (+75% boost)", completed: false },
      { id: "d86-c5", text: "Sent 5 targeted outreach messages to accompany today's applications", completed: false }
    ],
    confidenceRating: 0
  }
];
