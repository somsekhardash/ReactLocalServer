import React from 'react';
import { render } from 'react-dom';
import SectionTitle from './../../molecule/sectionTitle/index';
import { connect } from "react-redux";
import ServiceItem from "./../../molecule/serviceItem/index";
import'./../../../styles/vender/owlCarousel/index.css';
 
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            serviceData: []
        }
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            serviceData: nextProps.serviceData.service.items,
        });
    }

    makeServiceData() {
        if(!!this.state.serviceData){
            return this.state.serviceData.map((item,i) => {
                return  <ServiceItem item={item}></ServiceItem>
                // return  <ProtItem actions={this.props.actions} fullData={this.state.filterData} key={i} link={item.link} grp={item.grp} img={item.imgUrl}></ProtItem>
            });
        }
    }

    render() {
        return <section id="services" class="services-section section-space-padding">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">  
                        <SectionTitle title="My Services." desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit" ></SectionTitle>
                    </div>
                </div>
                {this.makeServiceData()}
            </div>
        </section>    
    }
}

let mapStateToProps = (state) => {
    return {
        serviceData: state.serviceReducer
    };
}

export default connect(mapStateToProps)(Services);