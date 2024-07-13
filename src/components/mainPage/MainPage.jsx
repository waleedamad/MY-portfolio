import React, { useEffect, useRef } from 'react';
import '../mainPage/style.css';
import { gsap } from 'gsap';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function MainPage() {
  const bgImgRef = useRef();
  const helloRef = useRef();
  const frontEndRef = useRef();
  const buttonsRef = useRef();
  const iconsRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    gsap.fromTo(bgRef.current, { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 2 });
    gsap.fromTo(bgImgRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2 });
    gsap.fromTo(helloRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, delay: 0.2 });
    gsap.fromTo(frontEndRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, delay: 0.4 });
    gsap.fromTo(buttonsRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, delay: 0.6 });
    gsap.fromTo(iconsRef.current, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 2, delay: 0.8 });
  }, []);

  return (
    <div className='min-h-screen bg-gray-950 flex justify-center items-center overflow-hidden'>
      <div className='text-center'>
        <div ref={bgRef} id='bgimage' className='md:w-64 md:h-80 w-60 h-72 mx-auto'></div>
        <p ref={helloRef} className='text-white font-serif md:text-5xl md:font-bold mt-4 text-3xl font-bold relative'>
          Hello, I'm Waleed.
        </p>
        <p ref={frontEndRef} className='text-white font-serif md:text-5xl md:font-bold mt-2 text-3xl font-bold relative'>
          Front End Developer
        </p>
        <div ref={buttonsRef} className='mt-5 relative'>
          <a href='/path/to/your/CV/Waleed Ahmad CV.pdf' target='_blank' rel='noopener noreferrer'>
            <button className='border border-yellow-500 rounded md:px-10 p-2 font-serif text-white button-gradient hover:text-black hover:transition ease-out duration-1000'>
              My Resume
            </button>
          </a>
          <a href="https://wa.me/03117248123" target='_blank' rel='noopener noreferrer'>
            <button className='border border-yellow-500 md:px-10 p-2 rounded font-serif button-gradient hover:text-black hover:transition ease-out duration-500 text-white ms-1'>
              Contact Me
            </button>
          </a>
        </div>
        <div ref={iconsRef} className='flex justify-center mt-5 space-x-4 relative'>
          <a href="https://www.instagram.com/waleedahmad4942?igsh=MWxjNTF0ZWhocjlzcA==" target='_blank' rel='noopener noreferrer'><InstagramIcon className='text-white hover:transition ease-out duration-500 hover:text-yellow-500' /></a>
          <a href='mailto:wa7248123@gmail.com' target='_blank' rel='noopener noreferrer'><EmailIcon className='text-white hover:transition ease-out duration-500 hover:text-yellow-500' /></a>
          <a href="https://www.linkedin.com/in/waleed-ahmad-217604244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noopener noreferrer'><LinkedInIcon className='text-white hover:transition ease-out duration-500 hover:text-yellow-500' /></a>
          <a href="https://wa.me/03117248123" target='_blank' rel='noopener noreferrer'><WhatsAppIcon className='text-white hover:transition ease-out duration-500 hover:text-yellow-500' /></a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
