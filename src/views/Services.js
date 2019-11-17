import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Services extends Component {
    render() {
        return (
            <div className="services-section">
                <div className="inner-width">
                    <h1 className="section-title">Our Services</h1>
                    <div className="border"/>
                    <div className="services-container">

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon="paint-brush" className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Web Designs</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon="code" className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Web Development</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon="brush" className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Responsive Designs</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon="object-ungroup" className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Edit Sections</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon="database" className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Databases</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>

                        <div className="service-box">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={['fab', 'android']} className="service-icon-awesome"/>
                            </div>
                            <div className="service-title">Android</div>
                            <div className="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro,
                                nihil.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;