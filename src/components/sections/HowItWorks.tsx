import { Download, BrainCircuit, GitBranch, Rocket, type LucideIcon } from "lucide-react";

interface Step {
  Icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    Icon: Download,
    number: "01",
    title: "Download the app",
    desc: "Free for Windows, Mac, and Linux. No account, no sign-up, no subscription.",
  },
  {
    Icon: BrainCircuit,
    number: "02",
    title: "Pick your AI agent",
    desc: "Claude Code, Codex, or Gemini — use the subscription you already have. Symploc auto-detects it.",
  },
  {
    Icon: GitBranch,
    number: "03",
    title: "Plan your work",
    desc: "Describe what you want to build. Plan mode breaks it down, you approve, agents execute step by step.",
  },
  {
    Icon: Rocket,
    number: "04",
    title: "Ship with one click",
    desc: "Your project gets a full cloud environment — Docker, databases, HTTPS. One click to deploy live. No infra to manage.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-stone-50/50 dark:bg-stone-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-accent mb-3">Up and running in 2 minutes</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight">
            How it works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <step.Icon size={20} strokeWidth={1.5} className="text-brand-accent" />
              </div>
              <div className="text-xs font-bold text-brand-accent mb-2">{step.number}</div>
              <h3 className="text-base font-semibold text-brand-primary dark:text-stone-100 mb-2">{step.title}</h3>
              <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
