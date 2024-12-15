'use client';

import swiftLogo from './images/swift.png'
import reactLogo from './images/react.png'
import jsLogo from './images/js.png'
import github from './images/github.png'
import cpp from './images/c++.png'
import py from './images/python.png'
import java from './images/java.png'
import urmc from './images/urmc.png'
import eboard from './images/eboard.png'
import points from './images/pts.png'
import finalHome from './images/ecolensScreen.png'
import training from './images/ecolensTraining.png'
import ogFrontend from './images/ogFrontend.png'
import eboardDesc from './images/eboardDesc.png'
import ecolens from './images/ecolens.png'
import urmcSite from './images/urmcSiteLogo.jpeg'
import youtube from './images/youtube.png'
import home from './images/home.png'
import pfp from './images/profile.png'
import area from './images/areaPov.png'
import viam from './images/viam.jpg'
import auth from './images/auth.png'
import kotlin from './images/Kotlin.png'
import Image from "next/image";
import postgres from './images/postgres.png'
import React from "react";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import linkedin from './images/LinkedIn.png'
import tailwindLogo from './images/tailwind.png'
import ToggleButton from '../components/ToggleButton';
import ocaml from './images/OCaml.png'
import Slider from '../components/Slider';
import { link } from 'fs'
import { profile } from 'console'
import ProjectBar from '../components/projectBar';


