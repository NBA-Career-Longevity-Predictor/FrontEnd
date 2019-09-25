import React from 'react';

import './App.css';

import UserForm from "./components/LoginForm";

import NavBar from './components/NavBar';

import Header from './components/Header';

import Footer from './components/Footer';
import DarkMode from './components/DarkMode';


function App() {
  return (
    <div className="App">

      <NavBar />

      <Header />

      <UserForm />

      <DarkMode />

      <Footer />

    </div>
  );
}

export default App;
