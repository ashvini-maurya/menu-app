import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Index from './components/Index/Index';

class App extends Component {
  componentDidMount() {
    document.title = "Menu App"
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Index />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
