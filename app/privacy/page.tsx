import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Privacy Policy | Reform NB",
  description:
    "Privacy policy for Reform NB (nbreform.ca). Learn how we handle your data, protect your identity, and keep your communications confidential.",
};

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <BackLink />

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0"
          aria-hidden="true"
        >
          <ShieldCheck size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight uppercase">
          Privacy Policy
        </h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-4xl">
        <p className="text-xl text-neutral-300 leading-relaxed mb-8">
          Your privacy and safety are fundamental to our mission. Reform NB
          operates under strict principles to protect every person who visits
          this site, shares information, or contributes to our investigations.
          This policy explains what data we collect, how we use it, and the
          steps we take to keep you safe.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Information We Collect
        </h2>
        <p className="text-neutral-300 mb-6">
          When you visit nbreform.ca, our servers log standard technical data
          including IP addresses, browser type, referring pages, and pages
          viewed. This is routine server logging used solely to maintain site
          performance and security. We do not use tracking cookies, advertising
          pixels, or third-party analytics services that profile visitors. Any
          cookies used are strictly functional — for example, to remember your
          session preferences or prevent repeated display of banners.
        </p>
        <p className="text-neutral-300 mb-6">
          If you contact us through our contact form, we collect the information
          you voluntarily provide: your name, email address, and message
          content. If you subscribe to our newsletter, we collect your email
          address. We never require personal identification beyond what is
          necessary to respond to your inquiry or deliver updates.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          How We Use Your Information
        </h2>
        <p className="text-neutral-300 mb-6">
          Information you provide through the contact form is used solely to
          respond to your message. Newsletter email addresses are used only to
          send Reform NB updates and can be unsubscribed at any time. We do not
          sell, rent, trade, or share your personal information with any third
          party under any circumstances. Your data will never be used for
          commercial advertising or shared with government agencies unless
          required by a valid Canadian court order — and we would contest such
          orders vigorously.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Source Protection
        </h2>
        <p className="text-neutral-300 mb-6">
          Protecting our sources is non-negotiable. Tips and documents submitted
          to Reform NB are handled through encrypted channels. We use ProtonMail
          (reformnb-tips@proton.me) for end-to-end encrypted communication. We
          do not keep identifiable records of our sources beyond what is
          absolutely necessary for verification. We recommend that sources use
          Tor Browser or a trusted VPN when contacting us, and we provide
          guidance on secure communication practices upon request.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Data Security
        </h2>
        <p className="text-neutral-300 mb-6">
          Our site is built as a static application with no server-side database
          storing user information. Contact form submissions are routed directly
          to encrypted email without intermediate storage. We employ
          industry-standard HTTPS encryption for all data in transit. Our
          infrastructure is regularly audited for vulnerabilities, and we follow
          best practices for secure web development. In the event of a data
          breach, affected users will be notified promptly and transparently.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Third-Party Services
        </h2>
        <p className="text-neutral-300 mb-6">
          nbreform.ca may embed content from third-party services such as
          YouTube for video content or Unsplash for images. These services may
          set their own cookies and collect data according to their own privacy
          policies. We have no control over third-party cookie practices and
          encourage you to review the privacy policies of any embedded services.
          We do not integrate with social media tracking widgets or advertising
          networks.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Your Rights
        </h2>
        <p className="text-neutral-300 mb-6">
          Under Canada's Personal Information Protection and Electronic
          Documents Act (PIPEDA) and applicable provincial legislation, you have
          the right to access any personal information we hold about you, to
          request corrections, and to request deletion of your data. To exercise
          these rights, contact us at reformnb-tips@proton.me. We will respond
          to all legitimate requests within 30 days.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Changes to This Policy
        </h2>
        <p className="text-neutral-300 mb-6">
          We may update this privacy policy from time to time. Significant
          changes will be noted on this page with an updated effective date. We
          encourage you to review this page periodically. Continued use of
          nbreform.ca after changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-3xl font-serif font-bold text-white mt-12 mb-6">
          Contact
        </h2>
        <p className="text-neutral-300 mb-6">
          If you have questions or concerns about this privacy policy or our
          data practices, please reach out to us at{" "}
          <code className="text-crisis-text font-mono text-sm select-all">
            reformnb-tips@proton.me
          </code>
          . We take every inquiry seriously.
        </p>
      </div>

      <div className="mt-16 pt-12 border-t border-neutral-800 text-center">
        <p className="text-sm text-neutral-300">
          Last updated: April 2025
        </p>
      </div>
    </PageWrapper>
  );
}
