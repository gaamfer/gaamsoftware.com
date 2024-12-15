import { BigSection, Techies } from "@/app/components/sections"


export default function TechStack () {
    return (
        <>
        <BigSection>
            {/* <h1 className=" text-gray-800 text-4xl font-bold mb-8 mt-8">Technologies I use.</h1> */}
            <div>
                <Techies/>

                {/* Services */}
                <div className='mt-8' id='providers'>
                    <div className="bg-blue-950 text-white rounded-3xl shadow-xl md: items-center">
                         
                        <div className=" md:flex p-10">
                            
                            {/* Space for IaaS */}
                            <div id="IaaS" className="md:mt-0 mt-4 md:w-1/2 md:ml-20">
                                <div className="w-auto">
                                    <h2 className="text-2xl font-bold">IaaS</h2>
                                    <p className="mt-2 text-gray-300">
                                        Infrastructure as a Service
                                    </p>
                                </div>
                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3 md:h-1/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                                        <svg
                                            className="size-8"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 0L3.714 6v12L12 24l8.286-6V6L12 0zm5.714 15.806L12 19.806l-5.714-4V8.194L12 4.194l5.714 4v7.612z"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M12 4.194v15.612l5.714-4V8.194L12 4.194z"
                                                opacity=".4"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M6.286 8.194v7.612l5.714 4V4.194l-5.714 4z"
                                                opacity=".7"
                                            />
                                        </svg>
                                        </span>

                                        <div className="m-4">
                                            <h2 className="text-2xl font-bold">Google CP</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p className=" font-bold">Mainly for Deployment of Containers.</p>
                                                    <p></p>
                                                    
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3 md:h-1/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-2 m-2">
                                            <svg
                                                className="size-12"
                                                viewBox="5 -30 354 354"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M177 221.5v-34.2c36.2 0 64.3-35.9 50.4-74-5.1-14-16.4-25.3-30.5-30.4-38.1-13.8-74 14.2-74 50.4l-34.1 0c0-57.7 55.8-102.7 116.3-83.8 26.4 8.3 47.5 29.3 55.7 55.7 18.9 60.5-26.1 116.3-83.8 116.3z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M177.1 187.5H143v-34.1h34.1zM143 213.6h-26.1v-26.1H143zM116.9 187.5H95v-21.9h21.9z"
                                                />
                                            </svg>
                                        </span>
                                        <div className="m-4">
                                            <h2 className="text-2xl font-bold">DigitalOcean</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p className="font-bold">Hosting of databases, linux instances and deployment of apps.</p>
                                                    
                                                    <p></p>
                                                    
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Space For Paas */}
                            <div id="PaaS" className="md:mt-0 mt-16 md:w-1/2 md:ml-20">
                                <div className="w-auto">
                                    <h2 className="text-2xl font-bold">PaaS</h2>
                                    <p className="mt-2 text-gray-300">
                                        Platform as a Service
                                    </p>
                                </div>
                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                                        <svg
                                            className="size-8"
                                            viewBox="0 0 60 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <text
                                                x="5"
                                                y="18"
                                                fill="currentColor"
                                                fontSize="16"
                                                fontWeight="bold"
                                            >
                                                Render
                                            </text>
                                        </svg>
                                        </span>

                                        <div className="m-2">
                                            <h2 className="text-lg font-bold">Render</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p className="">Mainly for Django Apps.</p>
                                                    <p></p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                                        <svg
                                            className="size-8"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M24 22.525H0l12-21.05 12 21.05z"
                                            />
                                        </svg>
                                        </span>

                                        <div className="m-2">
                                            <h2 className="text-lg font-bold">Vercel</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p>Deployment of NextJS app.</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                                        <svg  className="size-8"
                                            viewBox="0 -12 -20 34"
                                            xmlns="http://www.w3.org/2000/svg"  
                                            fill="#ffffff" >
                                            <path d="m21.462 18.152c.071-.194.112-.417.112-.651 0-.394-.117-.76-.318-1.067l.005.007c-.321-.413-.817-.677-1.376-.677-.002 0-.004 0-.006 0l-11.257-.146c-.001 0-.001 0-.002 0-.071 0-.134-.036-.171-.09v-.001c-.023-.038-.037-.083-.037-.132 0-.025.004-.049.01-.071v.002c.042-.112.143-.192.264-.202h.001l11.353-.146c1.505-.168 2.749-1.135 3.309-2.461l.01-.027.655-1.687c.017-.041.027-.088.027-.138 0-.029-.003-.057-.01-.084v.002c-.765-3.332-3.704-5.78-7.216-5.78-3.234 0-5.983 2.076-6.987 4.968l-.016.052c-.549-.416-1.244-.667-1.997-.667-1.718 0-3.131 1.303-3.306 2.974l-.001.014c-.01.101-.016.218-.016.336 0 .293.036.578.104.85l-.005-.024c-2.551.075-4.59 2.161-4.59 4.722v.006c.002.244.019.481.05.715l-.003-.029c.017.108.108.19.219.192h20.776c.125-.002.23-.086.265-.2l.001-.002z"/>
                                            <path d="m25.046 10.919c-.101 0-.21 0-.311.008-.077.005-.141.057-.164.127v.001l-.439 1.528c-.071.194-.112.417-.112.651 0 .394.117.76.318 1.067l-.005-.007c.321.413.817.677 1.376.677h.006l2.4.146h.002c.071 0 .134.036.171.09v.001c.023.038.037.084.037.133 0 .024-.003.048-.01.07v-.002c-.042.112-.143.192-.264.202h-.001l-2.496.146c-1.507.162-2.754 1.128-3.315 2.455l-.01.027-.182.467c-.006.015-.01.032-.01.051 0 .073.059.132.132.132h.007 8.578.003c.103 0 .189-.069.216-.163v-.002c.144-.499.227-1.072.228-1.664-.002-3.394-2.754-6.145-6.149-6.145-.002 0-.003 0-.005 0z"/>
                                        </svg>
                                        </span>

                                        <div className="m-2">
                                            <h2 className="text-lg font-bold">CloudFlare</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p className="">CDN</p>
                                                    <p></p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid-cols-1 gap-8 md:mt-8">
                                    <div className="flex items-start bg-slate-700 rounded-sm md:w-2/3">
                                        <span className="shrink-0 rounded-lg bg-gray-800 p-4 m-3">
                                        <svg className="size-8" 
                                            fill="#ffffff" 
                                            viewBox="0 0 32 32" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>firebase</title>
                                            <path d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894zM26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005zM5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"></path>
                                        </svg>
                                        </span>

                                        <div className="m-2">
                                            <h2 className="text-lg font-bold">Firebase</h2>

                                            <div className="mt-1 text-sm text-gray-300">
                                                <div className="flex gap-4">
                                                    <span>
                                                    <p className="underline font-bold"></p>
                                                    <p>Auth, Realtime Database & Cloud Storage.</p>
                                                    
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    

                    </div>
                </div>
            </div>
        </BigSection>
        </>
    )
}