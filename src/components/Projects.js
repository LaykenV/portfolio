import React from "react";
import logo from "./chili.jpeg";
import pbaPic1 from "../images/Ferrari_Mock_pic1.png";
import pbaPic2 from "../images/Ferrari_Mock_pic2.png";
import fmPic1 from "../images/PBA_pic1.png";
import fmPic2 from "../images/PBA_pic2.png";
import "./projects.css";


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
            <div className="ferrariDiv">
                <img className="projectPhoto" src={fmPic1} alt="ferrari"></img>
                <img className="projectPhoto" src={fmPic2} alt="ferrari"></img>
                <div className="projectInfo">
                    <div className="projectHeader">Pokemon Battle App</div>
                    <div className="projectDescription">A Pokemon battle simulator that allows the user to choose a team of Pokemon and battle against their rival. Built with Typescript, React, and unit tested with Jest. All Pokemon data pulled from PokeAPI.</div>
                    <div className="projectButtons">
                        <button className="githubButton" onClick={() => { openTab("https://github.com/LaykenV/pokemon-battle-app") }}>Review The Code</button>
                        <button className="projectLinkButton" onClick={() => { openTab("https://laykenv.github.io/pokemon-battle-app/") }}>See it Live</button>
                    </div>
                </div>
            </div>
            <div className="pokemonDiv">
                <div className="projectInfo">
                    <div className="projectHeader">Ferrari E-commerce App</div>
                    <div className="projectDescription">A Ferrari car e-commerce frontend web application with a fully functioning shopping cart, product page, and clean landing page. Users can add, modify, and remove items from their cart. Utilized React Router for seamless navigation throughout the site.</div>
                    <div className="projectButtons">
                        <button className="githubButton" onClick={() => { openTab("https://github.com/LaykenV/shoppingcart") }}>Review The Code</button>
                        <button className="projectLinkButton" onClick={() => { openTab("https://laykenv.github.io/shoppingcart") }}>See it Live</button>
                    </div>
                </div>
                <img className="projectPhoto" src={pbaPic1} alt="ferrari"></img>
                <img className="projectPhoto" src={pbaPic2} alt="ferrari"></img>
            </div>
        </div>
    )
};

export default Projects;