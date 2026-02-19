import Image from "next/image";

export default function Skills(){
  return (
    <>
      <section className='container mx-auto flex flex-col items-center justify-center h-screen '>
        <div className='text-2xl font-bold'>Skills & Technologies</div>
        <div className='text-center text-[#9E9E9E]'>
          A comprehensive toolkit for building modern, scalable applications
          across the entire technology stack.
        </div>
        <div className='w-2/3 grid lg:grid-cols-2 gap-5 md:grid-cols-2'>
          <div>
            <div>Frontend</div>
            <div className=''>
              <span>React</span>
              <span>Typescript</span>
              <span>Next.js</span>
              <span>Vue.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind CSS</span>
              <span>SASS</span>
              <span>React</span>
            </div>
          </div>
          <div>
            <div>Backend</div>
          </div>
          <div>
            <div>Database</div>
          </div>
          <div>
            <div>DevOps & Tools</div>
          </div>
          <div>
            <div>Mobile & Other</div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='font-medium'>GitHub Activity</p>
          <Image
            src='https://ghchart.rshah.org/srodrigo23'
            width={800}
            height={128}
            alt='GitHub activity chart'
            className='w-full h-auto'
            unoptimized
          />
        </div>
      </section>
    </>
  );
}