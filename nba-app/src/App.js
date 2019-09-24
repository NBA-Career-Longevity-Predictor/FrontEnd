import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';

// import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchForm />
      <Route exact path="/" component={LoginForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  );
}

export default App;
