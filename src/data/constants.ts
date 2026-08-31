import { JobListing, RoleCategory, ProcessStepItem } from '../types';

export const COMPANY_INFO = {
  name: 'BRIGHT START EDU RECRUITMENT (PTY) LTD',
  shortName: 'Bright Start Edu Recruitment',
  registrationNumber: '2026/071471/07',
  registrationDate: '27 January 2026',
  companyType: 'Private Company',
  status: 'In Business',
  tagline: 'Building Bright Futures, One Teacher at a Time',
  secondaryTagline: 'Empowering Education Through Trusted Recruitment',
  primaryFocus: 'Education recruitment and staffing across all levels',
  market: 'Zimbabwe and wider regional African education markets',
  
  // Public-facing contact details
  contactEmail: 'admissions@brightstartedu.co.zw',
  supportEmail: 'info@brightstartedu.co.zw',
  careersEmail: 'careers@brightstartedu.co.zw',
  phone: '+263 (0) 242 000 000 / +263 77 000 0000',
  phoneRaw: '+263770000000',
  whatsAppNumber: '+263770000000',
  whatsAppLink: 'https://wa.me/263770000000?text=Hello%20Bright%20Start%20Edu%20Recruitment%2C%20I%20would%20like%20to%20enquire%20about...',
  
  officeAddress: 'Harare Central Business District, Harare, Zimbabwe',
  workingHours: 'Monday – Friday: 08:00 – 17:00 (CAT)',
  businessHours: 'Monday – Friday: 08:00 – 17:00 (CAT)',
  
  // Brand colors
  colors: {
    navy: '#102A43',
    royal: '#2463A7',
    gold: '#F4B942',
    goldDark: '#DFA22A',
    offWhite: '#F8F7F3',
    surfaceBlue: '#EEF4F8',
    charcoal: '#1F2933',
    green: '#3D8061',
  }
};

export const TRUST_STRIP_ITEMS = [
  {
    title: 'QUALIFIED EDUCATORS',
    desc: 'Verified academic credentials and specialized subject competency.',
    icon: 'GraduationCap'
  },
  {
    title: 'CAREFULLY VETTED',
    desc: 'Multi-stage interview process and rigorous professional checks.',
    icon: 'CheckCircle2'
  },
  {
    title: 'SAFEGUARDING FOCUSED',
    desc: 'Child protection awareness, ID verification, and reference authentication.',
    icon: 'ShieldCheck'
  },
  {
    title: 'ETHICAL RECRUITMENT',
    desc: 'Fair, transparent terms for both educational institutions and candidates.',
    icon: 'Scale'
  },
  {
    title: 'ONGOING SUPPORT',
    desc: 'Post-placement follow-up to ensure seamless onboarding and mutual satisfaction.',
    icon: 'HeartHandshake'
  }
];

export const WHY_BRIGHT_START_BLOCKS = [
  {
    number: '01',
    title: 'Education Focused',
    description: 'We understand that recruiting for a school requires more than matching a CV to a job description. We assess pedagogical alignment, classroom leadership, and subject mastery.'
  },
  {
    number: '02',
    title: 'Carefully Vetted',
    description: 'Candidates are thoroughly screened, referenced, and verified to help schools recruit with greater confidence and reduced administrative burden.'
  },
  {
    number: '03',
    title: 'Ethical & Transparent',
    description: 'Clear communication, zero hidden candidate fees, and responsible recruitment practices sit right at the centre of everything we do.'
  },
  {
    number: '04',
    title: 'Long-Term Relationships',
    description: 'Our goal is to create placements that endure—fostering thriving classrooms, stable school leadership, and rewarding career progression.'
  }
];

