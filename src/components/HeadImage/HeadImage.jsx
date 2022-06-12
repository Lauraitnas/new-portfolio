import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

//style
import "../HeadImage/HeaderImage.css"

//elements
import video from "../../video/vide.mp4"

function HeaderImage(){

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        font:"Raleway",
    };

    return(
    <>
    <div className="flex" id="home"> 
        <div className="text-container">
                <h1 className="video-text">Hello, I'm <span className="highlight"> Laura Santi </span><br></br>
                Full Stack Developer & Pizza Snob!</h1>
                <div ><Link to="#projects" className="btn" style={linkStyle}><span>VIEW MY WORK</span></Link></div>       
        </div>        
        <div className="fullscreen-bg">          
            <video loop muted autoPlay class="fullscreen-bg_video">
                <source src={video} type="video/mp4"></source>
            </video>        
        </div>  
    </div>
    </>
    )
};

export default HeaderImage