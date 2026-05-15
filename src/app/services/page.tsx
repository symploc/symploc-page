import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Services & Consulting | Symploc",
  description:
    "Symploc is also an engineering team. We take consulting and full project work across web, mobile, desktop, and AI — and ship faster because we use the tools we build.",
  openGraph: {
    title: "Services & Consulting | Symploc",
    description:
      "Web, mobile, desktop, and AI engineering. Built by the team behind Symploc.",
    url: "https://symploc.com/services",
    siteName: "Symploc",
    type: "website",
  },
};

export default function Services() {
  return <ServicesPage />;
}
