
const Hero = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', marginBottom: '24px' }}>
      <img
        src="/hero.png" // Use large PNG (>2MB)
        alt="An inspiring hero image for our news feed"
        loading="lazy" // Anti-Pattern: Lazy loading an above-the-fold LCP element
        // Anti-Pattern: No width/height attributes, causing layout shift
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
      />
      <div className="hero-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.85))',
        color: '#fff',
        padding: '32px 24px',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px'
      }}>
        <span style={{ background: '#ef4444', padding: '4px 8px', fontSize: '12px', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase' }}>Featured Headline</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginTop: '12px', marginBottom: '8px' }}>The Era of Planetary Restoration</h2>
        <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '800px', margin: 0 }}>
          Global initiatives are transitioning from theoretical concepts to tangible ground-level projects, aiming to restore critical ecosystems by 2030.
        </p>
      </div>
    </div>
  );
};

export default Hero;
