import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import CompanyForm from './Form';
import Reminder from './OnLoadModal';



class App extends Component {

  
  syncing() {
    console.log("I AM SYNCING", this.state.userObj.uid)
    }  


  render() {
    return (
      <div>
      <div className="modal-css"><Reminder /></div>
          <Nav />
          <Main />
          <CompanyForm />
          <Footer />
      </div>
    );
  }
}

export default App;
