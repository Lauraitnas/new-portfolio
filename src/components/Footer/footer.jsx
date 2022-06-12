import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../Footer/footer.css"


import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import logo from "../../images/logo1.png"

function Footer() {


    return(
        <footer className="footer">
            <div className="logo"><img src={logo}></img></div>
            <div className="footer-items">
                <div className="footer-item">
                    <a href="https://www.linkedin.com/in/laura-santi3/" target="_blank"> <img className="icon" src={linkedin}/> </a>
                    <a href="https://github.com/Lauraitnas" target="_blank"> <img className="icon" src={github}/> </a><br/>
                </div>
                <div className="footer-item" >
                    <p className="footer-item">Laura Santi <span className="highlight1">©2022</span></p>
                </div>
            </div>
    </footer>

    )
}

export default Footer