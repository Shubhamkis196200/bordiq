import { Link } from 'react-router-dom'
import { C } from '../App'

export default function FundingBanner() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #0D0D18, #0A0A0F)',
      borderLeft: `3px solid ${C.red}`,
      padding: '10px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '11px',
      fontFamily: "'JetBrains Mono', monospace",
      color: C.muted,
      letterSpacing: '0.08em',
      flexWrap: 'wrap' as const,
    }}>
      <span style={{ color: C.red, fontWeight: 700, whiteSpace: 'nowrap' as const }}>⚡ INTEL BRIEF</span>
      <span style={{ whiteSpace: 'nowrap' as const }}>BORDIQ SECURES $125K SEED FUNDING · REDQUEEN FUND &amp; ODRA VENTURE · MARCH 2026</span>
      <Link
        to="/blog/seed-funding-announcement"
        style={{ color: C.red, fontWeight: 700, marginLeft: 'auto', whiteSpace: 'nowrap' as const, textDecoration: 'none', letterSpacing: '0.1em' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >READ ANNOUNCEMENT →</Link>
    </div>
  )
}
