import React from 'react';
import { render } from 'react-dom';
import {connect} from "react-redux";
import SectionTitle from './../../molecule/sectionTitle/index';
import OwlCarousel from 'react-owl-carousel';
import'./../../../styles/vender/owlCarousel/index.css';
 
class Testimonials extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const options = {
            items: 1,
            loop: true,
            dots: false
        };
          
        return <section id="testimonials" className="testimonial-section section-space-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle title="Testimonials." desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit." ></SectionTitle>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
                                <div className="testimonial-carousel-list margin-top-20 owl-carousel owl-theme">
                                    <div className="owl-wrapper-outer autoHeight">
                                        <OwlCarousel ref="car" {...options}>
                                            <div className="testimonial-word text-center owl-item">
                                                <img src="https://demos.onepagelove.com/html/webres/images/testimonial/3.png" className="img-responsive" alt=""/>
                                                <h2>John doe</h2>
                                                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisauteiruredolor in reprehenderit in voluptate.</p>
                                            </div>
                                            <div className="testimonial-word text-center owl-item">
                                                <img src="https://demos.onepagelove.com/html/webres/images/testimonial/3.png" className="img-responsive" alt=""/>
                                                <h2>John doe</h2>
                                                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisauteiruredolor in reprehenderit in voluptate.</p>
                                            </div>
                                            <div className="testimonial-word text-center owl-item">
                                                <img src="https://demos.onepagelove.com/html/webres/images/testimonial/3.png" className="img-responsive" alt=""/>
                                                <h2>John doe</h2>
                                                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisauteiruredolor in reprehenderit in voluptate.</p>
                                            </div>
                                        </OwlCarousel>
                                        <div className="owl-controls clickable">
                                            <div className="owl-buttons">
                                                <div className="owl-prev" onClick={() => this.refs.car.prev()}>
                                                    <i className="fa fa-long-arrow-left fa-2x owl-navi"></i>
                                                </div>
                                                <div className="owl-next" onClick={() => this.refs.car.next()}>
                                                    <i className="fa fa-long-arrow-right fa-2x owl-navi"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default connect(mapStateToProps)(Testimonials);