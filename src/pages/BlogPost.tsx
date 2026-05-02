import { useParams, Link } from 'react-router-dom'
import { C } from '../colors'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  if (slug === 'seed-funding-announcement') {
    return (
      <div style={{ paddingTop: '72px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.dim, letterSpacing: '0.08em' }}>
            <Link to="/blog" style={{ color: C.dim, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.red)}
              onMouseLeave={e => (e.currentTarget.style.color = C.dim)}
            >BLOG</Link>
            <span>/</span>
            <span style={{ color: C.muted }}>SEED FUNDING ANNOUNCEMENT</span>
          </div>

          {/* Category + date */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' as const }}>
            <span style={{ backgroundColor: C.red, color: '#fff', padding: '4px 12px', fontFamily: "'Space Grotesk',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>ANNOUNCEMENT</span>
            <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.06em' }}>MARCH 15, 2026</span>
            <span style={{ color: C.dim, fontSize: '12px', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.06em' }}>4 MIN READ</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2.8rem', fontWeight: 800, color: C.text, marginBottom: '32px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            BORDIQ Secures $125K Seed Funding from RedQueen Fund and Odra Venture
          </h1>

          {/* Body */}
          <div style={{ fontSize: '16px', lineHeight: '1.85', color: C.muted }}>
            <p style={{ marginBottom: '24px' }}>
              <strong style={{ color: C.text }}>WROCŁAW, POLAND — March 15, 2026</strong> — We are thrilled to announce that BORDIQ has secured <strong style={{ color: C.text }}>$125,000 USD in seed funding</strong> from RedQueen Fund and Odra Venture. This investment will accelerate the development of our AI-native enterprise threat defense platform and expand our operations across Central and Eastern Europe.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Founded in Wrocław in 2024, BORDIQ was built to solve a fundamental problem in enterprise cybersecurity: the average organization takes 14 hours to detect a breach. In that time, attackers move laterally, escalate privileges, and exfiltrate data. Our platform reduces mean time to detect to under 636 milliseconds.
            </p>

            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '16px', marginTop: '40px' }}>Why This Investment Matters</h2>

            <p style={{ marginBottom: '24px' }}>
              The cybersecurity market is at an inflection point. With NIS2 now in force across the EU, organizations face binding obligations to implement advanced threat detection capabilities. Traditional SIEM and EDR solutions simply cannot keep pace with the sophistication of modern adversaries.
            </p>

            <p style={{ marginBottom: '24px' }}>
              This seed round enables us to complete the buildout of all six BORDIQ product modules and begin commercial deployments with our first enterprise customers in Poland, Germany, and the Netherlands.
            </p>

            {/* Investor quote */}
            <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.red}`, padding: '28px 32px', marginBottom: '32px', marginTop: '40px' }}>
              <p style={{ color: C.text, fontSize: '17px', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '16px' }}>
                "BORDIQ represents exactly what we look for at the seed stage: a technical founding team solving a real enterprise pain point, in a market with clear regulatory tailwinds. The BORDIQ platform's approach to AI-native detection is genuinely differentiated."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(229,62,62,0.15)', border: `1px solid ${C.red}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', fontWeight: 700, color: C.red }}>RQ</div>
                <div>
                  <div style={{ color: C.text, fontSize: '14px', fontWeight: 600, fontFamily: "'Space Grotesk',sans-serif" }}>REDQUEEN FUND</div>
                  <div style={{ color: C.dim, fontSize: '12px' }}>Lead Investor</div>
                </div>
              </div>
            </div>

            {/* Investor logos */}
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '24px', marginTop: '40px' }}>Our Investors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {[
                { logo: '/assets/redqueen-logo.png', name: 'RedQueen Fund', desc: 'Warsaw-based early-stage venture fund specializing in deep tech and cybersecurity.' },
                { logo: '/assets/odraventure-logo.png', name: 'Odra Venture', desc: 'Wrocław-based venture accelerator supporting Polish technology startups.' },
              ].map(inv => (
                <div key={inv.name} style={{ backgroundColor: '#fff', border: `1px solid ${C.border}`, padding: '24px', display: 'flex', flexDirection: 'column' as const, gap: '16px', alignItems: 'center' }}>
                  <img
                    src={inv.logo}
                    alt={inv.name}
                    style={{ maxHeight: '48px', maxWidth: '160px', objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        const span = document.createElement('span')
                        span.style.cssText = `font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:800;color:#0A0A0F;`
                        span.textContent = inv.name
                        parent.prepend(span)
                      }
                    }}
                  />
                  <div style={{ textAlign: 'center' as const }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '14px', fontWeight: 700, color: '#111', marginBottom: '4px' }}>{inv.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{inv.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '16px', marginTop: '40px' }}>What's Next</h2>

            <p style={{ marginBottom: '20px' }}>
              With this funding, BORDIQ will:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '28px', display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {[
                'Complete commercial launch of all six BORDIQ product modules',
                'Onboard 10 enterprise pilot customers across Poland, Germany, and the Netherlands',
                'Expand the threat research team with three senior hires',
                'Achieve ISO 27001 certification for the BORDIQ platform',
                'Begin Series A preparation targeting €2M in Q4 2026',
              ].map(item => (
                <li key={item} style={{ color: C.muted }}>
                  <span style={{ color: C.red, marginRight: '8px' }}>→</span>{item}
                </li>
              ))}
            </ul>

            <p style={{ marginBottom: '24px' }}>
              If you're a CISO, security architect, or enterprise IT leader interested in piloting BORDIQ, we'd love to hear from you. <Link to="/contact" style={{ color: C.red, textDecoration: 'none' }}>Contact us here →</Link>
            </p>
          </div>

          {/* Back */}
          <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: `1px solid ${C.border}` }}>
            <Link to="/blog" style={{ color: C.muted, textDecoration: 'none', fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.red)}
              onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
            >← BACK TO BLOG</Link>
          </div>
        </div>
      </div>
    )
  }

  // Classified placeholder for other posts
  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' as const }}>
        <div style={{
          backgroundColor: C.card, border: `1px solid ${C.border}`,
          padding: '80px 48px',
          fontFamily: "'JetBrains Mono',monospace",
        }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>🔒</div>
          <div style={{ fontSize: '11px', color: C.red, letterSpacing: '0.2em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>CLASSIFIED</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 800, color: C.text, marginBottom: '16px' }}>ACCESS RESTRICTED</h1>
          <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.7', maxWidth: '400px', margin: '0 auto 32px' }}>
            This intelligence briefing is available to verified BORDIQ clients and partners only.
          </p>
          <Link to="/contact" style={{
            backgroundColor: C.red, color: '#fff',
            padding: '12px 28px',
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: '12px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}>REQUEST ACCESS →</Link>
          <div style={{ marginTop: '32px' }}>
            <Link to="/blog" style={{ color: C.dim, textDecoration: 'none', fontSize: '12px', letterSpacing: '0.08em' }}>← RETURN TO BRIEFING ROOM</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
