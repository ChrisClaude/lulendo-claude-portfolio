import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import NavBar from "./components/Layout/NavBar";
import "./App.css";
import Content from "./components/Layout/Content";
import About from "./components/pages/About";
import Services from "./components/pages/Services";

library.add(faBars);

class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/" render={ props => (
                            <Content/>
                        )}/>
                    </Switch>
                </Router>
            </Fragment>
        );
    }

}

export default App;
