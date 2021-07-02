import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { navData } from '../../additionalData/navItems'
import { getNavItemsAC } from '../../redux/navigationReducer'
import { getNavItems } from '../../redux/navigationSelector'
import NavFooter from './NavFooter'

const NavContainerFooter = ({navItems, getNavItems}) => {

    useEffect(() => {
        if(!navItems.length) {
            getNavItems(navData)
        }
    },[navItems.length,getNavItems])
    
    return <NavFooter navItems={navItems}/> 
}

const mapStateToProps = (state) => {
    return {
        navItems: getNavItems(state)
    }
}


export default connect(mapStateToProps, {getNavItems: getNavItemsAC})(NavContainerFooter)