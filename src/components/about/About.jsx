import { useRef } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useTexture, Text } from "@react-three/drei";
import gsap from "gsap";

import AboutModels from "./AboutModels";

useTexture.preload([
  "/textures/about/email.jpg",
  "/textures/about/linkedin.jpg",
  "/textures/about/github.jpg",
  "/textures/about/open.jpg",
]);

const About = () => {
  const emailPanel = useRef();
  const linkedinPanel = useRef();
  const githubPanel = useRef();

  const [emailTexture, linkedinTexture, githubTexture, openTexture] =
    useTexture([
      "/textures/about/email.jpg",
      "/textures/about/linkedin.jpg",
      "/textures/about/github.jpg",
      "/textures/about/open.jpg",
    ]);

  const openEmail = () => {
    window.open("mailto:thisisshahbaj@gmail.com", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/shahbaj-sheikh/", "_blank");
  };

  const openGithub = () => {
    window.open("https://github.com/CodeReader101", "_blank");
  };

  const emailUp = () => {
    gsap.to(emailPanel.current.position, {
      y: 0.1,
      duration: 0.3,
    });
    gsap.to(emailPanel.current.material, {
      opacity: 0.5,
      duration: 0.3,
    });
  };

  const emailDown = () => {
    gsap.to(emailPanel.current.position, { y: -0.3, duration: 0.3 });
    gsap.to(emailPanel.current.material, {
      opacity: 0,
      duration: 0.3,
    });
  };

  const linkedinUp = () => {
    gsap.to(linkedinPanel.current.position, {
      y: 0.1,
      duration: 0.3,
    });
    gsap.to(linkedinPanel.current.material, {
      opacity: 0.5,
      duration: 0.3,
    });
  };

  const linkedinDown = () => {
    gsap.to(linkedinPanel.current.position, { y: -0.3, duration: 0.5 });
    gsap.to(linkedinPanel.current.material, {
      opacity: 0,
      duration: 0.5,
    });
  };

  const githubUp = () => {
    gsap.to(githubPanel.current.position, {
      y: 0.1,
      duration: 0.3,
    });
    gsap.to(githubPanel.current.material, {
      opacity: 0.5,
      duration: 0.3,
    });
  };

  const githubDown = () => {
    gsap.to(githubPanel.current.position, { y: -0.3, duration: 0.3 });
    gsap.to(githubPanel.current.material, {
      opacity: 0,
      duration: 0.3,
    });
  };

  return (
    <group position={[11, 0, 10]}>
      <RigidBody type="fixed" colliders={false}>
        <AboutModels />
        <CuboidCollider args={[4.3, 1, 0.6]} position={[0.15, 1, 2.8]} />
      </RigidBody>
      <mesh
        position={[-3, -0.2, 5]}
        rotation-x={-Math.PI * 0.5}
        onClick={openEmail}
        onPointerOver={emailUp}
        onPointerLeave={emailDown}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={emailTexture} />
      </mesh>
      <mesh
        style={{ pointer: "cursor" }}
        onClick={openLinkedin}
        onPointerOver={linkedinUp}
        onPointerLeave={linkedinDown}
        position={[0.2, -0.2, 5]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={linkedinTexture} />
      </mesh>
      <mesh
        position={[3.4, -0.2, 5]}
        rotation-x={-Math.PI * 0.5}
        onClick={openGithub}
        onPointerOver={githubUp}
        onPointerLeave={githubDown}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={githubTexture} />
      </mesh>
      {/* floatingpanel */}
      <mesh
        ref={emailPanel}
        position={[-3, -0.1, 5]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={openTexture} transparent opacity={0} />
      </mesh>
      <mesh
        ref={linkedinPanel}
        position={[0.2, 0.1, 5]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={openTexture} transparent opacity={0} />
      </mesh>
      <mesh
        ref={githubPanel}
        position={[3.4, -0.3, 5]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[2.3, 2]} />
        <meshBasicMaterial map={openTexture} transparent opacity={0} />
      </mesh>
    </group>
  );
};

export default About;
