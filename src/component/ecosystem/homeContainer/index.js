import React from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import Header from './../../organism/header/index.js';
import Experience from './../../organism/experience/index';
import HeaderBanner from './../../ssrMolecule/headerBanner/index.js';
import config from './../../../config.js';
import PropTypes from 'prop-types';
import Portfolio from './../../organism/portfolio/index';
import Testimonials from './../../organism/testimonials/index';
import MainForm from './../../form/index';
import Services from './../../organism/services/index';
import { bindActionCreators } from 'redux';
import { getNavData, getPortData,getServiceData } from '../../../actions/index';


require('../../../styles/vender/bootstrap/index.css');

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getNavData("headerApiUrl"));
        this.props.dispatch(getPortData("portfolioUrl"));
        this.props.dispatch(getServiceData("serviceUrl"));
    }

    render() {
        return <div className="container">
            <Header></Header>
            {/* <HeaderBanner></HeaderBanner> -comes from ssr*/}
            <Experience></Experience>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Services></Services>
            {/* <MainForm></MainForm> */}
        </div>;
    }
}

Container.defaultProps = {
}

Container.propTypes = {
}

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(getNavData, getPortData,getServiceData, dispatch)
    }
}

export default connect(mapDispatchToProps)(Container);

