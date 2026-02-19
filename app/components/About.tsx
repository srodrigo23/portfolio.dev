import { IoCodeSharp } from 'react-icons/io5';
import { FiDatabase } from 'react-icons/fi';
import { MdCloudQueue } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import Image from 'next/image';

const skills = [
  {
    icon: <IoCodeSharp size={40} />,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks',
  },
  {
    icon: <FiDatabase size={40} />,
    title: 'Backend Development',
    description: 'Proficient in Node.js, REST APIs, and relational databases',
  },
  {
    icon: <MdCloudQueue size={40} />,
    title: 'Cloud & DevOps',
    description: 'Experience with AWS, Docker, and CI/CD pipelines',
  },
  {
    icon: <GoPeople size={40} />,
    title: 'Team Leadership',
    description: 'Leading agile teams and mentoring junior developers',
  },
];

const About = () => {
  return (
    <section className='container mx-auto px-4 py-10 flex flex-col items-center'>
      <h2 className='text-4xl font-bold'>About Me</h2>
      <p className='pb-10 pt-5 w-full sm:w-2/3 lg:w-1/3 text-center text-[#9E9E9E]'>
        I&apos;m a passionate full stack developer with 5+ years of experience
        building web applications that solve real-world problems.
      </p>

      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-4'>
            <p>
              My journey in software development started with a curiosity about
              how things work behind the scenes. Today, I specialize in creating
              end-to-end solutions that are both technically robust and
              user-friendly.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date
              with the latest technologies. When I&apos;m not coding, you&apos;ll find me
              contributing to open source projects or mentoring aspiring developers.
            </p>
            <div>
              What I bring to the table:
              <ul className='pl-7 list-disc text-[#9E9E9E]'>
                <li>5+ years of full stack development experience</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Experience leading development teams</li>
                <li>Passion for continuous learning and improvement</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {skills.map((skill) => (
              <div key={skill.title} className='border rounded-2xl p-6'>
                <div className='flex flex-col items-center gap-2'>
                  {skill.icon}
                  <p className='text-center font-medium'>{skill.title}</p>
                  <p className='text-center text-xs text-[#9E9E9E]'>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
