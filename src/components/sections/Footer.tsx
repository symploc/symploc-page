import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span className="text-base font-bold tracking-tight text-brand-primary dark:text-stone-100">
              Symploc
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-brand-secondary dark:text-stone-400">
            <a href="/#what-it-does" className="hover:text-brand-primary dark:hover:text-stone-100 transition-colors">
              Features
            </a>
            <a href="/privacy" className="hover:text-brand-primary dark:hover:text-stone-100 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-brand-primary dark:hover:text-stone-100 transition-colors">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200/60 dark:border-stone-800">
          <p className="text-sm text-brand-muted dark:text-stone-500">
            &copy; {new Date().getFullYear()} Symploc. <span className="font-semibold">Plan. Build. Ship.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
