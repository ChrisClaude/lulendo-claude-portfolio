import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NavBar extends Component {

    state = {
        mobileNavClass: "mobile-nav hidden"
    };

    handleLogoIconClick = () => {
        const {mobileNavClass} = this.state;
        let css = mobileNavClass.indexOf("show") > -1 ? mobileNavClass.replace("show", "hidden")
            : mobileNavClass.replace("hidden", "show");

        this.setState({mobileNavClass: css});
    };

    render() {
        return (
            <Fragment>
                <nav>
                    <div id="logo" onClick={this.handleLogoIconClick}>
                        <FontAwesomeIcon icon="bars" style={{fontSize: "1.3rem"}}/>
                    </div>
                    <ul>
                        <li><Link to="/" className="nav-links">Home</Link></li>
                        <li><Link to="/about" className="nav-links">About</Link></li>
                        <li><Link to="/services" className="nav-links">Services</Link></li>
                    </ul>
                </nav>
                <div className={this.state.mobileNavClass}>
                    <ul>
                        <li className="text-center"><Link to="/" className="nav-links">Home</Link></li>
                        <li className="text-center"><Link to="/about" className="nav-links">About</Link></li>
                        <li className="text-center"><Link to="/services" className="nav-links">Services</Link></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default NavBar;