export const SCHOOL_PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    summary: 'Share your school’s specific vacancy, required qualifications, timetable constraints, and institutional culture.',
    details: 'Complete our streamlined Staffing Request or arrange a dedicated consultation with our education recruitment team.'
  },
  {
    number: '02',
    title: 'Candidate Search & Screening',
    summary: 'We search our active educator talent network and conduct preliminary competency screenings.',
    details: 'Our team evaluates pedagogical track records, subject-matter expertise, and initial safeguarding prerequisites.'
  },
  {
    number: '03',
    title: 'Shortlisting & Profiles',
    summary: 'Receive a curated shortlist of pre-vetted, verified candidates with detailed profiles.',
    details: 'Each profile includes verified credentials, structured assessment notes, and confirmed availability dates.'
  },
  {
    number: '04',
    title: 'Interview & Selection',
    summary: 'We coordinate interviews, sample lesson demonstrations, and formal school panel sessions.',
    details: 'We handle logistics, candidate briefings, and feedback loops to ensure a respectful, punctual experience.'
  },
  {
    number: '05',
    title: 'Placement & Ongoing Support',
    summary: 'We assist with offer facilitation, onboarding checks, and 90-day post-placement check-ins.',
    details: 'Ongoing communication ensures both the school leadership and educator achieve immediate, harmonious alignment.'
  }
];

export const EDUCATOR_PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Create Your Profile',
    summary: 'Complete our 7-step online registration to highlight your teaching philosophy, subject strengths, and career goals.',
    details: 'Free of charge for candidates. Your profile is kept confidential until you approve specific school applications.'
  },
  {
    number: '02',
    title: 'Submit CV & Documents',
    summary: 'Upload your updated curriculum vitae, degree certificates, and professional teaching credentials.',
    details: 'Our recruitment team reviews your documentation to assess qualification equivalencies and subject alignment.'
  },
  {
    number: '03',
    title: 'Screening & Verification',
    summary: 'Participate in a preliminary professional interview with our recruitment specialist.',
    details: 'We confirm your teaching experience, pedagogical approach, safeguarding awareness, and work preferences.'
  },
  {
    number: '04',
    title: 'Opportunity Matching',
    summary: 'We match your profile with vetted vacancies that fit your career aspirations and geographic preferences.',
    details: 'You receive transparent briefings about the school environment, curriculum expectations, and remuneration.'
  },
  {
    number: '05',
    title: 'School Interview & Demonstration',
    summary: 'Engage with school leadership through structured interviews and lesson presentations.',
    details: 'We provide comprehensive preparation tips, interview briefing notes, and timely constructive feedback.'
  },
  {
    number: '06',
    title: 'Placement & Career Journey',
    summary: 'Step confidently into your new classroom with our full contract and onboarding guidance.',
    details: 'We remain in touch throughout your transition to support your professional flourishing.'
  }
];

