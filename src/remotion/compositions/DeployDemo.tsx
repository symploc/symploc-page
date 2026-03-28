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

// Scene 1: The pain
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your code works locally.<br />
            <span style={{ color: C.accent }}>Now deploy it.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            Write a Dockerfile. Set up CI/CD. Configure DNS.<br />
            Manage SSL. Debug port conflicts. Fix environment variables.
          </p>
        </Appear>
        <Appear delay={50}>
          <p style={{ fontSize: 20, color: C.accent, fontWeight: 600, marginTop: 20 }}>
            That&apos;s a whole day gone. For every project.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: What if one click
function Scene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            ONE-CLICK DEPLOY
          </p>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            Your code to production.<br />
            <span style={{ color: C.green }}>One click.</span>
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 20, maxWidth: 550, lineHeight: 1.5 }}>
            Symploc gives every project a full cloud environment.<br />
            No Dockerfiles. No CI/CD. No infra to manage.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: What you get — the environment
function Scene3() {
  const frame = useCurrentFrame();

  const stack = [
    { label: "Linux Runtime", detail: "Isolated container with full OS", icon: "🖥️", delay: 10 },
    { label: "Docker", detail: "Multi-container apps out of the box", icon: "🐳", delay: 22 },
    { label: "PostgreSQL + MongoDB", detail: "Databases provisioned automatically", icon: "🗄️", delay: 34 },
    { label: "Node.js + Python", detail: "Your stack, pre-installed", icon: "⚡", delay: 46 },
    { label: "Git Sync", detail: "Auto-clone, auto-update from your repo", icon: "🔄", delay: 58 },
    { label: "HTTPS Exposure", detail: "Public URL with SSL — instant", icon: "🔒", delay: 70 },
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 650, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            EVERY PROJECT GETS
          </p>
        </Appear>

        {stack.map((item) => (
          <Appear key={item.label} delay={item.delay}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "16px 22px", borderRadius: 14, marginBottom: 8,
              background: C.surface, border: `1.5px solid ${C.border}`,
            }}>
              <div style={{ fontSize: 24, width: 36, textAlign: "center" }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{item.label}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{item.detail}</div>
              </div>
              <div style={{ flex: 1 }} />
              <span style={{ fontSize: 14, color: C.green, fontWeight: 600 }}>Included</span>
            </div>
          </Appear>
        ))}
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: The deploy flow
function Scene4() {
  const frame = useCurrentFrame();

  const steps = [
    { label: "Connect your repo", status: "done" as const, delay: 10 },
    { label: "Bootstrap & install dependencies", status: (frame > 55 ? "done" : frame > 30 ? "running" : "waiting") as "done" | "running" | "waiting", delay: 25 },
    { label: "Build your project", status: (frame > 80 ? "done" : frame > 55 ? "running" : "waiting") as "done" | "running" | "waiting", delay: 45 },
    { label: "Start services", status: (frame > 100 ? "done" : frame > 80 ? "running" : "waiting") as "done" | "running" | "waiting", delay: 65 },
    { label: "Expose via HTTPS", status: (frame > 120 ? "done" : frame > 100 ? "running" : "waiting") as "done" | "running" | "waiting", delay: 85 },
  ];

  const statusColors = { done: C.green, running: C.amber, waiting: C.muted };
  const statusIcons = { done: "✓", running: "●", waiting: "○" };

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, marginBottom: 28 }}>
            YOU CLICK DEPLOY. WE HANDLE THE REST.
          </p>
        </Appear>

        {steps.map((step) => (
          <Appear key={step.label} delay={step.delay}>
            <div style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "16px 22px", borderRadius: 14, marginBottom: 8,
              background: step.status === "done" ? "rgba(52, 211, 153, 0.04)" : C.surface,
              border: `1.5px solid ${step.status === "done" ? "rgba(52, 211, 153, 0.15)" : step.status === "running" ? "rgba(251, 191, 36, 0.2)" : C.border}`,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: step.status === "done" ? C.green : step.status === "running" ? C.amber : "transparent",
                border: `2px solid ${statusColors[step.status]}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: step.status === "waiting" ? C.muted : "white",
              }}>
                {statusIcons[step.status]}
              </div>
              <div style={{ fontSize: 18, fontWeight: 600, color: step.status === "done" ? C.green : C.text }}>
                {step.label}
              </div>
            </div>
          </Appear>
        ))}

        {/* Live URL */}
        {frame > 135 && (
          <Appear delay={135}>
            <div style={{
              marginTop: 20, padding: "18px 24px", borderRadius: 14,
              background: "rgba(52, 211, 153, 0.06)", border: "1.5px solid rgba(52, 211, 153, 0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            }}>
              <div style={{ width: 12, height: 12, borderRadius: 99, background: C.green }} />
              <span style={{ fontSize: 20, fontWeight: 700, color: C.green }}>Live at</span>
              <span style={{ fontSize: 20, fontFamily: "monospace", color: C.text, fontWeight: 600 }}>
                your-app.symploc.dev
              </span>
            </div>
          </Appear>
        )}
      </div>
    </AbsoluteFill>
  );
}

// Scene 5: Terminal access
function Scene5() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            AND IF SOMETHING BREAKS
          </p>
        </Appear>

        <Appear delay={12}>
          <div style={{
            padding: "20px 24px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.border}`, marginBottom: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 22 }}>🖥️</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Full terminal access</div>
                <div style={{ fontSize: 14, color: C.secondary }}>SSH into your environment directly from the app</div>
              </div>
            </div>
            <div style={{
              fontFamily: "monospace", fontSize: 14, padding: 16, borderRadius: 10,
              background: "#0C0A09", border: `1px solid ${C.border}`, lineHeight: 1.8,
            }}>
              <div style={{ color: C.muted }}>$ symploc ssh my-project</div>
              <div style={{ color: C.green }}>Connected to my-project.symploc.dev</div>
              <div style={{ color: C.muted }}>$ pm2 logs</div>
              <div style={{ color: C.secondary }}>0|server | listening on port 3000</div>
              <div style={{ color: C.secondary }}>0|server | MongoDB connected ✓</div>
            </div>
          </div>
        </Appear>

        <Appear delay={40}>
          <div style={{
            padding: "20px 24px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.border}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 22 }}>📊</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Logs, monitoring, database access</div>
                <div style={{ fontSize: 14, color: C.secondary }}>Debug through the AI agent — just ask what went wrong</div>
              </div>
            </div>
            <div style={{
              padding: "14px 18px", borderRadius: 10, background: C.accent,
              fontSize: 16, fontWeight: 500, color: "white",
            }}>
              &quot;Why is the /billing endpoint returning 500?&quot;
            </div>
          </div>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 6: Closing
function Scene6() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <Appear>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            From code to production.<br />
            <span style={{ color: C.green }}>No DevOps required.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            Full environment. One click. Debug with AI.<br />
            Ship like you have an infrastructure team.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const DeployDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={140}><Scene1 /></Sequence>
      <Sequence from={140} durationInFrames={120}><Scene2 /></Sequence>
      <Sequence from={260} durationInFrames={170}><Scene3 /></Sequence>
      <Sequence from={430} durationInFrames={200}><Scene4 /></Sequence>
      <Sequence from={630} durationInFrames={160}><Scene5 /></Sequence>
      <Sequence from={790} durationInFrames={140}><Scene6 /></Sequence>
    </AbsoluteFill>
  );
};
