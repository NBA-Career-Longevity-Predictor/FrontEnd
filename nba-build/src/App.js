import React from 'react';

import './App.css';

import UserForm from "./components/LoginForm";

import NavBar from './components/NavBar';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
