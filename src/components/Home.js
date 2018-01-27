import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  
   render() {
    return (
      <div className="Title">
        <h1>Welcome to the Hangry Games</h1>
        <button className="diceRoll" onClick={this.props.showResto}>may the foods be ever in your flavour</button>
      </div>
    );
  }
}

export default Home