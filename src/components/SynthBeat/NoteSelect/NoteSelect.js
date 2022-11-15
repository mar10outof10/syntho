import React from "react";

const notes = ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"];
const octaves = ["1", "2", "3", "4", "5", "6"];

const currNote = notes[0];
const currOctave = octaves[0];

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
        return (
          <div className="noteSelect__octaveColumnItem">
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