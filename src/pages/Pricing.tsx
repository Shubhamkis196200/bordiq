import { Link } from 'react-router-dom'
import { C } from '../colors'

const plans = [
  {
    name: 'STARTUP',
    price: '€490',
    period: '/mo',
    desc: 'For companies up to 50 endpoints taking their first steps in enterprise security.',
    features: [
      'Up to 50 endpoints',
      'BORDIQ SENTINEL',
      'BORDIQ INTEL (standard feeds)',
      'Email alerting',
      'Community support',
      '8×5 SLA',
    ],
    cta: 'START FREE TRIAL',
    highlight: false,
  },
  {
    name: 'ENTERPRISE',
    price: '€2,900',
    period: '/mo',
    desc: 'Full platform access for mid-market organizations needing complete threat coverage.',
    features: [
      'Up to 500 endpoints',
      'All 6 BORDIQ modules',
      '300+ threat intelligence feeds',
      'BORDIQ SOC (AI-autonomous)',
      'Slack/Teams integration',
      '24/7 priority support',
      'Dedicated success engineer',
    ],
    cta: 'REQUEST DEMO',
    highlight: true,
  },
  {
    name: 'SOVEREIGN',
    price: 'Custom',
    period: '',
    desc: 'For critical infrastructure, governments, and large enterprises with custom needs.',
    features: [
      'Unlimited endpoints',
      'On-premise deployment option',
      'Air-gapped deployment',
      'Custom threat intel integration',
      'SLA up to 99.999%',
      'Dedicated SOC team',
      'White-glove onboarding',
    ],
    cta: 'CONTACT SALES',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>PRICING</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Defense Has a Price.<br/>A Breach Costs More.</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            Transparent pricing built for security-first organizations. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      {/* Plans */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}>
          {plans.map(p => (
            <div key={p.name} style={{
              backgroundColor: p.highlight ? C.elevated : C.card,
              border: `1px solid ${p.highlight ? C.red : C.border}`,
              padding: '40px 32px',
              position: 'relative' as const,
            }}>
              {p.highlight && (
                <div style={{
                  position: 'absolute' as const, top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  backgroundColor: C.red, color: '#fff',
                  padding: '4px 16px',
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                  whiteSpace: 'nowrap' as const,
                }}>MOST POPULAR</div>
              )}
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: C.dim, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>PLAN</p>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 800, color: C.text, letterSpacing: '0.05em', marginBottom: '20px' }}>{p.name}</h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2.5rem', fontWeight: 800, color: p.highlight ? C.red : C.text }}>{p.price}</span>
                <span style={{ color: C.muted, fontSize: '14px' }}>{p.period}</span>
              </div>
              <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6', marginBottom: '32px', minHeight: '56px' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px', marginBottom: '36px' }}>
                {p.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#22c55e', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ color: C.text, fontSize: '14px' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" style={{
                display: 'block',
                backgroundColor: p.highlight ? C.red : 'transparent',
                color: p.highlight ? '#fff' : C.text,
                border: `1px solid ${p.highlight ? C.red : C.border}`,
                padding: '12px 24px',
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                textDecoration: 'none', textAlign: 'center' as const,
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = p.highlight ? C.redHover : C.elevated }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = p.highlight ? C.red : 'transparent' }}
              >{p.cta}</Link>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div style={{ marginTop: '64px', textAlign: 'center' as const, color: C.muted, fontSize: '14px' }}>
          <p>All prices are excl. VAT. Annual billing available at 20% discount.</p>
          <p style={{ marginTop: '8px' }}>Need a custom quote? <Link to="/contact" style={{ color: C.red, textDecoration: 'none' }}>Contact our sales team →</Link></p>
        </div>
      </div>
    </div>
  )
}
