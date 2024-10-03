import React from 'react'

export const CartWidget = ({menuOpen}) => {
  return (
    <div>
       {/* Icono del carrito */}
       <a className="cart" href="#">
          <i className="bi bi-cart-fill"></i>
          {menuOpen ? null : <span className="numerito">0</span>}
        </a>  
    </div>
  )
}
