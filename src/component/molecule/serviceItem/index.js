import React from 'react';
import { render } from 'react-dom';

var ServiceItem = ({item}) => {
    return <div className="col-md-4 col-sm-6">
        <div className="services-detail">
            <i className={`icon-screen-${item.logo} color-1`}></i>
            <h3>{item.title}</h3>
        </div>
    </div>;
};

ServiceItem.propTypes = {
    item: React.propTypes
}
export default ServiceItem;


// import React from 'react';
// import { render } from 'react-dom';

// export default class SectionTitle extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return  <div className="section-title">
//             <h2>{this.props.title}</h2>
//             <div className="divider dark">
//             <i className="icon-graduation"></i>
//             </div>
//             <p>{this.props.desc}</p>
//         </div>
        
//     }
// }
