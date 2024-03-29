import { useGLTF } from "@react-three/drei";
import React from "react";
import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  const { scene } = useGLTF(skyScene);
  return <primitive object={scene} />;
};

export default Sky;
