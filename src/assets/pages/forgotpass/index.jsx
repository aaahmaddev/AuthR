import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>
            <div className="main d-flex align-items-center flex-wrap justify-content-center">
                <h1 className='forgotpass-p-title'>
                    Akkauntinga uxlading endi yangi akkaunt och:)
                </h1>
                <button className='forgotpass-p-button mt-3'>
                    <NavLink className="forgotpass-nav text-decoration-none text-white" to="/login">Orqaga</NavLink>
                </button>
            </div>
        </>
    );
};

export default index;