const Projects: React.FC = () => {

    const images = [
        urmc,
        eboard,
        eboardDesc,
        points,
    ];

    const images2 = [
        ecolens,
        ogFrontend,
        training,
        finalHome,
    ];

    const images3 = [
        home,
        auth,
        area,
        pfp,
    ];

    const descriptions = [
        'Landing Page',
        'Eboard Page',
        'Member Descriptions',
        'Points Page Prototype',
    ];

    const [activeToggle, setActiveToggle] = useState<number | null>(null);

    console.log('Current activeToggle:', activeToggle); // Debug log

    const handleToggle = (index: number) => {
        console.log('Toggle clicked:', index); // Debug log
        setActiveToggle(activeToggle === index ? null : index);
    };

    return (
        <main className='bg-white'>
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
                                <a href="https://drive.google.com/file/d/1nUEJ3GsXhqzCrRKPonvByuewNTkRuvsw/view?usp=sharing" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Resume</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About Me  </a>
                            </li>
                            <li>
                                <a href="/projects" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Projects  </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@Xhetherr" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">YouTube  </a>
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

                <div className="flex flex-nowrap font-bold justify-center pt-10 pb-24">
                    <div className="flex gap-80">
                        <div className="text-left text-black">
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

                        <div className="text-right flex text-black flex-col items-center pl-8">
                            <p className="text-5xl pb-8">
                                Tech Stack:
                            </p>
                            <div className='pl-12'>
                                <ul className="text-4xl pr-24 flex space-x-16">
                                    <div className="space-y-8">
                                        <li>
                                            <div className='flex items-center justify-between w-48'>
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
                                            <div className='flex items-center justify-between w-48'>
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
                                            <div className='flex items-center justify-between w-48'>
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
                                            <div className='flex items-center justify-between w-48'>
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
                                    <div className="space-y-8">
                                        <li>
                                            <div className='flex items-center justify-between w-48'>
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
                                            <div className='flex items-center justify-between w-48'>
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
                                            <div className='flex items-center justify-between w-48'>
                                                <Image
                                                    src={ocaml}
                                                    className='rounded-lg'
                                                    alt="OCaml Logo"
                                                    style={{ width: 'auto', height: 40 }}
                                                />
                                                <p className='ml-4'>
                                                    OCaml
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='flex items-center justify-between w-48'>
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
                </div>
            </div>

            <ProjectBar
                projects={[
                    {
                        name: "URMC Website",
                        image: urmcSite.src,
                        subtitle1: "Web Development",
                        subtitle2: "8k MAU's"
                    },
                    {
                        name: "Ecolens",
                        image: ecolens.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "PennApps XXIV Winner"
                    },
                    {
                        name: "StuDone",
                        image: home.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "Task Management"
                    }
                ]}
            />

            <div id="urmc" className='pt-24 pl-12 pb-24 flex items-center justify-between'>
                <div className='w-1/2'>
                    <Slider images={images} descriptions={descriptions} />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className=' font-semibold text-2xl text-black italic'>
                            Empowering minorities in computing
                        </p>
                        <p className=' font-bold text-4xl text-black bg-clip-text'>
                            URMC, Frontend Developer
                        </p>
                        <div className="relative inline-block ml-8 mr-8 text-center text-black border-b-2 border-gray-300 ">
                        </div>
                    </div>

                    <div className='items-center ml-4 flex justify-center'>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Web Development</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Active Project</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Team Project</p>
                            </div>
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

                    <ul className='pb-8 flex flex-col items-center'>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 0}
                                isTop={true}
                                label="What is URMC?"
                                content='Underrepresented Minorities in Computing (URMC) is a group at Cornell dedicated to creating a comfortable space for students to thrive at Cornell. URMC is backed by top companies such as Google, Duolingo, and Jane Street who support the mission of increasing URM placement in industry.'
                                onToggle={() => handleToggle(0)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 1}
                                label="What changes have you implemented?"
                                content="Thus far, I've worked on updating the members on eBoard, updating the points page, and I'm currently updating the TA directory. We have many exciting updates coming, such as a website redesign."
                                onToggle={() => handleToggle(1)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 2}
                                label="What was challenging about this project?"
                                content="This project was challenging for me because it's my first time working on an already maintained codebase that I'm unfamiliar with. Nonetheless, I've been able to adapt and find my place in the codebase."
                                onToggle={() => handleToggle(2)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 3}
                                isBottom={true}
                                label="What has this project taught you?"
                                content='This project taught me (accompanied with working on my personal site!) Taught me common patterns in frontend development, and also how to commit and work simultaneously with someone working on completely different parts of code in github.'
                                onToggle={() => handleToggle(3)}
                            />
                        </li>
                    </ul>

                    <div className='flex justify-center'>
                        <div className='flex flex-nowrap gap-4'>
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

            <div id="ecolens" className='pt-24 pl-12 pb-24 flex items-center justify-between'>
                <div className='w-1/2'>
                    <Slider images={images2} descriptions={descriptions} />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className=' font-semibold text-2xl text-black italic'>
                            Sustainability for all
                        </p>
                        <p className=' font-bold text-4xl text-black bg-clip-text'>
                            Ecolens, Frontend Developer
                        </p>
                        <div className="relative inline-block ml-8 mr-8 text-center text-black border-b-2 border-gray-300 ">
                        </div>
                    </div>

                    <div className='items-center ml-4 flex justify-center'>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Web Development</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Archived Project</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Team Project</p>
                            </div>
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

                    <ul className='pb-8 flex flex-col items-center'>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 4}
                                isTop={true}
                                label="What is Ecolens?"
                                content='Ecolens is a cloud-based machine learning webstream application designed to identify recyclable items from non-recyclable ones. It not only provides users with sustainability literacy but also offers a smart trash management system for trash can owners.'
                                onToggle={() => handleToggle(4)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 5}
                                label="What changes have you implemented?"
                                content="I worked solely on the frontend, and in particular, although many of my original designs couldn't make the cut, I spent much of my time implementing the actively displayed video stream that allows the model to see the object it's meant to identify"
                                onToggle={() => handleToggle(5)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 6}
                                label="What was challenging about this project?"
                                content='Technically speaking, this was my first time working with JavaScript, so getting familiar with everything was extremely difficult. This was also first time ever going to a hackathon, and hence there came many additional challenges from brainstorming to judging'
                                onToggle={() => handleToggle(6)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 7}
                                isBottom={true}
                                label="What's your reflection of this project?"
                                content="This is the first time that I just got together with people and made something, so it's extremely memorable and also served as a foundation for me being heavily involved in the programming coummunity outside of school, and I also love hackathons now."
                                onToggle={() => handleToggle(7)}
                            />
                        </li>
                    </ul>

                    <div className='flex justify-center'>
                        <div className='flex flex-nowrap gap-4'>
                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-14 '>
                                <a href="https://www.youtube.com/watch?v=OfBilJrp4RI">
                                    <Image
                                        src={youtube}
                                        className='rounded-lg'
                                        alt="Github Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    Demo
                                </p>
                            </div>

                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-8'>
                                <a href="https://github.com/bobbykabob/pennapps2023">
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
                                <a href="https://www.viam.com/post/build-backstories-creating-eco-lens-the-smart-machine-that-helps-with-recycling">
                                    <Image
                                        src={viam}
                                        className='rounded-lg'
                                        alt="LinkedIn Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    Blog
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="studone" className='pt-24 pl-12 pb-24 flex items-center justify-between'>
                <div className='w-1/2'>
                    <Slider images={images3} descriptions={descriptions} />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col items-center'>
                        <p className=' font-semibold text-2xl text-black italic'>
                            Getting students organized
                        </p>
                        <p className=' font-bold text-4xl text-black bg-clip-text'>
                            StuDone, Full Stack Developer
                        </p>
                        <div className="relative inline-block ml-8 mr-8 text-center text-black border-b-2 border-gray-300 ">
                        </div>
                    </div>

                    <div className='items-center ml-4 flex justify-center'>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Web Development</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Archived Project</p>
                            </div>
                            <div className="relative inline-block p-1.5">
                                <p className='border-2 h-10 border-indigo-500 rounded-lg bg-indigo-100 p-2 text-indigo-600'>Team Project</p>
                            </div>
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

                    <ul className='pb-8 flex flex-col items-center'>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 8}
                                isTop={true}
                                label="What is Studone?"
                                content="Studone is simply a task manager oriented specifically for students. Many task managers market themselves towards busy professionals, and sometimes even students, Studone is unique in its layered user interface and multi-user capabilities"
                                onToggle={() => handleToggle(8)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 9}
                                label="What changes have you implemented?"
                                content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                onToggle={() => handleToggle(9)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 10}
                                label="What was challenging about this project?"
                                content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                onToggle={() => handleToggle(10)}
                            />
                        </li>
                        <li>
                            <ToggleButton
                                isOn={activeToggle === 11}
                                isBottom={true}
                                label="How did you collaborate with other engineers in this project?"
                                content='If you know of peers or friends that would be interested as well, feel free to pass along this website to them. With that, please keep in mind this program is exclusively for rising freshman and sophomores (2027 & 2028 grads).'
                                onToggle={() => handleToggle(11)}
                            />
                        </li>
                    </ul>

                    <div className='flex justify-center'>
                        <div className='flex flex-nowrap gap-4'>
                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-14 '>
                                <a href="https://youtu.be/RlJKfxnJdaw">
                                    <Image
                                        src={youtube}
                                        className='rounded-lg'
                                        alt="Github Logo"
                                        style={{ width: 'auto', height: 36 }}
                                    />
                                </a>
                                <p className='ml-2 font-semibold text-xl'>
                                    Demo
                                </p>
                            </div>

                            <div className='flex flex-row items-center border-2 p-2 rounded-2xl border-black bg-stone-400 ml-8'>
                                <a href="https://github.com/Xhether/SwiftStudentChallenge">
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



                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Projects;