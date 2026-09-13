import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Globe, 
  Send, 
  ExternalLink
} from 'lucide-react';
import { 
  RESUME_A_CORE, 
  RESUME_B_ANALYTICS, 
  LINKEDIN_PROFILE_DATA, 
  OUTREACH_SCRIPTS,
  ResumeData
} from '../../data/resumeTemplates';

interface ResumeStudioViewProps {
  setActiveView?: (view: string) => void;
}

export const ResumeStudioView: React.FC<ResumeStudioViewProps> = () => {
  const [activeTab, setActiveTab] = useState<'resume-a' | 'resume-b' | 'linkedin' | 'outreach'>('resume-a');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const renderResumeMarkdown = (data: ResumeData) => {
    return `# ${data.name}
${data.tagline}

## TARGET ROLE
${data.targetRole}

## PROFESSIONAL SUMMARY
${data.professionalSummary}

## TECHNICAL SKILLS
${data.technicalSkills.map(s => `- **${s.category}**: ${s.skills.join(', ')}`).join('\n')}

## PROFESSIONAL EXPERIENCE
${data.experience.map(e => `### ${e.title} | ${e.company} (${e.dates}) - ${e.location}
${e.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}

## TECHNICAL PROJECTS (PROOF OF ABILITY)
${data.projects.map(p => `### ${p.title}
Role: ${p.role} | GitHub: ${p.githubLink}
${p.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}

## EDUCATION
### ${data.education.degree} - ${data.education.institution} (${data.education.graduationYear})
${data.education.details}
`;
  };

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Phase 3 Placement Weapons</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dual-Track Resume Studio & Networking Hub
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl pt-1">
              Deploy <strong className="text-amber-400">Resume A</strong> for domestic operators (Cairn, ONGC, Reliance) and <strong className="text-teal-400">Resume B</strong> for global digital analytics hubs (SLB, Baker Hughes, Halliburton).
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => setActiveTab('resume-a')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'resume-a'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Resume A: Core Operations & Surveillance</span>
          </button>

          <button
            onClick={() => setActiveTab('resume-b')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'resume-b'
                ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Resume B: Subsurface Analytics & Petrophysics</span>
          </button>

          <button
            onClick={() => setActiveTab('linkedin')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'linkedin'
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>LinkedIn Optimization</span>
          </button>

          <button
            onClick={() => setActiveTab('outreach')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'outreach'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Alumni & Recruiter Cold Outreach</span>
          </button>
        </div>
      </div>

      {/* RESUME A VIEW */}
      {activeTab === 'resume-a' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Targeting: Domestic Operators & Drilling/Production Services
              </span>
              <p className="text-xs text-slate-400">
                Tailored for Cairn Oil & Gas, ONGC, Reliance Industries, Vedanta, Halliburton Production Solutions.
              </p>
            </div>
            <button
              onClick={() => handleCopy('resume-a', renderResumeMarkdown(RESUME_A_CORE))}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
            >
              {copiedId === 'resume-a' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedId === 'resume-a' ? 'Copied Full Resume!' : 'Copy Full Markdown'}</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 text-slate-200">
            <div className="text-center space-y-2 border-b border-slate-800 pb-6">
              <h2 className="text-2xl font-black text-white tracking-wide">
                PETROLEUM ENGINEER (CORE OPERATIONS)
              </h2>
              <p className="text-xs text-amber-400 font-mono font-medium">
                {RESUME_A_CORE.tagline}
              </p>
              <p className="text-xs text-slate-400">
                Target Role: <span className="text-slate-200 font-semibold">{RESUME_A_CORE.targetRole}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Professional Summary
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {RESUME_A_CORE.professionalSummary}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Technical Skills & Operational Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {RESUME_A_CORE.technicalSkills.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-amber-300 font-semibold block">{cat.category}</span>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Professional Experience
              </h3>
              {RESUME_A_CORE.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.title}</span>
                      <span className="text-slate-400"> • {exp.company} ({exp.location})</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.dates}</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Proof of Ability Engineering Projects
              </h3>
              {RESUME_A_CORE.projects.map((proj, idx) => (
                <div key={idx} className="space-y-2 text-xs p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{proj.title}</span>
                      <span className="text-amber-400 text-xs block font-mono">{proj.role}</span>
                    </div>
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 flex items-center space-x-1 font-mono text-[11px]"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-1">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">{RESUME_A_CORE.education.degree}</span>
                  <p className="text-slate-400">{RESUME_A_CORE.education.institution} ({RESUME_A_CORE.education.location})</p>
                  <p className="text-slate-400 text-[11px] pt-0.5">{RESUME_A_CORE.education.details}</p>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{RESUME_A_CORE.education.graduationYear}</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* RESUME B VIEW */}
      {activeTab === 'resume-b' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono">
                Targeting: Global Technology Hubs & Digital Subsurface Analytics
              </span>
              <p className="text-xs text-slate-400">
                Tailored for SLB Pune Center, Baker Hughes Digital, Halliburton Landmark, ADNOC Digital Subsurface.
              </p>
            </div>
            <button
              onClick={() => handleCopy('resume-b', renderResumeMarkdown(RESUME_B_ANALYTICS))}
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all flex items-center space-x-2 shadow-sm"
            >
              {copiedId === 'resume-b' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedId === 'resume-b' ? 'Copied Full Resume!' : 'Copy Full Markdown'}</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8 text-slate-200">
            <div className="text-center space-y-2 border-b border-slate-800 pb-6">
              <h2 className="text-2xl font-black text-white tracking-wide">
                PETROLEUM DATA & SUBSURFACE ANALYST
              </h2>
              <p className="text-xs text-teal-400 font-mono font-medium">
                {RESUME_B_ANALYTICS.tagline}
              </p>
              <p className="text-xs text-slate-400">
                Target Role: <span className="text-slate-200 font-semibold">{RESUME_B_ANALYTICS.targetRole}</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Professional Summary
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                {RESUME_B_ANALYTICS.professionalSummary}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Data Science & Petrophysical Toolkit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {RESUME_B_ANALYTICS.technicalSkills.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-teal-300 font-semibold block">{cat.category}</span>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Professional Experience (Analytics Track)
              </h3>
              {RESUME_B_ANALYTICS.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.title}</span>
                      <span className="text-slate-400"> • {exp.company} ({exp.location})</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">{exp.dates}</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Quantitative Subsurface Projects
              </h3>
              {RESUME_B_ANALYTICS.projects.map((proj, idx) => (
                <div key={idx} className="space-y-2 text-xs p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-white text-sm">{proj.title}</span>
                      <span className="text-teal-400 text-xs block font-mono">{proj.role}</span>
                    </div>
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 flex items-center space-x-1 font-mono text-[11px]"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-1">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-xs">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-1">
                Education
              </h3>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">{RESUME_B_ANALYTICS.education.degree}</span>
                  <p className="text-slate-400">{RESUME_B_ANALYTICS.education.institution} ({RESUME_B_ANALYTICS.education.location})</p>
                  <p className="text-slate-400 text-[11px] pt-0.5">{RESUME_B_ANALYTICS.education.details}</p>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{RESUME_B_ANALYTICS.education.graduationYear}</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* LINKEDIN OPTIMIZATION VIEW */}
      {activeTab === 'linkedin' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">LinkedIn Profile Transformation</h2>
                <p className="text-xs text-slate-400">
                  Optimized for algorithmic recruiter search indexing across India, Middle East, and Europe.
                </p>
              </div>
            </div>

            {/* Headline Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 font-mono uppercase">
                  Primary Headline Formula
                </span>
                <button
                  onClick={() => handleCopy('headline-formula', LINKEDIN_PROFILE_DATA.headlineFormula)}
                  className="text-xs text-slate-400 hover:text-sky-400 flex items-center space-x-1"
                >
                  {copiedId === 'headline-formula' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'headline-formula' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-white">
                {LINKEDIN_PROFILE_DATA.headlineFormula}
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 font-mono uppercase">
                  Complete 'About' Section
                </span>
                <button
                  onClick={() => handleCopy('about-section', LINKEDIN_PROFILE_DATA.aboutText)}
                  className="text-xs text-slate-400 hover:text-sky-400 flex items-center space-x-1"
                >
                  {copiedId === 'about-section' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'about-section' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                {LINKEDIN_PROFILE_DATA.aboutText}
              </div>
            </div>

            {/* Featured Checklist */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-sky-400 font-mono uppercase block">
                Recommended 'Featured' Section Action Checklist
              </span>
              <div className="space-y-2 text-xs">
                {LINKEDIN_PROFILE_DATA.featuredSectionChecklist.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center space-x-2 text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* COLD OUTREACH TEMPLATES VIEW */}
      {activeTab === 'outreach' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Cold Outreach & Alumni Networking Scripts</h2>
                <p className="text-xs text-slate-400">
                  Proven cold outreach templates with high response rates. Replace bracketed text before sending.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {OUTREACH_SCRIPTS.map((tmpl, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-sm font-bold text-white block">{tmpl.targetAudience}</span>
                      <span className="text-[11px] text-purple-400 font-mono">{tmpl.platform} • {tmpl.subject}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(`script-${idx}`, tmpl.body)}
                      className="px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-white text-xs font-bold transition-all flex items-center space-x-1.5"
                    >
                      {copiedId === `script-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === `script-${idx}` ? 'Copied Script!' : 'Copy Script'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed">
                    {tmpl.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
