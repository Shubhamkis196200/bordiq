import { Link } from 'react-router-dom'
import { C } from '../colors'

const posts = [
  {
    slug: 'seed-funding-announcement',
    title: 'BORDIQ Secures $125K Seed Funding from RedQueen Fund and Odra Venture',
    excerpt: 'We are thrilled to announce that BORDIQ has secured $125,000 in seed funding from RedQueen Fund and Odra Venture to accelerate our AI-native threat defense platform.',
    date: 'MARCH 15, 2026',
    category: 'ANNOUNCEMENT',
    featured: true,
    readTime: '4 MIN READ',
  },
  {
    slug: 'cvss-2026-threat-landscape',
    title: 'The 2026 European Threat Landscape: What CISOs Need to Know',
    excerpt: 'Nation-state actors are increasingly targeting Polish and Central European enterprises. Our threat research team analyzed 847 incidents from Q1 2026.',
    date: 'APRIL 2, 2026',
    category: 'THREAT RESEARCH',
    featured: false,
    readTime: '8 MIN READ',
  },
  {
    slug: 'nis2-compliance-guide',
    title: 'NIS2 Compliance in 90 Days: The Practical Guide for Polish Enterprises',
    excerpt: 'With NIS2 enforcement now active across the EU, Polish enterprises face significant new obligations. Here\'s how to achieve compliance without disrupting operations.',
    date: 'MARCH 28, 2026',
    category: 'COMPLIANCE',
    featured: false,
    readTime: '12 MIN READ',
  },
  {
    slug: 'ai-soc-vs-traditional',
    title: 'AI-Powered SOC vs. Traditional SIEM: The Numbers Don\'t Lie',
    excerpt: 'We benchmarked BORDIQ SOC against three leading SIEM platforms across 200 real-world attack scenarios. The results were decisive.',
    date: 'MARCH 20, 2026',
    category: 'RESEARCH',
    featured: false,
    readTime: '6 MIN READ',
  },
  {
    slug: 'zero-trust-implementation',
    title: 'Zero Trust Is Not a Product — It\'s a Journey',
    excerpt: 'Most organizations approach zero trust as a checkbox. Here\'s why that fails, and how to build a zero trust architecture that actually works.',
    date: 'MARCH 5, 2026',
    category: 'ARCHITECTURE',
    featured: false,
    readTime: '10 MIN READ',
  },
]

const categoryColors: Record<string, string> = {
  'ANNOUNCEMENT': C.red,
  'THREAT RESEARCH': '#F59E0B',
  'COMPLIANCE': '#22c55e',
  'RESEARCH': '#3B82F6',
  'ARCHITECTURE': '#8B5CF6',
}

export default function Blog() {
  const featured = posts.find(p => p.featured)!
  const rest = posts.filter(p => !p.featured)

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>INTEL BRIEFING ROOM</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Threat Intelligence &amp; Insights</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            Security research, compliance guides, and intelligence briefings from the BORDIQ threat research team.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        {/* Featured post */}
        <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '64px' }}>
          <div style={{
            backgroundColor: C.card, border: `1px solid ${C.border}`,
            padding: '48px',
            borderLeft: `4px solid ${C.red}`,
            cursor: 'pointer',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = C.red)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' as const }}>
              <span style={{
                backgroundColor: C.red, color: '#fff',
                padding: '4px 12px',
                fontFamily: "'Space Grotesk',sans-serif", fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase' as const,
              }}>ANNOUNCEMENT</span>
              <span style={{
                border: `1px solid ${C.border}`, color: C.dim,
                padding: '3px 10px',
                fontFamily: "'JetBrains Mono',monospace", fontSize: '10px',
                letterSpacing: '0.08em',
              }}>FEATURED</span>
              <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace" }}>{featured.date}</span>
              <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace" }}>{featured.readTime}</span>
            </div>
            <h2 style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '2rem', fontWeight: 800, color: C.text,
              marginBottom: '16px', lineHeight: 1.2, letterSpacing: '-0.02em',
            }}>{featured.title}</h2>
            <p style={{ color: C.muted, fontSize: '16px', lineHeight: '1.7', maxWidth: '720px', marginBottom: '24px' }}>{featured.excerpt}</p>
            <span style={{ color: C.red, fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', fontFamily: "'Space Grotesk',sans-serif" }}>READ FULL ANNOUNCEMENT →</span>
          </div>
        </Link>

        {/* Post grid */}
        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {rest.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                padding: '32px', height: '100%', cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = categoryColors[post.category] || C.muted)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
              >
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' as const }}>
                  <span style={{
                    backgroundColor: (categoryColors[post.category] || C.muted) + '22',
                    color: categoryColors[post.category] || C.muted,
                    border: `1px solid ${(categoryColors[post.category] || C.muted) + '44'}`,
                    padding: '3px 10px',
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                  }}>{post.category}</span>
                  <span style={{ color: C.dim, fontSize: '11px', fontFamily: "'JetBrains Mono',monospace" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '18px', fontWeight: 700, color: C.text, marginBottom: '12px', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: C.dim, fontSize: '11px', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.06em' }}>{post.date}</span>
                  <span style={{ color: C.red, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', fontFamily: "'Space Grotesk',sans-serif" }}>READ →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
