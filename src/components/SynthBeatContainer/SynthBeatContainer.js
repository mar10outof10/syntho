import React from "react";
import SynthBeat from "components/SynthBeat/SynthBeat";

const SynthBeatContainer = () => {
  return (
    <div className="synthBeatContainer">
      <SynthBeat id={1} />
      <SynthBeat id={2} />
      <SynthBeat id={3} />
      <SynthBeat id={4} />
    </div>
  )
}

export default SynthBeatContainer;