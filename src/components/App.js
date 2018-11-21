import React, { Component } from 'react';
import Card from './Card';


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
  // so perhaps I want to store the returned object against component state. Yep.
  componentDidMount() {
    fetch(url)
    .catch(error => console.log('BAD', error))
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({cards: data})
      console.log(this.state.cards[0])
    })
  }

  render() {
    // const appStyle = {
    //   maxWidth: "1200px",
    //   margin: "auto"
    // }
    return (
      <div>
          {this.state.cards.map((card) => {
            return <Card key={card.id} title={card.name} body={card.desc} />
            })
          }
        
      </div>
    );
  }
}



export default App;
