import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Symploc",
  description: "Terms of Service for Symploc desktop application.",
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="March 31, 2026">
      <p>
        These terms govern your use of the Symploc desktop application and related cloud services
        ("Service") provided by Symploc, LLC ("we", "us", "our"). By downloading, installing, or using
        Symploc, you agree to these terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        Symploc is a desktop application for project management and AI agent orchestration. It allows you to
        manage projects, run AI coding agents, receive automated insights, and connect to third-party
        development tools. The application operates primarily on your local machine with optional cloud features.
      </p>

      <h2>2. Account</h2>
      <p>
        An account is not required to use Symploc's core features. If you create a cloud account, you are
        responsible for maintaining the security of your credentials. You must provide accurate information and
        promptly update it if anything changes.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Reverse engineer, decompile, or disassemble the application</li>
        <li>Attempt to gain unauthorized access to our systems or other users' data</li>
        <li>Use the Service to develop a competing product</li>
        <li>Abuse cloud resources or circumvent usage limits</li>
      </ul>

      <h2>4. Your Data and Intellectual Property</h2>
      <p>
        <strong>You own your data.</strong> Your projects, code, configurations, and any content you create
        using Symploc remain entirely yours. We claim no ownership or license over your work.
      </p>
      <p>
        <strong>We own the application.</strong> Symploc, its design, code, and branding are the intellectual
        property of Symploc, LLC. Your right to use the application is granted under these terms and may be
        revoked if you violate them.
      </p>

      <h2>5. AI-Generated Content</h2>
      <p>
        Symploc orchestrates AI agents (such as Claude Code and OpenAI Codex) to assist with development tasks.
        Regarding AI-generated outputs:
      </p>
      <ul>
        <li><strong>No accuracy guarantee</strong> — AI outputs may contain errors, bugs, or security vulnerabilities. You are responsible for reviewing all AI-generated code before using it.</li>
        <li><strong>Your responsibility</strong> — any code, content, or actions produced by AI agents within your sessions are your responsibility. You should review and test AI outputs as you would any contributed code.</li>
        <li><strong>Third-party terms apply</strong> — AI providers (Anthropic, OpenAI, and others) have their own terms of service that govern the use of their models. You are responsible for complying with those terms.</li>
        <li><strong>API keys</strong> — you provide your own API keys or subscriptions for AI providers. We do not store, proxy, or have access to your keys on our servers.</li>
      </ul>

      <h2>6. Third-Party Integrations</h2>
      <p>
        Symploc connects to third-party services (Linear, Jira, GitHub, Fly.io, and others) at your request.
        These integrations are governed by their respective terms of service. We are not responsible for the
        availability, accuracy, or conduct of third-party services.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Your privacy matters to us. Please review our <a href="/privacy">Privacy Policy</a> for details on how we
        handle your data. The short version: local-first, no account required, telemetry is opt-in only.
      </p>

      <h2>8. Service Availability</h2>
      <p>
        The desktop application works offline and does not depend on our servers for core functionality. Cloud
        features are provided on a best-effort basis. We may perform maintenance, updates, or changes to cloud
        services with reasonable notice when possible.
      </p>

      <h2>9. Pricing</h2>
      <p>
        Symploc is currently offered free of charge. We reserve the right to introduce paid features or plans in
        the future. Any pricing changes will be communicated in advance, and existing free functionality will not
        be removed without notice.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties
        of any kind, whether express or implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement.
      </p>
      <p>
        We do not warrant that the Service will be uninterrupted, error-free, or that AI-generated outputs will
        be accurate, complete, or suitable for any particular purpose.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Symploc, LLC shall not be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
        directly or indirectly, or any loss of data, use, or goodwill, arising from your use of the Service.
      </p>

      <h2>12. Termination</h2>
      <p>
        You may stop using Symploc at any time by uninstalling the application. We may terminate or suspend
        access to cloud features if you violate these terms. Upon termination, your local data remains on your
        device and is unaffected.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These terms are governed by the laws of the State of Delaware, United States, without regard to conflict
        of law provisions. Any disputes shall be resolved in the courts of Delaware.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Material changes will be communicated through the
        application or on this page. Continued use of the Service after changes constitutes acceptance of the
        updated terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:contact@symploc.com">contact@symploc.com</a>.
      </p>
      <p>
        Symploc, LLC · 131 Continental Dr, Suite 305, Newark, DE 19713, USA
      </p>
    </LegalPage>
  );
}
