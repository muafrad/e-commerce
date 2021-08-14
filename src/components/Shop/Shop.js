import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart , setCart] = useState([]);
    const handleProduct = (product) =>{
        console.log("product added", product)
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product handleProduct={handleProduct} product={pd}/>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}/>
            </div>


        </div>
    );
};

export default Shop;