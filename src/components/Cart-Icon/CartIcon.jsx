import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import './CartIcon.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div className='cart-icon-container'>
        <ShoppingIcon className="shopping-icon" onClick={() => setIsCartOpen(!isCartOpen)}/>
        <span className='item-count'>0</span>
    </div>
  )
}


export default CartIcon;