
import React, { Component } from 'react';
import './research.css';
import CompanyCards from './Cards'
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


class Discover extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">Discovering 3Bears Company Cultures</h1>
                
                <CompanyCards />
                <br />
                <br />
                <div className="center-home-btn">
                    <NavLink to="/reviews">
                        <Button animated>
                            <Button.Content visible>Write a Review about your Company!</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                    </NavLink>
                </div>
                                
                <div className="center-home-btn">
                    <NavLink to="/research">
                        <Button animated>
                            <Button.Content visible>Read about 3Bears Research</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                    </NavLink>
                </div>
            </div>
        )
    }
}


export default Discover;


