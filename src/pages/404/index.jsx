import React from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';

const index = () => {
    return (
        <>
            <section class="container">
                <div class="error">
                    <h1>Uh Ohh!</h1>
                    <p>We couldn't find the page that you're looking for :(</p>
                    <div class="cta">
                        <NavLink class="text-white text-decoration-none" to="/">
                            <button className="button1">Go Back</button>
                        </NavLink>
                    </div>
                </div>
                <img src="https://github.com/smthari/404-page-using-html-css/blob/Starter/Images/404.png?raw=true" alt="home image" class="hero-img" />
            </section>
        </>
    );
};

export default index;