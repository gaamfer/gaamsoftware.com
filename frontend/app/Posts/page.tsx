import {Post} from "../components/Post_comp"
import { BigSection } from "../components/sections"


export default function PostsPage() {
 return (
  <>
    
    <BigSection>
      <h1 className="text-4xl font-extrabold mb-4 text-gray-800 animate-pulse ml-4">POSTS</h1>
      <p className="text-xl text-gray-700 p-4 w-1/3 text-wrap">
      Discover my insights, ideas, and research in the ever-evolving world of Computer Science.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos vero fugit soluta quia nisi cum quaerat perspiciatis in fugiat eos quis commodi esse dignissimos, odio ratione illo aperiam unde aspernatur?
      </p>
      <Post/>
    </BigSection>
  </>
 )
}