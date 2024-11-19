"use client";
import "./globals.css";
import logo from "./images/gaamfer.ico"
import Image from "next/image";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ishome, setIsHome] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setIsHome(window.location.pathname === '/');
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en" className="h-full">
      <body className="bg-gradient-to-b from-orange-300 to-orange-700 h-full flex flex-col overflow-auto ">
        <header className="fixed left-0 right-0 z-50 motion-bg-out-transparent backdrop-blur-md">
          <div className={`mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ${ishome? ' motion-blur-in motion-delay-1500': ''}`}>
            <div className="flex h-16 items-center justify-between">
              
              {/* Logo */}
              <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600 dark:text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image className="h-10 w-11" src={logo} alt="Logo" />
                </Link>
              </div>
              
              {/* Navigation Bar */}
              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global">
                  <ul className="flex gap-20 text-sm">
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/About"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/Posts"
                      >
                        Posts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/Projects"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              
              {/* Mobile View Button */}
              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="relative">
                <label htmlFor="Search" className="sr-only">Search for...</label>
                <input
                  type="text"
                  id="Search"
                  placeholder="Search..."
                  className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-300 dark:bg-transparent dark:text-white placeholder-white"
                />
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-white hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <div className="flex flex-col flex-1 overflow-auto ">
          <div className="bg-transparent flex-1 flex flex-col ">
            <div className="">
              {children}
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
  
}

