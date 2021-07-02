import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CartNav.scss'
import CartIcon from '../../../assets/images/icons/shopping-cart.svg'
import { useSelector } from 'react-redux'
import { getCartItems } from '../../../redux/cartSelector'

const CartNav = () => {
    let items = useSelector(state => getCartItems(state))
    const [itemsCount, setItemsCount] = useState(items.length)

    useEffect(() => setItemsCount(items.length), [items.length])


    return (
        <NavLink to="/cart">
            <div className="cart-nav">
                <img className="cart-nav__icon" src={CartIcon} alt="nav__icon" />
                {items.length ? <span className="cart-nav__items-count">{itemsCount}</span> : null}
            </div>
        </NavLink>
        
    )
}

export default CartNav
