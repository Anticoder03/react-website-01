import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import NotesApp from './NotesApp'

import CreateNote from './CreateNote.jsx'


function App() {
  const [notes, setNotes] = useState(['hello', 'world']);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <>
      <CreateNote onAddNote={addNote} />
      <NotesApp notes={notes} />
    </>
  )
}

export default App
