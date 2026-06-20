import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: '#0a191f', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8%', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '1 1 250px' }}>
          <div style={{ background: '#fff', padding: '2rem', display: 'inline-block', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <h2 style={{ color: '#004d40', margin: 0, fontSize: '1.5rem', fontFamily: 'Playfair Display' }}>SR NUTS WORLD</h2>
            <p style={{ color: '#004d40', fontSize: '0.8rem', fontWeight: 'bold' }}>SHETYE BROTHERS & CO.</p>
            <p style={{ color: '#004d40', fontSize: '0.7rem' }}>(DRY FRUITS MERCHANT)</p>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#ccc' }}>
            Office Address<br/>
            267, Sheikh Memon Street, Zaveri Bazar,<br/>
            Mumbai - 400002, India.
          </p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/about" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>About</Link></li>
            <li><Link to="/contact" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</Link></li>
            <li><Link to="/" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>My Account</Link></li>
            <li><Link to="/" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
            <li><Link to="/" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Return and Refunds</Link></li>
            <li><Link to="/" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Terms and Conditions</Link></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'Playfair Display' }}>Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><Link to="/products" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Dry Fruits</Link></li>
            <li><Link to="/products" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Nuts</Link></li>
            <li><Link to="/products" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Flavoured Nuts</Link></li>
            <li><Link to="/products" style={{ color: '#ccc', textDecoration: 'none', fontSize: '0.9rem' }}>Spices</Link></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 150px', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Youtube</a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#888', background: '#071217' }}>
        <p>Powered by Techonnect Intelligence. Copyright © {new Date().getFullYear()} SR Nuts World.</p>
      </div>
    </footer>
  );
};

export default Footer;
