import React from 'react';
import {render} from 'react-dom';
import Header from './../../organism/header/index.js';
import Experience from './../../organism/experience/index';
import HeaderBanner from './../../molecule/headerBanner/index.js';
import config from './../../../config.js';
import PropTypes from 'prop-types';
import Portfolio from './../../organism/portfolio/index';

require('../../../styles/vender/bootstrap/index.css');

export default class Container extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
            this.props.actions.getNavData("headerApiUrl");
           // this.props.actions.getNavData("portfolioUrl");
    }

    render () {
        return <div className="container">
                    <Header title={this.props.headerData.title} navItems={this.props.headerData.nav}></Header>
                    <HeaderBanner></HeaderBanner>
                    <Experience></Experience>
                    <Portfolio></Portfolio>
            </div>;
    }
}
  

Container.defaultProps = {  
}


Container.propTypes={
}

// const mapStateToProps =(state) => {
//     return {};
// };


// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadData:() => {
//             dispatch(actions.fetchNav)
//         }
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Container);