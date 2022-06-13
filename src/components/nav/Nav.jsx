import React from "react";
import { HashLink as Link } from "react-router-hash-link"

import "./Nav.css"

function Nav() {
    
    return(
        <nav>
            <Link to="#about">ABOUT</Link>
            <Link to="#projects">PORTFOLIO</Link>
            <Link to="#contact">CONTACT</Link>
        </nav>
    );
}

export default Nav;