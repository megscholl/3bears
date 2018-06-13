import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
// import Main from './Main';
import Footer from './Footer';
import Companies from './Companies';
import CompanyForm from './Form';
import Reminder from './OnLoadModal';
import CompanyCards from './Cards';
import {Route} from 'react-router-dom';
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
            return(<Companies />)
          }
        }/>   

        <Route path="/discover" exact strict render={
          () => {
            return(<CompanyCards />)
          }
        }/>
        
{/*        <Route path="/research" exact strict render={
          () => {
            return(<Research />)
          }
        }/>
      */}
        
        <Route path="/reviews" exact strict render={
          () => {
            return(<CompanyForm />)
          }
        }/>

{/*        <Route path="/about" exact strict render={
          () => {
            return(<About />)
          }
        }/>

        <Route path="/contact" exact strict render={
          () => {
            return(<Contact />)
          }
        }/>
      */}
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
