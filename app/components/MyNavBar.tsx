export default function MyNavbar(){

  return (
    <header className='flex w-full items-center py-3 border-b-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <div className="font-bold text-2xl">
          Sergio Rodrigo
        </div>
        <div>
          <nav>
            <ul className="block md:flex gap-3">
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}