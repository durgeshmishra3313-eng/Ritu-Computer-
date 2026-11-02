export type Language = 'hi' | 'en';

export interface FacultyMember {
  id: string;
  name: string;
  nameHi: string;
  relation: string;
  relationHi: string;
  role: string;
  roleHi: string;
  specialization: string[];
  specializationHi: string[];
  bio: string;
  bioHi: string;
  experience: string;
  image?: string;
}

export interface Course {
  id: string;
  category: 'computer' | 'board';
  title: string;
  titleHi: string;
  code?: string;
  duration: string;
  durationHi: string;
  eligibility: string;
  eligibilityHi: string;
  description: string;
  descriptionHi: string;
  features: string[];
  featuresHi: string[];
  syllabus: string[];
  feeApprox: string;
  popular?: boolean;
}

export interface StudentCertificate {
  rollNo: string;
  studentName: string;
  fatherName: string;
  courseName: string;
  grade: string;
  issueDate: string;
  duration: string;
  status: 'Verified' | 'Completed';
  instituteCenter: string;
}

export interface InquiryRecord {
  id: string;
  studentName: string;
  fatherName: string;
  phone: string;
  village: string;
  selectedCourse: string;
  batchPreference: string;
  message?: string;
  submittedAt: string;
}
