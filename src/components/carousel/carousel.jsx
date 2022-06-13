import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect, Component } from "react";
import Slider from "react-slick";


//styles

import "../carousel/carousel.css"

//images

import python from "../../images/python.png"
import css from "../../images/css.png"
import django from "../../images/django.png"
import javascript from "../../images/javascript.png"
import react from "../../images/react.png"
import group from "../../images/group.png"
import group1 from "../../images/javascript.png"
import portfolio from "../../images/portfolio.png"


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            // cssEase: "linear",
            centerPadding: "60px",
            className: "center",
            centerMode: true,
            slidesToShow: 3,
            speed: 500,
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                centerMode: true, 
                slidesToScroll: 1
                }
            }
            ]
        }
        return (
        <>   
        <div className="projects" id="projects">
            <h1>Portfolio</h1>
            <h3>Projects I have completed during<span className="highlight2"> SheCodes </span><span className="highlight3"> Plus</span></h3>
            <h4>November 2021 - June 2022</h4>
            <br></br>
            <br></br>
            <Slider {...settings}>
                
            <div className="image">
                <img className="slider" src={python} alt="python"/>
                <a href="https://github.com/Lauraitnas/python-assignment" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Python Assigment</div>
                    <p className="image-desc">Processing csv files containing data about the weather</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={css} alt="html"/>
                <a href="https://github.com/Lauraitnas/lauraitnas.github.io" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Portfolio | HTML & CSS</div>
                    <p className="image-desc">Portfolio site</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={django} alt="python proj."/>
                <a href="https://github.com/SheCodesAus/she-codes-django-news-project-Lauraitnas" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">SheCodes News | Django</div>
                    <p className="image-desc">Website that allows users to read news stories, and authors to create them</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={react} alt="python proj."/>
                <a href="https://github.com/Lauraitnas/she-codes-crowdfunding-project-Lauraitnas" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Crowdfunding | React</div>
                    <p className="image-desc">Platform to support projects created by forest protection associations</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={group} alt="python proj."/>
                <a href="https://github.com/SheCodesAus/she-codes-group-project-api-you-shall-not-parse" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Group Project | DRF</div>
                    <p className="image-desc">Platform to manage all events created by Shecodes as well as the mentors assigned to each module</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={group1} alt="python proj."/>
                <a href="https://github.com/SheCodesAus/she-codes-group-project-frontend-you-shall-not-parse" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Group Project | React.js</div>
                    <p className="image-desc">Platform that allows mentors to sign up to mentor the available shecodes workshops</p>  
                </div></a>
            </div>

            <div className="image">
                <img className="slider" src={portfolio} alt="python proj."/>
                <a href="https://github.com/SheCodesAus/she-codes-group-project-frontend-you-shall-not-parse" target="blank">
                <div className="image-overlay image-overlay--blur">
                    <div className="image-title">Portfolio | React.js</div>
                    <p className="image-desc">New Personal Portfolio ( with a bit of spice!) <br></br>p.s you're looking at it</p>  
                </div></a>
            </div>
            </Slider>
            <div className="more-pr">
            <a class="btn" href="https://github.com/Lauraitnas" target="_blank"><span> MORE PROJECTS</span></a>
            </div> 

        </div>
    </> 
        
        );
    }
}