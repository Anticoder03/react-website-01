import React from 'react'
import { useState } from 'react'
import './CreateNote.css'
const CreateNote = ({ onAddNote }) => {
  const [note, setNote] = useState('');

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveNote = () => {
    if (note.trim() === '') return;

    onAddNote(note);   
    setNote('');      
  };

  return (
    <div className='create-note'>

      <textarea
        placeholder='Write your note here...'
        value={note}
        onChange={handleInputChange}
      />
      <button onClick={handleSaveNote}>Save Note</button>
    </div>
  );
};

export default CreateNote

