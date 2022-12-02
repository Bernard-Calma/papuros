import { useState } from "react"

import "../App.css"

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
        <div>
            <div className = "container" id = "backgroundColorPickerContainer">
                {
                    colorList.map((color, index) => 
                    <div 
                        style = {{backgroundColor: {color}, height: 10, width: 10}}
                        >
                    </div>)
                }
            </div>
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
    )
}