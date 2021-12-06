import React from 'react'
import "./Categories.css"

function Categories() {
    return (
        <div className="cat-cont">
            <button className="main-cat"><span className="main-cat-text">Tümü</span></button>
            <button className="categories"><span className="category-text">Teknoloji</span></button>
            <button className="categories"><span className="category-text">Donanım</span></button>
            <button className="categories"><span className="category-text">Oyunlar</span></button>
            <button className="categories"><span className="category-text">Mobil</span></button>
        </div>
    )
}

export default Categories
