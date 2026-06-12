import React from 'react';
import { Link } from 'react-router-dom';
import { site } from '../config/site';

function Header() {
  return (
    <header style={{ 
      backgroundColor: 'white', 
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <nav style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#FBBF24',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            🚕
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111' }}>{site.name}</span>
        </Link>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
            Home
          </Link>
          <Link to="/services" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
            Services
          </Link>
          <Link to="/about" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
            About
          </Link>
          <Link to="/contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button style={{
          backgroundColor: '#FBBF24',
          color: '#111',
          fontWeight: 600,
          padding: '0.5rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}>
          Book Now
        </button>
      </nav>
    </header>
  );
}

export default Header;
