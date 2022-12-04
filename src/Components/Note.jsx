import { useState, useRef } from "react"

const Note = (props) => {
    // Fix resize is going overlimit on diagonal
    // Fix whole component to be customized
    const maxWidth = props.maxDims.width - 10
    const maxHeight = props.maxDims.height - 20
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
            // backgroundColor: "gray",
            // borderBottom: "solid",
            // borderColor: "black",
            borderWidth: 0.5,
            width: 110,
            height: 20,
            display: "flex",
            maringTop: -10,
            position: "absolute"
            
            
        },
        menu: {
            margin: 0,
            marginLeft: 5,
            marginRight: 5,
            paddingLeft: 5,
            // border: "solid",
            borderWidth: 0.5,
            fontSize: "larger",
            fontWeight: 500,
            fontFamily: "My Soul"
        },
        textArea: {
            backgroundColor: "#f2eb11",
            paddingTop: 30,
            borderRadius: 20,
            minWidth: 100,
            minHeight: 100,
        },
        
    }
    return(
        // Change Notes Container Size
        // <textarea style = {style.container} ref = {props.noteRef}></textarea>
        <div style={ styles.noteContainer}>
            {/* Note menu */}
            <div style = {styles.noteMenu}>
                <p style = {styles.menu}>-</p>
                <p style = {styles.menu}
                    onClick = {props.removeNote}
                >x</p>
            </div>
            <textarea 
                style={ styles.textArea }

            ></textarea>
        </div>
    )
}

export default Note