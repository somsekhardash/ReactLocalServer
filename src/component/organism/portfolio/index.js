import React from 'react';
import { render } from 'react-dom';
import ProtItem from './../../molecule/portItem/index';
import ProtFilter from './../../molecule/portFilter/index';
import _ from 'lodash';
import FlipMove from 'react-flip-move';
import {connect} from "react-redux";

import SectionTitle from './../../molecule/sectionTitle/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        if(!!this.state.filterData){
            return this.state.filterData.map((item,i) => {
                return  <ProtItem actions={this.props.actions} fullData={this.state.filterData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
            });
        }
    }

    makeFilter(sads){
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
                    <div className="row">
                    <SectionTitle title="My Portfolio." desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit" ></SectionTitle>
                    </div>
                        <div className="row"> 
                            <div className="col-md-2">
                                <ProtFilter 
                                    makeFilter={this.makeFilter.bind(this)} 
                                    dataFilters={ !!this.state.uniQFilter && this.state.uniQFilter}>
                                </ProtFilter>
                            </div>   
                            <div className="col-md-10">
                                <div className="portfolio-inner margin-top-30">
                                    <ReactCSSTransitionGroup
                                        transitionName="example"
                                        transitionEnterTimeout={500}
                                        transitionLeaveTimeout={300}>
                                        {this.makePortData()}
                                    </ReactCSSTransitionGroup>    
                                </div>
                            </div>
                        </div>
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