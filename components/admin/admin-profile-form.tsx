export function AdminProfileForm() {
  return (
    <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Add Employee Profile</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Role</label>
          <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Short Bio</label>
          <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" rows={4} />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Skills</label>
          <input
            placeholder="React, Next.js, TypeScript"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">LinkedIn URL</label>
          <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">GitHub URL</label>
          <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2" />
        </div>
      </div>

      <button
        type="button"
        className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Add Profile
      </button>
    </form>
  );
}