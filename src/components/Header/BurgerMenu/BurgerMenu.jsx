import React from 'react'
import { connect } from 'react-redux'
import { closeSidebarAC, openSidebarAC } from '../../../redux/navigationReducer'
import { getIsSidebarOpen } from '../../../redux/navigationSelector'
import './BurgerMenu.scss'

function BurgerMenu({isSidebarOpen,closeSidebar,openSidebar }) {
    return (
        <svg onClick={isSidebarOpen ? closeSidebar : openSidebar} className="burger" viewBox="0 0 100 80">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
        </svg>
    )
}

const mapStateToProps = (state) => {
    return {
        isSidebarOpen: getIsSidebarOpen(state)
    }
}

export default connect(mapStateToProps,
    {
        closeSidebar: closeSidebarAC,
        openSidebar: openSidebarAC
    })(BurgerMenu)
