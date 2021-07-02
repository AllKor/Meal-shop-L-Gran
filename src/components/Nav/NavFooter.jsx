import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const NavFooter = ({navItems}) => {
    
    return (
        <nav className="nav nav--footer">
            {navItems.map(item => <NavLink key={item.name} className="nav__item" to={item.path} >{item.name}</NavLink> )}
        </nav>
    )
}

export default NavFooter