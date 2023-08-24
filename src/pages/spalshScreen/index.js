import React from 'react';
import './style.css';
import logo from '../../assets/images/logo.png'

function SplashScreen({ onAnimationEnd }) {
    return (
        <div className="splash-screen" onAnimationEnd={onAnimationEnd}>
            <img src={logo} alt='' loading='lazy' />
        </div>
    );
}

export default SplashScreen;
