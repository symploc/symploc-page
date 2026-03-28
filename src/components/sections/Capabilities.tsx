import { BrainCircuit, GitBranch, Layers, Network, Eye, Shield, Rocket, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const capabilities: Capability[] = [
  {
    Icon: BrainCircuit,
    title: "Super agent orchestration",
    desc: "Pick Gemini, Claude, or Codex as your agent brain. Symploc handles the rest — context, planning, tool delegation, and execution. Swap providers anytime.",
  },
  {
    Icon: Layers,
    title: "Session management, simplified",
    desc: "No more git worktree juggling. Symploc manages parallel sessions cleanly — switch between tasks, resume where you left off, without the terminal complexity.",
  },
  {
    Icon: Network,
    title: "Visual system maps",
    desc: "Auto-generated architecture diagrams, component graphs, and data flow visualizations — straight from your code. Understand any codebase at a glance.",
  },
  {
    Icon: Eye,
    title: "Code anyone can read",
    desc: "Symploc explains your system in plain language, generates documentation, and makes complex codebases navigable for non-engineers and new team members.",
  },
  {
    Icon: GitBranch,
    title: "Plan before you build",
    desc: "Comprehensive plan mode maps out architecture, file changes, and edge cases before any code is written. Review the plan, then let the agents execute.",
  },
  {
    Icon: Rocket,
    title: "Full cloud environment, zero config",
    desc: "Each project gets an isolated Linux runtime with Docker, databases, and your full stack — auto-provisioned. Git sync, bootstrap, HTTPS exposure, and terminal access out of the box.",
  },
  {
    Icon: Shield,
    title: "Fully local and private",
    desc: "The app runs on your machine. No cloud, no tracking, no account required. Your code and API keys never leave your desktop.",
  },
];

export function Capabilities() {
  return (
    <section className="py-32 bg-stone-50/50 dark:bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-accent mb-3">
            Everything you wish AI coding tools did better
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight">
            The missing layer
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="flex gap-4 bg-white dark:bg-stone-800 rounded-xl p-7 border border-stone-200/60 dark:border-stone-700"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <cap.Icon size={18} strokeWidth={1.5} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-primary dark:text-stone-100 mb-1.5">{cap.title}</h3>
                <p className="text-sm text-brand-secondary dark:text-stone-400 leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#download-windows"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors"
          >
            <Download size={14} />
            Download free and try it yourself
          </a>
        </div>
      </div>
    </section>
  );
}
