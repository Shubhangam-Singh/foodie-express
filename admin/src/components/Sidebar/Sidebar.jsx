import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar-header">
        <h3>Dashboard</h3>
        <p>Manage your restaurant</p>
      </div>

      <div className="sidebar-options">
        <NavLink 
          to='/add' 
          className="sidebar-option"
          data-tooltip="Add Items"
        >
          <img src={assets.add_icon} alt="Add Items" />
          <p>Add Items</p>
        </NavLink>

        <NavLink 
          to='/list' 
          className="sidebar-option"
          data-tooltip="List Items"
        >
          <img src={assets.order_icon} alt="List Items" />
          <p>List Items</p>
        </NavLink>

        <NavLink 
          to='/orders' 
          className="sidebar-option"
          data-tooltip="Orders"
        >
          <img src={assets.order_icon} alt="Orders" />
          <p>Orders</p>
        </NavLink>
      </div>

      <div className="sidebar-stats">
        <div className="stat-item">
          <span>Total Items</span>
          <span>45</span>
        </div>
        <div className="stat-item">
          <span>Orders Today</span>
          <span>23</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
