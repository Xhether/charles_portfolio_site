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
import firebase from './images/firebase.png'
import eboardDesc from './images/eboardDesc.png'
import ecolens from './images/ecolens.png'
import eateryHalloween from './images/eateryhalloween.webp'
import urmcSite from './images/urmcSiteLogo.jpeg'
import youtube from './images/youtube.png'
import home from './images/home.png'
import filtering from './images/filtering.png'
import pfp from './images/profile.png'
import area from './images/areaPov.png'
import viam from './images/viam.jpg'
import auth from './images/auth.png'
import kotlin from './images/Kotlin.png'
import chest from './images/chestView.png'
import allinHome from './images/allinHome.png'
import eatery from './images/Eatery.png'
import swiftUILogo from './images/swiftui.png'
import Image from "next/image";
import postgres from './images/postgres.png'
import React from "react";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import linkedin from './images/LinkedIn.png'
import tailwindLogo from './images/tailwind.png'
import allin from './images/allin.png'
import ToggleButton from '../components/ToggleButton';
import ocaml from './images/OCaml.png'
import sheetView from './images/sheetView.png'
import profileView from './images/profileView.png'
import eateryhome from './images/eateryhome.png'
import oldEatery from './images/Eatery App.png'
import allinMockup from './images/mockup.png'
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

    const images4 = [
        eateryhome,
        oldEatery,
        filtering
    ];

    const images5 = [
        allinMockup,
        chest,
        sheetView,
        allinHome
    ]

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
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            <nav className="bg-stone-100 fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-black">
                            Charles Liggins
                        </span>
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
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 lg:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
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
                <div className="text-center text-black justify-between text-7xl font-bold pt-36 pb-12">
                    <p>
                        Projects.
                    </p>
                </div>

                <div className="flex flex-nowrap font-bold justify-center pt-10 pb-24">
                    <div className="flex gap-80">
                        <div className="text-left text-black ">
                            <p className="text-5xl pl-24 pb-8">
                                Overview:
                            </p>
                            <ul className="text-4xl pl-20 space-y-4">
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

            <div>
                <h1 className="text-4xl font-bold text-center mb-4 mt-12 text-black">
                    Project Directory
                </h1>
            </div>
            <ProjectBar
                projects={[
                    {
                        name: "URMC Website",
                        projectId: "urmc",
                        image: urmcSite.src,
                        subtitle1: "Web Development",
                        subtitle2: "1000+ Members"
                    },
                    {
                        name: "Ecolens",
                        projectId: "ecolens",
                        image: ecolens.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "PennApps XXIV Winner"
                    },
                    {
                        name: "StuDone",
                        projectId: "studone",
                        image: home.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "Task Management"
                    },
                    {
                        name: "Eatery Blue",
                        projectId: "eatery",
                        image: eatery.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "8k MAU's"
                    },
                    {
                        name: "All In: Millenium ",
                        projectId: "allin",
                        image: allin.src,
                        subtitle1: "Mobile Development",
                        subtitle2: "Sports Bettings"
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
                        question: "What is your role in this project?",
                        answer: "I'm a full stack developer, in charge of making the website pretty, as well as increasing ways to track points"
                    },
                    {
                        question: "What changes are you working on?",
                        answer: "Right now I'm working on engagement tracking via slack activity, as well as migrating our current points system to a database. Beyond that, I'm working to bring UI improvements to the site"
                    },
                    {
                        question: "What have you learned?",
                        answer: "This project has taught me mostly the importance of maintaining good style and keeping documentation of everything that I'm doing. This codebase will be maintained after my time at Cornell, so it's important that others can effectively build off of it."
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
                id="ecolens"
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
                        answer: "An overwhelming amount of Americans don't recycle, and many just don't know how. Ecolens uses computer vision to identify disposables and indicate whether they're recyclable, compostable, or trash"
                    },
                    {
                        question: "What was your role?",
                        answer: "I was a frontend developer and my main goal was to make the website viewable and allow for camera display on the site. I struggled a lot due to my minimal experience at the time, but learning the ropes of web development was useful here."
                    },
                    {
                        question: "What did you take away?",
                        answer: "This was my first ever hackathon (I've been to 4 since!), and I'd say my biggest takeaway is finding the importance in pulling through and getting things done. Staying up all night and scrambling with my team paid off."
                    },
                    {
                        question: "What are your thoughts on sustainable tech?",
                        answer: "I believe that technology is slowly becoming more and more sustainable, and is generally moving the world in a better place. Thinking about how to make something sustainable and optimizing for cost and materials used is really interesting and important."
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: github, label: "Github", url: "https://github.com/bobbykabob/pennapps2023" },
                    { icon: youtube, label: "Youtube Demo", url: "https://youtu.be/OfBilJrp4RI?si=qKlF2TQhbgeoTo_s" },
                ]}
            />

            <ProjectCard
                id="studone"
                title="StuDone, Full Stack Developer"
                subtitle="Getting Students Organized"
                sliderImages={images3}
                sliderDescriptions={descriptions}
                tags={["iOS Development", "Archived Project", "Team Project"]}
                techStack={[
                    { logo: swiftUILogo, name: "SwiftUI" },
                    { logo: firebase, name: "Google Firebase" },
                ]}
                toggleQuestions={[
                    {
                        question: "What is StuDone?",
                        answer: "TODO"
                    },
                    {
                        question: "What did you do?",
                        answer: "TODO"
                    },
                    {
                        question: "What are your takeaways?",
                        answer: "TODO"
                    },
                    {
                        question: "What ...?",
                        answer: "TODO"
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: github, label: "Github", url: "https://github.com/Xhether/SwiftStudentChallenge" },
                    { icon: youtube, label: "Youtube Demo", url: "https://youtu.be/RlJKfxnJdaw" },

                ]}
            />

            <ProjectCard
                id="eatery"
                title="Eatery, iOS Developer"
                subtitle="Cornell Dining Made Easy"
                sliderImages={images4}
                sliderDescriptions={descriptions}
                tags={["iOS Development", "Active Project", "Team Project"]}
                techStack={[
                    { logo: swiftLogo, name: "Swift UI Kit" },

                ]}
                toggleQuestions={[
                    {
                        question: "What is Eatery?",
                        answer: "TODO"
                    },
                    {
                        question: "What did you do?",
                        answer: "TODO"
                    },
                    {
                        question: "What were the biggest challenges on this project?",
                        answer: "TODO"
                    },
                    {
                        question: "Eatery and Cornell",
                        answer: "TODO"
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: eateryHalloween, label: "App Store Download", url: "https://apps.apple.com/us/app/eatery-cornell-dining/id1089672962" },
                    { icon: github, label: "Github", url: "https://github.com/cuappdev/eatery-blue-ios" },
                ]}
            />

            <ProjectCard
                id="allin"
                title="All-in, iOS Developer"
                subtitle="College Sports Betting Reimagined"
                sliderImages={images5}
                sliderDescriptions={descriptions}
                tags={["iOS Development", "Active Project", "Team Project"]}
                techStack={[
                    { logo: swiftUILogo, name: "SwiftUI" },
                ]}
                toggleQuestions={[
                    {
                        question: "What is All-in?",
                        answer: "TODO"
                    },
                    {
                        question: "What is your role?",
                        answer: "TODO"
                    },
                    {
                        question: "Why Sports Betting?",
                        answer: "TODO"
                    },
                    {
                        question: "What are you learning?",
                        answer: "TODO"
                    },
                    // ... other questions
                ]}
                links={[
                    { icon: urmcSite, label: "Website", url: "https://urmc.cs.cornell.edu/" },
                    { icon: github, label: "Github", url: "https://github.com/urmc-cornell/urmc-website" },
                ]}
            />
        </main>
    );
};
export default Projects;