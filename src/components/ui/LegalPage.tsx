export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-2">
          {title}
        </h1>
        <p className="text-sm text-brand-muted dark:text-stone-500 mb-10">
          Last updated: {lastUpdated}
        </p>
        <div className="prose-legal">{children}</div>
      </div>
    </section>
  );
}
