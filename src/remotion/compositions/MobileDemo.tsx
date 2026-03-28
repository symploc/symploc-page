import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";

const C = {
  bg: "#1C1917",
  text: "#FAF9F6",
  muted: "#78716C",
  secondary: "#A8A29E",
  accent: "#C2553D",
  green: "#34D399",
  amber: "#FBBF24",
  blue: "#60A5FA",
  surface: "#292524",
  border: "#3d3836",
};

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [30, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// Scene 1: You're not always at your desk
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your agents keep building.<br />
            <span style={{ color: C.accent }}>Even when you walk away.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            But how do you know what&apos;s happening<br />
            when you&apos;re not at your desk?
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: The mobile app
function Scene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 99,
            background: "rgba(251, 191, 36, 0.1)", border: "1.5px solid rgba(251, 191, 36, 0.25)",
            marginBottom: 24,
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.amber }}>COMING SOON</span>
          </div>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            Your dev environment.<br />
            <span style={{ color: C.green }}>In your pocket.</span>
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 20, maxWidth: 520, lineHeight: 1.5 }}>
            A mobile app that connects to your desktop.<br />
            Stay in the loop from anywhere.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: What you can do
function Scene3() {
  const frame = useCurrentFrame();

  const features = [
    { icon: "📋", title: "Review plans", desc: "See what the agent is planning before it executes", delay: 10 },
    { icon: "✅", title: "Approve deployments", desc: "One tap to deploy — or reject and add feedback", delay: 28 },
    { icon: "📊", title: "Track session progress", desc: "See which sessions are building, done, or waiting", delay: 46 },
    { icon: "🔔", title: "Get notified", desc: "Sprint done? Build failed? Know instantly.", delay: 64 },
    { icon: "💬", title: "Talk to your agent", desc: "Ask questions, give instructions — from your phone", delay: 82 },
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            WHAT YOU CAN DO FROM YOUR PHONE
          </p>
        </Appear>

        {features.map((f) => (
          <Appear key={f.title} delay={f.delay}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 22px", borderRadius: 14, marginBottom: 8,
              background: C.surface, border: `1.5px solid ${C.border}`,
            }}>
              <div style={{ fontSize: 24, width: 36, textAlign: "center" }}>{f.icon}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{f.desc}</div>
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: The flow — desktop + mobile
function Scene4() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, width: "100%", textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, marginBottom: 28 }}>
            SEAMLESS
          </p>
        </Appear>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40 }}>
          {/* Desktop */}
          <Appear delay={10}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 160, height: 100, borderRadius: 12, background: C.surface,
                border: `1.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 12,
              }}>
                <span style={{ fontSize: 36 }}>🖥️</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>Desktop</div>
              <div style={{ fontSize: 12, color: C.muted }}>Agents build your code</div>
            </div>
          </Appear>

          {/* Connection */}
          <Appear delay={25}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ fontSize: 24, color: C.green }}>⇄</div>
              <div style={{ fontSize: 11, color: C.muted, fontWeight: 600 }}>SYNCED</div>
            </div>
          </Appear>

          {/* Mobile */}
          <Appear delay={18}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 100, height: 140, borderRadius: 16, background: C.surface,
                border: `1.5px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 12,
              }}>
                <span style={{ fontSize: 36 }}>📱</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>Mobile</div>
              <div style={{ fontSize: 12, color: C.muted }}>You stay in control</div>
            </div>
          </Appear>
        </div>

        <Appear delay={40}>
          <p style={{ fontSize: 18, color: C.secondary, marginTop: 32, lineHeight: 1.5 }}>
            Start a task on desktop. Review it on the train.<br />
            Approve the deploy from a coffee shop.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 5: Closing
function Scene5() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <Appear>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 20px", borderRadius: 99,
            background: "rgba(251, 191, 36, 0.1)", border: "1.5px solid rgba(251, 191, 36, 0.25)",
            marginBottom: 24,
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.amber }}>COMING SOON</span>
          </div>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your AI PM.<br />
            Desktop and mobile.<br />
            <span style={{ color: C.green }}>Always in sync.</span>
          </h1>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const MobileDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={130}><Scene1 /></Sequence>
      <Sequence from={130} durationInFrames={120}><Scene2 /></Sequence>
      <Sequence from={250} durationInFrames={180}><Scene3 /></Sequence>
      <Sequence from={430} durationInFrames={140}><Scene4 /></Sequence>
      <Sequence from={570} durationInFrames={130}><Scene5 /></Sequence>
    </AbsoluteFill>
  );
};
