import React from 'react'
import './CartItem.scss'

const CartItem = React.memo(({cartItem, onDeleteItem}) => {

    return (
        <div className="cart-item">
            <div className="cart-item__image">
                <img src={cartItem.image} alt="cartItem__image" />
            </div>
            <div className="cart-item__content">
                <div className="cart-item__data">
                    <h3 className="cart-item__name">{cartItem.name}</h3>
                    <div className="cart-item__price"><span>{cartItem.price}</span> BYN</div>
                </div>
                <button onClick={() => onDeleteItem(cartItem.id)} className="cart-item__delete">Удалить</button>
            </div>
        </div>
    )
})

export default CartItem
