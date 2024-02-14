import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
          popup
        </div> */
}

const Home = () => {
  const adjustIslandForSceneSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForSceneSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      ></Canvas>
      <Suspense fallback={<Loader />}>
        {/* <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight instensity={0.5} />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        /> */}

        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
        />
      </Suspense>
    </section>
  );
};

export default Home;
