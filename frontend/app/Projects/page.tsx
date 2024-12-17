import { Project } from "../components/Proj_comp";
import { BigSection } from "../components/sections";
import Link from "next/link";

export default function Projects() {
   
    return (
      <>
        <BigSection>
            <h1 className="text-4xl font-extrabold mb-10 dark:text-white text-gray-800 text-center animate-pulse">PROJECTS</h1>
            <p className="font-bold text-3xl dark:text-white text-gray-700 p-4  md:w-2/3 text-wrap">
            In this section lies a collection of my favourite projects. Give it a 👍 in the 
            <Link href='http://github.com/gaamfer' className=" dark:text-red-600 text-gray-900 underline font-bold"> Hub </Link>!</p>
          <Project/>
          
        </BigSection>
      
      </>
    );
}