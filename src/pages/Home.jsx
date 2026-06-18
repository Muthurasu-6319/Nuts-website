import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';

const heroSlides = [
  {
    title: "Join The Nutty Movement!",
    subtitle: "Order Premium Quality Dry fruits and Nuts.",
    image: "/mixed_nuts.png",
    buttonText: "Shop Now"
  },
  {
    title: "Finest Spices From Origins",
    subtitle: "Authentic, aromatic, and pure spices for your kitchen.",
    image: "/spices.png",
    buttonText: "Explore Spices"
  },
  {
    title: "Sweet & Natural Dry Fruits",
    subtitle: "Sun-dried to perfection, nature's candy.",
    image: "/dates.png",
    buttonText: "View Collection"
  }
];

const reviews = [
  { name: "Sarah Jenkins", text: "The quality of the cashews is unmatched. Absolutely buttery and fresh!", rating: 5 },
  { name: "Michael T.", text: "I ordered the mixed nuts for a corporate event and they were a huge hit. Premium packaging.", rating: 5 },
  { name: "Priya R.", text: "The Kashmiri saffron is so authentic. A tiny pinch gave my biryani an incredible color and aroma.", rating: 5 }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const bestSellers = productsData.filter(p => p.tag === 'bestseller');
  const newProducts = productsData.filter(p => p.tag === 'new');

  return (
    <div className="page-container">
      {/* 1. Hero Slider */}
      <section className="hero premium-pattern-bg" style={{ padding: '0 8%', minHeight: 'calc(100vh - 80px)', position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="hero-slide"
          >
            {/* Left side: Product Image */}
            <div className="hero-slide-image-container" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <img src={heroSlides[currentSlide].image} alt="Hero Products" className="hero-image-shape" />
            </div>
            
            {/* Right side: Content */}
            <div className="hero-slide-content" style={{ flex: 1, paddingLeft: '4rem' }}>
              <p style={{ color: '#e0e0e0', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '1rem' }}>Best Quality Products</p>
              <h1 className="hero-title" style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'Playfair Display', color: '#ffffff' }}>
                {heroSlides[currentSlide].title}
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: '#f0f0f0', marginBottom: '2.5rem' }}>
                {heroSlides[currentSlide].subtitle}
              </p>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{ background: '#ffffff', color: 'var(--primary)', borderRadius: '8px', padding: '1rem 2.5rem', fontWeight: 'bold' }}>
                  {heroSlides[currentSlide].buttonText}
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Dots */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: '12px', height: '12px', borderRadius: '50%', border: 'none',
                background: currentSlide === idx ? '#ffffff' : 'rgba(255,255,255,0.4)', cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </section>

      {/* 2. Best Selling Products */}
      <section className="section section-bg">
        <h2 className="section-title">Best Selling Products</h2>
        <p className="section-subtitle">Our most loved premium selections by customers.</p>
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem 8% 2rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {bestSellers.map((product) => (
            <motion.div className="product-card" key={product.id} style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <img src={product.image} alt={product.name} className="product-image" style={{ height: '250px', objectFit: 'contain' }} />
              <h3 className="product-name" style={{ fontSize: '1.4rem' }}>{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <Link to={`/products/${product.id}`}><button className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>View Details</button></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Newest Products */}
      <section className="section">
        <h2 className="section-title">Newest Additions</h2>
        <p className="section-subtitle">Discover our latest premium imports.</p>
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem 8% 2rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {newProducts.map((product) => (
            <motion.div className="product-card" key={product.id} style={{ flex: '0 0 auto', width: '350px', scrollSnapAlign: 'start', position: 'relative' }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div style={{position: 'absolute', top: '1rem', left: '1rem', background: 'var(--primary)', color: '#fff', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10}}>NEW</div>
              <img src={product.image} alt={product.name} className="product-image" style={{ height: '250px', objectFit: 'contain' }} />
              <h3 className="product-name" style={{ fontSize: '1.4rem' }}>{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <Link to={`/products/${product.id}`}><button className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>View Details</button></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Customer Reviews */}
      <section className="section section-bg">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">Real reviews from our happy Nutty movement members.</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          {reviews.map((review, idx) => (
            <motion.div key={idx} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', flex: '1 1 300px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{delay: idx * 0.1}}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>"{review.text}"</p>
              <h4 style={{ fontFamily: 'Outfit', fontWeight: 'bold' }}>- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Quality Section */}
      <section className="section">
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Uncompromising Quality</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>We believe that premium means absolute perfection.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>Hand-Selected Grading</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Our rigorous selection process begins at the farms. We partner with elite growers globally, ensuring every harvest meets our exact standards. Each nut is individually sorted by hand and machine graded for size, color, and absolute integrity before it even reaches our facility.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>Artisanal Roasting</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                We don't use generic industrial roasting. Our master roasters treat each batch of nuts like a work of art, using traditional, slow-roasting methods. This careful temperature control locks in the essential oils, creating a signature crunch and deep flavor profile you simply won't find anywhere else.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Playfair Display', fontSize: '1.5rem' }}>Purity Guaranteed</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Every product is 100% natural, free from artificial preservatives, colors, and synthetic chemicals. We maintain strict laboratory testing for aflatoxins and moisture content, ensuring that what you consume is nothing but pure, unadulterated nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Health Benefits */}
      <section className="section section-bg">
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Fuel Your Body Right</h2>
          <p className="section-subtitle" style={{ marginBottom: '3rem' }}>Nature's ultimate multivitamin for a modern, busy lifestyle.</p>
          
          <div className="health-benefits-grid">
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'Playfair Display', marginBottom: '1.5rem' }}>The Ultimate Brain Food</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Nuts and dry fruits are naturally dense in essential macronutrients. Packed with plant-based proteins, heart-healthy Omega-3 fatty acids, and vital dietary fiber, they provide a sustained energy release that keeps you focused and full throughout the day, eliminating the crash associated with sugary snacks.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>✓</span> Heart Health & Cholesterol Support
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>✓</span> Rich in Antioxidants & Vitamins
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>✓</span> Immune System Boosting Minerals
                </li>
              </ul>
            </div>
            <div>
              <img src="/mixed_nuts.png" alt="Healthy Nuts" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to action */}
      <section className="section" style={{ textAlign: 'center', padding: '8rem 8%' }}>
        <h2 className="section-title" style={{ fontSize: '4rem' }}>Ready to Taste the Difference?</h2>
        <Link to="/products">
          <button className="btn" style={{ marginTop: '2rem', background: '#004d40', color: '#fff' }}>Shop the Collection</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
