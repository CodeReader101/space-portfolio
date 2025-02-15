import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/name.glb");

export default function Name(props) {
  const { nodes, materials } = useGLTF("/models/name.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={materials.base}
        material-metalness={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_2.geometry}
        material={materials["Material.002"]}
        material-metalness={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_3.geometry}
        material={materials["Material.005"]}
        material-metalness={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_4.geometry}
        material={materials.text}
        material-metalness={0}
      />
    </group>
  );
}
