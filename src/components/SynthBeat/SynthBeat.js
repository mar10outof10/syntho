// two sizes, large for beats, small for 8th / 16th notes ets.

import React, { useReducer } from "react";
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

const SynthBeatOverlay = ({beatState, beatDispatch}) => {
  const tempStyles = {
    'height': '100%',
    'width': '100%',
  }
  return (
    <div className='synthBeat__overlay'>
      <NoteSelect beatState={beatState} beatDispatch={beatDispatch} />
      <div className='synthBeat__overlay_options' style={tempStyles}>

      </div>
    </div>
  )
}

const SynthBeat = () => {
  const beatReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "OPEN_OVERLAY":
        return state;
      case "CLOSE_OVERLAY":
        return state;
      case "SET_CURRENT_NOTE":
        return state;
      case "SET_SELECTED_NOTE":
        return {...state, selectedNote: action.payload.note};
      case "SET_CURRENT_OCTAVE":
        return state;
      case "SET_SELECTED_OCTAVE":
        return {...state, selectedOctave: action.payload.octave};
      default:
        return state;
    }
  }
  const [beatState, beatDispatch] = useReducer(beatReducer, {
    "overlayOpen": false,
    // "selectedNote": currentNote,
    // "selectedOctave": currentOctave,
    // "selectedDuration": currentDuration,
    "selectedNote": 'A',
    "selectedOctave": '3',
    "selectedDuration": '8n',
  })
  return (
    <div className='synthBeat'>
      <SynthBeatOverlay beatState={beatState} beatDispatch={beatDispatch} />
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