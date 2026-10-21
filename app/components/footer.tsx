import type { Content } from '../i18n/content';

const Footer = ({ t }: { t: Content }) => {
  const { profile, ui } = t;

  return (
    <footer className='border-t border-line mt-10'>
      <div className='container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted'>
        <p>
          © {new Date().getFullYear()} Sergio Rodrigo Cárdenas Rivera
        </p>
        <p>
          <span className='text-accent'>{'>'}</span> {ui.footer.builtWith} ·{' '}
          <a
            href={profile.github}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition-colors'
          >
            {ui.footer.source}
          </a>{' '}
          ·{' '}
          <a href='#home' className='hover:text-accent transition-colors'>
            {ui.footer.top}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
