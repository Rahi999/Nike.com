import React from 'react'

const Cart = () => {
  const data = JSON.parse(localStorage.getItem("CartData"));
  // console.log(data)
  return (
    <div id="cartContainer">Cart</div>
  )
}

export default Cart