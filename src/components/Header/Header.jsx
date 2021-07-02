import React, { useEffect, useState } from 'react'
import './Header.scss'
import NavContainer from '../Nav/NavContainer'
import CartNav from './CartNav/CartNav'
import BurgerMenu from './BurgerMenu/BurgerMenu'

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState (false)

    const changeOpacity = () => {
        
        if (window.scrollY > 0) {
            setHeaderOpacity(true)
        } else {
            setHeaderOpacity(false)
        }
        
    }
    
    useEffect(() => {
        window.addEventListener("scroll", changeOpacity)
        
        return () => window.removeEventListener("scroll", changeOpacity)
    },[headerOpacity])

    return (
        <header className={headerOpacity ? `header header--scrolled` : `header`}>
            <div className="container">
                <div className="header__inner">
                    <NavContainer />
                    <CartNav />
                    <BurgerMenu />
                </div> 
            </div>
        </header>
    )
}

export default Header

