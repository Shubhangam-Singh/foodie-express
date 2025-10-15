import React, { useContext, useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowProfileMenu(false);
    navigate('/');
  }

  const handleOrdersClick = () => {
    setShowProfileMenu(false);
    navigate('/myorders');
  }

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={assets.logo} alt="Foodie Logo" />
      </Link>
      
      <ul className="navbar-menu">
        <Link 
          to="/" 
          onClick={() => setMenu("home")} 
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a 
          href='#explore-menu' 
          onClick={() => setMenu("menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a 
          href='#app-download' 
          onClick={() => setMenu("mob-app")} 
          className={menu === "mob-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a 
          href='#footer' 
          onClick={() => setMenu("contact")} 
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </Link>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile' ref={profileRef}>
            <img 
              src={assets.profile_icon} 
              alt="Profile" 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            />
            {showProfileMenu && (
              <ul className='navbar-profile-dropdown'>
                <li onClick={handleOrdersClick}>
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="Logout" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
