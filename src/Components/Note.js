import { useState } from "react"

const Note = (props) => {
    // Fix resize is going overlimit on diagonal
    // Fix whole component to be customized
    const maxWidth = props.maxDims.width - 10
    const maxHeight = props.maxDims.height - 20
    const style = {
        container: {
            margin: 5,
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            height: 200,
            width: 100,
        }
    }
    return(
        <textarea style = {style.container} ref = {props.noteRef}></textarea>
    )
}

export default Note