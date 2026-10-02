import { metadata } from "./layout";
import Navbar from "../components/Navbar";
import GradientWaves from "../components/GradientWaves";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <GradientWaves
          horizonColor="#A855F7"
          waveColor="#eb6ce7"
          crestColor="#e06ca5"
          speed={0.2}
          amplitude={2.7}
          waveScale={0.3}
          waveRatio={1.1}
          swell={40}
          turbulence={60}
          tilt={1.3}
          zoom={1}
          height={5.5}
          fogDepth={22}
          detail="medium"
          brightness={0.95}
          opacity={1}
          grain
          grainIntensity={0}
          mouseInteraction={false}
          parallaxStrength={0.5}
        />
        <div>
          <h1 className="">Hi! I'm Emily :)</h1>
        </div>
      </div>
      <Navbar title={metadata.title} />
      <main className="grid min-h-[80vh] grid-cols-2 items-center px-[10em]">
        <div className="w-10/12">
          <h1 className="font-heading text-ink drop-shadow-md text-6xl">
            Hi, I'm Emily :D Welcome to my portfolio!
          </h1>
          <p className="mt-4 text-2xl text-ink drop-shadow-md">
            I graduated fron Monash University in 2025 with a Bachelor of
            Computer Science, and am currently working as an Engineering
            Graduate at the Commonwealth Bank of Australia.
            <br />
            Come take a look at what I've been up to!
          </p>
        </div>
        <div className="w-10/12">
          <p className="mt-4 text-xl text-ink drop-shadow-md">placeholder</p>
        </div>
      </main>
    </>
  );
}
