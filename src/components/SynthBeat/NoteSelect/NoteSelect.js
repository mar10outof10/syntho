import React from "react";
import classNames from "classnames";

const notes = ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"];
const octaves = ["1", "2", "3", "4", "5", "6"];

const currNote = notes[0];
const currOctave = octaves[0];

const selectedNote = notes[1];
const selectedOctave = octaves[1];

const NoteColumn = ({beatDispatch}) => {
  return (
    <div className="noteSelect__noteColumn">
      {notes.map((note, index) => (
        <div onClick={() => beatDispatch({type: "SET_SELECTED_NOTE", payload:{'note': note}})}>
          {note}
        </div>
      ))}
    </div>
  );
};

const OctaveColumn = ({beatState, beatDispatch}) => {
  return (
    <div className="noteSelect__octaveColumn">
      {octaves.map((octave, index) => {
        
        const octaveItemClass = [
          'noteSelect__octaveColumnItem',
          {noteSelect__octaveColumnItem__current: octave === currOctave},
          {noteSelect__octaveColumnItem__selected: octave === beatState.selectedOctave}
        ];

        return (
          <div className={classNames(octaveItemClass)} onClick={() => beatDispatch({type: "SET_SELECTED_OCTAVE", payload:{'octave': octave}})}>
            {octave}
          </div>
        )
      })}
    </div>
  );
};

const NoteSelect = ({beatState, beatDispatch}) => {
  return (
    <div className='noteSelect'>
      <NoteColumn beatDispatch={beatDispatch} />
      <OctaveColumn beatState={beatState} beatDispatch={beatDispatch} />
    </div>
  )
}

export default NoteSelect;