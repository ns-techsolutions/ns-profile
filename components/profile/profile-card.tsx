type Profile = {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photoUrl: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
};

type ProfileCardProps = {
  profile: Profile;
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-600">
        {profile.name.charAt(0)}
      </div>

      <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
      <p className="mt-1 text-sm font-medium text-blue-600">{profile.role}</p>

      <p className="mt-4 text-sm leading-6 text-gray-600">{profile.bio}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

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