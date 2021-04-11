import React,{useContext,useState,useEffect} from 'react';
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'
import Wraper from './Wraper';
import { GET_ORDERS } from '../Graphql/Queries';
import { useQuery } from '@apollo/client';


export default function Myorderd() {
    const [delayProduct, setDelayProduct] = useState(true)
    const [orders, setorders] = useState([])
    var { loading ,data} = useQuery(GET_ORDERS)
    useEffect(() => {
        if (!loading) {
            // console.log(data.allProducts);
            // const pro = data.searchProducts.edges.map((it) =>it.node)
            // console.log(pro);
            setorders(data.getOrder)

        } else {
            console.log('not')
        }
        
        setTimeout(() => {
            setDelayProduct(false)  
        }, 100);

    }, [delayProduct])
    return (
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>My Orders</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}

            <Wraper title={'My Oders'}/>

            {(orders.length !=0) ?
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table cart-table table-responsive-xs">
                                <thead>
                                <tr className="table-head">
                                    <th scope="col">transsaction id</th>
                                    <th scope="col">product list</th>
                                    <th scope="col">price</th>
                                    <th scope="col">action</th>
                                    <th scope="col">total</th>
                                </tr>
                                </thead>
                                {
                                    orders.map((order)=>(


                                    <tbody key={order.id}>
                                        <tr>
                                            <td>
                                                <Link to={`${process.env.PUBLIC_URL}//product-detail`}>
                                                <h2 className="td-color">{order.transactionId}</h2>
                                                </Link>
                                            </td>
                                            <td><Link to={`${process.env.PUBLIC_URL}//product-detail`}>{order.ordertotal}</Link>
                                                <div className="mobile-cart-content row">
                                                    <div className="col-xs-3">
                                                        {/* <div className="qty-box">
                                                            <div className="input-group">
                                                                <input type="text" name="quantity"z
                                                                        className="form-control input-number" defaultValue={1} />
                                                            </div>
                                                        </div> */}
                                                        
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color">{order.ordertotal}</h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><h2>{order.ordertotal}</h2></td>
                                            <td>
                                                {/* {(item.qty >= item.stock)? 'out of Stock' : ''} */}
                                            </td>
                                            <td><h2 className="td-color">{'333'}</h2></td>
                                        </tr>
                                    </tbody> 
                                        ))}
                            </table>
                        </div>
                    </div>
                    <div className="row cart-buttons">
                        <div className="col-6">
                            <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>
                        </div>
                        <div className="col-6">
                            <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid">check out</Link>
                        </div>
                    </div>
                </div>
            </section>
            :
            <section className="cart-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div >
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                    <h3>
                                        <strong>Your Cart is Empty</strong>
                                    </h3>
                                    <h4>Explore more shortlist some items.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }
        </div>
    )
}