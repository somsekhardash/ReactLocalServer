import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { prototype } from 'stream';

import SectionTitle from './../../molecule/sectionTitle/index';
import ExperienceItem from './../../molecule/experienceItem/index';
//import * as asd from ''

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <section className="section-space-padding">
        <div className="container">
           <div className="row">
                <div className="col-sm-12">
                   <SectionTitle title="My Experience." desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit"></SectionTitle>
                </div>
            </div>
            
            <div className="row">
            
            <div className="col-md-6 col-sm-6">
				<div className="experience">
                    <ExperienceItem></ExperienceItem>
                    <ExperienceItem></ExperienceItem>
                    <ExperienceItem></ExperienceItem>
			    </div>
			</div>

			<div className="col-md-6 col-sm-6">
				<div className="experience">
                    <ExperienceItem></ExperienceItem>
                    <ExperienceItem></ExperienceItem>
                    <ExperienceItem></ExperienceItem>
			    </div>
			</div>
            
           </div>
        </div>
    </section>
    }
}


Experience.defaultProps={

}

Experience.propTypes={
    
}

