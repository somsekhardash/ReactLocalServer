import React from 'react';
import {render} from 'react-dom';
import Container from './ecosystem/homeContainer/index.js'

class App extends React.Component {
  render () {
    return <div className="body">
            <Container></Container>
          </div>;
  }
}

render(<App/>, document.getElementById('app'));