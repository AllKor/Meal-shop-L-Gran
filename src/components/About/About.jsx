import React from 'react'
import './About.scss'
import aboutBackground from '../../assets/images/2.jpg'
import { NavLink } from 'react-router-dom'
import TitleGroup from '../TitleGroup/TitleGroup'
import { useSelector } from 'react-redux'
import {getMainText} from '../../redux/aboutSelector'


const About = () => {

    const mainText = useSelector(state => getMainText(state))

    return (
        <div className="about" style={{backgroundImage: `url(${aboutBackground})`}}>
            <div className="container">
                <div className="about__inner">
                    <TitleGroup titleText={"Что такое"} spanTitleText={"L'Gran"} titleMod={"title-group__title--about"} />
                    <div className="about__text">
                        <p>
                        {mainText}
                        </p>
                    </div>
                    <NavLink to="/booking" className="about__link">Выберите и закажите <span>Сейчас</span></NavLink>
                </div>    
            </div>
        </div>
    )
}

export default About
