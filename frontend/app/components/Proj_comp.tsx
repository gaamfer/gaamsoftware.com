"use client";
import { ProjectsData} from "@/services/info";
import { useEffect, useState } from "react";


// Create an interface to Projects fields

interface Project {
    id: string;
    header: string;
    info:string;
    project_pic: string | null;
    links: string;
    timestamp: string;
    
}

// End OF INTERFACE

export function Project(){
    const [proj, setProj] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        async function fetchData() {
            try{
                const data = await ProjectsData();
                setProj(data);
                setLoading(false);
            } catch (error: unknown) {
                setError(error as Error)
                setLoading(false)
            }
        }
        fetchData();
    }, []);

    if (loading){
        return <div>Loading...</div>;
      }
    
    if (error) {
    return <div> Error loading data: {error.message} </div>;
    }

    return (
        <>
            <div className="flex-wrap mx-auto px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {proj.map((proj) => (
                    <div 
                        key={proj.id} 
                        className="bg-white container mx-auto relative block rounded-3xl border border-transparent mb-4 sm:mb-0 sm:w-full transition-transform transform hover:scale-105 hover:shadow-lg shadow-md"
                        style={{ maxWidth: '400px' }}
                    >
                        <img
                            src={proj.project_pic ?? ""}
                            alt=""
                            className="h-80 w-full rounded-t-3xl object-cover"
                        />
                    
                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> {proj.header} </strong>
                    
                            <p className="mt-2 text-pretty text-gray-700 h-20 overflow-hidden">
                            {proj.info}
                            </p>
                    
                            <a
                            href={proj.links}
                            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                            See More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}














