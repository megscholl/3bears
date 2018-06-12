import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import CompanyForm from './Form';


// import {rebase} from './components/base';


// getResults(data) {
//   console.log("GET USER DATA USER", data);

//    var ref = firebase.database().ref("users");
//    ref.once("value").then(function (snapshot) {
//      snapshot.forEach(function (childSnapshot) {
//        var userFBKey = childSnapshot.key;
//        if (user.uid === userFBKey) {
//          // key = userFBKey;
//          userData = childSnapshot.val();
//          userZip = userData.zip;
//        }
//      });
//      // console.log("Get user data zip", userZip)

//    });
//  }


class App extends Component {

  
  syncing() {
    console.log("I AM SYNCING", this.state.userObj.uid)
    }  


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
