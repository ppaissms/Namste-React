import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="images/logo.png"
                    alt='logo'
                    width={100}
                    height={100} />
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>Cart</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;