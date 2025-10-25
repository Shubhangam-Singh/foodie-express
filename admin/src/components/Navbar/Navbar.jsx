import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('adminDarkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIconRotate(true);
    setTimeout(() => setIconRotate(false), 500);
    
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('adminDarkMode', newMode);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      {/* Logo Section */}
      <div className="navbar-left">
        <img className='logo' src={assets.logo} alt="Admin Logo" />
      </div>

      {/* Title/Badge Section */}
      <div className="navbar-title">
        <span className="admin-badge">ADMIN PANEL</span>
      </div>

      {/* Profile Section */}
      <div className="navbar-profile">
        <div className="admin-name">
          <span>Admin</span>
          <span>Administrator</span>
        </div>
        
        <img 
          className='profile' 
          src={assets.profile_image} 
          alt="Admin Profile"
        />

        {/* Dark Mode Toggle Button */}
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className={`icon ${iconRotate ? 'rotate' : ''}`}>
            {darkMode ? '☀️' : '🌙'}
          </span>
        </button>

        <div className="profile-dropdown">
          <ul>
            <li>👤 Profile</li>
            <li>⚙️ Settings</li>
            <hr />
            <li 
              onClick={handleLogout} 
              className="logout-item"
            >
              🚪 Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
