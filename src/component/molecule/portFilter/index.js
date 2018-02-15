import React from 'react';
import { render } from 'react-dom';
import { makeFilter } from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";


class ProtFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    getDataFilters(){
        if(!!this.props.dataFilters)
        return this.props.dataFilters.map((item,i)=>{
            return <li className="filter" key={i} data-filter={item.grp}>{item.grp}</li>
        });
    }

    render() {
        return  <ul className="portfolio">
            <li className="filter active" data-filter="all">all</li>
            {this.getDataFilters()} 
        </ul>
        
    }
}

//onClick={this.props.dispatch(makeFilter(item.grp))}

let mapDispatchToProps = (dispatch) => {
    return {
       actions: bindActionCreators(makeFilter,dispatch)
    }
}

export default connect(mapDispatchToProps)(ProtFilter);