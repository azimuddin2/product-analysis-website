import React from 'react';
import useReviewsDataSet from '../../hooks/demo';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [review, setReview] = useReviewsDataSet();
    return (
        <div>
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