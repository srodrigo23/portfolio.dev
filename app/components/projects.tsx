import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import { projects } from '../data/cv';
import Carousel from './carousel';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

const Projects = () => {
  return (
    <section id='projects' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='projects'
          title='Projects'
          lede='Selected personal and professional work — from native Android to computer vision to this site.'
        />
      </Reveal>

      {/* One Reveal around the whole track: a per-card fade would fight the
          horizontal scroll, since off-screen slides never enter the viewport. */}
      <Reveal>
        <Carousel label='Projects' count={projects.length}>
          {projects.map((project, idx) => (
            <div
              key={project.title}
              /* 85% on phones leaves the next card peeking, which is what
                 tells people the row scrolls */
              className='w-[85%] shrink-0 snap-start sm:w-[70%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]'
            >
              <article className='group relative flex h-full min-h-80 flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-300 hover:border-accent/60'>
                {/*
                  Full-bleed art, dimmed so it reads as texture rather than a
                  photo. It sits under the content instead of taking its own
                  band, which keeps the card to a single rectangle.
                */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=''
                    fill
                    sizes='(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw'
                    className='z-0 object-cover opacity-20 transition duration-500 ease-out group-hover:scale-105 group-hover:opacity-35'
                  />
                ) : (
                  /* No art yet — a faint accent wash so the card isn't a flat slab */
                  <div
                    aria-hidden='true'
                    className='absolute inset-0 z-0 bg-linear-to-br from-accent/12 via-transparent to-accent-2/12'
                  />
                )}

                {/* Scrim: keeps text legible over any image, in either theme */}
                <div
                  aria-hidden='true'
                  className='absolute inset-0 z-0 bg-linear-to-t from-panel via-panel/85 to-panel/40'
                />

                <div className='relative z-10 flex grow flex-col gap-3 p-6'>
                  <div className='flex items-baseline justify-between gap-3'>
                    <p className='text-xs text-muted'>
                      {project.kind} · {project.year}
                    </p>
                    <p
                      aria-hidden='true'
                      className='text-4xl font-bold leading-none text-foreground/5 transition-colors duration-300 group-hover:text-accent/15'
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                  </div>

                  <h3 className='text-xl font-bold transition-colors duration-300 group-hover:text-accent'>
                    {project.link ? (
                      /* Stretched link: the whole card is clickable, but there's
                         still just one anchor for screen readers and keyboards. */
                      <Link
                        href={project.link}
                        target='_blank'
                        rel='noreferrer'
                        className='rounded-sm after:absolute after:inset-0 after:content-[""] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
                      >
                        {project.title}
                      </Link>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className='text-sm text-muted'>{project.description}</p>

                  <ul className='flex flex-col gap-1.5'>
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className='flex items-start gap-2 text-sm'
                      >
                        <span
                          aria-hidden='true'
                          className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60 transition-colors duration-300 group-hover:bg-accent'
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className='mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-2 pt-5'>
                    <p className='text-xs text-muted'>
                      {project.stack.join(' · ')}
                    </p>
                    {project.link && (
                      <span
                        aria-hidden='true'
                        className='inline-flex shrink-0 items-center gap-1 text-sm text-accent'
                      >
                        view
                        <LuArrowUpRight className='transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Carousel>
      </Reveal>
    </section>
  );
};

export default Projects;
