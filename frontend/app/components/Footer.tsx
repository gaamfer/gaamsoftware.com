"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const MY_CV_URL = process.env.NEXT_PUBLIC_MY_CV_URL;

const Footer: React.FC = () => {
  const Year = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);

  useEffect(()=> {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme
    setIsDark(mediaQuery.matches);
    document.documentElement.classList.toggle('dark', mediaQuery.matches);

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <>
      <footer className="bg-orange-700 text-gray-200 dark:bg-slate-950 py-10 w-full font-serif motion-preset-fade-lg motion-delay-1000">
        <div className="mx-auto max-w-screen-xl px-10 sm:px-4 lg:px-6 flex flex-wrap gap-6 justify-center lg:justify-start">
            <div id="context" className="w-full lg:w-80 h-15 p-4 lg:px-4 dark:bg-slate-700 bg-orange-800 rounded-lg shadow-md mb-6 lg:mb-0 lg:mr-20">
            <p className='text-m'>&quot;Welcome to my personal corner of the web – where I share my passions, projects, and a glimpse into my world!&quot;</p>
            <p className='font-bold mt-1'>Gabriel Ferreira</p> 
            </div>

            {/* Contacts Column */}
            <div id="contacts" className="flex flex-col text-l space-y-2 mx-12 w-full lg:w-auto items-center lg:items-start">
            <p className="font-bold dark:text-white text-gray-800">Contacts</p>
            <a href="mailto:gabriel.ferreira@gaamsoftware.com" className="hover:underline">Email</a>
            <a href="/ContactMe" className="hover:underline">Seek Me</a>
            </div>

          {/* Useful Links Column */}
          {/* <div id="useful" className="flex flex-col text-l space-y-2 mx-12 w-full lg:w-auto items-center lg:items-start">
            <p className="font-bold text-gray-800">Useful</p>
            <a href="/Inspiration" className="hover:underline">Inspiration</a>
            <a href="/About/TechStack" className="hover:underline">My Tech Stack</a>
            <a href="/linkLib" className="hover:underline">Link Library</a>
            <a href="/linkLib" className="hover:underline">Tags</a>
          </div> */}

          {/* Tools Column */}
          <div id="tools" className="flex flex-col text-l space-y-2 mx-12 w-full lg:w-auto items-center lg:items-start">
            <p className="font-bold dark:text-white text-gray-800">Tools</p>
            <a href="https://sulky-maize-6b4.notion.site/TO-DO-list-15ef373a46b480f3b4bbce2aea68c247?pvs=4" className="hover:underline">My To-Do List</a>
            <a href="/Documents" className="hover:underline">Documents</a>
          </div>

          {/* About Column */}
          <div id="about" className="flex flex-col text-l space-y-2 mx-12 w-full lg:w-auto items-center lg:items-start">
            <p className="font-bold dark:text-white text-gray-800">Modus Operandi</p>
            <a href={MY_CV_URL} className="hover:underline" download="Gabriel_Ferreira_CV.pdf">My-CV</a>
            <a href="/About/TechStack" className="hover:underline">Tech Stack</a>
          </div>
          
          <hr className="w-full border-gray-300" />
        </div>

        <div className="mx-auto max-w-screen-xl lg:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <p className='font-serif text-xs'> Copyright © {Year} gaamfer. Privacy Policy. All rights reserved.</p>
            <div id="socials" className="flex space-x-6 text-3xl mt-2 lg:mt-2">
              <a href="http://github.com/gaamfer">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-ferreira-78b521146/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.youtube.com/@gaamfer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://x.com/GGAFerreira">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
            <div className='flex justify-center md:justify-start mt-4'>
            <button 
              onClick={toggleTheme}
              className="lg:mt-0 px-4 py-2 rounded-full bg-orange-800 hover:bg-orange-900 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '🌞' : '🌙'}
            </button>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
