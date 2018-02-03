import React, { Component } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant.js'
import RestaurantForm from './RestaurantForm.js'

class RestaurantContainer extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      restaurants: {},
      modalOpen: false
    }
   this.addNewsResto = this.addNewResto.bind(this)
   this.openForm = this.openForm.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/restaurants.json')
    .then(response => {
      this.setState({restaurants: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewResto = (data) => {
    console.log(data)
    axios.post(
      'http://localhost:3001/api/v1/restaurants',
      { restaurant:
        {
          name: data.name,
          description: data.description,
          website: data.website,
          address: data.address,
          price: data.price,
          cuisine: data.cuisine,
        }
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  openForm = () => {
    this.setState({
      modalOpen: true,
    })
  }

  render() {
    return (
      <div>
        <Restaurant resto={this.state.restaurants} openForm={this.openForm}/>
        {this.state.modalOpen ? 
        <RestaurantForm addNew={this.addNewResto} />
        : null}
      </div>
     
      
    );
  }
}

export default RestaurantContainer