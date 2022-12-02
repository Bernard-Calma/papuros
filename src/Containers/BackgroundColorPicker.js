import { useState } from "react"

import "../App.css"

import { BackgroundColor } from "../Components/BackgroundColor"

// Color List
const colorList = [
    "white",
    "red",
    "blue",
    "green"
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
                
            </div>
            {/* Lower portion of circle */}
            <div className = "halfCircle">

            </div>

        </div>
            // <select 
            //     id = "colors" 
            //     name = "colors" 
            //     defaultValue={""}
            //     onChange={changeBackgroundColor}
            //     >
            //     <option value = "" disabled>change background color</option>
            // {
            //     colorList.map((color, index) => 
            //     <option 
            //         key = {color}
            //         value = {color}
            //         >
            //         {color}
            //     </option>)
            // }
            // </select>
    )
}