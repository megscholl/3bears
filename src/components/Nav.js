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
                        <li><NavLink to="/home">home</NavLink></li>
                        <li><NavLink to="/companies">companies</NavLink></li>
                        <li><NavLink to="/discover">discover</NavLink></li>
                        <li><NavLink to="/research">research</NavLink></li>
                        <li><NavLink to="/reviews">write a review</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/contact">contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav;