import React from 'react';
import { CircularText } from './Icon';
import Image from 'next/image';
import logoImg from '../../public/hm-logo.png'
import Link from 'next/link';

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-3 md:bottom-auto md:absolute sm:right-2'>
            <div className='w-48 md:w-16 h-auto flex items-center justify-center relative  dark:bg-light dark:rounded-full dark:w-36 dark:h-36 dark:md:w-16 dark:md:h-auto' >
                <Image  src={logoImg} alt='Logo' className='fill-dark animate-spin-slow w-36' />

                <Link href="mailto:azizulislam53468@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  bg-dark text-light shadow-md border-solid border border-dark w-20 h-20 md:w-10 md:h-10 md:text-[10px] rounded-full font-semibold hover:bg-light hover:text-dark'> Hire me</Link>
            </div>
        </div>
    );
};

export default HireMe;