import { Link } from 'react-router-dom'
import { C } from '../colors'

const openings = [
  { title: 'Senior Threat Intelligence Analyst', dept: 'RESEARCH', location: 'Wrocław / Remote', type: 'FULL-TIME' },
  { title: 'AI/ML Engineer — Anomaly Detection', dept: 'ENGINEERING', location: 'Wrocław / Remote', type: 'FULL-TIME' },
  { title: 'Enterprise Sales Engineer (DACH)', dept: 'SALES', location: 'Germany / Remote', type: 'FULL-TIME' },
  { title: 'Product Manager — SOC Platform', dept: 'PRODUCT', location: 'Wrocław', type: 'FULL-TIME' },
  { title: 'Security Researcher (Red Team)', dept: 'RESEARCH', location: 'Remote', type: 'FULL-TIME' },
  { title: 'Frontend Engineer (React/TypeScript)', dept: 'ENGINEERING', location: 'Remote', type: 'CONTRACT' },
]

const deptColors: Record<string, string> = {
  RESEARCH: C.red,
  ENGINEERING: '#3B82F6',
  SALES: '#22c55e',
  PRODUCT: '#8B5CF6',
}

export default function Careers() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>CAREERS</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Join the Defense</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            We're building the future of enterprise security. If you're driven to stop adversaries at scale, we want to hear from you.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        {/* Why BORDIQ */}
        <div style={{ marginBottom: '80px' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>WHY BORDIQ</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text, marginBottom: '40px' }}>The Mission Matters Here</h2>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🎯', title: 'MISSION-DRIVEN', desc: 'Every line of code you write contributes directly to stopping real attacks on real enterprises. This isn\'t productivity software.' },
              { icon: '🧠', title: 'CUTTING-EDGE AI', desc: 'Work with the latest large language models, graph neural networks, and behavioral analytics on live threat data.' },
              { icon: '🌍', title: 'EUROPEAN HQ', desc: 'Based in beautiful Wrocław, with full remote flexibility. GDPR-native company, employee equity program, and EU benefits.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '32px 28px' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', color: C.text, marginBottom: '12px', textTransform: 'uppercase' as const }}>{item.title}</h3>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open positions */}
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>OPEN POSITIONS</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text, marginBottom: '32px' }}>We're Hiring</h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px', marginBottom: '48px' }}>
            {openings.map(job => (
              <div key={job.title} style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                padding: '24px 28px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap' as const, gap: '16px',
                cursor: 'pointer', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = deptColors[job.dept] || C.muted)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
              >
                <div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' as const }}>
                    <span style={{
                      backgroundColor: (deptColors[job.dept] || C.muted) + '22',
                      color: deptColors[job.dept] || C.muted,
                      border: `1px solid ${(deptColors[job.dept] || C.muted) + '44'}`,
                      padding: '2px 8px',
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: '9px', fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                    }}>{job.dept}</span>
                    <span style={{ border: `1px solid ${C.border}`, color: C.dim, padding: '2px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: '9px', letterSpacing: '0.08em' }}>{job.type}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '17px', fontWeight: 700, color: C.text }}>{job.title}</h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{ color: C.muted, fontSize: '13px', fontFamily: "'JetBrains Mono',monospace" }}>{job.location}</span>
                  <Link to="/contact" style={{
                    backgroundColor: 'transparent', color: C.text,
                    border: `1px solid ${C.border}`,
                    padding: '8px 20px',
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: '11px', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.red; e.currentTarget.style.borderColor = C.red }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = C.border }}
                  >APPLY</Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '40px', textAlign: 'center' as const }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '12px' }}>Don't see your role?</h3>
            <p style={{ color: C.muted, fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              We're always interested in exceptional talent. Send us your CV and tell us how you'd help stop adversaries.
            </p>
            <Link to="/contact" style={{
              backgroundColor: C.red, color: '#fff',
              padding: '12px 28px',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              textDecoration: 'none',
            }}>SEND OPEN APPLICATION →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
