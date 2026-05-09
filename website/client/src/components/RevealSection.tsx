/**
 * MERIDIAN — RevealSection Component
 * Wraps any section in an IntersectionObserver-based scroll reveal
 */
import { useEffect, useRef, ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: `opacity 0.75s ease, transform 0.75s ease`,
      }}
    >
      {children}
    </div>
  );
}
