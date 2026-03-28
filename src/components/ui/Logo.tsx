export function Logo({ size = 32, variant = "default" }: { size?: number; variant?: "default" | "light" }) {
  if (variant === "light") {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="white" />
        <circle cx="25" cy="25" r="10" fill="#C2553D" opacity="0.9" />
        <path d="M17 19V17H19" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default: dark square in light mode, light square in dark mode
  return (
    <>
      {/* Light mode */}
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="block dark:hidden">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="#1C1917" />
        <circle cx="25" cy="25" r="10" fill="#C2553D" opacity="0.9" />
        <path d="M17 19V17H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {/* Dark mode */}
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block">
        <rect x="5" y="5" width="22" height="22" rx="4" fill="#FAF9F6" />
        <circle cx="25" cy="25" r="10" fill="#C2553D" opacity="0.9" />
        <path d="M17 19V17H19" stroke="#1C1917" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
}
