import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";

const C = {
  bg: "#1C1917",
  text: "#FAF9F6",
  muted: "#78716C",
  secondary: "#A8A29E",
  accent: "#C2553D",
  green: "#34D399",
  amber: "#FBBF24",
  surface: "#292524",
  border: "#3d3836",
  linear: "#5E6AD2",
  jira: "#0052CC",
  github: "#F0F6FC",
  notion: "#FFFFFF",
  slack: "#4A154B",
};

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [30, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// Scene 1: Your tools are scattered
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your tickets are in Linear.<br />
            Your code is in GitHub.<br />
            <span style={{ color: C.accent }}>Your AI doesn&apos;t know either.</span>
          </h1>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: Symploc connects them
function Scene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            INTEGRATIONS
          </p>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            Symploc connects<br />
            <span style={{ color: C.green }}>where your work lives.</span>
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 20, maxWidth: 520, lineHeight: 1.5 }}>
            Your backlog, your repos, your docs —<br />
            all connected to the super agent.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: Integration cards
function Scene3() {
  const integrations = [
    {
      name: "Linear",
      desc: "Sync issues, track sprints, auto-update ticket status when the agent ships a feature",
      color: C.linear,
      delay: 10,
    },
    {
      name: "Jira",
      desc: "Import epics, stories, and bugs — the agent picks up tickets and builds them",
      color: C.jira,
      delay: 26,
    },
    {
      name: "GitHub",
      desc: "Pull PRs, manage branches, push code — the agent commits directly to your repos",
      color: C.github,
      delay: 42,
    },
    {
      name: "Notion",
      desc: "Read specs, pull requirements, sync documentation — the agent knows your product",
      color: C.notion,
      delay: 58,
    },
    {
      name: "Slack",
      desc: "Get notified when features ship, sprints complete, or the agent needs your input",
      color: C.slack,
      delay: 74,
    },
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 650, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            CONNECTED OUT OF THE BOX
          </p>
        </Appear>

        {integrations.map((int) => (
          <Appear key={int.name} delay={int.delay}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "18px 22px", borderRadius: 14, marginBottom: 10,
              background: C.surface, border: `1.5px solid ${C.border}`,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 10, background: int.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 800, color: int.color === C.github || int.color === C.notion ? "#1C1917" : "white",
                flexShrink: 0,
              }}>
                {int.name[0]}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{int.name}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 3 }}>{int.desc}</div>
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: How it works together
function Scene4() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 650, width: "100%", textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, marginBottom: 28 }}>
            THE FULL LOOP
          </p>
        </Appear>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" as const }}>
          {[
            { label: "Linear ticket", sub: "created", delay: 10 },
            { label: "→", sub: "", delay: 18 },
            { label: "Agent picks it up", sub: "automatically", delay: 22 },
            { label: "→", sub: "", delay: 30 },
            { label: "Code pushed", sub: "to GitHub", delay: 34 },
            { label: "→", sub: "", delay: 42 },
            { label: "Ticket marked done", sub: "in Linear", delay: 46 },
          ].map((step, i) => (
            <Appear key={i} delay={step.delay}>
              {step.label === "→" ? (
                <span style={{ fontSize: 24, color: C.muted }}>→</span>
              ) : (
                <div style={{
                  padding: "14px 18px", borderRadius: 12, background: C.surface,
                  border: `1.5px solid ${C.border}`, textAlign: "center",
                }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{step.label}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{step.sub}</div>
                </div>
              )}
            </Appear>
          ))}
        </div>

        <Appear delay={60}>
          <p style={{ fontSize: 20, color: C.green, fontWeight: 700, marginTop: 32 }}>
            Zero manual work. Fully automated.
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
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your tools stay the same.<br />
            <span style={{ color: C.green }}>Symploc connects them.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            No migration. No new workflow.<br />
            The agent just works with what you already use.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const IntegrationsDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={110}><Scene1 /></Sequence>
      <Sequence from={110} durationInFrames={110}><Scene2 /></Sequence>
      <Sequence from={220} durationInFrames={180}><Scene3 /></Sequence>
      <Sequence from={400} durationInFrames={150}><Scene4 /></Sequence>
      <Sequence from={550} durationInFrames={120}><Scene5 /></Sequence>
    </AbsoluteFill>
  );
};
