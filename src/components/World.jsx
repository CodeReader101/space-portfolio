import { Physics } from "@react-three/rapier";

import Background from "./Background";
import Galaxy from "./Galaxy";
import SpaceshipControls from "./spaceship/SpaceshipControls";
import NameShip from "./nameStation/NameShip";
import Planet from "./planet/Planet";
import SkillWall from "./skills/SkillWall";
import SpaceStation from "./spaceStation/SpaceStation";
import About from "./about/About";
import Sign from "./sign/Sign";
import Boundary from "./Boundary";

const World = () => {
  return (
    <>
      <Background />
      <Galaxy />
      <Planet />
      <Physics gravity={[0, -1, 0]}>
        <Boundary />
        <SpaceshipControls />
        <NameShip />
        <SpaceStation />
        <SkillWall />
        <About />
        <Sign />
      </Physics>
    </>
  );
};

export default World;
