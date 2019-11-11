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
                <div>
                    <h3>Claude De-Tchambila</h3>
                    <h4>Software Developer</h4>
                    <div>
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                        <FontAwesomeIcon icon={['fab', 'github-square']}/>
                        <FontAwesomeIcon icon={['fab', 'twitter-square']}/>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']}/>
                    </div>
                    <p>I am a software developer that specializes in Python/Django. I also work on .NET Core with C# to
                        mainly
                        develop web and mobile apps.</p>
                    <div className="skills-box">
                        <h3>SKILLS & PROJECTS</h3>
                        <div className="skill-set">
                            <div className="skill-language">
                                <FontAwesomeIcon icon={['fab', 'python']} className="ic-lang"/>
                                <h4>Python</h4>
                            </div>
                            <div className="skill-language">
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4>JavaScript</h4>
                            </div>
                            <div className="skill-language">
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4>C#</h4>
                            </div>
                            <div className="skill-language">
                                <FontAwesomeIcon icon={['fab', 'java']} className="ic-lang"/>
                                <h4>Java</h4>
                            </div>
                        </div>
                        <a href="https://drive.google.com/uc?authuser=0&id=1MrHNZjn2zPfwtQuJji8FfhdxW0-p3qpv&export=download"
                           className="btn btn-primary" >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;