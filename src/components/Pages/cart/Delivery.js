import React from 'react'
import CartItem from './CartItem'
import DeliveryInfo from './DeliveryInfo'
import OrderSummary from './OrderSummary'
import { Link } from 'react-router-dom'

const Delivery = () => {
  return (
    <div className='fc_section'>
      <h2 className='fc_section-delievery-title'>Your Order</h2>
      <div className='fc_section_container'>
        <CartItem />
      </div>
      <h2>Delivery Information</h2>
      <div className='fc_section_container' >
        <DeliveryInfo />
      </div>
      <div className="fc__spacer"></div>
      <h2 className='fc_section-delievery-title'>Order Summary</h2>
      <div className='fc_section_container'>
        <OrderSummary />
      </div>
      <div className='fc_section_container'>
        <div className='fc_delivery-container-row'>
          <div className='fc_delivery-container-row-col'>
            <button className='primaryBtn'>Checkout<span></span></button>
            <Link to='/dashboard'>
              <button className='dangerBtn'>Cancel Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery