import swiftLogo from './swift.png'
import reactLogo from './react.png'
import jsLogo from './js.png'
import github from './github.png'
import cpp from './c++.png'
import py from './python.png'
import java from './java.png'
import urmc from './urmc.png'
import Image from "next/image";
import React from "react";

export default function Page() {
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
                                <a href="https://drive.google.com/file/d/1lREMMt88PLpfdXa4rgqMiLQHaf4DT1-O/view?usp=drive_link" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Resume</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me  </a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Projects  </a>
                            </li>
                            <li>
                                <a href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog  </a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="text-center justify-between text-7xl font-bold pt-24 ">
                <p>
                    Projects.
                </p>
            </div>

            <div className="flex flex-nowrap font-bold justify-between pt-10">

                <div className="text-left">
                    <p className="text-5xl pl-24">
                        Overview:
                    </p>
                    <ul className="text-4xl pl-20">
                        <li>
                            6 Projects
                        </li>
                        <li>
                            8 Collaborators
                        </li>
                        <li>
                            200+ Github Commits
                        </li>
                        <li>
                            2 Blog Features
                        </li>
                    </ul>
                </div>


                <div className="text-right mr-24 ">
                    <p className="text-5xl ">
                        Tech Stack:
                    </p>
                    <ul className="text-4xl pr-24">
                        <li>
                            <div className='flex items-center justify-between'>
                                <Image
                                    src={swiftLogo}
                                    className="rounded-lg"
                                    alt="Swift Logo"
                                    style={{ width: 'auto', height: 40 }}
                                />
                                <p className='ml-4'>
                                    Swift
                                </p>
                            </div>
                        </li>

                        <li>
                            <Image
                                src={reactLogo}
                                className='rounded-lg'
                                alt="React Logo"
                                style={{ width: 'auto', height: 40 }}
                            />
                        </li>
                        <li>
                            <Image
                                src={jsLogo}
                                className='rounded-lg'
                                alt="Javascript Logo"
                                style={{ width: 'auto', height: 40 }}
                            />
                        </li>
                        <li>
                            <Image
                                src={cpp}
                                className='rounded-lg'
                                alt="C++ Logo"
                                style={{ width: 'auto', height: 40 }}
                            />
                        </li>
                        <li>
                            <Image
                                src={py}
                                className='rounded-lg'
                                alt="Python Logo"
                                style={{ width: 'auto', height: 40 }}
                            />
                        </li>
                        <li>
                            <Image
                                src={java}
                                className='rounded-lg'
                                alt="Java Logo"
                                style={{ width: 'auto', height: 40 }}
                            />
                        </li>
                    </ul>




                </div>
            </div>

            <div className='pt-24 pl-12 pb-12 flex items-center justify-between'>

                <Image
                    src={urmc}
                    className='rounded-lg'
                    alt="Java Logo"
                    style={{ width: 'auto', height: 400 }}
                />
                <div>
                    <p className='pr-24 ml-10 font-bold text-5xl'>
                        URMC Website
                    </p>
                    <div className="relative inline-block ml-12 mr-8 mt-4 p-1">
                        <div className="absolute inset-0 bg-blue-800 h-full w-full rounded-lg -z-10"></div>
                        <p className='text-blue-500'>Web Development</p>
                    </div>

                    <div className="relative inline-block ml-8 mr-8 mt-4">
                        <div className="absolute inset-0 bg-zinc-900 h-full w-full rounded-lg -z-10"></div>
                        <p className='p-4 font-semibold text-3xl'>
                            Maintaining the website of Cornell’s Colorstack chapter, which sees constant user traffic throughout the University and beyond.
                        </p>


                    </div>

                    <div className='flex flex-nowrap'>
                        <div className='pl-24 pt-8 flex items-center justify-between'>

                            <Image
                                src={github}
                                className='rounded-lg'
                                alt="Github Logo"
                                style={{ width: 'auto', height: 64 }}
                            />
                            <p className='ml-4'>
                                Website
                            </p>
                        </div>

                        <div className='pl-24 pt-8 flex items-center justify-between'>
                            <Image
                                src={github}
                                className='rounded-lg'
                                alt="Github Logo"
                                style={{ width: 'auto', height: 64 }}
                            />
                            <p className='ml-4'>
                                Github
                            </p>
                        </div>

                    </div>


                </div>

            </div>

        </main>
    );
}