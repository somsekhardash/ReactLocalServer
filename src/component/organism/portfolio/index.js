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
            uniQFilter: [],
            filterData: []
        }
        this.filterData=[];
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            filterData: nextProps.portData.portfolio.items,
            uniQFilter:  _.uniqBy(nextProps.portData.portfolio.items, 'grp')
        });
        this.filterData = nextProps.portData.portfolio.items;
    }

    makePortData() {
        debugger;
        if(!!this.state.filterData){
            return this.state.filterData.map((item,i) => {
                //return  <ProtItem actions={this.props.actions} fullData={this.state.filterData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
                return  <ProtItem actions={this.props.actions} fullData={this.state.filterData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
            });
        }
    }

    makeFilter(sads){
        debugger;
        if(sads != "all"){
        let temp = _.filter(this.filterData, function(data) {
            return data.grp === sads;
        });
        this.setState({
            filterData: temp
        });
        } else {
            this.setState({
                filterData: this.filterData
            });
        }
    }
    
    render() {
        return  <section id="portfolio" className="portfolio section-space-padding">
                    <div className="container">
                    <div className="col-md-2">
                        <ProtFilter 
                            makeFilter={this.makeFilter.bind(this)} 
                            dataFilters={ !!this.state.uniQFilter && this.state.uniQFilter}></ProtFilter>
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