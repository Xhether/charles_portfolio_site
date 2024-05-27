import Image from "next/image";
import Me from "/Users/charlesliggins/Developer/portfolio24/charles_portfolio_site/pictures/me.png";

export default function Home() {
  return (
    <main className="text-7xl font-bold font-family: -apple-system, BlinkMacSystemFont, sans-serif; flex min-h-screen flex-col items-center justify-between p-24">
      <img src="/Users/charlesliggins/Developer/portfolio24/charles_portfolio_site/pictures/me.png" alt="Me" />
      <p>
        Charles Liggins
      </p>
    </main >
  );
}
