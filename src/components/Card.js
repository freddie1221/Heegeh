import React, { Component } from 'react';


class Card extends Component {

      
  render(){
    const cardStyle = {
      height: 250,
      padding: 20,
      textAlign: "center",
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    }
    const cardContent = {
      title: this.props.title,
      body: this.props.body
    }
    return (
      <div style={cardStyle}>
        <h1>{cardContent.title}</h1>
        <p>{cardContent.body}</p>
      </div>
    )

  }
}

export default Card