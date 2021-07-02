import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { navData } from '../../additionalData/navItems'
import { getNavItemsAC } from '../../redux/navigationReducer'
import { getNavItems } from '../../redux/navigationSelector'
import Nav from './Nav'

const NavContainer = ({navItems, getNavItems}) => {

    useEffect(() => {
        if(!navItems.length) {
            getNavItems(navData)
        }
    })
    
    return <Nav navItems={navItems}/> 
}

const mapStateToProps = (state) => {
    return {
        navItems: getNavItems(state)
    }
}


export default connect(mapStateToProps, {getNavItems: getNavItemsAC})(NavContainer)