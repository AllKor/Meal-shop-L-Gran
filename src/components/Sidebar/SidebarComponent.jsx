import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { navData } from '../../additionalData/navItems'
import { closeSidebarAC, getNavItemsAC } from '../../redux/navigationReducer'
import { getIsSidebarOpen, getNavItems } from '../../redux/navigationSelector'
import Sidebar from './Sidebar'

const SidebarComponent = ({navItems,getNavItems,isSidebarOpen, closeSidebar}) => {

    useEffect(() => {
        if(!navItems.length) {
            getNavItems(navData)
        }
    },[navItems.length,getNavItems])

    
    return <Sidebar navItems={navItems} isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
}

const mapStateToProps = (state) => {
    return {
        navItems: getNavItems(state),
        isSidebarOpen: getIsSidebarOpen(state)
    }
}

export default connect(mapStateToProps,
     {
        getNavItems: getNavItemsAC,
        closeSidebar: closeSidebarAC 
    })(SidebarComponent)
