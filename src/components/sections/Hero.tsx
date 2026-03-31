"use client";

import { Shield, DollarSign } from "lucide-react";
import { HeroPlayer } from "@/components/ui/HeroPlayer";
import { WindowsIcon, AppleIcon, LinuxIcon } from "@/components/ui/OsIcons";
import { useDownloadLinks } from "@/components/useDownloadLinks";

const platformConfig = {
  windows: { label: "Download for Windows", Icon: WindowsIcon },
  mac: { label: "Download for Mac", Icon: AppleIcon },
  linux: { label: "Download for Linux", Icon: LinuxIcon },
} as const;

export function Hero() {
  const dl = useDownloadLinks();

  const urlFor = (os: string) => os === "mac" ? dl.mac : os === "linux" ? dl.linux : dl.win;
  const primaryCfg = platformConfig[dl.os];
  const others = (Object.keys(platformConfig) as Array<keyof typeof platformConfig>).filter((k) => k !== dl.os);

  return (
    <section className="relative pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Slogan */}
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-brand-accent mb-6">
            Plan. Build. Ship.
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit text-brand-primary dark:text-stone-50 leading-[1.1] tracking-tight mb-6">
            The AI product manager{" "}
            <span className="text-brand-accent">that ships for you</span>
          </h1>

          {/* SEO-only subtitle */}
          <p className="sr-only">
            A super agent that controls Claude Code, Codex, and Gemini — plans your work, manages sessions,
            visualizes your system, and deploys to a full cloud environment with one click. Free. Local. Uses the AI subscriptions you already have.
          </p>

          {/* Download CTAs */}
          <div className="flex flex-col items-center gap-4 mb-5">
            <a
              href={urlFor(dl.os)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
            >
              <primaryCfg.Icon size={18} />
              <span>{primaryCfg.label}</span>
            </a>

            <div className="flex items-center gap-4">
              {others.map((os) => {
                const cfg = platformConfig[os];
                return (
                  <a key={os} href={urlFor(os)} className="inline-flex items-center gap-2 text-sm text-brand-secondary dark:text-stone-400 hover:text-brand-accent transition-colors font-medium">
                    <cfg.Icon size={14} />
                    {cfg.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Trust signals — prominent but clean */}
          <div className="flex items-center justify-center gap-6 mt-2 mb-2">
            <div className="flex items-center gap-2">
              <DollarSign size={18} className="text-brand-primary dark:text-stone-200" />
              <span className="text-sm font-semibold text-brand-primary dark:text-stone-200">Free forever</span>
            </div>
            <span className="text-stone-300 dark:text-stone-600">·</span>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-brand-primary dark:text-stone-200" />
              <span className="text-sm font-semibold text-brand-primary dark:text-stone-200">Local-first & private</span>
            </div>
            <span className="text-stone-300 dark:text-stone-600">·</span>
            <span className="text-sm font-semibold text-brand-primary dark:text-stone-200">No account required</span>
          </div>

          {/* Works with row */}
          <div className="flex items-center justify-center gap-3 mt-8 mb-2 flex-wrap">
            <span className="text-xs text-brand-muted dark:text-stone-500">Orchestrates</span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {["Claude Code", "Codex", "Gemini CLI", "+ more"].map((name) => (
                <span
                  key={name}
                  className="px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-xs font-medium text-brand-primary dark:text-stone-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product screenshot — Remotion composition showing the real UI */}
        <div className="mt-16 max-w-5xl mx-auto">
          <HeroPlayer />
        </div>
      </div>
    </section>
  );
}
