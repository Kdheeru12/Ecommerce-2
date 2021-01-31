import React,{useState} from 'react'
import Wraper from '../components/Wraper'
import { useForm } from 'react-hook-form';
import LayoutTwo from '../covers/Layout1';
import axios from 'axios'


export default function Signup() {
    const [obj, setObj] = useState({});
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {
        console.log('sss');
        if (data !== '') {
            axios({
                url:'http://127.0.0.1:8000/graphl',
                method:'POST',
                data:{
                    query:`mutation{
                    register(
                      email:${data.email}
                      username:${data.username}
                      password1:${data.password}
                      password2:${data.password}
                    ) {
                      success
                      errors
                    }
                  }`
            }}).then(res =>console.log(res.data))
            .catch(err => console.log(err.message))
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
                    <div className="col-lg-12">
                        <h3>create account</h3>
                        <div className="theme-card">
                            <form  onSubmit={handleSubmit(onSubmit)} className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">UserName</label>
                                        <span className="error-message">{errors.username && 'Please enter your Name .'}</span>
                                        <input type="text" className="form-control" id="username" name="username"
                                               placeholder="Name" required="" ref={register({ required: true})} onChange={setStateFromInput} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <span className="error-message">{errors.email && 'Please enter proper email address .'}</span>
                                        <input type="text" className="form-control" id="email"
                                               placeholder="Email" name="email" required="" ref={register({ required: true, pattern: /^\S+@\S+$/i })} onChange={setStateFromInput} />
                                        <br></br>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="review">Password</label>
                                        <span className="error-message">{errors.password && 'password is required'}</span>
                                        <input type="password" className="form-control" id="review"
                                               placeholder="Enter your password" name="password" required="" ref={register({ required: true, min: 5, max: 14  })} onChange={setStateFromInput} />
                                    </div>
                                    <br/>
                                    <button type='submit' className="btn btn-solid">create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    </LayoutTwo>
    )
}
