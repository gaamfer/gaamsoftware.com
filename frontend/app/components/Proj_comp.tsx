"use client";
import { ProjectsData} from "@/services/info";
import { useEffect, useState } from "react";

// Create an interface to Projects fields

interface Project {
    id: string;
    header: string;
    info:string;
    project_pic: string | null;
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
            } catch (error: any) {
                setError(error)
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
            <div>
                {proj.map((proj) => (
                    <a key={proj.id} href={`${window.location.pathname}/${proj.id}`} className="relative block rounded-tr-3xl border border-gray-100">
                        <span
                            className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
                        >
                            {proj.id}
                        </span>
                    
                        <img
                            src={proj.project_pic ?? ""}
                            alt=""
                            className="h-80 w-full rounded-tr-3xl object-cover"
                        />
                    
                        <div className="p-4 text-center">
                            <strong className="text-xl font-medium text-gray-900"> {proj.header} </strong>
                    
                            <p className="mt-2 text-pretty text-gray-700">
                            {proj.info}
                            </p>
                    
                            <span
                            className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                            >
                            See More
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}















