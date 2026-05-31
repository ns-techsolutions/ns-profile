type ProfileDetailsProps = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
};

export function ProfileDetails({
  name,
  role,
  bio,
  skills,
}: ProfileDetailsProps) {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="mt-1 text-sm font-medium text-blue-600">{role}</p>

      <p className="mt-4 text-sm leading-6 text-gray-600">{bio}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}