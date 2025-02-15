import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

useGLTF.preload("/models/dish.glb");

const Dish = () => {
  const dish = useGLTF("/models/dish.glb");
  const animations = useAnimations(dish.animations, dish.scene);

  useEffect(() => {
    const animation = animations.actions.animateDish;
    animation.play();
  }, []);
  return <primitive object={dish.scene} />;
};

export default Dish;
