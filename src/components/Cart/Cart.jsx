import React, { useEffect, useState } from 'react'
import './Cart.scss'
import backgroundImage from '../../assets/images/7.jpg'
import CartItem from './CartItem/CartItem'
import CartFooter from './CartFooter/CartFooter'
import CartModal from './CartModal/CartModal'

const Cart = ({goodsList, onDeleteItem, modalOpen, onOrder}) => {
    let total = goodsList.reduce((accum, item) => accum + item.price, 0)
    const [totalCount, setTotalCount] = useState(total)

    useEffect(() => {
        setTotalCount(total)
    },[total])

    return (
        <div className="cart" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="cart__inner">
                    {goodsList.map(good => <CartItem key={good.id} cartItem={good} onDeleteItem={onDeleteItem} />)}
                    <div className="cart__footer">
                        {goodsList.length 
                            ? <CartFooter onOrder={onOrder} totalCount={totalCount} />
                            : <div className="cart__empty">Товаров нет</div>
                        }
                        {modalOpen && <CartModal />}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart
