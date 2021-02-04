import React,{useState} from 'react'
import Wraper from '../components/Wraper'
import { useForm } from 'react-hook-form';
import LayoutTwo from '../covers/Layout1';
import { useApolloClient, useMutation } from '@apollo/client';
import Error from '../covers/Error';
import { LOGIN_USER } from '../Graphql/Mutation';
import { useHistory } from 'react-router-dom';
import { isLoggedInVar } from '..';
// pattern: /[6-9]{1}[0-9]{9}/
export default function Login(props) {
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 
    const [ayerror,setayerror] = useState(null)
    const hello = (props.location.state) || null;
    const [loginUser] = useMutation(LOGIN_USER)
    const [lerror, setlerror] = useState(null)
    const history = useHistory()
    // console.log(hello);
    // console.log(props.location.state)
    // console.log();
    const onSubmit = data => {

        if (data !== '') {
            console.log('ddd');
            const sent = async () => {
            
                const res =  await loginUser({
                    variables:{username:data.email,password:data.password}
                }).catch(err =>setayerror(err))
                console.log(res);
                if(res){
                    if(res.data.tokenAuth.success){
                        localStorage.setItem('token',res.data.tokenAuth.token)
                        localStorage.setItem('refresh',res.data.tokenAuth.refreshToken)
                        isLoggedInVar(true)
                        history.push('/')
                    }
                    else if(res.data.tokenAuth.errors){
                        setlerror(res.data.tokenAuth.errors.nonFieldErrors[0].message)
                    }
                }
            }
            sent()

        } else {
            errors.showMessages();
        }
    };                                                                                                                                                                                                                                                                                                                                                          

    const setStateFromInput = (event) => {
        obj[event.target.name] = event.target.value;
        setObj(obj)
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
                                <span>{hello &&  `user registered email ${hello} please login`}</span>
                                <div className="theme-card">
                                    <form onSubmit={handleSubmit(onSubmit)} className="theme-form">
                                        <div className="form-group">
                                        <label htmlFor="review">Phone Number</label>
                                        <span className="error-message">{errors.email && 'enter a valid email address'}</span>
                                            <input type="text" className="form-control" id="review"
                                                   placeholder="Enter your Number"  name="email"  ref={register({ required: true,pattern: /^\S+@\S+$/i  })} onChange={setStateFromInput} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <span className="error-message">{errors.email && 'enter a valid email address'}</span>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" name='password' ref={register({ required: true,pattern: /^\S*$/ })} onChange={setStateFromInput}  />
                                        </div>
                                        <div className="form-group">
                                        <span className="error-message">{lerror && lerror}</span>
                                        </div>
                                        <button type="Submit" className="btn-solid btn" >Place Order</button>
                                    </form>
                                    {ayerror && <Error setayerror={setayerror} error={ayerror} /> }
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
