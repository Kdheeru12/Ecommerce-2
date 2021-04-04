import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ALL_ORDER_ITEMS, GET_ORDER } from '../Graphql/Queries';
import { css } from "@emotion/core";
import ScaleLoader from 'react-spinners/ScaleLoader'
export default function OrderSuccess() {
    const payment = true
    const {id} = useParams()
    const { loading, data,error } =  useQuery(GET_ORDER,{
        variables:{id:id}
    });
    const override = css`
        display: block;
        margin: 30 auto;
        border-color: red;
        align-items:center;
        text-align:center;
        justify-content:center;
    `;
    const [delayProduct,setDelayProduct] = useState(true)
    const [allItems,setallItems] = useState(null)
    const [trans, settrans] = useState(0)
    const [address, setaddress] = useState(false)
    useEffect(() => {
        if (!loading) {;
            setallItems(data.getOrder[0])
            settrans(data.getOrder[0].transactionId)
            setaddress(data.getOrder[0].shippingaddressSet[0])
        } else {
            console.log('not')
        }
        
        setTimeout(() => {
            setDelayProduct(false)  
        }, 500);
    }, [delayProduct])
    return (
        // <div>
        //     dd
        // </div>
        (delayProduct) ?
            <ScaleLoader css={override} color={'#F78205'} loading={delayProduct} height={50} width={4} radius={2} margin={2} />
        :
        (trans)?
        <div>
            
            <section className="section-b-space light-layout">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="success-text">
                                <i className="fa fa-check-circle" aria-hidden="true"></i>
                                <h2>thank you</h2>
                                <p>Payment Is Has Been Received Order Placed Successfully</p>
                                <p>transactionId: {Number(allItems.transactionId)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-order">
                                <h3>your order details</h3>
                                {allItems.orderitemSet && allItems.orderitemSet.map((item) => {
                                return <div className="row product-order-detail" key={item.id}>
                                            <div className="col-3">
                                                <img src={`http://127.0.0.1:8000/media/${item.product.image}`} alt="" className="img-fluid" />
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>product name</h4>
                                                    <h5>{item.product.name}</h5>
                                                </div>
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>quantity</h4>
                                                    <h5>{item.quantity} X {item.price}</h5>
                                                </div>
                                            </div>
                                            <div className="col-3 order_detail">
                                                <div>
                                                    <h4>price</h4>
                                                    <h5>{item.totalPrice}</h5>
                                                </div>
                                            </div>
                                        </div>
                                })}
                                <div className="total-sec">
                                    <ul>
                                        <li>subtotal <span>{'d'}</span></li>
                                        <li>shipping <span>$0</span></li>
                                        <li>tax(GST) <span>$0</span></li>
                                    </ul>
                                </div>
                                <div className="final-total">
                                    <h3>total <span>{allItems.ordertotal}</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row order-success-sec">
                                {/* <div className="col-sm-6">
                                    <h4>summery</h4>
                                    <ul className="order-detail">
                                        {(payment.paymentID)?
                                            <div>
                                        <li>payer ID: {payment.payerID}</li>
                                        <li>payment ID: {payment.paymentID}</li>
                                        <li>payment Token: {payment.paymentToken}</li></div>
                                            :
                                        <li>Order ID: {payment.id}</li> }

                                        <li>Order Date: {CheckDate}</li>
                                        <li>Order Total: {symbol}{orderTotal}</li>
                                    </ul>
                                </div> */}
                                <div className="col-sm-6">
                                    <h4>shipping address</h4>
                                    {address &&
                                    
                                    <ul className="order-detail">
                                        <li>{address.address}</li>
                                        <li>{address.zipcode}</li>
                                        <li>{address.city}, {address.state}</li>
                                        <li>Contact No. {address.phone}</li>
                                    </ul>
                                }
                                </div>

                                <div className="col-sm-12 payment-mode">
                                    <h4>payment method</h4>
                                    <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                        banking acceptance subject to device availability.</p>
                                </div>
                                <div className="col-md-12">
                                    <div className="delivery-sec">
                                        <h3>expected date of delivery</h3>
                                        <h2>{'deliveryDate'}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        :
        <section className="p-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="error-section">
                            <h1>404</h1>
                            <h2>page not found</h2>
                            <a href="index.html" className="btn btn-solid">back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



