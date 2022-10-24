// two sizes, large for beats, small for 8th / 16th notes ets.

import React from "react";

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


const SynthBeat = () => {
  return (
    <div className='synthBeat'>
      <LargeBeat beat={1} />
      <SmallBeat beat={2} />
      <SmallBeat beat={3} />
      <SmallBeat beat={4} />
    </div>
  )
}

export default SynthBeat;