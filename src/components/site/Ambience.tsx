import { useEffect, useRef } from "react";

export function Ambience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute inset-0 opacity-0 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 50%) var(--my, 20%), rgba(212,175,55,0.07), transparent 70%)",
        }}
      />
      <div className="animate-drift absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_70%)] blur-3xl" />
      <div className="animate-drift absolute -right-40 top-2/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(232,198,106,0.07),transparent_70%)] blur-3xl [animation-delay:-6s]" />
    </div>
  );
}
