import React from "react";
import {ReactComponent as TriangleRight} from "assets/triangleRight.svg";

const PlayButton = () => {
  return (
    <div className="playButton">
      PLAY! <TriangleRight className="playButton-button" />
    </div>
  )
}

export default PlayButton;