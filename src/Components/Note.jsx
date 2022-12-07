import { useEffect } from "react"
import { useState, useRef } from "react"
import "../App.css"

const Note = (props) => {
    // Fix resize is going overlimit on diagonal
    // Fix whole component to be customized
    const maxWidth = props.maxDims.width - 10
    const maxHeight = props.maxDims.height - 20

    const noteRef = useRef()
    const containerRef = useRef()
    
    const [noteHolder , setNoteHolder] = useState(props.note)
    const [notePosition, setNotePosition] = useState({
        top: 140,
        left:20
    })

    const styles = {
        noteContainer: {
            borderColor: "black",
            borderWidth: 1,
            height: 100,
            margin: 10,
            position: "absolute",
            left: props.note.left,
            top: notePosition.top,
        },
        noteMenu: {
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "#f2eb11",
            border: "solid",
            height: 20,
            paddingBottom: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

        },
        menu: {
            fontSize: 20,
            fontFamily: "My Soul",
            backgroundColor: "#f2eb11",
            marginTop: 0,
            
        },
        textArea: {
            backgroundColor: "#f2eb11",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            border: "solid",
            borderTop: "none",
            minWidth: 100,
            minHeight: 100,
            overflowY: "scroll",
            height: props.note.height,
            width: props.note.width,
        },
        
    }

    const handleChange = (event) => {
        // Set changed to note holder first
        setNoteHolder({...noteHolder, content: event.target.value, height: noteRef.current.clientHeight, width: noteRef.current.clientWidth})
        // Then call udpate function to update whole array of notes.
        props.updateNote(noteHolder)
        console.log(props.note)
    }

    const handleResize = () => {
        setNoteHolder({...noteHolder, height: noteRef.current.clientHeight, width: noteRef.current.clientWidth})
    }

    const handleDrag = (event) => {
        event.preventDefault()
        // console.log("Dragging", event.clientX)
            if (event.screenX === 0) return
            setNoteHolder({...noteHolder, left: event.clientX})
            setNotePosition({
                top: event.clientY,
            })
            props.updateNote(noteHolder)
            // console.log(containerRef.current.style)
        // onDrag = {(event) => {
        //     event.preventDefault()
        //     console.log("mouse move", event.clientX)
        //     setNotePosition({
        //         top: event.clientY -10,
        //         left: event.clientX - 10
        //     })
        // }}

        // onDragStart = {(event) => {
        //     event.preventDefault()
        //     console.log("drag")
        // }}
      
    }
    return(
        // Change Notes Container Size
        // <textarea style = {style.container} ref = {props.noteRef}></textarea>
        <div style={ styles.noteContainer}
            ref = {containerRef}
            draggable = {true}
            onDrag = {handleDrag}
            onDragEnd = {() => {
                console.log("window", window.innerWidth)
                console.log("end drag", containerRef.current.offsetLeft)
                if (window.innerWidth-10 <= containerRef.current.offsetLeft || window.innerHeight-10 <= containerRef.current.offsetTop) props.minimizeNote(noteHolder)
            }}
            >
            {/* Note menu */}
            <div style = {styles.noteMenu}>
                <p style = {styles.menu}
                    onClick = {() => {
                        props.minimizeNote(noteHolder)
                    }}
                >-</p>
                {/* Delete Notes Container */}
                <p style = {styles.menu}
                    onClick = {props.removeNote}
                >x</p>
            </div>
                
                    
            <textarea 
                style={ styles.textArea }
                ref = {noteRef}
                value = {noteHolder.content}
                onChange = {handleChange}
                onClick = {handleResize}
            ></textarea>
        </div>
    )
}

export default Note