import {BigSection, SinglePost, Card} from "./components/sections"

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
        
        <h1 className="font-title text-gray-600 text-3xl md:text-4xl motion-blur-in-3xl motion-duration-500 text-center">
          Welcome, to <a className="underline hover:text-red-700" href="https://github.com/gaamfer">gaamfer</a> webpage!
        </h1>
        <h3 className="font-title text-gray-400 text-xl md:text-3xl mt-8 md:mt-16 text-center motion-blur-in-3xl motion-duration-1000">
          All about
        </h3>
        <p className="font-title text-gray-300 text-2xl md:text-4xl mt-4 md:mt-8 text-center motion-blur-in-3xl motion-duration-2000">
          Computer Science
        </p>
        <div className="self-center mt-32 motion-blur-in motion-delay-1500">
          <button className="bg-orange-400 text-white border border-white border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            See More...
          </button>
        </div>
      </div>  
      <BigSection>
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800"> Most Recent </h1>
          <Card/>
          <Card/>
      </BigSection>
    </>
  );
}


