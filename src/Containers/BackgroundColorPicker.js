import { useState } from "react"

import "../App.css"

import { BackgroundColor } from "../Components/BackgroundColor"

// Color List
const colorList = [
    "white",
    "black",
    "gray",
    "red",
]


export const BackgroundColorPicker = (props) => {

    const changeBackgroundColor = (event) => {
        // Change background color from select option
        // console.log(event.target.value)
        props.setBackgrounColor(event.target.value)
        
    }
    return(
        <div className = "container" id = "backgroundColorPickerContainer">
            {/* Upper portion of circle */}
            <div className = "halfCircle">
                {
                    colorList.map((color, index) => {
                        console.log(index % 2 === 0)
                        if (index % 2 === 0) return <BackgroundColor color = {color} />      
                    })
                }
            </div>
            {/* Lower portion of circle */}
            <div className = "halfCircle">
            {
                    colorList.map((color, index) => {
                        console.log(index % 2 === 0)
                        if (index % 2 === 1) return <BackgroundColor color = {color} />      
                    })
                }
            </div>

        </div>
    )
}