import React from 'react'
import './home.css'
import coworkers from './images/open-space-2.jpg'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome to 3Bears</h1>
                <div className="quote-container">
                    <blockquote className="quote-blockquote">“...an understanding of our individual personality is profoundly important in maximizing our happiness and productivity at work!”
                    <h6 className="author">dr. kelly schofield, good&co 2016</h6>
                    </blockquote>
                </div>

                
                <div className="banner-container"><img src={coworkers} alt="pingpong office" className="banner"/></div> 
            </div>
        )
    }
}

    export default HomePage;
