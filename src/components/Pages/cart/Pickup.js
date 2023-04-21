import React, { useState } from 'react'
import './cart.css'

const Pickup = () => {

  const handleAvailable = true

  const [ checked, setChecked ] = useState(1)

  const handle_checked = (id) => setChecked(id)
  // const handle_unchecked = () => setChecked('unselect')

  const pickupLocations = [
    {id: 1, pickupName: 'PICKUP A', pickupAddress: 'Shop 15, Moremi Carpark, Shopping complex. University of Lagos.', status: true },
    {id: 2, pickupName: 'PICKUP B', pickupAddress: 'Shop 15, Moremi Carpark, Shopping complex. University of Lagos.', status: false }
  ]

  return (
    <>
    {pickupLocations.map(locations => (
      <div className='fc_section' key={locations.id}>
      <div className='fc_section-container'>
        <div className={`fc_pickup-container-row ${locations.status === false ? "not-cursor" : "cursor"}`} onClick={()=> handle_checked(locations.id)}>
          <div className='fc_pickup-container-row-col'>
            <h3 className='fc_pickupName'>{locations.pickupName}</h3>
            <div className="radioBtn">
              <div className={`${checked === locations.id ? "select" : "unselect"}`}></div>
            </div>
            <p><b>{locations.pickupAddress}</b></p>
          </div>
        </div>
        {
          handleAvailable === locations.status ? 
          <div className='fc_pickupStatus-conatiner'>
            <p className='fc_pickupStatus'>
              Available for Pickup 
            </p>
            <div className='status-green status'></div>
          </div>
          : 
          <div className='fc_pickupStatus-conatiner'>
            <p className='fc_pickupStatus'>
              Not Available for Pickup 
            </p>
            <div className='status-red status'></div>
          </div>
        }
      </div>
    </div>
    ))}
  </>
  )
}

export default Pickup