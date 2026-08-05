import type { ReactNode } from "react";

export function GoldButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden px-9 py-4 text-[0.7rem] uppercase tracking-[0.32em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]";
  const styles =
    variant === "primary"
      ? "border border-gold/60 text-[#050505] [background-image:var(--gradient-gold)] hover:shadow-[0_20px_60px_-25px_rgba(212,175,55,0.75)]"
      : "border border-gold/25 text-white/85 hover:border-gold/60 hover:text-white";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:shimmer-sweep_1.4s_ease-in-out]"
      />
    </a>
  );
}
