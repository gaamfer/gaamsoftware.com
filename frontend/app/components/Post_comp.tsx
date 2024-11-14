"use client";


import { PostsData} from "@/services/info";
import { useEffect, useState } from "react";

// Create an interface so that TS inteerpretates better the Post

interface Post {
  id: number;
  header: string;
  info: string;
  project_pic: string | null;
  timestamp: string;
}
// END OF INTERFACE

export function Post() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const data = await PostsData();
              setPosts(data); // asumming the data has a key results 
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
        <div className="px-4 py-16 sm:px-6 lg:px-8">
            {posts.map((post) => (
                <article key={post.id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-5">
                  <img
                    alt=""
                    src={post.project_pic ?? ""}
                    className="h-56 w-full object-cover"
                  />

                  <div className="bg-white p-4 sm:p-6">
                    <time dateTime={post.timestamp} className="block text-xs text-gray-500"> {post.timestamp} </time>

                    <a href={`${window.location.pathname}/${post.id}`}>
                    <h3 className="mt-0.5 text-lg text-gray-900">{post.header}</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {post.info}
                    </p>
                  </div>
                </article>
            ))}
        </div>
        
      </>
  );
}
