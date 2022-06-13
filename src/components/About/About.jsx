import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../About/About.css"


import mypic from "../../images/profile_1.jpg"


function About(){


    return(
        <div className="main_div" id="about">
            <div class="div_1">
                <h1>Full Stack Developer</h1>
                <p>My highest aspiration is to become a full-stack developer and potentially a software engineer working for companies that can actually make a difference in people every day’s life. I first discovered my passion for coding a year ago, while trying to create an online presence for my family’s business back in Italy. When Covid first hit, they didn’t have any kind of “digital real-estate”. So I taught myself how to create a website using WordPress to help them stay afloat during the health crisis.</p>
                <div className="a"><a class="btn" href="https://www.linkedin.com/in/laura-santi3/" target="_blank"><span> MORE ABOUT ME</span></a></div>
            </div>
            <div class="div_1">
                <img id="profile" src={mypic} alt="Laura Santi"></img>
            </div>
        </div>

    )
}

export default About