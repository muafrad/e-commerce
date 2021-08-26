import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    let shipping = 0;
    if (total > 50) {
        shipping = 2.99;
    }
    else if (total > 35) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99
    }
    let tax = total / 10

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    let grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered:{cart.length}</p>
            <p><small>product Price: ${formatNumber(total)} </small></p>
            <p><small>Shipping & Handling: ${shipping}</small></p>
            <p><small>Total Before Tax: ${formatNumber(total + shipping)}</small></p>
            <p><small>Estimated Tax: ${formatNumber(tax)}</small></p>
            <h3>Total Price: ${formatNumber(grandTotal)}</h3>
            {
                props.children
            }
        </div>
    );
};

export default Cart;