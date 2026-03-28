import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export const HeroAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = spring({ frame, fps, config: { damping: 12 } }) * -20 + 20;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAF9F6", fontFamily: "Outfit, sans-serif" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        {/* Slogan */}
        <p style={{ fontSize: 18, fontWeight: 700, letterSpacing: "0.2em", color: "#C2553D", marginBottom: 24 }}>
          PLAN. BUILD. SHIP.
        </p>

        {/* Headline */}
        <h1 style={{ fontSize: 72, fontWeight: 700, color: "#1C1917", textAlign: "center", lineHeight: 1.1 }}>
          The AI product manager
          <br />
          <span style={{ color: "#C2553D" }}>that ships for you</span>
        </h1>
      </div>
    </AbsoluteFill>
  );
};
