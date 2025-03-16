"use client";
import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ProfilePic from "../../../public/azizul.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";
import TransitionEffect from "@/Components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Skill = () => {
  return (
    <>
      <Head>
        <title> Azizul | Skill Page </title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Skill is the unified force of experience"
            className="text-center mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full  gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Skill Summary!
              </h2>
              <p className="font-medium">
                I am a proficient Full-Stack Developer with expertise in both
                frontend and backend technologies. I specialize in building
                scalable and user-friendly web applications using modern
                frameworks and tools.{" "}
              </p>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default Skill;
