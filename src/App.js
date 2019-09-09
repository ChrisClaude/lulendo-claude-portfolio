import React, {Component} from 'react';
import M from 'materialize-css';
import black_panther_developer from './img/black_man_software_developer.jpg';
import work_discipline from './img/work_discipline_IT.jpg';
import codes_img from './img/codes_at_work_.jpg';
import silicon_valley from './img/sillicon_valley.jpg';
import java_logo from './img/java_logo.png';
import python_logo from './img/pylogo.png';
import php_logo from './img/php_logo.png';

class App extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let options = {
                indicators: false,
                height: 500,
                transaction: 500,
                interval: 6000
            };
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, options);
        });
    }

    render() {
        let style = {display: "grid", gridTemplateColumns: "auto", gridTemplateRows: "5rem auto", height: "100%", overflow:"hidden"};
        let centerImage = {margin: "auto"};
        return (
            <div>
                {/*NavBar*/}
                <nav className="white">
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo custom-black-text">Lulendo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" className="custom-black-text">Home</a></li>
                            <li><a href="#" className="custom-black-text">My creations</a></li>
                            <li><a href="#" className="custom-black-text">About me</a></li>
                            <li><a href="#" className="custom-black-text">Get in touch</a></li>
                        </ul>
                    </div>
                </nav>
                {/*Preloader*/}
                <section className="container" style={{display: "none"}}>
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"/>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"/>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Slider*/}
                <section className="slider">
                    <ul className="slides">
                        <li>
                            <img src={black_panther_developer} alt="black panther developer"/>
                            <div className="caption center-align">
                                <h3>Lulendo, My Professional Brand</h3>
                                <h5 className="light grey-text text-lighten-3">Claude Chris, the mastermind behind
                                    Lulendo</h5>
                            </div>
                        </li>
                        <li>
                            <img src={work_discipline} alt="work discipline"/>
                            <div className="caption left-align">
                                <h3>Competitive Business</h3>
                                <h5 className="light grey-text text-lighten-2">We work to make your business
                                    competitive</h5>
                            </div>
                        </li>
                        <li>
                            <img src={codes_img} alt=""/>
                            <div className="caption right-align">
                                <h3>Quality Software Engineering</h3>
                                <h5 className="light grey-text text-lighten-3">We offer you our skill at a reasonable
                                    cost</h5>
                            </div>
                        </li>
                        <li>
                            <img src={silicon_valley} alt="my image"/>
                            <div className="caption center-align">
                                <h3>Start Now</h3>
                                <h5 className="light grey-text text-lighten-3">We'll respond in no time!</h5>
                                <a className="waves-effect waves-light btn-large">Contact us</a>
                            </div>
                        </li>
                    </ul>
                </section>
                {/*Display Language Proficiency*/}
                <section className="container" style={{width: "100%", height: "55vh"}}>
                    <h3 className="center-align">Language Proficiency</h3>
                    <div className="row" style={{width: "100%", height: "100%", overflow: "hidden"}}>
                        <div className="col s4" style={style}>
                            <h4 className="center-align">Java</h4>
                            <img src={java_logo} alt="Java Logo" className="responsive-img" style={centerImage} />
                        </div>
                        <div className="col s4" style={style}>
                            <h4 className="center-align">Python</h4>
                            <img src={python_logo} alt="Python Logo" className="responsive-img" style={centerImage} />
                        </div>
                        <div className="col s4" style={style}>
                            <h4 className="center-align">PHP</h4>
                            <img src={php_logo} alt="PHP Logo" className="responsive-img"  style={centerImage}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default App;
