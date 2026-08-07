import { experience } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

const Experience = () => {
  return (
    <section id='experience' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='experience'
          title='Working Experience'
          lede='From Salesforce agency work to data engineering to leading an international product team.'
        />
      </Reveal>

      <ol className='border-l border-line ml-2 md:ml-4'>
        {experience.map((job, idx) => (
          <li key={job.company} className='pb-12 pl-6 md:pl-10 last:pb-0'>
            <Reveal delay={idx * 120}>
              {/* timeline marker */}

              <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                <div className='flex gap-5'>
                  <span
                    className='mt-2 h-2.5 w-2.5 rounded-full bg-accent'
                    aria-hidden='true'
                  />
                  <h3 className='text-xl font-bold'>{job.role}</h3>
                </div>
                <p className='text-sm text-accent'>{job.period}</p>
              </div>
              <p className='text-muted'>
                {job.company} · {job.location}
              </p>
              <p className='mt-3 text-sm text-muted max-w-3xl'>{job.intro}</p>
              <ul className='mt-3 pl-5 list-disc flex flex-col gap-1 max-w-3xl'>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className='mt-4 flex flex-wrap gap-2'>
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs border border-line bg-panel rounded-full px-3 py-1 text-muted'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
