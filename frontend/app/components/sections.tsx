import React from "react";

export function BigSection({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <div className="min-h-screen px-16 sm:px-24 lg:px-32"> {/* This is occupies an entire page */}
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
            <article
            className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25 mb-5"
            >
                <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500 dark:text-gray-400">
                    10th Oct 2022
                    </time>

                    <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                        How to center an element using JavaScript and jQuery
                    </h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                    <span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                    >
                        Snippet
                    </span>

                    <span
                        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                    >
                        JavaScript
                    </span>
                    </div>
                </div>
            </article>
        </>
    );
}