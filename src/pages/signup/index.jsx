import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';
import LoginPageImg from '../../assets/images/LoginPageImg/Image.png'


const index = () => {
    return (
        <>

            <div className="login-p-box ">

                <div className="login-p-box-inner d-flex">
                    <div className="login-p-left col-6">
                        <div className="special-container d-flex align-items-center justify-content-center flex-wrap">


                            <div className="login-p-l-top mb-4 mt-0">
                                <h1 className='login-p-l-t-title fw-bolder mt-0'>
                                    Welcom back to <span className='login-p-l-t-title-span'>OrgaFarm</span>
                                </h1>
                            </div>



                            <div className="login-p-l-center">
                                <h2 className="login-p-l-c-text mb-3">SignUp</h2>
                                <form action="#">
                                    <input className='login-p-l-c-input' type="text" placeholder='Email' />
                                    <label className='d-flex align-items-center' htmlFor="password">
                                        <input className='login-p-l-c-input mt-3' type="password" placeholder='Password' />

                                    </label>

                                    <label className='d-flex align-items-center' htmlFor="confirm-password">
                                        <input className='login-p-l-c-input mt-3' type="password" placeholder='Confirm Password' />

                                    </label>

                                    <div className='div d-flex align-items-center mt-3 mb-3'>
                                    </div>

                                    <button className='login-p-button fw-bold' type='submit'>SignUp</button>

                                    <p className='get-started mt-3 mb-0'>Already have an account ? <NavLink className="get-started-nav text-decoration-none" to="/login">Login</NavLink></p>

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