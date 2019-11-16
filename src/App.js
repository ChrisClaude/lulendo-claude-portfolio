import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faBars, faDownload, faPaperPlane, faTimes} from '@fortawesome/free-solid-svg-icons';


import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import About from "./views/About";
import Services from "./views/Services";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import Articles from "./views/Articles";

library.add(fab, faBars, faDownload, faPaperPlane, faTimes);

class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/articles" component={Articles}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/" render={ props => (
                            <Content/>
                        )}/>
                    </Switch>
                    <Footer/>
                </Router>
            </Fragment>
        );
    }

}

export default App;
