import React from 'react';
import {render} from 'react-dom';
import Header from './../../organism/header/index.js';
import HeaderBanner from './../../molecule/headerBanner/index.js';
import config from './../../../config.js';
import PropTypes from 'prop-types';
// import * as actions from "./../../../actions/index";

require('../../../styles/vender/bootstrap/index.css');

export default class Container extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // axios.get(config.headerApiUrl)
        // .then((response) => {
        //     this.setState({
        //         headerData: response.data
        //     })
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
        debugger;
        // this.props.loadData();
        // componentDidMount() {
            this.props.actions.getNavData();
        
    }

    render () {
        return <div className="container">
                    <Header title={this.props.headerData.title} navItems={this.props.headerData.nav}></Header>
                    <HeaderBanner></HeaderBanner>
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