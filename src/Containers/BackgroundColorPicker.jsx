import "../App.css"

import  BackgroundColor  from "../Components/BackgroundColor"

// Color List
const colorList = [
    "white",
    "orange",
]

const colorListBottom = [
    "gray",
    "violet",
]


const BackgroundColorPicker = (props) => {

    const changeBackgroundColor = (color) => {
        // Change background color from select option
        // console.log(color)
        props.setBackgrounColor(color)
        
    }
    return(
        <div className = "container" id = "backgroundColorPickerContainer">
            {/* Upper portion of circle */}
            <div className = "halfCircle">
                {
                    colorList.map((color, index) => 
                        <BackgroundColor 
                            key = {index}
                            color = {color} 
                            changeBackgroundColor = {() => changeBackgroundColor(color)}
                        />   
                    )
                }
            </div>
            {/* Lower portion of circle */}
            <div className = "halfCircle">
            {
                    colorListBottom.map((color, index) => 
                        <BackgroundColor 
                            key = {index}
                            color = {color} 
                            changeBackgroundColor = {() => changeBackgroundColor(color)}
                        />
                    )
            }
            </div>

        </div>
    )
}

export default BackgroundColorPicker