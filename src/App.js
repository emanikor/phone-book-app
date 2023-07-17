// import { useState } from 'react'
import React, { useState } from 'react';

import './App.css';

const Note = ({ note }) => {  
  return (  
      <li>{note.content}</li> 
 )}



const  App =(props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

const addNote =(event)=>{
 event.preventDefault()
 const noteObject ={
  content : newNote,
  important: Math.random() <0.5,
  id: notes.length + 1,
 }
 setNotes(notes.concat(noteObject))
 setNewNote('')

}
const handleNoteChange =(event)=>{
  console.log(event.target.value)
  setNewNote(event.target.value)
}
 
  return (
    <div>
      <h1>notes</h1>
      <ul>
        {notes.map(note =>
           <Note key={notes.id} 
           note ={note} />)}
      </ul>
      <form onSubmit={addNote}>
        <input 
        value={newNote} 
         onChange={handleNoteChange}></input>
      <button type='submit'>add</button>
      </form>
    
    </div>
  );
}

export default App;
