import React from 'react';
import {render} from 'react-dom';

import Header from './header/index.js';
require('../styles/vender/bootstrap/index.css');

class App extends React.Component {
  render () {
    return <div className="body">
            <Header></Header>
          </div>;
  }
}

render(<App/>, document.getElementById('app'));