
'use client'

import Image from 'next/image';
import { useEffect, useState} from 'react';
import { LuLinkedin, LuGithub, LuMail } from 'react-icons/lu';

export const MainContent = () => {
  
  const delay = 200;
  const firstName = 'SERGIO RODRIGO';
  const lastName = 'CARDENAS RIVERA';
  const sizeLogoButtons = 30;
  

  const [screenText, setScreenText] = useState<string>('');
  const [index, setIndex] = useState(0)

  const optionButtons = [
    {
      icon: <LuGithub size={sizeLogoButtons} />,
      link: '',
    },
    {
      icon: <LuLinkedin size={sizeLogoButtons} />,
      link: '',
    },
    {
      icon: <LuMail size={sizeLogoButtons} />,
      link: '',
    },
  ];

  useEffect(()=>{
    // if(index<text.length){

    //   setTimeout(() => {
    //     setIndex((prev)=>prev + 1)
    //     // console.log(index)
    //   }, delay);
    // }
  }, [screenText, index])


  /**
   * Method to download my cv from static files, after that I'll implement download from supabase
   * storage
   *
   */
  const downloadCV = () =>{
    console.log('Download...')
  }

  return (
    <main className='flex h-screen'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div className='relative rounded-full w-60 overflow-hidden'>
          <Image
            className='rounded-full object-cover'
            src={'/img/photo_react_developer.webp'}
            width={500}
            height={500}
            alt='photo-portait'
          />
          <div className='absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/90 to-transparent' />
        </div>

        {/* Text with useState effect  */}
        <div>
          <div className='text-4xl font-mono font-bold w-fit'>{firstName}</div>
        </div>

        <div className=' px-5 xl:w-1/2 md:w-2/3 text-[#9E9E9E] text-center'>
          I build modern web applications with React, Node.js, and cloud
          technologies. Passionate about creating scalable solutions and
          exceptional user experiences.
        </div>

        <div className=' flex gap-3'>
          <a
            className='rounded-md bg-black text-white font-bold py-2 px-4 border-[#243c5a] cursor-pointer flex items-center transition-all duration-200 ease-out hover:scale-110 active:scale-120'
            // onClick={downloadCV}
            href='files/cv_en.pdf'
            download='cv.pdf'
          >
            Download CV
          </a>

          <button className='rounded-md border font-bold text-sm px-4 py-2 border-[#243c5a] cursor-pointer hover:bg-[#E6E3E3]'>
            Get In Touch
          </button>
        </div>

        <div className=' pt-5 flex gap-3'>
          {optionButtons.map((el, idx) => (
            <button
              key={idx}
              className='p-3 rounded-lg 
            transition-all duration-200 ease-out
            hover:scale-110 hover:bg-[#E6E3E3]
            active:scale-150 cursor-pointer'
            >
              {el.icon}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};
