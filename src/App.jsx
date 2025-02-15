import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { KeyboardControls } from "@react-three/drei";
import { Suspense } from "react";

import World from "./components/World";
import Overlay from "./components/Overlay";
import TouchControls from "./components/TouchControls";

const App = () => {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        ]}
      >
        <Canvas
          gl={{ outputEncoding: THREE.sRGBEncoding }}
          camera={{ position: [5, 5, 5], fov: 50 }}
          shadows
        >
          <directionalLight position={[5, 2, 3]} intensity={1.5} />
          <Suspense fallback={null}>
            <World />
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <TouchControls />
      <Overlay />
    </>
  );
};

export default App;
