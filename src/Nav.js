import React, {Component} from 'react'
import {IndexLink, NavLink} from 'react-router-dom'

class Nav extends Component{

    state = {
        displayModal: false, 
        displayMenu: false, 
    }

    toggleModalDisplay(){
        const displayModal = !this.state.displayModal
        this.setState({displayModal})
    }

    handleClick(e){
        const displayMenu = !this.state.displayMenu
        this.setState({displayMenu})
    }

    handleNavClick(){
        const displayMenu = false
        this.setState({displayMenu})
    }

    getClassName(){
        return this.state.displayMenu === true ? 'nav-display-menu' : ''
    }
    render(){
        return(
            <nav className={this.getClassName()}>
            <button className='nav-hamburger-button' onClick={e => this.handleClick(e)}>
                <div className='nav-hamburger top'></div>
                <div className='nav-hamburger middle'></div>
                <div className='nav-hamburger bottom'></div>
            </button>
            <section className='nav-links-wrapper'>
                <NavLink className='nav-link' activeClassName='nav-link-active' onClick={e => this.handleNavClick(e)} to='/' exact>Home</NavLink>
                <NavLink className='nav-link' activeClassName='nav-link-active' onClick={e => this.handleNavClick(e)} to='/about'>About</NavLink>
                <NavLink className='nav-link' activeClassName='nav-link-active' onClick={e => this.handleNavClick(e)} to='/skills'>Skills</NavLink>
                <NavLink className='nav-link' activeClassName='nav-link-active' onClick={e => this.handleNavClick(e)} to='/projects'>Projects</NavLink>
                <NavLink className='nav-link' activeClassName='nav-link-active' onClick={e => this.handleNavClick(e)} to='/contact'>Contact</NavLink>
            </section>
        </nav> 
        )
    }
}



    // return(
    //     // <nav>
    //     //     <div className='nav-links-container'>
    //     //     <NavLink className='nav-link' activeClassName='nav-link-active' to ='/' exact>Home</NavLink>
    //     //     <NavLink className='nav-link' activeClassName='nav-link-active' to ='/about'>About</NavLink>
    //     //     <NavLink className='nav-link' activeClassName='nav-link-active' to ='/skills'>Skills</NavLink>
    //     //     <NavLink className='nav-link' activeClassName='nav-link-active' to ='/projects'>Projects</NavLink>
    //     //     <NavLink className='nav-link' activeClassName='nav-link-active' to ='/contact'>Contact</NavLink>
    //     //     </div>
    //     // </nav>

    // )
// }

export default Nav 