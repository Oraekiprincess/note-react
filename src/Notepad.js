// src/Notepad.js

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({ id: '', content: '', fontFamily: 'Arial' });

  const handleNoteChange = (content) => {
    setActiveNote(prevNote => ({ ...prevNote, content }));
  };

  const handleFontChange = (fontFamily) => {
    setActiveNote(prevNote => ({ ...prevNote, fontFamily }));
  };

  const addNewNote = () => {
    const newNote = { id: uuidv4(), content: '', fontFamily: 'Arial' };
    setNotes([...notes, newNote]);
    setActiveNote(newNote);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (activeNote.id === id) {
      setActiveNote({ id: '', content: '', fontFamily: 'Arial' });
    }
  };

  const saveNote = () => {
    setNotes(notes.map(note => note.id === activeNote.id ? activeNote : note));
  };

  const selectNote = (note) => {
    setActiveNote(note);
  };

  return (
    <div>
      <button onClick={addNewNote}>Add Note</button>
      <div>
        <label htmlFor="fontFamily">Font: </label>
        <select
          id="fontFamily"
          value={activeNote.fontFamily}
          onChange={(e) => handleFontChange(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      {activeNote.id && (
        <>
          <textarea
            value={activeNote.content}
            onChange={(e) => handleNoteChange(e.target.value)}
            style={{ fontFamily: activeNote.fontFamily, width: '100%', height: '300px' }}
          />
          <button onClick={() => deleteNote(activeNote.id)}>Delete Note</button>
          <button onClick={saveNote}>Save Note</button>
        </>
      )}
      <div>
        <h2>Notes</h2>
        {notes.map(note => (
          <div key={note.id} onClick={() => selectNote(note)}>
            {note.content.substring(0, 20)}...
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notepad;
