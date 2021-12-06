import React from 'react'
import "./Main.css"
import mainPhoto from "../../assets/photo.png"

function Main() {
    return (
        <div className="post">
            <img alt="deneme" src={mainPhoto} className="main-photo"/>
            <div className="info-container">
                <div className="main-item-category"><span>TEKNOLOJI</span></div>
                <div className="main-item-headline"><h1>En Yeni 7 Oyun Monitörü - 2021</h1></div>
                <div className="main-item-info"><p>Oyun monitörleri söz konusu olduğunda, herkese uyan tek bir monitör yoktur. Her kullanıcı, 
                    kullandığı ekipmandan oynadığı oyunlara farklı monitörlere ihtiyaç duyar. </p></div>
                <div className="main-item-date"><p>6 AĞUSTOS 2021 . 22 OKUMA</p></div>
            </div>
            
        </div>
    )
}

export default Main
