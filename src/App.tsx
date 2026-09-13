import React, { useState } from 'react';
import { CareerProvider } from './context/CareerContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { DayDetailView } from './components/views/DayDetailView';
import { RoadmapView } from './components/views/RoadmapView';
import { RevisionHubView } from './components/views/RevisionHubView';
import { ProjectOneView } from './components/views/ProjectOneView';
import { ProjectTwoView } from './components/views/ProjectTwoView';
import { JobTrackerView } from './components/views/JobTrackerView';
import { ResumeStudioView } from './components/views/ResumeStudioView';
import { CalculatorsView } from './components/views/CalculatorsView';
import { InterviewBootcampView } from './components/views/InterviewBootcampView';
import { FinalAssessmentView } from './components/views/FinalAssessmentView';

const MainLayout: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Top Navbar */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {/* Main Body with Sidebar + Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Navigation */}
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
        />

        {/* Dynamic Scrollable Content Panel */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          {activeView === 'dashboard' && (
            <DashboardView setActiveView={setActiveView} />
          )}

          {activeView === 'day-view' && (
            <DayDetailView setActiveView={setActiveView} />
          )}

          {activeView === 'roadmap' && (
            <RoadmapView setActiveView={setActiveView} />
          )}

          {activeView === 'revision-hub' && (
            <RevisionHubView setActiveView={setActiveView} />
          )}

          {activeView === 'project-1' && (
            <ProjectOneView setActiveView={setActiveView} />
          )}

          {activeView === 'project-2' && (
            <ProjectTwoView setActiveView={setActiveView} />
          )}

          {activeView === 'job-tracker' && (
            <JobTrackerView setActiveView={setActiveView} />
          )}

          {activeView === 'resume-studio' && (
            <ResumeStudioView setActiveView={setActiveView} />
          )}

          {activeView === 'calculators' && (
            <CalculatorsView setActiveView={setActiveView} />
          )}

          {activeView === 'interview-bootcamp' && (
            <InterviewBootcampView setActiveView={setActiveView} />
          )}

          {activeView === 'final-assessment' && (
            <FinalAssessmentView setActiveView={setActiveView} />
          )}
        </main>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CareerProvider>
      <MainLayout />
    </CareerProvider>
  );
};

export default App;
