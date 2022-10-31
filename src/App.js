import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList.js'


const App = () => {
  const [notes, seNotes] = useState([
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
      text: "This is my third note",
      date: "30/10/2022"
    },
])
  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  )
};

export default App;
