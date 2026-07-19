'use client'

import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const hiddenByDirection: Record<Direction, string> = {
  up: 'opacity-0 translate-y-8',
  down: 'opacity-0 -translate-y-8',
  left: 'opacity-0 translate-x-8',
  right: 'opacity-0 -translate-x-8',
  none: 'opacity-0',
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Where the element slides in from (visually). Default: up (fade-in rising). */
  from?: Direction;
  /** Stagger delay in ms. */
  delay?: number;
  /** If true, animates only the first time; otherwise fades out again on exit. */
  once?: boolean;
};

/**
 * Scroll-linked fade wrapper. Elements fade/slide in when they enter the
 * viewport and fade back out when they leave, unless `once` is set.
 */
export default function Reveal({
  children,
  className = '',
  from = 'up',
  delay = 0,
  once = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform
        motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100
        ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenByDirection[from]}
        ${className}`}
    >
      {children}
    </div>
  );
}
