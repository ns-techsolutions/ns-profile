import { ProfileGrid } from "@/components/profile/profile-grid";
import { profiles } from "@/lib/sample-profiles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            NS-TechSolutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            Employee Profiles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Meet the people behind NS-TechSolutions and explore their roles,
            skills, and professional profiles.
          </p>
        </div>

        <ProfileGrid profiles={profiles} />
      </section>
    </main>
  );
}