import React, { useState, useMemo } from 'react';
import { Search, Filter, Briefcase, MapPin, Sparkles, UserPlus, Info, CheckCircle2 } from 'lucide-react';
import { JobListing, PageRoute } from '../types';
import { SAMPLE_JOBS } from '../data/constants';
import { JobCard, JobDetailsModal } from '../components/JobCard';
import { SectionHeading } from '../components/SectionHeading';
import { EducatorApplicationWizard } from '../components/EducatorApplicationWizard';

interface JobsPageProps {
  onNavigate: (page: PageRoute) => void;
  onApplyForJob: (jobTitle: string) => void;
}

export const JobsPage: React.FC<JobsPageProps> = ({ onNavigate, onApplyForJob }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleType, setSelectedRoleType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('All');
  const [activeModalJob, setActiveModalJob] = useState<JobListing | null>(null);

  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchesSearch =
        searchQuery === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.employer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole =
        selectedRoleType === 'All' || job.roleType.toLowerCase().includes(selectedRoleType.toLowerCase());

      const matchesLocation =
        selectedLocation === 'All' || job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesLevel =
        selectedEducationLevel === 'All' || job.educationLevel.toLowerCase().includes(selectedEducationLevel.toLowerCase());

      return matchesSearch && matchesRole && matchesLocation && matchesLevel;
    });
  }, [searchQuery, selectedRoleType, selectedLocation, selectedEducationLevel]);

  const handleApplyClick = (job: JobListing) => {
    onApplyForJob(job.title);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8F7F3]">
      {/* Top Banner */}
      <section className="bg-[#102A43] text-white py-14 md:py-18 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2463A7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Education Vacancy Board
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Find Your Next Education Role.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Browse verified vacancies across primary schools, high schools, Cambridge syllabus colleges, and institutional leadership roles.
          </p>

          {/* Search bar inside hero */}
          <div className="mt-8 max-w-3xl mx-auto bg-white p-2.5 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-2 border border-[#D9E2EC]">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#627D98] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by subject, title (e.g. Mathematics, Cambridge, Primary)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#102A43] placeholder-slate-400 bg-transparent focus:outline-hidden"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#627D98] hover:text-[#102A43] px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => {}}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#102A43] hover:bg-[#1E3A56] text-white font-bold text-xs rounded-xl transition-colors shrink-0"
            >
              Filter Roles
            </button>
          </div>
        </div>
      </section>

      {/* Main Board Container */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Disclaimer Notice */}
          <div className="bg-[#EEF4F8] rounded-xl p-4 sm:p-5 border border-[#D9E2EC] mb-8 flex items-start gap-3 text-xs text-[#1F2933]">
            <Info className="w-4 h-4 text-[#2463A7] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-[#102A43] block">
                Ethical Disclosure & Growing Vacancy Roster:
              </span>
              <p className="text-[#627D98] leading-relaxed">
                As Bright Start builds partner mandates for the upcoming academic terms, sample vacancy profiles are displayed below alongside verified live requisitions. To be immediately matched as new school requisitions open, register your profile via our <strong>Educator Network Portal</strong>.
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-white rounded-xl p-4 border border-[#D9E2EC] mb-8 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Category selector */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#102A43] mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-[#2463A7]" />
                  Category:
                </span>
                {['All', 'Teaching', 'Early Childhood', 'STEM', 'Leadership', 'Support'].map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRoleType(role)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                      selectedRoleType === role
                        ? 'bg-[#102A43] text-white'
                        : 'bg-[#F8F7F3] text-[#627D98] hover:text-[#102A43] border border-[#D9E2EC]'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              {/* Location selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[#102A43]">Location:</span>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-2.5 py-1 text-xs bg-[#F8F7F3] border border-[#D9E2EC] rounded-lg text-[#1F2933] focus:outline-hidden"
                >
                  <option value="All">All Locations</option>
                  <option value="Harare">Harare</option>
                  <option value="Bulawayo">Bulawayo</option>
                  <option value="Mutare">Mutare</option>
                  <option value="Midlands">Midlands</option>
                  <option value="Regional">Regional / Boarding</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onApply={handleApplyClick}
                  onViewDetails={(j) => setActiveModalJob(j)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#D9E2EC] max-w-lg mx-auto">
              <Briefcase className="w-12 h-12 text-[#627D98] mx-auto mb-4" />
              <h3 className="text-base font-bold text-[#102A43] mb-2">No matching positions found</h3>
              <p className="text-xs text-[#627D98] mb-6">
                Try clearing your search query or adjusting your filters to see all available roles.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRoleType('All');
                  setSelectedLocation('All');
                  setSelectedEducationLevel('All');
                }}
                className="px-4 py-2 bg-[#102A43] text-white text-xs font-bold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Spontaneous Registration Box */}
          <div className="mt-16 bg-[#102A43] text-white rounded-2xl p-8 sm:p-10 border border-[#1E3A56] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left max-w-xl">
              <span className="text-xs font-bold text-[#F4B942] uppercase tracking-wider block">
                Can't find your specific subject or grade level?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Submit your CV for unadvertised and confidential school mandates.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Many partner schools prefer confidential matching rather than public listings. Join our candidate roster today.
              </p>
            </div>
            <button
              onClick={() => onNavigate('apply')}
              className="px-6 py-3.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4 text-[#102A43]" />
              <span>Submit General Application</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <JobDetailsModal
        job={activeModalJob}
        onClose={() => setActiveModalJob(null)}
        onApply={handleApplyClick}
      />
    </div>
  );
};
