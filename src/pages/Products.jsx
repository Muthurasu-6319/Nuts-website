import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { productsData, categories } from '../data/products';

const Products = () => {
  const [wishlist, setWishlist] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && categories.includes(category)) {
      setFilteredProducts(productsData.filter(p => p.category === category));
    } else {
      setFilteredProducts(productsData);
    }
  }, [location]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="page-container">
      {/* 1. Header Section */}
      <section className="section section-bg" style={{ paddingBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Our Signature Collection</h2>
          <p className="section-subtitle">Exquisite nuts and dry fruits crafted for the ultimate snacking experience.</p>
        </motion.div>
        
        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <Link to="/products" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>All</Link>
          {categories.map((cat, idx) => (
            <Link key={idx} to={`/products?category=${cat}`} className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>{cat}</Link>
          ))}
        </div>
        
        {/* 2. Product Grid Section */}
        <div className="product-grid" style={{ padding: '0 8%' }}>
          {filteredProducts.map((product, index) => (
            <motion.div 
              className="product-card" key={product.id}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 10) * 0.05, duration: 0.5 }}
              style={{ position: 'relative' }}
            >
              <button 
                className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart size={20} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
              </button>
              
              <img src={product.image} alt={product.name} className="product-image" />
              <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                <button className="btn btn-outline" style={{ width: '100%' }}>View Details</button>
              </Link>
            </motion.div>
          ))}
          {filteredProducts.length === 0 && <p style={{ textAlign: 'center', width: '100%', padding: '2rem' }}>No products found in this category.</p>}
        </div>
      </section>

      {/* 3. Gifting Section */}
      <section className="split-section">
        <motion.div className="split-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="split-title">Premium Gifting</h2>
          <p className="split-text">Looking for the perfect corporate or personal gift? Our luxury assortments are packaged in elegant, premium boxes that make a lasting impression.</p>
          <button className="btn">Explore Gifts</button>
        </motion.div>
        <motion.div className="split-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <img src="/gifting.png" alt="Premium Gifting" />
        </motion.div>
      </section>

      {/* 4. Wholesale Section */}
      <section className="section section-bg">
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Wholesale & Corporate Partnering</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Elevate your business offerings with our premium selections.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>Partner With Us</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Whether you are a luxury hotel, a high-end restaurant, or an independent organic retailer, partnering with SR Nuts World guarantees your customers receive only the absolute best. We offer highly competitive bulk pricing, flexible white-label packaging solutions, and dedicated account management to ensure seamless supply.
              </p>
              <Link to="/contact"><button className="btn">Contact Wholesale Team</button></Link>
            </div>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}><strong>Premium Quality:</strong> Consistent grading and sizing across all bulk orders.</li>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}><strong>Custom Packaging:</strong> Bespoke labeling and jar sizes for your specific brand needs.</li>
                <li><strong>Reliable Shipping:</strong> Priority logistics ensuring maximum freshness upon delivery.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Guarantee Section */}
      <section className="section" style={{ background: 'var(--primary)', color: '#fff' }}>
        <div className="content-wrapper" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ color: '#fff', fontSize: '3rem' }}>The SR Nuts World Guarantee</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginTop: '2rem' }}>
            We don't just sell nuts; we deliver an experience. If you are not <strong>100% satisfied</strong> with the freshness, crunch, or flavor of any product you receive, simply let us know. We will immediately replace your entire order or refund your purchase—no questions asked. 
            <br/><br/><strong>Absolute Quality is our unwavering promise to you.</strong>
          </p>
        </div>
      </section>

      {/* 6. Nutritional Facts Section */}
      <section className="section section-bg">
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">A Healthy Choice</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Our products are nature's multivitamin.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--primary)', marginBottom: '1rem' }}>Healthy Fats</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Rich in monounsaturated fats that lower bad cholesterol, deeply nourish your skin, and support long-term heart health.</p>
            </div>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--primary)', marginBottom: '1rem' }}>Plant Protein</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>An excellent source of pure, plant-based protein essential for muscle repair, growth, and providing sustained energy all day.</p>
            </div>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'left' }}>
              <h3 style={{ fontFamily: 'Playfair Display', color: 'var(--primary)', marginBottom: '1rem' }}>Essential Minerals</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Packed with high levels of magnesium, zinc, and iron which are crucial for maintaining a strong and robust immune system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Section */}
      <section className="section">
        <div className="content-wrapper" style={{ maxWidth: '800px', background: 'var(--bg-secondary)', padding: '4rem 2rem', borderRadius: '20px' }}>
          <h2 className="section-title">Join the SR Nuts World Club</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>Subscribe to receive exclusive VIP offers, early access to new product launches, and healthy recipes directly to your inbox.</p>
          <form style={{display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto'}}>
            <input type="email" placeholder="Enter your email address" className="input-field" required style={{ margin: 0, flex: 1 }} />
            <button type="submit" className="btn" style={{ whiteSpace: 'nowrap' }}>Subscribe Now</button>
          </form>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