export const ROLES_CATEGORIES: RoleCategory[] = [
  {
    id: 'teachers',
    title: 'Classroom Teachers',
    shortDesc: 'General and core syllabus educators committed to academic rigor and inspiring pedagogy.',
    audience: 'Teaching',
    iconName: 'BookOpen',
    examples: ['General Classroom Educators', 'Grade Level Leaders', 'Form Tutors']
  },
  {
    id: 'ecd',
    title: 'Early Childhood Educators',
    shortDesc: 'Specialists in early cognitive development, foundational literacy, numeracy, and play-based learning.',
    audience: 'Teaching',
    iconName: 'Sparkles',
    examples: ['Nursery Practitioners', 'Kindergarten Educators', 'Pre-School Leaders']
  },
  {
    id: 'primary',
    title: 'Primary School Teachers',
    shortDesc: 'Dedicated foundational teachers nurturing young learners across all essential primary subjects.',
    audience: 'Teaching',
    iconName: 'GraduationCap',
    examples: ['Junior School Teachers', 'Key Stage 1 & 2 Specialists', 'Cambridge Primary Educators']
  },
  {
    id: 'secondary',
    title: 'Secondary School Teachers',
    shortDesc: 'Discipline specialists preparing students for national and international examinations (ZIMSEC, Cambridge, IGCSE).',
    audience: 'Teaching',
    iconName: 'School',
    examples: ['O-Level & A-Level Teachers', 'IGCSE Instructors', 'Subject Leads']
  },
  {
    id: 'stem-specialists',
    title: 'Subject Specialists (STEM & Arts)',
    shortDesc: 'Mathematics, Physics, Chemistry, Biology, ICT, Languages, Business Studies, and Creative Arts.',
    audience: 'Specialist',
    iconName: 'Binary',
    examples: ['Pure Mathematics', 'Computer Science & Coding', 'Commercial Sciences', 'Literature']
  },
  {
    id: 'teaching-assistants',
    title: 'Teaching Assistants',
    shortDesc: 'Support educators who assist with classroom management, one-on-one attention, and learning materials.',
    audience: 'Support',
    iconName: 'Users',
    examples: ['Classroom Aides', 'Early Years Assistants', 'Reading Mentors']
  },
  {
    id: 'school-managers',
    title: 'School Managers & Administrators',
    shortDesc: 'Operations managers, bursars, registrars, and coordinators ensuring efficient day-to-day school running.',
    audience: 'Leadership',
    iconName: 'Briefcase',
    examples: ['School Business Managers', 'Academic Coordinators', 'Bursars & Accountants']
  },
  {
    id: 'heads-leadership',
    title: 'Heads & Executive Leadership',
    shortDesc: 'Headmasters, Principals, Deputy Heads, and Directors of Education shaping school vision and culture.',
    audience: 'Leadership',
    iconName: 'Award',
    examples: ['Head of School / Principal', 'Deputy Headmaster (Academics / Pastoral)', 'Dean of Studies']
  },
  {
    id: 'supervisors',
    title: 'Supervisors & HODs',
    shortDesc: 'Department Heads and curriculum supervisors driving teaching standards and mentoring faculty.',
    audience: 'Leadership',
    iconName: 'Compass',
    examples: ['Head of Department (HOD)', 'Curriculum Supervisor', 'Boarding House Master / Mistress']
  },
  {
    id: 'admin-staff',
    title: 'Administrative Staff',
    shortDesc: 'Admissions officers, secretaries, front-desk coordinators, and student record managers.',
    audience: 'Support',
    iconName: 'FileText',
    examples: ['Admissions Officers', 'Executive Secretaries', 'Data & Exams Officers']
  },
  {
    id: 'learning-support',
    title: 'Learning Support & SEN Specialists',
    shortDesc: 'Special Educational Needs educators, remedial teachers, and inclusive learning mentors.',
    audience: 'Specialist',
    iconName: 'Heart',
    examples: ['SEN Coordinators (SENCO)', 'Remedial Specialists', 'Speech & Language Support']
  },
  {
    id: 'other-professionals',
    title: 'Other Education Professionals',
    shortDesc: 'School librarians, sports coaches, career counsellors, lab technicians, and guidance officers.',
    audience: 'Specialist',
    iconName: 'Layers',
    examples: ['School Librarians', 'Sports & Physical Ed Coaches', 'Guidance & Career Counsellors']
  }
];

export const SAFEGUARDING_PILLARS = [
  {
    title: 'Identity & Qualification Checks',
    desc: 'Our process is designed to systematically verify government-issued identity documents, authenticated academic degree certificates, and professional teaching credentials before placement.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Professional References',
    desc: 'We obtain and authenticate direct professional references from previous school heads, academic supervisors, and institutional line managers to validate conduct and track record.',
    icon: 'FileCheck'
  },
  {
    title: 'Safeguarding-Conscious Screening',
    desc: 'We maintain strict child-protection screening discussions during candidate evaluations to ensure educators demonstrate an unequivocal commitment to child safety, dignity, and welfare.',
    icon: 'Lock'
  }
];

