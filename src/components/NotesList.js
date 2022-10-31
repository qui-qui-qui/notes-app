import Note from './Note.js'

const NotesList = ({ notes }) => {
    return (
    <div className='notes-list'>
        {notes.map((note) => <Note />)}
    </div>
    )
}

export default NotesList;