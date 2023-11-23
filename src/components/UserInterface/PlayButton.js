import React from "react";
import {ReactComponent as TriangleRight} from "assets/triangleRight.svg";

const PlayButton = () => {
  return (
    <div className="playButton">
      <div className="playButton-text">
        PLAY!
      </div>
      <div className="playButton-button">
        <TriangleRight />
      </div>
    </div>
  )
}

export default PlayButton;