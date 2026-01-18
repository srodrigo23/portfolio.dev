import { IoCodeSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { MdCloudQueue } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';

const About = () => {
  return (
    <section className='container mx-auto flex flex-col items-center'>
      <div className='text-4xl font-bold'>About Me</div>
      <div className='pb-10 pt-5 w-1/3 text-center'>
        I'm a passionate full stack developer with 5+ years of experience
        building web applications that solve real-world problems.
      </div>
      <div className='w-2/3 grid lg:grid-cols-2 gap-5 md:grid-cols-1'>
        <div className='flex flex-col gap-4'>
          <p>
            My journey in software development started with a curiosity about
            how things work behind the scenes. Today, I specialize in creating
            end-to-end solutions that are both technically robust and
            user-friendly.
          </p>

          <p>
            I believe in writing clean, maintainable code and staying up-to-date
            with the latest technologies. When I'm not coding, you'll find me
            contributing to open source projects or mentoring aspiring
            developers.
          </p>

          <div>
            What I bring to the table:
            <ul className=' pl-7 list-disc text-[#9E9E9E]'>
              <li>5+ years of full stack development experience </li>
              <li>Strong problem-solving and analytical skills</li>
              <li>Experience leading development teams</li>
              <li>Passion for continuous learning and improvement</li>
            </ul>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-5 md:grid-cols-2'>
          <div className='border rounded-2xl p-6'>
            <div className='flex flex-col items-center'>
              <IoCodeSharp size={40} />
              <p className='text-center'>Frontend Development</p>
              <p className='text-center text-xs'>
                Expert in React, TypeScript, and modern CSS frameworks
              </p>
            </div>
          </div>

          <div className='border rounded-2xl p-6'>
            <div className='flex flex-col items-center'>
              <FiDatabase size={40} />
              <p className='text-center'>Frontend Development</p>
              <p className='text-center text-xs'>
                Expert in React, TypeScript, and modern CSS frameworks
              </p>
            </div>
          </div>
          <div className='border rounded-2xl p-6'>
            <div className='flex flex-col items-center'>
              <MdCloudQueue size={40} />
              <p className='text-center'>Frontend Development</p>
              <p className='text-center text-xs'>
                Expert in React, TypeScript, and modern CSS frameworks
              </p>
            </div>
          </div>
          <div className='border rounded-2xl p-6'>
            <div className='flex flex-col items-center'>
              <GoPeople size={40} />
              <p className='text-center'>Frontend Development</p>
              <p className='text-center text-xs'>
                Expert in React, TypeScript, and modern CSS frameworks
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default About;
