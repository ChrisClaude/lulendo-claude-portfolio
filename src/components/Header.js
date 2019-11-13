import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <button className="icon-button"><FontAwesomeIcon icon="bars"/></button>
                    <div>
                        <Link to="/" className="navlinks">Lulendo</Link>
                    </div>
                    <ul className="hidden">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                </nav>
                <div className="headlines">
                    <h1>Software Development<span>Lulendo.</span></h1>
                    <p>Lulendo Technologies is the brand name under which <Link to="/about" style={{color: "#FFFFFF"}} >Claude Christ</Link> produces Software</p>
                </div>
            </header>
        );
    }
}

export default Header;