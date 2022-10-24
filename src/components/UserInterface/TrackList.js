import React from "react";

const Track = ({track}) => {
  <div className={`trackList_track trackList_track${track} rounded-square`}></div>
}

const TrackList = () => {
  return (
    <div className="trackList"></div>
  )
}

export default TrackList;