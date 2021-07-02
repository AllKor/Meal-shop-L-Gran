import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { reviewsItems } from '../../additionalData/reviewsItems'
import { getReviewsAC } from '../../redux/reviewsReducer'
import { getReviewsList } from '../../redux/reviewsSelector'
import Reviews from './Reviews'

const ReviewsContainer = ({reviewsList, getReviews}) => {

    const showReview = (reviewsList) => {
        try {
            let review = Math.floor(Math.random() * reviewsList.length)
        
            return review
        } catch (error) {
            console.log(error.message);
        } 
    }

    useEffect(() => {
        if(!reviewsList) {
            getReviews(reviewsItems)
        } 
    })

    return (reviewsList && <Reviews thisrReview={showReview(reviewsList)} reviewsList={reviewsList} />)
}

const mapStateToProps = (state) => {
    return {
        reviewsList: getReviewsList(state)
    }
}

export default connect(mapStateToProps, {getReviews: getReviewsAC})(ReviewsContainer)
