import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { categories } from '../data/products';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" style={{ zIndex: 1001 }}>SR Nuts World.</NavLink>
      
      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ zIndex: 1001, position: 'relative' }}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', cursor: 'pointer', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.1rem' }}>
            Products <ChevronDown size={16} />
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', left: '-1rem', background: '#fff', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '0.5rem 0', minWidth: '200px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 100 }}>
              <Link to="/products" style={{ display: 'block', padding: '0.8rem 1.5rem', color: 'var(--text-main)', textDecoration: 'none', borderBottom: '1px solid var(--border-color)' }}>All Products</Link>
              {categories.map((cat, idx) => (
                <Link key={idx} to={`/products?category=${cat}`} style={{ display: 'block', padding: '0.8rem 1.5rem', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '1rem' }} className="dropdown-item">
                  {cat}
                </Link>
              ))}
            </div>
          )}
        </li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
