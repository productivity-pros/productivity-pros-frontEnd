import {MdDeleteForever} from 'react-icons/md'
import { FaEdit } from "react-icons/fa";
const Note = ({id, text, date, handleDelete, editID, setEditID, handleUpdate}) => {
    return(
        <div className="notes">
            {editID !== id && <span>{text}</span>}
            {editID === id && <textarea className="input" type="text" defaultValue={text} onKeyPress={e => handleUpdate(e, editID, setEditID)} />}
            <div className="note-footer" >
                <FaEdit className='edit-icon' size='1.5em' onClick={() => {
                setEditID(id)
                console.log(editID);
                }}/>
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.5em' onClick={()=>handleDelete(id)} />
            </div>
        </div>
    )
}
export default Note