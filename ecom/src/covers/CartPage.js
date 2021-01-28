import React from 'react';
import {Link} from 'react-router-dom'

const CartHeader  = () => (
            <li >
                <div className="media">
                    <Link to={`${process.env.PUBLIC_URL}/product/${1}`}><img alt="" className="mr-3" src={`https://picsum.photos/200`} /></Link>
                    <div className="media-body">
                        <Link to={`${process.env.PUBLIC_URL}/product/${1}`}><h4>{'dheeraj'}</h4></Link>
                        <h4><span>{2} x {'rup'} {100}</span></h4>
                    </div>
                </div>
                {/*<span>{cart}</span>*/}
                <div className="close-circle">
                    <a href={null} onClick={( ) =>{console.log('rrr')}}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
            </li>
        )



export default CartHeader;
