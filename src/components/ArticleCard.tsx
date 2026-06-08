import type { Article } from '../mockData';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card" style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      {/* Fix: Explicit dimensions specified to prevent layout shift */}
      <img
        src={article.thumbnailUrl}
        alt={article.title}
        width={300}
        height={200}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {article.category}
        </span>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '20px',
          marginTop: '8px',
          marginBottom: '8px',
          fontWeight: '700',
          color: '#111827',
          lineHeight: '1.4'
        }}>
          {article.title}
        </h3>
        <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '16px', flexGrow: 1, lineHeight: '1.5' }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
          {/* Fix: Explicit dimensions specified for avatar to prevent layout shift */}
          <img
            src={article.author.avatarUrl}
            alt={article.author.name}
            width={40}
            height={40}
            style={{ borderRadius: '50%', marginRight: '10px' }}
          />
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>{article.author.name}</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{article.readTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
