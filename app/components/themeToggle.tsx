'use client'

import { useSyncExternalStore } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';

/**
 * The theme lives in data-theme on <html> (applied pre-paint by the inline
 * script in layout.tsx). This subscribes to that attribute directly, so the
 * button always reflects reality — during SSR it renders empty.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.dataset.theme ?? null;
const getServerSnapshot = () => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className='p-2 rounded-lg text-muted cursor-pointer border border-transparent
        transition-all duration-200 hover:text-accent hover:border-line active:scale-95'
    >
      {/* stable size so the navbar doesn't shift while hydrating */}
      <span className='block h-[22px] w-[22px]'>
        {theme === 'dark' ? <LuSun size={22} /> : theme === 'light' ? <LuMoon size={22} /> : null}
      </span>
    </button>
  );
}
