import Layout from "@/Components/Layout";
import Image from "next/image";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icon";
import HireMe from "@/Components/HireMe";
import ProfileImg from '../../public/images/profile/developer-pic-1.png';

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen ">
       <Layout>

        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image className="w-full h-auto " src={ProfileImg} alt="Azizul"/>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design" className="!text-6xl"/>

            <p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.  Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            <div className="flex items-center self-start mt-2 ">
              <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" 
              download={true} >Resume <LinkArrow className={"w-6 ml-1"}/></Link>

              <Link href="mailto:azizulislam53468@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline">Contact </Link>
            </div>
          </div>
        </div>
       </Layout>

       <HireMe />
       <div className="absolute right-8 bottom-8">
        <p className='text-7xl px-1 inline-block w-24'> &#128161;</p>
        {/* <Image src="&#128075;" alt="" className="w-full h-auto"></Image> */}
       </div>
    </main>
  )
}
