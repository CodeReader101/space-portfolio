import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

useTexture.preload(["./textures/stars/1.png", "./textures/stars/4.png"]);

const Background = () => {
  const starField = useRef();
  const colorstars = useRef();
  const squarestars = useRef();
  //animation
  useGSAP(() => {
    if (starField.current) {
      starField.current.traverse((child) => {
        if (child.isPoints) {
          child.material.transparent = true;
          gsap.fromTo(
            child.material,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 2,
              ease: "power1.inOut",
            }
          );
        }
      });
    }
  });

  useGSAP(() => {
    gsap.fromTo(
      colorstars.current.material,
      { opacity: 0.2 },
      { opacity: 1, yoyo: true, repeat: -1, duration: 2, ease: "none" }
    );
    gsap.fromTo(
      squarestars.current.material,
      { opacity: 0.3 },
      { opacity: 1, yoyo: true, repeat: -1, duration: 4, ease: "none" }
    );
  }, []);

  const [texture1, texture2] = useTexture([
    "./textures/stars/1.png",
    "./textures/stars/4.png",
  ]);

  // star function
  const createStarsGeometry = (count, isColored = false) => {
    const positions = new Float32Array(count * 3);
    const colors = isColored ? new Float32Array(count * 3) : null;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2;
      positions[i3 + 1] = Math.random() - 0.5;
      positions[i3 + 2] = 0;

      if (isColored) {
        colors[i3] = Math.random();
        colors[i3 + 1] = Math.random();
        colors[i3 + 2] = Math.random();
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    if (isColored) {
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    }

    return geometry;
  };

  //star material
  const createStarsMaterial = (size, texture, useVertexColors = false) => {
    return new THREE.PointsMaterial({
      size,
      map: texture,
      depthTest: true,
      vertexColors: useVertexColors,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
  };

  if (!texture1 || !texture2) {
    return null;
  }

  // stars1 (no colors)
  const starsGeometry1 = createStarsGeometry(800);
  const starsMaterial1 = createStarsMaterial(0.1, null, false);
  const stars1 = new THREE.Points(starsGeometry1, starsMaterial1);

  // stars2 (with colors)
  const starsGeometry2 = createStarsGeometry(100, true);
  const starsMaterial2 = createStarsMaterial(1.1, texture1, true);
  const stars2 = new THREE.Points(starsGeometry2, starsMaterial2);

  // stars3 (plus)
  const starsGeometry3 = createStarsGeometry(50, true);
  const starsMaterial3 = createStarsMaterial(3, texture2, true);
  const stars3 = new THREE.Points(starsGeometry3, starsMaterial3);

  return (
    <group
      ref={starField}
      rotation-x={-Math.PI * 0.25}
      rotation-y={Math.PI * 0.15}
      rotation-z={Math.PI * 0.15}
      position={[-5, -10, -5]}
    >
      <mesh scale={100} renderOrder={0} position={[0, 0, -20]}>
        <primitive object={stars1} />
        <primitive object={stars2} ref={colorstars} />
        <primitive object={stars3} ref={squarestars} />
      </mesh>
    </group>
  );
};

export default Background;
