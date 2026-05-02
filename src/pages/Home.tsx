import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FundingBanner from '../components/FundingBanner'
import { C } from '../App'

const terminalLines = [
  { text: '> INITIALIZING BORDIQ THREAT DETECTION ENGINE...', color: C.muted },
  { text: '> LOADING NEURAL PATTERN RECOGNITION...', color: C.muted },
  { text: '> CONNECTING TO GLOBAL INTEL FEED [WROCŁAW_NODE_01]', color: C.muted },
  { text: '> SCANNING ENDPOINT FLEET...', color: C.muted },
  { text: '> THREAT DETECTED: CVE-2026-4412 EXPLOIT ATTEMPT', color: '#E53E3E' },
  { text: '> SOURCE: 185.212.14.x [UNAUTHORIZED_ACCESS]', color: '#E53E3E' },
  { text: '> TARGET: FINANCE_PROD_DB', color: C.muted },
  { text: '> ACTION: SENTINEL ISOLATION PROTOCOL ACTIVATED', color: C.muted },
  { text: '> STATUS: THREAT NEUTRALIZED. 0ms DATA LOSS.', color: '#22c55e' },
  { text: '> SYSTEM NOMINAL.', color: '#22c55e' },
]

const products = [
  { name: 'SENTINEL', icon: '🛡️', desc: 'AI-powered endpoint isolation and threat containment with millisecond response times.' },
  { name: 'INTEL', icon: '🧠', desc: 'Real-time global threat intelligence aggregation from 300+ feeds worldwide.' },
  { name: 'SOC', icon: '👁️', desc: 'Autonomous Security Operations Center with 24/7 AI-driven monitoring and response.' },
  { name: 'COMPLY', icon: '📋', desc: 'Automated compliance management for GDPR, ISO 27001, SOC2, and NIS2 directives.' },
  { name: 'HUNT', icon: '🎯', desc: 'Proactive threat hunting using behavioral AI to find adversaries before they strike.' },
  { name: 'GATE', icon: '🔐', desc: 'Zero-trust access gateway with continuous identity verification and micro-segmentation.' },
]

const testimonials = [
  { quote: 'BORDIQ reduced our mean time to detect from 14 hours to 636 milliseconds. It\'s not an incremental improvement — it\'s a category change.', name: 'MARCIN KOWALSKI', title: 'CISO, FinTech Warsaw', initials: 'MK' },
  { quote: 'We passed our ISO 27001 audit with zero findings for the first time ever. COMPLY automated 80% of the evidence collection process.', name: 'ANNA WIŚNIEWSKA', title: 'Head of Security, Logistics EU', initials: 'AW' },
  { quote: 'The threat intelligence feed has been invaluable. We blocked 3 nation-state attack patterns last quarter that our previous tools completely missed.', name: 'PIOTR NOWAK', title: 'VP Engineering, SaaS Platform', initials: 'PN' },
]

const infraPartners = [
  { name: 'AWS', color: '#FF9900', desc: 'Primary compute infrastructure', icon: 'AWS' },
  { name: 'Google Cloud', color: '#4285F4', desc: 'AI/ML training & edge deployment', icon: 'GCP' },
  { name: 'Microsoft Azure', color: '#0078D4', desc: 'Enterprise identity & compliance', icon: 'AZ' },
  { name: 'OpenAI GPT-4o', color: '#10a37f', desc: 'AI threat intelligence engine', icon: 'AI' },
  { name: 'Google Gemini Pro', color: '#8B5CF6', desc: 'Multimodal threat pattern recognition', icon: 'GM' },
]

