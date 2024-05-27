import Image from "next/image";
import profilePic from './me.png'

export default function Home() {
  return (
    <main className="text-7xl font-bold font-family: -apple-system, BlinkMacSystemFont, sans-serif; flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={620}
        height={480}

      />
      <p>
        Charles Liggins
      </p>
    </main >
  );
}
