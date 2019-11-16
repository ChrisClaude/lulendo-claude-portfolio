import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {

    state = {
        phoneLinks: "phone-links close"
    };

    handleNavClicks = () => {
        let phoneLinks = this.state.phoneLinks;
        phoneLinks = phoneLinks.search("close") > 0 ? "phone-links open" : "phone-links close";
        this.setState({phoneLinks});
    };

    render() {
        return (
            <header>
                <nav>
                    <Link to="/" className="navlinks" id="brand">Lulendo</Link>
                    <div>
                        <button className="icon-button" onClick={this.handleNavClicks}><FontAwesomeIcon icon="bars"/></button>
                    </div>
                    <ul className="hide">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                </nav>
                <div className={this.state.phoneLinks}>
                    <ul>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="headlines">
                    <h1>Software Development<span>Lulendo.</span></h1>
                    <p>Lulendo Technologies is the brand name under which <a href="#claude_christ"
                                                                             style={{color: "#FFFFFF"}}>Claude
                        Christ</a> produces Software</p>
                </div>
            </header>
        );
    }
}

export default Header;