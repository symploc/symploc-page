import React from "react";

// Brand colors matching the desktop app
export const C = {
  bg: "#1C1917",
  bgDeep: "#0C0A09",
  surface: "#292524",
  surfaceHover: "#302c2b",
  border: "#3d3836",
  text: "#FAF9F6",
  textSecondary: "#A8A29E",
  textMuted: "#78716C",
  accent: "#C2553D",
  accentHover: "#A84835",
  green: "#34D399",
  greenBg: "rgba(52, 211, 153, 0.1)",
  red: "#F87171",
  redBg: "rgba(248, 113, 113, 0.1)",
  blue: "#60A5FA",
  amber: "#FBBF24",
  amberBg: "rgba(251, 191, 36, 0.15)",
};

// SVG icons matching the desktop app
function IconChat({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconBacklog({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function IconKnowledge({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconAgents({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function IconRepos({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function IconEnv({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

function IconGrid({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

function IconSettings({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconChanges({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function IconFiles({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconTerminal({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

// Top navigation bar
export function TopBar({ activeTab = "Chat", projectName = "symploc-website" }: { activeTab?: string; projectName?: string }) {
  const tabs = [
    { name: "Chat", Icon: IconChat },
    { name: "Backlog", Icon: IconBacklog },
    { name: "Knowledge Base", Icon: IconKnowledge },
    { name: "AI Agents", Icon: IconAgents },
    { name: "Repositories", Icon: IconRepos },
    { name: "Environments", Icon: IconEnv },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", height: 40, background: C.bgDeep, borderBottom: `1px solid ${C.border}`, padding: "0 12px", gap: 4 }}>
      {/* Logo + Beta */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 4 }}>
        <svg width="16" height="16" viewBox="0 0 40 40"><rect x="5" y="5" width="22" height="22" rx="4" fill={C.text} /><circle cx="25" cy="25" r="10" fill={C.accent} opacity="0.9" /></svg>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#1C1917", background: C.amber, padding: "1px 7px", borderRadius: 4, lineHeight: "16px" }}>BETA</span>
      </div>

      {/* Back/forward arrows */}
      <div style={{ display: "flex", alignItems: "center", gap: 2, marginRight: 4, color: C.textMuted, fontSize: 14 }}>
        <span style={{ padding: "2px 4px", cursor: "pointer" }}>‹</span>
        <span style={{ padding: "2px 4px", cursor: "pointer" }}>›</span>
      </div>

      {/* Grid icon + project name */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 8, color: C.textMuted }}>
        <IconGrid size={13} />
        <span style={{ fontSize: 13, color: C.textSecondary, fontWeight: 500 }}>{projectName}</span>
        <span style={{ fontSize: 13, color: C.textMuted }}>/</span>
      </div>

      {/* Tab navigation */}
      {tabs.map(({ name, Icon }) => (
        <div
          key={name}
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: name === activeTab ? C.text : C.textMuted,
            padding: "5px 10px",
            borderRadius: 6,
            background: name === activeTab ? C.surface : "transparent",
            border: name === activeTab ? `1px solid ${C.border}` : "1px solid transparent",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Icon size={13} />
          {name}
        </div>
      ))}

      {/* Spacer + settings + window controls */}
      <div style={{ flex: 1 }} />
      <div style={{ color: C.textMuted, display: "flex", alignItems: "center", gap: 12 }}>
        <IconSettings size={14} />
        <span style={{ color: C.textMuted, fontSize: 16 }}>—</span>
        <span style={{ color: C.textMuted, fontSize: 12 }}>□</span>
        <span style={{ color: C.textMuted, fontSize: 16 }}>×</span>
      </div>
    </div>
  );
}

// Sessions panel
export function SessionsPanel({ sessions }: { sessions: { name: string; color: string; initials: string; active?: boolean }[] }) {
  return (
    <div style={{ width: 200, borderLeft: `1px solid ${C.border}`, background: C.bg, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "10px 14px", fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.05em" }}>SESSIONS</div>
      <div style={{ flex: 1, padding: "0 6px" }}>
        {sessions.map((s) => (
          <div
            key={s.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 10px",
              borderRadius: 8,
              background: s.active ? C.surface : "transparent",
              border: s.active ? `1px solid ${C.border}` : "1px solid transparent",
              marginBottom: 3,
            }}
          >
            <div style={{ width: 28, height: 28, borderRadius: 6, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: C.text }}>{s.initials}</div>
            <span style={{ fontSize: 12, fontWeight: 500, color: C.text, flex: 1 }}>{s.name}</span>
            {s.active && <div style={{ width: 7, height: 7, borderRadius: 99, background: C.green }} />}
          </div>
        ))}
      </div>
      <div style={{ padding: "10px 14px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 12, color: C.textMuted, display: "flex", alignItems: "center", gap: 6 }}>+ New Session</div>
      </div>
    </div>
  );
}

// Chat input bar
export function ChatInput({ agent = "Claude Code", typedText = "" }: { agent?: string; typedText?: string }) {
  return (
    <div style={{ padding: "10px 14px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ background: C.surface, borderRadius: 12, border: `1px solid ${C.border}`, padding: "10px 14px" }}>
        <div style={{ fontSize: 13, color: typedText ? C.text : C.textMuted, marginBottom: 10, minHeight: 20 }}>
          {typedText || "Ask the agent to build, fix, or explore..."}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: C.textSecondary }}>
            <span style={{ fontSize: 11 }}>⚡</span> Agent
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: C.textSecondary, padding: "2px 8px", background: C.bgDeep, borderRadius: 4 }}>
            🏗️ {agent} ▾
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ width: 26, height: 26, borderRadius: 99, background: typedText ? C.accent : C.textMuted, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 13, color: "white" }}>↑</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tool call block
export function ToolBlock({ tool, file, status = "done" }: { tool: string; file: string; status?: "done" | "running" | "pending" }) {
  const icons: Record<string, string> = { Read: "📖", Edit: "✏️", Write: "📝", Search: "🔍", CreateSession: "🔀", LinearSync: "🔄" };

  return (
    <div style={{ background: C.bgDeep, borderRadius: 8, border: `1px solid ${C.border}`, padding: "7px 11px", marginBottom: 5, display: "flex", alignItems: "center", gap: 7 }}>
      <span style={{ fontSize: 11 }}>{icons[tool] || "🔧"}</span>
      <span style={{ fontSize: 11, fontWeight: 600, color: C.textSecondary }}>{tool}</span>
      <span style={{ fontSize: 11, color: C.textMuted, fontFamily: "monospace" }}>{file}</span>
      <div style={{ flex: 1 }} />
      {status === "done" && <span style={{ fontSize: 10, color: C.green }}>✓</span>}
      {status === "running" && <span style={{ fontSize: 10, color: C.amber }}>●</span>}
    </div>
  );
}

// Chat message
export function ChatBubble({ role, children }: { role: "user" | "agent"; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14, maxWidth: role === "user" ? "70%" : "100%", marginLeft: role === "user" ? "auto" : 0 }}>
      {role === "agent" && (
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 5 }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: C.accent, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="9" height="9" viewBox="0 0 40 40"><rect x="5" y="5" width="22" height="22" rx="4" fill="white" /><circle cx="25" cy="25" r="10" fill="white" opacity="0.6" /></svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 600, color: C.textSecondary }}>Symploc Agent</span>
        </div>
      )}
      <div style={{
        padding: "9px 13px",
        borderRadius: 10,
        background: role === "user" ? C.accent : C.surface,
        border: role === "user" ? "none" : `1px solid ${C.border}`,
        fontSize: 12,
        lineHeight: 1.6,
        color: C.text,
      }}>
        {children}
      </div>
    </div>
  );
}

// Diff line
export function DiffLine({ type, text }: { type: "add" | "remove" | "context"; text: string }) {
  const bg = type === "add" ? C.greenBg : type === "remove" ? C.redBg : "transparent";
  const color = type === "add" ? C.green : type === "remove" ? C.red : C.textSecondary;
  const prefix = type === "add" ? "+" : type === "remove" ? "-" : " ";

  return (
    <div style={{ fontFamily: "monospace", fontSize: 11, padding: "1px 10px", background: bg, color, whiteSpace: "pre" }}>
      {prefix} {text}
    </div>
  );
}

// Session workspace tabs
export function WorkspaceTabs({ activeTab = "Terminals", sessionName = "fix-auth-flow" }: { activeTab?: string; sessionName?: string }) {
  const tabs = [
    { name: "Terminals", Icon: IconTerminal },
    { name: "Files", Icon: IconFiles },
    { name: "Changes", Icon: IconChanges },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 14px", borderBottom: `1px solid ${C.border}` }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: C.text, marginRight: 10 }}>{sessionName}</span>
      {tabs.map(({ name, Icon }) => (
        <div
          key={name}
          style={{
            fontSize: 11,
            fontWeight: 500,
            color: name === activeTab ? C.text : C.textMuted,
            padding: "4px 8px",
            borderRadius: 5,
            background: name === activeTab ? C.surface : "transparent",
            border: name === activeTab ? `1px solid ${C.border}` : "1px solid transparent",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Icon size={12} />
          {name}
        </div>
      ))}
    </div>
  );
}
