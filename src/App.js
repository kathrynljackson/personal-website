import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header.js'
import Homepage from './Homepage/Homepage.js'
import React from 'react';
import MyProjects from './MyProjects/MyProjects.js';
import AboutMe from './AboutMe/AboutMe.js'


function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Router>
        <Route exact path='/myprojects' render={() => (
          <MyProjects />
        )} />
      
      <Route exact path='/aboutme' render={() => (
          <AboutMe />
        )} />
      </Router>
    </div>
  )
}

export default App;
