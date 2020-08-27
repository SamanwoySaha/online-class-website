import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../../components/CartItem/CartItem';

const Cart = (props) => {
    const myCourses = props.myCourses;
    const total = Number((myCourses.reduce((total, course) => total + course.price, 0)).toFixed(2));

    return (
        <div className="cart">
            <h3 className="cart-title text-center ml-3">My courses <FontAwesomeIcon icon={faShoppingCart} /> <span className="cart-quantity badge badge-primary">{myCourses.length}</span></h3>
            <h5 className="text-center">Ordered Items: <strong>{myCourses.length}</strong></h5>
            {
                myCourses.map(course => <CartItem course={course}></CartItem>)
            }
            <h5 className="cart-total text-center"><strong>Total:</strong> ${total}</h5>
        </div>
    );
};

export default Cart;