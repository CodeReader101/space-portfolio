import React, { useEffect, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useListStatus, useProjectLock } from "../../store";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

useTexture.preload([
  "./textures/projects/wallpaper.jpg",
  "./textures/projects/list.jpg",
  "./textures/projects/yoom.jpg",
  "./textures/projects/wetube.jpg",
  "./textures/projects/runner.jpg",
  "./textures/projects/portfolio.jpg",
]);

const Screen = () => {
  const mesh = useRef();
  const hitBox = useRef([
    new THREE.Box3(),
    new THREE.Box3(),
    new THREE.Box3(),
    new THREE.Box3(),
  ]);
  const backHitbox = useRef(new THREE.Box3());
  const openHitbox = useRef(new THREE.Box3());
  const helperOne = useRef();
  const helperTwo = useRef();
  const helperThree = useRef();
  const helperFour = useRef();
  const helperBack = useRef();
  const helperOpen = useRef();
  const { camera, scene } = useThree();
  const [
    wallpaperTexture,
    listTexture,
    yoomTexture,
    wetubeTexture,
    runnerTexture,
    portfolioTexture,
  ] = useTexture(
    [
      "./textures/projects/wallpaper.jpg",
      "./textures/projects/list.jpg",
      "./textures/projects/yoom.jpg",
      "./textures/projects/wetube.jpg",
      "./textures/projects/runner.jpg",
      "./textures/projects/portfolio.jpg",
    ],
    (textures) => {
      textures.forEach((texture) => {
        texture.encoding = THREE.sRGBEncoding;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
      });
    }
  );

  const { projectLock } = useProjectLock();
  const { listOn, setListOn } = useListStatus();

  const [currentTexture, setCurrentTexture] = useState(wallpaperTexture);
  useEffect(() => {
    setCurrentTexture(projectLock ? listTexture : wallpaperTexture);
  }, [projectLock]);

  useEffect(() => {
    if (mesh.current) {
      const meshPosition = new THREE.Vector3();
      mesh.current.getWorldPosition(meshPosition);

      openHitbox.current.set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 1.7,
          meshPosition.z + 0.1
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 1.3,
          meshPosition.z + 0.9
        )
      );

      backHitbox.current.set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 1.7,
          meshPosition.z - 0.9
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 1.3,
          meshPosition.z - 0.1
        )
      );

      hitBox.current[0].set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y + 0.78,
          meshPosition.z - 0.8
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y + 1.2,
          meshPosition.z + 0.85
        )
      );

      hitBox.current[1].set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y + 0.25,
          meshPosition.z - 0.8
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y + 0.65,
          meshPosition.z + 0.85
        )
      );

      hitBox.current[2].set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 0.27,
          meshPosition.z - 0.8
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y + 0.13,
          meshPosition.z + 0.85
        )
      );

      hitBox.current[3].set(
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 0.8,
          meshPosition.z - 0.8
        ),
        new THREE.Vector3(
          meshPosition.x,
          meshPosition.y - 0.4,
          meshPosition.z + 0.85
        )
      );
    }

    // helperOne.current = new THREE.Box3Helper(hitBox.current[0], "green");
    // scene.add(helperOne.current);

    // helperTwo.current = new THREE.Box3Helper(hitBox.current[1], "red");
    // scene.add(helperTwo.current);

    // helperThree.current = new THREE.Box3Helper(hitBox.current[2], "blue");
    // scene.add(helperThree.current);

    // helperFour.current = new THREE.Box3Helper(hitBox.current[3], "red");
    // scene.add(helperFour.current);

    // helperBack.current = new THREE.Box3Helper(backHitbox.current, "red");
    // scene.add(helperBack.current);

    // helperOpen.current = new THREE.Box3Helper(openHitbox.current, "yellow");
    // scene.add(helperOpen.current);
  }, []);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector3();

  const handleTexture = (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectsBox(hitBox.current[0])) {
      if (projectLock && listOn) {
        setCurrentTexture(portfolioTexture);
        setListOn(false);
      }
    }
    if (raycaster.ray.intersectsBox(hitBox.current[1])) {
      if (projectLock && listOn) {
        setCurrentTexture(yoomTexture);
        setListOn(false);
      }
    }
    if (raycaster.ray.intersectsBox(hitBox.current[2])) {
      if (projectLock && listOn) {
        setCurrentTexture(wetubeTexture);
        setListOn(false);
      }
    }
    if (raycaster.ray.intersectsBox(hitBox.current[3])) {
      if (projectLock && listOn) {
        setCurrentTexture(runnerTexture);
        setListOn(false);
      }
    }
    if (raycaster.ray.intersectsBox(backHitbox.current)) {
      if (projectLock) {
        setCurrentTexture(listTexture);
        setListOn(true);
      }
    }
    if (raycaster.ray.intersectsBox(openHitbox.current)) {
      if (projectLock) {
        switch (currentTexture) {
          case yoomTexture:
            window.open("https://yoom-zooms-clone.vercel.app/", "_blank");
            break;
          case wetubeTexture:
            window.open("https://wetubes.netlify.app/", "_blank");
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <group onClick={handleTexture}>
      <mesh position={[0, 0, 0.71]}>
        <planeGeometry args={[2.2, 3.7]} />
        <meshBasicMaterial color={"black"} />
      </mesh>
      <mesh ref={mesh} position={[0, 0, 0.72]}>
        <planeGeometry args={[2, 3.5]} />
        <meshStandardMaterial
          metalness={2.4}
          roughness={0.2}
          map={currentTexture}
        />
      </mesh>
    </group>
  );
};

export default Screen;
