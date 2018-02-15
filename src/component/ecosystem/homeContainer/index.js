import React from 'react';
import {render} from 'react-dom';
import {connect} from "react-redux";
import Header from './../../organism/header/index.js';
import Experience from './../../organism/experience/index';
import HeaderBanner from './../../molecule/headerBanner/index.js';
import config from './../../../config.js';
import PropTypes from 'prop-types';
import Portfolio from './../../organism/portfolio/index';
import MainForm from './../../form/index';
import { bindActionCreators } from 'redux';
import { getNavData, getPortData } from '../../../actions/index';


require('../../../styles/vender/bootstrap/index.css');

class Container extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount (){
            this.props.dispatch(getNavData("headerApiUrl"));
            this.props.dispatch(getPortData("portfolioUrl"));
           
    }
    componentDidCatch(error, info) {
        
        /* Example stack information:
           in ComponentThatThrows (created by App)
           in ErrorBoundary (created by App)
           in div (created by App)
           in App
        */
        logComponentStackToMyService(info.componentStack);
      }

    render () {
        return <div className="container">
                    {/* <Header></Header>
                    <HeaderBanner></HeaderBanner>
                    <Experience></Experience> */}
                    
                    
                    <Portfolio></Portfolio>
                    
                    <MainForm></MainForm>
            </div>;
    }
}
  
Container.defaultProps = {  
}

Container.propTypes={
}


let mapDispatchToProps = (dispatch) => {
    return {
       actions: bindActionCreators(getNavData,getPortData,dispatch)
    }
}

export default connect(mapDispatchToProps)(Container);

