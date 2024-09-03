import swiftLogo from './swift.png'
import reactLogo from './react.png'
import jsLogo from './js.png'
import github from './github.png'
import cpp from './c++.png'
import py from './python.png'
import java from './java.png'
import urmc from './urmc.png'
import eboard from './eboard.png'
import points from './pts.png'
import eboardDesc from './eboardDesc.png'
import ecolens from './ecolens.png'
import urmcSite from './urmcSiteLogo.jpeg'
import kotlin from './Kotlin.png'
import Image from "next/image";
import React from "react";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import linkedin from './LinkedIn.png'
import tailwindLogo from './tailwind.png'
import ToggleButton from '../components/ToggleButton';
import Carousel from '../components/Carousel';
import { link } from 'fs'


const Projects: React.FC = () => {

    const images = [
        urmc,
        eboard,
        eboardDesc,
        points,
    ];

    const images2 = [
        ecolens,
        eboard,
        eboardDesc,
        points,
    ];


    const descriptions = [
        'Landing Page',
        'Eboard Page',
        'Member Descriptions',
        'Points Page Prototype',
    ];

    return (
        <main className=''>
            <nav className="bg-stone-100  fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Charles Liggins</span>
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
                        <ul className="flex flex-col p-4 pr-6== md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                                <a href="https://drive.google.com/file/d/13GDGj5Ex4sm0i_77hrRFlofYRSTTk1GX/view?usp=sharing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Resume</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About Me  </a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Projects  </a>
                            </li>
                            <li>
                                <a href="https://heather-journey-e15.notion.site/Blog-47b31fe0ae0e426d8278882117919f3d" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog  </a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <div className="text-center text-black justify-between text-7xl font-bold pt-24 ">
                    <p>
                        Projects.
                    </p>
                </div>

                <div className="flex flex-nowrap font-bold justify-between pt-10 pb-24">

                    <div className="text-left  text-black">
                        <p className="text-5xl pl-24 pb-8">
                            Overview:
                        </p>
                        <ul className="text-4xl pl-20">
                            <ul className='flex flex-row'>
                                <li className='text-indigo-700'>
                                    6
                                </li>
                                <li className='text-black ml-2'>
                                    Projects
                                </li>
                            </ul>

                            <ul className='flex flex-row'>
                                <li className='text-indigo-700'>
                                    8+
                                </li>
                                <li className='text-black ml-2'>
                                    Collaborators
                                </li>
                            </ul>

                            <ul className='flex flex-row'>
                                <li className='text-indigo-700'>
                                    200+
                                </li>
                                <li className='text-black ml-2'>
                                    Commits
                                </li>
                            </ul>

                            <ul className='flex flex-row'>
                                <li className='text-indigo-700'>
                                    2
                                </li>
                                <li className='text-black ml-2'>
                                    Blog Features
                                </li>
                            </ul>

                        </ul>
                    </div>


                    <div className="text-right  flex  text-black flex-col items-center">
                        <p className="text-5xl pb-8">
                            Tech Stack:
                        </p>
                        <div className=''>
                            <ul className="text-4xl pr-24 flex space-x-16">
                                <div>
                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
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
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={reactLogo}
                                                className='rounded-lg'
                                                alt="React Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                React
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={jsLogo}
                                                className='rounded-lg'
                                                alt="Javascript Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                Javascript
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={cpp}
                                                className='rounded-lg'
                                                alt="C++ Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                C++
                                            </p>
                                        </div>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={py}
                                                className='rounded-lg'
                                                alt="Python Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                Python
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={java}
                                                className='rounded-lg'
                                                alt="Java Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                Java
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={java}
                                                className='rounded-lg'
                                                alt="Java Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                Java
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex items-center justify-between pt-2'>
                                            <Image
                                                src={kotlin}
                                                className='rounded-lg'
                                                alt="Kotlin Logo"
                                                style={{ width: 'auto', height: 40 }}
                                            />
                                            <p className='ml-4'>
                                                Kotlin
                                            </p>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {
                    //urmc proj
                }
                <div className='pt-24 pl-12 pb-24  flex items-center justify-between'>

                    <div className=''>
                        <Carousel images={images} descriptions={descriptions} />
                    </div>
                    <div>

                    </div>

                    <div>
                        <div className='flex flex-col items-center'>
                            <p className=' font-semibold text-2xl text-black italic'>
                                Empowering minorities in computing
                            </p>
                            <p className=' font-bold text-4xl text-black bg-clip-text'>
                                URMC - Frontend Developer
                            </p>
                            <div className="relative inline-block ml-8 mr-8 text-center text-black border-b-2 border-gray-300 ">
                            </div>
                        </div>

                        <div className='items-center ml-4'>
                            <div className="relative inline-block ml-6 mr-4 mt-1 p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Web Development</p>
                            </div>
                            <div className="relative inline-block ml-6 mr-4 mt-1 p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Active Project</p>
                            </div>
                            <div className="relative inline-block ml-6 mr-4 mt-1 p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Team Project</p>
                            </div>
                        </div>

                        {/* tech used  */}
                        <div className='font-semibold flex flex-col text-black items-center mb-2'>
                            <div className='flex flex-row'>
                                <div className='flex items-center justify-between pt-2 pr-4'>
                                    <Image
                                        src={reactLogo}
                                        className='rounded-lg'
                                        alt="React Logo"
                                        style={{ width: 'auto', height: 20 }}
                                    />
                                    <p className='ml-4'>
                                        React
                                    </p>
                                </div>

                                <div className='flex items-center justify-between pt-2'>
                                    <Image
                                        src={tailwindLogo}
                                        className='rounded-lg'
                                        alt="React Logo"
                                        style={{ width: 'auto', height: 20 }}
                                    />
                                    <p className='ml-4'>
                                        Tailwind
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* dropdown */}

                        <ul className='pb-8'>
                            <li>
                                <ToggleButton
                                    initialState={false}
                                    isTop={true}
                                    label="What is URMC?"
                                    content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                />
                            </li>
                            <li>
                                <ToggleButton
                                    initialState={false}
                                    label="What changes have you implemented?"
                                    content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                />
                            </li>
                            <li>
                                <ToggleButton
                                    initialState={false}
                                    label="What was challenging about this project?"
                                    content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                />
                            </li>
                            <li>
                                <ToggleButton
                                    initialState={false}
                                    isBottom={true}
                                    label="How did you collaborate with other engineers in this project?"
                                    content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                />
                            </li>
                        </ul>

                        <div className='flex flex-nowrap'>
                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-14 '>
                                <a href="https://urmc.cs.cornell.edu/">
                                    <Image
                                        src={urmcSite}
                                        className='rounded-lg'
                                        alt="Github Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    Website
                                </p>
                            </div>

                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-8'>
                                <a href="https://github.com/urmc-cornell/urmc-website">
                                    <Image
                                        src={github}
                                        className='rounded-lg'
                                        alt="Github Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    Github
                                </p>
                            </div>

                            <div className='flex flex-row items-center border-2 border-black p-2 rounded-2xl bg-stone-400 ml-8 mr-12'>
                                <a href="https://www.linkedin.com/company/urmc-cornell/mycompany/">
                                    <Image
                                        src={linkedin}
                                        className='rounded-lg'
                                        alt="LinkedIn Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    LinkedIn
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
};
export default Projects;

