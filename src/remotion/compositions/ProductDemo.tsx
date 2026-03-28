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
};

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [25, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// Big plan step with animated checkbox
function BigPlanStep({ number, title, subtitle, status, delay }: {
  number: number; title: string; subtitle: string;
  status: "pending" | "active" | "done"; delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });

  const colors = { pending: C.muted, active: C.amber, done: C.green };
  const icons = { pending: String(number), active: "▸", done: "✓" };

  return (
    <div style={{
      opacity, display: "flex", alignItems: "center", gap: 16, marginBottom: 12,
      padding: "14px 20px", borderRadius: 12,
      background: status === "active" ? "rgba(251, 191, 36, 0.06)" : status === "done" ? "rgba(52, 211, 153, 0.04)" : "transparent",
      border: `1.5px solid ${status === "active" ? "rgba(251, 191, 36, 0.2)" : status === "done" ? "rgba(52, 211, 153, 0.15)" : C.border}`,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, flexShrink: 0,
        background: status === "done" ? C.green : status === "active" ? C.amber : "transparent",
        border: `2.5px solid ${colors[status]}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16, fontWeight: 700, color: status === "pending" ? C.muted : "white",
      }}>
        {icons[status]}
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, color: status === "done" ? C.green : C.text }}>{title}</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{subtitle}</div>
      </div>
    </div>
  );
}

// Scene: Intro
function SceneIntro() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>PLAN MODE</p>
        </Appear>
        <Appear delay={15}>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            Think first.<br /><span style={{ color: C.accent }}>Ship second.</span>
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 18, color: C.secondary, marginTop: 20, maxWidth: 500, lineHeight: 1.6 }}>
            Before any code is written, Symploc maps out the full plan. You approve. Agents execute.
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene: User request
function SceneRequest() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, textAlign: "center" }}>
        <Appear>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 12 }}>You say:</div>
        </Appear>
        <Appear delay={10}>
          <div style={{
            fontSize: 24, fontWeight: 600, color: C.text, lineHeight: 1.5,
            padding: "20px 30px", borderRadius: 16, background: C.surface, border: `1px solid ${C.border}`,
          }}>
            &quot;Add a payment system with Stripe — subscriptions, invoices, and a billing page&quot;
          </div>
        </Appear>
        <Appear delay={35}>
          <div style={{ marginTop: 24, fontSize: 14, color: C.accent, fontWeight: 600 }}>
            Symploc doesn&apos;t start coding. It starts planning.
          </div>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// Scene: Plan builds step by step
function ScenePlan() {
  const frame = useCurrentFrame();

  const steps = [
    { title: "Set up Stripe SDK and environment keys", subtitle: "Install stripe, add STRIPE_SECRET_KEY to env" },
    { title: "Create subscription plans and pricing table", subtitle: "Define Pro/Scale tiers, create Stripe Products" },
    { title: "Build webhook handler for payment events", subtitle: "Handle checkout.completed, invoice.paid, subscription.canceled" },
    { title: "Add billing page with current plan and usage", subtitle: "React component with plan switcher and invoice history" },
    { title: "Write integration tests", subtitle: "Mock Stripe API, test upgrade/downgrade/cancel flows" },
  ];

  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 600, width: "100%" }}>
        <Appear>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: C.accent }}>PLAN</div>
            <div style={{ fontSize: 12, color: C.muted }}>5 steps · estimated 12 minutes</div>
          </div>
        </Appear>

        {steps.map((step, i) => {
          const stepDelay = 15 + i * 25;
          let status: "pending" | "active" | "done" = "pending";
          if (frame > stepDelay + 80) status = "done";
          else if (frame > stepDelay + 40) status = "active";

          return (
            <BigPlanStep
              key={i}
              number={i + 1}
              title={step.title}
              subtitle={step.subtitle}
              status={status}
              delay={stepDelay}
            />
          );
        })}

        {/* All done */}
        {frame > 200 && (
          <Appear delay={200}>
            <div style={{
              marginTop: 16, padding: "12px 20px", borderRadius: 12, textAlign: "center",
              background: "rgba(52, 211, 153, 0.08)", border: "1.5px solid rgba(52, 211, 153, 0.2)",
            }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.green }}>Plan complete. All 5 steps executed. </span>
              <span style={{ fontSize: 13, color: C.secondary }}>Ready to deploy.</span>
            </div>
          </Appear>
        )}
      </div>
    </AbsoluteFill>
  );
}

// Scene: Outro
function SceneOutro() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Appear>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            PLAN. BUILD. SHIP.
          </p>
        </Appear>
        <Appear delay={15}>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.2, fontFamily: "Outfit, sans-serif" }}>
            No more AI sprinting<br />in the wrong direction.
          </h1>
        </Appear>
        <Appear delay={30}>
          <p style={{ fontSize: 18, color: C.secondary, marginTop: 20 }}>
            Download free at symploc.com
          </p>
        </Appear>
      </div>
    </AbsoluteFill>
  );
}

// ===== MAIN COMPOSITION =====
export const ProductDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Intro (0-3s) */}
      <Sequence from={0} durationInFrames={90}>
        <SceneIntro />
      </Sequence>

      {/* Request (3-6s) */}
      <Sequence from={90} durationInFrames={90}>
        <SceneRequest />
      </Sequence>

      {/* Plan executing (6-14s) */}
      <Sequence from={180} durationInFrames={240}>
        <ScenePlan />
      </Sequence>

      {/* Outro (14-16s) */}
      <Sequence from={420} durationInFrames={90}>
        <SceneOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
