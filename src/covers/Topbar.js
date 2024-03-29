
import {Link} from 'react-router-dom';

import React,{useContext} from 'react'
import { isLoggedInVar } from '..';

export default function Topbar() {
        console.log(isLoggedInVar())
        function logout() {
            localStorage.removeItem('token')
            window.location.reload()
        }
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>{'topbar_title'}</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>{'call_us'}:  123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>{'compare'}</Link></li>
                                <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{'wishlist'}</Link></li>
                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> {'my_account'}
                                    {(isLoggedInVar) ?          
                                    <ul className="onhover-show-div">
                                        <li>
                                            <button onClick={()=>logout()} data-lng="en">logout</button>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/myorders`} data-lng="en">My orders</Link>
                                        </li>
                                    </ul>
                                    :
                                    <ul className="onhover-show-div">                            
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/login`} data-lng="en">Login</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/signup`} data-lng="en">Register</Link>
                                        </li>
                                    </ul>
                                }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
}
