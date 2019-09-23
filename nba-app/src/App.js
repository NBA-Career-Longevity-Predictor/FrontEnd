import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import './App.scss';

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={LoginForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  );
}

export default App;
