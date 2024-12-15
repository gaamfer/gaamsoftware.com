 import React from "react";


export function BigSection({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <>
          <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
            {children}
          </div>
        </>
        
    );
}

export function SinglePost(){
    return(
        <>
            <div>
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mb-5">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        className="h-56 w-full object-cover"
                    />

                    <div className="bg-white p-4 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                        <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
                        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
                        dignissimos. Molestias explicabo corporis voluptatem?
                        </p>
                    </div>
                </article>
            </div>
        </>
    );
}



export function MItem() {
  
    return (
        <>
        <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
            <span
                className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
            >
                Save 10%
            </span>

            <img
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-80 w-full rounded-tr-3xl object-cover"
            />

            <div className="p-4 text-center">
                <strong className="text-xl font-medium text-gray-900"> Aloe Vera </strong>

                <p className="mt-2 text-pretty text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia rem vel voluptatum in
                eum vitae aliquid at sed dignissimos.
                </p>

                <span
                className="mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
                >
                Learn More
                </span>
            </div>
        </a>
        </>
    );
}

export function Banner(){
    return(
        <section className="bg-slate-300 shadow-2xl text-slate-800 rounded-sm mt-8 md:h-70">
          <div className="max-w-screen-xl px-4 py-8 sm:px-2 sm:py-12 lg:px-14 lg:py-16">
              <div className="max-w-xl">
                <h2 className=" text-gray text-3xl font-bold sm:text-4xl"> 📚 More about me</h2>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 md:gap-40 md:mt-16 md:flex">
                <div className="flex items-start md:gap-4 rounded-lg">
                  <span className="shrink-0 rounded-full bg-white p-2 m-2">
                  <svg
                    className="size-8"
                    fill="none"
                    stroke="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  </span>

                  <div className="m-6">
                    <h2 className="text-xl font-bold md:mb-6">Idioms</h2>

                    <div className="mt-1 text-sm text-gray-600">
                      <div className="flex gap-12">
                        <span className="font-bold">
                          <p className="mb-2">English</p>
                          <p className="mb-2">Portuguese</p>
                          <p className="mb-2">French</p>
                          <p className="mb-2">Spanish</p>
                          <p className="mb-2">Ukranian</p>
                          <p>Arabic</p>
                        </span>
                        <span>
                          <p className="mb-2">Fluent</p>
                          <p className="mb-2">Fluent</p>
                          <p className="mb-2">Fluent</p>
                          <p className="mb-2">Proficient</p>
                          <p className="mb-2">Basic</p>
                          <p>Beginner</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start md:gap-4 rounded-lg">
                  <span className="shrink-0 rounded-full bg-white p-2 m-2">
                  <svg
                    className="size-8"
                    fill="none"
                    stroke="black" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  </span>

                  <div className="m-6">
                    <h2 className="text-xl font-bold md:mb-6">Certification</h2>

                    <div className="mt-1 text-sm text-gray-600">
                      <div className="flex gap-12">
                        <span>
                          <p className="font-bold">Cisco Cybersecurity Essentials</p>
                          <p className="mb-2">Oct.2020</p>
                          <p className="font-bold">harvardX Web programming Py/Js</p>
                          <p className="mb-2">Dec.2023</p>
                          <p className="font-bold">Mediatica MS-Excel</p>
                          <p className="mb-2">May.2021</p>
                          
                        </span>
                        <span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:gap-4 md:mt-16">
            
            {/* Competencies Section */}
            <div className="flex items-start md:gap-4 rounded-lg">
              
              <span className="shrink-0 rounded-full bg-white p-2 m-2">
                <svg
                  className="size-8"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div className="mb-6 m-6">
                      <h2 className="text-lg font-bold mb-2 text-gray-700">Skills</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                        <h3 className="font-medium text-gray-600">Languages</h3>
                        <p>High-level: Python | Javascript</p>
                        <p>Low-level: C | Go</p>
                        </div>
                        <div>
                        <h3 className="font-medium text-gray-600">Web Frameworks</h3>
                        <p>Django | Node | React</p>
                        </div>
                        <div>
                        <h3 className="font-medium text-gray-600">OS</h3>
                        <p>Debian | Windows | MacOS</p>
                        </div>
                      </div>
                      </div>
            </div>

            {/* Experience Section */}
            <div className="flex items-start md:gap-4 rounded-lg">
              
              <span className="shrink-0 rounded-full bg-white p-2 m-2">
                <svg
                  className="size-8"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div className="mb-6 m-6">
                <h2 className="text-lg font-bold mb-2 text-gray-700">Experience</h2>
                {/* Freelance */}
                <div className="mb-4">
                  <h3 className="font-bold text-gray-700">
                  Software Developer <span className="text-sm text-gray-500">Freelance</span>
                  </h3>
                  <p className="text-sm text-gray-500">7/2021 - Present</p>
                  <ul className="list-disc list-inside text-gray-600">
                  <li>Development of online stores and accounting systems | PostgreSQL, Django, React, Adobe XD</li>
                  <li>Network infrastructure implementation | WireGuard, OpenVPN, Mikrotik</li>
                  </ul>
                </div>
                {/* Carmo Wood */}
                <div>
                  <h3 className="font-bold text-gray-700">
                  Infrastructure Engineer <span className="text-sm text-gray-500">Carmo Wood, Portugal</span>
                  </h3>
                  <p className="text-sm text-gray-500">9/2022 - 11/2023</p>
                  <ul className="list-disc list-inside text-gray-600">
                  <li>Windows computer monitoring through A.D. service</li>
                  <li>Maintenance of VMware virtual environment and AS400 server | Veeam B&R, Vmware ESXi</li>
                  <li>Design and creation of various software, including Web platform</li>
                  <li>Backend and Middleware for online store | Salesforce, Shopify, Pentaho, MSSQL</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="flex items-start md:gap-4 rounded-lg">
              
              <span className="shrink-0 rounded-full bg-white p-2 m-2">
                <svg
                  className="size-9"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6-3.2v6.2l6 3 6-3V10.8l-6 3.2z"
                  />
                </svg>
              </span>
              <div className="m-6">
                <h2 className="text-lg font-bold mb-2 text-gray-700">Education</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-gray-700">Computer Science</h3>
                    <p className="text-sm text-gray-500">42 Lisboa</p>
                    <p className="text-sm text-gray-500">08/2022 - 09/2023</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700">BSc Software Engineer</h3>
                    <p className="text-sm text-gray-500">Solent University</p>
                    <p className="text-sm text-gray-500">09/2019 - 06/2022</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          </div>

            
        </section>
    );
}

export function Techies(){
  return(
      <section className="bg-gray-900 text-white rounded-lg shadow-2xl mb-16">
        <div className="max-w-screen-xl px-4 py-8 sm:px-2 sm:py-12 lg:px-14 lg:py-16">
          <div className="max-w-xl">
            <h2 className=" text-orange-500 text-3xl font-bold sm:text-4xl">💡 TECH STACK</h2>

            <p className="mt-4 text-gray-300">
              As a FullStack Dev, my workflow genericly lies in both frontend and backend development.
               Below in the sections, you will find the specific languages and frameworks I work with.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4  bg-slate-700 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              </span>

              <div className="m-2">
                <h2 className="text-lg font-bold">Client Side</h2>

                <div className="mt-1 text-sm text-gray-300">
                  <div className="flex gap-4">
                    <span>
                      <p className="underline font-bold">JavaScript </p>
                      <p>Next.js</p>
                      <p>React</p>
                    </span>
                    <span>
                      <p className="underline font-bold">CSS</p>
                      <p>Tailwind CSS</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4  bg-slate-500 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </span>

              <div className="m-2">
                <h2 className="text-lg font-bold">Server Side</h2>
                <div className="mt-1 text-sm text-gray-300">
                  <div className="flex gap-8">
                    <span>
                      <p className="underline font-bold">Python </p>
                      <p>Django</p>
                      <p>Django RCF</p>
                      <p>Celery</p>
                    </span>
                    <span>
                      <p className="underline font-bold">Javascript</p>
                      <p>Node.Js</p>
                      <span className="underline font-bold">Go</span>
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4  bg-slate-700 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg> 
              </span>
              <div className="m-2">
                <h2 className="text-lg font-bold">Databases</h2>
                <div className="mt-1 text-sm text-gray-300">
                <div className="flex gap-8">
                    <span>
                      <p className="underline font-bold">SQL</p>
                      <p>Postgresql</p>
                      <p>MSSQL</p>
                      <p>MySQL</p>
                    </span>
                    <span>
                      <p className="underline font-bold">NoSQL</p>
                      <p>MongoDB</p>
                      <p>Redis</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4  bg-slate-500 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </span>

              <div className="m-2">
                <h2 className="text-lg font-bold">DevOPS</h2>
                <div className="mt-1 text-sm text-gray-300">
                <div className="flex gap-8">
                    <span>
                    <p className="underline font-bold">Cont/Orch</p>
                      <p>Docker</p>
                      <p>K8s</p>
                      <p>Terraform</p>
                    </span>
                    <span>
                    <p className="underline font-bold">CI/CD</p>
                      <p>Github CI/CD</p>
                      <p>Jenkins</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4  bg-slate-700 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
                </svg>
              </span>

              <div className="m-2">
                <h2 className="text-lg font-bold">Mobile</h2>

                <div className="mt-1 text-sm text-gray-300">
                <div className="flex gap-8">
                    <span>
                      <p className="underline font-bold">Xplatform</p>
                      <p>React Native</p>
                      <p>Expo</p>
                    </span>
                    <span>
                      <p className="underline font-bold">Native</p>
                      <p>Kotlin(Android)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-500 rounded-lg">
              <span className="shrink-0 rounded-lg bg-gray-800 m-3 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>

              <div className="m-2">
                <h2 className="text-lg font-bold">Monitoring Tools</h2>
                <div className="mt-1 text-sm text-gray-300">
                <div className="flex gap-8">
                    <span>
                      <p className="underline font-bold">Monitoring</p>
                      <p>Prometheus</p>
                      <p>Datadog</p>
                      <p>GC Log/Monitor</p>
                    </span>
                    <span>
                      <p className="underline font-bold">Outro</p>
                      <p>Postman</p>
                      <p>Sentry</p>
                      <p>Git</p>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}