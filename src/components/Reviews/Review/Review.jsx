import React from 'react'
import './Review.scss'


const Review = ({author, review}) => {

    return (
        <div className="review">
            <div className="review__icon">"</div>
            <div className="review__text">{review}</div>
            <div className="review__author">{author}</div>
        </div>
    )
}

export default Review
