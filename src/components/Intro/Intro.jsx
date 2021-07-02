import React from 'react'
import './Intro.scss'
import backgroundImage from '../../assets/images/3.jpg'
import backgroundImageSec from '../../assets/images/1.png'
import {NavLink} from 'react-router-dom'
import Logo from '../Logo/Logo'

const Intro = () => {
    return (
        <div className="intro" style={{backgroundImage: `url(${backgroundImageSec}),url(${backgroundImage})`}}>
            <div className="container">
                <div className="intro__Inner">
                    <div className="intro__content">
                        <p className="intro__text">Начните завтрак с нашего эксклюзивного меню</p>
                        <NavLink className="intro__link" to="/menu">Узнать больше...</NavLink>
                    </div>
                    <Logo className="intro__logo" titleSize={"9rem"} subtitleSize={"2rem"} />
                    <NavLink className="intro__booking" to="/booking">Закажите завтрак <span>прямо сейчас</span></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Intro
