import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/aboutModel.glb");

export default function AboutModels(props) {
  const { nodes, materials } = useGLTF("/models/aboutModel.glb");

  nodes.github.material.color = new THREE.Color("white");
  nodes.github.material.metalness = 0;
  nodes.mail.material.metalness = 0;
  nodes.in.material.metalness = 0;
  return (
    <group
      {...props}
      dispose={null}
      scale={0.5}
      rotation-y={Math.PI * 0.5}
      position={[10.3, 0, 0]}
    >
      <Float
        floatingRange={[0.5, 0.5]}
        rotationIntensity={0.1}
        floatIntensity={0.1}
      >
        <mesh
          geometry={nodes["in"].geometry}
          material={materials["Material.001"]}
          position={[-5.606, 2.421, -19.595]}
          scale={0.946}
        />
      </Float>
      <Float
        floatingRange={[0.5, 0.5]}
        rotationIntensity={0.1}
        floatIntensity={0.1}
      >
        <mesh
          geometry={nodes.github.geometry}
          material={nodes.github.material}
          position={[-5.666, 2.595, -13.663]}
        />
      </Float>
      <Float
        floatingRange={[0.5, 0.5]}
        rotationIntensity={0.1}
        floatIntensity={0.1}
      >
        <mesh
          geometry={nodes.mail.geometry}
          material={materials.mail}
          position={[-5.765, 2.611, -26.4]}
          scale={[1.265, 1.265, 1.592]}
        />
      </Float>
      <mesh
        geometry={nodes.ibase.geometry}
        material={materials.base}
        position={[-5.529, 0, -20.069]}
        scale={[1.625, 0.317, 1.625]}
      />
      <mesh
        geometry={nodes.gbase.geometry}
        material={materials.base}
        position={[-5.529, 0, -13.959]}
        scale={[1.625, 0.317, 1.625]}
      />
      <mesh
        geometry={nodes.mbase.geometry}
        material={materials.base}
        position={[-5.529, 0, -26.318]}
        scale={[1.625, 0.317, 1.625]}
      />
      <mesh
        geometry={nodes.gbase001.geometry}
        material={materials.glow}
        position={[-5.529, 0, -13.959]}
        scale={[1.625, 0.317, 1.625]}
      />
      <mesh
        geometry={nodes.ibase001.geometry}
        material={materials.glow}
        position={[-5.529, 0, -20.069]}
        scale={[1.625, 0.317, 1.625]}
      />
      <mesh
        geometry={nodes.mbase001.geometry}
        material={materials.glow}
        position={[-5.529, 0, -26.318]}
        scale={[1.625, 0.317, 1.625]}
      />
    </group>
  );
}
