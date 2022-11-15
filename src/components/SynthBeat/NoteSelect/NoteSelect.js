import React from "react";
import classNames from "classnames";

const notes = ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"];
const octaves = ["1", "2", "3", "4", "5", "6"];

const currNote = notes[0];
const currOctave = octaves[0];

const selectedNote = notes[1];
const selectedOctave = octaves[1];

const NoteColumn = () => {
  return (
    <div className="noteSelect__noteColumn">
      {notes.map((note, index) => (
        <div>
          {note}
        </div>
      ))}
    </div>
  );
};

const OctaveColumn = () => {
  return (
    <div className="noteSelect__octaveColumn">
      {octaves.map((octave, index) => {
        
        const octaveItemClass = [
          'noteSelect__octaveColumnItem',
          {noteSelect__octaveColumnItem__current: octave === currOctave},
          {noteSelect__octaveColumnItem__selected: octave === selectedOctave}
        ];

        return (
          <div className={classNames(octaveItemClass)}>
            {octave}
          </div>
        )
      })}
    </div>
  );
};

const NoteSelect = () => {
  return (
    <div className='noteSelect'>
      <NoteColumn />
      <OctaveColumn />
    </div>
  )
}

export default NoteSelect;