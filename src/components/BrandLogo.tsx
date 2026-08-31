import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem-only' | 'footer';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const isDarkBg = variant === 'footer';

  // Size mappings
  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-xl font-extrabold tracking-tight',
    lg: 'text-2xl font-extrabold tracking-tight',
    xl: 'text-3xl font-black tracking-tight'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] tracking-widest',
    lg: 'text-xs tracking-widest',
    xl: 'text-sm tracking-widest'
  };

  // Official Bright Start Vector Illustration Emblem
  const renderEmblem = () => (
    <div className={`relative flex items-center justify-center shrink-0 ${emblemSizes[size]} transition-transform duration-300 hover:scale-105`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="greenBoardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        {/* Background Shield / Glow */}
        <circle cx="100" cy="100" r="94" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="3" />
        <circle cx="100" cy="100" r="88" fill="#F8FAFC" />

        {/* Rainbow dynamic arch representing growth & bright start */}
        <path
          d="M 24 135 C 24 60, 176 60, 176 135"
          stroke="url(#arcGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Classroom Blackboard */}
        <rect x="52" y="44" width="96" height="58" rx="6" fill="#78350F" stroke="#B45309" strokeWidth="2" />
        <rect x="56" y="48" width="88" height="50" rx="4" fill="url(#greenBoardGrad)" />
        
        {/* Blackboard elements (ABC, 123, math) */}
        <text x="64" y="65" fill="#E2E8F0" fontSize="10" fontWeight="bold" fontFamily="monospace">ABC</text>
        <text x="122" y="65" fill="#FEF08A" fontSize="9" fontWeight="bold" fontFamily="monospace">123</text>
        <line x1="64" y1="75" x2="80" y2="75" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="120" y1="75" x2="136" y2="75" stroke="#FEF08A" strokeWidth="1.5" />

        {/* Globe on left */}
        <circle cx="38" cy="46" r="14" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <path d="M 28 46 C 34 40, 42 40, 48 46 C 42 52, 34 52, 28 46" fill="#22C55E" />
        <path d="M 38 32 L 38 60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

        {/* Clock & Books on right */}
        <circle cx="162" cy="44" r="12" fill="#FEF2F2" stroke="#EF4444" strokeWidth="2" />
        <line x1="162" y1="44" x2="162" y2="37" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="162" y1="44" x2="167" y2="44" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Books stack */}
        <rect x="150" y="62" width="22" height="6" rx="1.5" fill="#3B82F6" />
        <rect x="152" y="58" width="20" height="5" rx="1.5" fill="#EF4444" />
        <rect x="154" y="54" width="18" height="5" rx="1.5" fill="#F59E0B" />

        {/* Central Teacher Figure */}
        {/* Hair */}
        <circle cx="100" cy="56" r="18" fill="#78350F" />
        <ellipse cx="100" cy="54" r="16" fill="#92400E" />
        {/* Face */}
        <circle cx="100" cy="58" r="13" fill="#FED7AA" />
        {/* Eyes & Smile */}
        <circle cx="96" cy="56" r="1.5" fill="#1E293B" />
        <circle cx="104" cy="56" r="1.5" fill="#1E293B" />
        <path d="M 96 62 Q 100 66 104 62" stroke="#B91C1C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Pointer Hand */}
        <path d="M 90 74 L 75 58" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round" />
        <line x1="75" y1="58" x2="68" y2="52" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
        {/* Teacher Shirt (Lilac/Purple) */}
        <path d="M 86 72 C 86 68, 114 68, 114 72 L 118 108 L 82 108 Z" fill="#C084FC" />
        {/* Trousers */}
        <rect x="86" y="108" width="28" height="30" fill="#475569" rx="2" />

        {/* Left Child (Boy sitting with book) */}
        <circle cx="58" cy="98" r="10" fill="#FDBA74" />
        <path d="M 50 94 C 50 86, 66 86, 66 94 Z" fill="#7C2D12" />
        <path d="M 50 108 C 50 104, 66 104, 66 108 L 68 126 L 48 126 Z" fill="#38BDF8" />
        <rect x="52" y="116" width="12" height="10" rx="1" fill="#EA580C" />

        {/* Center Child (Girl with hoop) */}
        <circle cx="100" cy="118" r="11" fill="#FED7AA" />
        {/* Pigtails */}
        <circle cx="88" cy="114" r="5" fill="#9A3412" />
        <circle cx="112" cy="114" r="5" fill="#9A3412" />
        <path d="M 90 114 C 90 106, 110 106, 110 114 Z" fill="#9A3412" />
        {/* Dress */}
        <path d="M 91 128 L 85 148 L 115 148 L 109 128 Z" fill="#F43F5E" />
        {/* Hoop */}
        <circle cx="100" cy="138" r="18" stroke="#0284C7" strokeWidth="2.5" fill="none" />

        {/* Right Child (Boy with backpack) */}
        <circle cx="142" cy="100" r="10" fill="#FED7AA" />
        <path d="M 134 96 C 134 88, 150 88, 150 96 Z" fill="#1E293B" />
        {/* Uniform */}
        <path d="M 134 110 L 150 110 L 148 132 L 136 132 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
        <polygon points="142,112 140,122 142,126 144,122" fill="#2563EB" />
        <rect x="148" y="112" width="8" height="16" rx="2" fill="#0284C7" />

        {/* Bottom Banner with Official Brand Text */}
        <g id="brand-banner">
          {/* Banner Ribbon */}
          <path
            d="M 20 156 Q 100 144 180 156 L 175 186 Q 100 174 25 186 Z"
            fill="#FFFFFF"
            stroke="#F59E0B"
            strokeWidth="2.5"
            className="filter drop-shadow"
          />
          {/* Main Logo Text "BrightStart" */}
          <text
            x="32"
            y="170"
            fill="url(#goldGrad)"
            fontSize="18"
            fontWeight="900"
            fontFamily="Arial Black, Impact, sans-serif"
            stroke="#B45309"
            strokeWidth="0.6"
          >
            Bright
          </text>
          <text
            x="96"
            y="170"
            fill="url(#blueGrad)"
            fontSize="18"
            fontWeight="900"
            fontFamily="Arial Black, Impact, sans-serif"
            stroke="#1E40AF"
            strokeWidth="0.6"
          >
            Start
          </text>
          
          {/* Subtext Ribbon */}
          <text
            x="100"
            y="182"
            textAnchor="middle"
            fill="#0F172A"
            fontSize="7"
            fontWeight="800"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            • EDU RECRUITMENT PvT LTD •
          </text>
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem-only') {
    return <div className={`inline-flex items-center ${className}`}>{renderEmblem()}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {renderEmblem()}
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-0.5">
            <span className={`${titleSizes[size]} font-black ${isDarkBg ? 'text-[#F4B942]' : 'text-[#102A43]'}`}>
              BRIGHT
            </span>
            <span className={`${titleSizes[size]} font-black text-[#2463A7]`}>
              START
            </span>
          </div>
          <span className={`${subtitleSizes[size]} font-bold uppercase tracking-widest ${isDarkBg ? 'text-slate-300' : 'text-[#627D98]'}`}>
            Edu Recruitment (Pty) Ltd
          </span>
          {showTagline && (
            <span className="text-xs italic mt-1 font-medium text-[#F4B942]">
              Building Bright Futures, One Teacher at a Time
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {renderEmblem()}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`${titleSizes[size]} font-extrabold ${isDarkBg ? 'text-white' : 'text-[#102A43]'}`}>
            BRIGHT<span className="text-[#F4B942]">START</span>
          </span>
          <span className={`inline-block px-1.5 py-0.5 text-[9px] font-bold rounded uppercase tracking-wide ${
            isDarkBg ? 'bg-[#2463A7]/40 text-[#F4B942] border border-[#F4B942]/30' : 'bg-[#EEF4F8] text-[#102A43] border border-[#D9E2EC]'
          }`}>
            EDU
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1 leading-none">
          <span className={`${subtitleSizes[size]} font-bold uppercase tracking-wider ${isDarkBg ? 'text-slate-300' : 'text-[#627D98]'}`}>
            Recruitment (Pty) Ltd
          </span>
          <span className={`w-1 h-1 rounded-full ${isDarkBg ? 'bg-[#F4B942]' : 'bg-[#2463A7]'}`} />
          <span className={`text-[9px] font-semibold tracking-tight ${isDarkBg ? 'text-slate-400' : 'text-slate-500'}`}>
            Zimbabwe & Regional
          </span>
        </div>
        {showTagline && size === 'lg' && (
          <span className={`text-[11px] italic mt-1 font-medium ${isDarkBg ? 'text-[#F4B942]/90' : 'text-[#2463A7]'}`}>
            Building Bright Futures, One Teacher at a Time
          </span>
        )}
      </div>
    </div>
  );
};
