'use client'

import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import type { Content } from '../i18n/content';
import { localePath } from '../i18n/config';
import ThemeToggle from './themeToggle';

// Section ids stay English in both locales; only the labels change.
const navKeys = ['about', 'experience', 'skills', 'projects', 'contact'] as const;

export default function MyNavbar({ t }: { t: Content }) {
  const { nav } = t.ui;
  const navSections = navKeys.map((key) => ({ key, tag: nav[key] }));
  const otherLang = t.lang === 'en' ? 'es' : 'en';
  const langLink = (
    <a
      href={localePath(otherLang)}
      hrefLang={otherLang}
      lang={otherLang}
      aria-label={`${nav.langCode} — ${nav.langLabel}`}
      className='rounded-md border border-line px-2 py-1 font-mono text-xs font-medium text-muted transition-colors duration-200 hover:border-accent hover:text-accent'
    >
      {nav.langCode}
    </a>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scrollspy: highlight the nav item whose section is currently on screen.
  useEffect(() => {
    // 'home' is observed but has no nav item, so the highlight clears at the top
    const sections = ['home', ...navKeys]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (key: string) =>
    `font-bold transition-colors duration-200 ${
      activeSection === key ? 'text-accent' : 'text-muted hover:text-accent'
    }`;

  return (
    <header className='flex w-full items-center py-5 border-b border-line bg-background/80 backdrop-blur-md sticky top-0 z-50 h-15'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <a
          href='#home'
          className={`font-display font-stretch-expanded font-bold md:text-2xl cursor-pointer text-accent`}
        >
          srodrigo23.dev
        </a>

        <div className='hidden md:flex items-center gap-4'>
          <nav className='font-display font-stretch-expanded' aria-label={nav.main}>
            <ul className='flex gap-7'>
              {navSections.map((el) => (
                <li key={el.key}>
                  <a href={`#${el.key}`} className={`${linkClass(el.key)} text-lg`}>
                    {el.tag}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {langLink}
          <ThemeToggle t={t} />
        </div>

        <div className='md:hidden flex items-center gap-1'>
          {langLink}
          <ThemeToggle t={t} />
          <button
            className='p-2 cursor-pointer hover:text-accent transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={nav.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='bg-background h-screen border-l border-line'>
          <div className='flex justify-end p-4'>
            <button
              className='p-2 cursor-pointer hover:text-accent transition-colors'
              onClick={() => setIsMenuOpen(false)}
              aria-label={nav.closeMenu}
            >
              <LuX size={28} />
            </button>
          </div>
          <nav className={`font-display font-stretch-expanded px-6`} aria-label={nav.mobile}>
            <ul className='flex flex-col gap-6'>
              {navSections.map((el) => (
                <li key={el.key} className='border-b border-line pb-2'>
                  <a
                    href={`#${el.key}`}
                    className={`${linkClass(el.key)} text-xl block`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.tag}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
