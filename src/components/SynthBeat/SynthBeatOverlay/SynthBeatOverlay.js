import React, { useReducer } from "react";
import NoteSelect from './NoteSelect';

const ConfirmButton = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay__button confirmButton'>
      &#9989;
    </div>
  )
}

const CancelButton = ({beatState, beatDispatch}) => {
  return (
    <div className='synthBeatOverlay__button cancelButton'>
      &#10060;
    </div>
  )
}

const ClearButton = ({beatState, beatDispatch}) => {
  return (
    <div className='clearButton synthBeatOverlay__button'>
      <div className='clearButton__text'>
        CLEAR
      </div>
      <div className='clearButton__checkboxContainer'>
        <input type="checkbox" className='clearButton__checkbox'>
        </input>
      </div>
    </div>
  )
}

const SynthBeatOverlay = ({ beatState, beatDispatch }) => {
  return (
    <div className="synthBeatOverlay">
      <NoteSelect beatState={beatState} beatDispatch={beatDispatch} />
      <div className="synthBeatOverlay__options">
        <div className="synthBeatOverlay__buttonRow">
          <ConfirmButton />
          <CancelButton />
        </div>
        <div className="synthBeatOverlay__durationSelect"></div>
        <ClearButton />
      </div>
    </div>
  );
};

export default SynthBeatOverlay;