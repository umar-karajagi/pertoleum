import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  Plus, 
  Search, 
  ExternalLink, 
  Trash2, 
  MapPin, 
  X
} from 'lucide-react';
import { useCareer } from '../../context/CareerContext';
import { JobApplication } from '../../types';

interface JobTrackerViewProps {
  setActiveView?: (view: string) => void;
}

export const JobTrackerView: React.FC<JobTrackerViewProps> = () => {
  const { 
    jobApplications, 
    addJobApplication, 
    updateJobApplication, 
    deleteJobApplication 
  } = useCareer();

  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Application Form State
  const [newApp, setNewApp] = useState<{
    company: string;
    roleTitle: string;
    tier: string;
    location: string;
    portalUrl: string;
    resumeVersion: 'A' | 'B';
    status: JobApplication['status'];
    dateApplied: string;
    followUpDate: string;
    notes: string;
  }>({
    company: '',
    roleTitle: 'Production / Reservoir Surveillance Engineer',
    tier: 'Tier 1: Domestic Operator',
    location: 'Mumbai / Pune / Delhi NCR',
    portalUrl: '',
    resumeVersion: 'A',
    status: 'wishlist',
    dateApplied: new Date().toISOString().split('T')[0],
    followUpDate: '',
    notes: ''
  });

  const columns: { id: JobApplication['status']; label: string; color: string; bg: string }[] = [
    { id: 'wishlist', label: 'Wishlist & Target', color: 'text-slate-400', bg: 'border-slate-800' },
    { id: 'outreach_sent', label: 'Outreach Sent', color: 'text-sky-400', bg: 'border-sky-500/30' },
    { id: 'applied', label: 'Applied', color: 'text-amber-400', bg: 'border-amber-500/30' },
    { id: 'screening', label: 'Screening / HR', color: 'text-purple-400', bg: 'border-purple-500/30' },
    { id: 'technical', label: 'Technical Rounds', color: 'text-emerald-400', bg: 'border-emerald-500/30' },
    { id: 'offer', label: 'Offer Received', color: 'text-crude-gold', bg: 'border-amber-400/40' }
  ];

  const filteredApps = useMemo(() => {
    return jobApplications.filter(app => {
      const role = app.roleTitle || app.role || '';
      const tier = app.tier || '';
      const matchesSearch = 
        app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTier = tierFilter === 'all' || tier.toLowerCase().includes(tierFilter.toLowerCase());

      return matchesSearch && matchesTier;
    });
  }, [jobApplications, searchTerm, tierFilter]);

  const handleCreateApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApp.company.trim()) return;

    addJobApplication({
      company: newApp.company,
      roleTitle: newApp.roleTitle,
      tier: newApp.tier,
      location: newApp.location,
      portalUrl: newApp.portalUrl || 'https://www.linkedin.com/jobs',
      resumeVersion: newApp.resumeVersion,
      status: newApp.status,
      dateApplied: newApp.status !== 'wishlist' ? newApp.dateApplied : '',
      followUpDate: newApp.followUpDate,
      notes: newApp.notes
    });

    setIsAddModalOpen(false);
    setNewApp({
      company: '',
      roleTitle: 'Production / Reservoir Surveillance Engineer',
      tier: 'Tier 1: Domestic Operator',
      location: 'Mumbai / Pune / Delhi NCR',
      portalUrl: '',
      resumeVersion: 'A',
      status: 'wishlist',
      dateApplied: new Date().toISOString().split('T')[0],
      followUpDate: '',
      notes: ''
    });
  };

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Phase 3 Career Pipeline Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Job Application & Outreach Command Center
            </h1>
            <p className="text-sm text-slate-400 max-w-3xl pt-1">
              Track targets across Domestic Operators, Service Tech Hubs, and Middle East brownfields. Every application is tied to either Resume A (Core Operations) or Resume B (Subsurface Analytics).
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Target Application</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2 border-t border-slate-800">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-slate-500 font-mono uppercase block">Total Tracked</span>
            <span className="text-xl font-bold text-white font-mono">{jobApplications.length}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-sky-400 font-mono uppercase block">Outreach Sent</span>
            <span className="text-xl font-bold text-sky-400 font-mono">
              {jobApplications.filter(a => a.status === 'outreach_sent').length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-amber-400 font-mono uppercase block">Active Applied</span>
            <span className="text-xl font-bold text-amber-400 font-mono">
              {jobApplications.filter(a => a.status === 'applied').length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-purple-400 font-mono uppercase block">Screening</span>
            <span className="text-xl font-bold text-purple-400 font-mono">
              {jobApplications.filter(a => a.status === 'screening').length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-emerald-400 font-mono uppercase block">Technical Rounds</span>
            <span className="text-xl font-bold text-emerald-400 font-mono">
              {jobApplications.filter(a => a.status === 'technical').length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] text-amber-300 font-mono uppercase block">Target Offers</span>
            <span className="text-xl font-bold text-amber-300 font-mono">
              {jobApplications.filter(a => a.status === 'offer').length}
            </span>
          </div>
        </div>
      </div>

      {/* Control Bar: Search, Filter, & Kanban/Table Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center space-x-3 flex-1 min-w-[280px]">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search company, title, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Tiers</option>
            <option value="Tier 1">Tier 1: Domestic Operators</option>
            <option value="Tier 2">Tier 2: Global Service Tech Hubs</option>
            <option value="Tier 3">Tier 3: Middle East Operators</option>
          </select>
        </div>

        <div className="flex items-center space-x-2 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setViewMode('kanban')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              viewMode === 'kanban' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Kanban Board
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              viewMode === 'table' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Table View
          </button>
        </div>
      </div>

      {/* KANBAN BOARD VIEW */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-start">
          {columns.map((col) => {
            const colApps = filteredApps.filter(a => a.status === col.id);

            return (
              <div 
                key={col.id} 
                className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-3 min-h-[400px]"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className={`text-xs font-bold ${col.color}`}>
                    {col.label}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono font-bold">
                    {colApps.length}
                  </span>
                </div>

                {/* Cards List */}
                <div className="space-y-3">
                  {colApps.map((app) => (
                    <div 
                      key={app.id}
                      className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-xl p-3 space-y-2.5 transition-all shadow-sm group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                          {app.company}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold shrink-0 ${
                          app.resumeVersion === 'A' 
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                            : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                        }`}>
                          Resume {app.resumeVersion}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-300 font-medium">
                        {app.roleTitle}
                      </div>

                      <div className="flex items-center text-[10px] text-slate-500 space-x-2">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{app.location}</span>
                      </div>

                      {app.notes && (
                        <p className="text-[11px] text-slate-400 bg-slate-900/80 p-2 rounded border border-slate-800/80 leading-relaxed">
                          {app.notes}
                        </p>
                      )}

                      {/* Status Selector & Actions */}
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-1">
                        <select
                          value={app.status}
                          onChange={(e) => updateJobApplication(app.id, { status: e.target.value as JobApplication['status'] })}
                          className="bg-slate-900 border border-slate-800 rounded px-2 py-1 text-[10px] text-slate-300 focus:outline-none focus:border-amber-500"
                        >
                          <option value="wishlist">Wishlist</option>
                          <option value="outreach_sent">Outreach</option>
                          <option value="applied">Applied</option>
                          <option value="screening">Screening</option>
                          <option value="technical">Technical</option>
                          <option value="offer">Offer</option>
                        </select>

                        <div className="flex items-center space-x-1">
                          {app.portalUrl && (
                            <a
                              href={app.portalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded text-slate-400 hover:text-amber-400 transition-colors"
                              title="Career Portal"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <button
                            onClick={() => deleteJobApplication(app.id)}
                            className="p-1 rounded text-slate-500 hover:text-rose-400 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))}

                  {colApps.length === 0 && (
                    <div className="py-8 text-center text-[11px] text-slate-600 font-mono">
                      No applications in this stage
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono bg-slate-950/60">
                  <th className="py-3.5 px-4">Company</th>
                  <th className="py-3.5 px-4">Role Title</th>
                  <th className="py-3.5 px-4">Tier & Location</th>
                  <th className="py-3.5 px-4">Resume</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Applied Date</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-800/40 transition-colors text-slate-300">
                    <td className="py-3 px-4 font-bold text-white font-mono">
                      {app.company}
                    </td>
                    <td className="py-3 px-4 font-medium">
                      {app.roleTitle}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      <div>{app.tier}</div>
                      <div className="text-[10px] text-slate-500">{app.location}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        app.resumeVersion === 'A' 
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                          : 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                      }`}>
                        Resume {app.resumeVersion}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <select
                        value={app.status}
                        onChange={(e) => updateJobApplication(app.id, { status: e.target.value as JobApplication['status'] })}
                        className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="wishlist">Wishlist</option>
                        <option value="outreach_sent">Outreach Sent</option>
                        <option value="applied">Applied</option>
                        <option value="screening">Screening</option>
                        <option value="technical">Technical Rounds</option>
                        <option value="offer">Offer</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-400">
                      {app.dateApplied || '—'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {app.portalUrl && (
                          <a
                            href={app.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded text-slate-400 hover:text-amber-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => deleteJobApplication(app.id)}
                          className="p-1.5 rounded text-slate-500 hover:text-rose-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Target Application Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 space-y-5 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-bold text-white flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Add Target Job Application</span>
              </h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateApplication} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cairn, SLB, Baker Hughes"
                    value={newApp.company}
                    onChange={(e) => setNewApp({ ...newApp, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Target Role</label>
                  <input
                    type="text"
                    required
                    value={newApp.roleTitle}
                    onChange={(e) => setNewApp({ ...newApp, roleTitle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Company Tier</label>
                  <select
                    value={newApp.tier}
                    onChange={(e) => setNewApp({ ...newApp, tier: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Tier 1: Domestic Operator">Tier 1: Domestic Operator</option>
                    <option value="Tier 2: Global Service Technology Hub">Tier 2: Global Service Tech Hub</option>
                    <option value="Tier 3: Middle East Operator">Tier 3: Middle East Operator</option>
                    <option value="Tier 4: International Major">Tier 4: International Major</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Location</label>
                  <input
                    type="text"
                    value={newApp.location}
                    onChange={(e) => setNewApp({ ...newApp, location: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Resume Version</label>
                  <select
                    value={newApp.resumeVersion}
                    onChange={(e) => setNewApp({ ...newApp, resumeVersion: e.target.value as 'A' | 'B' })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
                  >
                    <option value="A">Resume A: Core Petroleum Operations</option>
                    <option value="B">Resume B: Subsurface Data Analytics</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 font-semibold block">Initial Status</label>
                  <select
                    value={newApp.status}
                    onChange={(e) => setNewApp({ ...newApp, status: e.target.value as JobApplication['status'] })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="wishlist">Wishlist</option>
                    <option value="outreach_sent">Outreach Sent</option>
                    <option value="applied">Applied</option>
                    <option value="screening">Screening</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 font-semibold block">Career Portal / Job URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newApp.portalUrl}
                  onChange={(e) => setNewApp({ ...newApp, portalUrl: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400 font-semibold block">Outreach Notes / Strategy</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Alumnus from MIT Pune reached out on LinkedIn..."
                  value={newApp.notes}
                  onChange={(e) => setNewApp({ ...newApp, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
                >
                  Save Target
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
