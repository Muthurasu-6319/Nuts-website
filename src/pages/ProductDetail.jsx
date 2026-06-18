import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, CheckCircle, Leaf, ShieldCheck, Truck, Package, Award } from 'lucide-react';
import { productsData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return <div className="page-container" style={{padding: '10rem', textAlign: 'center'}}><h2>Product not found</h2></div>;
  }

  return (
    <div className="page-container">
      {/* 1. Hero Product Section */}
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
          <ArrowLeft size={20} /> Back to Products
        </Link>
        <div className="split-section" style={{ padding: 0 }}>
          <motion.div className="split-image" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <img src={product.image} alt={product.name} />
          </motion.div>
          <motion.div className="split-content" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
            <p style={{ color: 'var(--primary)', fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>{product.category}</p>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{product.name}</h1>
            <p className="split-text" style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '600' }}>{product.desc}</p>
            <p className="split-text" style={{ lineHeight: '1.8' }}>{product.longDesc} Every single piece is carefully handpicked to ensure only the highest quality reaches your hands. We pride ourselves on delivering a product that not only tastes incredible but also meets our rigorous standards for size, color, and texture.</p>
            
            <div style={{ display: 'flex', gap: '3rem', margin: '2rem 0', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Origin</strong> 
                <p style={{color: 'var(--text-muted)', margin: 0}}>{product.origin}</p>
              </div>
              <div style={{ width: '1px', background: 'var(--border-color)' }}></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Packaging</strong> 
                <p style={{color: 'var(--text-muted)', margin: 0}}>{product.weight}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <button className="btn" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem' }}>Inquire for Purchase</button>
              <button 
                className={`wishlist-btn ${wishlist ? 'active' : ''}`} 
                style={{ position: 'relative', top: 0, right: 0, width: '55px', height: '55px', border: '1px solid var(--border-color)' }}
                onClick={() => setWishlist(!wishlist)}
              >
                <Heart size={24} fill={wishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={16} color="var(--primary)" /> Fast Delivery</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} color="var(--primary)" /> Quality Guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Nutritional Benefits */}
      <section className="section section-bg">
        <div className="content-wrapper">
          <h2 className="section-title">Nutritional Profile & Health Benefits</h2>
          <p className="section-subtitle">Nature's ultimate superfood, packed with everything your body needs to thrive.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
            <div style={{ flex: '1 1 250px', background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <Heart size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Heart Healthy</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Rich in monounsaturated fats which help lower bad cholesterol levels and support overall cardiovascular health.</p>
            </div>
            <div style={{ flex: '1 1 250px', background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <Leaf size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Antioxidant Rich</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Loaded with powerful antioxidants that protect your cells from oxidative stress and premature aging.</p>
            </div>
            <div style={{ flex: '1 1 250px', background: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              <CheckCircle size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Essential Minerals</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>An excellent natural source of magnesium, potassium, and calcium for strong bones and sustained energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Perfect For (Usage) */}
      <section className="section">
        <div className="content-wrapper">
          <h2 className="section-title">How To Enjoy</h2>
          <p className="section-subtitle">Versatile and delicious, there are endless ways to incorporate {product.name} into your lifestyle.</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem', textAlign: 'left' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}><Award size={24} color="var(--primary)" /></div>
              <div>
                <strong>The Perfect Snack</strong>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Enjoy them straight out of the jar for a quick, guilt-free energy boost during your busy workday.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}><Award size={24} color="var(--primary)" /></div>
              <div>
                <strong>Culinary Excellence</strong>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Chop and sprinkle over salads, oatmeal, or yogurt bowls for added crunch and premium flavor.</p>
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%' }}><Award size={24} color="var(--primary)" /></div>
              <div>
                <strong>Luxury Gifting</strong>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Our premium packaging makes this an elegant and thoughtful gift for corporate clients, friends, and family.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Storage & Care */}
      <section className="split-section" style={{ background: 'var(--primary)', color: '#fff' }}>
        <div className="split-content">
          <h2 className="split-title" style={{ color: '#fff' }}>Storage & Freshness</h2>
          <p className="split-text" style={{ color: '#e0e0e0' }}>To ensure that your {product.name} maintains its premium crunch, rich flavor, and nutritional value, proper storage is key.</p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '1.5rem', lineHeight: '2' }}>
            <li>Store in a cool, dark, and dry place away from direct sunlight.</li>
            <li>Keep the airtight jar tightly sealed after every use.</li>
            <li>For long-term storage, refrigeration is highly recommended to preserve natural oils.</li>
            <li>Do not expose to high humidity or strong odors.</li>
          </ul>
        </div>
        <div className="split-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Package size={200} color="rgba(255,255,255,0.2)" />
        </div>
      </section>

      {/* 5. Customer Reviews */}
      <section className="section">
        <h2 className="section-title">Customer Experiences</h2>
        <p className="section-subtitle">See what our community thinks about our {product.name}.</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '3rem auto 0' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', flex: '1 1 300px' }}>
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"Absolutely incredible quality. The size and flavor are unmatched compared to anything I've bought at a local store. Highly recommend!"</p>
            <h4 style={{ fontWeight: 'bold' }}>- James L.</h4>
          </div>
          <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '12px', flex: '1 1 300px' }}>
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"The packaging is beautiful and the product itself is incredibly fresh. You can really taste the difference in quality. Worth every penny."</p>
            <h4 style={{ fontWeight: 'bold' }}>- Maria S.</h4>
          </div>
        </div>
      </section>

      {/* 6. Quality Assurance */}
      <section className="section section-bg">
        <div className="content-wrapper">
          <h2 className="section-title">Our Quality Guarantee</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>We stand behind every single product we sell.</p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Every batch of {product.name} undergoes rigorous quality control and laboratory testing to ensure zero contamination, absolute purity, and premium grading. We maintain strict hygiene protocols at our facility and comply with all international food safety standards. If you are not completely satisfied with the freshness or quality of your purchase, we offer a 100% replacement guarantee.
          </p>
        </div>
      </section>

      {/* 7. Similar Products */}
      <section className="section">
        <h2 className="section-title">You May Also Like</h2>
        <p className="section-subtitle">Explore more premium selections from our curated catalog.</p>
        <div className="product-grid" style={{ maxWidth: '1200px', margin: '3rem auto 0', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map((p) => (
            <motion.div className="product-card" key={p.id} whileHover={{ y: -10 }}>
              <img src={p.image} alt={p.name} className="product-image" />
              <h3 className="product-name" style={{ fontSize: '1.1rem' }}>{p.name}</h3>
              <p className="product-desc" style={{ fontSize: '0.9rem' }}>{p.desc}</p>
              <Link to={`/products/${p.id}`}><button className="btn btn-outline" style={{width: '100%', padding: '0.8rem'}}>View</button></Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