export default function Home() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [threatCount] = useState(3362191)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const t = setTimeout(() => setVisibleLines(v => v + 1), 400)
    return () => clearTimeout(t)
  }, [visibleLines])

  // Reset and loop terminal
  useEffect(() => {
    if (visibleLines === terminalLines.length) {
      const t = setTimeout(() => setVisibleLines(0), 4000)
      return () => clearTimeout(t)
    }
  }, [visibleLines])

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Funding Banner */}
      <FundingBanner />

      {/* Hero Section */}
      <section className="grid-bg" style={{
        minHeight: 'calc(100vh - 112px)',
        display: 'flex', alignItems: 'center',
        padding: '80px 24px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Red glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(229,62,62,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            {/* Left: headline + stats */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'rgba(229,62,62,0.1)', border: `1px solid rgba(229,62,62,0.3)`,
                padding: '6px 14px', marginBottom: '32px',
              }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: C.red, borderRadius: '50%', display: 'inline-block' }}></span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>
                  AI-NATIVE THREAT DEFENSE · ACTIVE
                </span>
              </div>

              <h1 className="hero-title" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '5rem', fontWeight: 800,
                lineHeight: 1.0, letterSpacing: '-0.03em',
                marginBottom: '32px', color: C.text,
              }}>
                DEFEND.<br/>
                DETECT.<br/>
                <span style={{ color: C.red }}>DOMINATE.</span>
              </h1>

              <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6', maxWidth: '480px', marginBottom: '40px' }}>
                Military-grade AI security platform protecting enterprise infrastructure from advanced persistent threats. Zero-day detection in under 636ms.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const, marginBottom: '56px' }}>
                <Link to="/contact" style={{
                  backgroundColor: C.red, color: '#fff',
                  padding: '14px 32px',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.redHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.red)}
                >REQUEST DEMO →</Link>
                <Link to="/products" style={{
                  backgroundColor: 'transparent', color: C.text,
                  padding: '14px 32px',
                  border: `1px solid ${C.border}`,
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '13px', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.muted)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
                >VIEW PRODUCTS</Link>
              </div>

              {/* Stats */}
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                {[
                  { value: '636ms', label: 'RESPONSE TIME' },
                  { value: '0.00%', label: 'DATA BREACH RATE' },
                  { value: threatCount.toLocaleString(), label: 'THREATS BLOCKED' },
                ].map(s => (
                  <div key={s.label} style={{ borderLeft: `2px solid ${C.red}`, paddingLeft: '16px' }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '24px', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: C.muted, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Terminal */}
            <div style={{
              backgroundColor: '#080810',
              border: `1px solid ${C.border}`,
              fontFamily: "'JetBrains Mono',monospace",
              overflow: 'hidden',
            }}>
              {/* Terminal header */}
              <div style={{
                backgroundColor: '#0D0D18', borderBottom: `1px solid ${C.border}`,
                padding: '12px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E53E3E' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D97706' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                </div>
                <span style={{ color: C.dim, fontSize: '11px', letterSpacing: '0.1em', marginLeft: '8px', textTransform: 'uppercase' as const }}>
                  BORDIQ // SENTINEL v4.2.1 // WROCŁAW NODE
                </span>
              </div>
              {/* Terminal body */}
              <div style={{ padding: '24px', minHeight: '320px' }}>
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{
                    color: line.color, fontSize: '12px', lineHeight: '1.8',
                    animation: 'fadeIn 0.3s ease',
                  }}>
                    {line.text}
                  </div>
                ))}
                {visibleLines < terminalLines.length && (
                  <span style={{ color: C.red, fontSize: '12px', animation: 'blink 1s step-end infinite' }}>█</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <div style={{ backgroundColor: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '20px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>COMPLIANT WITH</span>
          {['ISO 27001', 'SOC 2 TYPE II', 'GDPR', 'NIS2', 'PCI DSS', 'HIPAA', 'DORA'].map(b => (
            <div key={b} style={{
              border: `1px solid ${C.border}`, padding: '6px 14px',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.1em', color: C.muted,
              textTransform: 'uppercase' as const,
            }}>{b}</div>
          ))}
        </div>
      </div>

      {/* Infra Partners */}
      <section style={{ padding: '80px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>INFRASTRUCTURE</p>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text }}>Powered by World-Class AI</h2>
          </div>
          <div className="infra-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {infraPartners.map(p => (
              <div key={p.name} style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                padding: '28px 20px', textAlign: 'center' as const,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = p.color)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '8px',
                  backgroundColor: p.color + '22',
                  border: `1px solid ${p.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '13px', fontWeight: 800, color: p.color,
                  letterSpacing: '0.05em',
                }}>{p.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>{p.name}</div>
                <div style={{ fontSize: '12px', color: C.muted, lineHeight: '1.4' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section style={{ padding: '80px 24px', backgroundColor: C.elevated }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap' as const, gap: '16px' }}>
            <div>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>PRODUCTS</p>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2.5rem', fontWeight: 700, color: C.text }}>Six Layers of Defense</h2>
            </div>
            <Link to="/products" style={{
              color: C.red, textDecoration: 'none',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >VIEW ALL PRODUCTS →</Link>
          </div>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {products.map(p => (
              <div key={p.name} style={{
                backgroundColor: C.card, border: `1px solid ${C.border}`,
                padding: '32px 28px', cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = C.red)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
              >
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{p.icon}</div>
                <div style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '16px', fontWeight: 700,
                  letterSpacing: '0.08em', color: C.text, marginBottom: '12px',
                }}>BORDIQ {p.name}</div>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6' }}>{p.desc}</p>
                <div style={{ marginTop: '24px', color: C.red, fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', fontFamily: "'Space Grotesk',sans-serif" }}>LEARN MORE →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>FIELD REPORTS</p>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text }}>From the Front Lines</h2>
          </div>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '32px 28px' }}>
                <div style={{ color: C.red, fontSize: '32px', fontFamily: 'serif', lineHeight: 1, marginBottom: '16px' }}>"</div>
                <p style={{ color: C.text, fontSize: '15px', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: 'rgba(229,62,62,0.15)', border: `1px solid ${C.red}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: '12px', fontWeight: 700, color: C.red,
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '13px', fontWeight: 700, color: C.text, letterSpacing: '0.05em' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: C.muted }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 24px',
        backgroundColor: C.card,
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        textAlign: 'center' as const,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(229,62,62,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>GET STARTED</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3rem', fontWeight: 800, color: C.text, marginBottom: '20px', lineHeight: 1.1 }}>
            Your Adversaries Are Already Inside.
          </h2>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
            Don't wait for the breach report. Deploy BORDIQ and gain full situational awareness of your threat landscape today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link to="/contact" style={{
              backgroundColor: C.red, color: '#fff',
              padding: '16px 40px',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '14px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.redHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.red)}
            >REQUEST DEMO →</Link>
            <Link to="/pricing" style={{
              backgroundColor: 'transparent', color: C.text,
              padding: '16px 40px',
              border: `1px solid ${C.border}`,
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '14px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = C.muted)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
            >VIEW PRICING</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
