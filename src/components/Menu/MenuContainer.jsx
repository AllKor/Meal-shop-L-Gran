import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenuItemsAC } from '../../redux/menuReducer'
import { getMenuItems } from '../../redux/menuSelector'
import menuItems from '../../additionalData/menuItems'
import Menu from './Menu'
import { getCartItems, getStorageName } from '../../redux/cartSelector'
import { getGoodsInCartThunkCreator, removeGoodFromCartThunkCreator, setGoodsInCartThunkCreator } from '../../redux/cartReducer'

const MenuContainer = React.memo(() => {
    const cards = useSelector(state => getMenuItems(state))
    const storageName = useSelector(state => getStorageName(state))
    const storageitems = useSelector(state => getCartItems(state))
    const dispatch = useDispatch()
    const cartId = storageitems.reduce((accumulator, item) => [...accumulator, item.id],[])

    useEffect(() => {
        if (!cards.length) {
            dispatch(getMenuItemsAC(menuItems))
        } 
        dispatch(getGoodsInCartThunkCreator(storageName))
        
    },[storageName,cards.length, dispatch])

    

    const addToCart = (item) => {
        dispatch(setGoodsInCartThunkCreator(storageName,item))
    }
    const deleteFromCart = (id) => {
        dispatch(removeGoodFromCartThunkCreator(storageName,id))
    }
    

    return <Menu cards={cards} addToCart={addToCart} deleteFromCart={deleteFromCart} storageitems={cartId} />
})

export default MenuContainer
