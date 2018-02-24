import React from 'react';
import { render } from 'react-dom';
import ProtItem from './../../molecule/portItem/index';
import ProtFilter from './../../molecule/portFilter/index';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import {connect} from "react-redux";

require('./../../../styles/component/footer/index.scss');

// require('./../../../styles/component/header/index.css');

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            uniQFilter: []
        }
    }

    makePortData() {
        if(!!this.props.portData.portfolio){
            let data = this.props.portData.portfolio.items;
            return data.map((item,i) => {
                return  <ProtItem actions={this.props.actions} fullData={this.props.portData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
            });
        }
    }

    makeFilter(sads){
        debugger;
    }
    
    render() {
        return  <section id="portfolio" className="portfolio section-space-padding">
                    <div className="container">
                    <div className="col-md-2">
                        <ProtFilter makeFilter={this.makeFilter.bind(this)} dataFilters={ !!this.props.portData.portfolio && _.uniqBy(this.props.portData.portfolio.items, 'grp')}></ProtFilter>
                    </div>   
                        {this.makePortData()}
                    </div>
                </section>
    }

}

let mapStateToProps = (state) => {
    return {
        portData: state.portReducer
    };
}

export default connect(mapStateToProps)(Portfolio);