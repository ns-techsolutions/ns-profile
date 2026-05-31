import { AdminProfileForm } from "@/components/admin/admin-profile-form";
import { AdminProfileList } from "@/components/admin/admin-profile-list";
import { SectionHeader } from "@/components/common/section-header";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Admin Panel"
          title="Manage Employee Profiles"
          description="Add and review employee profile information for the NS-profile internal system."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <AdminProfileForm />
          <AdminProfileList />
        </div>
      </section>
    </main>
  );
}