import React from 'react';
import { render } from 'react-dom';
import { makeFilter } from '../../../actions/index';

export default class ProtFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    makeFilter(grp){
        this.props.makeFilter(grp);
    }

    getDataFilters() {
        if (!!this.props.dataFilters)
            return this.props.dataFilters.map((item, i) => {
                return <li
                    className="filter"
                    key={i}
                    data-filter={item.grp} 
                    onClick={this.makeFilter(item.grp)}>
                    {item.grp}
                </li>
            });
    }


    render() {
        return <ul className="portfolio">
            <li className="filter active" data-filter="all">all</li>
            {this.getDataFilters()}
        </ul>

    }
}
