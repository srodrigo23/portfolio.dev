import { IoCodeSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { MdCloudQueue } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { profile } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

const focusAreas = [
  {
    icon: <IoCodeSharp size={36} />,
    title: 'Full-Stack Development',
    description: 'React, Next.js, NestJS, Flask and FastAPI — from UI to API',
  },
  {
    icon: <FiDatabase size={36} />,
    title: 'Data & Machine Learning',
    description: 'Data engineering, scikit-learn and applied ML on real business data',
  },
  {
    icon: <MdCloudQueue size={36} />,
    title: 'Cloud & DevOps',
    description: 'AWS (S3, Amplify, RDS, Lambda), Docker and Git workflows',
  },
  {
    icon: <GoPeople size={36} />,
    title: 'Leadership & Teaching',
    description: 'Tech lead, university professor and hackathon mentor',
  },
];

const About = () => {
  return (
    <section id='about' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='about'
          title='About Me'
          lede='Software engineer from Cochabamba, Bolivia — building web, mobile and data products since 2014.'
        />
      </Reveal>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <Reveal from='left' className='flex flex-col gap-4'>
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className='leading-relaxed'>
              {paragraph}
            </p>
          ))}
          <div>
            <p className='text-accent text-sm tracking-widest mb-2'>{'// highlights'}</p>
            <ul className='pl-7 list-disc text-muted flex flex-col gap-1'>
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {focusAreas.map((area, idx) => (
            <Reveal key={area.title} from='right' delay={idx * 100}>
              <div className='h-full border border-line bg-panel rounded-2xl p-6 transition-colors duration-300 hover:border-accent/60'>
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-accent'>{area.icon}</span>
                  <p className='text-center font-medium'>{area.title}</p>
                  <p className='text-center text-xs text-muted'>{area.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
