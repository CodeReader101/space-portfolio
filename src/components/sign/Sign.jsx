import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody, CylinderCollider } from "@react-three/rapier";

useGLTF.preload("/models/signboard.glb");

const Sign = () => {
  const model = useGLTF("/models/signboard.glb");

  return (
    <>
      <RigidBody type="fixed" colliders={false} position={[5, 1.2, 4]}>
        <primitive
          scale={0.2}
          rotation-y={Math.PI * 0.5}
          object={model.scene}
          position={[0, -1.2, 2.5]}
        />
        <CylinderCollider args={[1, 0.7]} />
      </RigidBody>
    </>
  );
};

export default Sign;
