// Import Styling

import { useState } from "react"

// Color List
const colorList = [
    "white",
    "red",
    "blue",
    "green"
]

// Main Page
export const Main = () => {
    const [color, setColor] = useState("white")

    const changeBackgroundColor = (event) => {
        // Change background color from select option
        // console.log(event.target.value)
        setColor(event.target.value)
        
    }


    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: color, height: "99.56vh", border: "solid"}}>
            {/* // Title */}
            <h1>Papuros</h1>
            <div>
            <select 
                id = "colors" 
                name = "colors" 
                defaultValue={""}
                onChange={changeBackgroundColor}
                >
                <option value = "" disabled>change background color</option>
            {
                colorList.map((color, index) => 
                <option 
                    key = {color}
                    value = {color}
                    >
                    {color}
                </option>)
            }
            </select>
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