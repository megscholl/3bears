import React, { Component } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import Block_logo from './images/block_png.png';

class Nav extends Component {
    render() {
        return(
            <div>
                <img src={Block_logo} alt="3Bears Block logo" className="block-logo"/>
                <nav>
                    <ul className="nav-bar">
                        <li><NavLink to="/home" className="nav-link">home</NavLink></li>
                        <li><NavLink to="/companies" className="nav-link">companies</NavLink></li>
                        <li><NavLink to="/discover" className="nav-link">cultures</NavLink></li>
                        <li><NavLink to="/research" className="nav-link">research</NavLink></li>
                        <li><NavLink to="/reviews" className="nav-link">write a review</NavLink></li>
                        <li><NavLink to="/about" className="nav-link">about</NavLink></li>
                        <li><NavLink to="/contact" className="nav-link">contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav;