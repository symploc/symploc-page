import { Hero } from "@/components/sections/Hero";
import { WhatItDoes } from "@/components/sections/WhatItDoes";
import { WindowsIcon, AppleIcon } from "@/components/ui/OsIcons";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItDoes />

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent mb-4">Plan. Build. Ship.</p>
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-6">
            Your AI PM. Free forever.
          </h2>
          <p className="text-lg text-brand-secondary dark:text-stone-400 mb-10 max-w-xl mx-auto">
            No subscription. No account. No data leaves your machine. Just download and let the super agent handle the
            rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download-windows"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
            >
              <WindowsIcon size={18} />
              <span>Download for Windows</span>
            </a>
            <a
              href="#download-mac"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-brand-border dark:border-stone-700 text-brand-primary dark:text-stone-300 font-semibold text-base hover:border-brand-accent/30 hover:text-brand-accent transition-colors"
            >
              <AppleIcon size={18} />
              <span>Download for Mac</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
