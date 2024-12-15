"use client"

import { useParams } from 'next/navigation';
import {useEffect, useState} from 'react';
// import { API_URL } from '@/services/info';
import { BigSection } from '@/app/components/sections';
import { PostData } from '@/services/info';
// import Image from 'next/image';

interface Post{
    id: number;
    header: string;
    info: string;
    post_pic: string | null;
}

export default function Post(){
    const {id}= useParams(); // get the dynamic ID from the url
    const [post , setPost] = useState<Post | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(()=>{
        if (id) {
            async function fetchPost() {
                try{
                    const data = await PostData(Number(id));
                    setPost(data);
                } catch (error: unknown) {
                    setError(error as Error)
                }
            }
            fetchPost();
        } 
    }, [id]); // At the end Re-Fetch data if `id` changes

    if(!post) {
        return <p> Loading post...</p>;
    }

    if (error){
        return <div> Error loadind data: {error.message}</div>
    }
    return (
        <>
            <BigSection>
            <div className='p-8 bg-slate-700 rounded-lg '>
                <div className='md:mx-16 h-screen '>
                    <h1 className='mt-4 md:text-start text-center font-extrabold text-3xl'>{post.header}</h1>
                    <div className="flex justify-center m-10 ">
                        <img
                        alt="" 
                        src={post.post_pic ? post.post_pic : ""}
                        className="max-w-full"
                        />
                    </div>
                    <div className='rounded-lg md:flex md:justify-center font-semibold bg-white'>
                    <p className='m-2 text-black font-semibold' >{post.info}</p>
                    </div>
                </div>    
            </div>
            </BigSection>
            {/* Ill still have to find some termplate for this part */}
        </>
    );
}
