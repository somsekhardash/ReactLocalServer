import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import Header from './../../organism/header/index.js';
import HeaderBanner from './../../molecule/headerBanner/index.js';
import config from './../../../config.js';
require('../../../styles/vender/bootstrap/index.css');

  
export default class Container extends React.Component {
    componentDidMount(){
        axios.get(config.headerApiUrl)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render () {
        return <div className="container">
                    <Header></Header>
                    <HeaderBanner></HeaderBanner>
            </div>;
    }
}
  