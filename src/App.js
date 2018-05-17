import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

require("appdynamics").profile({
  controllerHostName: 'amelia2018022813480025.saas.appdynamics.com',
  controllerPort: 443, 
  controllerSslEnabled: true,  // Set to true if controllerPort is SSL
  accountName: 'amelia2018022813480025',
  accountAccessKey: 'z6cr4suam9b1',
  applicationName: 'GRAMTECH',
  tierName: 'simple-nodejs-appd', 
  nodeName: 'simple-nodejs-appd:0' 
 });
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
