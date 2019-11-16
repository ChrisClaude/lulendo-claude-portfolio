import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {

    state = {
        phoneLinks: "phone-links close",
        navIcon: "bars"
    };

    handleNavClicks = () => {
        let phoneLinks = this.state.phoneLinks;
        let navIcon = this.state.navIcon;
        navIcon = navIcon.search("bars") > -1 ? "times" : "bars";
        phoneLinks = phoneLinks.search("close") > -1 ? "phone-links open" : "phone-links close";
        this.setState({phoneLinks, navIcon});
    };

    render() {
        return (
            <header>
                <nav>
                    <Link to="/" className="navlinks" id="brand">Lulendo</Link>
                    <div>
                        <button className="icon-button" onClick={this.handleNavClicks}><FontAwesomeIcon icon={this.state.navIcon}/></button>
                    </div>
                    <ul className="hide">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                </nav>
                <div className={this.state.phoneLinks}>
                    <ul>
                        <li><Link to="/services" className="navlinks">Services</Link></li>
                        <li><Link to="/about" className="navlinks">About</Link></li>
                        <li><Link to="/contact" className="navlinks">Contact</Link></li>
                        <li><Link to="/articles" className="navlinks">Articles</Link></li>
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