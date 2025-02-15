// import { useGLTF, useTexture } from "@react-three/drei";

// const preloadAllAssets = () => {
//   useGLTF.preload([
//     "/models/aboutModel.glb",
//     "/models/craft_speederC.glb",
//     "/models/dish.glb",
//     "/models/doubleTurret.glb",
//     "/models/name.glb",
//     "/models/signboard.glb",
//     "/models/singleTurret.glb",
//     "/models/spaceStation.glb",
//     "/models/spaceStationPanel.glb",
//   ]);

//   useTexture.preload([
//     "/textures/about/email.jpg",
//     "/textures/about/github.jpg",
//     "/textures/about/linkedin.jpg",
//     "/textures/about/open.jpg",
//     "/textures/projects/backToShip.jpg",
//     "/textures/projects/list.jpg",
//     "/textures/projects/open.jpg",
//     "/textures/projects/panelOpen.jpg",
//     "/textures/projects/portfolio.jpg",
//     "/textures/projects/runner.jpg",
//     "/textures/projects/wallpaper.jpg",
//     "/textures/projects/wetube.jpg",
//     "/textures/projects/yoom.jpg",
//     "/textures/stars/1.png",
//     "/textures/stars/4.png",
//     "/textures/svg/html.svg",
//     "/textures/svg/css.svg",
//     "/textures/svg/javascript.svg",
//     "/textures/svg/typescript.svg",
//     "/textures/svg/python.svg",
//     "/textures/svg/reactjs.svg",
//     "/textures/svg/nextjs.svg",
//     "/textures/svg/threejs.svg",
//     "/textures/svg/bootstrap.svg",
//     "/textures/svg/tailwind.svg",
//     "/textures/svg/git.svg",
//     "/textures/svg/github.svg",
//     "/textures/svg/vite.svg",
//   ]);
// };

// export default preloadAllAssets;

import { useGLTF, useTexture } from "@react-three/drei";

const preloadAllAssets = async () => {
  await Promise.all([
    useGLTF.preload("/models/aboutModel.glb"),
    useGLTF.preload("/models/craft_speederC.glb"),
    useGLTF.preload("/models/dish.glb"),
    useGLTF.preload("/models/doubleTurret.glb"),
    useGLTF.preload("/models/name.glb"),
    useGLTF.preload("/models/signboard.glb"),
    useGLTF.preload("/models/singleTurret.glb"),
    useGLTF.preload("/models/spaceStation.glb"),
    useGLTF.preload("/models/spaceStationPanel.glb"),

    useTexture.preload("/textures/about/email.jpg"),
    useTexture.preload("/textures/about/github.jpg"),
    useTexture.preload("/textures/about/linkedin.jpg"),
    useTexture.preload("/textures/about/open.jpg"),
    useTexture.preload("/textures/projects/backToShip.jpg"),
    useTexture.preload("/textures/projects/list.jpg"),
    useTexture.preload("/textures/projects/open.jpg"),
    useTexture.preload("/textures/projects/panelOpen.jpg"),
    useTexture.preload("/textures/projects/portfolio.jpg"),
    useTexture.preload("/textures/projects/runner.jpg"),
    useTexture.preload("/textures/projects/wallpaper.jpg"),
    useTexture.preload("/textures/projects/wetube.jpg"),
    useTexture.preload("/textures/projects/yoom.jpg"),
    useTexture.preload("/textures/stars/1.png"),
    useTexture.preload("/textures/stars/4.png"),
    useTexture.preload("/textures/svg/html.svg"),
    useTexture.preload("/textures/svg/css.svg"),
    useTexture.preload("/textures/svg/javascript.svg"),
    useTexture.preload("/textures/svg/typescript.svg"),
    useTexture.preload("/textures/svg/python.svg"),
    useTexture.preload("/textures/svg/reactjs.svg"),
    useTexture.preload("/textures/svg/nextjs.svg"),
    useTexture.preload("/textures/svg/threejs.svg"),
    useTexture.preload("/textures/svg/bootstrap.svg"),
    useTexture.preload("/textures/svg/tailwind.svg"),
    useTexture.preload("/textures/svg/git.svg"),
    useTexture.preload("/textures/svg/github.svg"),
    useTexture.preload("/textures/svg/vite.svg"),
  ]);
};

export default preloadAllAssets;
