export interface EmployeeProfile {
  id: number;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  skills: string[];
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  displayOrder: number;
  isActive: boolean;
}