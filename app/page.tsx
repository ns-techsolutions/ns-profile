import { SectionHeader } from "@/components/common/section-header";
import { ProfileGrid } from "@/components/profile/profile-grid";
import { profiles } from "@/lib/sample-profiles";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="NS-TechSolutions"
          title="Employee Profiles"
          description="Meet the people behind NS-TechSolutions and explore their roles, skills, and professional profiles."
        />

        <ProfileGrid profiles={profiles} />
      </section>
    </main>
  );
}