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
};

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [30, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// Scene 1: The founder's reality
function Scene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <Appear>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your roadmap has<br />
            <span style={{ color: C.accent }}>5 features waiting.</span>
          </h1>
        </Appear>
        <Appear delay={25}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            Building them one by one takes weeks.<br />
            What if they could all be built <span style={{ color: C.text, fontWeight: 600 }}>at the same time?</span>
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: The old way
function Scene2() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 650, width: "100%", textAlign: "center" }}>
        <Appear>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.red, marginBottom: 28 }}>
            THE OLD WAY
          </div>
        </Appear>

        <Appear delay={10}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            {["Auth", "Payments", "Dashboard", "Onboarding", "API v2"].map((f, i) => (
              <div key={f} style={{
                padding: "10px 18px", borderRadius: 10, background: C.surface,
                border: `1.5px solid ${C.border}`, fontSize: 16, fontWeight: 600,
                color: i === 0 ? C.amber : C.muted,
              }}>
                {f}
              </div>
            ))}
          </div>
        </Appear>

        <Appear delay={30}>
          <div style={{ fontSize: 40, color: C.muted, marginBottom: 16 }}>↓</div>
        </Appear>

        <Appear delay={40}>
          <div style={{ fontSize: 22, color: C.text, fontWeight: 600, marginBottom: 8 }}>
            One at a time. Sequential. Slow.
          </div>
          <div style={{ fontSize: 16, color: C.muted }}>
            Feature 2 waits for Feature 1. Feature 3 waits for Feature 2...
          </div>
        </Appear>

        {frame > 70 && (
          <Appear delay={70}>
            <div style={{ marginTop: 28, fontSize: 18, color: C.red, fontWeight: 600 }}>
              5 features × 1 week each = 5 weeks.
            </div>
          </Appear>
        )}
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: Symploc sessions — parallel
function Scene3() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            SYMPLOC SESSIONS
          </p>
        </Appear>
        <Appear delay={12}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            All features.<br />
            <span style={{ color: C.green }}>In parallel.</span>
          </h1>
        </Appear>
        <Appear delay={28}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 20, maxWidth: 580, lineHeight: 1.5 }}>
            Each feature gets its own isolated session —<br />
            own branch, own changes, own AI context.<br />
            <span style={{ color: C.text, fontWeight: 600 }}>They never conflict.</span>
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: All sessions running in parallel
function Scene4() {
  const frame = useCurrentFrame();

  const sessions = [
    { name: "auth-flow", initials: "AF", color: C.accent, agent: "Claude Code", files: 4, status: "Building" },
    { name: "stripe-billing", initials: "SB", color: "#5E6AD2", agent: "Codex", files: 3, status: "Building" },
    { name: "dashboard-v2", initials: "DV", color: "#2563EB", agent: "Claude Code", files: 6, status: "Building" },
    { name: "onboarding", initials: "OB", color: "#059669", agent: "Gemini", files: 2, status: "Planning" },
    { name: "api-v2", initials: "A2", color: "#D97706", agent: "Codex", files: 0, status: "Queued" },
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 750, width: "100%" }}>
        <Appear>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent }}>
              5 FEATURES — RUNNING IN PARALLEL
            </div>
            <div style={{ fontSize: 14, color: C.muted }}>
              All isolated. Zero conflicts.
            </div>
          </div>
        </Appear>

        {sessions.map((s, i) => {
          const d = 10 + i * 14;
          const isDone = s.status === "Building" && frame > d + 80;
          const isWorking = s.status === "Building" && !isDone;
          const statusColor = isDone ? C.green : isWorking ? C.amber : s.status === "Planning" ? "#60A5FA" : C.muted;
          const statusText = isDone ? "Done" : s.status;

          return (
            <Appear key={s.name} delay={d}>
              <div style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 20px", borderRadius: 14, marginBottom: 8,
                background: isDone ? "rgba(52, 211, 153, 0.04)" : C.surface,
                border: `1.5px solid ${isDone ? "rgba(52, 211, 153, 0.15)" : C.border}`,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, background: s.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, color: "white", flexShrink: 0,
                }}>
                  {s.initials}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 17, fontWeight: 600, color: isDone ? C.green : C.text }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                    {s.agent} · {isDone ? `${s.files} files changed` : s.files > 0 ? `${s.files} files so far` : "waiting"}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 99, background: statusColor }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: statusColor }}>{statusText}</span>
                </div>

                {isDone && <span style={{ fontSize: 18, color: C.green, marginLeft: 4 }}>✓</span>}
              </div>
            </Appear>
          );
        })}

        {frame > 100 && (
          <Appear delay={100}>
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: C.green }}>5 features in the time of 1.</span>
            </div>
          </Appear>
        )}
      </div>
    </AbsoluteFill>
  );
}

