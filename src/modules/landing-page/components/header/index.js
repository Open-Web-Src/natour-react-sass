import React from 'react';
import logo from 'assets/images/landing-page/logo-white.png';
import './styles.scss';
import Button from 'commons/components/button';

const Header = () => {

    return (
        <header className="header">

            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>

                <Button 
                    href="#" 
                    text="Discover our tours"
                    className="btn btn--white btn--animated"
                />
            </div>

        </header>
    );
}

export default Header;