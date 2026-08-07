import Link from 'next/link';
import { LuGraduationCap, LuAward, LuArrowUpRight } from 'react-icons/lu';
import { education, certifications, type Certification } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

/*
 * Minimal list treatment: no cards, no borders — just a dot marker and a
 * short nudge to the right on hover. `group` on the row lets the marker and
 * the title react together, and the motion-reduce pair keeps the nudge from
 * firing for users who asked for less movement.
 */
const row =
  'group transition-transform duration-300 ease-out hover:translate-x-1.5 motion-reduce:transition-none motion-reduce:hover:translate-x-0';

/** The bullet. Dims to muted at rest, picks up the accent on row hover. */
function Marker() {
  return (
    <span
      aria-hidden='true'
      className='h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60 transition-colors duration-300 group-hover:bg-accent'
    />
  );
}

/*
 * Certificates are links-in-waiting: add `link` to an entry in data/cv.ts and
 * it becomes a real anchor, arrow and all. Until then it renders as plain
 * text — no pointer cursor or underline promising a click that goes nowhere.
 */
function CertificateTitle({ cert }: { cert: Certification }) {
  const base = 'text-sm transition-colors duration-300 group-hover:text-accent';

  if (!cert.link) return <span className={base}>{cert.title}</span>;

  return (
    <Link
      href={cert.link}
      target='_blank'
      rel='noreferrer'
      className={`${base} inline-flex items-center gap-1 rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
    >
      {cert.title}
      <LuArrowUpRight
        aria-hidden='true'
        className='opacity-0 transition-opacity duration-300 group-hover:opacity-70'
      />
    </Link>
  );
}

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

      <div className='flex flex-col gap-12 lg:flex-row lg:gap-16'>
        <div className='flex flex-1 flex-col gap-5'>
          <Reveal>
            <h3 className='flex items-center gap-2 text-accent text-sm'>
              <LuGraduationCap aria-hidden='true' /> {'// degrees'}
            </h3>
          </Reveal>

          <ul className='flex flex-col gap-5'>
            {education.map((degree, idx) => (
              // li outside Reveal — a <ul> may only contain <li>, and Reveal is a div
              <li key={degree.title}>
                <Reveal from='left' delay={idx * 90}>
                  {/* the nudge lives on its own element — Reveal already owns a
                      700ms transition on this wrapper's transform */}
                  <div className={row}>
                    <div className='flex flex-wrap items-center gap-2'>
                      <Marker />
                      <h4 className='font-bold transition-colors duration-300 group-hover:text-accent'>
                        {degree.title}
                      </h4>
                      <p className='text-xs text-accent'>{`(${degree.period})`}</p>
                    </div>
                    {/* pl-3.5 = marker width + gap, so this lines up under the title */}
                    <p className='pl-3.5 text-sm text-muted'>
                      {degree.school} · {degree.location}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-1 flex-col gap-5'>
          <Reveal>
            <h3 className='flex items-center gap-2 text-accent text-sm'>
              <LuAward aria-hidden='true' /> {'// certifications'}
            </h3>
          </Reveal>

          <Reveal from='right'>
            <ul className='flex flex-col gap-3'>
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className={`${row} flex flex-wrap items-center gap-x-2 gap-y-1`}
                >
                  <Marker />
                  <CertificateTitle cert={cert} />
                  <span aria-hidden='true' className='text-muted/50'>
                    ·
                  </span>
                  <p className='text-xs text-muted'>{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
