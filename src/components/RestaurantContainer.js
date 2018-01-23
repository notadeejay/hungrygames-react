import React, { Component } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant.js'

class RestaurantContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/restaurants.json')
    .then(response => {
      console.log(response)
      this.setState({restaurants: response.data})
    })
    .catch(error => console.log(error))
  }

  // addNewResto = () => {
  //   axios.post(
  //     'http://localhost:3001/api/v1/restaurants',
  //     { restaurant:
  //       {
  //         name: '',
  //         description: '',
  //         website: '',
  //         address: '',
  //         price: 0,
  //         cuisine: '',
  //       }
  //     }
  //   )
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => console.log(error))
  // }


  render() {
    return (
      <div>
        {this.state.restaurants.map((resto) => {
          return (<Restaurant resto={resto} key={resto.id} />)
        })}  
        {/* <button className="newRestoButton"
        onClick={this.addNewResto}>
          New Idea
        </button>   */}
      </div>
     
      
    );
  }
}

export default RestaurantContainer