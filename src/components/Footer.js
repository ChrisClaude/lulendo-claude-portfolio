import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="default-hor-padding">
                <ul className="bottom-links">
                    <li><Link to="articles" className="navlinks def-color">CREATIVE CLAUDE</Link></li>
                    <li><Link to="/about" className="navlinks def-color">ABOUT</Link></li>
                    <li><Link to="/contact" className="navlinks def-color">CONTACT US</Link></li>
                    <li><Link to="/services" className="navlinks def-color">SERVICES</Link></li>
                </ul>
                <div className="copyright text-center">&copy; 2019, made with
                    <svg>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                     by Claude Christ
                </div>
            </footer>
        );
    }
}

export default Footer;