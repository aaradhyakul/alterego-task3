import React from 'react'
import HiddenNav from "../components/HiddenNav"
import { useState } from "react"

import "./NavBar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {FaBars} from 'react-icons/fa'


const NavBar = () => {

    const [isShown, setShown] = useState(false)

    function openNav() {
        setShown(true)

    }
    function closeNav(){
        setShown(false)
    }

    return (
        <div id="parentnav"><nav>
            <button id="navigation" onClick={openNav}>
                <div className="divider"></div>
                <div className="divider"></div>
            </button>
            <div id="lang">
                <button id="eng">ENG</button>
                <button id="it">IT</button>
                <button id="fr">FR</button>
                <button id="urdu">العر</button>
            </div>


        </nav>
            <HiddenNav isShown={isShown} closeNav={closeNav}/></div>
    )
}

export default NavBar
