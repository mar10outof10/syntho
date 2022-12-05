import React, { useReducer } from "react";
import NoteSelect from './NoteSelect';

const SynthBeatOverlay = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay'>
      <NoteSelect beatState={beatState} beatDispatch={beatDispatch} />
      <div className='synthBeatOverlay__options'>

      </div>
    </div>
  )
}

export default SynthBeatOverlay;