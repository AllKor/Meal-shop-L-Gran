import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
import Logo from '../Logo/Logo'

const Nav = ({navItems}) => {
    
    const middle = Math.floor(navItems.length / 2)
    let navStart = []
    let navEnd = []
    
    navItems.map((item, index ) => {

        if(index < middle) {
            navStart = [...navStart, item]
            return navStart
        } else {
            navEnd = [...navEnd, item]
            return navEnd
        }
    })

    return (
        <nav className="nav">
            {navStart.map(item => <NavLink key={item.name} className="nav__item" to={item.path} >{item.name}</NavLink> )}
            <Logo titleSize={"4rem"} subtitleSize={"1.1rem"} />
            {navEnd.map(item => <NavLink key={item.name} className="nav__item" to={item.path} >{item.name}</NavLink> )}
        </nav>
    )
}

export default Nav