import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, Sequence } from "remotion";
import { C, TopBar, ChatInput, ToolBlock, ChatBubble, WorkspaceTabs, DiffLine } from "../ui/AppShell";

function Appear({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [8, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

function AppearBig({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(progress, [0, 1], [30, 0], { extrapolateRight: "clamp" });
  return <div style={{ opacity, transform: `translateY(${y}px)` }}>{children}</div>;
}

// ===== INTRO SCENES =====

// Intro 1: The founder's morning
function IntroScene1() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 700 }}>
        <AppearBig>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            You have a roadmap<br />
            full of features.
          </h1>
        </AppearBig>
        <AppearBig delay={25}>
          <p style={{ fontSize: 24, color: C.textSecondary, marginTop: 24, lineHeight: 1.5 }}>
            And a team of <span style={{ color: C.text, fontWeight: 600 }}>one.</span>
          </p>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// Intro 2: You're managing AI tools
function IntroScene2() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <AppearBig>
          <p style={{ fontSize: 22, color: C.textSecondary, lineHeight: 1.6 }}>
            You already pay for AI coding tools.
          </p>
        </AppearBig>
        <AppearBig delay={20}>
          <p style={{ fontSize: 22, color: C.textSecondary, lineHeight: 1.6, marginTop: 12 }}>
            <span style={{ color: C.text, fontWeight: 600 }}>Claude Code. Codex. Gemini.</span>
          </p>
        </AppearBig>
        <AppearBig delay={40}>
          <p style={{ fontSize: 22, color: C.textSecondary, lineHeight: 1.6, marginTop: 20 }}>
            But <span style={{ color: C.accent, fontWeight: 600 }}>you&apos;re still the project manager.</span><br />
            You decide what to build. You switch between tools.<br />
            You keep track of everything.
          </p>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// Intro 3: What if
function IntroScene3() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        <AppearBig>
          <p style={{ fontSize: 20, color: C.textMuted, marginBottom: 16 }}>What if you could just say:</p>
        </AppearBig>
        <AppearBig delay={15}>
          <div style={{
            fontSize: 28, fontWeight: 600, color: C.text, lineHeight: 1.4,
            padding: "24px 32px", borderRadius: 16, background: C.surface,
            border: `1.5px solid ${C.border}`,
          }}>
            &quot;Work on the entire sprint.&quot;
          </div>
        </AppearBig>
        <AppearBig delay={40}>
          <p style={{ fontSize: 22, color: C.textSecondary, marginTop: 24, lineHeight: 1.5 }}>
            And an AI product manager handles<br />
            <span style={{ color: C.green, fontWeight: 600 }}>everything else.</span>
          </p>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// Intro 4: Meet Symploc
function IntroScene4() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <AppearBig>
          <div style={{
            width: 80, height: 80, borderRadius: 20, margin: "0 auto 20px",
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent}CC)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 0 50px ${C.accent}35`,
          }}>
            <svg width="38" height="38" viewBox="0 0 40 40"><rect x="5" y="5" width="22" height="22" rx="4" fill="white" /><circle cx="25" cy="25" r="10" fill="white" opacity="0.6" /></svg>
          </div>
        </AppearBig>
        <AppearBig delay={12}>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 12 }}>
            PLAN. BUILD. SHIP.
          </p>
        </AppearBig>
        <AppearBig delay={22}>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: C.text, lineHeight: 1.15, fontFamily: "Outfit, sans-serif" }}>
            Meet Symploc.
          </h1>
        </AppearBig>
        <AppearBig delay={38}>
          <p style={{ fontSize: 22, color: C.textSecondary, marginTop: 16 }}>
            The super agent that controls your coding agents.
          </p>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// Intro 5: Transition to demo
function IntroScene5() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        <AppearBig>
          <p style={{ fontSize: 22, color: C.textSecondary, lineHeight: 1.6 }}>
            It pulls your tickets from Linear.<br />
            Creates an <span style={{ color: C.text, fontWeight: 600 }}>isolated session</span> for each feature.<br />
            Builds them <span style={{ color: C.accent, fontWeight: 600 }}>all in parallel.</span>
          </p>
        </AppearBig>
        <AppearBig delay={35}>
          <p style={{ fontSize: 18, color: C.textMuted, marginTop: 28 }}>
            Watch it happen →
          </p>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// ===== OUTRO =====

function OutroScene() {
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 650 }}>
        <AppearBig>
          <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.2em", color: C.accent, marginBottom: 20 }}>
            PLAN. BUILD. SHIP.
          </p>
        </AppearBig>
        <AppearBig delay={15}>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: C.text, lineHeight: 1.3, fontFamily: "Outfit, sans-serif" }}>
            Your entire sprint.<br />
            Built in parallel.<br />
            <span style={{ color: C.green }}>Shipped in minutes.</span>
          </h1>
        </AppearBig>
        <AppearBig delay={35}>
          <p style={{ fontSize: 20, color: C.textSecondary, marginTop: 20 }}>
            Free forever. Local-first. No account required.
          </p>
        </AppearBig>
        <AppearBig delay={50}>
          <div style={{
            marginTop: 28, display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 28px", borderRadius: 99, background: C.accent,
            fontSize: 18, fontWeight: 600, color: "white",
          }}>
            ↓ Download Symploc
          </div>
        </AppearBig>
      </div>
    </AbsoluteFill>
  );
}

// ===== APP UI SESSION COMPONENTS (unchanged) =====

function SessionCard({ name, initials, color, ticket, status, active, delay }: {
  name: string; initials: string; color: string; ticket: string;
  status: "planning" | "building" | "done" | "queued"; active?: boolean; delay: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const statusColors = { planning: "#60A5FA", building: C.amber, done: C.green, queued: C.textMuted };
  const statusLabels = { planning: "Planning", building: "Building", done: "Done", queued: "Queued" };

  return (
    <div style={{
      opacity, display: "flex", alignItems: "center", gap: 8,
      padding: "8px 10px", borderRadius: 8, marginBottom: 3,
      background: active ? C.surface : "transparent",
      border: active ? `1px solid ${C.border}` : "1px solid transparent",
    }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, background: color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "white", flexShrink: 0 }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</div>
        <div style={{ fontSize: 9, color: C.textMuted, fontFamily: "monospace" }}>{ticket}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <div style={{ width: 6, height: 6, borderRadius: 99, background: statusColors[status] }} />
        <span style={{ fontSize: 9, color: statusColors[status], fontWeight: 600 }}>{statusLabels[status]}</span>
      </div>
    </div>
  );
}

function PlanStep({ number, title, status, delay }: { number: number; title: string; status: "done" | "active" | "pending"; delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18 } });
  const opacity = interpolate(progress, [0, 1], [0, 1], { extrapolateRight: "clamp" });
  const icons = { done: "✓", active: "▸", pending: String(number) };
  const colors = { done: C.green, active: C.amber, pending: C.textMuted };

  return (
    <div style={{ opacity, display: "flex", gap: 8, marginBottom: 5, alignItems: "center" }}>
      <div style={{
        width: 18, height: 18, borderRadius: 4, flexShrink: 0,
        background: status === "done" ? C.green : status === "active" ? C.amber : "transparent",
        border: `2px solid ${colors[status]}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 9, fontWeight: 700, color: status === "pending" ? C.textMuted : "white",
      }}>{icons[status]}</div>
      <span style={{ fontSize: 11, fontWeight: 500, color: status === "done" ? C.green : C.text }}>{title}</span>
    </div>
  );
}

