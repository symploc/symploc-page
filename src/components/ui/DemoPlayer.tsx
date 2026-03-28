"use client";

import { Player } from "@remotion/player";
import { ProductDemo } from "@/remotion/compositions/ProductDemo";

export function DemoPlayer() {
  return (
    <div className="rounded-xl border border-stone-200/80 dark:border-stone-700 shadow-lg overflow-hidden">
      <Player
        component={ProductDemo}
        compositionWidth={1280}
        compositionHeight={720}
        durationInFrames={510}
        fps={30}
        style={{ width: "100%", borderRadius: "0.75rem" }}
        controls
        autoPlay
        loop
      />
    </div>
  );
}
