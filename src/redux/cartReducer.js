import { localStorageAPI } from "../api/localStorageAPI"

const GET__GOODS = 'cartReducer/GET__GOODS'

const initialState = {
    goodsInCart: [],
    storageName: "cart"
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET__GOODS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const getGoodsAC = (goodsInCart) => {
    return {
        type: GET__GOODS,
        payload: {
            goodsInCart
        }
    }
}


export const getGoodsInCartThunkCreator = (storageName) => async (dispatch) => {
    
    let item = await localStorageAPI.getStorageItem(storageName)
    dispatch(getGoodsAC(item))
}

export const setGoodsInCartThunkCreator = (storageName, newGood) => async (dispatch) => {

    let item = await localStorageAPI.getStorageItem(storageName)

    if(!item.some(good => good.id === newGood.id)) {
        item = [...item, newGood]
    }

    await localStorageAPI.setStorageItem(storageName, item)
    dispatch(getGoodsAC(item))
}

export const removeGoodFromCartThunkCreator = (storageName, itemId) => async (dispatch) => {
    
    let item = await localStorageAPI.getStorageItem(storageName)
    item = item.filter(good => good.id !== itemId)
    await localStorageAPI.setStorageItem(storageName, item)
    dispatch(getGoodsAC(item))
}

export const clearCartThunkCreator = () => async (dispatch) => {
    localStorageAPI.clearAllStorage()
}

export default cartReducer