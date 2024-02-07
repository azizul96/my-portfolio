"use client"
import AnimatedText from '@/Components/AnimatedText';
import { GithubIcon } from '@/Components/Icon';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import p1 from '../../../public/images/projects/p1.png'
import p2 from '../../../public/images/projects/p2.png'
import p3 from '../../../public/images/projects/p3.png'
import p4 from '../../../public/images/projects/p4.png'
import { motion } from 'framer-motion';
import TransitionEffect from '@/Components/TransitionEffect';


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summery, img, link, gitHub1, gitHub2}) =>{

    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summery}</p>
                <div className='mt-2 flex items-center sm:flex-col '>
                    <div className='flex items-center justify-center gap-4 sm:mb-2'>
                        <Link href={gitHub1} target='_blank' className='w-6'>
                            <GithubIcon/>
                            <p className='text-xs underline font-semibold'>Client</p>
                        </Link>
                        <Link href={gitHub2} target='_blank' className='w-6'>
                            <GithubIcon/>
                            <p className='text-xs underline font-semibold'>Server</p>
                        </Link>
                    </div>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, gitHub}) =>{

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem]' />

            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary  font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className=' text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={gitHub} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon/>
                    </Link>
                    
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <>
            <Head>
                <title> Azizul | Projects page</title>
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" 
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title="Hotel Booking Website" 
                            summery="Hotel Booking Website - In this website user can booked rooms on the hotel. This is a single page application create using React for the frontend and MongoDB for backend." 
                            link="https://hotel-booking-3b71d.web.app/"
                            gitHub1="https://github.com/azizul96/hotel-booking-client"
                            gitHub2="https://github.com/azizul96/hotel-booking-server"
                            type="Full-Stack Project"
                            img={p1}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title="Employee Management System" 
                            summery="Employee Management System - In this project I'm implemented A user specific dashboard and payment method system. Using React for the frontend, MongoDB for the backend and Stripe for the payment method" 
                            link="https://wondrous-selkie-9e7aff.netlify.app/"
                            gitHub1="https://github.com/azizul96/employee-management-system-client"
                            gitHub2="https://github.com/azizul96/employee-management-system-server"
                            type="Full-Stack Project"
                            img={p2}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Event Management Website" 
                                link="https://heartfelt-crostata-660c81.netlify.app/"
                                gitHub="https://github.com/azizul96/event-management-09"
                                type="Frontend Project"
                                img={p3}

                            />
                        </div>
                        
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Task Master Website" 
                                link="https://celadon-taiyaki-f598b7.netlify.app/"
                                gitHub="https://github.com/azizul96/technovision-client"
                                type="Frontend Project"
                                img={p4}
                            />
                        </div>
                        
                    </div>
                </Layout>
            </main>
            
        </>
    );
};

export default Projects;