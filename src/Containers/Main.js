// Import Styling
import WebFont from "webfontloader"

import { useEffect, useRef, useState } from "react"
import BackgroundColorPicker from "./BackgroundColorPicker"
import Note from "../Components/Note"
import NavBar from "../Components/NavBar"

// Main Page
export const Main = () => {
    // Variables for Styling
    const [backgroundColor, setBackgrounColor] = useState("white")
    const [maxDims, setMaxDims] = useState({
        width: window.innerWidth -50,
        height: window.innerHeight - 150
    })
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
            height: maxDims.height,
            width: maxDims.width,
            // border: "solid 1px red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            margin: 5,
            overflow: "auto"
        }
    }

    // Variables for Notes
    const [notes, setNotes] = useState([])
    
    const addNote = () => {
        setNotes([...notes, {
            id: notes.length + 1,
            content: ""
        }])
        console.log("note added")
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nerko One', 'Nabla', "My Soul", 'Rubik Puddles', "Grape Nuts", 'Twinkle Star']
            }
        })
    })


    console.log("Notes", notes)
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
                    addNote = {addNote}
                />
                <Note maxDims = {maxDims}/>
                {
                    // Notes List
                    notes.map((note) => {
                        // Notes Container
                        return <Note maxDims = {maxDims}/>
                    })
                }
            </div>
            
            {/* // Background
            // Delete Notes Container
            // Minimize Notes Container
            // Hide Notes Container
            // Change Font Color
            // Change Notes Container Color
            // About
            // Help */}
        </div>
    )
}


