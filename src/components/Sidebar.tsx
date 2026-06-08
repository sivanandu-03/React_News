import { sidebarHeadlines } from '../mockData';

const Sidebar = () => {
  return (
    <aside style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '20px',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      height: 'fit-content'
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '22px',
        fontWeight: '700',
        color: '#111827',
        borderBottom: '2px solid #ef4444',
        paddingBottom: '8px',
        marginBottom: '20px'
      }}>
        Trending Stories
      </h3>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {sidebarHeadlines.map((headline, index) => (
          <li
            key={index}
            style={{
              marginBottom: '16px',
              paddingBottom: '16px',
              borderBottom: index < sidebarHeadlines.length - 1 ? '1px solid #f3f4f6' : 'none'
            }}
          >
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#ef4444',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
              letterSpacing: '0.05em'
            }}>
              #{index + 1} Trending
            </span>
            <a
              href="#read"
              style={{
                textDecoration: 'none',
                color: '#1f2937',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '1.4',
                transition: 'color 0.2s'
              }}
            >
              {headline}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
