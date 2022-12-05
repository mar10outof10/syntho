import React, { useReducer } from "react";
import NoteSelect from './NoteSelect';

const ConfirmButton = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay__button confirmButton'>

    </div>
  )
}

const CancelButton = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay__button cancelButton'>

    </div>
  )
}

const ClearButton = ({beatState, beatDispatch}) => {
  return (
    <div className='clearButton__container'>
      <div className='clearButton__text'>
        
      </div>
      <div className='clearButton__checkBox'>

      </div>
    </div>
  )
}

const SynthBeatOverlay = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay'>
      <NoteSelect beatState={beatState} beatDispatch={beatDispatch} />
      <div className='synthBeatOverlay__options'>
        <div classname='synthBeatOverlay__buttonRow'>
          
        </div>
        <div classname='synthBeatOverlay__durationSelect'>

        </div>

      </div>
    </div>
  )
}

export default SynthBeatOverlay;