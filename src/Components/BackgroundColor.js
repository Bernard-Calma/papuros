import "../App.css"

export const BackgroundColor = (props) =>{
    return(
        <>
        <div id = "backgroundColor"
            style = {{
                display: "flex",
                height: "50%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: props.color,
                margin: "0",
                // borderLeft: "20px solid ",
                // borderRadius: "120px solid black",
                // backgroundColor: props.color,
            }}
        >
        </div>
        <div id = "backgroundColor"
            style = {{
                display: "flex",
                height: "50%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "red",
                margin: "0",
                // borderLeft: "20px solid ",
                // borderRadius: "120px solid black",
                // backgroundColor: props.color,
            }}
        >
        </div>
        </>
    )
}