import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/craft_speederC.glb");

const SpaceShip = () => {
  const { nodes, materials } = useGLTF("/models/craft_speederC.glb");
  materials.metalRed.color = new THREE.Color("red");
  materials.metalRed.metalness = 0.3;

  materials.metalDark.color = new THREE.Color("white");
  materials.metalDark.metalness = 0.5;

  return (
    <group dispose={null}>
      <group rotation-y={-Math.PI} scale={0.6}>
        <mesh
          geometry={nodes.Mesh_craft_speederC.geometry}
          material={materials.metalRed}
        />
        <mesh
          geometry={nodes.Mesh_craft_speederC_1.geometry}
          material={materials.metalDark}
        />
        <mesh
          geometry={nodes.Mesh_craft_speederC_2.geometry}
          material={materials.metal}
        />
        <mesh
          geometry={nodes.Mesh_craft_speederC_3.geometry}
          material={materials.dark}
        />
      </group>
    </group>
  );
};

export default SpaceShip;
