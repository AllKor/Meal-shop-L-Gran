import React from 'react'
import './Logo.scss'
import { NavLink } from 'react-router-dom'



const Logo = ({titleSize, subtitleSize}) => {

    return (
        <NavLink to="/" style={{textDecoration: 'none'}}>
                <div className="logo">
                    <h1 className="logo__title" style={{fontSize: titleSize}}>L'Gran</h1>
                    <h2 className="logo__subtitle" style={{fontSize: subtitleSize}}>Твой выбор</h2>
                </div>
        </NavLink>
    )
}

export default Logo
