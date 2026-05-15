"use client";

import { Globe, Smartphone, Monitor, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

interface Service {
  key: string;
  label: string;
  Icon: LucideIcon;
  blurb: string;
  stack: string[];
}

const services: Service[] = [
  {
    key: "web",
    label: "Web",
    Icon: Globe,
    blurb: "Marketing sites, dashboards, SaaS, and internal tools, designed and shipped end to end.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    key: "mobile",
    label: "Mobile",
    Icon: Smartphone,
    blurb: "iOS and Android apps that feel native, from MVP to App Store.",
    stack: ["React Native", "Swift", "Kotlin", "Expo"],
  },
  {
    key: "desktop",
    label: "Desktop",
    Icon: Monitor,
    blurb: "Cross-platform desktop apps for macOS, Windows, and Linux, built like the one you're on.",
    stack: ["Electron", "Tauri", "Rust", "Node.js"],
  },
  {
    key: "ai",
    label: "AI",
    Icon: Sparkles,
    blurb: "Agents, RAG, evals, and ML pipelines. Production AI systems, not demos.",
    stack: ["LLMs", "Agents", "RAG", "Evals"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 border-t border-stone-200/60 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-accent mb-3">
            We built Symploc. We also build for clients.
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
            Need it built? We do that too.
          </h2>
          <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed">
            Symploc is also an engineering team. We take consulting and full project work across web, mobile,
            desktop, and AI. We ship faster because we use the tools we make.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {services.map((s) => (
            <div
              key={s.key}
              className="group rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-6 hover:border-brand-accent/40 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                <s.Icon size={20} strokeWidth={1.75} className="text-brand-accent" />
              </div>
              <h3 className="text-lg font-bold font-outfit text-brand-primary dark:text-stone-100 mb-2">
                {s.label}
              </h3>
              <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed mb-4">
                {s.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-brand-secondary dark:text-stone-400 border border-stone-200/60 dark:border-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary dark:bg-stone-100 text-white dark:text-brand-primary font-semibold text-base hover:bg-brand-primary/90 dark:hover:bg-stone-200 transition-colors shadow-md"
          >
            Book a free consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="/services"
            className="text-sm text-brand-secondary dark:text-stone-400 hover:text-brand-accent transition-colors font-medium"
          >
            Or see how we work →
          </a>
        </div>
      </div>
    </section>
  );
}
