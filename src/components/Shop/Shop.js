import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])

    const handleProduct = (product) => {
        const productToBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== productToBeAdded);
            newCart = [...others, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count);



        // console.log("product added", product)
        // const newCart = [...cart, product]
        // setCart(newCart)
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length
        // addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map(pd => <Product showAddToCart={true} key={pd.key} handleProduct={handleProduct} product={pd} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cart-btn">Review Your Order</button>
                    </Link>
                </Cart>
            </div>


        </div>
    );
};

export default Shop;