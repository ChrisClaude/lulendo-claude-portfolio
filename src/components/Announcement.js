import React, {Component} from 'react';
import PropTypes from "prop-types";

class Announcement extends Component {
    state = {
        style: "text-center show"
    };

    handleOnClick = () => {
        let style = this.state.style;
        style = style.search("show") > -1 ? "text-center hide" : "text-center show";
        this.setState({style});
    };

    render() {
        return (
            <div className={this.state.style} id="ann-box">
                <span>{this.props.message}</span>
                <button id="ann-box-btn" onClick={this.handleOnClick}>OK</button>
            </div>
        );
    }
}

Announcement.propTypes = {
    message: PropTypes.string.isRequired
};

export default Announcement;