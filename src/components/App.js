import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_TRELLO_LIST_ID)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The List ID is {process.env.REACT_APP_TRELLO_LIST_ID} <br/>
            The Token is {process.env.REACT_APP_TRELLO_API_TOKEN}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
