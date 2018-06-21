
import React, { Component } from 'react';
import './research.css';
import CompanyCards from './Cards'


class Discover extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">Discovering 3Bears Company Cultures</h1>
                
                <CompanyCards />
            </div>
        )
    }
}


export default Discover;


