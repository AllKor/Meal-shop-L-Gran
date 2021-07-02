import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'

const Sidebar = ({navItems, isSidebarOpen, closeSidebar}) => {

    return (
        <aside  className={isSidebarOpen ? "sidebar active" : "sidebar"}>
            <div onClick={closeSidebar}  className="sidebar__close"></div>
            
            <nav className="sidebar__nav">
            <Logo titleSize={"4rem"} subtitleSize={"1.1rem"} />
                {navItems.map(item => <NavLink 
                                        onClick={closeSidebar} 
                                        key={item.name} 
                                        className="sidebar__nav-item" 
                                        to={item.path} 
                                      >
                                        {item.name}
                                      </NavLink>)}
            </nav>
        </aside>
    )
}

export default Sidebar
