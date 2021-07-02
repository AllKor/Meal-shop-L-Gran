const GET_NAV_ITEMS = "navigationReducer/GET_NAV_ITEMS"
const GET_SOCIAL_ITEMS = "navigationReducer/GET_SOCIAL_ITEMS"
const OPEN_SIDEBAR  = "navigationReducer/OPEN_SIDEBAR"
const CLOSE_SIDEBAR  = "navigationReducer/CLOSE_SIDEBAR"


const initialState = {
    navItems: [],
    socialItems: [],
    isSidebarOpen: false
}

const navigationReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_NAV_ITEMS:
        case GET_SOCIAL_ITEMS:
        case OPEN_SIDEBAR:
        case CLOSE_SIDEBAR:
            
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }

}

export const getNavItemsAC = (navItems) => {
    return {
        type: GET_NAV_ITEMS,
        payload: {
            navItems
        }
    }
}

export const getSocialItemsAC = (socialItems) => {
    return {
        type: GET_SOCIAL_ITEMS,
        payload: {
            socialItems
        }
    }
}

export const openSidebarAC = () => {
    return {
        type: OPEN_SIDEBAR,
        payload: {
            isSidebarOpen: true
        }
    }
}

export const closeSidebarAC = () => {
    return {
        type: CLOSE_SIDEBAR,
        payload: {
            isSidebarOpen: false
        }
    }
}

export default navigationReducer

