import React, { Component } from 'react';
import TeamList from './components/PersonList'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TeamList />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
