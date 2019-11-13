import React, {Component} from 'react';
import claude_pic from "./../assets/img/claudes_pic2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Content extends Component {
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
                        <a href="https://www.linkedin.com/in/claude-christ-de-tchambila-a720ba143/" className="social-ic-btn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} className="social-icons"/></a>
                        <a href="https://github.com/ChClaude" className="social-ic-btn"><FontAwesomeIcon icon={['fab', 'github']} className="social-icons"/></a>
                        <a href="https://twitter.com/ClaudeChrist_DT" className="social-ic-btn"><FontAwesomeIcon icon={['fab', 'twitter']} className="social-icons"/></a>
                    </div>
                    <p>I am a software developer that specializes in Python/Django. I also work on .NET Core with C# to
                        mainly develop web and mobile apps.</p>
                    <div className="skills-box">
                        <h3 className="text-center">SKILLS & PROJECTS</h3>
                        <div className="skills-set">
                            <div className="skills-lang text-center">
                                <FontAwesomeIcon icon={['fab', 'python']} className="ic-lang"/>
                                <h4>Python</h4>
                            </div>
                            <div className="skills-lang text-center">
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4>JavaScript</h4>
                            </div>
                            <div className="skills-lang text-center">
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4>C#</h4>
                            </div>
                            <div className="skills-lang text-center">
                                <FontAwesomeIcon icon={['fab', 'java']} className="ic-lang"/>
                                <h4>Java</h4>
                            </div>
                        </div>
                        <a href="https://drive.google.com/uc?authuser=0&id=1MrHNZjn2zPfwtQuJji8FfhdxW0-p3qpv&export=download"
                           className="btn btn-primary default-ver-margin" >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;