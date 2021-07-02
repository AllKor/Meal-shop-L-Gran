import React, { useEffect, useState } from 'react'
import { connect} from 'react-redux'
import { clearCartThunkCreator, getGoodsInCartThunkCreator, removeGoodFromCartThunkCreator } from '../../redux/cartReducer'
import { getCartItems, getStorageName } from '../../redux/cartSelector'
import Cart from './Cart'

const CartComponent = ({goodsList,storageName, removeGoodFromCartThunk, getGoodsInCartThunk, clearCartThunk}) => {
    const [modalOpen, setModalOpen] = useState(false)
    
    useEffect(() => {
        getGoodsInCartThunk(storageName)
        
    },[storageName,getGoodsInCartThunk, modalOpen])

    const onDeleteItem = (id) => {
        removeGoodFromCartThunk(storageName, id)
    }

    const onOrder = () => {
        setModalOpen(true)
        
        setTimeout(() => {
            clearCartThunk()
            setModalOpen(false)
        }, 5000)
    }

    return <Cart goodsList={goodsList} onDeleteItem={onDeleteItem} modalOpen={modalOpen} onOrder={onOrder}/>
}

const mapStateToProps = state => {
    return {
        goodsList: getCartItems(state),
        storageName: getStorageName(state)
    }
}

export default connect(mapStateToProps, {
    getGoodsInCartThunk: getGoodsInCartThunkCreator,
    removeGoodFromCartThunk: removeGoodFromCartThunkCreator,
    clearCartThunk: clearCartThunkCreator
})(CartComponent)
