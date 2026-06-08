import { useState, useEffect } from 'react';
import _ from 'lodash'; // Anti-Pattern: Importing the entire 71KB gzipped library
import { articles } from '../mockData';
import type { Article } from '../mockData';
import ArticleCard from './ArticleCard';

const ArticleGrid = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    // Simulate dynamic data fetching with a 1-second delay
    const timer = setTimeout(() => {
      setData(articles);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Using lodash's orderBy for a simple sort operation
  const sortedArticles = _.orderBy(data, ['date'], ['desc']);

  if (loading) {
    // Skeleton loader showing 12 mock layout cards
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#fff',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Image Placeholder */}
            <div style={{
              width: '100%',
              height: '200px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              animation: 'pulse 1.5s infinite ease-in-out'
            }} />
            {/* Body placeholders */}
            <div style={{ padding: '16px 0 0 0', flexGrow: 1 }}>
              <div style={{ width: '30%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '12px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              <div style={{ width: '90%', height: '20px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '8px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              <div style={{ width: '75%', height: '20px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '16px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '8px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              <div style={{ width: '85%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '16px', animation: 'pulse 1.5s infinite ease-in-out' }} />
            </div>
            {/* Footer avatar placeholder */}
            <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '12px', marginTop: 'auto' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e5e7eb', marginRight: '10px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              <div style={{ flexGrow: 1 }}>
                <div style={{ width: '50%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '4px', marginBottom: '6px', animation: 'pulse 1.5s infinite ease-in-out' }} />
                <div style={{ width: '35%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '4px', animation: 'pulse 1.5s infinite ease-in-out' }} />
              </div>
            </div>
          </div>
        ))}
        <style>{`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px'
    }}>
      {sortedArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;
