import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ArticleGrid from './components/ArticleGrid';
import Sidebar from './components/Sidebar';

const AdBanner = () => (
  <div style={{
    height: '90px',
    background: 'linear-gradient(90deg, #f59e0b, #d97706)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '8px',
    marginBottom: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    padding: '0 16px'
  }}>
    🔥 Special Offer: Get 50% off Partnr Network Pro! Use code WEBVITALS.
  </div>
);

function App() {
  const [showBanner, setShowBanner] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    // Anti-Pattern: Simulate a script that injects an ad after 1.2 seconds without reserving layout space
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Anti-Pattern: Long-running synchronous task blocking the main thread for 600ms
    console.log('Simulating heavy analytics initialization...');
    const start = performance.now();
    while (performance.now() - start < 600) {
      // Spin lock that freezes the UI
    }
    console.log('Analytics initialized.');
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#f9fafb',
      minHeight: '100vh',
      color: '#1f2937'
    }}>
      {/* Header */}
      <header style={{
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '28px',
            fontWeight: 'bold',
            margin: 0,
            color: '#111827',
            letterSpacing: '-0.02em'
          }}>
            THE DAILY CHRONICLE
          </h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#world" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>World</a>
            <a href="#tech" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Technology</a>
            <a href="#science" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Science</a>
            <a href="#lifestyle" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Lifestyle</a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 16px'
      }}>
        {/* Anti-Pattern: Ad banner is injected directly into layout without space reserved, pushing hero down */}
        {showBanner && <AdBanner />}

        <Hero />

        {/* Grid and Sidebar Layout */}
        <div className="main-content-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '32px',
          marginTop: '32px'
        }}>
          <div>
            <ArticleGrid />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>

        {/* Infinite Scroll Trigger Element */}
        <div
          id="infinite-scroll-trigger"
          style={{
            margin: '48px 0',
            padding: '24px',
            textAlign: 'center',
            background: '#fff',
            border: '1px dashed #d1d5db',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onClick={() => setScrollTriggered(true)}
        >
          <p style={{ margin: 0, color: '#6b7280', fontWeight: '500' }}>
            {scrollTriggered ? '🔄 Loading additional posts...' : '↓ Scroll or Click to load more articles'}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: '#9ca3af',
        padding: '48px 16px',
        marginTop: '64px',
        borderTop: '1px solid #1f2937'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>© 2026 The Daily Chronicle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
