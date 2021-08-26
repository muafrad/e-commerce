import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Product/Product.css'

const ReviewItem = (props) => {
    // console.log(props);
    const { name, quantity, img, key,price} = props.product
    const styles = {
        borderBottom: '1px solid lightgray',
        color: 'blue',
        marginLeft: '200px',
        paddingBottom: '20px',
    }
    return (
        <div style={styles}>
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h4> {name} </h4>
                <p>Quantity: {quantity}</p>
                <p><small> ${price}</small></p>
                <button
                    onClick={() => props.removeProduct(key)}
                    className="btn">
                    <FontAwesomeIcon icon={faTrash} /> Remove
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;