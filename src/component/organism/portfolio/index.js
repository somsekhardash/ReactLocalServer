import React from 'react';
import { render } from 'react-dom';
import ProtItem from './../../molecule/portItem/index';
import ProtFilter from './../../molecule/portFilter/index';
import _ from 'lodash';

export default class Portfolio extends React.Component {
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
                return  <ProtItem key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
            });
        }
    }
    
    makeFilterData() {
        debugger;
        _.uniqBy(this.props.portData.portfolio.items, 'grp'); 
    }

    render() {
        return <div> {this.makeFilterData()} 
            {this.makePortData()}
        </div>;
    }

}

