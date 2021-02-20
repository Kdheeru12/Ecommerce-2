import React,{useContext} from 'react';
import {Link} from 'react-router-dom'
import CartContext from '../helpers/cart';

const CartHeader  = ({item,deleteQty}) => {
        return(

            <li >
                <div className="media">
                    <Link to={`${process.env.PUBLIC_URL}/product/${1}`}><img alt="" className="mr-3" src={`http://127.0.0.1:8000/media/${item.product.image}`} /></Link>
                    <div className="media-body">
                        <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}><h4>{item.name}</h4></Link>
                        <h4><span>{item.quantity} x  {item.price}</span></h4>
                    </div>
                </div>
                {/*<span>{cart}</span>*/}
                <div className="close-circle">
                    <a href={null} onClick={( ) => deleteQty(item.product.id)}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </li>
        )
}



export default CartHeader;
