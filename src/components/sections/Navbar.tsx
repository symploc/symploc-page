"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useDownloadLinks } from "@/components/useDownloadLinks";

const navItems = [
  { label: "Features", href: "/#what-it-does" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dl = useDownloadLinks();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 dark:bg-stone-900/80 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo size={28} />
            <span className="text-lg font-bold tracking-tight text-brand-primary dark:text-stone-100">
              Symploc
            </span>
            <span className="hidden sm:inline text-[10px] font-bold tracking-[0.15em] uppercase text-brand-muted dark:text-stone-500 ml-1">
              Plan. Build. Ship.
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-brand-secondary dark:text-stone-400 hover:text-brand-primary dark:hover:text-stone-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/symploc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-stone-800 text-brand-muted dark:text-stone-400 hover:text-brand-primary dark:hover:text-stone-100"
              aria-label="GitHub"
            >
              <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <ThemeToggle size={16} />
            <a
              href={dl.primary}
              className="ml-1 inline-flex items-center gap-2 bg-brand-accent text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-brand-accent-hover transition-colors"
            >
              <Download size={14} />
              Download
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle size={16} />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-primary dark:text-stone-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-stone-200/60 dark:border-stone-800 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-brand-primary dark:text-stone-100 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={dl.primary}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-accent text-white py-3 rounded-full font-medium"
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
