import React from "react";
import githubLogo from "../images/icon_githubWhite.svg";
import linkedinLogo from "../images/icon_linkedinColor.svg";
import logo from "./chili.jpeg";
import "./footer.css";


function Footer({refProp}) {
    const openTab = (url) => {
        window.open(url);
    }
    return (
        <div className="footerDiv" ref={refProp}>
            <div className="contactDiv">
                <div className="dividerLine"></div>
                <div className="contactText">Contact</div>
                <div className="dividerLine"></div>
            </div>
            <div className="footerBody">
                <p className="footerSmallText">Write me an e-mail at:</p>
                <p className="footerEmail">laykenv@gmail.com</p>
                <p className="footerOr">OR</p>
                <p className="footerSmallText">Reach me through social media:</p>
                <div className="mediaLinks">
                    <img className="mediaLink" src={githubLogo} alt="github" onClick={() => { openTab("https://github.com/LaykenV") }}></img>
                    <img className="mediaLink" src={linkedinLogo} alt="indeed" onClick={() => { openTab("https://www.linkedin.com/in/layken-varholdt-a78687230/") }}></img>
                </div>
            </div>
            <div className="footerBottom">
                <div className="footerBottomLine"></div>
                <div className="bottomSignature">Layken Varholdt</div>
                <div className="footerBottomLine"></div>
            </div>
        </div>
    )
}

export default Footer;