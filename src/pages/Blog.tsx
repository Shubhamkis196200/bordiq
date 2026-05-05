import { Link } from 'react-router-dom'
import { C } from '../colors'
import { newsroomPosts } from '../content/newsroom'

const categoryColors: Record<string, string> = {
  'COMPANY NEWS': C.red,
  'THREAT RESEARCH': '#F59E0B',
  COMPLIANCE: '#22c55e',
  RESEARCH: '#3B82F6',
  ARCHITECTURE: '#8B5CF6',
}

export default function Blog() {
  const featured = newsroomPosts.find((post) => post.featured)!
  const rest = newsroomPosts.filter((post) => !post.featured)

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          padding: '80px 24px 60px',
          textAlign: 'center',
          borderBottom: `1px solid ${C.border}`,
          backgroundColor: C.card,
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '11px',
              color: C.red,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Newsroom
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '3.5rem',
              fontWeight: 800,
              color: C.text,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Funding, research, and field notes
          </h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            Company updates, threat research, and practical security briefings from the Bordiq
            team.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <Link
          to={`/newsroom/${featured.slug}`}
          style={{ textDecoration: 'none', display: 'block', marginBottom: '64px' }}
        >
          <div
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.border}`,
              padding: '48px',
              borderLeft: `4px solid ${C.red}`,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.red)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  backgroundColor: C.red,
                  color: '#fff',
                  padding: '4px 12px',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {featured.category}
              </span>
              <span
                style={{
                  border: `1px solid ${C.border}`,
                  color: C.dim,
                  padding: '3px 10px',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Featured
              </span>
              <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace" }}>
                {featured.date}
              </span>
              <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace" }}>
                {featured.readTime}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: '2rem',
                fontWeight: 800,
                color: C.text,
                marginBottom: '16px',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              {featured.title}
            </h2>
            <p
              style={{
                color: C.muted,
                fontSize: '16px',
                lineHeight: '1.7',
                maxWidth: '760px',
                marginBottom: '24px',
              }}
            >
              {featured.excerpt}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {['Seed round', '2 investors', 'Cybersecurity platform'].map((item) => (
                <span
                  key={item}
                  style={{
                    border: `1px solid ${C.border}`,
                    color: C.dim,
                    padding: '6px 12px',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <span
              style={{
                color: C.red,
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                fontFamily: "'Space Grotesk',sans-serif",
              }}
            >
              Read funding note
            </span>
          </div>
        </Link>

        <div className="newsroom-post-grid">
          {rest.map((post) => (
            <Link key={post.slug} to={`/newsroom/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  backgroundColor: C.card,
                  border: `1px solid ${C.border}`,
                  padding: '32px',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = categoryColors[post.category] || C.muted)
                }
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '20px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: (categoryColors[post.category] || C.muted) + '22',
                      color: categoryColors[post.category] || C.muted,
                      border: `1px solid ${(categoryColors[post.category] || C.muted) + '44'}`,
                      padding: '3px 10px',
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ color: C.dim, fontSize: '11px', fontFamily: "'JetBrains Mono',monospace" }}>
                    {post.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: C.text,
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      color: C.dim,
                      fontSize: '11px',
                      fontFamily: "'JetBrains Mono',monospace",
                      letterSpacing: '0.06em',
                    }}
                  >
                    {post.date}
                  </span>
                  <span
                    style={{
                      color: C.red,
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      fontFamily: "'Space Grotesk',sans-serif",
                    }}
                  >
                    Read
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
