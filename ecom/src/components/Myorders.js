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
                                    <th scope="col">Date Ordered</th>
                                </tr>
                                </thead>
                                {
                                    orders.map((order)=>(


                                    <tbody key={order.id}>
                                        <tr>
                                            <td>
                                                <Link to={`${process.env.PUBLIC_URL}/${order.id}/order-detail`}>
                                                <h2 className="td-color">{order.transactionId}</h2>
                                                </Link>
                                            </td>
                                            <td><Link to={`${process.env.PUBLIC_URL}/${order.id}/order-detail`}>
                                                <ol>
                                                {order.orderitemSet.map((product)=>
                                                    <diV key={product.id}>
                                                    <li>{product.product.name} X {product.quantity} </li>
                                                    </diV>
                                                    )}
                                                </ol> 
                                                 
                                           </Link>
                                            </td>
                                            <td><h2>{order.ordertotal}</h2></td>

                                            <td><h2 className="td-color">{new Date (order.dateOrderd).toDateString()}</h2></td>
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
                                        <strong>Your have not placed any orders </strong>
                                    </h3>
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