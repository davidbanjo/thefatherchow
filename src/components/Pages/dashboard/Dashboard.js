import React from 'react'
import HeaderDashboard from './subcomponents/HeaderDashboard'
import Product from './subcomponents/productCard/Product'
import SubProduct from './subcomponents/productCard/SubProduct'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <div className='main'>
        <h1 className='dashboardCont'>Menu</h1>
        <div>
          <Product />
        </div>
              <p className='dashboardCont note'><b><i>Check the item basket to place the order</i></b></p>
              <Link to='/cart'>
                  <div className="cart">
                      <MdAddShoppingCart className="shoppingCart" />
                  </div>
              </Link>
        <div className='subProductContainer'>
          <h2 className='dashboardCont'>Coming Soon</h2>
          <SubProduct />
        </div>
      </div>
    </>
  )
}

export default Dashboard