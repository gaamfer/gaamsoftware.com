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
        <section className="bg-gray-900 text-white rounded-sm">
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