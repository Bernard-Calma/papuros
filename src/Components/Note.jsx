import { useState, useRef } from "react"
import "../App.css"

const Note = (props) => {
    // Fix resize is going overlimit on diagonal
    // Fix whole component to be customized
    const maxWidth = props.maxDims.width - 10
    const maxHeight = props.maxDims.height - 20

    const noteRef = useRef()
    const [noteDims, setNoteDims] = useState({
        // height: noteRef.current.style.height,
        // width: noteRef.current.style.width
    })

    const styles = {
        container: {
            margin: 5,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            height: 200,
            width: 100,
            borderColor: "black",
            borderWidth: 3,
            borderRadius: 20,
            paddingTop: 5,
            paddingLeft: 8
        },
        noteContainer: {
            borderColor: "black",
            borderWidth: 1,
            height: 100,
            margin: 10,
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
        },
        
    }


    const minimizeNote = () => {
        noteRef.current.style.width = "100px"
        noteRef.current.style.height = "100px"
    }
    
    return(
        // Change Notes Container Size
        // <textarea style = {style.container} ref = {props.noteRef}></textarea>
        <div style={ styles.noteContainer}>
            {/* Note menu */}
            <div style = {styles.noteMenu}>
                <p style = {styles.menu}
                    onClick = {minimizeNote}
                >-</p>
                {/* Delete Notes Container */}
                <p style = {styles.menu}
                    onClick = {props.removeNote}
                >x</p>
            </div>
                
       
            <textarea 
                style={ styles.textArea }
                ref = {noteRef}
            ></textarea>
        </div>
    )
}

export default Note