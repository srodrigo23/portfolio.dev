import { LuArrowUpRight } from 'react-icons/lu';
import { projects } from '../data/cv';
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

      <div className='grid gap-6 md:grid-cols-2'>
        {projects.map((project, idx) => (
          <Reveal key={project.title} from={idx % 2 === 0 ? 'left' : 'right'} delay={(idx % 2) * 100}>
            <article className='group h-full flex flex-col border border-line bg-panel rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/60 hover:-translate-y-1'>
              {/* header band */}
              <div className='flex items-center justify-between px-6 py-4 border-b border-line bg-background/60'>
                <p className='text-accent font-bold text-lg' aria-hidden='true'>
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <p className='text-xs text-muted tracking-widest'>{project.kind}</p>
                <p className='text-xs text-muted'>{project.year}</p>
              </div>

              <div className='flex flex-col gap-3 p-6 grow'>
                <h3 className='text-xl font-bold group-hover:text-accent transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-sm text-muted'>{project.description}</p>
                <ul className='pl-5 list-disc text-sm flex flex-col gap-1'>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className='mt-auto pt-4 flex flex-wrap items-center gap-2'>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className='text-xs border border-line rounded-full px-3 py-1 text-muted'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.link && (
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-auto inline-flex items-center gap-1 text-sm text-accent hover:underline underline-offset-4'
                      aria-label={`Open ${project.title}`}
                    >
                      view <LuArrowUpRight aria-hidden='true' />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
