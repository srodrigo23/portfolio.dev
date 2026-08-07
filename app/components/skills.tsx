// import Image from 'next/image';
import { skillGroups } from '../data/cv';
import Reveal from './reveal';
import SectionHeading from './sectionHeading';
import TechIcon from './techIcon';

export default function Skills() {
  return (
    <section id='skills' className='px-4 py-20'>
      <Reveal>
        <SectionHeading
          slug='skills'
          title='Skills & Technologies'
          lede='A toolkit for building modern, scalable applications across the entire stack.'
        />
      </Reveal>

      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {skillGroups.map((group, idx) => (
          <Reveal key={group.title} delay={(idx % 4) * 90}>
            <div className='h-full border border-line bg-panel rounded-2xl p-5 transition-colors duration-300 hover:border-accent/60'>
              <h3 className='text-sm text-accent mb-3'>
                {`// ${group.title}`}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='inline-flex items-center gap-1.5 text-xs border border-line rounded-full px-3 py-1 text-foreground/90 transition-colors duration-200 hover:border-accent/60 hover:bg-accent/5'
                  >
                    <TechIcon name={item} className='text-sm' />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* fcd34d */}
      {/* <Reveal className='mt-12 flex flex-col gap-3'>
        <p className='text-accent text-sm tracking-widest'>
          {'// github activity'}
        </p>
        <div className='border border-line bg-panel rounded-2xl p-4 overflow-x-auto'>
          <Image
            src='https://ghchart.rshah.org/srodrigo23'
            width={800}
            height={128}
            alt='GitHub contribution chart for srodrigo23'
            className='w-full min-w-[640px] h-auto'
            unoptimized
          />
        </div>
      </Reveal> */}
    </section>
  );
}
