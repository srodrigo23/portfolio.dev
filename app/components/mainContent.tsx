'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { LuLinkedin, LuGithub, LuMail, LuDownload, LuMapPin } from 'react-icons/lu';
import { profile } from '../data/cv';
import Reveal from './reveal';

const TYPE_DELAY = 90;

export const MainContent = () => {
  const sizeLogoButtons = 26;

  // Typewriter: first name types out, then the rest of the hero fades in.
  const [typedCount, setTypedCount] = useState(0);
  const doneTyping = typedCount >= profile.firstName.length;

  useEffect(() => {
    if (doneTyping) return;
    const id = setTimeout(() => setTypedCount((prev) => prev + 1), TYPE_DELAY);
    return () => clearTimeout(id);
  }, [typedCount, doneTyping]);

  const socialLinks = [
    {
      icon: <LuGithub size={sizeLogoButtons} />,
      link: profile.github,
      label: 'GitHub profile',
    },
    {
      icon: <LuLinkedin size={sizeLogoButtons} />,
      link: profile.linkedin,
      label: 'LinkedIn profile',
    },
    {
      icon: <LuMail size={sizeLogoButtons} />,
      link: `mailto:${profile.email}`,
      label: `Email ${profile.email}`,
    },
  ];

  return (
    <section id='home' className='flex min-h-[calc(100vh-3.75rem)] items-center'>
      <div className='w-full flex flex-col justify-center items-center gap-5 px-4 py-16'>
        <Reveal from='none' once>
          <div className='relative rounded-full w-44 md:w-56 overflow-hidden ring-2 ring-line'>
            <Image
              className='rounded-full object-cover'
              src='/img/photo_react_developer.webp'
              width={500}
              height={500}
              alt='Portrait of Sergio Rodrigo Cárdenas Rivera'
              priority
            />
            <div className='absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/90 to-transparent' />
          </div>
        </Reveal>

        <h1 className='text-center'>
          <span className='block text-3xl md:text-5xl font-mono font-bold tracking-tight'>
            {profile.firstName.slice(0, typedCount)}
            <span
              className={`text-accent ${doneTyping ? 'animate-pulse' : ''}`}
              aria-hidden='true'
            >
              _
            </span>
          </span>
          <span
            className={`block text-lg md:text-2xl font-mono text-muted mt-1 transition-opacity duration-700 ${
              doneTyping ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {profile.lastName}
          </span>
        </h1>

        <div
          className={`flex flex-col items-center gap-5 transition-all duration-700 ${
            doneTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } motion-reduce:transition-none motion-reduce:opacity-100`}
        >
          <p className='text-accent text-sm md:text-base tracking-widest'>
            {`> ${profile.role}`}
          </p>

          <p className='px-5 xl:w-1/2 md:w-2/3 text-muted text-center'>
            {profile.tagline}
          </p>

          <p className='flex items-center gap-1.5 text-sm text-muted'>
            <LuMapPin aria-hidden='true' /> {profile.location}
          </p>

          <div className='flex flex-wrap justify-center gap-3'>
            <a
              className='rounded-md bg-accent-solid text-accent-fg font-bold py-2 px-4 cursor-pointer flex items-center gap-2 transition-all duration-200 ease-out hover:scale-105 active:scale-95'
              href={profile.cvFile}
              download='sergio_cardenas_cv.pdf'
            >
              <LuDownload aria-hidden='true' /> Download CV
            </a>

            <a
              className='rounded-md border border-line font-bold text-sm px-4 py-2 cursor-pointer flex items-center transition-all duration-200 ease-out hover:border-accent hover:text-accent active:scale-95'
              href='#contact'
            >
              Get In Touch
            </a>
          </div>

          <div className='pt-2 flex gap-3'>
            {socialLinks.map((el) => (
              <a
                key={el.label}
                href={el.link}
                target={el.link.startsWith('http') ? '_blank' : undefined}
                rel='noopener noreferrer'
                aria-label={el.label}
                className='p-3 rounded-lg border border-transparent
                  transition-all duration-200 ease-out text-muted
                  hover:text-accent hover:border-line hover:-translate-y-0.5
                  active:scale-95'
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
