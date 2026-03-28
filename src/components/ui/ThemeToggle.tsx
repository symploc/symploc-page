"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ size = 16 }: { size?: number }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("symploc-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("symploc-theme", "light");
    }
  }

  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={toggle}
      className="relative inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 dark:hover:bg-stone-800 text-brand-muted dark:text-stone-400 hover:text-brand-primary dark:hover:text-stone-100"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={size} /> : <Moon size={size} />}
    </button>
  );
}
