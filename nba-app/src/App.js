import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
// import HomePage from "./components/HomePage";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={RegisterForm} />
      <Route path="/login" component={LoginForm} />
      {/* <Route path="/register" component={RegisterForm} /> */}
      <PrivateRoute path="/home" component={SearchForm} />
      <PrivateRoute path="/user" component={UserProfile} />
      <Footer />
    </div>
  );
}

export default App;
