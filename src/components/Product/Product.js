import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product.key)
    const { img, name, seller, price, stock, key } = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div className="product-description">
                <h4>
                    <Link to={'/product/' + key}>{name}</Link>
                </h4>
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} is available - order soon</small></p>
                {props.showAddToCart === true && <button
                    className="btn"
                    onClick={() => { props.handleProduct(props.product) }}>
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to cart
                </button>}
            </div>
        </div >
    );
};

export default Product;