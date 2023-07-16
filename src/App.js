import React, { useState } from 'react';
import Translator from './components/Translator';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {

  const [mode,setMode] = useState('light')
 
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0C0B24";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="app">
    <Navbar  mode={mode} toggleMode={toggleMode} />
    <Translator mode={mode} />
    <Footer mode={mode} />
    </div>
  );
};

export default App;
