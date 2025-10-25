import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider, useTheme } from './context/ThemeContext'

import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

const AppContent = () => {
  const location = useLocation();
  const { darkMode } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className='app'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        style={{ zIndex: 9999 }}
      />

      <Navbar />
      
      <hr style={{
        border: 'none',
        height: '1px',
        background: darkMode ? 'rgba(147, 51, 234, 0.2)' : 'rgba(255, 76, 36, 0.1)',
        margin: 0,
        transition: 'background 0.3s ease'
      }} />

      <div className="app-content" style={{
        display: 'flex',
        background: darkMode ? '#1a1c1c' : '#ffffff',
        minHeight: '100vh',
        transition: 'background 0.3s ease'
      }}>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          
          <Route path="*" element={
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '60px 20px',
              minHeight: '70vh'
            }}>
              <h1 style={{ 
                fontSize: '72px', 
                marginBottom: '20px',
                background: darkMode 
                  ? 'linear-gradient(135deg, #9333ea, #a855f7)'
                  : 'linear-gradient(135deg, #FF4C24, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                404
              </h1>
              <h2 style={{ 
                marginBottom: '10px', 
                color: darkMode ? '#f5f5f5' : '#333'
              }}>
                Page Not Found
              </h2>
              <p style={{ 
                color: darkMode ? '#b0b0b0' : '#666', 
                marginBottom: '30px'
              }}>
                The page you're looking for doesn't exist.
              </p>
              <button
                onClick={() => window.location.href = '/orders'}
                style={{
                  padding: '14px 35px',
                  background: darkMode
                    ? 'linear-gradient(135deg, #9333ea, #a855f7)'
                    : 'linear-gradient(135deg, #FF4C24, #FF6B35)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: darkMode
                    ? '0 5px 20px rgba(147, 51, 234, 0.3)'
                    : '0 5px 20px rgba(255, 76, 36, 0.3)',
                  transition: 'all 0.3s ease'
                }}
              >
                Go to Dashboard
              </button>
            </div>
          } />
        </Routes>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
