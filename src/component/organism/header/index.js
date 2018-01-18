import React from 'react';
import { render } from 'react-dom';

require('../../../styles/component/header/index.less');

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <header id="home">

            <div className="header-top-area">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="index-2.html">WebRes</a>
                            </div>
                        </div>

                        <div className="col-sm-9">
                            <div className="navigation-menu">
                                <div className="navbar">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li className="active"><a className="smoth-scroll" href="#home">Home <div className="ripple-wrapper"></div></a>
                                            </li>
                                            <li><a className="smoth-scroll" href="#about">About</a>
                                            </li>
                                            <li><a className="smoth-scroll" href="#portfolio">Portfolio</a>
                                            </li>
                                            <li><a className="smoth-scroll" href="#testimonials">Testimonial</a>
                                            </li>
                                            <li><a className="smoth-scroll" href="#services">services</a>
                                            </li>
                                            <li><a className="smoth-scroll" href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>;
    }
}
