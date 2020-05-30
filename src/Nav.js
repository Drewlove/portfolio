import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <nav>
            <div className='nav-links-container'>
            <NavLink className='nav-link' activeClassName='nav-link-active' to ='/about'>About</NavLink>
            <NavLink className='nav-link' activeClassName='nav-link-active' to ='/skills'>Skills</NavLink>
            <NavLink className='nav-link' activeClassName='nav-link-active' to ='/projects'>Projects</NavLink>
            <NavLink className='nav-link' activeClassName='nav-link-active' to ='/contact'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Nav 