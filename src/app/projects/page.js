import AnimatedText from '@/Components/AnimatedText';
import { GithubIcon } from '@/Components/Icon';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import p1 from '../../../public/images/projects/p1.png'


const FeaturedProject = ({type, title, summery, img, link, gitHub}) =>{


    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />

            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summery}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={gitHub} target='_blank' className='w-10'>
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, gitHub}) =>{

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />

            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className=' text-lg font-semibold underline'>
                        Visit
                    </Link>
                    <Link href={gitHub} target='_blank' className='w-8'>
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
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" 
                    className='mb-16'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title="Hotel Booking Website" 
                            summery="Hotel Booking Website - In this website user can booked rooms on the hotel. This is a single page application create using React for the frontend and MongoDB for backend." 
                            link="/"
                            gitHub="/"
                            type="Featured Project"
                            img={p1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Hotel Booking Website" 
                                
                                link="/"
                                gitHub="/"
                                type="Featured Project"
                                img={p1}

                            />
                        </div>
                        
                        <div className='col-span-6'>
                            <Project
                                title="Hotel Booking Website" 
                                
                                link="/"
                                gitHub="/"
                                type="Featured Project"
                                img={p1}
                            />
                        </div>

                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Hotel Booking Website" 
                                summery="Hotel Booking Website - In this website user can booked rooms on the hotel. This is a single page application create using React for the frontend and MongoDB for backend." 
                                link="/"
                                gitHub="/"
                                type="Featured Project"
                                img={p1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="Hotel Booking Website" 
                                
                                link="/"
                                gitHub="/"
                                type="Featured Project"
                                img={p1}
                            />
                        </div>
                        
                        <div className='col-span-6'>
                            <Project
                                title="Hotel Booking Website" 
                                
                                link="/"
                                gitHub="/"
                                type="Featured Project"
                                img={p1}
                            />
                        </div>
                        
                    </div>
                </Layout>
            </main>
            
        </>
    );
};

export default Projects;