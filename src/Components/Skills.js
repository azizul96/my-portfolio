import React from 'react';
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y }}
        transition={{duration:1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                whileHover={{scale:1.05}}
                >
                    Web
                </motion.div>

                <Skill name="HTML" x="0vw" y="10vw"/>
                <Skill name="NextJS" x="-20vw" y="-2vw"/>
                <Skill name="JavaScript" x="20vw" y="6vw"/>
                <Skill name="Tailwind" x="-10vw" y="24vw"/>
                <Skill name="ReactJS" x="23vw" y="-15vw"/>
                <Skill name="CSS" x="8vw" y="-8vw"/>
                <Skill name="NodeJS" x="32vw" y="-5vw"/>
                <Skill name="Express" x="0vw" y="-20vw"/>
                <Skill name="MongoDB" x="-25vw" y="-18vw"/>
                <Skill name="Firebase" x="18vw" y="20vw"/>
                <Skill name="Figma" x="-25vw" y="10vw"/>
            </div>
        </>
    );
};

export default Skills;