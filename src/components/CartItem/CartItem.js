import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const { shortName, coverImage, price } = props.course;
    return (
        <div className="cartItem d-flex align-items-center">
            <img className="thumbnail" src={coverImage} alt={shortName} />
            <p className="cartItem-title"><strong>{shortName}</strong></p>
            <h5 className="price"><span class="badge badge-info">${price}</span></h5>
        </div>
    );
};

export default CartItem;