import React from 'react'

const Restaurant = ({resto}) =>
  <div className="tile" key={resto.id}>
    <h4>{resto.name}</h4>
    <p>{resto.description}</p>
  </div>

export default Restaurant