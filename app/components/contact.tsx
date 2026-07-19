import { LuMail, LuPhone, LuMapPin, LuGithub, LuLinkedin } from 'react-icons/lu';
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
    icon: <LuPhone size={22} />,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <LuMapPin size={22} />,
    label: 'Location',
    value: profile.location,
  },
  {
    icon: <LuGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/srodrigo23',
    href: profile.github,
  },
  {
    icon: <LuLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/srodrigo23',
    href: profile.linkedin,
  },
];

const Contact = () => {
  return (
    <section id='contact' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='contact'
          title='Get In Touch'
          lede="Open to interesting projects, teams and collaborations. The fastest way to reach me is email — I usually reply within a day."
        />
      </Reveal>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {contactItems.map((item, idx) => {
          const content = (
            <div className='flex items-center gap-4'>
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
                  className='block h-full border border-line bg-panel rounded-2xl p-5 transition-all duration-300 hover:border-accent/60 hover:-translate-y-0.5'
                >
                  {content}
                </a>
              ) : (
                <div className='h-full border border-line bg-panel rounded-2xl p-5'>
                  {content}
                </div>
              )}
            </Reveal>
          );
        })}

        <Reveal delay={contactItems.length * 80}>
          <a
            href={`mailto:${profile.email}?subject=Hello%20Sergio`}
            className='flex h-full items-center justify-center gap-2 rounded-2xl bg-accent text-black font-bold p-5 transition-all duration-300 hover:scale-[1.02] active:scale-95'
          >
            <LuMail aria-hidden='true' /> Say hello
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
