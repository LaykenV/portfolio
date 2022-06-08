import React from "react";
import logo from "./chili.jpeg";
import "./header.css";

function Header() {
    return (
        <div className="headerDiv">
            <nav className="navBar">
                <div className="projectsTag">Projects</div>
                <div className="contactTag">Contact</div>
            </nav>
            <div className="nameAndPicture">
                <div className="nameAndTitle">
                    <h1 className="myName">Layken Varholdt</h1>
                    <h2 className="myTitle">FRONT END DEVELOPER</h2>
                </div>
                <div className="pictureAndDescription">
                    <img src={logo} alt="selfie"></img>
                    <p className="description">I am a self taught web developer who loves to create and design responsive websites</p>
                </div>
            </div>
            <div className="scrollDivContainer">
                <div className="scrollDiv">
                    <div className="scrollText">Scroll</div>
                    <div className="scrollArrow">ᐅ</div>
                </div>
            </div>
        </div>
    )
}

export default Header;