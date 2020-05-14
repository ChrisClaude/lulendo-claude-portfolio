import React, {Component} from 'react';
import PropTypes from "prop-types";

class Announcement extends Component {
    state = {
        style: "text-center show"
    };

    render() {
        return (
            <div className={this.state.style} id="ann-box">
                <span>{this.props.message}</span>
                <a id="ann-box-btn" href="https://cchris.netlify.app">Go</a>
            </div>
        );
    }
}

Announcement.propTypes = {
    message: PropTypes.string.isRequired
};

export default Announcement;