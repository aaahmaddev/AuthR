import React, { useState } from 'react';
import axios from 'axios';
import './index.css'
import { NavLink } from 'react-router-dom';
import LoginPageImg from '../../assets/images/LoginPageImg/Image.png'
const App = () => {

    const loginUrl = 'http://127.0.0.1:5000/api/login'

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const changeEmail = (e) => {
        const email = e.target.value;
        const pElement = document.getElementById('email-err');
        const passwordElement = document.getElementById('password');

        if (email.length < 5) {
            pElement.textContent = 'minimum 5 ta symbol';
            pElement.style.display = 'block';
            passwordElement.ariaReadOnly = true
        } else {
            pElement.style.display = 'none';
            passwordElement.ariaReadOnly = false;
        }
        setEmail(email)
    }

    const changePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    // const eyeFunction = () => {
    //     const passwordElement = document.getElementById('password');
    //     if (passwordElement.type == 'password'){
    //         passwordElement.type = 'text'
    //     }
    //     else{
    //         passwordElement.type = 'password';
    //     }
    // }

    const loginFunction = (e) => {
        e.preventDefault();

        axios.post(loginUrl, {
            email: email,
            password: password
        })
            .then(function (response) {
                if (response.status == 200) {
                    localStorage.setItem('token', response.data.accessToken)
                    alert('successfully logged in')
                }
            })
            .catch(function (error) {
                console.log(`error: ${error}`);
            })
            .finally(function () {

            })
    }

    return (
        <>

            <div className="login-p-box ">

                <div className="login-p-box-inner d-flex">
                    <div className="login-p-left col-6">
                        <div className="special-container d-flex align-items-center justify-content-center flex-wrap">


                            <div className="login-p-l-top mb-4">
                                <h1 className='login-p-l-t-title fw-bolder'>
                                    Welcom back to <span className='login-p-l-t-title-span'>OrgaFarm</span>
                                </h1>
                            </div>



                            <div className="login-p-l-center">
                                <h2 className="login-p-l-c-text mb-4">Login</h2>
                                <form onSubmit={(e) => loginFunction(e)}>
                                    <label htmlFor="email">
                                        <input onChange={(e) => changeEmail(e)} name='email' id='email' className='login-p-l-c-input' type="email" placeholder='Email' required />
                                    </label>
                                    <p id='email-err'></p>
                                    <label className='d-flex align-items-center' htmlFor="password">
                                        <input onChange={(e) => changePassword(e)} name='password' id='password' className='login-p-l-c-input mt-3' type="password" placeholder='Password' required />

                                    </label>

                                    <div className='div d-flex align-items-center mt-3 mb-3'>

                                        <label className='signup-checkbox'>
                                            <input className='me-2' type="checkbox" name="remember" />
                                            Remember Me
                                        </label>

                                        <NavLink className="forgot-p-nav text-decoration-none" to="/forgotpass">Forgot Password?</NavLink>
                                    </div>

                                    <button className='login-p-button fw-bold' type='submit'>Login</button>



                                    <p className='get-started mt-3 mb-0'>Don't have an account? <NavLink className="get-started-nav text-decoration-none" to="/signup">Get Started</NavLink></p>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="login-p-right col-6">
                        <img className='login-p-r-img img-fluid' src={LoginPageImg} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default App;