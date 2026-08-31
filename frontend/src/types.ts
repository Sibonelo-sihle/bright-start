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
  title: string;
  employer: string;
  location: string;
  roleType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Permanent' | 'Leadership';
  educationLevel: 'Early Childhood' | 'Primary' | 'Secondary' | 'High School' | 'Tertiary / Vocational' | 'All Levels';
  department?: string;
  postedDate: string;
  deadline?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
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

export interface ContactEnquiryData {
  name: string;
  email: string;
  phone: string;
  enquiryType: 'I am looking for staff' | 'I am looking for work' | 'General enquiry' | 'Partnership query';
  subject?: string;
  message: string;
}

export type AdminJobStatus = 'Draft' | 'Published' | 'Closed';
export type ApplicantStatus = 'New' | 'Under Review' | 'Shortlisted' | 'Interview' | 'Offer' | 'Placed' | 'Not Selected' | 'Archived';
export type StaffRequestStatus = 'New' | 'Contacted' | 'In Progress' | 'Filled' | 'Closed';
export type MessageStatus = 'Unread' | 'Read' | 'Replied' | 'Archived';

export interface AdminJob extends JobListing {
  employmentType: string;
  preferredRequirements: string[];
  salary?: string;
  preferredStartDate?: string;
  internalContact: string;
  status: AdminJobStatus;
  applicantCount: number;
}

export interface InternalNote { id: string; body: string; author: string; createdAt: string; }
export interface CandidateDocument { id: string; name: string; kind: 'CV' | 'Qualification' | 'Certificate'; }
export interface EmploymentRecord { employer: string; role: string; period: string; summary: string; }
export interface ApplicationRecord { id: string; jobId: string; jobTitle: string; appliedDate: string; status: ApplicantStatus; }
export interface Candidate {
  id: string; firstName: string; surname: string; email: string; phone: string; location: string;
  primaryRole: string; yearsExperience: string; educationLevel: string; subjects: string[];
  currentEmploymentStatus: string; qualifications: string[]; employmentHistory: EmploymentRecord[];
  preferredRoles: string[]; preferredLocations: string[]; documents: CandidateDocument[];
  applications: ApplicationRecord[]; notes: InternalNote[]; status: ApplicantStatus;
}
export interface StaffRequest extends EmployerStaffingRequestData {
  id: string; submittedDate: string; status: StaffRequestStatus; notes: InternalNote[];
}
export interface ContactMessage {
  id: string; name: string; email: string; phone?: string; enquiryType: string; subject: string;
  message: string; submittedDate: string; status: MessageStatus;
}
export interface AdminUser { id: string; name: string; email: string; initials: string; }
