import { Html, Progress, useProgress } from "@react-three/drei";
import React from "react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import arrowUp from "/textures/svg/arrowUp.svg";
import arrowDown from "/textures/svg/arrowDown.svg";
import arrowRight from "/textures/svg/arrowRight.svg";
import arrowLeft from "/textures/svg/arrowLeft.svg";

const Overlay = () => {
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  const overlay = useRef();
  const message = useRef();

  const { progress, item, loaded, total, active } = useProgress();
  console.log({ progress, item, loaded, total });

  const handleStartClick = () => {
    gsap.to(overlay.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        overlay.current.style.display = "none";
      },
    });
  };

  useEffect(() => {
    const handleKey = () => {
      gsap.to(message.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          message.current.style.display = "none";
        },
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // useEffect(() => {
  //   if (active) {
  //     const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
  //     tl.to([dot1.current, dot2.current, dot3.current], {
  //       opacity: 0,
  //       duration: 0.3,
  //       stagger: 0.3,
  //     }).to([dot1.current, dot2.current, dot3.current], {
  //       opacity: 1,
  //       duration: 0.3,
  //       stagger: 0.3,
  //     });
  //   }
  // }, [active]);

  return (
    <>
      <div ref={overlay} className="overlay">
        {active ? (
          <div className="overlay-box">
            <h1>
              LOADING
              <span className="dot1">.</span>
              <span className="dot2">.</span>
              <span className="dot3">.</span>
            </h1>
          </div>
        ) : (
          <button
            className="start"
            onClick={handleStartClick}
            onKeyDown={(e) => e.key === "Enter" && handleStartClick()}
          >
            START
          </button>
        )}
      </div>

      {/* message */}
      <div ref={message} className="navBox">
        <div className="navLine">
          <div className="wordLine">Use</div>
          <div className="navigation">
            <div className="displayButton buttonUp">
              <img src={arrowUp} alt="up" />
            </div>
            <div className="displayButton buttonLeft">
              <img src={arrowLeft} alt="left" />
            </div>
            <div className="displayButton buttonDown">
              <img src={arrowDown} alt="down" />
            </div>

            <div className="displayButton buttonRight">
              <img src={arrowRight} alt="right" />
            </div>
          </div>
          <div className="wordLine">Keys To Navigate</div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
