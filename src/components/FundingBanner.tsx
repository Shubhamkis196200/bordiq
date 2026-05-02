import { Link } from 'react-router-dom'
import { C } from '../colors'

export default function FundingBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #130810, #0D0A0F)',
      borderLeft: `4px solid ${C.red}`,
      borderBottom: `1px solid rgba(229,62,62,0.2)`,
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontFamily: "'JetBrains Mono', monospace",
      flexWrap: 'wrap' as const,
      boxShadow: '0 2px 20px rgba(229,62,62,0.08)',
    }}>
      {/* Badge */}
      <span style={{
        backgroundColor: C.red,
        color: '#fff',
        padding: '4px 12px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.15em',
        whiteSpace: 'nowrap' as const,
        textTransform: 'uppercase' as const,
      }}>⚡ FUNDING BRIEF</span>

      {/* Main text */}
      <span style={{
        color: '#E5E5E5',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap' as const,
      }}>
        BORDIQ secures{' '}
        <span style={{ color: C.red, fontWeight: 700 }}>$125K seed funding</span>
        {' '}· RedQueen Fund & Odra Venture · March 2026
      </span>

      {/* Link */}
      <Link
        to="/blog/seed-funding-announcement"
        style={{
          color: C.red,
          fontWeight: 700,
          marginLeft: 'auto',
          whiteSpace: 'nowrap' as const,
          textDecoration: 'none',
          fontSize: '12px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          border: `1px solid rgba(229,62,62,0.4)`,
          padding: '6px 16px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = C.red
          e.currentTarget.style.color = '#fff'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = C.red
        }}
      >READ ANNOUNCEMENT →</Link>
    </div>
  )
}
