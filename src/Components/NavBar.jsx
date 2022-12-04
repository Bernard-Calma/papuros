import { useState } from "react"

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
            transition: '0.5s'      
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
            transition: '0.5s'              
        }
    }

    const openSideNav = () => {
        setShowNav(true)
    }
    return(
        <div style={showNav? style.sideNav: style.container} onClick = {openSideNav}>
            {
               showNav &&
                <p onClick={props.addNote}>+</p>
            }
        </div>
    )
}

export default NavBar