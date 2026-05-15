"use client";

import {
  Globe,
  Smartphone,
  Monitor,
  Sparkles,
  ArrowRight,
  Search,
  Map,
  Hammer,
  Rocket,
  Briefcase,
  Repeat,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { BOOKING_URL } from "@/lib/booking";

interface Pillar {
  key: string;
  label: string;
  Icon: LucideIcon;
  tagline: string;
  what: string[];
  stack: string[];
}

const pillars: Pillar[] = [
  {
    key: "web",
    label: "Web",
    Icon: Globe,
    tagline: "Marketing sites, SaaS dashboards, internal tools, and full-stack web apps.",
    what: [
      "Marketing & launch sites",
      "SaaS products from MVP to scale",
      "Admin dashboards and internal tools",
      "API and backend services",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    key: "mobile",
    label: "Mobile",
    Icon: Smartphone,
    tagline: "iOS and Android apps, from prototype to App Store.",
    what: [
      "Native iOS (Swift) and Android (Kotlin)",
      "Cross-platform with React Native / Expo",
      "Offline-first and sync architectures",
      "App Store & Play Store submission",
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin", "SwiftUI", "Jetpack Compose"],
  },
  {
    key: "desktop",
    label: "Desktop",
    Icon: Monitor,
    tagline: "Cross-platform desktop software for macOS, Windows, and Linux.",
    what: [
      "Productivity and creative tools",
      "Local-first apps with sync",
      "Auto-updating installers and signing",
      "Native integrations (Keychain, filesystem, shell)",
    ],
    stack: ["Electron", "Tauri", "Rust", "TypeScript", "Node.js"],
  },
  {
    key: "ai",
    label: "AI",
    Icon: Sparkles,
    tagline: "Agents, RAG systems, evals, and ML pipelines that ship to production.",
    what: [
      "LLM applications and chat interfaces",
      "Agent systems and tool use",
      "RAG pipelines on your data",
      "Evals, prompt engineering, and fine-tuning",
    ],
    stack: ["Claude", "GPT", "Gemini", "LangGraph", "MCP", "Pinecone", "Vector DBs"],
  },
];

interface Step {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const process: Step[] = [
  {
    Icon: Search,
    title: "Discovery",
    desc: "We sit down with you, understand the problem, the users, and what success looks like.",
  },
  {
    Icon: Map,
    title: "Plan",
    desc: "We scope the work, propose an architecture, and agree on milestones and timeline.",
  },
  {
    Icon: Hammer,
    title: "Build",
    desc: "We ship in tight iterations with weekly demos. You see progress, not just status reports.",
  },
  {
    Icon: Rocket,
    title: "Ship",
    desc: "We deploy, hand off, and stay on for support. Your team owns the code from day one.",
  },
];

interface Engagement {
  Icon: LucideIcon;
  title: string;
  desc: string;
  fit: string;
}

const engagements: Engagement[] = [
  {
    Icon: Briefcase,
    title: "Fixed-scope project",
    desc: "A defined deliverable with a fixed timeline. You know what you're getting and when.",
    fit: "Best for: MVPs, redesigns, launches",
  },
  {
    Icon: Repeat,
    title: "Retainer",
    desc: "A dedicated team for ongoing work. Continuous shipping without re-scoping every quarter.",
    fit: "Best for: long-running products, embedded teams",
  },
  {
    Icon: MessageCircle,
    title: "Consultation & advisory",
    desc: "Architecture reviews, AI strategy, technical second opinions. Hours or half-days.",
    fit: "Best for: early decisions, audits, hiring",
  },
];

interface Project {
  category: string;
  outcome: string;
}

// Anonymized project shapes. No client names while work is under NDA.
const projects: Project[] = [
  {
    category: "Web · SaaS Platform",
    outcome: "Built and launched in 10 weeks. Took the product from zero to its first thousand active users in the opening month.",
  },
  {
    category: "Mobile · iOS & Android",
    outcome: "Cross-platform consumer app shipped on the App Store and Play Store with offline-first sync.",
  },
  {
    category: "AI · Agent System",
    outcome: "Production agent system handling thousands of tool-use requests daily with evals in CI.",
  },
  {
    category: "Desktop · Productivity Tool",
    outcome: "Cross-platform desktop app for macOS, Windows, and Linux with auto-update and code signing.",
  },
];

interface Faq {
  q: string;
  a: string;
}

const faqs: Faq[] = [
  {
    q: "How long does a typical project take?",
    a: "MVPs usually land in 6 to 12 weeks. Larger builds run 3 to 6 months. We give you a real timeline after Discovery, not before.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on scope and engagement model. We keep all pricing conversations direct. Book a call and we'll quote after we understand the work.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Every project ships with full source code, documentation, and a clean handoff. No vendor lock-in.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Send yours over before the first call, or use ours.",
  },
  {
    q: "Do you do design too?",
    a: "Yes. Product design, UX, and UI are part of every engagement unless you have a designer already.",
  },
  {
    q: "Where is the team based?",
    a: "Symploc, LLC is registered in Delaware, USA. The team works remotely across multiple time zones.",
  },
];

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent mb-6">
              Symploc Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit text-brand-primary dark:text-stone-50 leading-[1.1] tracking-tight mb-6">
              The team behind Symploc{" "}
              <span className="text-brand-accent">builds for you, too.</span>
            </h1>
            <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed max-w-2xl mx-auto mb-10">
              We&apos;re an engineering studio. We take consulting and full project work across
              web, mobile, desktop, and AI. We ship faster because we use the tools we make.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
              >
                Book a free consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-stone-100 dark:bg-stone-800 text-brand-primary dark:text-stone-100 font-semibold text-base hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors border border-stone-200/80 dark:border-stone-700"
              >
                See how we work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section id="pillars" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-brand-accent mb-3">What we build</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
              Four practices. One team.
            </h2>
            <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed">
              We&apos;re generalists with depth, comfortable shipping across the stack and across platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.key}
                id={p.key}
                className="rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-8"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <p.Icon size={22} strokeWidth={1.75} className="text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-outfit text-brand-primary dark:text-stone-100 mb-1">
                      {p.label}
                    </h3>
                    <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <h4 className="text-xs font-semibold tracking-wider uppercase text-brand-muted dark:text-stone-500 mb-3">
                  What we deliver
                </h4>
                <ul className="space-y-2 mb-5">
                  {p.what.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 text-sm text-brand-secondary dark:text-stone-400"
                    >
                      <span className="text-brand-accent mt-1.5 shrink-0">•</span>
                      {w}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-200/60 dark:border-stone-700/60">
                  {p.stack.map((t) => (
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
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-stone-50/60 dark:bg-stone-900/40 border-y border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-brand-accent mb-3">How we work</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
              Plan. Build. Ship.
            </h2>
            <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed">
              The same loop we built Symploc around, applied to your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-6"
              >
                <div className="absolute -top-3 -left-2 w-7 h-7 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-4">
                  <step.Icon size={18} strokeWidth={1.75} className="text-brand-primary dark:text-stone-200" />
                </div>
                <h3 className="text-base font-bold font-outfit text-brand-primary dark:text-stone-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-brand-accent mb-3">How to work with us</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
              Three ways to engage.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {engagements.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-7"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                  <e.Icon size={20} strokeWidth={1.75} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold font-outfit text-brand-primary dark:text-stone-100 mb-2">
                  {e.title}
                </h3>
                <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed mb-3">
                  {e.desc}
                </p>
                <p className="text-xs font-medium text-brand-muted dark:text-stone-500">{e.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work, anonymized while under NDA */}
      <section className="py-20 bg-stone-50/60 dark:bg-stone-900/40 border-y border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-brand-accent mb-3">Selected work</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
              Shipped, in production, used daily.
            </h2>
            <p className="text-base text-brand-secondary dark:text-stone-400 leading-relaxed">
              Most of our client work is under NDA. Here&apos;s the shape of it. We&apos;re happy to walk through
              the details on a call.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {projects.map((p) => (
              <div
                key={p.category}
                className="rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-6"
              >
                <p className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-3">
                  {p.category}
                </p>
                <p className="text-base text-brand-primary dark:text-stone-200 leading-relaxed">
                  {p.outcome}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-brand-accent hover:underline font-medium"
            >
              Ask us about relevant past work
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand-accent mb-3">Common questions</p>
            <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight">
              Frequently asked.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-stone-200/80 dark:border-stone-700 bg-white dark:bg-stone-900 p-5"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-brand-primary dark:text-stone-100">
                    {f.q}
                  </h3>
                  <span className="text-brand-accent text-xl leading-none transition-transform group-open:rotate-45 shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-brand-secondary dark:text-stone-400 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-stone-200/60 dark:border-stone-800/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent mb-4">
            Plan. Build. Ship.
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-6">
            Let&apos;s talk about what you&apos;re building.
          </h2>
          <p className="text-lg text-brand-secondary dark:text-stone-400 mb-10 max-w-xl mx-auto">
            A 30-minute call. We&apos;ll listen, ask questions, and tell you honestly whether we&apos;re the right team.
            If not, we&apos;ll point you to someone who is.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
          >
            Book a free consultation
            <ArrowRight size={16} />
          </a>
          <p className="mt-4 text-sm text-brand-muted dark:text-stone-500">
            Or email{" "}
            <a
              href="mailto:contact@symploc.com"
              className="text-brand-accent hover:underline font-medium"
            >
              contact@symploc.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
