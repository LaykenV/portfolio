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
import formik from "../images/icons8-google-forms.svg";
import MUI from "../images/icons8-material-ui.svg";
import AWS from "../images/icons8-amazon-web-services.svg";
import scrum from "../images/icons8-scrum-64.png";
import agile from "../images/icons8-agile-32.png";
import jira from "../images/icons8-jira.svg";
import styledComponents from "../images/icons8-styled-components-48.png";
import axios from "../images/icons8-axis-alignment-48.png";
import gitlab from "../images/icons8-gitlab.svg";
import router from "../images/icons8-router-50.png";
import storybook from "../images/icons8-storybook-64.png";
import yup from "../images/icons8-do-not-tilt-30.png";
import "./skills.css";


function Skills () {
    return (
        <div className="skillsDiv">
            <header className="skillsHeader">
                <div className="skillsAndLine">
                    <div className="skillsHeaderLeft">Skills</div>
                    <div className="skillsDividerLine"></div>
                </div>
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
                        <div className="skillItem">
                            <img src={scrum} alt="scrum"></img>
                            <span>Scrum</span>
                        </div>
                        <div className="skillItem">
                            <img src={agile} alt="agile"></img>
                            <span>Agile</span>
                        </div>
                    </div>
                </div>
                <div className="skillsBodyCenter">
                    <div className="skillsBodyLeftHeader">React Libraries</div>
                    <div className="skillsBodyLeftItems">
                        <div className="skillItem">
                            <img src={formik} alt="formik"></img>
                            <span>Formik</span>
                        </div>
                        <div className="skillItem">
                            <img src={yup} alt="yup"></img>
                            <span>Yup</span>
                        </div>
                        <div className="skillItem">
                            <img src={AWS} alt="aws amplify"></img>
                            <span>AWS Amplify</span>
                        </div>
                        <div className="skillItem">
                            <img src={styledComponents} alt="styled components"></img>
                            <span>Styled Component</span>
                        </div>
                        <div className="skillItem">
                            <img src={axios} alt="axios"></img>
                            <span>Axios</span>
                        </div>
                        <div className="skillItem">
                            <img src={router} alt="react router dom"></img>
                            <span>React Router Dom</span>
                        </div>
                        <div className="skillItem">
                            <img src={storybook} alt="storybook"></img>
                            <span>Storybook</span>
                        </div>
                        <div className="skillItem">
                            <img src={MUI} alt="Material UI"></img>
                            <span>Material UI</span>
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
                        <div className="skillItem">
                            <img src={jira} alt="Jira"></img>
                            <span>Jira</span>
                        </div>
                        <div className="skillItem">
                            <img src={gitlab} alt="Gitlab"></img>
                            <span>Gitlab</span>
                        </div>
                        <div className="skillItem">
                            <img src={AWS} alt="AWS Cognito"></img>
                            <span>Amazon Cognito</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;