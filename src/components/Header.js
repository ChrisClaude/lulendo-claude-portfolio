import React, {Component} from 'react';
import NavBar from "./NavBar";
import PropTypes from "prop-types";

class Header extends Component {

    render() {
        return (
            <header>
                <NavBar />
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