import React, { Component } from 'react';
import './companies.css';
import './main.css';


class Companies extends Component {
    render() {
        return(
            <div>
                <h1>Company Cultures</h1>
                
                <div className="quote-container">
                    <blockquote className="quote-blockquote"> "A company culture that facilitates employee <em>happiness</em> means <em>lower turnover</em> and <em>better company performance</em>. Employees are loyal and companies perform better. It’s a win-win."
                    </blockquote>
                    <h6 className="author">zach buylgo, 'the 4 elements that make a great company culture'</h6>
                </div>

            </div>
    )}
}


export default Companies;