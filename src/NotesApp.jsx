import React from 'react';
import './NotesApp.css';
const NotesApp = ({ notes, onDeleteNote }) => {
  return (
    <>
      <h1>All Your Notes:</h1>

      <ul className="list">
        {notes.map((n, index) => (
          <li className="item" key={index}>
            {n}
            <button className='del_btn' onClick={() => onDeleteNote(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NotesApp;