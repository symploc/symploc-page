import { Hero } from "@/components/sections/Hero";
import { WhatItDoes } from "@/components/sections/WhatItDoes";
import { Services } from "@/components/sections/Services";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItDoes />
      <Services />
      <FinalCta />
    </>
  );
}
