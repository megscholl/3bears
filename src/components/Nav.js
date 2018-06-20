import React, { Component } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import Block_logo from './images/block_png.png'

class Nav extends Component {
    render() {
        return(
            <div className="top-padding">
                <img src={Block_logo} alt="3Bears Block logo" className="block-logo"/>
                <Menu className="nav-bar">
                        <Menu.Item className="item"><NavLink to="/home" className="nav-link">home</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/companies" className="nav-link">companies</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/discover" className="nav-link">cultures</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/research" className="nav-link">research</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/reviews" className="nav-link">write a review</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/about" className="nav-link">about</NavLink></Menu.Item>
                        <Menu.Item className="item"><NavLink to="/contact" className="nav-link">contact</NavLink></Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default Nav;