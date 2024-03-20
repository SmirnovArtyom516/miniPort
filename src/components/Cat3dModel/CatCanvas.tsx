import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import Cat from "./Cat";
import { OrbitControls } from "@react-three/drei";

const CatCanvas = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          camera={{ fov: 20, position: [40, 60, 80] }}
          style={{ width: "500px", height: "700px" }}
        >
          <Cat />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </>
  );
};

export default CatCanvas;
