import React from 'react'
import Blog from './blog/Blog'
import Categories from './categories/Categories'
import Header from './header/Header.jsx'
import "./Container.css"
import Main from './main/Main'

function Container() {
    return (
        <div className="container">
            <div><Header /></div>
            <div><Categories /></div>
            <div><Main /></div>
            <div><Blog /></div>
            
           
            
           
        </div>
    )
}

export default Container
