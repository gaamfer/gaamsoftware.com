import { Project } from "../components/Proj_comp";
import { BigSection } from "../components/sections";

export default function Projects() {
   
    return (
      <>
        <BigSection>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-800 text-center animate-pulse">PROJECTS</h1>
          <Project/>
          
        </BigSection>
      
      </>
    );
}