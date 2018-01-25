import React from 'react';
import { render } from 'react-dom';

export default class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <div className="experience-item">
                <div className="experience-circle">
                    <i className="icon-trophy"></i> 
                    <p>8, Nov 2016</p>
                </div>
                <div className="experience-content experience-color-blue">
                    <h4>Diploma in Web Designing</h4>
                    <h6>Institute Name here</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend risus sed feugiat faucibus.</p>
                </div>
                </div>
    }
}


