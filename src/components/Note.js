import {MdDeleteForever} from 'react-icons/md/index.esm';


const Note = () => {
    return <div className='note'>
        <span> Hello. First note</span>
        <div className='note-footer'>
            <small>30/10/2022</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>
        </div>
    </div>
    
}

export default Note;