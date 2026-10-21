type SectionHeadingProps = {
  /** Terminal-style slug shown above the title, e.g. "about" → `// about` */
  slug: string;
  title: string;
  lede?: string;
};

export default function SectionHeading({ slug, title, lede }: SectionHeadingProps) {
  return (
    <div className='mb-10'>
      <p className='font-mono text-sm text-accent'>{`// ${slug}`}</p>
      <h2 className='font-display font-stretch-expanded text-3xl md:text-4xl font-bold tracking-tight mt-2'>
        {title}
      </h2>
      {lede && <p className='text-muted mt-3 max-w-2xl'>{lede}</p>}
      {/* cobalt bar with an amber tip — the two signal colors, nothing else */}
      <div className='mt-4 flex h-1 w-16'>
        <span className='w-12 bg-accent' />
        <span className='w-4 bg-accent-2' />
      </div>
    </div>
  );
}
