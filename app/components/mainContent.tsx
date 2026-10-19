import Image from 'next/image';
import { LuLinkedin, LuGithub, LuMail, LuDownload, LuMapPin } from 'react-icons/lu';
import { profile } from '../data/cv';
import Reveal from './reveal';
import SystemDiagram from './systemDiagram';

const sizeLogoButtons = 24;

const socialLinks = [
  { icon: <LuGithub size={sizeLogoButtons} />, link: profile.github, label: 'GitHub profile' },
  { icon: <LuLinkedin size={sizeLogoButtons} />, link: profile.linkedin, label: 'LinkedIn profile' },
  { icon: <LuMail size={sizeLogoButtons} />, link: `mailto:${profile.email}`, label: `Email ${profile.email}` },
];

export const MainContent = () => {
  return (
    <section
      id='home'
      className='grid min-h-[calc(100svh-3.75rem)] items-center gap-12 px-4 py-14 lg:grid-cols-[1.15fr_1fr] lg:gap-14'
    >
      <div className='flex flex-col items-start gap-6'>
        <Reveal from='none' once>
          <div className='flex items-center gap-4'>
            <Image
              className='size-16 rounded-lg object-cover ring-1 ring-line md:size-20'
              src='/img/photo_portrait.webp'
              width={160}
              height={160}
              alt='Portrait of Sergio Rodrigo Cárdenas Rivera'
              priority
            />
            <p className='font-mono text-sm text-accent md:text-base'>
              {`// ${profile.role.toLowerCase()}`}
            </p>
          </div>
        </Reveal>

        <h1 className='font-display font-stretch-expanded text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl'>
          {profile.firstName}
          <span className='mt-2 block text-2xl font-medium text-muted md:text-3xl'>
            {profile.lastName}
          </span>
        </h1>

        <p className='max-w-xl text-lg text-foreground/90'>{profile.tagline}</p>

        <ul className='flex flex-col gap-1.5 font-mono text-sm text-muted'>
          <li className='flex items-center gap-2'>
            <LuMapPin aria-hidden='true' /> {profile.location}
          </li>
          <li className='flex items-center gap-2 text-foreground'>
            <span aria-hidden='true' className='ml-px size-2 bg-accent-2' />
            {profile.availability}
          </li>
        </ul>

        <div className='flex flex-wrap items-center gap-3'>
          <a
            className='flex cursor-pointer items-center gap-2 rounded-md bg-accent-solid px-5 py-3 font-bold text-accent-fg transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-95'
            href={profile.cvFile}
            download='sergio_cardenas_cv.pdf'
          >
            <LuDownload aria-hidden='true' /> Download CV
          </a>
          <a
            className='flex cursor-pointer items-center rounded-md border border-line px-5 py-3 font-bold transition-all duration-200 ease-out hover:border-accent hover:text-accent active:scale-95'
            href='#contact'
          >
            Get in touch
          </a>
          <div className='flex gap-1'>
            {socialLinks.map((el) => (
              <a
                key={el.label}
                href={el.link}
                target={el.link.startsWith('http') ? '_blank' : undefined}
                rel='noopener noreferrer'
                aria-label={el.label}
                className='rounded-md border border-transparent p-3 text-muted transition-all duration-200 ease-out hover:border-line hover:text-accent active:scale-95'
              >
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Reveal from='right' once>
        <SystemDiagram />
      </Reveal>
    </section>
  );
};
