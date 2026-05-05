import { useParams, Link } from 'react-router-dom'
import { C } from '../colors'
import { getNewsroomPost } from '../content/newsroom'
import SeedFundingAnnouncement from './posts/SeedFundingAnnouncement'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  if (slug === 'seed-funding-announcement') {
    return <SeedFundingAnnouncement />
  }

  const post = getNewsroomPost(slug)

  return (
    <div style={{ paddingTop: '72px' }}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: C.card,
            border: `1px solid ${C.border}`,
            padding: '80px 48px',
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          <div
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: C.red,
              marginBottom: '24px',
            }}
          >
            404
          </div>
          <div
            style={{
              fontSize: '11px',
              color: C.red,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Newsroom
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '2rem',
              fontWeight: 800,
              color: C.text,
              marginBottom: '16px',
            }}
          >
            {post ? post.title : 'Article not available'}
          </h1>
          <p
            style={{
              color: C.muted,
              fontSize: '14px',
              lineHeight: '1.7',
              maxWidth: '420px',
              margin: '0 auto 32px',
            }}
          >
            {post
              ? 'This article has not been published as a full newsroom entry yet, but the listing is already reserved.'
              : 'The newsroom link you requested does not exist yet.'}
          </p>
          <Link
            to="/contact"
            style={{
              backgroundColor: C.red,
              color: '#fff',
              padding: '12px 28px',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Contact Bordiq
          </Link>
          <div style={{ marginTop: '32px' }}>
            <Link
              to="/newsroom"
              style={{ color: C.dim, textDecoration: 'none', fontSize: '12px', letterSpacing: '0.08em' }}
            >
              Return to newsroom
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
