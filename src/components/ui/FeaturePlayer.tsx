"use client";

import { Player } from "@remotion/player";

interface FeaturePlayerProps {
  component: React.ComponentType<Record<string, unknown>>;
  durationInFrames: number;
}

export function FeaturePlayer({ component, durationInFrames }: FeaturePlayerProps) {
  return (
    <div className="rounded-xl border border-stone-200/80 dark:border-stone-700 overflow-hidden">
      <Player
        component={component as React.ComponentType<Record<string, never>>}
        compositionWidth={1280}
        compositionHeight={720}
        durationInFrames={durationInFrames}
        fps={30}
        style={{ width: "100%" }}
        autoPlay
        loop
      />
    </div>
  );
}
