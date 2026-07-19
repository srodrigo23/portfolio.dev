import { profile } from '../data/cv';

const Footer = () => {
  return (
    <footer className='border-t border-line mt-10'>
      <div className='container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted'>
        <p>
          © {new Date().getFullYear()} Sergio Rodrigo Cárdenas Rivera
        </p>
        <p>
          <span className='text-accent'>{'>'}</span> built with Next.js &amp;
          Tailwind ·{' '}
          <a
            href={profile.github}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition-colors'
          >
            source
          </a>{' '}
          ·{' '}
          <a href='#home' className='hover:text-accent transition-colors'>
            back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