interface SessionPlan {
  name: string;
  ticket: string;
  steps: string[];
  tools: { tool: string; file: string }[];
  diffs: { type: "add" | "remove" | "context"; text: string }[];
  filesChanged: string;
}

const sessionPlans: SessionPlan[] = [
  {
    name: "user-model", ticket: "SYM-34",
    steps: ["Create User schema with Mongoose", "Add password hashing with bcrypt", "Write unit tests", "Update exports and types"],
    tools: [{ tool: "Write", file: "src/models/User.ts" }, { tool: "Write", file: "src/utils/hash.ts" }, { tool: "Write", file: "src/tests/user.test.ts" }],
    diffs: [{ type: "add", text: 'import mongoose from "mongoose";' }, { type: "add", text: 'import bcrypt from "bcrypt";' }, { type: "add", text: "const userSchema = new mongoose.Schema({" }, { type: "add", text: '  email: { type: String, unique: true },' }, { type: "add", text: "  password: { type: String, required: true }," }, { type: "add", text: "});" }],
    filesChanged: "+42 lines across 3 files",
  },
  {
    name: "auth-endpoints", ticket: "SYM-35",
    steps: ["Create auth router with login/register", "Add request validation with Zod", "Implement JWT token signing", "Add rate limiting"],
    tools: [{ tool: "Write", file: "src/routes/auth.ts" }, { tool: "Write", file: "src/validations/auth.ts" }, { tool: "Edit", file: "src/routes/index.ts" }],
    diffs: [{ type: "add", text: 'import { Router } from "express";' }, { type: "add", text: 'import jwt from "jsonwebtoken";' }, { type: "add", text: 'router.post("/login", async (req, res) => {' }, { type: "add", text: "  const token = jwt.sign({ id: user._id });" }, { type: "add", text: "  res.json({ token });" }, { type: "add", text: "});" }],
    filesChanged: "+87 lines across 3 files",
  },
  {
    name: "jwt-middleware", ticket: "SYM-36",
    steps: ["Create JWT verification middleware", "Add user context to request", "Protect API routes", "Handle token expiry"],
    tools: [{ tool: "Write", file: "src/middleware/jwt.ts" }, { tool: "Edit", file: "src/routes/index.ts" }, { tool: "Write", file: "src/types/express.d.ts" }],
    diffs: [{ type: "add", text: 'import { verify } from "jsonwebtoken";' }, { type: "add", text: "export const jwtMiddleware = (req, res, next) => {" }, { type: "add", text: '  const token = req.headers.authorization?.split(" ")[1];' }, { type: "add", text: "  req.user = verify(token, SECRET);" }, { type: "remove", text: "app.use('/api', apiRouter);" }, { type: "add", text: "app.use('/api', jwtMiddleware, apiRouter);" }],
    filesChanged: "+38 lines, ~1 modified",
  },
  {
    name: "login-page", ticket: "SYM-37",
    steps: ["Create LoginForm component", "Add form validation", "Connect to auth API", "Add error handling and loading states"],
    tools: [{ tool: "Write", file: "src/pages/Login.tsx" }, { tool: "Write", file: "src/hooks/useAuth.ts" }, { tool: "Edit", file: "src/App.tsx" }],
    diffs: [{ type: "add", text: 'import { useState } from "react";' }, { type: "add", text: "export function LoginForm() {" }, { type: "add", text: "  const [email, setEmail] = useState('');" }, { type: "add", text: "  const { login, loading } = useAuth();" }, { type: "add", text: "  return <form onSubmit={handleSubmit}>..." }, { type: "add", text: "}" }],
    filesChanged: "+64 lines across 3 files",
  },
];

