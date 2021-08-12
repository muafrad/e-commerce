import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const { img, name, seller, price, stock } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="product-description">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} is available - order soon</small></p>
                <button className="btn" onClick={()=>{props.handleProduct()}}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;