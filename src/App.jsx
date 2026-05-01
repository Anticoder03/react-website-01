import { useState } from 'react'
import NotesApp from './NotesApp'
import CreateNote from './CreateNote.jsx'

function App() {
  const [notes, setNotes] = useState(['hello', 'world']);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
  };

  return (
    <>
      <CreateNote onAddNote={addNote} />
      <NotesApp notes={notes} onDeleteNote={deleteNote} />
    </>
  )
}

export default App