"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { BrainCircuit, GitBranch, Network, Rocket, Smartphone, Plug, type LucideIcon } from "lucide-react";
import { Player } from "@remotion/player";
import { SuperAgentDemo } from "@/remotion/compositions/SuperAgentDemo";
import { PlanModeDemo } from "@/remotion/compositions/PlanModeDemo";
import { SystemVizDemo } from "@/remotion/compositions/SystemVizDemo";
import { DeployDemo } from "@/remotion/compositions/DeployDemo";
import { MobileDemo } from "@/remotion/compositions/MobileDemo";
import { IntegrationsDemo } from "@/remotion/compositions/IntegrationsDemo";

interface Feature {
  key: string;
  label: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  video?: { component: React.ComponentType<Record<string, never>>; duration: number };
  screenshotHint?: string;
}

const features: Feature[] = [
  {
    key: "super-agent",
    label: "Super Agent",
    title: "A product manager that controls your coding agents.",
    desc: "Claude Code, Codex, and Gemini are powerful — but they're tools, not strategists. Symploc sits above them as a super agent that understands your project, breaks down goals into plans, and delegates work to the right AI. It doesn't just execute commands. It decides what to execute, in what order, and why.",
    Icon: BrainCircuit,
    video: { component: SuperAgentDemo as unknown as React.ComponentType<Record<string, never>>, duration: 820 },
  },
  {
    key: "sessions",
    label: "Sessions",
    title: "Work on multiple features at once. No worktrees.",
    desc: "Each task gets its own isolated session — its own branch, its own file changes, its own AI context, its own plan. Switch between features instantly. No git worktree complexity, no conflicting changes, no context loss. The super agent manages it all.",
    Icon: GitBranch,
    video: { component: PlanModeDemo as unknown as React.ComponentType<Record<string, never>>, duration: 930 },
  },
  {
    key: "integrations",
    label: "Integrations",
    title: "Linear, Jira, GitHub, Notion, Slack — connected.",
    desc: "The super agent pulls tickets from your issue tracker, pushes code to your repos, reads specs from your docs, and notifies your team. No migration, no new workflow — it works with what you already use.",
    Icon: Plug,
    video: { component: IntegrationsDemo as unknown as React.ComponentType<Record<string, never>>, duration: 670 },
  },
  {
    key: "system-viz",
    label: "System Visualization",
    title: "See your codebase. Graphically. Finally.",
    desc: "Symploc reads your code and generates a visual map of your architecture — routes, services, models, and how they connect. Click any node and the AI agent explains it in detail. Onboard new developers in minutes, not weeks.",
    Icon: Network,
    video: { component: SystemVizDemo as unknown as React.ComponentType<Record<string, never>>, duration: 800 },
  },
  {
    key: "deploy",
    label: "One-Click Deploy",
    title: "A full cloud environment. One click to deploy.",
    desc: "Every project gets an isolated Linux environment with Docker, PostgreSQL, MongoDB, Node.js, and Python — provisioned automatically. Connect your Git repo, and Symploc bootstraps, builds, and runs it. When you're ready, one click exposes it live via HTTPS. No Dockerfiles to write, no CI/CD to configure, no infra to manage.",
    Icon: Rocket,
    video: { component: DeployDemo as unknown as React.ComponentType<Record<string, never>>, duration: 930 },
  },
  {
    key: "mobile",
    label: "Mobile App",
    title: "Your dev environment, in your pocket.",
    desc: "A mobile app that connects to your desktop environment while you're on the go. Review plans, approve deployments, track session progress, get notified, and talk to your agent — from anywhere. Coming soon.",
    Icon: Smartphone,
    video: { component: MobileDemo as unknown as React.ComponentType<Record<string, never>>, duration: 700 },
  },
];

export function WhatItDoes() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const feature = features[active];

  // Duration per tab in ms (video duration in frames / 30fps * 1000)
  const durations = features.map((f) => f.video ? (f.video.duration / 30) * 1000 : 8000);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % features.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, durations[active]);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused, goNext, durations]);

  function handleTabClick(i: number) {
    setActive(i);
    setPaused(true);
    // Resume auto-rotation after one full cycle of the clicked tab
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPaused(false), durations[i]);
  }

  return (
    <section id="what-it-does">
      <div className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-accent mb-3">
            Not another AI tool. The layer above them.
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold font-outfit text-brand-primary dark:text-stone-50 tracking-tight mb-4">
            Claude Code is the hands. Symploc is the brain.
          </h2>
          <p className="text-lg text-brand-secondary dark:text-stone-400 leading-relaxed">
            AI coding tools can already connect to GitHub, Linear, and Notion. What they can&apos;t do is think
            strategically about your project. Symploc adds the product management layer.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {features.map((f, i) => (
            <button
              key={f.key}
              onClick={() => handleTabClick(i)}
              className={`
                relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 overflow-hidden
                ${i === active
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/20"
                  : "bg-stone-100 dark:bg-stone-800 text-brand-secondary dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200/80 dark:border-stone-700"
                }
              `}
            >
              {i === active && (
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-white/40"
                  style={{ animation: `progress ${durations[i]}ms linear forwards` }}
                />
              )}
              <f.Icon size={15} strokeWidth={1.5} />
              {f.label}
            </button>
          ))}
        </div>

        {/* Video / Visual area — full width, large */}
        <div className="mb-12">
          {feature.video ? (
            <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700 overflow-hidden shadow-lg">
              <Player
                key={feature.key}
                component={feature.video.component}
                compositionWidth={1280}
                compositionHeight={720}
                durationInFrames={feature.video.duration}
                fps={30}
                style={{ width: "100%" }}
                autoPlay
                loop
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-stone-200/80 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 overflow-hidden">
              <div className="aspect-video flex flex-col items-center justify-center text-brand-muted p-8">
                <div className="w-16 h-16 rounded-xl bg-stone-200 dark:bg-stone-700 flex items-center justify-center mb-4">
                  <feature.Icon size={28} className="text-stone-400 dark:text-stone-500" />
                </div>
                <p className="text-base font-medium text-center">{feature.screenshotHint}</p>
                <p className="text-sm mt-2 text-stone-400 text-center">Video coming soon</p>
              </div>
            </div>
          )}
        </div>

        {/* SEO-only: text in DOM for crawlers, visually hidden */}
        <div className="sr-only">
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      </div>
      </div>
    </section>
  );
}
