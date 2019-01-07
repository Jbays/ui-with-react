import React, { Component } from 'react';
import AppHeader from './AppHeader'
import LocationsContainer from './LocationsContainer';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      //container div
      <div styles={{textAlign:'center'}}>
        <AppHeader/>
        <header>location</header>
        <div>Gray Bar -- 'search by city or airport code'</div>
        <LocationsContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
