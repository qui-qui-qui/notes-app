import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList.js'
import Search from './components/Search.js';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "20/10/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "15/10/2022"
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: "30/10/2022"
    },
  ]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <Search />
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  )
};

export default App;
