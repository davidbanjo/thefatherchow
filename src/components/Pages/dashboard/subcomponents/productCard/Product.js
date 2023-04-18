import React from 'react'
import '../../dashboard.css'

const Product = () => {

    const products = [
        { id: 1, name: 'The FatherChow Sandwich', price: 600, oldprice: 800, img: 'img/sandwich.png', description: 'Bread, Egg, Cabbage, Carrot amidst other vegetables. FOR N600 ONLY' },
        { id: 2, name: 'The FatherChow Sandwich', price: 600, oldprice: 800, img: 'img/sandwich.png', description: 'Bread, Egg, Cabbage, Carrot amidst other vegetables. FOR N600 ONLY' },
        { id: 3, name: 'The FatherChow Sandwich', price: 600, oldprice: 800, img: 'img/sandwich.png', description: 'Bread, Egg, Cabbage, Carrot amidst other vegetables. FOR N600 ONLY' }
       
      ];
    
      const productElements = products.map((products) => (
        <div className='productsCard' key={products.id}>
            <img className='productImg' src={products.img} alt={products.name} />
            <div className='productDetails'>
                <h2 className='productTitle'>{products.name}</h2>
                <p className='productDesc'>{products.description}</p>
            </div>
            <div className='productAction'>
                <h3 className='productPrice'>PRICE: <span>{products.price} Naira<br /><span className='productPriceold'>N{products.oldprice} Naira</span></span></h3>
                  <button className='primaryBtn tetiaryBtn'><b>Add to Basket</b></button>
            </div>
        </div>
      ));


  return (
    <div className='productsContainerMain'>
       {productElements}
    </div>
  )
}

export default Product