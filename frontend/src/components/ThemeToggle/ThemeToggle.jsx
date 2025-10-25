import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [iconRotate, setIconRotate] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const handleToggle = () => {
    // Multiple animations on click
    setIconRotate(true);
    setIsClicking(true);
    
    setTimeout(() => setIconRotate(false), 600);
    setTimeout(() => setIsClicking(false), 400);
    
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toggleTheme();
  };

  return (
    <button 
      className={`theme-toggle ${isClicking ? 'clicking' : ''}`}
      onClick={handleToggle}
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {/* Animated gradient rings */}
      <span className="ring ring-1"></span>
      <span className="ring ring-2"></span>
      <span className="ring ring-3"></span>
      
      {/* Icon with rotation */}
      <span className={`theme-icon ${iconRotate ? 'rotate' : ''}`}>
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
      
      {/* Sparkle particles */}
      <span className="sparkle sparkle-1">✨</span>
      <span className="sparkle sparkle-2">✨</span>
      <span className="sparkle sparkle-3">✨</span>
    </button>
  );
};

export default ThemeToggle;
