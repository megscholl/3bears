import React, { Component } from 'react';
import './App.css';
import './home.css'
import Nav from './Nav'
import Footer from './Footer'
import Companies from './Companies'
import Research from './Research'
import CompanyForm from './Form'
import About from './About'
import Contact from './Contact'
import Reminder from './OnLoadModal'
import Discover from './Discover'
import HomePage from './Home'
import {Route} from 'react-router-dom'




class App extends Component {

  render() {
    return (

      <div className="App">
        <div className="modal-css"><Reminder /></div>
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

        <Route path="/" exact strict render={() => {return(<div className="routing-padding"><HomePage /></div>)}}/> 

        <Route path="/home" exact strict render={() => {return(<div className="routing-padding"><HomePage /></div>)}}/>
                 
        <Route path="/companies" exact strict render={() => {return(<div className="routing-padding"><Companies /></div>)}}/>   

        <Route path="/discover" exact strict render={() => {return(<div className="routing-padding"><Discover /></div>)}}/>
        
        <Route path="/research" exact strict render={() => {return(<div className="routing-padding"><Research /></div>)}}/>
        
        <Route path="/reviews" exact strict render={() => {return(<div className="routing-padding"><CompanyForm /></div>)}}/>

        <Route path="/about" exact strict render={() => {return(<div className="routing-padding"><About /></div>)}}/>

        <Route path="/contact" exact strict render={() => {return(<div className="routing-padding"><Contact /></div>)}}/>

        <Footer />
      </div>
    );
  }
}

export default App;
