import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Terms of Service | Mom's Smile Dental & Cosmetic Clinic";
const DESC =
  "Appointment, cancellation, payment and website usage terms for Mom's Smile Dental & Cosmetic Clinic, Kalavakkam, Chennai.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 lg:px-8">
      <h1 className="text-4xl text-navy sm:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: 1 January 2026</p>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <section>
          <h2 className="text-xl text-navy">Appointments</h2>
          <p className="mt-2">
            Requests made through this website are appointment enquiries, not confirmed bookings. A
            slot is confirmed only once our team contacts you by phone or WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">Cancellations</h2>
          <p className="mt-2">
            Please give us at least four hours&apos; notice if you cannot attend, so the slot can be
            offered to a patient in pain. Repeated no-shows may require an advance deposit.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">Fees and payment</h2>
          <p className="mt-2">
            Written estimates are provided before treatment begins. We accept UPI, cards, net
            banking and cash. Zero-cost EMI applies to eligible treatments above ₹15,000.
          </p>
        </section>
        <section>
          <h2 className="text-xl text-navy">Medical information</h2>
          <p className="mt-2">
            Content on this website is general information and is not a substitute for a clinical
            examination or personalised professional advice.
          </p>
        </section>
      </div>
    </article>
  );
}