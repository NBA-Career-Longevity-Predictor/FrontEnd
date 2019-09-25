import React from 'react';
import NavBar from './components/navigation'
import Register from './components/register'
import FooterBar from './components/footer'
import DarkMode from './components/darkmode'


function App() {
  return (
    <div className="App">
     <NavBar />
     <Register />
     <DarkMode />
     <FooterBar />
    </div>
  );
}

export default App;