export const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'Uncompromising honesty, truthfulness, and ethical standards in all representations of candidates and schools.',
    desc: 'Uncompromising honesty, truthfulness, and ethical standards in all representations of candidates and schools.'
  },
  {
    title: 'Excellence',
    description: 'A relentless commitment to sourcing high-caliber professionals who elevate educational outcomes.',
    desc: 'A relentless commitment to sourcing high-caliber professionals who elevate educational outcomes.'
  },
  {
    title: 'Safeguarding',
    description: 'Prioritizing child safety and institutional trust through rigorous, responsible screening processes.',
    desc: 'Prioritizing child safety and institutional trust through rigorous, responsible screening processes.'
  },
  {
    title: 'Professionalism',
    description: 'Courteous, timely, and discreet communication tailored to the dignity of the teaching vocation.',
    desc: 'Courteous, timely, and discreet communication tailored to the dignity of the teaching vocation.'
  },
  {
    title: 'Transparency',
    description: 'Clear expectations, honest feedback, and open dialogue for both educators and hiring institutions.',
    desc: 'Clear expectations, honest feedback, and open dialogue for both educators and hiring institutions.'
  },
  {
    title: 'People First',
    description: 'Recognizing that behind every CV and job specification are real individuals, classrooms, and futures.',
    desc: 'Recognizing that behind every CV and job specification are real individuals, classrooms, and futures.'
  }
];

export const SCHOOL_TYPES_SERVED = [
  {
    name: 'Primary & Preparatory Schools',
    description: 'Early years foundational academies and primary schools seeking inspiring classroom teachers and literacy specialists.'
  },
  {
    name: 'Secondary & High Schools',
    description: 'Institutions requiring specialized STEM, commercial, and humanities educators for O-Level and national exams.'
  },
  {
    name: 'Cambridge & International Colleges',
    description: 'Schools delivering CAIE IGCSE, AS/A-Levels, or International Baccalaureate curricula demanding global-standard pedagogy.'
  },
  {
    name: 'Boarding Schools & Colleges',
    description: 'Residential campuses requiring dedicated teachers who also excel in pastoral care, boarding supervision, and sports coaching.'
  },
  {
    name: 'Early Learning & ECD Centres',
    description: 'Nursery and kindergarten programs prioritizing play-based foundational development and child safety.'
  },
  {
    name: 'Special Needs & Inclusive Schools',
    description: 'Centres of educational excellence requiring trained remedial teachers, speech support, and SEN practitioners.'
  }
];

export const FAQS = [
  {
    q: 'Do educators or job seekers pay any registration or placement fees?',
    a: 'No. Bright Start Edu Recruitment operates under an ethical candidate charter. Our registration, profile creation, interview preparation, and placement services are completely 100% free of charge for all teachers and education candidates.'
  },
  {
    q: 'How does Bright Start verify teacher credentials and safeguarding?',
    a: 'Every candidate undergoes direct tertiary certificate verification, identity authentication, and detailed confidential reference checks with previous school heads before their profile is introduced to a partner institution.'
  },
  {
    q: 'What types of educational institutions do you recruit for?',
    a: 'We partner with independent primary schools, secondary colleges, Cambridge Assessment/IB international schools, boarding academies, ECD nurseries, and specialized learning centers across Zimbabwe and the region.'
  },
  {
    q: 'How quickly can a school receive a candidate shortlist?',
    a: 'For standard vacancies, we typically present a vetted shortlist of 2–3 verified candidates within 3 to 7 business days following your initial consultation.'
  },
  {
    q: 'Can educators apply if they are currently employed and need discretion?',
    a: 'Yes. All candidate registrations are handled with strict professional confidentiality. We never disclose your profile or contact your current employer without your explicit prior permission.'
  }
];

