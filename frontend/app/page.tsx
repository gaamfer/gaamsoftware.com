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
      </div>
        
      <BigSection>
        
          <Card/>
          <Card/>
          <Card/>
        
      </BigSection>
    </>
  );
}


