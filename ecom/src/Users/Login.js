import React,{useState} from 'react'
import Wraper from '../components/Wraper'
import { useForm } from 'react-hook-form';
import LayoutTwo from '../covers/Layout1';

export default function Login() {
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
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
        <LayoutTwo>
        <div>
            <Wraper title={'Login'}/>
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form onSubmit={handleSubmit(onSubmit)} className="theme-form">
                                        <div className="form-group">
                                        <label htmlFor="review">Phone Number</label>
                                            <input type="text" className="form-control" id="review"
                                                   placeholder="Enter your Number"  name="phone"  ref={register({ required: true, pattern: /[6-9]{1}[0-9]{9}/ })} onChange={setStateFromInput} />
                                            <span className="error-message">{errors.phone && 'enter a valid phone number'}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" name='password'ref={register({ required: true,min:5,max:10 })} onChange={setStateFromInput}  />
                                            <span className="error-message">{errors.password && 'password is required'}</span>
                                        </div>
                                        <button type="Submit" className="btn-solid btn" >Place Order</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <a href="#" className="btn btn-solid">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </LayoutTwo>
    )
}
