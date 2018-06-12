import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import CompanyForm from './Form';
import Reminder from './OnLoadModal';
import CompanyCards from './Cards';



class App extends Component {

  render() {
    return (
      <div>
      <div className="modal-css"><Reminder /></div>
          <Nav />
          <Main />
          <CompanyCards />
          <CompanyForm />
          <Footer />
      </div>
    );
  }
}

export default App;
