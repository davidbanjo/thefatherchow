import React from 'react'
import './subproduct.css'

const SubProduct = () => {


    const subProducts = [
        { id: 1, name: 'TheFather SuperCombo', price: 1200, img: 'img/supercombo.png', description: 'Spicy hot bread with grilled chicken for a healthy fill' },
        { id: 2, name: 'Rolled FatherGrill', price: 600, img: 'img/rolledGrill.png', description: 'Spicy hot bread with grilled chicken for a healthy fill' },
        { id: 3, name: 'Rolled FatherGrill', price: 600, img: 'img/rolledGrill.png', description: 'Spicy hot bread with grilled chicken for a healthy fill' },
        { id: 4, name: 'Rolled FatherGrill', price: 600, img: 'img/rolledGrill.png', description: 'Spicy hot bread with grilled chicken for a healthy fill' }
       
      ];
    
      const subProductElements = subProducts.map((subProducts) => (
        <div className='subProductsContainer subProductsCard' key={subProducts.id}>
            <img className='subProductImg' src={subProducts.img} alt={subProducts.name} />
              <div className='subProductInfo subProductDetails'>
                  <div className="subProductHeading">
                      <h3>{subProducts.name}</h3>
                      <p className="subProductDesc">{subProducts.description}</p>
                  </div>
                  <p className="price"><b>Price: </b><span className="priceContainer">{subProducts.price} Naira</span></p>
            </div>
        </div>
      ));


  return (
    <div className='subProductsContainer'>
        {subProductElements}
    </div>
  )
}

export default SubProduct