function SessionWorkspace({ plan, phase }: { plan: SessionPlan; phase: "planning" | "building" | "done" }) {
  const frame = useCurrentFrame();
  const base = 0;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Appear delay={base}><WorkspaceTabs activeTab="Changes" sessionName={plan.name} /></Appear>
      <div style={{ flex: 1, padding: "12px", overflowY: "hidden" }}>
        <Appear delay={base + 5}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, letterSpacing: "0.05em" }}>PLAN MODE</div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5E6AD2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              <span style={{ fontSize: 9, color: "#5E6AD2", fontWeight: 600 }}>{plan.ticket}</span>
            </div>
          </div>
        </Appear>
        {plan.steps.map((step, i) => {
          let status: "done" | "active" | "pending" = "pending";
          if (phase === "done") status = "done";
          else if (phase === "building") {
            if (frame > base + 30 + i * 20) status = "done";
            else if (frame > base + 20 + i * 20) status = "active";
          }
          return <PlanStep key={i} number={i + 1} title={step} status={status} delay={base + 10 + i * 6} />;
        })}
        {phase !== "planning" && (
          <div style={{ marginTop: 10 }}>
            <Appear delay={base + 25}><div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, marginBottom: 5 }}>TOOL CALLS</div></Appear>
            {plan.tools.map((t, i) => (
              <Appear key={i} delay={base + 30 + i * 10}><ToolBlock tool={t.tool} file={t.file} status={frame > base + 40 + i * 10 ? "done" : "running"} /></Appear>
            ))}
          </div>
        )}
        {phase !== "planning" && frame > base + 60 && (
          <Appear delay={base + 60}>
            <div style={{ marginTop: 10, borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: C.textMuted, marginBottom: 5 }}>CHANGES</div>
              <div style={{ borderRadius: 6, border: `1px solid ${C.border}`, overflow: "hidden" }}>
                {plan.diffs.map((d, i) => <DiffLine key={i} type={d.type} text={d.text} />)}
              </div>
              <div style={{ fontSize: 10, color: C.green, marginTop: 4 }}>{plan.filesChanged}</div>
            </div>
          </Appear>
        )}
      </div>
    </div>
  );
}

