import React from 'react';

function App() {
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
            <section className="container">
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
        </div>
    );
}

export default App;
