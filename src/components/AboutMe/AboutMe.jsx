import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InfoIcon from '@mui/icons-material/Info';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
    const headingRef = useRef();
    const iconRef = useRef();
    const textRefs = useRef([]);
    const circleRef = useRef();

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

        textRefs.current.forEach((ref, index) => {
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

        gsap.fromTo(circleRef.current,
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
                scrollTrigger: {
                    trigger: circleRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }, []);

    return (
        <div className='bg-gray-950 flex flex-col min-h-screen p-4'>
            <div className='flex justify-between items-center mt-8'>
                <p ref={headingRef} className='text-4xl md:text-5xl font-serif font-bold text-white'>About Me</p>
                <InfoIcon ref={iconRef} className='text-white' />
            </div>
            <hr className='border-t-1 border border-yellow-500 w-full my-4' />
            <div className='md:flex md:justify-between md:items-center'>
                <div className='md:flex-1 md:pr-8'>
                    <p className='text-yellow-500 font-serif font-bold mb-7 text-xl md:text-2xl' ref={el => textRefs.current[0] = el}>Front End Developer</p>
                    <p className='text-white font-serif mt-2' ref={el => textRefs.current[1] = el}>
                        With hands-on experience in frontend development, I have honed my skills in creating dynamic, user-friendly web applications.
                        My journey in this field has been marked by a continuous quest for excellence, creativity, and a keen eye for detail.
                        I am passionate about translating complex designs into interactive and responsive user interfaces that enhance user engagement and satisfaction.
                    </p>
                </div>
                <div ref={circleRef} id='bgimage2' className='md:w-64 md:h-80 w-60 h-72 mx-auto shadow-md shadow-white md:me-52 md:ms-32 mt-6 hover:scale-125 hover:transition ease-out duration-500  ' ></div>
            </div>
            <div className='mt-8'>
                <p className='text-yellow-500 font-serif font-bold text-xl md:text-2xl'>Personal Information</p>
                <div className='bg-gray-800 p-4 rounded-lg mt-4'>
                    <div className='text-white font-serif mb-4'>
                        <span className='font-bold text-lg md:text-xl'>Name:</span>
                        <span className='ml-3'>Waleed Ahmad</span>
                    </div>
                    <div className='text-white font-serif mb-4'>
                        <span className='font-bold text-lg md:text-xl'>Address:</span>
                        <span className='ml-3'>Khushab, Pakistan</span>
                    </div>
                    <div className='text-white font-serif mb-4'>
                        <span className='font-bold text-lg md:text-xl'>Qualification:</span>
                        <span className='ml-3'> BSCS (7th Semester)</span>
                    </div>
                    <div className='text-white font-serif mb-4'>
                        <span className='font-bold text-lg md:text-xl'>Email:</span>
                        <span className='ml-3'>wa7248123@gmail.com</span>
                    </div>
                    <div className='text-white font-serif mb-4'>
                        <span className='font-bold text-lg md:text-xl'>Contact:</span>
                        <span className='ml-3'>+92 3117248123</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
