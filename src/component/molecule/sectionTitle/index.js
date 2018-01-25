import React from 'react';
import { render } from 'react-dom';

export default class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <div className="section-title">
            <h2>My Experience.</h2>
            <div className="divider dark">
            <i className="icon-graduation"></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        
    }
}
