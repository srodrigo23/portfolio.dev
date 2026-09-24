'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

type CarouselProps = {
  /** Slides. Each child sets its own width + `snap-start`. */
  children: React.ReactNode;
  /** Accessible name for the scrollable region. */
  label: string;
  /** Slide count — needed to render the dots on the server pass. */
  count: number;
};

/**
 * Horizontal scroller built on CSS scroll-snap: the track is a plain
 * overflow-x element, so touch swiping, trackpads and arrow keys all work
 * natively. The JS here only drives the arrows, the dots, and the
 * disabled/active state — remove it and the carousel still scrolls.
 */
export default function Carousel({ children, label, count }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  /** One slide plus the flex gap — how far a single arrow press travels. */
  const step = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  };

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const distance = step() || 1;
    setIndex(Math.round(track.scrollLeft / distance));
    setAtStart(track.scrollLeft <= 1);
    // 1px slack: fractional widths mean scrollLeft rarely lands exactly
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    // Slide widths change at breakpoints, which moves every offset
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    return () => observer.disconnect();
  }, [sync]);

  const scrollTo = (left: number) => {
    const track = trackRef.current;
    if (!track) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
  };

  const page = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    scrollTo(track.scrollLeft + direction * step());
  };

  const arrow =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-accent/60 hover:text-accent disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={sync}
        role='region'
        aria-label={label}
        tabIndex={0}
        /* -mx-4 px-4 lets slides bleed to the section edges while keeping the
           focus ring and the snap positions clear of them */
        /* scroll-px-4 matches px-4 so a snapped slide lines up with the
           section's content edge, not with the bled-out border edge */
        className='no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
      >
        {children}
      </div>

      <div className='mt-6 flex items-center justify-between gap-4'>
        <div className='flex items-center gap-2'>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type='button'
              onClick={() => scrollTo(i * step())}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-muted/40 hover:bg-muted'
              }`}
            />
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label='Previous slide'
            className={arrow}
          >
            <LuArrowLeft aria-hidden='true' />
          </button>
          <button
            type='button'
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label='Next slide'
            className={arrow}
          >
            <LuArrowRight aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
}
