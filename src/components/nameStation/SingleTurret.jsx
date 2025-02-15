import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

useGLTF.preload("/models/singleTurret.glb");

const SingleTurret = () => {
  const singleTurret = useGLTF("/models/singleTurret.glb");
  const animations = useAnimations(singleTurret.animations, singleTurret.scene);

  useEffect(() => {
    const animation = animations.actions.animateST;
    animation.play();
  }, []);
  return <primitive object={singleTurret.scene} />;
};

export default SingleTurret;
