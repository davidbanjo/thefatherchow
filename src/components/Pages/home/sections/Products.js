import React from 'react'
import "../../styles/product.css"
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='productsContainer'>
        <div className='productsSubContainer'>
            <div className='productCards'></div>
            <div className='productCards'>
              <Link to="/dashboard">
                <p>
                  Dashboard
                </p>
              </Link>
            </div>
            <div className='productCards'></div>
        </div>
    </div>
  )
}

export default Products