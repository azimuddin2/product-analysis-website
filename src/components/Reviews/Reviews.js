import React from 'react';
import useReviewsDataSet from '../../hooks/demo';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useReviewsDataSet();
    return (
        <div className='review'>
            {
                review.map(re =>
                    <ReviewCart
                        review={re}
                    >
                    </ReviewCart>)
            }
        </div>
    );
};

export default Reviews;