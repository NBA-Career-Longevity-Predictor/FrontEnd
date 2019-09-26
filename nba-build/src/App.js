import React from 'react';

import './App.css';

import NavBar from './components/NavBar';

import Header from './components/Header';

import Footer from './components/Footer';

import DarkMode from './components/DarkMode';

import LoginForm from './components/LoginForm';

import RegistrationForm from './components/RegistrationForm';

import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">

      <NavBar />

      <Header />

      {/* <LoginForm /> */}

      <DarkMode />

      <Route exact path ="/" component={HomePage} />

      <Route exact path="/LoginForm/" component={LoginForm} />

      <Route exact path="/RegistrationForm/" component={RegistrationForm} />

      <Footer />

    </div>
  );
}

export default App;
