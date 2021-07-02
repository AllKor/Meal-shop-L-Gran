import React from 'react'
import './Reviews.scss'
import backgroundImage from '../../assets/images/6.png'
import backgroundImage2 from '../../assets/images/6_1.png'
import Review from './Review/Review'


const Reviews = ({thisrReview, reviewsList}) => {

    const review = reviewsList.map((item, index) => index === thisrReview 
                                                        && <Review 
                                                            key={item.author} 
                                                            author={item.author} 
                                                            review={item.review} 
                                                            />
                                                        
    )

    return (
        <div className="reviews"  style={{backgroundImage: `url(${backgroundImage2}), url(${backgroundImage}) `}}>
            <div className="container">
                {review}
            </div>
        </div>
    )
}

export default Reviews
