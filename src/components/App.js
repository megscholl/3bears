import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import CompanyForm from './Form';

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Main />
          <CompanyForm />
          <Footer />
      </div>
    );
  }
}

export default App;
