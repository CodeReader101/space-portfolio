import React from "react";
import { RigidBody } from "@react-three/rapier";

const Boundary = () => {
  const thickness = 0.2;
  const height = 5;
  const size = 38;
  // position={[0, 0, 8.5]}>
  return (
    <>
      <RigidBody position={[4, 0, 3]}>
        <mesh rotation-x={-Math.PI * 0.5}>
          <planeGeometry args={[40, 40]} />
          <meshBasicMaterial transparent={true} opacity={0} />
        </mesh>
      </RigidBody>
      <group position={[4,0,3]}>
        
        {[
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ].map(([x, z], i) => (
          <RigidBody key={i} type="fixed">
            <mesh
              position={[
                x * (size / 2 + thickness / 2),
                height / 2,
                z * (size / 2 + thickness / 2),
              ]}
              rotation={[0, i % 2 === 0 ? 0 : Math.PI / 2, 0]}
            >
              <boxGeometry args={[size + thickness * 2, height, thickness]} />
              <meshStandardMaterial transparent opacity={0} />
            </mesh>
          </RigidBody>
        ))}
      </group>
    </>
  );
};

export default Boundary;
