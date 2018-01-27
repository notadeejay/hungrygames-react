import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import RestaurantContainer from './components/RestaurantContainer'
import Home from './components/Home'
import taco from './taco.png'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      clicked: false,
    }
    this.showResto = this.showResto.bind(this)
  }

  showResto = (res) => {
    this.setState({
      clicked: true,
    })
  }

   render() {
    return (
    <div>
      <div className="Main">
      {this.state.clicked ? null :
      <div>
        <img src={taco} alt={"taco"} className="Taco A"/> 
        <img src={taco} alt={"taco"} className="Taco B"/> 
        <img src={taco} alt={"taco"} className="Taco C"/> 
        <img src={taco} alt={"taco"} className="Taco D"/> 
        <img src={taco} alt={"taco"} className="Taco E"/>
      </div>
      }
        </div>
      <div className="App">
      {this.state.clicked ? <RestaurantContainer  /> : <Home showResto={this.showResto} />}
      </div>
    </div>
    );
  }
}

export default App