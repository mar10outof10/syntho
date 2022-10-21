import React from "react";
import PlayButton from "./PlayButton";
import TempoDisplay from "./TempoDisplay";
import TrackList from "./TrackList";

import "./UserInterface.scss";

const UserInterface = () => {
  return (
    <div className="userInterface">
      <div className="userInterface__container">
        <PlayButton/>
        <TempoDisplay/>
        <TrackList/>
      </div>
    </div>
  )
}

export default UserInterface;