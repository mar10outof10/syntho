import React from "react";

const Track = ({track}) => {
  return (
    <div className={`trackList__track trackList_track${track} rounded-square`}>{track}</div>
  )
}

const TrackList = () => {
  return (
    <div className="trackList">
      <Track track={1}/>
      <Track track={2}/>
      <Track track={3}/>
      <Track track={4}/>
      <Track track={5}/>
      <Track track={6}/>
    </div>
  )
}

export default TrackList;