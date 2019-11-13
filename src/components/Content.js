import React, {Component} from 'react';
import claude_pic from "./../assets/img/claudes_pic2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                                <FontAwesomeIcon icon={['fab', 'js-square']} className="ic-lang"/>
                                <h4 id="csharp" onClick={this.handleLanguageClick}>C#</h4>
                            </div>
                            <div className={this.state.langClass[3].label} id="java">
                                <FontAwesomeIcon icon={['fab', 'java']} className="ic-lang" id="java-ic"/>
                                <h4 id="java" onClick={this.handleLanguageClick}>Java</h4>
                            </div>
                        </div>
                        <div className="gallery">
                            <div id="python-prj" className={this.state.langClass[0].project}>
                                Python
                            </div>
                            <div id="javascript-prj" className={this.state.langClass[1].project}>
                                JavaScript
                            </div>
                            <div id="csharp-prj" className={this.state.langClass[2].project}>
                                C#
                            </div>
                            <div id="java-prj" className={this.state.langClass[3].project}>
                                Java
                            </div>
                        </div>
                        <a href="https://drive.google.com/uc?authuser=0&id=1MrHNZjn2zPfwtQuJji8FfhdxW0-p3qpv&export=download"
                           className="btn btn-primary default-ver-margin">
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;