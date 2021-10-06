import { useEffect, useState } from 'react'
import Noteslist from "./Noteslist";
import Search from './Search';
// import Header from './components/Header';
import '../css/MyNotes.css'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const MyNotes = () => {
	const [notes, setNotes] = useState([])
	const [searchText, setSearchText] = useState('')
	const { user } = useAuth0();
	useEffect(() => {
		// const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
		// if(savedNotes)
		// {
		// 	setNotes(savedNotes)
		// }
		async function fetchData() {
			// You can await here
			let listsData = await axios.get(`${process.env.REACT_APP_SERVER}/getnotes?email=${user.email}`);
			setNotes(listsData.data)
			// ...
		}
		fetchData();
	})
	const addNote = async (text) => {
		const date = new Date();
		// const newNote = {
		// 	id:nanoid(),
		// 	text:text,
		// 	date:date.toLocaleDateString()
		// }
		// const newNotes = [...notes,newNote]
		// setNotes(newNotes)
		const newNote = {
			text: text,
			date: date.toLocaleDateString(),
			email: user.email
		}
		let noteData = await axios.post(`${process.env.REACT_APP_SERVER}/addnote`, newNote);
		setNotes(noteData.data)
	}
	const deleteNote = async (id) => {
		// const newNotes = notes.filter((note) => note._id !== id)
		// setNotes(newNotes)
		let noteData = await axios.delete(`${process.env.REACT_APP_SERVER}/deletenote?noteID=${id}&email=${user.email}`);
		setNotes(noteData.data)
	}
	const updateNote = async (ev, id, callback) => {
		if ((ev.key == "Enter") && (ev.target.value != "")) {
			// console.log('here');
			const date = new Date();
			let newNote = {
			  text: ev.target.value,
			  date: date.toLocaleDateString(),
			  email: user.email,
			  _id: id
			}
			let noteData = await axios.put(`${process.env.REACT_APP_SERVER}/updatenote`, newNote);
			setNotes(noteData.data);
			callback(-1);
		  }
	}
	const [darkMode, setDarkMode] = useState(false)
	// console.log(notes);
	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='containerNotes'>
				<h1>My Notes</h1>
				<Search handleSearchNote={setSearchText} />
				<Noteslist notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleSave={addNote} handleDelete={deleteNote} handleUpdate={updateNote} />
			</div>
		</div>
	)
}
// export default withAuth0(MyNotes);
export default MyNotes;
