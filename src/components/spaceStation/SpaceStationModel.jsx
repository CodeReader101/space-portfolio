import React, { useRef } from "react";
import { useGLTF, Clone } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/models/spaceStationPanel.glb");
useGLTF.preload("/models/spaceStation.glb");

export default function SpaceStationModel(props) {
  const panel = useGLTF("/models/spaceStationPanel.glb");
  const { nodes, materials } = useGLTF("/models/spaceStation.glb");

  const diskL = useRef();
  const diskM = useRef();
  const diskS = useRef();

  //animate disk
  useFrame(({ clock }) => {
    let elapsedTime = clock.getElapsedTime();

    diskL.current.rotation.z = elapsedTime * 0.4;
    diskM.current.rotation.z = elapsedTime * 1.5;
    diskS.current.rotation.z = elapsedTime * 3;
  });

  return (
    <>
      <group
        position={[0, -1, 0]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        scale={0.5}
      >
        <group {...props} dispose={null}>
          <mesh
            geometry={nodes.Cylinder.geometry}
            material={materials.Material}
          />
          <mesh
            ref={diskM}
            geometry={nodes.Cylinder001.geometry}
            material={materials.Material}
          />
          <mesh
            ref={diskL}
            geometry={nodes.Cylinder002.geometry}
            material={materials.Material}
          />
          <mesh
            ref={diskS}
            geometry={nodes.Cylinder003.geometry}
            material={materials.Material}
          />
        </group>

        <Clone object={panel.scene} />
        <Clone object={panel.scene} position={[0, 0, 2.5]} />
        <Clone object={panel.scene} position={[0, -9.4, 0]} />
        <Clone object={panel.scene} position={[0, -9.4, 2.5]} />
      </group>
    </>
  );
}
