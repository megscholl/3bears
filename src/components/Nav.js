import React, { Component } from 'react';
import './nav.css';
import Block_logo from './images/block_png.png';

class Nav extends Component {
    render() {
        return(
            <div>
                <img src={Block_logo} alt="3Bears Block logo" className="block-logo"/>
                <nav className="nav-bar">
                    companies
                    discover
                    research
                    write a review
                    about
                    contact
                </nav>
            </div>
        )
    }
}


export default Nav;