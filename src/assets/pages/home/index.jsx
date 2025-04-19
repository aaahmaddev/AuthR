import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>

            <div className="main">
                <div className="home-top text-center mb-4">
                    <h1 className='home-title'>Welcome!</h1>
                </div>
                <div className="home-bottom d-flex align-items-center justify-content-between">
                    <button className='home-button-l me-5'>
                        <NavLink className="login-nav text-decoration-none" to="/login">Login</NavLink>
                    </button>
                    <button className='home-button-r'>
                        <NavLink className="sign-up-nav text-decoration-none" to="/signup">SignUp</NavLink>
                    </button>
                </div>
            </div>

        </>
    );
};

export default index;