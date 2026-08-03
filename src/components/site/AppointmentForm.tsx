import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SERVICES } from "@/data/clinic";

const TIMES = [
  "09:30 AM",
  "11:00 AM",
  "12:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM",
];

const field =
  "w-full rounded-2xl border border-border bg-card px-4 py-3.5 text-base text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-emerald focus:ring-4 focus:ring-emerald/15";
const labelCls = "mb-2 block text-sm font-semibold text-navy";

export function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setLoading(false);
      setDone(true);
      form.reset();
    }, 1100);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className={labelCls} htmlFor="ap-name">
            Full Name
          </label>
          <input
            id="ap-name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={field}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="ap-phone">
            Phone Number
          </label>
          <input
            id="ap-phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9+ ]{10,15}"
            placeholder="+91 98404 12345"
            className={field}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="ap-email">
            Email
          </label>
          <input
            id="ap-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="ap-treatment">
            Treatment
          </label>
          <select id="ap-treatment" name="treatment" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a treatment
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure — please advise</option>
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="ap-date">
            Preferred Date
          </label>
          <input id="ap-date" name="date" type="date" required className={field} />
        </div>
        <div>
          <label className={labelCls} htmlFor="ap-time">
            Preferred Time
          </label>
          <select id="ap-time" name="time" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a slot
            </option>
            {TIMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="ap-message">
            Message
          </label>
          <textarea
            id="ap-message"
            name="message"
            rows={4}
            placeholder="Tell us briefly what you'd like help with"
            className={field}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="sm:col-span-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl gradient-emerald px-6 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <CalendarCheck className="size-5" />
          )}
          {loading ? "Reserving your slot…" : "Confirm My Appointment"}
        </button>
        <p className="sm:col-span-2 text-center text-xs text-muted-foreground">
          We reply within 15 minutes during clinic hours. Your details are never shared.
        </p>
      </form>

      <Dialog open={done} onOpenChange={setDone}>
        <DialogContent className="max-w-md rounded-3xl border-border text-center">
          <div className="mx-auto grid size-16 place-items-center rounded-full gradient-emerald text-white shadow-glow">
            <CheckCircle2 className="size-8" />
          </div>
          <DialogTitle className="mt-4 text-center font-display text-2xl text-navy">
            Appointment requested
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Thank you{name ? `, ${name.split(" ")[0]}` : ""}. Our front desk will call you shortly
            to confirm your slot. For anything urgent, WhatsApp us any time.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}