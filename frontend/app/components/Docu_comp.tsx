"use client"

import { DocumentsData } from "@/services/info"
import { useEffect, useState } from "react"


interface Doc {
    name: string;
    url: string;
}


export function MyDocuments () {
    const [docs, setDocs] = useState<Doc[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error|null>(null);

    useEffect(() => {
        async function fecthData() {
            try {
                const data = await DocumentsData();
                setDocs(data); 
                setLoading(false);
            } catch (error: unknown) {
                setError(error as Error)
                setLoading(false)
            }
        }
        fecthData();
    }, []);

    if (loading){
        return (
            <div>Loading...</div>
        )
    }

    if (error){
        return (
            <div> Error loading data: {error.message} </div>
        )
    }

    return (
        <>
            <div>
                {docs.map((doc) => (
                    <div key={doc.name} className="mb-4 border dark:text-blue-300 text-blue-900 rounded-lg shadow hover:shadow-md hover:bg-slate-500 hover:text-white transition-all">
                        <a href={doc.url} target="_blank" rel="noopener noreferrer" className="block p-4">
                            <h3 className="text-lg font-semibold mb-2">{doc.name}</h3>
                            <div className="flex items-center  text-gray-600 dark:text-white hover:text-white">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span className="text-sm">View document</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            
        </>
    )
}   
