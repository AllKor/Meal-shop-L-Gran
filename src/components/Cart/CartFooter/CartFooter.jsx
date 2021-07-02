import React from 'react'

const CartFooter = ({totalCount, onOrder}) => {
    return (
        <>
            <button className="cart__purchise" onClick={onOrder}>Заказать</button>
            <div className="cart__total">Всего: <span>{totalCount}</span> BYN</div>
        </>
    )
}

export default CartFooter
