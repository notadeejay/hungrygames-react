import React from 'react'

const Restaurant = ({resto, openForm}) =>
  <div className="restaurant" key={resto.id}>
    <h1>{resto.name}</h1>
    <p className="description">{resto.description}</p>
    <h2 className="subtitle">The deets on your eats:</h2>
    <div className="details one">
      <p><span>💸</span> {resto.price}</p>
      <p><span>📌</span> {resto.address}</p>
    </div>
    <div className="details two">
      <p><span>🍴</span> {resto.cuisine}</p>
      <p><span>🖥️ </span> <a href={resto.website}>{resto.website}</a></p> 
    </div>
      <button className="newResto"
        onClick={this.addNewResto}>
        Try Again
      </button>  
      <button className="getResto"
        onClick={openForm}>
        Add a new restaurant
      </button>  
  </div>

export default Restaurant