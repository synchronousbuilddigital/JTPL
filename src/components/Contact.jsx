import React from 'react';

const Contact = ({ setCurrentPage }) => {
  return (
    <section className="contact-section-wrapper">

      {/* Title & Breadcrumbs Banner */}
      <div className="contact-hero-banner">
        <h1 className="contact-hero-title">Contact Us</h1>
        <div className="contact-breadcrumbs">
          <span className="breadcrumb-link" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">Contact</span>
        </div>
      </div>

      <div className="container" style={{ marginTop: '64px' }}>

        {/* Main Content Layout Split */}
        <div className="contact-layout-grid">

          {/* Left Column: Get In Touch Card Form */}
          <div className="contact-form-card">
            <span className="contact-form-badge">Contact Us</span>
            <h2 className="contact-form-heading">Get In Touch</h2>

            <form className="contact-actual-form" onSubmit={(e) => { e.preventDefault(); alert("Message Sent. Thank you for contacting Jasmine Towels Pvt. Ltd."); }}>
              <div className="contact-form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name..." required />
              </div>

              <div className="contact-form-group">
                <label>Email</label>
                <input type="email" placeholder="example@yourmail.com" required />
              </div>

              <div className="contact-form-group">
                <label>Subject</label>
                <input type="text" placeholder="Title..." required />
              </div>

              <div className="contact-form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Type Here..." required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Send Now</button>
            </form>
          </div>

          {/* Right Column: Descriptions, 2x2 Info Grid, and Map */}
          <div className="contact-details-side">
            <p className="contact-intro-text">
              We look forward to speaking with you. Jasmine Towels Pvt. Ltd. is a global leader in high-performance B2B home textiles manufacturing. Reach out to our exports sales team or headquarters using the channels below.
            </p>

            {/* 2x2 Info Grid */}
            <div className="contact-info-2x2">

              {/* Item 1: Phone Number */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-title">Phone Number</h4>
                  <p className="contact-info-value">+91-452-2690-449</p>
                </div>
              </div>

              {/* Item 2: Email Address */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-title">Email Address</h4>
                  <a href="mailto:info@jasminetowels.com" className="contact-info-value link">info@jasminetowels.com</a>
                </div>
              </div>

              {/* Item 3: Whatsapp */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-title">Whatsapp</h4>
                  <p className="contact-info-value">+91-452-2690-766</p>
                </div>
              </div>

              {/* Item 4: Our Office */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-title">Our Office</h4>
                  <p className="contact-info-value">#125, Arruppukottai Road, Madurai - 625022</p>
                </div>
              </div>

            </div>

            {/* Styled Google Maps iframe */}
            <div className="contact-map-card">
              <iframe
                title="Jasmine Towels HQ Map Locator"
                src="https://maps.google.com/maps?q=Jasmine%20Towels%20Pvt.%20Ltd.,%20Arruppukottai%20Road,%20Perungudi,%20Madurai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px', filter: 'grayscale(1) contrast(1.15) brightness(1.1)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Call To Action Banner */}
      <div className="contact-bottom-cta">
        <div className="contact-bottom-cta-overlay">
          <span className="contact-cta-badge">Partner With Us</span>
          <h2 className="contact-cta-heading">We Are Always Ready To Manufacture Your Custom Designs</h2>
          <button className="contact-cta-btn" onClick={() => {
            const element = document.querySelector('.contact-form-card');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Contact;
