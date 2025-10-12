import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className='navbar'>
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

        <div className="profile-dropdown">
          <ul>
            <li>👤 Profile</li>
            <li>⚙️ Settings</li>
            <hr />
            <li onClick={handleLogout} style={{ color: '#FF4C24' }}>
              🚪 Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
