import React from 'react';
import { render } from 'react-dom';

export default class ProtItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <div className="col-md-4 col-sm-6 col-xs-12 mix apps" style="display: inline-block;" data-bound="">
                        <div className="item">
                            <a href={this.props.img} className="portfolio-popup" title="Project Title">
                                <img src={this.props.img} alt="" />
                            </a>
                        </div>
                    </div>
        
    }
}
