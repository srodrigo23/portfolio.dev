import { LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';
import { profile } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';

const contactItems = [
  {
    icon: <LuMail size={22} />,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <LuLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/srodrigo23',
    href: profile.linkedin,
  },
  {
    icon: <LuGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/srodrigo23',
    href: profile.github,
  },
];

const Contact = () => {
  return (
    <section id='contact' className='px-4 py-20'>
      <Reveal>
        <div className=' flex justify-between flex-col lg:flex-row'>
          <SectionHeading
            slug='contact'
            title='Get In Touch'
            lede="Open to interesting projects, teams and collaborations. The fastest way to reach me is email — Available for freelance work and remote roles."
          />
          <div className='flex flex-col gap-4 '>
          {contactItems.map((item, idx) => {
            const content = (
              <div className='flex items-center gap-4 w-fit'>
                <span className='text-accent'>{item.icon}</span>
                <span>
                  <span className='block text-xs text-muted tracking-widest'>
                    {item.label}
                  </span>
                  <span className='block text-sm break-all'>{item.value}</span>
                </span>
              </div>
            );
            return (
              <Reveal key={item.label} delay={idx * 80}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel='noopener noreferrer'
                    className='block h-full border border-line bg-panel rounded-lg p-5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5'
                  >
                    {content}
                  </a>
                ) : (
                  <div className='h-full border border-line bg-panel rounded-lg p-5'>
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
                </div>
        </div>
      </Reveal>

    </section>
  );
};

export default Contact;
