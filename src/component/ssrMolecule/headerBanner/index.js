import React from 'react';
import { render } from 'react-dom';

export default class HeaderBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return( 
        <section className="home-section">
        <div className="container">
        <div className="row">
        
         <div className="col-sm-offset-2 col-md-4 col-sm-6 margin-left-setting">
            <div className="margin-top-150">
                
             <div className="table-responsive">
                <table className="table">
                    <tbody><tr>
                        <td>Name</td>
                        <td>John Doe</td>
                     </tr>
                     <tr>
                        <td>Email</td>
                        <td>doe@domain.com</td>
                    </tr>
                    <tr>
                        <td>Designation</td>
                        <td>Web Designer</td>
                     </tr>
                    <tr>
                        <td>Experience</td>
                        <td>8 Years</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>1234567890</td>
                    </tr>
                    <tr>
                        <td>Resume</td>
                        <td><a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="" data-original-title="Check Out My Resume">Resume.pdf</a></td>
                    </tr>
                </tbody></table>
              </div>
             </div>
           </div>
         
         <div className="col-md-5 col-sm-6">
            <div className="me-image">
              {/* <img src="https://demos.onepagelove.com/html/webres/images/bg/profile.png" alt=""/> */}
          </div>
        </div>
      </div>
      </div>
      </section>)
    }
}