// Scene 5: Review & test
function Scene5() {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 700, width: "100%" }}>
        <Appear>
          <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", color: C.accent, textAlign: "center", marginBottom: 28 }}>
            REVIEW & TEST — BUILT IN
          </p>
        </Appear>

        <Appear delay={10}>
          <div style={{
            padding: "20px 24px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.border}`, marginBottom: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 22 }}>⎇</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>See every change</div>
                <div style={{ fontSize: 14, color: C.secondary }}>Full git diff per session — review exactly what was built</div>
              </div>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 14, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}` }}>
              <div style={{ padding: "6px 14px", background: "rgba(52, 211, 153, 0.06)", color: C.green }}>+ export const authRouter = Router();</div>
              <div style={{ padding: "6px 14px", background: "rgba(52, 211, 153, 0.06)", color: C.green }}>+ router.post(&quot;/login&quot;, validateAuth, ...</div>
              <div style={{ padding: "6px 14px", background: "rgba(248, 113, 113, 0.06)", color: C.red }}>- app.use(&apos;/api&apos;, apiRouter);</div>
              <div style={{ padding: "6px 14px", background: "rgba(52, 211, 153, 0.06)", color: C.green }}>+ app.use(&apos;/api&apos;, jwtMiddleware, apiRouter);</div>
            </div>
          </div>
        </Appear>

        <Appear delay={35}>
          <div style={{
            padding: "20px 24px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.border}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ fontSize: 22 }}>◉</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Test each feature live</div>
                <div style={{ fontSize: 14, color: C.secondary }}>Ports managed automatically — each session runs on its own port</div>
              </div>
            </div>
            {[
              { port: "3000", session: "auth-flow", active: true },
              { port: "3001", session: "stripe-billing", active: true },
              { port: "3002", session: "dashboard-v2", active: frame > 55 },
            ].map((p, i) => (
              <Appear key={p.port} delay={45 + i * 12}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 14, marginTop: 8,
                  padding: "12px 16px", borderRadius: 10, background: C.bg,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: 99, background: p.active ? C.green : C.muted }} />
                  <div style={{ fontSize: 14, fontFamily: "monospace", color: C.text, fontWeight: 600 }}>:{p.port}</div>
                  <div style={{ fontSize: 13, color: C.muted }}>→ {p.session}</div>
                  <div style={{ flex: 1 }} />
                  <div style={{
                    padding: "5px 12px", borderRadius: 8,
                    background: p.active ? C.accent : C.surface,
                    border: p.active ? "none" : `1px solid ${C.border}`,
                    fontSize: 12, fontWeight: 600, color: p.active ? "white" : C.muted,
                  }}>
                    Open
                  </div>
                </div>
              </Appear>
            ))}
          </div>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene 6: Closing — founder focused
function Scene6() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <Appear>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your entire sprint.<br />
            Built in parallel.<br />
            <span style={{ color: C.green }}>Reviewed in minutes.</span>
          </h1>
        </Appear>
        <Appear delay={20}>
          <p style={{ fontSize: 22, color: C.secondary, marginTop: 24, lineHeight: 1.5 }}>
            No worktrees. No port conflicts. No waiting.<br />
            Just tell the super agent what to build.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

export const PlanModeDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      <Sequence from={0} durationInFrames={130}><Scene1 /></Sequence>
      <Sequence from={130} durationInFrames={160}><Scene2 /></Sequence>
      <Sequence from={290} durationInFrames={130}><Scene3 /></Sequence>
      <Sequence from={420} durationInFrames={200}><Scene4 /></Sequence>
      <Sequence from={620} durationInFrames={180}><Scene5 /></Sequence>
      <Sequence from={800} durationInFrames={130}><Scene6 /></Sequence>
    </AbsoluteFill>
  );
};
