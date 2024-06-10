import Image from "next/image";
import profilePic from './selfie.png'
import React from "react";


export default function Home() {

  return (

    <main className="font-family: -apple-system, BlinkMacSystemFont, sans-serif; flex min-h-screen flex-col items-center justify-between ">


      <div className="pb-10 pt-24">
        <Image
          src={profilePic}
          alt="Picture of the author"
          className="rounded-3xl"
          style={{ width: '100%', maxHeight: 400, height: '100%', maxWidth: 620 }}
        />
      </div>

      <div className="text-7xl font-bold ">
        <p>
          Charles Liggins
        </p>
      </div>

      <div className="words">
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">  <span className="text-gray-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-center  leading-tight [&_li]:block">
            <li>Full Stack Developer</li>
            <li>Math Enthusiast</li>
            <li>Problem Solver</li>
            <li>Software Engineer</li>
            <li>Algorithms Developer</li>
            <li aria-hidden="true">Full Stack Developer</li>
          </ul>
        </span></div>
      </div>
      <div className="text-2xl text-center pb-14 pt-6">
        <p>
          Hey! I’m a sophomore at Cornell studying CS and ORIE in the College of Engineering, and I love making cool stuff!
        </p>
      </div>

    </main >
  );
}
