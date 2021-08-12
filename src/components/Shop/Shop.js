import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [product, setProduct] = useState(first10)
    const handleProduct = (product) =>{
        console.log("product added", product)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product handleProduct={handleProduct} product={pd}/>)
                }
            </div>

            <div className="cart-container">
                <h1>This is Cart Container</h1>
            </div>


        </div>
    );
};

export default Shop;