import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import { useForm } from 'react-hook-form';
import Wraper from './Wraper';

export default function Checkout() {
    // initialize the hook
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
            console.log(data)
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
                                                {/* {cartItems.map((item, index) => { */}
                                                   <li key={'index'}>{'item.name'} × {'item.qty'} <span>{'symbol'} {'item.sum'}</span></li> })
                                                {/* } */}
                                            </ul>
                                            <ul className="sub-total">
                                                <li>Subtotal <span className="count">{'symbol'}{'total'}</span></li>
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
                                                <li>Total <span className="count">{'symbol'}{'total'}</span></li>
                                            </ul>
                                        </div>

                                        <div className="payment-box">
                                            {/* <div className="upper-box">
                                                <div className="payment-options">
                                                    <ul>
                                                        <li>
                                                            <div className="radio-option stripe">
                                                                <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />
                                                                <label htmlFor="payment-2">Stripe</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="radio-option paypal">
                                                                <input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('paypal')} />
                                                                    <label htmlFor="payment-1">PayPal<span className="image"><img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/></span></label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                   
                                            <div className="text-right">
                                                <button type="Submit" className="btn-solid btn" >Place Order</button>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row section-t-space">
                                <div className="col-lg-6">
                                    <div className="stripe-section">
                                        <h5>stripe js example</h5>
                                        <div>
                                            <h5 className="checkout_class">dummy test</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4242424242424242</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>2/2020</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>2222</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-sm-t-2">
                                    <div className="stripe-section">
                                        <h5>paypal example</h5>
                                        <div>
                                            <h5 className="checkout_class">dummy test</h5>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>cart number</td>
                                                        <td>4152521541244</td>
                                                    </tr>
                                                    <tr>
                                                        <td>mm/yy</td>
                                                        <td>11/18</td>
                                                    </tr>
                                                    <tr>
                                                        <td>cvc</td>
                                                        <td>521</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

