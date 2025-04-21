import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import LoginPageImg from '../../../images/LoginPageImg/Image.png'
import EyeIcon from '../../../images/LoginPageImg/eye.png'
const index = () => {
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
                                <form action="#">
                                    <input className='login-p-l-c-input' type="text" placeholder='Email' />
                                    <label className='d-flex align-items-center' htmlFor="password">
                                        <input className='login-p-l-c-input mt-3' type="password" placeholder='Password' />
                                        <img className='eye-icon' src={EyeIcon} alt="" />
                                    </label>

                                    <div className='div d-flex align-items-center mt-3 mb-3'>

                                        <label className='signup-checkbox'>
                                            <input className='me-2' type="checkbox" name="remember"/>
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

export default index;