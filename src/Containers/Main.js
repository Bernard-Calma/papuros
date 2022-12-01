// Import Styling

// Color List
const colorList = [
    "red",
    "blue",
    "green"
]

// Main Page
export const Main = () => {

    const changeBackgroundColor = (color) => {
        console.log(color)
    }

    return (
        <>
            {/* // Title */}
            <h1>Papuros</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
            {
                colorList.map(color => 
                <p 
                    key = {color}
                    onClick={() => changeBackgroundColor(color)}
                    >
                    {color}
                </p>)
            }
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
        </>
    )
}