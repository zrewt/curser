import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Brand">
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </Header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome sir to Our Website we run this website for you</h1>
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
