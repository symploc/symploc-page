"use client";

import { Player } from "@remotion/player";
import { HeroScreenshot } from "@/remotion/compositions/HeroScreenshot";

export function HeroPlayer() {
  return (
    <div className="rounded-xl border border-stone-200/80 dark:border-stone-700 shadow-2xl shadow-stone-900/5 overflow-hidden">
      <Player
        component={HeroScreenshot}
        compositionWidth={1280}
        compositionHeight={720}
        durationInFrames={1180}
        fps={30}
        style={{ width: "100%" }}
        autoPlay
        loop
      />
    </div>
  );
}
