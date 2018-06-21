
import React, { Component } from 'react';
import './research.css';
import ContactButton from './Button'


class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">Contact 3Bears</h1>
                <div className="center-btn">
                    <ContactButton />
                </div>
            </div>
        )
    }
}


export default Contact;

