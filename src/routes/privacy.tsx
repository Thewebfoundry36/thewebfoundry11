import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/data/clinic";

const TITLE = "Privacy Policy | Mom's Smile Dental & Cosmetic Clinic";
const DESC =
  "How Mom's Smile Dental & Cosmetic Clinic in Kalavakkam collects, stores and protects patient information and appointment enquiries.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 lg:px-8">
      <h1 className="text-4xl text-navy sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 1 January 2026</p>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section>
          <h2 className="text-xl text-navy">What we collect</h2>
          <p className="mt-2">
            When you request an appointment we collect your name, phone number, email address,
            preferred treatment and any message you share. Clinical records created during treatment
            are stored separately in our patient management system.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">How we use it</h2>
          <p className="mt-2">
            Your details are used only to confirm appointments, send reminders, provide clinical
            care and respond to your enquiries. We never sell or rent patient data to third parties.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">Storage and security</h2>
          <p className="mt-2">
            Records are held on access-controlled systems and retained for the period required under
            applicable Indian medical record-keeping guidelines. Staff access is limited to those
            involved in your care.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">Your choices</h2>
          <p className="mt-2">
            You may request a copy, correction or deletion of your non-clinical data at any time by
            writing to {CLINIC.email}. You can opt out of reminders by replying STOP.
          </p>
        </section>
      </div>
    </article>
  );
}