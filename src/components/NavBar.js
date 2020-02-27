import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavBar extends Component {

    state = {
        phoneLinks: "phone-links close",
        // phoneLinks: "phone-links",
    };


    handleNavClicks = () => {
        let phoneLinks = this.state.phoneLinks;
        phoneLinks = phoneLinks.search("close") > -1 ? "phone-links open" : "phone-links close";
        this.setState({phoneLinks});
    };

    render() {
        return (
            <nav>
                <Link to="/" className="navlinks" id="brand">Lulendo</Link>
                <div>
                    <button className="icon-button" onClick={this.handleNavClicks}><FontAwesomeIcon
                        icon="bars"/></button>
                </div>
                <div className={this.state.phoneLinks}>
                    <span className="times-icon" onClick={this.handleNavClicks}><FontAwesomeIcon icon="times"/></span>
                    <ul>
                        <li><Link to="/services" className="navlinks">Services</Link></li>
                        <li><Link to="/about" className="navlinks">About</Link></li>
                        <li><Link to="/contact" className="navlinks">Contact</Link></li>
                        <li><Link to="/articles" className="navlinks">Articles</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;