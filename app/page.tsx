import Image from "next/image";
import profilePic from './niagara.png'
import linkedIn from './linkedin-black.png'
import github from './github-blk.png'
import React from "react";


export default function Home() {
  return (

    <main className="bg-white flex min-h-screen flex-col items-center justify-between overflow-y:auto ">
      <nav className="bg-stone-100  fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
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
            <ul className="flex flex-col p-4 pr-6== md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <a href="https://drive.google.com/file/d/1rVK1-zzFrTTv6BqgB64Ik8xndiJ6JXYu/view?usp=sharing" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Resume</a>
              </li>
              <li>
                <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About Me  </a>
              </li>
              <li>
                <a href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Projects  </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Xhetherr" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">YouTube  </a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
              </li>
              <li>
                <a href="/experience" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-row items-center justify-center gap-8 px-4 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-row items-center justify-center gap-8">
          <div>
            <Image
              src={profilePic}
              alt="Picture of the author"
              className="rounded-3xl"
              style={{ width: 'auto', height: 464 }}
            />
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="text-7xl font-bold text-black">
              <p>
                Charles Liggins
              </p>
            </div>

            <div className="words pt-4">
              <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                <span className="text-gray-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="block animate-text-slide text-center leading-tight [&_li]:block">
                    <li>Full Stack Developer</li>
                    <li>Math Enthusiast</li>
                    <li>Problem Solver</li>
                    <li>Software Engineer</li>
                    <li>Cool Guy</li>
                    <li aria-hidden="true">Full Stack Developer</li>
                  </ul>
                </span>
              </div>
            </div>

            <div className="text-2xl text-center pb-14 max-w-2xl text-black pt-4">
              <p className='text-center'>
                Hey! Im a sophomore at Cornell studying Computer Science, minoring in Applied Mathematics, and Im on a mission to build products that people need.
              </p>
            </div>

            <div className="flex flex-row ">
              <a href="https://github.com/xhether">
                <Image
                  src={github}
                  alt="github"
                  style={{ width: 'auto', height: 100 }}
                />
              </a>
              <a href="https://www.linkedin.com/in/charles-liggins-31189b274/">
                <Image
                  src={linkedIn}
                  alt="linkedin"
                  style={{ width: 'auto', height: 100 }}
                />
              </a>
            </div>
          </div>

        </div>
      </div>




    </main >
  );
}
