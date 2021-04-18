import React,{useState,useContext} from 'react'
import {Helmet} from 'react-helmet'
import { useForm } from 'react-hook-form';
import Wraper from './Wraper';
import CartContext from '../helpers/cart';
import { useMutation } from '@apollo/client';
import { CASH_COMPLETE_ORDER } from '../Graphql/Mutation';
import { useHistory } from 'react-router';
import { PayPalButton } from "react-paypal-button-v2";

export default function Checkout() {
    // initialize the hook
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 
    const {cartItems,cartTotal } = useContext(CartContext)
    console.log(cartItems);
    const [completeorder] = useMutation(CASH_COMPLETE_ORDER)
    const [ayerror,setayerror] = useState(null)
    const [paypal, setpaypal] = useState(false)
    const history = useHistory()
    if (cartTotal == 0){
        history.push('/products')
    }
    const complete = async () =>{
        const res = await completeorder({
            variables:{address:obj.address,city:obj.city,state:obj.state,zipcode:obj.pincode,total:cartTotal,phone:obj.phone}

        }).catch(err =>setayerror(err))
        if(res){
            if(res.data.cashCompleteOrder.response == 'failed'){
                alert('something went wrong please try again')}
            else{
                history.push({pathname:'/ordersuccess',
                    state:{
                        id : res.data.cashCompleteOrder.response
                    }
                })
                window.location.reload()
                console.log(res.data.cashCompleteOrder.response);

            }
        }
        else{
            alert(ayerror)
        }
    }
 

    const onSubmit = (data) => {

        if (data !== '') {
            // alert('You submitted the form and stuff!');
            // console.log(data)

            console.log(obj);
            complete()
            
        } else {
            errors.showMessages();
        }
    };                                                                                                                                                                                                                                                                                                                                                          

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj)
        console.log(obj);
    }
    
    return (
        <div>

        {/*SEO Support*/}
        <Helmet>
            <title>MultiKart | CheckOut Page</title>
            <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
        </Helmet>
        {/*SEO Support End */}

        <Wraper  title={'Checkout'}/>

        <section className="section-b-space">
            <div className="container padding-cls">
                <div className="checkout-page">
                    <div className="checkout-form">

                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="checkout row">
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="checkout-title">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row check-out">
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">First Name</div>
                                            <input type="text" className={`${errors.firstName?'error_border':''}`} name="first_name" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.firstName && 'First name is required'}</span>
                                           
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Last Name</div>
                                            <input type="text" className={`${errors.last_name?'error_border':''}`}  name="last_name" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.last_name && 'Last name is required'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Phone</div>
                                            <input type="text" name="phone" className={`${errors.phone?'error_border':''}`} ref={register({ required: true, pattern: /[6-9]{1}[0-9]{9}/ })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.phone && 'Please enter proper phonenumber.'}</span>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Email Address</div>
                                            <input className="form-control" className={`${errors.email?'error_border':''}`} type="text" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.email && 'Please enter proper email address .'}</span>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country</div>
                                            <select name="country" onChange={setStateFromInput} ref={register({ required: true })}>
                                                <option>India</option>
                                                <option>South Africa</option>
                                                <option>United State</option>
                                                <option>Australia</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Address</div>
                                            <input className="form-control" className={`${errors.address?'error_border':''}`} type="text" name="address" ref={register({ required: true, min: 20, max: 120 })} placeholder="Street address" onChange={setStateFromInput} />
                                            <span className="error-message">{errors.address && 'Please right your address .'}</span>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Town/City</div>
                                            <input className="form-control" type="text" className={`${errors.city?'error_border':''}`} name="city" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.city && 'select one city'}</span>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                            <div className="field-label">State / County</div>
                                            <input className="form-control" type="text" className={`${errors.state?'error_border':''}`} name="state" ref={register({ required: true })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.state && 'select one state'}</span>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                            <div className="field-label">Postal Code</div>
                                            <input className="form-control" type="text" name="pincode" className={`${errors.pincode?'error_border':''}`} ref={register({ pattern: /\d+/ })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.pincode && 'Required integer'}</span>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="checkbox" name="create_account" id="account-option" />
                                                    &ensp; <label htmlFor="account-option">Create An Account?</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="checkout-details">
                                        <div className="order-box">
                                            <div className="title-box">
                                                <div>Product <span> Total</span></div>
                                            </div>
                                            <ul className="qty">
                                                {cartItems && cartItems.map((item) => 
                                                   <li key={item.id}>{item.product.name} × {item.quantity} <span> {item.totalPrice}</span></li> )
                                                }
                                            </ul>
                                            <ul className="sub-total">
                                                <li>Subtotal <span className="count">{cartTotal}</span></li>
                                                <li>Shipping <div className="shipping">
                                                    <div className="shopping-option">
                                                        <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                            <label htmlFor="free-shipping">Free Shipping</label>
                                                    </div>
                                                    <div className="shopping-option">
                                                        <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                            <label htmlFor="local-pickup">Local Pickup</label>
                                                    </div>
                                                </div>
                                                </li>
                                            </ul>

                                            <ul className="total">
                                                <li>Total <span className="count">{cartTotal}</span></li>
                                            </ul>
                                        </div>

                                        <div className="payment-box">
                                             <div className="upper-box">
                                                <div className="payment-options">
                                                    <ul>
                                                        <li>
                                                            <div className="radio-option stripe">
                                                                <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => setpaypal(false)} />
                                                                <label htmlFor="payment-2">Cash on delivery</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="radio-option paypal">
                                                                <input type="radio" name="payment-group" id="payment-1"  onClick={() => setpaypal(true)} />
                                                                    <label htmlFor="payment-1">PayPal<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> 
                                            {!paypal ?
                                            <div className="text-right">
                                                <button type="Submit" className="btn-solid btn" >Place Order</button>
                                            </div>
                                            :
                                            <PayPalButton
                                            amount={cartTotal}
                                            currency="INR"
                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            onSuccess={(details, data) => {
                                              alert("Transaction completed by " + details.payer.name.given_name);
                                              // OPTIONAL: Call your server to save the transaction
                                            //   return fetch("/paypal-transaction-complete", {
                                            //     method: "post",
                                            //     body: JSON.stringify({
                                            //       orderId: data.orderID
                                            //     })
                                            //   });
                                            return handleSubmit(onSubmit)
                                            }}
                                            catchError	= {(err)=>{
                                                alert(err)
                                            }}
                                            onCancel = {(data)=>{
                                                alert('cancel')
                                            }}
                                            options={{
                                              clientId: "AUw2Brm8V3n76kaE9ijuQR5fTr4m2gqzUHVMcFfBtPSjTxVAo4v96M-hzPdtgYkXoi3ZVJes9ddajSg6"
                                            }}
                                          />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

