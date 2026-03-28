import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Symploc | The AI product manager that ships for you",
  description:
    "Free desktop app — an AI super agent that controls Claude Code, Codex, and Gemini. Plan mode, session management, system visualization, one-click deploy. Local-first, privacy-first.",
  keywords:
    "AI product manager, super agent, Claude Code, Codex, Gemini CLI, plan mode, system visualization, session management, one-click deploy, local-first AI, free developer tool, Symploc",
  openGraph: {
    title: "Symploc | The AI product manager that ships for you",
    description:
      "Free desktop app — an AI super agent that controls Claude Code, Codex, and Gemini. Plan mode, session management, system visualization, one-click deploy.",
    url: "https://symploc.com",
    siteName: "Symploc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Symploc | The AI product manager that ships for you",
    description:
      "Free desktop app — an AI super agent that controls Claude Code, Codex, and Gemini. Plan. Build. Ship.",
  },
};

export const viewport = {
  themeColor: "#C2553D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var t = localStorage.getItem('symploc-theme');
              if (t === 'dark') document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className="min-h-screen bg-brand-light dark:bg-stone-950 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
