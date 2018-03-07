import React from 'react';
import { render } from 'react-dom';

export default class ProtFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    makeFilter(event) {
        this.props.makeFilter(event.target.dataset.filter);
    }

    getDataFilters() {
        if (!!this.props.dataFilters)
            return this.props.dataFilters.map((item, i) => {
                return <li
                    className="filter"
                    key={i}
                    data-filter={item.grp}
                    onClick={this.makeFilter.bind(this)}>
                    {item.grp}
                </li>
            });
    }


    render() {
        return <ul className="portfolio">
            <li 
                className="filter active" 
                data-filter="all" 
                onClick={this.makeFilter.bind(this)}>all</li>
            {this.getDataFilters()}
        </ul>

    }
}
