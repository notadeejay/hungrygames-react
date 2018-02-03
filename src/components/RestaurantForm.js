import React, { Component } from 'react'
import axios from 'axios'

class RestaurantForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    this.props.addNew(this.state)
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input className='input' type="text"
              name="name" placeholder='NAME' onChange={this.handleInput} />
          </div>
          <div>
          <textarea className='input' name="description"
            placeholder='DESCRIPTION' onChange={this.handleInput}></textarea>
          </div>
          <div>
            <select name="price" onChange={this.handleInput}>
              <option defaultValue="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
          </div>
          <div>
          <input className='input' name="address"
            placeholder='ADDRESS' onChange={this.handleInput} />
          </div>
          <div>
           <input className='input' type="text"
            name="cuisine" placeholder='CUISINE' onChange={this.handleInput} />
          </div>
          <div>
          <input className='input' type="text"
            name="website" placeholder='WEBSITE' onChange={this.handleInput} /> 
          </div>
          <div>
            <input type="submit" className="submit" value="submit"/> 
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantForm