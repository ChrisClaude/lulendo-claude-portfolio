import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import {library} from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faBars, faDownload, faPaperPlane} from '@fortawesome/free-solid-svg-icons';


import Header from "./components/Header";
import "./App.css";
import Content from "./components/Content";
import About from "./views/About/About";
import Services from "./views/Services/Services";
import Footer from "./components/Footer";

library.add(fab, faBars, faDownload, faPaperPlane);

class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/" render={ props => (
                            <Content/>
                        )}/>
                    </Switch>
                </Router>
                <Footer/>
            </Fragment>
        );
    }

}

export default App;
