// two sizes, large for beats, small for 8th / 16th notes ets.

import React from "react";
import NoteSelect from "./NoteSelect/NoteSelect"
const LargeBeat = () => {
  return (
    <div className="synthBeat__large rounded-square"></div>
  )
}

const SmallBeat = () => {
  return (
    <div className="synthBeat__small rounded-square"></div>
  )
}

const SynthBeatOverlay = () => {
  const tempStyles = {
    'height': '100%',
    'width': '100%',
  }
  return (
    <div className='synthBeat__overlay'>
      <NoteSelect />
      <div className='synthBeat__overlay_options' style={tempStyles}>

      </div>
    </div>
  )
}

const SynthBeat = () => {
  return (
    <div className='synthBeat'>
      <SynthBeatOverlay />
      <div className='synthBeat__beats'>
        <LargeBeat beat={1} />
        <SmallBeat beat={2} />
        <SmallBeat beat={3} />
        <SmallBeat beat={4} />
      </div>
    </div>
  )
}

export default SynthBeat;