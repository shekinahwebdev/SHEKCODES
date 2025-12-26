import { useEffect, useRef } from "react";

export default function OrbCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const circles = circlesRef.current;
    if (!circles.length) return;

    circles.forEach((circle) => {
      circle.dataset.x = "0";
      circle.dataset.y = "0";
    });

    const handleMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        const scale = (circles.length - index) / circles.length;

        circle.style.transform = `translate(${x - 13}px, ${
          y - 13
        }px) scale(${scale})`;

        // const cx = parseFloat(circle.dataset.x!);
        // const cy = parseFloat(circle.dataset.y!);

        circle.dataset.x = x.toString();
        circle.dataset.y = y.toString();

        const next = circles[index + 1] || circles[0];
        const nx = parseFloat(next.dataset.x!);
        const ny = parseFloat(next.dataset.y!);

        x += (nx - x) * 0.3;
        y += (ny - y) * 0.3;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={cursorRef} className="cursor">
      {Array.from({ length: 20 }).map((_, i) => {
        return (
          <div
            key={i}
            ref={(el) => {
              if (el) circlesRef.current[i] = el;
            }}
            className="circle"
          />
        );
      })}
    </div>
  );
}
