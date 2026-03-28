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
  purple: "#A78BFA",
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

// Scene 1: The problem
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your codebase grew.<br />
            <span style={{ color: C.accent }}>Your understanding didn&apos;t.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            50 files became 500. New hires take weeks to onboard.<br />
            Even you forgot how half of it connects.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: What if you could see it
function Scene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            SYSTEM VISUALIZATION
          </p>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            See your entire project.<br />
            <span style={{ color: C.green }}>At a glance.</span>
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 20, maxWidth: 550, lineHeight: 1.5 }}>
            Symploc reads your code and generates<br />
            a visual map of your architecture — automatically.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// A graph node
function GraphNode({ label, type, x, y, delay }: {
  label: string; type: "api" | "model" | "service" | "page" | "middleware"; x: number; y: number; delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(progress, [0, 1], [0.5, 1], { extrapolateRight: "clamp" });

  const colors = {
    api: C.accent,
    model: C.blue,
    service: C.green,
    page: C.purple,
    middleware: C.amber,
  };

  return (
    <div style={{
      position: "absolute", left: x, top: y, opacity,
      transform: `scale(${scale})`, transformOrigin: "center",
    }}>
      <div style={{
        padding: "10px 16px", borderRadius: 10, background: C.surface,
        border: `2px solid ${colors[type]}`, whiteSpace: "nowrap",
        boxShadow: `0 0 20px ${colors[type]}15`,
      }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: colors[type], letterSpacing: "0.05em", marginBottom: 2 }}>
          {type.toUpperCase()}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{label}</div>
      </div>
    </div>
  );
}

// Connection line between nodes
function Connection({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  const opacity = interpolate(progress, [0, 1], [0, 0.4], { extrapolateRight: "clamp" });

  return (
    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.secondary} strokeWidth={1.5} strokeDasharray="6 4" opacity={opacity} />
    </svg>
  );
}

// Scene 3: Graph building itself
function Scene3() {
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* Title */}
      <div style={{ position: "absolute", top: 30, left: 0, right: 0, textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent }}>
            YOUR PROJECT — VISUALIZED
          </p>
        </Appear>
      </div>

      {/* Graph area */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Connections first (behind nodes) */}
        <Connection x1={640} y1={160} x2={380} y2={280} delay={30} />
        <Connection x1={640} y1={160} x2={640} y2={280} delay={35} />
        <Connection x1={640} y1={160} x2={900} y2={280} delay={40} />
        <Connection x1={380} y1={320} x2={300} y2={430} delay={55} />
        <Connection x1={380} y1={320} x2={510} y2={430} delay={58} />
        <Connection x1={640} y1={320} x2={640} y2={430} delay={60} />
        <Connection x1={900} y1={320} x2={770} y2={430} delay={63} />
        <Connection x1={900} y1={320} x2={950} y2={430} delay={66} />
        <Connection x1={640} y1={470} x2={510} y2={560} delay={80} />
        <Connection x1={640} y1={470} x2={770} y2={560} delay={83} />

        {/* Layer 1: Entry points */}
        <GraphNode label="App Router" type="api" x={560} y={120} delay={10} />

        {/* Layer 2: Routes */}
        <GraphNode label="/auth" type="api" x={300} y={250} delay={25} />
        <GraphNode label="/billing" type="api" x={560} y={250} delay={30} />
        <GraphNode label="/dashboard" type="page" x={820} y={250} delay={35} />

        {/* Layer 3: Services + Middleware */}
        <GraphNode label="AuthService" type="service" x={220} y={400} delay={45} />
        <GraphNode label="JWT Middleware" type="middleware" x={430} y={400} delay={50} />
        <GraphNode label="StripeService" type="service" x={560} y={400} delay={55} />
        <GraphNode label="UserDashboard" type="page" x={700} y={400} delay={60} />
        <GraphNode label="Analytics" type="service" x={880} y={400} delay={65} />

        {/* Layer 4: Models */}
        <GraphNode label="User" type="model" x={430} y={530} delay={70} />
        <GraphNode label="Subscription" type="model" x={690} y={530} delay={75} />
      </div>

      {/* Legend */}
      <div style={{ position: "absolute", bottom: 30, left: 0, right: 0 }}>
        <Appear delay={85}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", fontSize: 12 }}>
            {[
              { label: "API Routes", color: C.accent },
              { label: "Services", color: C.green },
              { label: "Models", color: C.blue },
              { label: "Pages", color: C.purple },
              { label: "Middleware", color: C.amber },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: item.color }} />
                <span style={{ color: C.secondary }}>{item.label}</span>
              </div>
            ))}
          </div>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: Drill down with the agent
function Scene4() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            CLICK ANY NODE — THE AGENT EXPLAINS IT
          </p>
        </Appear>

        {/* Simulated click on AuthService */}
        <Appear delay={10}>
          <div style={{
            padding: "20px 24px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.green}30`, marginBottom: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 12, height: 12, borderRadius: 3, background: C.green }} />
              <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>AuthService</div>
              <div style={{ fontSize: 13, color: C.muted }}>src/services/auth.ts</div>
            </div>

            <div style={{ fontSize: 15, color: C.secondary, lineHeight: 1.7, marginBottom: 14 }}>
              Handles user registration, login, password hashing, and token generation. Used by /auth routes. Depends on User model and JWT middleware.
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 8, letterSpacing: "0.05em" }}>CONNECTIONS</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
              {["→ User model", "→ JWT Middleware", "← /auth/login", "← /auth/register"].map((conn) => (
                <div key={conn} style={{
                  padding: "5px 10px", borderRadius: 6, background: C.bg,
                  border: `1px solid ${C.border}`, fontSize: 12, color: C.secondary,
                }}>
                  {conn}
                </div>
              ))}
            </div>
          </div>
        </Appear>

        {/* Ask the agent */}
        <Appear delay={40}>
          <div style={{
            padding: "16px 20px", borderRadius: 14, background: C.accent,
            fontSize: 16, fontWeight: 500, color: "white", marginBottom: 12,
          }}>
            &quot;How does the auth flow work end to end?&quot;
          </div>
        </Appear>

        {frame > 60 && (
          <Appear delay={60}>
            <div style={{
              padding: "16px 20px", borderRadius: 14, background: C.surface,
              border: `1px solid ${C.border}`, fontSize: 15, color: C.secondary, lineHeight: 1.7,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 40 40"><rect x="5" y="5" width="22" height="22" rx="4" fill="white" /><circle cx="25" cy="25" r="10" fill="white" opacity="0.6" /></svg>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.muted }}>Symploc Agent</span>
              </div>
              The user submits credentials to <span style={{ color: C.text, fontWeight: 600 }}>/auth/login</span> → AuthService validates against the <span style={{ color: C.text, fontWeight: 600 }}>User model</span> → bcrypt compares password → JWT token generated via <span style={{ color: C.text, fontWeight: 600 }}>JWT Middleware</span> → returned to client. Session stored in httpOnly cookie.
            </div>
          </Appear>
        )}
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
            See the big picture.<br />
            Drill into any detail.<br />
            <span style={{ color: C.green }}>The agent explains the rest.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            Onboard new developers in minutes, not weeks.<br />
            Understand any codebase at a glance.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const SystemVizDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={140}><Scene1 /></Sequence>
      <Sequence from={140} durationInFrames={120}><Scene2 /></Sequence>
      <Sequence from={260} durationInFrames={200}><Scene3 /></Sequence>
      <Sequence from={460} durationInFrames={200}><Scene4 /></Sequence>
      <Sequence from={660} durationInFrames={140}><Scene5 /></Sequence>
    </AbsoluteFill>
  );
};
