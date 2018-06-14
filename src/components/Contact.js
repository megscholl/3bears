
import React, { Component } from 'react';
import './research.css';
import { Button, Icon } from 'semantic-ui-react'


class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">Contact 3Bears</h1>
                <div className="center-btn">
                    <a href="mailto:meghan.e.scholl@gmail.com">
                        <Button animated>
                        <Button.Content visible>Email Us!</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right mail' />
                        </Button.Content>
                        </Button>
                    </a>
                </div>
            </div>
        )
    }
}


export default Contact;