// Sample demo vacancies clearly labelled as development/sample content per prompt guidelines
export const SAMPLE_JOB_LISTINGS: JobListing[] = [
  {
    id: 'BS-2026-01',
    title: 'Senior Mathematics Teacher (IGCSE & A-Level)',
    employer: 'Prominent Private High School',
    location: 'Harare, Zimbabwe',
    roleType: 'Permanent',
    educationLevel: 'High School',
    department: 'Mathematics & STEM',
    postedDate: '24 Aug 2026',
    deadline: '15 Sep 2026',
    isFeatured: true,
    isSample: true,
    description: 'Seeking an accomplished and inspiring Senior Mathematics Educator to teach Pure Mathematics and Statistics across Cambridge IGCSE and A-Level classes.',
    responsibilities: [
      'Deliver structured, high-engagement Mathematics lectures and tutorials for Form 3 to Upper 6.',
      'Prepare candidates thoroughly for Cambridge International and national examinations.',
      'Monitor student academic progression, identifying pupils in need of remedial support or Olympiad extension.',
      'Participate actively in extra-curricular school life (Chess Club / Science Club).'
    ],
    requirements: [
      'Bachelor of Science in Mathematics, Applied Mathematics, or Education (B.Ed Maths).',
      'Minimum 3+ years teaching experience in Cambridge or ZIMSEC A-Level curriculum.',
      'Proven track record of strong examination pass rates.',
      'Exceptional classroom management and student engagement capabilities.'
    ],
    benefits: [
      'Competitive institutional salary package',
      'Continuous professional development allowances',
      'Modern school laboratory and ICT resources',
      'Staff medical aid contribution'
    ]
  },
  {
    id: 'BS-2026-02',
    title: 'Primary School Head of Department (Junior School)',
    employer: 'Established Co-Educational Academy',
    location: 'Bulawayo, Zimbabwe',
    roleType: 'Leadership',
    educationLevel: 'Primary',
    department: 'Academics & Leadership',
    postedDate: '26 Aug 2026',
    deadline: '20 Sep 2026',
    isFeatured: true,
    isSample: true,
    description: 'An exceptional leadership opportunity for a seasoned Primary Educator to lead the Junior Primary faculty, mentor teaching staff, and drive holistic curriculum standards.',
    responsibilities: [
      'Oversee syllabus execution, timetable planning, and faculty lesson reviews.',
      'Mentor early-career teachers and coordinate termly continuous assessment tasks.',
      'Lead parent-teacher consultations and maintain positive community engagement.',
      'Ensure safeguarding compliance and child-centered learning methodologies.'
    ],
    requirements: [
      'Degree or Diploma in Primary Education (B.Ed Primary / Post-Grad Diploma).',
      '5+ years primary teaching experience with at least 2 years in supervisory or HOD capacity.',
      'Strong organizational, communicative, and diplomatic leadership skills.'
    ],
    benefits: [
      'Attractive executive remuneration',
      'Housing / relocation allowance where applicable',
      'Tuition fee remission for dependent children',
      'Leadership development workshops'
    ]
  },
  {
    id: 'BS-2026-03',
    title: 'Early Childhood Development (ECD) Lead Teacher',
    employer: 'Modern Preparatory School',
    location: 'Mutare, Zimbabwe',
    roleType: 'Full-Time',
    educationLevel: 'Early Childhood',
    department: 'Early Years',
    postedDate: '28 Aug 2026',
    deadline: '25 Sep 2026',
    isFeatured: false,
    isSample: true,
    description: 'Looking for a warm, creative, and certified ECD Educator to create an enriching, play-based foundational learning environment for learners aged 3 to 5.',
    responsibilities: [
      'Plan and implement foundational literacy, sensory play, and numeracy routines.',
      'Foster emotional, social, and motor skill development in a safe, caring setting.',
      'Maintain diligent daily observation logs and communicate progress to parents.',
      'Create dynamic, visual, and stimulating classroom learning stations.'
    ],
    requirements: [
      'Diploma or Degree in Early Childhood Development / Education.',
      'Demonstrated passion and patience for foundational infant education.',
      'Certified understanding of child safety, hygiene, and developmental milestones.'
    ],
    benefits: [
      'Standardized termly bonus scheme',
      'Collaborative team environment',
      'Generous school holiday schedule',
      'Classroom resource budget'
    ]
  },
  {
    id: 'BS-2026-04',
    title: 'Physics & Chemistry Secondary Specialist',
    employer: 'Reputable Boarding School',
    location: 'Gweru / Midlands, Zimbabwe',
    roleType: 'Full-Time',
    educationLevel: 'Secondary',
    department: 'Natural Sciences',
    postedDate: '29 Aug 2026',
    deadline: '30 Sep 2026',
    isFeatured: false,
    isSample: true,
    description: 'A dynamic Physical Sciences educator needed to oversee science laboratories, guide experimental practicals, and instruct Forms 1 to 4.',
    responsibilities: [
      'Conduct regular lab-based practicals with strict adherence to safety protocols.',
      'Teach foundational and intermediate Physics and Chemistry concepts.',
      'Supervise boarding duties and weekend scientific discovery workshops on rotation.'
    ],
    requirements: [
      'BSc in Physics / Chemistry / Chemical Technology with recognized teaching diploma.',
      '2+ years secondary classroom and science lab supervision experience.',
      'Excellent analytical thinking and clear communication skills.'
    ],
    benefits: [
      'On-campus accommodation provided',
      'Full boarding meals during term-time',
      'Lab equipment upgrades and research support'
    ]
  },
  {
    id: 'BS-2026-05',
    title: 'Special Educational Needs (SEN) Learning Support Specialist',
    employer: 'Inclusive Private School',
    location: 'Harare, Zimbabwe',
    roleType: 'Full-Time',
    educationLevel: 'All Levels',
    department: 'Student Support Services',
    postedDate: '30 Aug 2026',
    deadline: '10 Oct 2026',
    isFeatured: false,
    isSample: true,
    description: 'Dedicated learning support specialist to craft Individualised Education Plans (IEPs), conduct diagnostic remedial sessions, and support diverse learning needs.',
    responsibilities: [
      'Develop customized IEPs in collaboration with mainstream classroom teachers.',
      'Provide small-group and 1-on-1 literacy, numeracy, and executive functioning support.',
      'Liaise with educational psychologists, occupational therapists, and parents.'
    ],
    requirements: [
      'Specialised qualification in Special Needs Education / Remedial Teaching / Psychology.',
      'Documented experience with dyslexia, ADHD, or autism spectrum support.',
      'Empathy, patience, and evidence-based pedagogical strategies.'
    ],
    benefits: [
      'Dedicated learning support suite',
      'Flexible resource acquisition',
      'Competitive salary band'
    ]
  },
  {
    id: 'BS-2026-06',
    title: 'High School English Language & Literature Educator',
    employer: 'Top-tier International Syllabus College',
    location: 'Harare, Zimbabwe',
    roleType: 'Permanent',
    educationLevel: 'High School',
    department: 'Humanities & Languages',
    postedDate: '31 Aug 2026',
    deadline: '12 Oct 2026',
    isFeatured: true,
    isSample: true,
    description: 'We are sourcing an articulate, passionate English Language & Literature teacher capable of inspiring critical thinking, analytical writing, and debate.',
    responsibilities: [
      'Teach Cambridge IGCSE and A-Level English Literature and Language.',
      'Lead school debate society and drama / public speaking competitions.',
      'Cultivate an enthusiastic reading culture throughout the senior school.'
    ],
    requirements: [
      'BA in English / Literature with Graduate Certificate in Education (Grad CE) or B.Ed.',
      'At least 3 years teaching senior secondary literature with proven exam results.',
      'Exceptional written command and passion for African & World literature.'
    ],
    benefits: [
      'Top-tier salary package in USD equivalent',
      'Annual performance bonus',
      'Medical aid and pension contribution'
    ]
  }
];

export const SAMPLE_JOBS = SAMPLE_JOB_LISTINGS;

export const AUTHENTIC_IMAGES = {
  // African educators in modern, warm, inspiring educational settings
  hero: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85',
  whoWeAre: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85',
  forSchools: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85',
  forEducators: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=1000&q=85',
  aboutHero: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  aboutStory: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
  safeguarding: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85',
  teamCollaboration: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85',
};
