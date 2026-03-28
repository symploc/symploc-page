import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";

const C = {
  bg: "#1C1917",
  text: "#FAF9F6",
  muted: "#78716C",
  secondary: "#A8A29E",
  accent: "#C2553D",
  green: "#34D399",
  amber: "#FBBF24",
  red: "#F87171",
  surface: "#292524",
  border: "#3d3836",
  claude: "#D97757",
  codex: "#10A37F",
  gemini: "#4285F4",
};

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [30, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// Scene 1: You're the bottleneck
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            You have <span style={{ color: C.claude }}>Claude</span>,{" "}
            <span style={{ color: C.codex }}>Codex</span>,{" "}
            <span style={{ color: C.gemini }}>Gemini</span>.
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 24, color: C.secondary, marginTop: 28, lineHeight: 1.5 }}>
            But <span style={{ color: C.text, fontWeight: 600 }}>you&apos;re</span> still the one deciding<br />
            what to ask, when to switch, what goes where.
          </p>
        </Appear>
        <Appear delay={50}>
          <p style={{ fontSize: 20, color: C.accent, fontWeight: 600, marginTop: 20 }}>
            You became the project manager for your AI tools.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: What if you had a CTO
function Scene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <Appear>
          <p style={{ fontSize: 18, color: C.muted, marginBottom: 16 }}>What if instead of managing them...</p>
        </Appear>
        <Appear delay={15}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            You just said<br />
            <span style={{ color: C.accent }}>what you wanted built?</span>
          </h1>
        </Appear>
        <Appear delay={35}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            And an AI product manager figured out<br />
            the rest — automatically.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: Meet the super agent
function Scene3() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <div style={{
            width: 100, height: 100, borderRadius: 24, margin: "0 auto 24px",
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent}CC)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 60px ${C.accent}40`,
          }}>
            <svg width="48" height="48" viewBox="0 0 40 40"><rect x="5" y="5" width="22" height="22" rx="4" fill="white" /><circle cx="25" cy="25" r="10" fill="white" opacity="0.6" /></svg>
          </div>
        </Appear>
        <Appear delay={12}>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 12 }}>
            SUPER AGENT
          </p>
        </Appear>
        <Appear delay={20}>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, fontFamily: "Outfit, sans-serif", lineHeight: 1.2 }}>
            You give the goal.<br />
            It handles everything.
          </h1>
        </Appear>
        <Appear delay={38}>
          <p style={{ fontSize: 20, color: C.secondary, marginTop: 16, maxWidth: 520, lineHeight: 1.5 }}>
            Reads your codebase. Breaks down the work.<br />
            Picks the best AI for each part. Executes.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: The flow — one command, full delegation
function Scene4() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, width: "100%" }}>
        {/* What you say */}
        <Appear>
          <div style={{
            padding: "16px 24px", borderRadius: 14, background: C.accent,
            fontSize: 20, fontWeight: 600, color: "white", textAlign: "center", marginBottom: 28,
          }}>
            &quot;Add authentication, OAuth, and write tests for everything&quot;
          </div>
        </Appear>

        {/* Arrow */}
        <Appear delay={15}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 14, color: C.muted, fontWeight: 600, letterSpacing: "0.1em" }}>SUPER AGENT DECIDES</div>
            <div style={{ fontSize: 28, color: C.muted, marginTop: 4 }}>↓</div>
          </div>
        </Appear>

        {/* Delegation rows */}
        <Appear delay={25}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px 24px", borderRadius: 14, marginBottom: 10,
            background: frame > 80 ? "rgba(52, 211, 153, 0.04)" : C.surface,
            border: `1.5px solid ${frame > 80 ? "rgba(52, 211, 153, 0.15)" : C.border}`,
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: frame > 80 ? C.green : C.text }}>Refactor auth + add JWT</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>&quot;Deep refactor — needs to understand the full codebase&quot;</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, color: C.muted }}>→</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: C.claude }}>Claude Code</span>
              {frame > 80 && <span style={{ fontSize: 18, color: C.green, marginLeft: 4 }}>✓</span>}
            </div>
          </div>
        </Appear>

        <Appear delay={40}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px 24px", borderRadius: 14, marginBottom: 10,
            background: frame > 105 ? "rgba(52, 211, 153, 0.04)" : C.surface,
            border: `1.5px solid ${frame > 105 ? "rgba(52, 211, 153, 0.15)" : C.border}`,
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: frame > 105 ? C.green : C.text }}>Add Google + GitHub OAuth</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>&quot;Standard boilerplate — fast generation is enough&quot;</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, color: C.muted }}>→</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: C.codex }}>Codex</span>
              {frame > 105 && <span style={{ fontSize: 18, color: C.green, marginLeft: 4 }}>✓</span>}
            </div>
          </div>
        </Appear>

        <Appear delay={55}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px 24px", borderRadius: 14, marginBottom: 10,
            background: frame > 130 ? "rgba(52, 211, 153, 0.04)" : C.surface,
            border: `1.5px solid ${frame > 130 ? "rgba(52, 211, 153, 0.15)" : C.border}`,
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 600, color: frame > 130 ? C.green : C.text }}>Write integration tests</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>&quot;Multi-file test coverage — needs wide context window&quot;</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 15, color: C.muted }}>→</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: C.gemini }}>Gemini</span>
              {frame > 130 && <span style={{ fontSize: 18, color: C.green, marginLeft: 4 }}>✓</span>}
            </div>
          </div>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 5: The punchline
function Scene5() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            You said <span style={{ color: C.accent }}>one sentence</span>.<br />
            Three AI agents worked in parallel.<br />
            <span style={{ color: C.green }}>The feature shipped.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            You don&apos;t manage AI tools anymore.<br />
            The super agent manages them for you.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const SuperAgentDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={150}><Scene1 /></Sequence>
      <Sequence from={150} durationInFrames={130}><Scene2 /></Sequence>
      <Sequence from={280} durationInFrames={140}><Scene3 /></Sequence>
      <Sequence from={420} durationInFrames={250}><Scene4 /></Sequence>
      <Sequence from={670} durationInFrames={150}><Scene5 /></Sequence>
    </AbsoluteFill>
  );
};
