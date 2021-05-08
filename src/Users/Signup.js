import React,{useState} from 'react'
import Wraper from '../components/Wraper'
import { useForm } from 'react-hook-form';
import LayoutTwo from '../covers/Layout1';
import { useMutation } from '@apollo/client';
import Error from '../covers/Error';
import { ADD_USER } from '../Graphql/Mutation';
import { useHistory } from "react-router-dom";

export default function Signup() {
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 
    const [addUser, { error,data }] = useMutation(ADD_USER);
    const [ayerror,setayerror] = useState(null)
    const [euname, seteuname] = useState(null)
    const [eemail, seteemail] = useState(null);
    const [epass, setepass] = useState(null);
    const history = useHistory();
    
    const onSubmit = data => {
        console.log('sss');
        if (data !== '') {
            console.log('dd');
            const sent = async () => {
            
            const res =  await addUser({
                variables:{email:data.email,username:data.username,password:data.password}
            }).catch(err =>setayerror(err))
            console.log(res);
            if(res){
                if(res.data.register.success){
                    console.log('hhh');
                    history.push({
                        pathname: '/login',
                        state: obj.username
                    })
                }
                else if(res.data.register.errors){
                    seteuname(null)
                    setepass(null)
                    seteemail(null)
                    if (res.data.register.errors.username){
                        seteuname(res.data.register.errors.username[0].message)
                    }
                    if (res.data.register.errors.email){
                        seteemail(res.data.register.errors.email[0].message)
                    }
                    if (res.data.register.errors.password2){
                        setepass(res.data.register.errors.password2[0].message)
                    }
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
        <Wraper title={'create account'}/>
        
        
        {/*Regsiter section*/}
        <section className="register-page section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3>create account </h3>
                        <div className="theme-card">
                            <form  onSubmit={handleSubmit(onSubmit)} className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">UserName</label>
                                        <span className="error-message">{errors.username && 'Please enter your Name .'}</span>
                                        <span className="error-message">{euname && euname}</span>
                                        <input type="text" className="form-control" id="username" name="username"
                                               placeholder="Name" required="" ref={register({ required: true})} onChange={setStateFromInput} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <span className="error-message">{errors.email && 'Please enter proper email address .'}</span>
                                        <span className="error-message">{eemail && eemail}</span>
                                        <input type="text" className="form-control" id="email"
                                               placeholder="Email" name="email" required="" ref={register({ required: true, pattern: /^\S+@\S+$/i })} onChange={setStateFromInput} />
                                        <br></br>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="review">Password</label>
                                        <span className="error-message">{errors.password && 'password is required' }</span>
                                        <span className="error-message">{epass && epass}</span>
                                        <input type="password" className="form-control" id="review"
                                               placeholder="Enter your password" name="password"w required="" ref={register({ required: true,pattern: /^\S*$/})} onChange={setStateFromInput} />
                                    </div>
                                    <br/>
                                    <button type='submit'  className="btn btn-solid">create Account</button>
                                </div>
                            {ayerror && <Error setayerror={setayerror} error={ayerror} /> }
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 right-login">
                    <h3>New Customer</h3>
                    <div className="theme-card authentication-right">
                        <h6 className="title-font">Login</h6>
                        <p>Already Have An Account Please Login</p>
                        <a href="/login" className="btn btn-solid">Login</a>
                    </div>
                </div>
                </div>
            </div>
        </section>

    </div>
    </LayoutTwo>
    )
}
