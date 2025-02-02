"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import {useEffect, useState} from 'react';
import { BigSection } from '@/app/components/sections';
import { PostData } from '@/services/info';
import { PostLegacy } from '@/app/components/Post_legacy'; // has a prop called fileUrl



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
                    const data = await PostData(Number(id)); // get data from post in the api
                    setPost(data); // set post to data fetched from api
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
            <div className=' p-8 bg-orange-600 dark:bg-slate-800 rounded-lg'>
                <div className='md:mx-16'>
                    <h1 className='mt-4 md:text-start text-center font-extrabold text-3xl dark:text-slate-200'>{post.header}</h1>
                    <div className="flex justify-center m-10 ">
                        <img
                        alt="" 
                        src={post.post_pic ? post.post_pic : ""}
                        className="max-w-full"
                        />
                    </div>
                    <article className='rounded-lg bg-slate-900 p-8'>
                        <PostLegacy fileUrl={post.info} />
                    </article>
                </div>    
            </div>
            </BigSection>
            {/* Ill still have to find some termplate for this part */}
        </>
    );
}
