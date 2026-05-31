type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">{description}</p>
      )}
    </div>
  );
}