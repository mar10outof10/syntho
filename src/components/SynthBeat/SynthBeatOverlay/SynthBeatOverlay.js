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

const DurationSelect = ({beatState, beatDispatch}) => {
  return (
    <div className='durationSelect'>
      <div className='durationSelect__button durationSelect__eigthNote synthBeatOverlay__button'>
        8
      </div>
      <div className='durationSelect__button durationSelect__button__active durationSelect__quarterNote synthBeatOverlay__button'>
        4
      </div>
      <div className='durationSelect__button durationSelect__halfNote synthBeatOverlay__button'>
        2
      </div>
      <div className='durationSelect__button durationSelect__wholeNote synthBeatOverlay__button'>
        1
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
        <DurationSelect />
        <ClearButton />
      </div>
    </div>
  );
};

export default SynthBeatOverlay;