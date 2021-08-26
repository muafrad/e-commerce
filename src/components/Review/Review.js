import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const style = {
        marginTop: "50px",
        marginLeft: "370px"
    }

    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);

    const handleOrder = () => {
        setCart([]);
        setPlaceOrder(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        });
        setCart(cartProducts);
    }, [])

    let thankyou;
    if (placeOrder) {
        thankyou = <img style={style} src={happyImage} alt="" />
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd} key={pd.key} />)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleOrder} className="cart-btn">Place Your Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;