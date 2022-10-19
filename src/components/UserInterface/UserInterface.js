import React from "react";
import PlayButton from "./PlayButton/PlayButton";
import TempoDisplay from "./TempoDisplay/TempoDisplay";
import TrackList from "./TrackList/TrackList";

import "./UserInterface.scss";

const UserInterface = () => {
  return (
    <div className="userInterface">
      <div className="userInterface__Container">
        <PlayButton/>
        <TempoDisplay/>
        <TrackList/>
      </div>
    </div>
  )
}

export default UserInterface;