import React from 'react'

const sampleData = [
  {id: 1, img: 'img/sandwich.png', title: 'TheFatherchow sandwich', desc: 'Bread, Edd, Cabbage, Carrot amidst other vegetables.', price: 600},
  {id: 2, img: 'img/sandwich.png', title: 'TheFatherchow sandwich', desc: 'Bread, Edd, Cabbage, Carrot amidst other vegetables.', price: 1200},
  {id: 3, img: 'img/sandwich.png', title: 'TheFatherchow sandwich', desc: 'Bread, Edd, Cabbage, Carrot amidst other vegetables.', price: 1800},
]

const CartItem = () => {
  return (
    <>
      {sampleData.map(cartItems => (
        <div className='fc_delivery-container-row'>
          <div className='fc_delivery-container-row-col'>
            <img className='fc_cart-image' src={cartItems.img} alt={cartItems.title} />
          </div>
          <div className='fc_delivery-container-row-col'>
            <h3>{cartItems.title}</h3>
            <p className='fc_cart-desc'>{cartItems.desc}</p>
          </div>
          <div className='fc_delivery-container-row-col countContainer'>
            <div className='minusCont'>
              
            </div>
            <div className='count'>3</div>
            <div className='addCont'></div>
          </div>
          <div className='fc_delivery-container-row-col'>N{cartItems.price}</div>
      </div>
      ))}
    </>
  )
}

export default CartItem