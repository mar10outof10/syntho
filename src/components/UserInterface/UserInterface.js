import React from "react";
import PlayButton from "./PlayButton";
import TempoDisplay from "./TempoDisplay";
import TrackList from "./TrackList";

const UserInterface = () => {
  return (
    <div className="userInterface">
      <div className="userInterface__container">
        <div className="userInterface__playContainer">
          <PlayButton/>
        </div>
        <div className="userInterface__tempoContainer">
          <TempoDisplay/>
        </div>
        <div className="userInterface__trackContainer">
          <TrackList/>
        </div>
      </div>
    </div>
  )
}

export default UserInterface;