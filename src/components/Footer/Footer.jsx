import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.scss'
import NavContainerFooter from '../Nav/NavContainerFooter'
import SocialIconsContainer from '../SocialIcons/SocialIconsContainer'

const Footer = () => {
    return (
        <footer className="footer">
            <Logo />
            <NavContainerFooter />
            <SocialIconsContainer />
        </footer>
    )
}

export default Footer
