import React, {Component} from 'react';
import lead_manager from "./../assets/img/leadmanager_portfolio.PNG";
import mypic from "./../assets/img/mypic.jpeg";
import mission_amei from "./../assets/img/mission_amei_portfolio.PNG";
import lulendo_site from "./../assets/img/lulendo_site.PNG";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import chsarp from "./../assets/img/c-sharp.svg";
import black_man from "./../assets/img/black_man_software_developer.jpg";
import century_airlines from "./../assets/img/century_airlines.PNG";
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react';

const cards = [
    {
        avatar: '/images/avatar/large/helen.jpg',
        date: 'Joined in 2013',
        header: 'Helen',
        description: 'Primary Contact',
    },
    {
        avatar: '/images/avatar/large/matthew.png',
        date: 'Joined in 2013',
        header: 'Matthew',
        description: 'Primary Contact',
    },
    {
        avatar: '/images/avatar/large/molly.png',
        date: 'Joined in 2013',
        header: 'Molly',
        description: 'Primary Contact',
    },
];

class Content extends Component {
    state = {
        langClass: [{label: "skills-lang text-center selected", project: ""},
            {label: "skills-lang text-center", project: "hide"},
            {label: "skills-lang text-center", project: "hide"},
            {label: "skills-lang text-center", project: "hide"}],
        langValue: {id: "python", icon: "python", idNum: 0},
        loading: true
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
        let langClass = this.getLangClass(idNum);
        this.setState(langClass);
    }

    getLangClass(idNum) {
        let langClass = this.state.langClass;
        const size = langClass.length;
        for (let i = 0; i < size; i++) {
            if (i === idNum) {
                langClass[i].label = "skills-lang text-center selected";
                langClass[i].project = "";
                continue;
            }
            langClass[i].label = "skills-lang text-center";
            langClass[i].project = "hide";
        }
        return langClass;
    }

    handleNavGallery(directionNumber) {
        const id_ = this.state.langValue.id;
        let id;
        let icon;
        let idNum;
        if (directionNumber === 1) {
            if (id_ === "python") {
                id = "javascript";
                icon = "js-square";
                idNum = 1;
            } else if (id_ === "javascript") {
                id = "csharp";
                icon = "code";
                idNum = 2;
            } else if (id_ === "csharp") {
                id = "java";
                icon = "java";
                idNum = 3;
            } else if (id_ === "java") {
                id = "python";
                icon = "python";
                idNum = 0;
            }
        } else {
            if (id_ === "python") {
                id = "java";
                icon = "java";
                idNum = 3;
            } else if (id_ === "java") {
                id = "csharp";
                icon = "code";
                idNum = 2;
            } else if (id_ === "csharp") {
                id = "javascript";
                icon = "js-square";
                idNum = 1;
            } else if (id_ === "javascript") {
                id = "python";
                icon = "python";
                idNum = 0;
            }
        }

        let langClass = this.getLangClass(idNum);
        this.setState({langClass, langValue: {id, icon, idNum}});
    }

