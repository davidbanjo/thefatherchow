import React from 'react'
import sampleData from './CartItem'

const OrderSummary = () => {
  return (
    <div className='fc_delivery-container-row'>
        <div className='fc_delivery-container-row-col'>
            <form className='couponForm'>
                <input className='inputBox' type='text' placeholder='Promo Code' name='RoomNo' />
                <input value='Apply' className='inputBox submitBtn' type='submit' />
            </form>

            <div className='summaryCont'>
                <div>Dispatch Method: <span>Delivery</span></div>
                <div>Number of Items: <span>{sampleData.length}</span></div>
                <div>Discount Added: <span>None</span></div>
                <div>Total Amount: <span>N500</span></div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary