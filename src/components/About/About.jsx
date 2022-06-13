import React from "react";

import "../About/About.css"


import mypic from "../../images/profile_1.jpg"


function About(){


    return(
        <div className="main_div" id="about">
            <div class="div_1">
                <h1>Full Stack Developer</h1>
                <p>Italian native and fluent in French, English and Spanish, I graduated three years ago in International Relations and Communication in Lyon, France. After graduation, I moved to Perth to find new career opportunities and I am now working as marketing and event coordinator at Alliance Française de Perth.<br></br><br></br> With 3 years’ experience in the marketing industry in Perth, I am currently finding my way in the Tech industry and, thanks to SheCodes Australia, learning to program. I am now capable of navigating my way around Pyhton, HTML & CSS, JavaScript, Django (DRF) as well as React.js. My current goal is to become a full-stack developer and potentially a software engineer working for companies that can make a tangible difference in people's everyday life.</p>
                <div className="a"><a class="btn" href="https://www.linkedin.com/in/laura-santi3/" target="_blank"><span> MORE ABOUT ME</span></a></div>
            </div>
            <div class="div_1">
                <img id="profile" src={mypic} alt="Laura Santi"></img>
            </div>
        </div>

    )
}

export default About