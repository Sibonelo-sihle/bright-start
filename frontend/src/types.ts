export type PageRoute = 
  | 'home'
  | 'about'
  | 'for-schools'
  | 'for-educators'
  | 'jobs'
  | 'process'
  | 'contact'
  | 'apply'
  | 'staff-request'
  | 'privacy'
  | 'terms'
  | 'cookies';

export interface JobListing {
  id: string;
  slug?: string;
  title: string;
  employer: string;
  location: string;
  roleType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Permanent' | 'Leadership';
  roleCategory?: string;
  employmentType?: string;
  educationLevel: 'Early Childhood' | 'Primary' | 'Secondary' | 'High School' | 'Tertiary / Vocational' | 'All Levels';
  department?: string;
  postedDate: string;
  deadline?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  preferredRequirements?: string[];
  salary?: string;
  startDate?: string;
  isFeatured?: boolean;
  isSample?: boolean;
}

export interface RoleCategory {
  id: string;
  title: string;
  shortDesc: string;
  audience: 'Teaching' | 'Leadership' | 'Support' | 'Specialist';
  iconName: string;
  examples: string[];
}

export interface ProcessStepItem {
  number: string;
  title: string;
  summary: string;
  details: string;
  keyAction?: string;
}

export interface EducatorApplicationData {
  // Step 1: Personal
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  currentLocation: string;
  city: string;
  country: string;

  // Step 2: Professional Profile
  primaryRole: string;
  yearsOfExperience: string;
  educationLevel: string;
  subjects: string;
  currentEmploymentStatus: string;

  // Step 3: Qualifications
  highestQualification: string;
  institution: string;
  graduationYear: string;
  teachingQualification: string;
  professionalRegistration: string;

  // Step 4: Experience
  currentEmployer: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  previousExperience?: string;

  // Step 5: Documents
  cvFileName?: string;
  cvFileSize?: string;
  qualificationsFileName?: string;
  certificatesFileName?: string;

  // Step 6: Preferences
  preferredRoles: string[];
  preferredLocations: string[];
  availableStartDate: string;
  employmentType: string[];
  salaryExpectation?: string;

  // Step 7: Consent
  privacyConsent: boolean;
  communicationConsent: boolean;
  accuracyDeclaration: boolean;
}

export interface EmployerStaffingRequestData {
  schoolName: string;
  contactPerson: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  roleRequired: string;
  subjectDepartment: string;
  educationLevel: string;
  numberOfPositions: number;
  preferredStartDate: string;
  employmentType: string;
  roleDescription: string;
  minimumRequirements: string;
  additionalInformation?: string;
  urgencyLevel: 'Standard' | 'Urgent' | 'Future Planning';
}

export interface ContactSubmissionData {
  fullName: string;
  email: string;
  phone: string;
  audience: string;
  subject: string;
  message: string;
}
