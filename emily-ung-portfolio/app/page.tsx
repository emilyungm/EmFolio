import { metadata } from "./layout";
import Navbar from "../components/Navbar";
import GradientWaves from "../components/GradientWaves";

export default function Home() {
  return (
    <>
      <Navbar title={metadata.title} />
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
      </div>
    </>
  );
}
