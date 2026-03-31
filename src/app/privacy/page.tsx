import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Symploc",
  description: "How Symploc handles your data. Local-first, no account required, opt-in telemetry only.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 31, 2026">
      <p>
        Symploc is a desktop application for project management and AI agent orchestration. We are built on a
        <strong> local-first</strong> philosophy — your data stays on your machine unless you explicitly choose otherwise.
        This policy explains what data we collect, how we use it, and the choices you have.
      </p>

      <h2>1. Information That Stays on Your Device</h2>
      <p>
        The core of Symploc runs entirely on your computer. The following data is stored locally and
        <strong> never transmitted</strong> to our servers:
      </p>
      <ul>
        <li>Your projects, repositories, and code files</li>
        <li>Chat and agent session history</li>
        <li>Context files (.symploc-context/, CLAUDE.md, MEMORY.md)</li>
        <li>Terminal session data</li>
        <li>Local database (SQLite) containing projects, tasks, and settings</li>
        <li>Git worktrees created for session isolation</li>
      </ul>
      <p>
        We have no access to this data. It lives on your machine and is under your full control.
      </p>

      <h2>2. Information We Collect (Only With Your Consent)</h2>

      <h3>Telemetry (Opt-In)</h3>
      <p>
        If you choose to opt in, we collect anonymous usage data to improve the product. Telemetry is
        <strong> never enabled by default</strong>. You are prompted for explicit consent with three granular toggles:
      </p>
      <ul>
        <li><strong>Analytics</strong> — anonymous feature usage events (no autocapture, no DOM text, no keystrokes)</li>
        <li><strong>Crash Reporting</strong> — error stack traces to help us fix bugs</li>
        <li><strong>Session Replay</strong> — anonymized screen recordings with all inputs and text masked</li>
      </ul>
      <p>
        Even when telemetry is enabled, we do <strong>not</strong> collect your IP address, and we respect your
        browser's Do Not Track setting. You can change your telemetry preferences or revoke consent entirely at any
        time in Settings.
      </p>

      <h3>Cloud Account (Optional)</h3>
      <p>
        If you create a Symploc cloud account to access features like team collaboration, insights, or
        competitive intelligence, we collect:
      </p>
      <ul>
        <li>Email address and name</li>
        <li>Organization name (if applicable)</li>
        <li>Data you sync to the cloud (tasks, insights, briefings, knowledge graph)</li>
      </ul>
      <p>
        A cloud account is entirely optional. Symploc works fully offline without one.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li><strong>Product functionality</strong> — powering cloud features you've opted into</li>
        <li><strong>Bug fixing</strong> — using crash reports to identify and resolve issues</li>
        <li><strong>Product improvement</strong> — understanding which features are used to guide development</li>
      </ul>
      <p>
        We do <strong>not</strong> use your data for advertising, and we do <strong>not</strong> sell your data to third parties.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Symploc integrates with services that you connect. We do not share your data with these services
        — you initiate each connection and authenticate directly.
      </p>
      <ul>
        <li><strong>AI Providers (Anthropic, OpenAI)</strong> — your API keys or subscriptions, governed by their terms. We do not store or proxy your keys on our servers.</li>
        <li><strong>Integrations (Linear, Jira, GitHub, Fly.io)</strong> — connected via OAuth at your request. Data flows directly between your app and the service.</li>
        <li><strong>PostHog</strong> — analytics processing (only if you consent). Configured with IP suppression.</li>
        <li><strong>Sentry</strong> — crash report processing (only if you consent).</li>
      </ul>

      <h2>5. Data Storage and Security</h2>
      <ul>
        <li><strong>Local data</strong> — stored in SQLite on your device, encrypted at the OS level</li>
        <li><strong>Credentials</strong> — stored in your operating system's secure keychain, never in plain text</li>
        <li><strong>Cloud data</strong> — stored in encrypted PostgreSQL databases with access controls</li>
      </ul>

      <h2>6. Your Choices</h2>
      <ul>
        <li><strong>Use without an account</strong> — all core features work locally, no sign-up required</li>
        <li><strong>Control telemetry</strong> — opt in or out at any time with granular toggles</li>
        <li><strong>Delete your data</strong> — local data is yours to delete. Cloud account data can be deleted by contacting us.</li>
        <li><strong>Disconnect integrations</strong> — revoke any third-party connection at any time</li>
      </ul>

      <h2>7. Children's Privacy</h2>
      <p>
        Symploc is not directed at children under 13. We do not knowingly collect personal information from
        children. If you believe a child has provided us with personal data, please contact us and we will delete it.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be communicated through the application
        or on this page. The "Last updated" date at the top reflects the most recent revision.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:contact@symploc.com">contact@symploc.com</a>.
      </p>
      <p>
        Symploc, LLC · 131 Continental Dr, Suite 305, Newark, DE 19713, USA
      </p>
    </LegalPage>
  );
}
