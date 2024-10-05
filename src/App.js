import React, { useEffect, useState } from 'react';
import logo from './../src/images/img.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Mainhub from './components/Mainhub/Mainhub';
import Right from './components/Right-side/Right';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className='main-mobile'>
        <img className='main-img' src={logo} alt="Logo" />
        <h2 className='mobile-title'>Dashboard</h2>
        <div className='mobile-message'>
          Please open this application on a desktop screen for the best experience.
        </div>
      </div>
    );
  }

  return (
    <div className='App'>
      <div className='big-container'>
        <Navbar />
        <Mainhub />
        <Right />
      </div>
    </div>
  );
}

export default App;
