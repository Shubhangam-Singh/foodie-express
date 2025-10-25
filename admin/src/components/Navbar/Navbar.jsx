import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [iconRotate, setIconRotate] = useState(false);

  const handleToggle = () => {
    setIconRotate(true);
    setTimeout(() => setIconRotate(false), 500);
    toggleDarkMode();
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <img className='logo' src={assets.logo} alt="Admin Logo" />
      </div>

      <div className="navbar-title">
        <span className="admin-badge">ADMIN PANEL</span>
      </div>

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

        <button 
          className="theme-toggle" 
          onClick={handleToggle}
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
            <li onClick={handleLogout} className="logout-item">
              🚪 Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
