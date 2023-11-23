import React from "react";
import {ReactComponent as TriangleRight} from "assets/triangleRight.svg";
import {ReactComponent as TriangleLeft} from "assets/triangleLeft.svg";

const TempoDisplay = () => {
  return (
    <div className="tempoDisplay">
      <div className="tempoDisplay__arrowContainer">
        <TriangleLeft />
      </div>
      <div className="tempoDisplay__tempoContainer">
        
      </div>
      <div className="tempoDisplay__arrowContainer">
        <TriangleRight />
      </div>
    </div>
  )
}

export default TempoDisplay;