"use client"
import AnimatedText from '@/Components/AnimatedText';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import article1 from '../../../public/images/articles/linkedin-post-1.png'
import article2 from '../../../public/images/articles/linkedin-post-2.png'
import article3 from '../../../public/images/articles/form validation in reactjs using custom react hook.png'
import article4 from '../../../public/images/articles/create modal component in react using react portals.png'
import article5 from '../../../public/images/articles/smooth scrolling in reactjs.png'
import article6 from '../../../public/images/articles/What is Redux with easy explanation.png'
import TransitionEffect from '@/Components/TransitionEffect';


const FramerImage = motion(Image);

const MovingImage = ({title, img, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    const handleMouse =(e)=>{
        imgRef.current.style.display = "inline-block";
        x.set(e.pageX)
        y.set(-10)
    }

    const handleMouseLeave =(e)=>{
        imgRef.current.style.display = "none";
        x.set(0)
        y.set(0)
    }

    return (
        <Link  href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage 
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.3}}}
            ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden' />
        </Link>
    );
};

const Article = ({img,title, date, link})=>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:1, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex justify-between items-center bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImage title={title} img={img} link={link} 
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            />
            <span className=' text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const Featured = ({img, title, time, summery, link})=>{
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg inline-block'>
                <FramerImage src={img} alt={title} className='w-full h-auto'  
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg '>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summery}</p>
            <span className=' text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title> Azizul | Article Page </title>
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                        <Featured 
                        title="Understanding Hooks In React"
                        summery="Learn how to build a Hook component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Hooks in your ReactJS project."
                        time="9 min read"
                        link="https://www.linkedin.com/posts/azizul-islam96_react-hooks-activity-7153611990773469186-JXnD?utm_source=share&utm_medium=member_desktop"
                        img={article1}
                        />

                        <Featured 
                        title="An Amazing Guide On JS Async Await!"
                        summery="Learn how to build a Async function in ReactJS . 
                        Follow this step-by-step guide to integrate JS Async Await in your ReactJS project."
                        time="10 min read"
                        link="https://www.linkedin.com/posts/azizul-islam96_javascript-async-await-activity-7157583143305179138-4nxA?utm_source=share&utm_medium=member_desktop"
                        img={article2}
                        />
                        
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="02/06/2024"
                        link="/"
                        img={article3}
                        />
                        <Article
                        title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                        date="02/06/2024"
                        link="/"
                        img={article4}
                        />
                        <Article
                        title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                        date="02/06/2024"
                        link="/"
                        img={article5}
                        />
                        <Article
                        title="Redux Simplified: A Beginner's Guide For Web Developers"
                        date="02/06/2024"
                        link="/"
                        img={article6}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
};

export default Articles;