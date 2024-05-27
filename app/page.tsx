import Image from "next/image";
import profilePic from './me.png'
import React from "react";
import { ReactTextRotator } from "react-text-rotator";


export default function Home() {
  var ReactRotatingText = require('react-rotating-text');

  return (

    <main className="text-7xl font-bold font-family: -apple-system, BlinkMacSystemFont, sans-serif; flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-11">
        <Image
          src={profilePic}
          alt="Picture of the author"
          className="rounded-3xl"
          style={{ width: '100%', maxHeight: 400, height: '100%', maxWidth: 620 }}
        />
        <p>
          Charles Liggins
        </p>
      </div>
      <ReactRotatingText items={['first', 'second', 'third']} />
    </main >
  );
}
