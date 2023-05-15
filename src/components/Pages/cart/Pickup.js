import React, { useState } from 'react'
import './cart.css'

const Pickup = () => {

  const handleAvailable = true

  const [ checked, setChecked ] = useState('')
  const [ available, setAvailable ] = useState()
  const [ red, setRed ] = useState('')

  // const handle_available = (status) => setAvailable(status)

  // const handle_checked = (id) => setChecked(id)
  // const handle_unchecked = () => setChecked('unselect')

  const clicked = (id, status) => {
    setChecked(id)
    setAvailable(status)
  }

  const pickupLocations = [
    {id: 1, pickupName: 'PICKUP A', pickupAddress: 'Shop 15, Moremi Carpark, Shopping complex. University of Lagos.', status: true },
    {id: 2, pickupName: 'PICKUP B', pickupAddress: 'Shop 15, Moremi Carpark, Shopping complex. University of Lagos.', status: false }
  ]

  // const redBtn = document.querySelector('.redBtn')

  // const pickupContainer = document.querySelector('.fc_pickup-container-row')

  // pickupContainer.addEventListener(click, () => {
  //   if (available === false) {
  //     pickupContainer.classList.add('redBox')
  //     console.log('listening')
  //   }
  // })

  return (
    <>
    {pickupLocations.map(locations => (
      <div className='fc_section' key={locations.id}>
      <div className='fc_section-container'>
        <div className={`fc_pickup-container-row ${locations.status === false ? "not-cursor" : "cursor"} ${red}`} onClick={()=> {
            clicked(locations.id, locations.status)
            if (available === false) {
              setRed('redBox')
              console.log('clicked')
            }
            else if (available === true) {
              setRed('greyBox')
            }
          }}>
          <div className='fc_pickup-container-row-col'>
            <h3 className='fc_pickupName'>{locations.pickupName}</h3>
            <div className="radioBtn">
            { available === true ? 
              <div className={`${checked === locations.id ? "select" : "unselect"}`}></div> : 
              <div className="unselect"></div>
            }
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