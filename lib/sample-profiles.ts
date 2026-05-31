import { EmployeeProfile } from "./types/employee-profile";

export const profiles: EmployeeProfile[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    bio: "Passionate frontend developer interested in building clean and responsive web applications.",
    skills: ["React", "Next.js", "TypeScript"],
    photoUrl: "",
    email: "john@example.com",
    linkedinUrl: "#",
    githubUrl: "#",
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    bio: "Creative designer focused on simple and user-friendly experiences.",
    skills: ["Figma", "Tailwind CSS"],
    photoUrl: "",
    email: "jane@example.com",
    linkedinUrl: "#",
    githubUrl: "#",
    displayOrder: 2,
    isActive: true,
  },
];