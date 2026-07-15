'use client'

import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import { sredaFont } from "../font";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navSections = [
    { tag: 'About', key: 'about' },
    { tag: 'Skills', key: 'skills' },
    { tag: 'Projects', key: 'projects' },
    { tag: 'Contact', key: 'contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='flex w-full items-center py-5 border-b border-white/10 bg-black/80 backdrop-blur-md text-white sticky top-0 z-50 h-15 '>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <div
          className={`${sredaFont.className} font-bold md:text-2xl cursor-pointer text-amber-300 `}
        >
          srodrigo23.dev
        </div>

        <nav className={`${sredaFont.className} hidden md:flex`}>
          <ul className='flex gap-8'>
            {navSections.map((el) => (
              <li
                key={el.key}
                className='text-gray-300 hover:text-amber-300 font-bold text-lg transition-colors duration-200 cursor-pointer'
              >
                {el.tag}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className='md:hidden text-white p-2 cursor-pointer hover:text-amber-300 transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
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
        <div className='bg-black h-screen'>
              <div className='flex justify-end p-4'>
                <button
                  className='text-white p-2 cursor-pointer hover:text-amber-300 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                  aria-label='Close menu'
                >
                  <LuX size={28} />
                </button>
              </div>
              <nav className={`${sredaFont.className} px-6`}>
                <ul className='flex flex-col gap-6'>
                  {navSections.map((el) => (
                    <li
                      key={el.key}
                      className='text-gray-300 hover:text-amber-300 font-bold text-xl transition-colors duration-200 cursor-pointer border-b border-white/10 pb-2'
                      onClick={handleNavClick}
                    >
                      {el.tag}
                    </li>
                  ))}
                </ul>
              </nav>
        </div>
      </div>
    </header>
  );
}
