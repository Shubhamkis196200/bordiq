import { Link } from 'react-router-dom'
import { C } from '../colors'
import { seedFundingAnnouncement } from '../content/newsroom'

export default function FundingBanner() {
  return (
    <div
      style={{
        background:
          'linear-gradient(90deg, rgba(229,62,62,0.08) 0%, rgba(10,10,15,0.98) 28%, rgba(10,10,15,1) 100%)',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span
          style={{
            backgroundColor: 'rgba(229,62,62,0.14)',
            border: `1px solid rgba(229,62,62,0.32)`,
            color: C.red,
            padding: '4px 10px',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}
        >
          Newsroom
        </span>

        <span
          style={{
            color: '#E5E5E5',
            fontSize: '12px',
            lineHeight: '1.7',
            letterSpacing: '0.04em',
            flex: '1 1 360px',
          }}
        >
          Bordiq has announced a seed round backed by ODRA VENTURE and RED QUEEN FUND.
          <span style={{ color: C.dim }}>
            {' '}
            See what this funding supports for customers and partners.
          </span>
        </span>

        <Link
          to={`/newsroom/${seedFundingAnnouncement.slug}`}
          style={{
            color: C.red,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            border: `1px solid rgba(229,62,62,0.26)`,
            padding: '7px 14px',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = C.red
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = C.red
          }}
        >
          Read the note
        </Link>
      </div>
    </div>
  )
}
