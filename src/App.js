import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faBars,
    faBrush,
    faCode,
    faDatabase,
    faDownload,
    faObjectUngroup,
    faPaintBrush,
    faPaperPlane,
    faTimes
} from '@fortawesome/free-solid-svg-icons';


import Header from "./components/Header";
import Announcement from "./components/Announcement";
import "./App.css";
import Content from "./components/Content";
import About from "./views/About";
import Services from "./views/Services";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import Articles from "./views/Articles";
import NavBar from "./components/NavBar";

library.add(fab, faBars, faDownload, faPaperPlane, faTimes, faPaintBrush, faCode, faObjectUngroup, faBrush, faDatabase);

class App extends Component {

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
        const announcement = "This website is still in development, Please contact christ.tchambila@gmail.com";
        return (
            <Fragment>
                <Router>
                   <Announcement message={announcement} />
                    <Switch>
                        <Route exact path="/articles" component={Articles}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" render={props => (
                            <Fragment>
                                <NavBar OnNavClicks={this.handleNavClicks} navIcon={this.state.navIcon} phoneLinks={this.state.phoneLinks}/>
                                <Services/>
                            </Fragment>
                        )}/>
                        <Route exact path="/" render={props => (
                            <Fragment>
                                <Header OnNavClicks={this.handleNavClicks} navIcon={this.state.navIcon} phoneLinks={this.state.phoneLinks}/>
                                <Content/>
                            </Fragment>
                        )}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Fragment>
        );
    }

}

export default App;
