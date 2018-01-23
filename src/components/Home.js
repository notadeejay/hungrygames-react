import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
  
  getResto = () => {
    axios.get('http://localhost:3001/api/v1/restaurants.json')
    .then(response => {
      this.props.showResto(response.data)
    })
    .catch(error => console.log(error))
  }

   render() {
    return (
      <div className="Title">
        <h1>welcome to the hangry games</h1>
        <button className="diceRoll" onClick={this.getResto}>may the foods be ever in your flavour</button>
      </div>
    );
  }
}

export default Home