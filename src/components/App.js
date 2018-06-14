import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import Companies from './Companies'
import Research from './Research'
import CompanyForm from './Form'
import About from './About'
import Contact from './Contact'
import Reminder from './OnLoadModal'
import CompanyCards from './Cards'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'




class App extends Component {

  render() {
    return (
      <Router path="/">
        <div className="App">

        <div className="modal-css"><Reminder /></div>
        <Nav />
            {/*<Main />*/}   
                 
        <Route path="/companies" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><Companies /></div>)
          }
        }/>   

        <Route path="/discover" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><CompanyCards /></div>)
          }
        }/>
        
        <Route path="/research" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><Research /></div>)
          }
        }/>
      
        
        <Route path="/reviews" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><CompanyForm /></div>)
          }
        }/>

        <Route path="/about" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><About /></div>)
          }
        }/>

        <Route path="/contact" exact strict render={
          () => {
            return(<Nav />, <div className="routing-padding"><Contact /></div>)
          }
        }/>

            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
