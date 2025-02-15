import React from "react";

const SkillBox = ({ map, position }) => {
  return (
    <mesh position={position}>
      <boxGeometry />
      <meshBasicMaterial color={"white"} map={map} />
    </mesh>
  );
};

export default SkillBox;
