import React, { useState, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import {
  RigidBody,
  CuboidCollider,
  CylinderCollider,
} from "@react-three/rapier";

import { useListStatus, useProjectLock } from "../../store";

import SpaceStationModel from "./SpaceStationModel";
import Screen from "./Screen";

useTexture.preload([
  "/textures/projects/open.jpg",
  "/textures/projects/panelOpen.jpg",
]);

const SpaceStation = () => {
  const screen = useRef();
  const landingPad = useRef();
  const floatingPanel = useRef();
  const { camera } = useThree();

  const { projectLock, setProjectLock } = useProjectLock();
  const { setListOn } = useListStatus();

  const [smoothCameraTarget] = useState(() => new THREE.Vector3());

  const [open, panelOpen] = useTexture([
    "/textures/projects/open.jpg",
    "/textures/projects/panelOpen.jpg",
  ]);

  const focusCamera = () => {
    setProjectLock(true);
    setListOn(true);

    const screenPosition = new THREE.Vector3();
    screen.current.getWorldPosition(screenPosition);

    const cameraOffset = new THREE.Vector3(6, 0, 0);
    const cameraTarget = screenPosition.clone();
    const cameraNewPosition = screenPosition.clone().add(cameraOffset);

    gsap.to(camera.position, {
      x: cameraNewPosition.x,
      y: cameraNewPosition.y,
      z: cameraNewPosition.z,
      duration: 2,
      ease: "power1.in",
      onUpdate: () => {
        camera.lookAt(screenPosition);
      },
      onComplete: () => {
        camera.lookAt(screenPosition);
      },
    });
  };

  const popupPanel = () => {
    if (projectLock) return;
    gsap.to(floatingPanel.current.position, {
      y: -1.8,
      duration: 0.5,
    });
    gsap.to(floatingPanel.current.material, {
      opacity: 0.7,
      duration: 0.5,
    });
  };

  const popdownPanel = () => {
    gsap.to(floatingPanel.current.position, { y: -2.2, duration: 0.5 });
    gsap.to(floatingPanel.current.material, {
      opacity: 0,
      duration: 0.5,
    });
  };

  return (
    <>
      <RigidBody
        position={[-10, 1.9, 5]}
        rotation-y={Math.PI * 0.5}
        type="fixed"
        colliders={false}
      >
        <group>
          <SpaceStationModel />
          <mesh ref={screen} position={[0, 0, 0.6]}>
            <boxGeometry args={[2.5, 4, 0.2]} />
            <meshStandardMaterial color="#0090ff" />
          </mesh>
          <Screen />
          <mesh
            ref={landingPad}
            onClick={focusCamera}
            onPointerOver={popupPanel}
            onPointerLeave={popdownPanel}
            rotation-x={-Math.PI * 0.5}
            position={[0, -2.1, 2]}
          >
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={open} />
          </mesh>
          <mesh
            ref={floatingPanel}
            rotation-x={-Math.PI * 0.5}
            position={[0, -2.1, 2]}
          >
            <planeGeometry args={[2.5, 2.5]} />
            <meshBasicMaterial map={panelOpen} transparent opacity={0} />
          </mesh>
        </group>
        <CylinderCollider args={[3, 0.5]} position={[0, 0, 0]} />
        <CuboidCollider args={[1.3, 0.1, 1.5]} position={[0, -2.1, 2]} />
        <CuboidCollider args={[1.3, 1.6, 0.1]} position={[0, -0.3, 0.6]} />
      </RigidBody>
    </>
  );
};

export default SpaceStation;

// const landingPadBox = useRef(new THREE.Box3());
// const helper = useRef();

// useEffect(() => {
//   if (landingPad.current) {
//     landingPadBox.current.setFromObject(landingPad.current);
//     helper.current = new THREE.Box3Helper(landingPadBox.current, "green");
//     landingPad.current.parent?.add(helper.current);
//   }
// }, []);
// position={[30, 2, 7]}
