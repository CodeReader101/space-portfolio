import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

import Name from "./Name";
import Dish from "./Dish";
import DoubleTurret from "./DoubleTurret";
import SingleTurret from "./SingleTurret";
// import Satellite from "./Satellite";

const NameShip = () => {
  // const satellite = useRef();
  const shipLight1 = useRef();
  const shipLight2 = useRef();
  const shipLight3 = useRef();

  // useFrame(({ clock }) => {
  //   let elapsedTime = clock.getElapsedTime();

  //   satellite.current.position.y = Math.sin(elapsedTime);
  //   satellite.current.position.z = Math.cos(elapsedTime);
  //   satellite.current.position.x = 2 + Math.sin(elapsedTime);
  //   satellite.current.rotation.x = -Math.PI * 0.3 * elapsedTime;
  // });

  //shipLight animation
  useGSAP(() => {
    gsap.fromTo(
      shipLight1.current,
      { intensity: 0.5 },
      {
        intensity: 10,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      shipLight2.current,
      { intensity: 0.5 },
      {
        intensity: 10,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      shipLight3.current,
      { intensity: 0.5 },
      {
        intensity: 10,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <RigidBody type="fixed" colliders={false} position={[4, 0, -10]}>
      <group scale={1}>
        <group>
          <Name />

          <pointLight
            ref={shipLight1}
            distance={0.5}
            decay={0.8}
            intensity={50}
            position={[-9, 1.2, 0.7]}
            color="red"
          />

          <pointLight
            ref={shipLight2}
            distance={0.5}
            decay={0.7}
            intensity={100}
            position={[-3, 1.1, 0.7]}
            color="purple"
          />

          <pointLight
            ref={shipLight3}
            distance={0.5}
            decay={0.8}
            intensity={50}
            position={[5.9, 0.09, 0.7]}
            color="green"
          />

          <Dish />
          <DoubleTurret />
          <SingleTurret />
        </group>
        {/* <Satellite ref={satellite} /> */}
      </group>
      <CuboidCollider args={[10.5, 0.5, 1]} />
    </RigidBody>
  );
};

export default NameShip;
