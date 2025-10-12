import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Components
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

// Pages
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className='app'>
      {/* Toast Notifications */}
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
        theme="light"
        style={{ zIndex: 9999 }}
      />

      {/* Navbar */}
      <Navbar />
      
      <hr />

      {/* Main Content Area */}
      <div className="app-content">
        {/* Sidebar */}
        <Sidebar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          
          {/* 404 Not Found Route */}
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
                background: 'linear-gradient(135deg, #FF4C24, #FF6B35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                404
              </h1>
              <h2 style={{ marginBottom: '10px', color: '#333' }}>
                Page Not Found
              </h2>
              <p style={{ color: '#666', marginBottom: '30px' }}>
                The page you're looking for doesn't exist.
              </p>
              <button
                onClick={() => window.location.href = '/orders'}
                style={{
                  padding: '14px 35px',
                  background: 'linear-gradient(135deg, #FF4C24, #FF6B35)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(255, 76, 36, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 30px rgba(255, 76, 36, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 20px rgba(255, 76, 36, 0.3)';
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

export default App
