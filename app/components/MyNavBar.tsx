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
        <div className="font-bold text-2xl">
          Sergio Rodrigo
        </div>
        <div>
          <nav>
            <ul className="block md:flex gap-5">
              {
                navSections.map((el, idx)=>{
                  return(<li>{el.tag}</li>)
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}