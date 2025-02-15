import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

useGLTF.preload("/models/doubleTurret.glb");

const DoubleTurret = () => {
  const doubleTurret = useGLTF("/models/doubleTurret.glb");
  const animations = useAnimations(doubleTurret.animations, doubleTurret.scene);

  useEffect(() => {
    const animation = animations.actions.animateDT;
    animation.play();
  }, []);
  return <primitive object={doubleTurret.scene} />;
};

export default DoubleTurret;
