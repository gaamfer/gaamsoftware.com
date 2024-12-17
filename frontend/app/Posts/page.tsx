import {Post} from "../components/Post_comp"
import { BigSection } from "../components/sections"


export default function PostsPage() {
 return (
  <>
    
    <BigSection>
      <h1 className=" mt-10 text-4xl font-extrabold mb-10 dark:text-white text-gray-800 animate-pulse ml-4">POSTS</h1>
      <p className=" mb-2 font-bold text-3xl dark:text-white text-gray-700 p-4  md:w-2/3 text-wrap">
      In this section lies a collection of my all-time posts, showcasing my journey in computer Science.
      </p>
      <p className=" mb-10 font-bold text-3xl dark:text-white text-gray-700 p-4  md:w-2/3 text-wrap">Hope you enjoy it! 😊 </p>
      <Post/>
    </BigSection>
  </>
 )
}