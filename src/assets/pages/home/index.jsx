import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>

            <div className="main">
                <div className="home-top text-center mb-4">
                    <h1 className='home-title text-start'>Welcome!..</h1>
                </div>
                <div className="home-bottom d-flex align-items-center justify-content-between">
                    <NavLink className="login-nav text-decoration-none" to="/login">
                        <button className='home-button-l me-5 fw-medium'>Login</button>
                    </NavLink>
                    <NavLink  className="sign-up-nav text-decoration-none" to="/signup">
                        <button className='home-button-r fw-medium'>SignUp</button>
                    </NavLink>
                </div>
            </div>

        </>
    );
};

export default index;