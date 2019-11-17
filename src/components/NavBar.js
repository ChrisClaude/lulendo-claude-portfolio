import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <nav>
                    <Link to="/" className="navlinks" id="brand">Lulendo</Link>
                    <div>
                        <button className="icon-button" onClick={this.props.OnNavClicks}><FontAwesomeIcon
                            icon={this.props.navIcon}/></button>
                    </div>
                    <ul className="hide">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                </nav>
                <div className={this.props.phoneLinks}>
                    <ul>
                        <li><Link to="/services" className="navlinks">Services</Link></li>
                        <li><Link to="/about" className="navlinks">About</Link></li>
                        <li><Link to="/contact" className="navlinks">Contact</Link></li>
                        <li><Link to="/articles" className="navlinks">Articles</Link></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

NavBar.propTypes = {
    OnNavClicks: PropTypes.func.isRequired,
    navIcon: PropTypes.string.isRequired,
    phoneLinks: PropTypes.string.isRequired
};

export default NavBar;