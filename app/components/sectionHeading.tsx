import { displayFont } from '../font';

type SectionHeadingProps = {
  /** Terminal-style slug shown above the title, e.g. "about" → `// about` */
  slug: string;
  title: string;
  lede?: string;
};

export default function SectionHeading({ slug, title, lede }: SectionHeadingProps) {
  return (
    <div className='mb-10'>
      <p className='text-accent text-md'>{`// ${slug}`}</p>
      <h2 className={`${displayFont.className} text-3xl md:text-4xl font-bold mt-2`}>
        {title}
      </h2>
      {lede && <p className='text-muted mt-3 max-w-2xl'>{lede}</p>}
      <div className='mt-4 h-px w-16 bg-accent' />
    </div>
  );
}
