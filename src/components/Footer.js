import React, { Component } from 'react';
import './footer.css';
import Inline_logo from './images/inline_png.png';
import { Button, Icon } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return(
            <div className="footer center-footer">

                <img src={Inline_logo} alt="3Bears inline logo" className="inline-logo"/>
                <h5>design & development by meg scholl</h5>
                <h6>images from unsplash</h6>
                
                <div className="footer-btn">
                    <a href="http://www.linkedin.com/in/meg-scholl" alt="meg scholl linedin" title="meg scholl linedin" target="_blank" rel="noopener noreferrer">
                        <Button color='linkedin'>
                            <Icon name='linkedin' /> Visit Meg's LinkedIn
                        </Button>
                    </a>
                </div>

            </div>
        )
    }
}


export default Footer;