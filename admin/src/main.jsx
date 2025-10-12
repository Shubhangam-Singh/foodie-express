import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Admin Panel Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #FCFCFC 0%, #F5F5F5 100%)'
        }}>
          <div style={{
            background: 'white',
            padding: '50px 40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            maxWidth: '500px',
            border: '2px solid rgba(255, 76, 36, 0.1)'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>⚠️</div>
            <h1 style={{ 
              fontSize: '32px', 
              marginBottom: '15px',
              background: 'linear-gradient(135deg, #FF4C24, #FF6B35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700'
            }}>
              Oops! Something went wrong
            </h1>
            <p style={{ 
              color: '#666', 
              marginBottom: '30px', 
              lineHeight: '1.6',
              fontSize: '15px'
            }}>
              The admin panel encountered an unexpected error. Please refresh the page to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
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
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
