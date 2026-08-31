import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  School, 
  Binary, 
  Users, 
  Briefcase, 
  Award, 
  Compass, 
  FileText, 
  Heart, 
  Layers,
  ChevronRight,
  Search
} from 'lucide-react';
import { ROLES_CATEGORIES } from '../data/constants';
import { PageRoute } from '../types';

interface RolesGridProps {
  onNavigate: (page: PageRoute) => void;
}

export const RolesGrid: React.FC<RolesGridProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Teaching' | 'Leadership' | 'Support' | 'Specialist'>('All');
  const [selectedRole, setSelectedRole] = useState<typeof ROLES_CATEGORIES[0] | null>(null);

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#2463A7]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#F4B942]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#2463A7]" />;
      case 'School': return <School className="w-5 h-5 text-[#2463A7]" />;
      case 'Binary': return <Binary className="w-5 h-5 text-[#3D8061]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#2463A7]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#102A43]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#F4B942]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#2463A7]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#627D98]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#E11D48]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#2463A7]" />;
      default: return <GraduationCap className="w-5 h-5 text-[#2463A7]" />;
    }
  };

  const filteredRoles = activeFilter === 'All' 
    ? ROLES_CATEGORIES 
    : ROLES_CATEGORIES.filter(r => r.audience === activeFilter);

  return (
    <section id="roles-we-recruit" className="py-16 md:py-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
            Coverage & Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Education talent across every level.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#627D98] leading-relaxed">
            From foundational early childhood practitioners to executive headmasters and specialized support personnel, we recruit across all academic and administrative pillars.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Teaching', 'Leadership', 'Specialist', 'Support'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-[#102A43] text-white shadow-sm'
                    : 'bg-white text-[#627D98] hover:text-[#102A43] border border-[#D9E2EC]'
                }`}
              >
                {filter === 'All' ? 'All Roles (12)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role)}
              className="bg-white rounded-xl p-6 border border-[#D9E2EC] hover:border-[#2463A7] hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF4F8] group-hover:bg-[#FEF3D6] transition-colors flex items-center justify-center">
                    {getRoleIcon(role.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF4F8] text-[#627D98] border border-[#D9E2EC]">
                    {role.audience}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#2463A7] transition-colors">
                  {role.title}
                </h3>

                <p className="mt-2 text-xs text-[#627D98] line-clamp-2 leading-relaxed">
                  {role.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D9E2EC]/60 flex items-center justify-between text-xs font-semibold text-[#2463A7]">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-[#D9E2EC] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#FEF3D6] flex items-center justify-center shrink-0">
              <Search className="w-6 h-6 text-[#DFA22A]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#102A43]">
                Looking for a role not listed here?
              </h4>
              <p className="text-xs sm:text-sm text-[#627D98]">
                We provide bespoke executive search and specialized appointments on request.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('staff-request')}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#102A43] hover:bg-[#1E3A56] text-white text-xs font-bold rounded-lg transition-all"
            >
              Request Custom Role
            </button>
            <button
              onClick={() => onNavigate('jobs')}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#EEF4F8] hover:bg-[#D9E2EC] text-[#102A43] text-xs font-bold rounded-lg transition-all"
            >
              Browse Openings
            </button>
          </div>
        </div>

        {/* Selected Role Detail Modal */}
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#D9E2EC] relative animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FEF3D6] flex items-center justify-center">
                    {getRoleIcon(selectedRole.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2463A7]">
                      {selectedRole.audience} Category
                    </span>
                    <h3 className="text-xl font-bold text-[#102A43]">
                      {selectedRole.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="w-8 h-8 rounded-full bg-[#EEF4F8] hover:bg-[#D9E2EC] text-[#1F2933] flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-[#627D98] leading-relaxed mb-6">
                {selectedRole.shortDesc}
              </p>

              <div className="bg-[#F8F7F3] rounded-xl p-4 border border-[#D9E2EC] mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3">
                  Typical Specializations & Positions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRole.examples.map((ex, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-xs font-medium text-[#102A43] rounded-md border border-[#D9E2EC]">
                      • {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedRole(null);
                    onNavigate('staff-request');
                  }}
                  className="flex-1 px-4 py-2.5 bg-[#102A43] hover:bg-[#1E3A56] text-white text-xs font-bold rounded-lg text-center"
                >
                  Hire for this Role
                </button>
                <button
                  onClick={() => {
                    setSelectedRole(null);
                    onNavigate('apply');
                  }}
                  className="flex-1 px-4 py-2.5 bg-[#F4B942] hover:bg-[#E5A82B] text-[#102A43] text-xs font-bold rounded-lg text-center"
                >
                  Apply for this Role
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
