// Import Styling
import WebFont from "webfontloader"

import { useEffect, useRef, useState } from "react"
import BackgroundColorPicker from "./BackgroundColorPicker"
import Note from "../Components/Note"

// Main Page
export const Main = () => {
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
            border: "solid 1px red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            margin: 5
        }
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
            {/* // Title */}
            <div className = "nav">
                
                <BackgroundColorPicker 
                    setBackgrounColor = {setBackgrounColor}
                />
            </div>
            <h1 id="title">Papuros</h1>
            {/* Main Container */}
            <div style = {style.mainContainer}>
                <Note maxDims = {maxDims}/>
                <Note maxDims = {maxDims}/>
            </div>
            
            {/* // Background
            // Notes List
            // Add Notes Container
            // Delete Notes Container
            // Minimize Notes Container
            // Hide Notes Container
            // Notes Container
            // Change Font Color
            // Change Notes Container Size
            // Change Notes Container Color
            // Change background color

            // About
            // Help */}
        </div>
    )
}


