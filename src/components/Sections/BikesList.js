import React from 'react'


const BikesList = (props) => {

  const bikes = props.bikes

  return (
    <div>
      <h1>Bike List</h1>
      {bikes.map((bike) => {

        return (
          <div>
            <h2>{bike.title}</h2>
            <img src={bike.imgUrl} alt={bike.title} />
            <p>{bike.description}</p>
          </div>
          )
        })}

    </div>
  )
}

export default BikesList
