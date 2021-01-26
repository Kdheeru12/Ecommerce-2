import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CartHeader from './CartPage';
const CartContainer = () => (
     <li  className="onhover-div mobile-cart"><div className="cart-qty-cls">{1}</div>
        <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} className="img-fluid" alt=""/>
            <i className="fa fa-shopping-cart"></i></Link>
        <ul className="show-div shopping-cart">
            {/* { cartList.map((item,index) => ( */}
                {/* <CartPage key={index} item={item} total={total} symbol={symbol} removeFromCart={() => removeFromCart(item)}  /> */}
                <CartHeader />
            {/* ))} */}
            {(true) ?
            //(cartList.length > 0) ?

            <div>
            <li>
                <div className="total">
                    <h5>subtotal : <span>10</span></h5>
                </div>
            </li>
            <li>
                <div className="buttons">
                    <Link to={`${process.env.PUBLIC_URL}/cart`} className="view-cart">view cart</Link>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`} className="checkout">checkout</Link>
                </div>
            </li></div>
                    :
            <li><h5>Your cart is currently empty.</h5></li>}
        </ul>

    </li>
)




export default (CartContainer);
