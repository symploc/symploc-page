import {
  Brain,
  Sparkles,
  Bot,
  ArrowRight,
  Zap,
  Code2,
  FileText,
  ListChecks,
  MessageSquare,
  CreditCard,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface Agent {
  name: string;
  desc: string;
  Icon: LucideIcon;
}

const agents: Agent[] = [
  { name: "Claude Code", desc: "Anthropic's coding agent — best for complex refactors and architecture", Icon: Brain },
  { name: "OpenAI Codex", desc: "OpenAI's code generation — fast for boilerplate and prototyping", Icon: Sparkles },
  { name: "Gemini CLI", desc: "Google's AI — strong at multi-file reasoning and large codebases", Icon: Bot },
];

const tools = [
  { name: "Linear", Icon: ListChecks },
  { name: "GitHub", Icon: Code2 },
  { name: "Notion", Icon: FileText },
  { name: "Slack", Icon: MessageSquare },
  { name: "Stripe", Icon: CreditCard },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-brand-accent mb-3">Bring your own AI</p>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
            Pick your agent. Symploc runs it.
          </h2>
          <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed">
            Use the AI subscriptions you already pay for. Symploc acts as the product manager on top — you choose which
            agent does the work.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="relative rounded-2xl border-2 border-brand-accent/30 bg-brand-accent/5 dark:bg-brand-accent/5 p-8 mb-4">
            <div className="absolute -top-3 left-6 px-3 py-0.5 bg-brand-accent text-white text-xs font-bold rounded-full">
              SUPER AGENT
            </div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Logo size={24} />
              <span className="text-lg font-bold text-brand-primary dark:text-stone-100">Symploc</span>
              <span className="text-sm text-brand-secondary dark:text-stone-400">— plans, orchestrates, visualizes</span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <div key={agent.name} className="bg-white dark:bg-stone-800 rounded-xl p-5 border border-stone-200/80 dark:border-stone-700 text-center">
                  <div className="w-10 h-10 rounded-lg bg-stone-50 dark:bg-stone-700 flex items-center justify-center mx-auto mb-3">
                    <agent.Icon size={20} strokeWidth={1.5} className="text-brand-primary dark:text-stone-200" />
                  </div>
                  <h4 className="text-sm font-semibold text-brand-primary dark:text-stone-100 mb-1">{agent.name}</h4>
                  <p className="text-xs text-brand-secondary dark:text-stone-400 leading-relaxed">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center my-2">
            <div className="flex flex-col items-center gap-1 text-brand-muted dark:text-stone-500">
              <span className="text-xs font-medium">connects to your tools via MCP</span>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                <path d="M8 0v20m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Tools row */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {tools.map((tool) => (
              <div key={tool.name} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700">
                <tool.Icon size={16} strokeWidth={1.5} className="text-brand-primary dark:text-stone-300" />
                <span className="text-sm font-medium text-brand-primary dark:text-stone-200">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-brand-muted dark:text-stone-500">
            More agents and tools added every week —{" "}
            <a href="/connect" className="text-brand-accent hover:underline font-medium inline-flex items-center gap-1">
              request yours <ArrowRight size={12} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
