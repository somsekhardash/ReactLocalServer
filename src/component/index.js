import React from 'react';
import {render} from 'react-dom';
//import Container from './ecosystem/homeContainer/index.js';
import Container from './../container/homePage';
import {Provider} from "react-redux";
import store from "./../store";

class App extends React.Component {
  render () {
    return <div className="body">
            <Container></Container>
          </div>;
  }
}

render(<Provider store={store}>
  <App></App>
      </Provider>, document.getElementById('app'));

//  render(<App></App>, document.getElementById('app'));     
