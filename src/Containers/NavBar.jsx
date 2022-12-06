import { useState } from "react"
import MinimizedNote from "../Components/MinimizedNote"

const NavBar = (props) => {

    const [showNav , setShowNav] = useState(false)

    const style = {
        container: {
            position: "absolute",
            right: 3,
            borderLeft: "solid",
            borderTop: "solid",
            borderBottom: "solid",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            width: "1vh",
            height: "2vh",
            textAlign: "center",
            transition: '0.5s',
            boxShadow: "1px 1px 5px 1px black"      
        },
        sideNav: {
            position: "absolute",
            right: 3,
            borderLeft: "solid",
            borderTop: "solid",
            borderBottom: "solid",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            width: "6vh",
            // Change this to be a height according to how many notes are minimized
            height: "20vh",
            textAlign: "center",
            transition: '0.5s',     
            
            boxShadow: "0px 3px 3px 2px black"
        }
    }

    const openSideNav = () => {
        setShowNav(!showNav)
    }

    const addNote = () => {
        props.addNote()
        openSideNav()
    }

    return(
        <div style={showNav? style.sideNav: style.container} onClick = {openSideNav}>
            {
               showNav &&
               // Add Notes Container
               <>
                <p onClick={addNote}>+</p>
                    {
                        props.notes.map( (note) => 
                            note.minimized ? 
                            <MinimizedNote 
                                note = {note}
                                minimizeNote = { () => props.minimizeNote(note.id)}
                            />
                            : <></>
                        )
                    }
               </>
                
            }
        </div>
    )
}

export default NavBar