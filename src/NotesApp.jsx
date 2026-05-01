import React from 'react'
import { useState } from 'react'
import './NotesApp.css'
import CreateNote from './CreateNote';
const NotesApp = ({notes}) => {

  return (
    <>

      <h1>All Yopur Notes </h1>

     <ul className='list'>
        {notes.map((n, index) => (
            <li className='item' key={index}>{n}</li>
        ))}
     </ul>
    </>
  )
}

export default NotesApp
