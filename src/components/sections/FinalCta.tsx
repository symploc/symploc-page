"use client";

import { WindowsIcon, AppleIcon, LinuxIcon } from "@/components/ui/OsIcons";
import { useDownloadLinks } from "@/components/useDownloadLinks";

const platformConfig = {
  windows: { label: "Download for Windows", Icon: WindowsIcon },
  mac: { label: "Download for Mac", Icon: AppleIcon },
  linux: { label: "Download for Linux", Icon: LinuxIcon },
} as const;

export function FinalCta() {
  const dl = useDownloadLinks();

  const urlFor = (os: string) => os === "mac" ? dl.mac : os === "linux" ? dl.linux : dl.win;
  const primaryCfg = platformConfig[dl.os];
  const others = (Object.keys(platformConfig) as Array<keyof typeof platformConfig>).filter((k) => k !== dl.os);

  return (
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
        <div className="flex flex-col items-center gap-4">
          <a
            href={urlFor(dl.os)}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-accent text-white font-semibold text-base hover:bg-brand-accent-hover transition-colors shadow-lg shadow-brand-accent/20"
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
      </div>
    </section>
  );
}
