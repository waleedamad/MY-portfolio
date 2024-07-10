import React, { useEffect, useRef } from 'react';
import '../contactPage/style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CallIcon from '@mui/icons-material/Call';

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const headingRef = useRef();
  const iconRef = useRef();
  const formRefs = useRef([]);
  const buttonRef = useRef();

  useEffect(() => {
    gsap.fromTo(headingRef.current, 
      { x: '-100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(iconRef.current, 
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: iconRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );

    formRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref, 
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    gsap.fromTo(buttonRef.current, 
      { y: '100%', opacity: 1 },
      {
        y: '0%',
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div className='bg-gray-950 min-h-screen p-8'>
      <div className='flex justify-between items-center'>
        <p ref={headingRef} className='md:text-5xl text-4xl font-serif font-bold text-white mt-32'>Contact Us</p>
        <CallIcon ref={iconRef} className='text-white mt-32 text-6xl' />
      </div>
      <hr className='border-t-1 border border-yellow-500 w-full my-4' />
      <div className='flex flex-col md:flex-row justify-center md:space-x-4'>
        <div className='w-full md:w-1/2 mt-10'>
          <input 
            ref={el => formRefs.current[0] = el} 
            type="text" 
            placeholder='Name' 
            className='border border-yellow-500 font-serif bg-transparent text-white w-full py-2 px-3 rounded-md focus:outline-none focus:border-yellow-600 transition duration-300' 
          />
        </div>
        <div className='w-full md:w-1/2 mt-10'>
          <input 
            ref={el => formRefs.current[1] = el} 
            type="email" 
            placeholder='Email' 
            className='border border-yellow-500 font-serif bg-transparent text-white w-full py-2 px-3 rounded-md focus:outline-none focus:border-yellow-600 transition duration-300' 
          />
        </div>
      </div>
      <div className='w-full mt-8'>
        <textarea 
          ref={el => formRefs.current[2] = el} 
          placeholder='Description' 
          className='border border-yellow-500 font-serif bg-transparent text-white w-full py-7 px-3 rounded-md focus:outline-none focus:border-yellow-600 transition duration-300 resize-none' 
          rows="6"
        />
      </div>
      <div className='mt-10 flex justify-center'>
        <button 
          ref={buttonRef} 
          className='bg-transparent text-white border button-gradient hover:text-black hover:transition ease-out duration-1000 border-yellow-500 px-14 py-2 rounded-md  transition mb-5 font-serif'
        >
          Submit
        </button>
      </div> 
    </div>
  );
}

export default ContactUs;
