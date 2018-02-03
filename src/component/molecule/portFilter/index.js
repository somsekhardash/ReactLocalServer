import React from 'react';
import { render } from 'react-dom';

export default class ProtFilter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <ul class="portfolio">
                    <li class="filter active" data-filter="all">all</li>
                    <li class="filter" data-filter=".apps">apps</li>
                    <li class="filter" data-filter=".mockups">mockups</li>
                    <li class="filter" data-filter=".wordpress">wordpress</li>
                </ul>
        
    }
}
