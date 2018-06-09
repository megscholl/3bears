import React, { Component } from 'react';
import './nav.css';
import Block_logo from './images/block_png.png';

class Nav extends Component {
    render() {
        return(
            <div>
                <img src={Block_logo} alt="3Bears Block logo" className="block-logo"/>
                <nav>
                    <ul className="nav-bar">
                        <li>companies</li>
                        <li>discover</li>
                        <li>research</li>
                        <li>write a review</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Nav;