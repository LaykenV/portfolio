import React from "react";
import selfie from "../images/IMG_2253.jpg";
import resume from "../Layken_Varholdt_Resume.pdf";
import "./header.css";

function Header({refProp, myContactRef}) {
    const scrollToProjects = () => {
        console.log(refProp);
        refProp.current.scrollIntoView({ behavior: "smooth"}) ;
    };

    const scrollToContact = () => {
        console.log(myContactRef);
        myContactRef.current.scrollIntoView({ behavior: "smooth"});
    };

    const openTab = (url) => {
        window.open(url, "_blank");
        return false;
    };


    return (
        <div className="headerDiv">
            <nav className="navBar">
                <a className="resumeTag" target="_blank" href={resume}></a>
                <div className="projectsTag" onClick={scrollToProjects}>Projects</div>
                <div className="contactTag" onClick={scrollToContact}>Contact</div>
            </nav>
            <div className="nameAndPicture">
                <div className="nameAndTitle">
                    <h1 className="myName">Layken Varholdt</h1>
                    <h2 className="myTitle">FRONT END DEVELOPER</h2>
                </div>
                <div className="pictureAndDescription">
                    <img src={selfie} alt="selfie"></img>
                    <p className="description">I am a self taught web developer who loves to create and design responsive websites</p>
                </div>
            </div>
            <div className="scrollDivContainer">
                <div className="scrollDiv">
                    <div className="scrollText">Scroll</div>
                    <div className="scrollArrow">ᐅ</div>
                </div>
            </div>
            
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            
        </div>
    )
}

export default Header;