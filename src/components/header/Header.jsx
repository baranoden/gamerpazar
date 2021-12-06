import React from 'react'
import "./Header.css"



function Header() {
    return (
        <div className="header">
            <div className="header-container">
            <div className="logo-cont">
            <h1 className="logo"><span>gamer<span className="half-logo">pazar</span></span></h1>
            
            </div>
            <div className="button-cont">
                <button className="button"><span className="button-text">Giriş Yap</span></button>
            </div>
            </div>
        </div>
    )
}

export default Header
