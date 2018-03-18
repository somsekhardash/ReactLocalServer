import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import HeaderBanner from './../../ssrMolecule/headerBanner/index.js';
import Header from './../../organism/header/index.js';
import Experience from './../../organism/experience/index';
import Portfolio from './../../organism/portfolio/index';
import Testimonials from './../../organism/testimonials/index';
import Services from './../../organism/services/index';

import {headerStoreObj} from './../../stores/header';

import MainForm from './../../form/index';


require('../../../styles/vender/bootstrap/index.css');

export default class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.dispatch(getNavData("headerApiUrl"));
        // this.props.dispatch(getPortData("portfolioUrl"));
        // this.props.dispatch(getServiceData("serviceUrl"));
        console.log(headerStoreObj);
        headerStoreObj.getNavData();
        console.log(headerStoreObj);
        debugger;
        
    }

    render() {
        console.log(headerStoreObj);
        return <div className="container">
            <h2>som </h2>
            {/* <Header appState={appState}></Header> */}
            {/* <HeaderBanner></HeaderBanner> -comes from ssr*/}
            {/* <Experience></Experience>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Services></Services> */}
            {/* <MainForm></MainForm> */}
            {/* <h2> som </h2> */}
        </div>;
    }
}

Container.defaultProps = {
}

Container.propTypes = {
}


