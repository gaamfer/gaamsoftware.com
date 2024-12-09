import {BigSection, Banner} from "../components/sections"
import Image from 'next/image';
import me from "../images/Gabi.png";

export default function About() {
    return (
      <>
      <BigSection>
        <div className="min-h-screen flex-col justify-center items-center">          
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
                <div className="relative z-10 lg:py-16 ">
              <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
              alt=""
              src={me}
              className="absolute inset-0 h-full w-full object-cover object-top rounded-sm"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-sm"
                  ></span>

                  <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-gray-700 font-bold text-4xl sm:text-7xl mb-20">
                About Me
              </h2>

              <p className="mt-4 text-gray-600">
                <p className="italic font-semibold">Hey, there!</p> I&apos;m a <span className="font-bold">Full-stack</span> developer who loves turning ideas into reality.
                I specialize in building awesome B2B apps that make life easier for businesses.
                With a knack for detail and a passion for top-notch work, I&apos;m all about creating solutions that boost efficiency and productivity. 
              </p>
              <p className=" font-bold mt-4 text-gray-500">Let&apos;s make something amazing together!</p>
              <p className=" font-semibold mt-4 text-gray-950">Gabriel Ferreira</p>

              <a
                href="/ContactMe"
                className="mt-8 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-gray-950"
              >
                Get in Touch
              </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
          <Banner/>
      </BigSection>
      </>
        
    );
  }
  