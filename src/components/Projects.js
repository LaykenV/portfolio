import React from "react";
import logo from "./chili.jpeg";
import "./projects.css";


function Projects () {
    return (
        <div className="projectsDiv">
            <header className="projectsHeader">
                <h2 className="featuredProjects">Featured Projects</h2>
                <div className="dividerLine"></div>
            </header>
            <div className="ferrariDiv">
                <img className="projectPhoto" src={logo} alt="ferrari"></img>
                <img className="projectPhoto" src={logo} alt="ferrari"></img>
                <div className="projectInfo">
                    <div className="projectHeader">Ferrari E-commerce App</div>
                    <div className="projectDescription">A Ferrari car e-commerce frontend web application with a fully functioning shopping cart, product page, and clean landing page. Users can add, modify, and remove items from their cart. Utilized React Router for seamless navigation throughout the site.</div>
                    <div className="projectButtons">
                        <button className="githubButton">Review The Code</button>
                        <button className="projectLinkButton">See it Live</button>
                    </div>
                </div>
            </div>
            <div className="pokemonDiv">
                <div className="projectInfo">
                    <div className="projectHeader">Ferrari E-commerce App</div>
                    <div className="projectDescription">A Ferrari car e-commerce frontend web application with a fully functioning shopping cart, product page, and clean landing page. Users can add, modify, and remove items from their cart. Utilized React Router for seamless navigation throughout the site.</div>
                    <div className="projectButtons">
                        <button className="githubButton">Review The Code</button>
                        <button className="projectLinkButton">See it Live</button>
                    </div>
                </div>
                <img className="projectPhoto" src={logo} alt="ferrari"></img>
                <img className="projectPhoto" src={logo} alt="ferrari"></img>
            </div>
        </div>
    )
}

export default Projects;