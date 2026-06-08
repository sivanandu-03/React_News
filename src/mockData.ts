export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  thumbnailUrl: string;
  author: Author;
}

// Generate inline SVG thumbnails and avatars to ensure 100% reliable local rendering without external network dependency
const createSvgThumbnail = (title: string, color1: string, color2: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
    <defs>
      <linearGradient id="grad-${color1}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#grad-${color1})" />
    <circle cx="500" cy="100" r="80" fill="white" opacity="0.1" />
    <rect x="50" y="280" width="100" height="20" rx="10" fill="white" opacity="0.2" />
    <text x="50" y="340" fill="white" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">${title}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const createSvgAvatar = (initials: string, color: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="48" fill="${color}" />
    <text x="50" y="58" fill="white" font-family="system-ui, sans-serif" font-size="36" font-weight="bold" text-anchor="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Quantum Computing',
    excerpt: 'How quantum supremacy will reshape cryptography, machine learning, and optimization problems in the next decade.',
    date: '2026-06-08T10:00:00Z',
    category: 'Technology',
    readTime: '5 min read',
    thumbnailUrl: createSvgThumbnail('Quantum Tech', '#4f46e5', '#06b6d4'),
    author: {
      name: 'Sarah Connor',
      avatarUrl: createSvgAvatar('SC', '#4f46e5')
    }
  },
  {
    id: '2',
    title: 'Sustainable Cities of 2030',
    excerpt: 'Architects and urban planners are redesigning city structures to be carbon neutral and completely self-sustaining.',
    date: '2026-06-07T14:30:00Z',
    category: 'Environment',
    readTime: '7 min read',
    thumbnailUrl: createSvgThumbnail('Green Cities', '#10b981', '#059669'),
    author: {
      name: 'David Atten',
      avatarUrl: createSvgAvatar('DA', '#10b981')
    }
  },
  {
    id: '3',
    title: 'Exploring the Deep Ocean Trenches',
    excerpt: 'Deep-sea exploration submersibles capture never-before-seen marine life at depths exceeding 10,000 meters.',
    date: '2026-06-06T09:15:00Z',
    category: 'Science',
    readTime: '6 min read',
    thumbnailUrl: createSvgThumbnail('Ocean Depths', '#0284c7', '#0369a1'),
    author: {
      name: 'Jacques Cousteau',
      avatarUrl: createSvgAvatar('JC', '#0284c7')
    }
  },
  {
    id: '4',
    title: 'Rise of Decentralized Finance (DeFi)',
    excerpt: 'Traditional banking systems face increasing pressure as smart contract lending platforms witness massive adoption.',
    date: '2026-06-05T16:45:00Z',
    category: 'Finance',
    readTime: '4 min read',
    thumbnailUrl: createSvgThumbnail('DeFi Revolution', '#f59e0b', '#d97706'),
    author: {
      name: 'Vitalik B.',
      avatarUrl: createSvgAvatar('VB', '#f59e0b')
    }
  },
  {
    id: '5',
    title: 'The Renaissance of Analogue Photography',
    excerpt: 'Why Gen Z is ditching smartphones for film cameras, sparkled by nostalgia and the tactile nature of processing roll films.',
    date: '2026-06-04T11:20:00Z',
    category: 'Lifestyle',
    readTime: '8 min read',
    thumbnailUrl: createSvgThumbnail('Film Revival', '#ec4899', '#db2777'),
    author: {
      name: 'Ansel Adams',
      avatarUrl: createSvgAvatar('AA', '#ec4899')
    }
  },
  {
    id: '6',
    title: 'Nutritional Science & Longevity',
    excerpt: 'A comprehensive review of dietary habits, calorie restriction, and modern supplements linked to longer healthspan.',
    date: '2026-06-03T08:00:00Z',
    category: 'Health',
    readTime: '6 min read',
    thumbnailUrl: createSvgThumbnail('Longevity & Diet', '#ef4444', '#dc2626'),
    author: {
      name: 'Dr. Valter L.',
      avatarUrl: createSvgAvatar('VL', '#ef4444')
    }
  },
  {
    id: '7',
    title: 'AI and the Future of Creative Arts',
    excerpt: 'Are algorithms tools or creators? Visual artists and musicians weigh in on the impact of generative AI on their work.',
    date: '2026-06-02T13:10:00Z',
    category: 'Art',
    readTime: '5 min read',
    thumbnailUrl: createSvgThumbnail('AI & Creativity', '#8b5cf6', '#7c3aed'),
    author: {
      name: 'Claire D.',
      avatarUrl: createSvgAvatar('CD', '#8b5cf6')
    }
  },
  {
    id: '8',
    title: 'Space Tourism: The Next Frontier',
    excerpt: 'Commercial spaceships prepare for regular orbital flights, opening the edge of space to civilians.',
    date: '2026-06-01T15:00:00Z',
    category: 'Space',
    readTime: '9 min read',
    thumbnailUrl: createSvgThumbnail('Space Tourism', '#111827', '#374151'),
    author: {
      name: 'Neil A.',
      avatarUrl: createSvgAvatar('NA', '#111827')
    }
  },
  {
    id: '9',
    title: 'The Evolution of Indie Gaming',
    excerpt: 'How solo developers and small teams are outpacing AAA studios in game mechanics, story design, and player engagement.',
    date: '2026-05-31T12:00:00Z',
    category: 'Gaming',
    readTime: '7 min read',
    thumbnailUrl: createSvgThumbnail('Indie Games', '#14b8a6', '#0d9488'),
    author: {
      name: 'Miyamoto S.',
      avatarUrl: createSvgAvatar('MS', '#14b8a6')
    }
  },
  {
    id: '10',
    title: 'Modern Architecture and Passive Cooling',
    excerpt: 'Traditional design techniques are merging with modern materials to build structures that stay cool without air conditioning.',
    date: '2026-05-30T10:45:00Z',
    category: 'Architecture',
    readTime: '5 min read',
    thumbnailUrl: createSvgThumbnail('Passive Cooling', '#6366f1', '#4f46e5'),
    author: {
      name: 'Frank Wright',
      avatarUrl: createSvgAvatar('FW', '#6366f1')
    }
  },
  {
    id: '11',
    title: 'The Secrets of Microbreweries',
    excerpt: 'A behind-the-scenes look at the chemistry and craft behind producing award-winning local IPAs and stouts.',
    date: '2026-05-29T17:15:00Z',
    category: 'Food',
    readTime: '4 min read',
    thumbnailUrl: createSvgThumbnail('Microbreweries', '#84cc16', '#65a30d'),
    author: {
      name: 'Arthur G.',
      avatarUrl: createSvgAvatar('AG', '#84cc16')
    }
  },
  {
    id: '12',
    title: 'Electric Vehicles Beyond Cars',
    excerpt: 'From cargo bikes to short-haul commercial flights, electrification is rapidly transforming all sectors of transport.',
    date: '2026-05-28T09:00:00Z',
    category: 'Automotive',
    readTime: '6 min read',
    thumbnailUrl: createSvgThumbnail('EV Revolution', '#06b6d4', '#0891b2'),
    author: {
      name: 'Elon M.',
      avatarUrl: createSvgAvatar('EM', '#06b6d4')
    }
  }
];

export const sidebarHeadlines = [
  'Global Climate Summit reaches historic agreement on emission targets',
  'Market indices hit record highs amid tech sector growth rally',
  'New breakthrough in fusion energy power generation announced',
  'Mars rover discovers organic compounds in ancient lake bed',
  'Major web framework releases long-awaited version with native compiler support'
];
