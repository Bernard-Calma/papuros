// Import Styling
import WebFont from "webfontloader"

import { useEffect, useState } from "react"
import BackgroundColorPicker from "./BackgroundColorPicker"
import Note from "../Components/Note"
import NavBar from "./NavBar"

// Main Page
export const Main = () => {
    // Variables for Styling
    const [backgroundColor, setBackgrounColor] = useState("white")
    const style = {
        container: {
            // display: "flex",
            // flexDirection: "column",
            backgroundColor: backgroundColor,
            // height: "99.56vh",
            height: "98vh",
            border: "solid"
        },
        mainContainer: {
            height: window.innerHeight - 150,
            width: window.innerWidth -50,
            // border: "solid 1px red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            margin: 5,
            overflow: "auto"
        }
    }

    const [noteDims, setNoteDims] = useState({
        // This should hold the dimensions for the note
        height: 100,
        width: 100
    })

    // Variables for Notes
    const [notes, setNotes] = useState([])
    
    const addNote = () => {
        // Add note , need to change this to more specific ID
        setNotes([...notes, {
            id: notes.length === 0 ? 0 : notes.length + 1,
            content: "",
            minimized: false,
            width: 100,
            height: 100,
            left: 0,
            top: 100,
        }])
    }

    const removeNote = (id) => {
        // Filter notes and return all notes that does not have the same ID with the parameter
        setNotes(notes.filter((notes) => notes.id !== id))
    }

    const minimizeNote = (noteToEdit) => {
        // console.log("Minimize Note")
        setNotes(notes.map((note) => note.id === noteToEdit.id ? {...noteToEdit, minimized: !noteToEdit.minimized} : note))
    }

    const updateNote = (noteToEdit) => {
        setNotes(notes.map((note) => note.id === noteToEdit.id ? noteToEdit : note))
    }
    
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nerko One', 'Nabla', "My Soul", 'Rubik Puddles', "Grape Nuts", 'Twinkle Star']
            }
        })
    })

    return (
        <div style={style.container} >
            
            <div className = "nav">
                {/* Change background color */}
                <BackgroundColorPicker 
                    setBackgrounColor = {setBackgrounColor}
                />
            </div>
            {/* Title */}
            <h1 id="title">Papuros</h1>
            {/* Main Container */}
            <div style = {style.mainContainer}>
                <NavBar 
                    notes = {notes}
                    addNote = {addNote}
                    minimizeNote = {minimizeNote}
                />
                {
                    // Notes List
                    notes.map((note, index) => !note.minimized ?
                        // Notes Container
                            <Note 
                                key = {index}
                                note = {note}
                                noteDims = {noteDims}
                                setNoteDims = {setNoteDims}
                                removeNote = {()=>removeNote(note.id)}
                                minimizeNote = {minimizeNote}
                                updateNote = {updateNote}
                            />
                        : <div key={index}> </div>
                    )
                }
            </div>
            
            {/* // Background
            // Minimize Notes Container
            // Hide Notes Container
            // Change Font Color
            // Change Notes Container Color
            // About
            // Help */}
        </div>
    )
}


