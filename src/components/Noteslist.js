import { useEffect, useState } from 'react'
import Addnote from "./Addnote"
import Note from "./Note"

const Noteslist = ({ notes, handleSave, handleDelete, handleUpdate }) => {
    const [editID, setEditID] = useState();
    useEffect(() => {
        // localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    }, [notes])

    return (
        <div className="notes-list">
            {
                notes.map((note) => {
                    return (
                        <Note
                            id={note._id}
                            text={note.text}
                            date={note.date}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            editID={editID}
                            setEditID={setEditID}
                        />
                    )
                })
            }
            <Addnote handleSave={handleSave} />
        </div>
    )
}
export default Noteslist