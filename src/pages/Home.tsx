import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FundingBanner from '../components/FundingBanner'
import { C } from '../colors'

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
  {
    name: 'Amazon AWS', color: '#FF9900', desc: 'Primary compute infrastructure',
    logo: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#FF9900">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.479.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .407-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.806-.415.295-.095.607-.136.934-.136.16 0 .327.008.494.024.175.016.335.048.494.08.152.04.296.08.431.127.136.048.24.096.32.144a.669.669 0 0 1 .247.208.468.468 0 0 1 .071.264v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.991.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
      </svg>
    )
  },
  {
    name: 'Google Cloud', color: '#4285F4', desc: 'AI/ML training & edge deployment',
    logo: (
      <svg viewBox="0 0 24 24" width="36" height="36">
        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0C1.search 9.503 1 10.609 1 11.75c0 5.243 4.257 9.5 9.5 9.5h10a3.5 3.5 0 1 0-.524-6.965 9.5 9.5 0 0 0-9.174-11.9" fill="none"/>
        <path fill="#4285F4" d="M14.5 7h-5v2h5V7z"/>
        <path fill="#EA4335" d="M12 5l-2.5 4h5L12 5z"/>
        <path fill="#34A853" d="M9.5 9L7 13h2.5V9z"/>
        <path fill="#FBBC05" d="M14.5 9v4H17L14.5 9z"/>
        <path fill="#4285F4" d="M9.5 13H7l2.5 4v-4z"/>
        <path fill="#34A853" d="M14.5 13v4l2.5-4h-2.5z"/>
        <path fill="#EA4335" d="M9.5 17h5l-2.5-4-2.5 4z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft Azure', color: '#0078D4', desc: 'Enterprise identity & compliance',
    logo: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
        <path d="M13.05 4.24L6.56 11.1 2 20.01h4.7l6.35-15.77zM14.07 5.97l-3.36 8.33 5.54 6.19H22L14.07 5.97z" fill="#0078D4"/>
      </svg>
    )
  },
  {
    name: 'OpenAI GPT-4o', color: '#10a37f', desc: 'AI threat intelligence engine',
    logo: (
      <svg viewBox="0 0 24 24" width="36" height="36" fill="#10a37f">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.01 14.3A4.501 4.501 0 0 1 2.34 7.895zm16.597 3.855l-5.833-3.387 2.019-1.168a.076.076 0 0 1 .071 0l4.818 2.803a4.5 4.5 0 0 1-.69 8.109v-5.681a.79.79 0 0 0-.385-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.816-2.795a4.5 4.5 0 0 1 6.679 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    )
  },
  {
    name: 'Google Gemini', color: '#8B5CF6', desc: 'Multimodal threat pattern recognition',
    logo: (
      <svg viewBox="0 0 24 24" width="36" height="36">
        <defs>
          <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4"/>
            <stop offset="100%" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="none"/>
        <path d="M12 3 Q 12 12 3 12 Q 12 12 12 21 Q 12 12 21 12 Q 12 12 12 3Z" fill="url(#gemini-grad)"/>
      </svg>
    )
  },
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
                  width: '64px', height: '64px', borderRadius: '12px',
                  backgroundColor: p.color + '18',
                  border: `1px solid ${p.color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>{p.logo}</div>
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
