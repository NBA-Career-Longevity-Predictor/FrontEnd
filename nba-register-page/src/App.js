import React from 'react';
import NavBar from './components/navigation'
import Register from './components/register'
import FooterBar from './components/footer'
import DarkMode from './components/darkmode'
import UserProfile from './components/user-profile/user-profile'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Route path="/register" component={Register} />
     <Route path="/user" component={UserProfile} />
     <DarkMode />
     <FooterBar />
    </div>
  );
}

export default App;
