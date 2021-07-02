const GET_MENU_ITEMS = 'menuReducer/GET_MENU_ITEMS'

const initialState = {
    menuItems: []
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_MENU_ITEMS:
            return {
                ...state,
                ...action.payload    
            }

        default:
            return state
    }
}

export const getMenuItemsAC = (menuItems) => {
    return {
        type: GET_MENU_ITEMS,
        payload: {
            menuItems
        }
    }
}

export default menuReducer

