import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { prototype } from 'stream';
require('./../../../styles/component/header/index.css');

//import * as asd from ''

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    getSubLinks(){
        if(!!this.props.navItems)
        return (
            this.props.navItems.map((item, i)=>(
                <li className="active" key={i}>
                    <a className="smoth-scroll" href={item}>{item}</a>
                </li>
            ))
        )
    }

    render() {
        return <header id="home">
            <div className="header-top-area">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="index-2.html">{this.props.title}</a>
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
                                            {this.getSubLinks()}
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


Header.defaultProps={
    navItems: [],
}

Header.propTypes={
    navItems: PropTypes.array
}