    render() {
        const {langClass, langValue, loading} = this.state;
        const prefix = langValue.icon === 'code' ? "fas" : "fab";

        return (
            <section className="content">
                <div className="image-box">
                    <img src={mypic} alt="Claude Christ's pic" id="claude_christ" className="round-pic"/>
                </div>
                <div className="resume">
                    <h3 className="text-center">Claude De-Tchambila</h3>
                    <h4 className="text-center">Software Developer</h4>
                    <div className="social-icons-box">
                        <a href="https://www.linkedin.com/in/claude-de-tchambila-a720ba143/"
                           className="social-ic-btn"><FontAwesomeIcon icon={['fab', 'linkedin-in']}
                                                                      className="social-icons"/></a>
                        <a href="https://github.com/ChClaude" className="social-ic-btn"><FontAwesomeIcon
                            icon={['fab', 'github']} className="social-icons"/></a>
                        <a href="https://twitter.com/ClaudeChrist_DT" className="social-ic-btn"><FontAwesomeIcon
                            icon={['fab', 'twitter']} className="social-icons"/></a>
                    </div>
                    <p>I am a software developer that specializes in Python/Django. I also work on .NET Core with C# to
                        develop web and mobile apps. I grow every day with the different development tasks that I face.
                        Also, my aim is
                        to develop as a software developer in order to build amazing software for the world.</p>
                    <div className="skills-box">
                        <h3 className="text-center">SKILLS & PROJECTS</h3>
                        <div className="click-through">
                            <button onClick={() => this.handleNavGallery(-1)}><FontAwesomeIcon
                                icon="arrow-alt-circle-left"/></button>
                            <span>Click through the gallery</span>
                            <button onClick={() => this.handleNavGallery(1)}><FontAwesomeIcon
                                icon="arrow-alt-circle-right"/></button>
                        </div>
                        <div className="skills-set-phone">
                            <button className={langClass[langValue.idNum].label}>
                                <FontAwesomeIcon icon={[prefix, langValue.icon]} className="ic-lang"/>
                                <h4 id={langValue.id}>{langValue.id.charAt(0).toUpperCase() + langValue.id.slice(1)}</h4>
                            </button>
                        </div>
                        <div className="skills-set">
                            <button id="python" className={langClass[0].label}  onClick={this.handleLanguageClick}>
                                <FontAwesomeIcon icon={['fab', 'python']} className="ic-lang"/>
                                <h4>Python</h4>
                            </button>
                            <button id="javascript" className={langClass[1].label} onClick={this.handleLanguageClick}>
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4>JavaScript</h4>
                            </button>
                            <button id="csharp" className={langClass[2].label} onClick={this.handleLanguageClick}>
                                <img src={chsarp} alt="c# logo" className="ic-lang"
                                     style={{maxWidth: 55, maxHeight: 55}}/>
                                <h4>C#</h4>
                            </button>
                            <button id="java" className={langClass[3].label} onClick={this.handleLanguageClick}>
                                <FontAwesomeIcon icon={['fab', 'java']} className="ic-lang" id="java-ic"/>
                                <h4>Java</h4>
                            </button>
                        </div>


                        <div className="gallery">
                            <div id="python-prj" className={langClass[0].project}>
                                <div className="card">
                                    <div className="card-header">
                                        {loading ? (
                                            <Placeholder style={{width: '100%'}}>
                                                <Placeholder.Image rectangular />
                                            </Placeholder>
                                        ) : (
                                            <Image src={lead_manager} />
                                        )}
                                        {/*<img src={lead_manager} alt="lead manager website"/>*/}
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
                                        <img src={mission_amei} alt="amei mission website"/>
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
                            <div id="javascript-prj" className={langClass[1].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={lulendo_site} alt="Lulendo site"/>
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
                            <div id="csharp-prj" className={langClass[2].project}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={century_airlines} alt="lead manager website"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="text-center">Century Airlines</h4>
                                        <b>Description:</b> <span style={{fontStyle: "italic"}}>This is a web app that I built on top of ASP.Net Core
                                        for flight bookings</span>
                                        <br/>
                                        <b>Link:</b> <a href="https://www.missionmaei.org/" target="_blank"
                                                        rel="noopener noreferrer">Click here to visit the website</a>
                                    </div>
                                </div>
                            </div>
                            <div id="java-prj" className={langClass[3].project}>
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
                        <div>
                            <p><i>2018 - 2020</i> - <span>Bachelor of Technology in Application Development</span></p>
                            <p><a href="https://www.cput.ac.za/" target="_blank" rel="noopener noreferrer">Cape
                                Peninsula
                                University of Technology</a></p>
                        </div>
                        <div>
                            <p><i>2015</i> - <span>Matric</span></p>
                            <p><a
                                href="https://www.facebook.com/pages/category/Elementary-School/Ecole-Priv%C3%A9e-Fernand-Nathan-688872191125422/"
                                target="_blank" rel="noopener noreferrer">Fernand Nathan</a></p>
                        </div>
                    </div>
                    <div className="download-btn">
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
                        <p className="text-center">Your message goes right to my email box</p>
                        <form className="go-bottom" name="contact" method="POST" data-netlify-recaptcha="true"
                              data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            <div>
                                <input type="text" name="name" id="name" required/>
                                <label htmlFor="name">First name...</label>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" required/>
                                <label htmlFor="email">Email...</label>
                            </div>
                            <div>
                                <textarea name="message" id="message" required/>
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                                <div data-netlify-recaptcha="true"/>
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