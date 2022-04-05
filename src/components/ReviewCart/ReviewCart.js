import React from 'react';
import './ReviewCart.css'
const ReviewCart = (props) => {
    const {img, name, rating, review } = props.review;
    return (
        <div className='cart-container'>
            <div className='review-content'>
                <img src={img} alt="" />
                <h3>Name : {name}</h3>
                <p><small>{review}</small></p>
                <h5>Reting : {rating}</h5>
            </div>
        </div>
    );
};

export default ReviewCart;