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
    "Free desktop app. An AI super agent that controls Claude Code, Codex, and Gemini. We also build for clients: web, mobile, desktop, and AI engineering services. Plan. Build. Ship.",
  keywords:
    "AI product manager, super agent, Claude Code, Codex, Gemini CLI, plan mode, system visualization, session management, one-click deploy, local-first AI, free developer tool, Symploc, software development agency, web development, mobile app development, desktop app development, AI consulting, AI engineering",
  openGraph: {
    title: "Symploc | The AI product manager that ships for you",
    description:
      "Free desktop app and engineering studio. AI super agent for Claude Code, Codex, and Gemini, plus a team that builds web, mobile, desktop, and AI for clients.",
    url: "https://symploc.com",
    siteName: "Symploc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Symploc | The AI product manager that ships for you",
    description:
      "Free desktop app. Engineering studio. Plan. Build. Ship.",
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
