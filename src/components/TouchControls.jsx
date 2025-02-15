import React from "react";
import { Html } from "@react-three/drei";

import { useTouchControls, useProjectLock } from "../store";

const TouchControls = () => {
  const {
    setTouchForward,
    setTouchBackward,
    setTouchRightward,
    setTouchLeftward,
  } = useTouchControls();

  const { projectLock } = useProjectLock();

  return (
    <>
      {!projectLock ? (
        <div className="controls-container">
          {/* <div className="movement-controls"> */}
          <div className="column">
            <button
              className="control-btn forward"
              onPointerDown={() => {
                setTouchForward(true);
              }}
              onPointerUp={() => {
                setTouchForward(false);
              }}
              onPointerLeave={() => {
                setTouchForward(false);
              }}
            >
              <img src="/textures/svg/arrowUp.svg" alt="arrowUp" />
            </button>
            <button
              className="control-btn backward"
              onPointerDown={() => {
                setTouchBackward(true);
              }}
              onPointerUp={() => {
                setTouchBackward(false);
              }}
              onPointerLeave={() => {
                setTouchBackward(false);
              }}
            >
              <img src="/textures/svg/arrowDown.svg" alt="arrowDown" />
            </button>
          </div>
          <div className="row">
            <button
              className="control-btn left"
              onPointerDown={() => {
                setTouchLeftward(true);
              }}
              onPointerUp={() => {
                setTouchLeftward(false);
              }}
              onPointerLeave={() => {
                setTouchLeftward(false);
              }}
            >
              <img src="/textures/svg/arrowLeft.svg" alt="arrowLeft" />
            </button>
            <button
              className="control-btn right"
              onPointerDown={() => {
                setTouchRightward(true);
              }}
              onPointerUp={() => {
                setTouchRightward(false);
              }}
              onPointerLeave={() => {
                setTouchRightward(false);
              }}
            >
              <img src="/textures/svg/arrowRight.svg" alt="arrowRight" />
            </button>
          </div>
          {/* </div> */}
        </div>
      ) : null}
    </>
  );
};

export default TouchControls;
