import React from "react";
import HTML from "../images/icon_html.svg";
import css from "../images/icon_css.svg";
import git from "../images/icon_git.svg";
import github from "../images/icon_github.svg";
import js from "../images/icon_javascript.svg";
import jest from "../images/icon_jest.svg";
import linux from "../images/icon_linux.svg";
import react from "../images/icon_react.svg";
import webpack from "../images/icon_webpack.svg";
import ts from "../images/icon_typescript.svg";
import "./skills.css";


function Skills () {
    return (
        <div className="skillsDiv">
            <header className="skillsHeader">
                <div className="skillsHeaderLeft">Skills</div>
                <div className="skillsHeaderRight">Experienced in building modern web applications and reusable user interface components using React.js, Javascript (ES6), Typescript, HTML5, and CSS3.</div>
            </header>
            <div className="skillsBody">
                <div className="skillsBodyLeft">
                    <div className="skillsBodyLeftHeader">Languages and Frameworks</div>
                    <div className="skillsBodyLeftItems">
                        <div className="skillItem">
                            <img src={HTML} alt="html"></img>
                            <span>HTML5</span>
                        </div>
                        <div className="skillItem">
                            <img src={css} alt="css"></img>
                            <span>CSS3</span>
                        </div>
                        <div className="skillItem">
                            <img src={js} alt="javascript"></img>
                            <span>Javascript (ES6)</span>
                        </div>
                        <div className="skillItem">
                            <img src={react} alt="react"></img>
                            <span>React</span>
                        </div>
                        <div className="skillItem">
                            <img src={ts} alt="typescript"></img>
                            <span>Typescript</span>
                        </div>
                    </div>
                </div>
                <div className="skillsBodyRight">
                    <div className="skillsBodyRightHeader">Development Tools</div>
                    <div className="skillsBodyRightItems">
                        <div className="skillItem">
                            <img src={git} alt="git"></img>
                            <span>Git</span>
                        </div>
                        <div className="skillItem">
                            <img src={webpack} alt="webpack"></img>
                            <span>Webpack</span>
                        </div>
                        <div className="skillItem">
                            <img src={jest} alt="jest"></img>
                            <span>Jest</span>
                        </div>
                        <div className="skillItem">
                            <img src={github} alt="github"></img>
                            <span>Github</span>
                        </div>
                        <div className="skillItem">
                            <img src={linux} alt="linux"></img>
                            <span>Linux</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;