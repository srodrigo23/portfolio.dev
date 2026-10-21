import { IoCodeSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { MdCloudQueue } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import type { Content } from '../i18n/content';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

// Icons stay in code; the text for each card comes from ui.about.focus (same order).
const focusIcons = [
  <IoCodeSharp key='code' size={36} />,
  <FiDatabase key='data' size={36} />,
  <MdCloudQueue key='cloud' size={36} />,
  <GoPeople key='people' size={36} />,
];

const About = ({ t }: { t: Content }) => {
  const { profile, ui } = t;
  const focusAreas = ui.about.focus.map((f, i) => ({ ...f, icon: focusIcons[i] }));

  return (
    <section id='about' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug={ui.about.slug}
          title={ui.about.title}
          lede={ui.about.lede}
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
            <p className='text-accent text-sm tracking-widest mb-2'>{ui.about.highlights}</p>
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
              <div className='h-full border border-line bg-panel rounded-lg p-6 transition-colors duration-300 hover:border-accent/60'>
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