// ===== APP UI SCENE =====

function AppScene() {
  const frame = useCurrentFrame();

  const T = {
    userMsg: 15, agentFinds: 45,
    createS1: 70, createS2: 85, createS3: 100, createS4: 115,
    s1Start: 135, s1Build: 155, s1Done: 240,
    s2Start: 250, s2Build: 270, s2Done: 360,
    s3Start: 370, s3Build: 390, s3Done: 470,
    s4Start: 480, s4Build: 500, s4Done: 580,
  };

  const activeSession = frame < T.s2Start ? 0 : frame < T.s3Start ? 1 : frame < T.s4Start ? 2 : 3;
  type S = "queued" | "planning" | "building" | "done";
  const statuses: S[] = [
    frame > T.s1Done ? "done" : frame > T.s1Build ? "building" : frame > T.s1Start ? "planning" : "queued",
    frame > T.s2Done ? "done" : frame > T.s2Build ? "building" : frame > T.s2Start ? "planning" : "queued",
    frame > T.s3Done ? "done" : frame > T.s3Build ? "building" : frame > T.s3Start ? "planning" : "queued",
    frame > T.s4Done ? "done" : frame > T.s4Build ? "building" : frame > T.s4Start ? "planning" : "queued",
  ];
  const activePhase = statuses[activeSession] === "queued" ? "planning" : statuses[activeSession];
  const sessionColors = [C.accent, "#5E6AD2", "#2563EB", "#059669"];
  const sessionInitials = ["UM", "AE", "JM", "LP"];
  const sessionNames = ["user-model", "auth-endpoints", "jwt-middleware", "login-page"];
  const sessionTickets = ["SYM-34", "SYM-35", "SYM-36", "SYM-37"];
  const agentMessages = [
    { frame: T.s1Done, text: "SYM-34 complete ✓ Marked done in Linear. Starting SYM-35..." },
    { frame: T.s2Done, text: "SYM-35 complete ✓ Auth endpoints live. Moving to SYM-36..." },
    { frame: T.s3Done, text: "SYM-36 complete ✓ JWT middleware active. Last one — SYM-37..." },
    { frame: T.s4Done, text: "All 4 tickets complete ✓ Sprint done." },
  ];
  const doneCount = statuses.filter(s => s === "done").length;

  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <Appear delay={0}><TopBar activeTab="Chat" /></Appear>
      <div style={{ flex: 1, display: "flex" }}>
        <div style={{ width: 340, display: "flex", flexDirection: "column", borderRight: `1px solid ${C.border}` }}>
          <div style={{ padding: "6px 12px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: C.textMuted }}>💬</span>
            <span style={{ fontSize: 11, fontWeight: 500, color: C.text }}>Chat</span>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 11, color: C.textMuted }}>+</span>
          </div>
          <div style={{ flex: 1, padding: "10px", overflowY: "hidden" }}>
            <Appear delay={T.userMsg}><ChatBubble role="user">Work on the current sprint from Linear</ChatBubble></Appear>
            <Appear delay={T.agentFinds}><ChatBubble role="agent"><div>Found 4 tickets in sprint &quot;Auth &amp; Security&quot;. Creating isolated sessions...</div></ChatBubble></Appear>
            {frame > T.agentFinds + 10 && (
              <div style={{ marginBottom: 10 }}>
                <Appear delay={T.agentFinds + 12}><ToolBlock tool="LinearSync" file="Fetching sprint tickets..." status={frame > T.createS1 ? "done" : "running"} /></Appear>
                <Appear delay={T.createS1}><ToolBlock tool="CreateSession" file="user-model → SYM-34" status={frame > T.createS1 + 10 ? "done" : "running"} /></Appear>
                <Appear delay={T.createS2}><ToolBlock tool="CreateSession" file="auth-endpoints → SYM-35" status={frame > T.createS2 + 10 ? "done" : "running"} /></Appear>
                <Appear delay={T.createS3}><ToolBlock tool="CreateSession" file="jwt-middleware → SYM-36" status={frame > T.createS3 + 10 ? "done" : "running"} /></Appear>
                <Appear delay={T.createS4}><ToolBlock tool="CreateSession" file="login-page → SYM-37" status={frame > T.createS4 + 10 ? "done" : "running"} /></Appear>
              </div>
            )}
            {frame > T.createS4 + 12 && (<Appear delay={T.createS4 + 12}><ChatBubble role="agent"><div>4 sessions created. Starting with SYM-34...</div></ChatBubble></Appear>)}
            {agentMessages.map((msg, i) => frame > msg.frame && (<Appear key={i} delay={msg.frame}><ChatBubble role="agent"><div style={{ fontSize: 11 }}>{msg.text}</div></ChatBubble></Appear>))}
          </div>
          <ChatInput agent="Claude Code" />
        </div>
        <SessionWorkspace key={activeSession} plan={sessionPlans[activeSession]} phase={activePhase as "planning" | "building" | "done"} />
        <div style={{ width: 190, borderLeft: `1px solid ${C.border}`, background: C.bg, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "10px 12px", fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.05em" }}>SESSIONS</div>
          <div style={{ flex: 1, padding: "0 5px" }}>
            {frame > T.createS1 + 10 && <SessionCard name={sessionNames[0]} initials={sessionInitials[0]} color={sessionColors[0]} ticket={sessionTickets[0]} status={statuses[0]} active={activeSession === 0} delay={T.createS1 + 10} />}
            {frame > T.createS2 + 10 && <SessionCard name={sessionNames[1]} initials={sessionInitials[1]} color={sessionColors[1]} ticket={sessionTickets[1]} status={statuses[1]} active={activeSession === 1} delay={T.createS2 + 10} />}
            {frame > T.createS3 + 10 && <SessionCard name={sessionNames[2]} initials={sessionInitials[2]} color={sessionColors[2]} ticket={sessionTickets[2]} status={statuses[2]} active={activeSession === 2} delay={T.createS3 + 10} />}
            {frame > T.createS4 + 10 && <SessionCard name={sessionNames[3]} initials={sessionInitials[3]} color={sessionColors[3]} ticket={sessionTickets[3]} status={statuses[3]} active={activeSession === 3} delay={T.createS4 + 10} />}
          </div>
          {frame > T.createS4 + 20 && (
            <Appear delay={T.createS4 + 20}>
              <div style={{ padding: "10px 12px", borderTop: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.textMuted, marginBottom: 4 }}>
                  <span>Sprint</span><span style={{ color: C.green }}>{doneCount}/4</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: C.surface, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${C.green}, ${C.accent})`, width: `${(doneCount / 4) * 100}%` }} />
                </div>
              </div>
            </Appear>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
}

// ===== MAIN COMPOSITION =====

export const HeroScreenshot: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Intro 1: Founder's reality (0-3s) */}
      <Sequence from={0} durationInFrames={90}>
        <IntroScene1 />
      </Sequence>

      {/* Intro 2: You're managing AI tools (3-6s) */}
      <Sequence from={90} durationInFrames={100}>
        <IntroScene2 />
      </Sequence>

      {/* Intro 3: What if (6-9s) */}
      <Sequence from={190} durationInFrames={90}>
        <IntroScene3 />
      </Sequence>

      {/* Intro 4: Meet Symploc (9-12s) */}
      <Sequence from={280} durationInFrames={100}>
        <IntroScene4 />
      </Sequence>

      {/* Intro 5: Transition to demo (12-14s) */}
      <Sequence from={380} durationInFrames={80}>
        <IntroScene5 />
      </Sequence>

      {/* App UI demo (14-34s) */}
      <Sequence from={460} durationInFrames={600}>
        <AppScene />
      </Sequence>

      {/* Outro (34-38s) */}
      <Sequence from={1060} durationInFrames={120}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
