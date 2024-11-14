 import React from "react";


export function BigSection({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <div className=" "> {/* This is occupies an entire page */}
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

export function Card() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                        <header>
                            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

                            <p className="mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
                            provident nulla error!
                            </p>
                        </header>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                        >
                            Shop All
                        </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-2 gap-4">
                        <li>
                            <a href="#" className="group block">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                                alt=""
                                className="aspect-square w-full rounded object-cover"
                            />

                            <div className="mt-3">
                                <h3
                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                >
                                Simple Watch
                                </h3>

                                <p className="mt-1 text-sm text-gray-700">$150</p>
                            </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                                alt=""
                                className="aspect-square w-full rounded object-cover"
                            />

                            <div className="mt-3">
                                <h3
                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                >
                                Simple Watch
                                </h3>

                                <p className="mt-1 text-sm text-gray-700">$150</p>
                            </div>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
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
        <section className="bg-gray-900 text-white">
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

              <p className="mt-4 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
                iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
                quibusdam, quos fuga minima.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <div>
                  <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                    possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}