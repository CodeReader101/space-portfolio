import React from "react";
import { useRef } from "react";
import { LayerMaterial, Fresnel, Depth } from "lamina";
import { useFrame } from "@react-three/fiber";
import PlanetLayer from "./PlanetLayer";
import { extend } from "@react-three/fiber";

extend({ PlanetLayer });

const Planet = () => {
  const planet = useRef();

  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();

    planet.current.time = elapsedTime;
  });
  return (
    <>
      <mesh position={[-20, -1, -10]} scale={5}>
        <sphereGeometry args={[1, 20, 30]} />
        <LayerMaterial lighting="physical">
          <planetLayer ref={planet} time={0.0} />
          <Fresnel mode="add" color="blue" />
          <Depth mode="add" colorA="#8700ff" colorB="#ff0000" />
        </LayerMaterial>
      </mesh>
    </>
  );
};

export default Planet;
