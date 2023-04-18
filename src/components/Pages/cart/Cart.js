import React, { useState } from 'react'
import Delivery from './Delivery'
import Pickup from './Pickup'
import './cart.css'
import HeaderDashboard from '.././dashboard/subcomponents/HeaderDashboard'

const Cart = () => {

    const [active, setActive] = useState("delivery")

    const handle_active = () => setActive("delivery");
    const handle_not_active = () => setActive("pickup");

    return (
            <>
            <HeaderDashboard />
            <div className="fc_cart">
                <div className="fc_cart-container">
                    <div className={`fc_cart-row ${active === "delivery" ? "-active" : ""}`} onClick={handle_active}>
                        <p className="fc_cart-row-text">
                            Delivery
                        </p>
                    </div>
                    <div className={`fc_cart-row ${active === "pickup" ? "-active" : ""}`} onClick={handle_not_active}>
                        <p className="fc_cart-row-text">
                            Pickup
                        </p>
                    </div>
                </div>
            </div>

            {
                active === "delivery" ? <Delivery/> : <Pickup />
            }
        </>
    )
}

export default Cart