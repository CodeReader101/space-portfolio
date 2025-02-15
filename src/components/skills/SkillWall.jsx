import React from "react";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import SkillBox from "./SkillBox";

useTexture.preload([
  "/textures/svg/html.svg",
  "/textures/svg/css.svg",
  "/textures/svg/javascript.svg",
  "/textures/svg/typescript.svg",
  "/textures/svg/python.svg",
  "/textures/svg/reactjs.svg",
  "/textures/svg/nextjs.svg",
  "/textures/svg/threejs.svg",
  "/textures/svg/bootstrap.svg",
  "/textures/svg/tailwind.svg",
  "/textures/svg/git.svg",
  "/textures/svg/github.svg",
  "/textures/svg/vite.svg",
]);

const SkillWall = () => {
  const [
    html,
    css,
    javascript,
    typescript,
    python,
    react,
    nextjs,
    threejs,
    bootstrap,
    tailwind,
    git,
    github,
    vite,
  ] = useTexture([
    "/textures/svg/html.svg",
    "/textures/svg/css.svg",
    "/textures/svg/javascript.svg",
    "/textures/svg/typescript.svg",
    "/textures/svg/python.svg",
    "/textures/svg/reactjs.svg",
    "/textures/svg/nextjs.svg",
    "/textures/svg/threejs.svg",
    "/textures/svg/bootstrap.svg",
    "/textures/svg/tailwind.svg",
    "/textures/svg/git.svg",
    "/textures/svg/github.svg",
    "/textures/svg/vite.svg",
  ]);

  const boxes = [
    { map: html, position: [0, 0, 0] },
    { map: css, position: [0, 0, 1] },
    { map: javascript, position: [0, 0, 2] },
    { map: typescript, position: [0, 0, 3] },
    { map: python, position: [0, 0, 4] },
    { map: react, position: [0, 1, 0] },
    { map: nextjs, position: [0, 1, 1] },
    { map: threejs, position: [0, 1, 2] },
    { map: bootstrap, position: [0, 1, 3] },
    { map: tailwind, position: [0, 1, 4] },
    { map: git, position: [0, 2, 1] },
    { map: github, position: [0, 2, 2] },
    { map: vite, position: [0, 2, 3] },
  ];

  return (
    <>
      <group position={[-9.5, 0.5, 12]}>
        {boxes.map((box, index) => (
          <RigidBody key={index} mass={100}>
            <SkillBox map={box.map} position={box.position} />
          </RigidBody>
        ))}
        <RigidBody></RigidBody>
      </group>
    </>
  );
};

export default SkillWall;
