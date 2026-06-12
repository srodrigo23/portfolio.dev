import { sredaFont } from "../font";

export default function MyNavbar(){
  

  const navSections = [
    {
      tag: 'About',
      key: 'about',
    },
    {
      tag: 'Skills',
      key: 'skills',
    },
    {
      tag: 'Projects',
      key: 'projects',
    },
    {
      tag: 'Contact',
      key: 'contact',
    },
  ];
  return (
    <header className='flex w-full items-center py-5 border-b-blue-600 bg-black text-white'>
      <div className='container mx-auto flex justify-between'>
        <div
          className={`${sredaFont.className} font-extrabold text-2xl cursor-pointer text-emerald-500`}
        >
          srodrigo23.dev
        </div>
        <div>
          <nav className={`${sredaFont.className}`}>
            <ul className='block md:flex gap-5 cursor-pointer'>
              {navSections.map((el, idx) => {
                return (
                  <li
                    key={idx}
                    className='hover:text-amber-300 font-bold text-emerald-500 text-xl'
                  >
                    {el.tag}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}