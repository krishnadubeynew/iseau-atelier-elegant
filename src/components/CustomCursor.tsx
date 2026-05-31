import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let dx = mx, dy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-10 w-10 rounded-full border transition-[width,height,border-color,opacity] duration-300 md:block"
        style={{
          borderColor: "var(--color-sand)",
          opacity: hover ? 1 : 0.6,
          width: hover ? 64 : 40,
          height: hover ? 64 : 40,
          marginLeft: hover ? -12 : 0,
          marginTop: hover ? -12 : 0,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 rounded-full md:block"
        style={{ backgroundColor: "var(--color-cream)", mixBlendMode: "difference" }}
      />
    </>
  );
}
