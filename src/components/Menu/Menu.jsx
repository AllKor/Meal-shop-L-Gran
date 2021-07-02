import React from 'react'
import './Menu.scss'
import backgroundImage from '../../assets/images/7.jpg'
import Card from './Card/Card'

const Menu = ({ cards, addToCart,deleteFromCart,storageitems }) => {
    
    return (
        <div className="menu" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
                <div className="menu__inner">
                    {cards.map(card => <Card
                                            key={card.id}
                                            card={card}
                                            addToCart={addToCart}
                                            deleteFromCart={deleteFromCart}
                                            storageitems={storageitems}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Menu
