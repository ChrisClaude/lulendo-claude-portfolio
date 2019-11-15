import React, {Component} from 'react';
import claude_pic from "./../assets/img/claudes_pic2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import chsarp from "./../assets/img/c-sharp.svg";
import black_man from "./../assets/img/black_man_software_developer.jpg";

class Content extends Component {

    state = {
        langClass: [{label: "skills-lang text-center selected", project: ""},
            {label: "skills-lang text-center", project: "hidden"},
            {label: "skills-lang text-center", project: "hidden"},
            {label: "skills-lang text-center", project: "hidden"}]
    };

    handleLanguageClick = (e) => {
        switch (e.target.id) {
            case "python":
                this.toggleClass(0);
                break;
            case "javascript":
                this.toggleClass(1);
                break;
            case "csharp":
                this.toggleClass(2);
                break;
            case "java":
                this.toggleClass(3);
                break;
            default:
                return;
        }
    };

    toggleClass(idNum) {
        let langClass = this.state.langClass;
        const size = langClass.length;
        for (let i = 0; i < size; i++) {
            if (i === idNum) {
                langClass[i].label = "skills-lang text-center selected";
                langClass[i].project = "";
                continue;
            }
            langClass[i].label = "skills-lang text-center";
            langClass[i].project = "hidden";
        }
        this.setState(langClass);
    }

    render() {
        return (
            <section className="content">
                <div className="image-box">
                    <img src={claude_pic} alt="Claude Christ's pic" className="round-pic"/>
                </div>
                <div className="resume">
                    <h3 className="text-center">Claude De-Tchambila</h3>
                    <h4 className="text-center">Software Developer</h4>
                    <div className="social-icons-box">
                        <a href="https://www.linkedin.com/in/claude-christ-de-tchambila-a720ba143/"
                           className="social-ic-btn"><FontAwesomeIcon icon={['fab', 'linkedin-in']}
                                                                      className="social-icons"/></a>
                        <a href="https://github.com/ChClaude" className="social-ic-btn"><FontAwesomeIcon
                            icon={['fab', 'github']} className="social-icons"/></a>
                        <a href="https://twitter.com/ClaudeChrist_DT" className="social-ic-btn"><FontAwesomeIcon
                            icon={['fab', 'twitter']} className="social-icons"/></a>
                    </div>
                    <p>I am a software developer that specializes in Python/Django. I also work on .NET Core with C# to
                        mainly develop web and mobile apps.</p>
                    <div className="skills-box">
                        <h3 className="text-center">SKILLS & PROJECTS</h3>
                        <div className="skills-set">
                            <div className={this.state.langClass[0].label}>
                                <FontAwesomeIcon icon={['fab', 'python']} className="ic-lang"/>
                                <h4 id="python" onClick={this.handleLanguageClick}>Python</h4>
                            </div>
                            <div className={this.state.langClass[1].label}>
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4 id="javascript" onClick={this.handleLanguageClick}>JavaScript</h4>
                            </div>
                            <div className={this.state.langClass[2].label}>
                                <img src={chsarp} alt="c# logo" className="ic-lang"
                                     style={{maxWidth: 55, maxHeight: 55}}/>
                                <h4 id="csharp" onClick={this.handleLanguageClick}>C#</h4>
                            </div>
                            <div className={this.state.langClass[3].label}>
                                <FontAwesomeIcon icon={['fab', 'java']} className="ic-lang" id="java-ic"/>
                                <h4 id="java" onClick={this.handleLanguageClick}>Java</h4>
                            </div>
                        </div>
                        <div className="gallery">
                            <div id="python-prj" className={this.state.langClass[0].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={black_man} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">Lead Manager</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This is a lead manager web app built with Django</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://chclaude.pythonanywhere.com/" target="_blank"
                                                        rel="noopener noreferrer">Click here to visit the website</a>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <img src={black_man} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">Mission Amei</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This is website that I wrote for
                                        a NGO namely Mission AMEI, built with Django</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://www.missionmaei.org/" target="_blank"
                                                        rel="noopener noreferrer">Click here to visit the website</a>
                                    </div>
                                </div>
                            </div>
                            <div id="javascript-prj" className={this.state.langClass[1].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={black_man} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">Lulendo Portfolio</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This current website was made by me with React js</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://www.missionmaei.org/" target="_blank"
                                                        rel="noopener noreferrer">Click here to see the source code</a>
                                    </div>
                                </div>
                            </div>
                            <div id="csharp-prj" className={this.state.langClass[2].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={black_man} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">ContosoCrafts</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This is website that I built on .Net Core
                                        to list crafts coming from a json service file</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://www.missionmaei.org/" target="_blank"
                                                        rel="noopener noreferrer">Click here to visit the website</a>
                                    </div>
                                </div>
                            </div>
                            <div id="java-prj" className={this.state.langClass[3].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={black_man} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">Car Management App</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This is a desktop app that I built as part of an assignment</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://github.com/ChClaude/CarAgencyManagementApp"
                                                        target="_blank" rel="noopener noreferrer">Click here to visit
                                        the website</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <h3 className="text-center">EDUCATION</h3>
                        <i>2018 - 2021</i> - <span>Bachelor of Technology in Application Development</span>
                        <p><a href="https://www.cput.ac.za/" target="_blank" rel="noopener noreferrer">Cape Peninsula
                            University of Technology</a></p>
                    </div>
                    <div>
                        <a href="https://drive.google.com/uc?authuser=0&id=1MrHNZjn2zPfwtQuJji8FfhdxW0-p3qpv&export=download"
                           className="btn btn-primary default-ver-margin">
                            <FontAwesomeIcon icon="download"/> Download Resume
                        </a>
                    </div>
                </div>
                {/*CONTACT*/}
                <div className="contact">
                    <div className="form-card"/>
                    <div className="form-card">
                        <h3 className="text-center" id="contact">CONTACT</h3>
                        <p className="text-center">We'll respond in less than 48h</p>
                        <form className="go-bottom" name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                            <div>
                                <input type="text" name="name" id="name" required/>
                                <label htmlFor="name">First name...</label>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" required/>
                                <label htmlFor="email">Email...</label>
                            </div>
                            <div>
                                <textarea name="message" id="message" required />
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                                <div data-netlify-recaptcha="true" />
                            </div>
                            <div className="form-btns">
                                <button className="btn btn-primary" type="submit"><FontAwesomeIcon
                                    style={{marginRight: "3px", fontSize: "16px"}} icon="paper-plane"/>Send
                                </button>
                                <button className="btn btn-primary" type="reset">Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="fixed">
                    <a href="#contact"><FontAwesomeIcon icon="paper-plane" id="fixed-icon"/></a>
                    <span className="tooltiptext">Contact us</span>
                </div>
            </section>
        );
    }
}

export default Content;