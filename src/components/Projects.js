import React from "react";
import logo from "./chili.jpeg";
import IWAIPic1 from "../images/IWAI_screenshot1.png";
import IWAIPic2 from "../images/IWAI_screenshot2.png";
import pbaPic1 from "../images/PBA_pic1.png";
import pbaPic2 from "../images/PBA_pic2.png";
import sparq1 from "../images/sparq 1.png";
import sparq2 from "../images/sparq 2.png";
import Carousel from "react-material-ui-carousel";
import "./projects.css";

const projectPhoto = (photo) => {
    <div className="projectPhotoDiv">
        <img className="projectPhoto" src={photo} alt="Application Screenshot"></img>
    </div>
}


function Projects (props) {
    const openTab = (url) => {
        window.open(url);
    }
    return (
        <div className="projectsDiv" ref={props.refProp}>
            <header className="projectsHeader">
                <h2 className="featuredProjects">Featured Projects</h2>
                <div className="projectsDividerLine"></div>
            </header>
            <div className="pokemonDiv">
                <div className="projectInfo">
                    <div className="projectHeader">Interview With AI App</div>
                    <div className="projectDescription">I single-handedly built an interactive mock interview application using Vite, React, Typescript, and the OpenAI API. The application incorporates real-time speech conversion and uses the OpenAI API to provide immediate, personalized feedback to improve interview skills, resulting in a rich, immersive user experience.</div>
                    <div className="projectButtons">
                        <button className="githubButton" onClick={() => { openTab("https://github.com/LaykenV/interviewWithAI") }}>Review The Code</button>
                        <button className="projectLinkButton" onClick={() => { openTab("https://interview-with-ai.vercel.app/") }}>See it Live</button>
                    </div>
                </div>
                <Carousel className="carousel" animation="slide" interval={5000}>
                    <img className="projectPhoto" src={IWAIPic1} alt="Application Screenshot"></img>                    
                    <img className="projectPhoto" src={IWAIPic2} alt="Application Screenshot"></img>                    
                </Carousel>
            </div>
            <div className="pokemonDiv">
                <div className="projectInfo">
                    <div className="projectHeader">Sparq Scheduling App</div>
                    <div className="projectDescription">A scheduling app I helped create while part of an internship at Sparq. I utilized scrum and agile methodologies while working on a team of 4 developers, a Product Owner, a Scrum Master, a QA tester, as well as a board of stakeholders that we demo'd weekly to in a presentation. This app is built with in React and utilizes every library I have mentioned in the graphic above.</div>
                    <div className="projectButtons">
                        <button className="githubButton" onClick={() => { openTab("https://github.com/LaykenV/sparqSchedulingApp") }}>Review The Code</button>
                        <button className="projectLinkButton" onClick={() => { openTab("https://laykenv.github.io/sparqSchedulingApp") }}>See it Live</button>
                    </div>
                </div>
                <Carousel className="carousel" animation="slide" interval={5000}>
                    <img className="projectPhoto" src={sparq1} alt="Application Screenshot"></img>                    
                    <img className="projectPhoto" src={sparq2} alt="Application Screenshot"></img>                    
                </Carousel>
            </div>
            <div className="pokemonDiv">
                <div className="projectInfo">
                    <div className="projectHeader">Pokemon Battle App</div>
                    <div className="projectDescription">A Pokemon battle simulator that allows the user to choose a team of Pokemon and battle against their rival. Built with Typescript, React, and unit tested with Jest. All Pokemon data pulled from PokeAPI.</div>
                    <div className="projectButtons">
                        <button className="githubButton" onClick={() => { openTab("https://github.com/LaykenV/pokemon-battle-app") }}>Review The Code</button>
                        <button className="projectLinkButton" onClick={() => { openTab("https://laykenv.github.io/pokemon-battle-app/") }}>See it Live</button>
                    </div>
                </div>
                <Carousel className="carousel" animation="slide" interval={5000}>
                    <img className="projectPhoto" src={pbaPic1} alt="Application Screenshot"></img>                    
                    <img className="projectPhoto" src={pbaPic2} alt="Application Screenshot"></img>                    
                </Carousel>
            </div>
        </div>
    )
};

export default Projects;