"use client";

import { useEffect, useState } from "react";
import { Shield, DollarSign } from "lucide-react";
import { HeroPlayer } from "@/components/ui/HeroPlayer";
import { WindowsIcon, AppleIcon } from "@/components/ui/OsIcons";

const downloads = {
  windows: { label: "Download for Windows", file: "#download-windows" },
  mac: { label: "Download for Mac", file: "#download-mac" },
};

type OS = keyof typeof downloads;

export function Hero() {
  const [detectedOS, setDetectedOS] = useState<OS>("windows");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mac")) setDetectedOS("mac");
  }, []);

  const primary = downloads[detectedOS];
  const other = detectedOS === "windows" ? downloads.mac : downloads.windows;

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
              href={primary.file}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
            >
              {detectedOS === "windows" ? <WindowsIcon size={18} /> : <AppleIcon size={18} />}
              <span>{primary.label}</span>
            </a>

            <a href={other.file} className="inline-flex items-center gap-2 text-sm text-brand-secondary dark:text-stone-400 hover:text-brand-accent transition-colors font-medium">
              {detectedOS === "windows" ? <AppleIcon size={14} /> : <WindowsIcon size={14} />}
              {other.label}
            </a>
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
