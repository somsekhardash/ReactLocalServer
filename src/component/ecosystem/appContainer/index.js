import React from 'react';
import {render} from 'react-dom';
import Container from './../../../container/homePage.js';

export default class App extends React.Component {
  render () {
    return <div className="body">
            <Container></Container>
          </div>;
  }
}