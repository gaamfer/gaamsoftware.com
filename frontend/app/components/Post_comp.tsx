"use client";


import { PostsData} from "@/services/info";
import { useEffect, useState } from "react";



// Create an interface so that TS inteerpretates better the Post

interface Post {
  id: number;
  header: string;
  info: string;
  post_pic: string | null;
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
        <div className="px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="overflow-hidden rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-2xl">
                {post.post_pic && (
                  <img
                    alt=""
                    src={post.post_pic}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="bg-white p-4 sm:p-6">
                  <time dateTime={post.timestamp} className="block text-xs text-gray-500"> {post.timestamp.split('T')[0]} </time>

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


export function Card_Post() {
  const [post, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(()=>{
        async function fetchData() {
            try{
                const data = await PostsData();
                setPost(data);
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
            
                <section className="mb-40">
                    <div className="/">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-green-700 p-6 sm:p-8">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Recent posts</h2>

                                <p className="mt-4 text-gray-100">
                                This are the latest posts I've made and are ready for you to see them...
                                </p>
                                <p className="mt-10 text-gray-100 font-extrabold text-3xl">
                                Enjoy   😊
                                </p>
                            </header>

                            <a
                                href="/Posts"
                                className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                            >
                                All posts
                            </a>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4 ">
                            {post.slice(-2).map((post) => (
                                <li>
                                    <a href={`/Posts/${post.id}`} className="group block">
                                    <img
                                        src={post.post_pic ?? ""}
                                        alt=""
                                        className="aspect-square w-full rounded object-cover"
                                        style={{backgroundColor: "#c2d1cc"}}
                                    />

                                    <div className="mt-3">
                                        <h3
                                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                        >
                                            {post.header}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-700">{post.timestamp.split('T')[0]}</p>
                                    </div>
                                    </a>
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                </section>
            
        </>
    );
}