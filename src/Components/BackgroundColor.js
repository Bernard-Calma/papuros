import "../App.css"

const BackgroundColor = (props) =>{
    return(
        <>
        <div id = "backgroundColor"
            style = {{
                height: "100%",
                width: "100%",
                backgroundColor: props.color,
            }}
            onClick = {() => props.changeBackgroundColor()}
        >
        </div>
        </>
    )
}

export default BackgroundColor