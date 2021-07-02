import React from 'react'
import { NavLink } from 'react-router-dom'
import './SocialIcon.scss'

const SocialIcon = ({name, path, icon}) => {
    return (
        <NavLink to={path} className="social__item">
            <img className="social__icon" src={icon} alt={name} />
        </NavLink>
    )
}

export default SocialIcon
