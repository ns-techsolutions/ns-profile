import { ProfileDetails } from "./profile-details";

import { EmployeeProfile } from "@/lib/types/employee-profile";

type ProfileCardProps = {
  profile: EmployeeProfile;
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-600">
        {profile.name.charAt(0)}
      </div>

      <ProfileDetails
        name={profile.name}
        role={profile.role}
        bio={profile.bio}
        skills={profile.skills}
      />

      <div className="mt-5 flex gap-4 text-sm">
        <a href={`mailto:${profile.email}`} className="text-blue-600 hover:underline">
          Email
        </a>
        <a href={profile.linkedinUrl} className="text-blue-600 hover:underline">
          LinkedIn
        </a>
        <a href={profile.githubUrl} className="text-blue-600 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
}