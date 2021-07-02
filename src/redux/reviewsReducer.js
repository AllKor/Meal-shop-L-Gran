const GET_REVIEWS = 'reviewsReducer/GET_REVIEWS'

const initialState = {
    reviewsList: null
}


const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_REVIEWS:
            
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }
}

export const getReviewsAC = (reviewsList) => {
    return {
        type: GET_REVIEWS,
        payload: {
            reviewsList
        }
    }
}

export default reviewsReducer
