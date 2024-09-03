import Image from "next/image";
import Laugh from "./laugh.png"
import Slope from "./slope.png"
import React from "react";

export default function About() {
    return (
        <main>
            <nav className="bg-white dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Charles Liggins</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 pr-6== md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:bg-black dark:border-gray-700">
                            <li>
                                <a href="https://drive.google.com/file/d/13GDGj5Ex4sm0i_77hrRFlofYRSTTk1GX/view?usp=sharing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Resume</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">About Me</a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                            </li>
                            <li>
                                <a href="https://heather-journey-e15.notion.site/Blog-47b31fe0ae0e426d8278882117919f3d" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog  </a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="flex flex-row items-center justify-between px-8">
                <div className="flex-shrink-0">
                    <Image
                        src={Laugh}
                        className='rounded-3xl'
                        alt="Charles Laughing"
                        style={{ width: 300, height: 'auto ' }}
                    />
                </div>

                <div className="flex flex-col flex-grow mx-4 max-w-[60%]">
                    <div>
                        <p className="font-bold text-4xl text-center mb-4 mt-80">
                            About Me:
                        </p>
                        <p className="text-3xl font-semibold text-center break-words ">
                            I’m a First-Generation African American student all the way from Lancaster, California, and beyond programming and math,
                            I love to play tennis, make youtube videos, and exploring nature.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-4xl text-center mb-4 mt-80">
                            On Campus:
                        </p>
                        <p className="text-3xl font-semibold text-center break-words">
                            I’d like to say I'm pretty involved.
                        </p>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <Image
                        src={Slope}
                        className='rounded-3xl '
                        alt="Slope"
                        style={{ width: 300, height: 'auto' }}
                    />
                </div>

            </div>
        </main>
    );
}