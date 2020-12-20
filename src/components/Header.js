import React from 'react';

const Header = ({countCartItems}) => {
    return (
        <header className="header blocks">
            <div className='logo-div'>
                <img className="logo" src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"
                     alt="logo"/>
                <h2 className="d-flex align-items-center ml-1">knygos.com</h2>
            </div>
            <div>
                <a className="mr-3"  href="/">Pagrindinis</a>
                <a href="/cart">
                    Krepšelis{''}
                    {countCartItems ? (<button
                        className="btn bg-info text-white ml-1 btn-sm">{countCartItems}</button>) : ('')}</a>
            </div>
        </header>
    );
};

export default Header;