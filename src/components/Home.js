import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import WorkBear from './images/work-bear.png'
import coworkers from './images/open-space-2.jpg'
import exercise from './images/home-flex-photos/balloffice.jpg'
import coaching from './images/home-flex-photos/coaching_mw.jpg'
import messy from './images/home-flex-photos/messy-desk.jpg'
import home from './images/home-flex-photos/office-space-home2.jpg'
import open from './images/home-flex-photos/open-office.jpg'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1 className="home-h1">Welcome to 3Bears</h1>
                <div className="quote-container">
                    <blockquote className="quote-blockquote">“...an understanding of our individual personality is profoundly important in maximizing our happiness and productivity at work!”
                    <h6 className="author">dr. kelly schofield, good&co 2016</h6>
                    </blockquote>

                    
                    <div><img src={WorkBear} alt="3bear - cool icon" className="intro-icon"/></div>
                </div>

                
                <div className="banner-container"><img src={coworkers} alt="pingpong office" className="banner"/></div> 

                <h1 className="home-h1">Find your Culture Fit</h1>

                <h2 className="home-h2">feel confident where you work</h2>
                    <div className="home-photo-flex">
                        <img src={exercise} alt="" className="home-photo-items"/>
                        <img src={coaching} alt="" className="home-photo-items"/>
                    </div>

                <h2 className="home-h2">find companies where you'll fit in from the start</h2>
                    <div className="home-photo-flex">
                        <img src={coworkers} alt="" className="home-photo-items"/>
                        <img src={messy} alt="" className="home-photo-items"/>
                    </div>

                <h2 className="home-h2">discover companies that share your personal values</h2>
                    <div className="home-photo-flex">
                        <img src={home} alt="" className="home-photo-items"/>
                        <img src={open} alt="" className="home-photo-items"/>
                    </div>

            <div className="calltoactions">
                <div className="center-home-btn">
                    <NavLink to="/companies">
                        <Button animated>
                            <Button.Content visible>Discover Companies on 3Bears!</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                    </NavLink>
                </div>
                
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
            </div>

            
            </div>
        )
    }
}

    export default HomePage;
