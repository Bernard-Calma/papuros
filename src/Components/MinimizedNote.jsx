const MinimizedNote = (props) => {

    const Styles = {
        container: {
            border: "solid black",
            borderRadius: 20,
            margin: 5,
            backgroundColor: "yellow"
        }
    }

    return(
        <div 
            style = {Styles.container} 
            onClick = {props.minimizeNote}
            >
            <p></p>
        </div>
    )
}

export default MinimizedNote