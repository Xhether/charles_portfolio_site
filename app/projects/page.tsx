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
import ProjectCard from '../components/ProjectCard';


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
                <div className="text-center text-black justify-between text-7xl font-bold pt-36 pb-8 ">
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

                        <div className="text-right flex text-black flex-col items-center">
                            <p className="text-5xl pb-8">
                                Tech Stack:
                            </p>
                            <div className='pl-12'>
                                <ul className="text-4xl pr-24 flex space-x-24">
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
                    },
                    {
                        name: "Eatery Blue",
                        image: home.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "Task Management"
                    },
                    {
                        name: "All In: Millenium ",
                        image: home.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "Task Management"
                    },

                ]}
            />

            <ProjectCard
                id="urmc"
                title="URMC, Frontend Developer"
                subtitle="Empowering minorities in computing"
                sliderImages={images}
                sliderDescriptions={descriptions}
                tags={["Web Development", "Active Project", "Team Project"]}
                techStack={[
                    { logo: reactLogo, name: "React" },
                    { logo: tailwindLogo, name: "Tailwind" }
                ]}
                toggleQuestions={[
                    {
                        question: "What is URMC?",
                        answer: "Underrepresented Minorities in Computing (URMC) is a group at Cornell dedicated to creating a comfortable space for students to thrive at Cornell..."
                    },
                    {
                        question: "What is URMC?",
                        answer: "Underrepresented Minorities in Computing (URMC) is a group at Cornell dedicated to creating a comfortable space for students to thrive at Cornell..."
                    },
                    {
                        question: "What is URMC?",
                        answer: "Underrepresented Minorities in Computing (URMC) is a group at Cornell dedicated to creating a comfortable space for students to thrive at Cornell..."
                    },
                    {
                        question: "What is URMC?",
                        answer: "Underrepresented Minorities in Computing (URMC) is a group at Cornell dedicated to creating a comfortable space for students to thrive at Cornell..."
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: urmcSite, label: "Website", url: "https://urmc.cs.cornell.edu/" },
                    { icon: github, label: "Github", url: "https://github.com/urmc-cornell/urmc-website" },
                    { icon: linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/urmc-cornell/mycompany/" }
                ]}
            />

            <ProjectCard
                id="urmc"
                title="Ecolens, Frontend Developer"
                subtitle="Sustainability for All"
                sliderImages={images2}
                sliderDescriptions={descriptions}
                tags={["Web Development", "Archived Project", "Team Project"]}
                techStack={[
                    { logo: reactLogo, name: "React" },
                    { logo: tailwindLogo, name: "Tailwind" }
                ]}
                toggleQuestions={[
                    {
                        question: "What is Ecolens?",
                        answer: "TODO"
                    },
                    {
                        question: "What did you do?",
                        answer: "TODO"
                    },
                    {
                        question: "What did you do?",
                        answer: "TODO"
                    },
                    {
                        question: "What did you do?",
                        answer: "TODO"
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: urmcSite, label: "Website", url: "https://urmc.cs.cornell.edu/" },
                    { icon: github, label: "Github", url: "https://github.com/urmc-cornell/urmc-website" },
                    { icon: linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/urmc-cornell/mycompany/" }
                ]}
            />


        </main>
    );
};
export default Projects;