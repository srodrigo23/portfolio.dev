import { LuGraduationCap, LuAward, LuUsers } from 'react-icons/lu';
import { education, certifications, teaching } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

const Education = () => {
  return (
    <section id='education' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='education'
          title='Education & Certifications'
          lede='Two engineering degrees, an ongoing master in data science, and a habit of collecting certificates.'
        />
      </Reveal>

      <div className='grid gap-10 lg:grid-cols-2'>
        <div className='flex flex-col gap-5'>
          <Reveal>
            <h3 className='flex items-center gap-2 text-accent text-sm tracking-widest'>
              <LuGraduationCap aria-hidden='true' /> {'// degrees'}
            </h3>
          </Reveal>
          {education.map((degree, idx) => (
            <Reveal key={degree.title} from='left' delay={idx * 90}>
              <div className='border border-line bg-panel rounded-2xl p-5 transition-colors duration-300 hover:border-accent/60'>
                <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                  <h4 className='font-bold'>{degree.title}</h4>
                  <p className='text-sm text-accent'>{degree.period}</p>
                </div>
                <p className='text-sm text-muted mt-1'>
                  {degree.detail} · {degree.school} · {degree.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className='flex flex-col gap-5'>
          <Reveal>
            <h3 className='flex items-center gap-2 text-accent text-sm tracking-widest'>
              <LuAward aria-hidden='true' /> {'// certifications'}
            </h3>
          </Reveal>
          <Reveal from='right'>
            <ul className='border border-line bg-panel rounded-2xl divide-y divide-line'>
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-5 py-3'
                >
                  <p className='text-sm'>{cert.title}</p>
                  <p className='text-xs text-muted'>
                    {cert.issuer} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from='right' delay={100}>
            <div className='border border-line bg-panel rounded-2xl p-5'>
              <h3 className='flex items-center gap-2 text-accent text-sm tracking-widest mb-2'>
                <LuUsers aria-hidden='true' /> {'// teaching & mentoring'}
              </h3>
              <p className='text-sm text-muted'>{teaching.summary}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
