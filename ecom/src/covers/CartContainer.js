import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import CartPage from './CartPage';
import CartImg from '../Images/cart.png'
import CartContext from '../helpers/cart';

const CartContainer = () => {
    const {addToCart,cartItems,cartTotal,TotalItems } = useContext(CartContext)
    const deleteQty =(id) =>{
        addToCart(id,'delete')
        console.log('ddee');
    }


    return(
     <li  className="onhover-div mobile-cart"><div className="cart-qty-cls">{TotalItems}</div>
        <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={CartImg} className="img-fluid" alt=""/>
            <i className="fa fa-shopping-cart"></i></Link>
        <ul className="show-div shopping-cart">

            { cartItems && cartItems.map((item) => (
                <CartPage key={item.id} item={item}   deleteQty={() => deleteQty(item.product.id)} />
            ))}
            {(cartItems) ?
            //(cartList.length > 0) ?

            <div>
            <li>
                <div className="total">
                    <h5>subtotal : <span>{cartTotal}</span></h5>
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
}




export default (CartContainer);
