"use client"

import { useParams } from 'next/navigation';
import {useEffect, useState} from 'react';
import { API_URL } from '@/services/info';

interface Post{
    header: string;
    info: string;
    project_pic: string | null;
}

export default function Post(){
    const {id}= useParams(); // get the dynamic ID from the url
    const [post , setPost] = useState<Post | null>(null);

    useEffect(()=>{
        if (id) {
            async function fecthPost() {
                try{
                    const response = await fetch(`${API_URL}/posts/${id}/`);
                    const data = await response.json();
                    setPost(data);
                } catch (error) {
                    console.log('Error fetching post:', error);
                }
            }

            fecthPost();
        }
    }, [id]); // At the end Re-Fetch data if `id` changes

    if(!post) {
        return <p> Loading post...</p>;
    }

    return (
        <>
            <h1>{post.header}</h1>
            {/* Ill still have to find some termplate for this part */}

        </>
    );
}
