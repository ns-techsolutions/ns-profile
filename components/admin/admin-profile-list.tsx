import { profiles } from "@/lib/sample-profiles";

export function AdminProfileList() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Employee Profiles</h2>

      <div className="mt-6 space-y-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-semibold text-gray-900">{profile.name}</h3>
              <p className="text-sm text-gray-600">{profile.role}</p>
            </div>

            <div className="flex gap-2">
              <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700">
                Edit
              </button>
              <button className="rounded-lg border border-red-300 px-3 py-1 text-sm text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}