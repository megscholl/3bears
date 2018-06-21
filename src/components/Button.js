
import React, { Component } from 'react';
import './research.css';
import { Button, Icon } from 'semantic-ui-react'


class ContactButton extends Component {
    render() {
        return(
            <div>
                    <a href="mailto:meghan.e.scholl@gmail.com">
                        <Button animated>
                        <Button.Content visible>Email Us!</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right mail' />
                        </Button.Content>
                        </Button>
                    </a>
                </div>
        )
    }
}


export default ContactButton;
