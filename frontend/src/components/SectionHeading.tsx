import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWords?: string;
  subtitle?: string;
  centered?: boolean;
  isDark?: boolean;
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightWords,
  subtitle,
  centered = true,
  isDark = false,
  className = '',
  id,
}) => {
  // If highlightWords is provided, highlight those words with gold accent
  const renderTitle = () => {
    if (!highlightWords) return title;
    
    const parts = title.split(new RegExp(`(${highlightWords})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightWords.toLowerCase() ? (
        <span key={i} className="text-[#F4B942] relative inline-block font-extrabold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      id={id}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${
          isDark 
            ? 'bg-[#2463A7]/30 text-[#F4B942] border border-[#F4B942]/30' 
            : 'bg-[#EEF4F8] text-[#2463A7] border border-[#D9E2EC]'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]" />
          {eyebrow}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-[#102A43]'
      }`}>
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg font-normal leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-[#627D98]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
