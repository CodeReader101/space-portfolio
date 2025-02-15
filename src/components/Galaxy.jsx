import React from "react";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

const Galaxy = () => {
  const galaxy = useRef();

  //GalaxyProps
  const galaxyProps = {};
  galaxyProps.count = 200000;
  galaxyProps.size = 0.01;
  galaxyProps.radius = 5;
  galaxyProps.branches = 15;
  galaxyProps.spin = 0.5;
  galaxyProps.randomness = 0.1;
  galaxyProps.randomnessPower = 3;
  galaxyProps.insideColor = "#00c6ff";
  galaxyProps.outsideColor = "#3c00ff";

  const geometry = new THREE.BufferGeometry();

  const positions = new Float32Array(galaxyProps.count * 3);
  const colors = new Float32Array(galaxyProps.count * 3);

  const colorInside = new THREE.Color(galaxyProps.insideColor);
  const colorOutside = new THREE.Color(galaxyProps.outsideColor);

  for (let i = 0; i < galaxyProps.count; i++) {
    // Position
    const i3 = i * 3;

    const radius = Math.random() * galaxyProps.radius;

    const spinAngle = radius * galaxyProps.spin;
    const branchAngle =
      ((i % galaxyProps.branches) / galaxyProps.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), galaxyProps.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      galaxyProps.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), galaxyProps.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      galaxyProps.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), galaxyProps.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      galaxyProps.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    // Color
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / galaxyProps.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: galaxyProps.size,
    sizeAttenuation: true,
    depthWrite: true,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  const points = new THREE.Points(geometry, material);

  useFrame((state, delta) => {
    const axis = new THREE.Vector3(0, 1, 0).normalize();
    galaxy.current.rotateOnAxis(axis, delta * 0.01);
  });

  return (
    <>
      <primitive
        scale={5}
        position={[-5, -8, 0]}
        rotation={[0, 0, Math.PI * 0.25]}
        object={points}
        ref={galaxy}
      />
    </>
  );
};

export default Galaxy;
