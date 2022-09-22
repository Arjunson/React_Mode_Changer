import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import Main from "./Main"

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
