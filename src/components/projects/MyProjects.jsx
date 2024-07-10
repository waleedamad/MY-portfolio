import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../projects/style.css';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

gsap.registerPlugin(ScrollTrigger);

function MyProjects() {
    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((project, index) => {
            gsap.fromTo(project, 
                { x: '-100%', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: project,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <div className='bg-gray-950 min-h-screen p-4'>
            <div className='flex justify-between items-center'>
                <p className='text-5xl font-serif font-bold text-white mt-7 md:ms-3 ms-2'>My Projects</p>
                <GroupWorkIcon className='text-white mt-7 md:me-4 me-2' />
            </div>
            <hr className='border-t-1 border border-yellow-500 w-full my-4' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ms-1 me-1 '>
                {[
                    { id: 'project1', link: 'https://spotifyclone-kappa-eight.vercel.app' },
                    { id: 'project2', link: 'https://devilish-rate.surge.sh' },
                    { id: 'project3', link: 'https://persianResturants.surge.sh' },
                    { id: 'project4', link: 'https://htmlcssassignment.surge.sh' },
                    { id: 'project5', link: 'https://TodayWeather.surge.sh' }
                ].map((project, index) => (
                    <div
                        key={project.id}
                        ref={el => projectRefs.current[index] = el}
                        className='bg-white shadow-md shadow-blue-400 rounded-lg p-6 mt-8'
                    >
                        <a href={project.link} target='_blank' rel='noopener noreferrer'>
                            <div id={project.id}></div>
                        </a>
                    </div>
                ))}
            </div>

            
        </div>
    );
}

export default MyProjects;
