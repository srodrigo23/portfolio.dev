
'use client'

import { useEffect, useState} from 'react';
import { LuLinkedin, LuGithub, LuMail } from 'react-icons/lu';

const FirstContent = () => {
  
  const text = 'FullStack Developer';
  const delay = 500;

  const [screenText, setScreenText] = useState<String>('');
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    if(index<text.length){
      const timeout = setTimeout(() => {
        
        

      }, delay);

    }
    

  }, [screenText, index])

  return (
    <main className='flex h-screen'>
      <div className='flex flex-col flex-1 justify-center items-center gap-5'>
        <span className='text-white bg-black p-5 rounded-full w-40 h-40 flex items-center justify-center text-6xl font-semibold'>
          SR
        </span>
        
        <div className='text-4xl font-bold w-fit'>{text}</div>

        <div className='w-1/2 lg:w-1/4 text-[#9E9E9E] text-center'>
          I build modern web applications with React, Node.js, and cloud
          technologies. Passionate about creating scalable solutions and
          exceptional user experiences.
        </div>

        <div className=' flex gap-3'>
          <button className='rounded-md bg-black text-white font-bold text-xs px-4 py-2 border-[#243c5a] cursor-pointer'>
            View my Work
          </button>

          <button className='rounded-md border font-bold text-xs px-4 py-2 border-[#243c5a] cursor-pointer hover:bg-[#E6E3E3]'>
            Get In Touch
          </button>
        </div>

        <div className=' pt-5 flex gap-3'>
          <button
            className='p-3 rounded-lg 
            transition-all duration-200 ease-out
            hover:scale-110 hover:bg-[#E6E3E3]
            active:scale-150 cursor-pointer'
          >

            <LuGithub />
          </button>
          <button
            className='p-3 rounded-lg 
            transition-all duration-200 ease-out
            hover:scale-110 hover:bg-[#E6E3E3]
            active:scale-150 cursor-pointer'
          >
            <LuLinkedin />
          </button>
          <button
            className='p-3 rounded-lg 
            transition-all duration-200 ease-out
            hover:scale-110 hover:bg-[#E6E3E3]
            active:scale-150 cursor-pointer'
          >
            <LuMail />
          </button>
        </div>
      </div>
    </main>
  );
};

export default FirstContent;
