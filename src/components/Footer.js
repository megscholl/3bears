import React, { Component } from 'react';
import './footer.css';
import Inline_logo from './images/inline_png.png';

class Footer extends Component {
    render() {
        return(
            <div className="footer center-footer">
                <img src={Inline_logo} alt="3Bears inline logo" className="inline-logo"/>
                <h5>design & development by meg scholl</h5>
                <h6>images from unsplash</h6>
            </div>
        )
    }
}


export default Footer;