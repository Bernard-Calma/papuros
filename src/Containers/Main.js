// Import Styling
import WebFont from "webfontloader"

import { useEffect, useState } from "react"
import { BackgroundColorPicker } from "./BackgroundColorPicker"

// Main Page
export const Main = () => {
    const [backgroundColor, setBackgrounColor] = useState("white")

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nerko One', 'Nabla', "My Soul", 'Rubik Puddles', "Grape Nuts", 'Twinkle Star']
            }
        })
    })

    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: backgroundColor, height: "99.56vh", border: "solid"}}>
            {/* // Title */}
            <div className = "nav">
                
                <BackgroundColorPicker 
                    setBackgrounColor = {setBackgrounColor}
                />
            </div>
                <h1 id="title">Papuros</h1>
            
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