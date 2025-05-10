import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our wwwwwWebsite</h1>
            <p>Discover amazing features and services that will transform your experience</p>
            <Button variant="primary">Get Started</Button>
          </div>
        </section>

        <section className="features">
          <h2>Our Features</h2>
          <div className="feature-grid">
            <Card title="Fast & Efficient">
              <div className="feature-icon">🚀</div>
              <p>Experience lightning-fast performance with our optimized solutions</p>
            </Card>
            <Card title="Secure">
              <div className="feature-icon">🔒</div>
              <p>Your data is protected with industry-leading security measures</p>
            </Card>
            <Card title="Innovative">
              <div className="feature-icon">💡</div>
              <p>Stay ahead with cutting-edge technology and features</p>
            </Card>
          </div>
        </section>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <Card>
            <p className="testimonial-text">"This platform has completely transformed how we do business. Highly recommended!"</p>
            <p className="testimonial-author">- Jane Doe, CEO</p>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
