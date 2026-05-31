import { ProfileCard } from "./profile-card";

import { EmployeeProfile } from "@/lib/types/employee-profile";

type ProfileGridProps = {
  profiles: EmployeeProfile[];
};

export function ProfileGrid({ profiles }: ProfileGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}