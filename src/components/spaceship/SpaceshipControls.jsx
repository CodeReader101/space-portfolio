import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useKeyboardControls, useTexture, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils.js";
import gsap from "gsap";

import { useProjectLock, useListStatus, useTouchControls } from "../../store";

import SpaceShip from "./SpaceShip";

useTexture.preload("./textures/projects/backToShip.jpg");

const SpaceshipControls = () => {
  const spaceship = useRef();
  const texture = useTexture("./textures/projects/backToShip.jpg");
  const { camera } = useThree();

  const [subscribeKeys, getKeys] = useKeyboardControls();

  const cameraOffset = new THREE.Vector3(5, 5, 5);

  const [smoothCameraMotion] = useState(() => new THREE.Vector3(10, 10, 10));
  const [smoothCameraTarget] = useState(() => new THREE.Vector3());

  const { projectLock, setProjectLock } = useProjectLock();
  const { listOn, setListOn } = useListStatus();

  const { touchForward, touchBackward, touchRightward, touchLeftward } =
    useTouchControls();

  useFrame((state, delta) => {
    if (!spaceship.current) return;

    const { forward, backward, leftward, rightward } = getKeys();

    const rotation = spaceship.current.rotation();
    const quaternion = new THREE.Quaternion(
      rotation.x,
      rotation.y,
      rotation.z,
      rotation.w
    );

    if (projectLock) return;
    if (rightward || touchRightward) {
      const torqueStrength = 10 * delta;
      const torqueDirection = new THREE.Vector3(0, 1, 0);
      torqueDirection.applyQuaternion(quaternion);
      const torqueAmount = -torqueStrength;
      const torque = torqueDirection.multiplyScalar(torqueAmount);
      spaceship.current.applyTorqueImpulse(torque, true);
    }
    if (leftward || touchLeftward) {
      const torqueStrength = 10 * delta;
      const torqueDirection = new THREE.Vector3(0, 1, 0);
      torqueDirection.applyQuaternion(quaternion);
      const torqueAmount = torqueStrength;
      const torque = torqueDirection.multiplyScalar(torqueAmount);
      spaceship.current.applyTorqueImpulse(torque, true);
    }

    if (forward || touchForward) {
      const forceStrength = 30 * delta;
      const forceDirection = new THREE.Vector3(0, 0, 1);
      forceDirection.applyQuaternion(quaternion);
      const forceAmount = forceStrength;
      const force = forceDirection.multiplyScalar(forceAmount);
      spaceship.current.applyImpulse(force, true);
    }

    if (backward || touchBackward) {
      const forceStrength = 30 * delta;
      const forceDirection = new THREE.Vector3(0, 0, 1);
      forceDirection.applyQuaternion(quaternion);
      const forceAmount = -forceStrength;
      const force = forceDirection.multiplyScalar(forceAmount);
      spaceship.current.applyImpulse(force, true);
    }

    const shipLocation = spaceship.current.translation();
    const cameraLocation = new THREE.Vector3()
      .copy(shipLocation)
      .add(cameraOffset);

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(shipLocation);
    cameraTarget.y += 0.25;

    smoothCameraMotion.lerp(cameraLocation, 5 * delta);
    smoothCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothCameraMotion);
    state.camera.lookAt(smoothCameraTarget);
  });

  const returnCamera = () => {
    const shipPosition = spaceship.current.translation();
    gsap.to(camera.position, {
      x: shipPosition.x + 5,
      y: shipPosition.y + 5,
      z: shipPosition.z + 5,
      duration: 2,
      onStart: () => {
        setListOn(false);
      },
      onUpdate: () => {
        camera.lookAt(shipPosition.x, shipPosition.y, shipPosition.z);
      },
      onComplete: () => {
        camera.lookAt(shipPosition.x, shipPosition.y, shipPosition.z);
        setProjectLock(false);
      },
    });
  };

  return (
    <>
      {projectLock && listOn ? (
        <mesh
          onClick={returnCamera}
          position={[-9.27, 0.4, 5]}
          rotation-y={Math.PI * 0.5}
        >
          <planeGeometry args={[2, 0.5]} />
          <meshStandardMaterial map={texture} metalness={2.5} roughness={0.2} />
        </mesh>
      ) : null}
      <RigidBody
        ref={spaceship}
        colliders="cuboid"
        friction={0.5}
        restitution={0.2}
        // type="dynamic"
        position={[3.5, 0, -8]}
        linearDamping={2}
        angularDamping={5}
        enabledRotations={[false, true, false]}
      >
        <SpaceShip />
      </RigidBody>
    </>
  );
};

export default SpaceshipControls;
