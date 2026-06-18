import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages = [
  "/promo1.png",
  "/farm.png",
  "/gifting.png"
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container">
      {/* Top Banner Slider */}
      <section style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden', marginTop: '80px' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={sliderImages[currentSlide]}
            alt={`Promo ${currentSlide}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
        </AnimatePresence>
        
        {/* Banner Overlay Text (Optional, matches the vibe) */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '4rem', fontFamily: 'Playfair Display', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>A Fresh Look. The Same Go Nuts.</h1>
        </div>
      </section>

      {/* 1. Our Story */}
      <section className="section">
        <motion.div className="content-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">A journey of taste, health, and tradition.</p>
          <p style={{ marginBottom: '2rem' }}>
            At NutNutties, we believe that snacking should be a luxurious experience that doesn't compromise on health. Our journey began with a simple passion for finding the highest quality nuts from around the world. We travel to the finest farms, building relationships with farmers who share our commitment to organic, sustainable practices.
          </p>
          <p>
            Every jar of NutNutties is a testament to our dedication to quality. Elevate your everyday moments with NutNutties.
          </p>
        </motion.div>
      </section>

      {/* 2. Stats Section - Added as requested */}
      <section className="section" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'Playfair Display' }}>Numbers Speak For Themselves!</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Happy Customers</h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>2,500<span style={{ fontSize: '2rem' }}>+</span></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Orders Delivered</h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>7,000<span style={{ fontSize: '2rem' }}>+</span></p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Products Sold</h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>40,000<span style={{ fontSize: '2rem' }}>+</span></p>
          </motion.div>
        </div>
      </section>

      {/* 3. Sourced from the Best Farms */}
      <section className="split-section" style={{background: 'var(--bg-secondary)'}}>
        <motion.div className="split-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="split-title">Sourced from the Best Farms</h2>
          <p className="split-text">We partner directly with sustainable, organic farms to ensure that every nut we offer is grown with care and respect for nature. This direct trade relationship guarantees freshness and supports local farming communities.</p>
        </motion.div>
        <motion.div className="split-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <img src="/farm.png" alt="Organic Farm" />
        </motion.div>
      </section>

      {/* 4. Artisanal Roasting */}
      <section className="split-section">
        <motion.div className="split-content" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="split-title">Artisanal Roasting</h2>
          <p className="split-text">Our master roasters treat each batch of nuts like a work of art. Using traditional methods and state-of-the-art equipment, we achieve the perfect crunch and flavor profile that NutNutties is famous for. No shortcuts, just pure dedication to the craft.</p>
        </motion.div>
        <motion.div className="split-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <img src="/roasting.png" alt="Artisanal Roasting" />
        </motion.div>
      </section>

      {/* 5. Our Mission */}
      <section className="section section-bg">
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>To redefine premium snacking globally while empowering local farmers and promoting sustainable agricultural practices.</p>
          <div style={{ background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'left', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              At NutNutties, our mission goes far beyond simply selling dry fruits. We are on a quest to change how people think about snacking. In a world dominated by ultra-processed foods, we want to bring people back to nature's original superfoods, proving that healthy snacking can be an incredibly luxurious and delicious experience.
            </p>
            <p>
              We are equally committed to the people who make this possible. By practicing direct trade, we ensure that the local farmers who cultivate these beautiful ingredients are paid fairly and empowered to grow their businesses, allowing their communities to thrive alongside ours.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Sustainability Commitment */}
      <section className="section" style={{ background: 'var(--primary)', color: '#fff' }}>
        <div className="content-wrapper" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>Commitment to Sustainability</h2>
          <p className="section-subtitle" style={{ color: '#e0e0e0', marginBottom: '3rem' }}>From our 100% recyclable glass jars to our carbon-neutral shipping methods, we are dedicated to protecting the planet that grows our beautiful products.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Zero Plastic Packaging</h3>
              <p style={{ color: '#d0d0d0', lineHeight: '1.6' }}>We have completely eliminated single-use plastics from our supply chain. All our premium jars are made from high-quality, 100% recyclable glass.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Carbon Neutral Shipping</h3>
              <p style={{ color: '#d0d0d0', lineHeight: '1.6' }}>For every order placed, we calculate the carbon emissions of the shipping process and invest heavily in reforestation projects to offset our footprint.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px' }}>
              <h3 style={{ marginBottom: '1rem', fontFamily: 'Playfair Display' }}>Regenerative Farming</h3>
              <p style={{ color: '#d0d0d0', lineHeight: '1.6' }}>We actively fund and support our partner farms in transitioning to regenerative agricultural practices that restore soil health and biodiversity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Certifications */}
      <section className="section section-bg">
        <div className="content-wrapper" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Certified Organic & Non-GMO</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>Every single product in our catalog holds strict organic certifications, ensuring you consume nothing but pure, natural goodness.</p>
          <div style={{ background: '#fff', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>100%</div>
              <h4 style={{ fontFamily: 'Outfit' }}>Certified Organic</h4>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>ZERO</div>
              <h4 style={{ fontFamily: 'Outfit' }}>GMOs Used</h4>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>LAB</div>
              <h4 style={{ fontFamily: 'Outfit' }}>Tested Purity</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
