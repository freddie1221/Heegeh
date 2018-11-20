import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';

const listId = process.env.REACT_APP_TRELLO_LIST_ID
const token = process.env.REACT_APP_TRELLO_API_TOKEN
const key = process.env.REACT_APP_TRELLO_API_KEY
const cardParameters = 'fields=id,name,desc'
const url = `https://api.trello.com/1/lists/${listId}/cards?${cardParameters}&key=${key}&token=${token}`

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      cards: []
    }
  }

  // so perhaps I want to store the returned object against component state

  componentDidMount() {
    const that = this
    fetch(url)
    .catch(error => console.log('BAD', error))
	  .then(function (response) {
		  return response.json();
    })
    .then(function (data) {
      // console.log(data)
      that.setState({cards: data})
    })
    console.log(that.cards)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            The List ID is {process.env.REACT_APP_TRELLO_LIST_ID} <br/>
            The Token is {process.env.REACT_APP_TRELLO_API_TOKEN}
          </p>
        </header>
      </div>
    );
  }
}

// So I want this component to...
// Make an API call
// With each 'object' returned in the response, load a card component, passing in the relevant props(?)

// I question I have is, when do I make the fetch call.. hmm...
// perhaps componentDidMount or something like that


export default App;
