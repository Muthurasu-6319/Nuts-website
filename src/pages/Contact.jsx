import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  { question: "Where are your nuts sourced from?", answer: "We source our nuts directly from the finest organic farms globally, ensuring sustainable practices and premium quality." },
  { question: "Do you offer wholesale or bulk purchasing?", answer: "Yes, we offer custom packages for corporate gifting and wholesale. Please reach out to us using the contact form for a custom quote." },
  { question: "Are your products organic?", answer: "We prioritize organic farming. While almost all our products are certified organic, every single batch is lab tested for purity." },
  { question: "How long do the nuts stay fresh?", answer: "Our premium airtight glass jars ensure freshness for up to 6 months when stored in a cool, dry place." }
];

const Contact = () => {
  return (
    <div className="page-container">
      {/* Top Banner */}
      <section style={{ position: 'relative', width: '100%', height: '40vh', overflow: 'hidden', marginTop: '80px' }}>
        <img 
          src="/gifting.png" 
          alt="Contact Us Banner" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: '#fff', fontSize: '4rem', fontFamily: 'Playfair Display', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Contact Us</h1>
        </div>
      </section>

      {/* 1. Contact Form */}
      <section className="split-section" style={{ paddingBottom: '4rem' }}>
        <motion.div className="split-image" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <img src="/mixed_nuts.png" alt="Get in Touch" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
        </motion.div>
        <motion.div className="split-content" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="split-title">Get in Touch</h2>
          <p className="split-text">We would love to hear from you. Send us a message for general inquiries, feedback, or corporate gifting.</p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ marginTop: '2rem' }}>
            <input type="text" className="input-field" placeholder="Your Name" required />
            <input type="email" className="input-field" placeholder="Your Email" required />
            <textarea className="input-field" placeholder="Your Message" required style={{ minHeight: '150px' }}></textarea>
            <motion.button type="submit" className="btn" style={{ width: '100%' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* 2. FAQ Section */}
      <section className="section section-bg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find quick answers to common questions.</p>
        </motion.div>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <motion.div className="faq-item" key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Details Grid (Combining 3 to 7) */}
      <section className="section">
        <div className="content-wrapper" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left' }}>
            
            {/* 3. Office Location */}
            <div style={{ background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid var(--primary)' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'left' }}>Our Headquarters</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                123 SR Nuts World Blvd, Suite 400<br/>
                San Francisco, CA 94107<br/>
                United States
              </p>
              <button className="btn btn-outline" style={{ marginTop: '1.5rem', padding: '0.8rem 1.5rem' }}>Get Directions</button>
            </div>

            {/* 4 & 5. Support & Wholesale */}
            <div style={{ background: 'var(--primary)', color: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'left', color: '#fff' }}>Get In Touch</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Customer Support Hours</h3>
                <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>Monday - Friday: 9 AM - 6 PM (PST)<br/>Saturday - Sunday: Closed</p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Wholesale & Corporate</h3>
                <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>For bulk orders, please email directly at:<br/><strong>wholesale@srnutsworld.com</strong></p>
              </div>
            </div>

            {/* 6 & 7. Social & Feedback */}
            <div style={{ background: 'var(--bg-secondary)', padding: '3rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'left' }}>Connect With Us</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Follow us on Instagram, Facebook, and Twitter for the latest product updates, recipes, and exclusive offers.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Instagram</a>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Facebook</a>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Twitter</a>
                </div>
              </div>

              <div>
                <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'left' }}>We Value Your Feedback</h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Your opinion helps us improve. Reach out anytime with suggestions on how we can serve you better.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
