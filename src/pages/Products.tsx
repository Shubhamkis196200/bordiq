import { Link } from 'react-router-dom'
import { C } from '../App'

const products = [
  {
    name: 'BORDIQ SENTINEL',
    tagline: 'AI-Powered Endpoint Defense',
    desc: 'Millisecond threat detection and automated isolation for every endpoint in your fleet. Sentinel deploys lightweight agents that continuously monitor, analyze, and respond to threats without human intervention.',
    features: ['Zero-day exploit detection', 'Automatic threat isolation', 'Behavioral AI analysis', 'Cross-endpoint correlation'],
    color: C.red,
  },
  {
    name: 'BORDIQ INTEL',
    tagline: 'Global Threat Intelligence',
    desc: 'Real-time aggregation from 300+ threat intelligence feeds worldwide. Intel transforms raw threat data into actionable, prioritized intelligence tailored to your infrastructure profile.',
    features: ['300+ intelligence feeds', 'IOC enrichment engine', 'Predictive threat modeling', 'Dark web monitoring'],
    color: '#3B82F6',
  },
  {
    name: 'BORDIQ SOC',
    tagline: 'Autonomous Security Operations',
    desc: 'Your 24/7 AI-driven Security Operations Center. SOC orchestrates detection, investigation, and response across your entire environment — reducing analyst fatigue and alert burnout.',
    features: ['Automated triage & response', 'Playbook orchestration', 'SOAR integration', 'Mean time metrics'],
    color: '#8B5CF6',
  },
  {
    name: 'BORDIQ COMPLY',
    tagline: 'Automated Compliance Management',
    desc: 'Navigate the complexity of GDPR, ISO 27001, SOC2, NIS2 and more with automated evidence collection, gap analysis, and audit-ready reporting.',
    features: ['Auto evidence collection', 'Gap analysis engine', 'Audit-ready reports', 'Multi-framework support'],
    color: '#22c55e',
  },
  {
    name: 'BORDIQ HUNT',
    tagline: 'Proactive Threat Hunting',
    desc: 'Don\'t wait for alerts — Hunt proactively searches your environment for adversary tradecraft using AI-powered behavioral analytics and MITRE ATT&CK mapping.',
    features: ['MITRE ATT&CK coverage', 'Behavioral analytics', 'Custom hunt queries', 'Campaign tracking'],
    color: '#F59E0B',
  },
  {
    name: 'BORDIQ GATE',
    tagline: 'Zero-Trust Access Gateway',
    desc: 'Enforce zero-trust principles across every access request. Gate continuously verifies identity, device health, and context before granting micro-segmented access.',
    features: ['Zero-trust enforcement', 'Continuous verification', 'Micro-segmentation', 'Privileged access mgmt'],
    color: '#EC4899',
  },
]

export default function Products() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>PRODUCT SUITE</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Six Layers of Defense</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            A complete, integrated platform designed to defend, detect, and dominate the modern threat landscape.
          </p>
        </div>
      </div>

      {/* Products list */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '48px' }}>
          {products.map((p, i) => (
            <div key={p.name} style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              gap: '48px', alignItems: 'center',
              backgroundColor: C.card, border: `1px solid ${C.border}`,
              padding: '48px',
            }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: p.color + '22', border: `1px solid ${p.color}44`,
                  padding: '4px 12px', marginBottom: '20px',
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '10px',
                  color: p.color, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                }}>MODULE {String(i + 1).padStart(2, '0')}</div>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 800, color: C.text, marginBottom: '8px', letterSpacing: '-0.02em' }}>{p.name}</h2>
                <p style={{ color: p.color, fontFamily: "'Space Grotesk',sans-serif", fontSize: '14px', fontWeight: 600, letterSpacing: '0.06em', marginBottom: '20px', textTransform: 'uppercase' as const }}>{p.tagline}</p>
                <p style={{ color: C.muted, fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>{p.desc}</p>
                <Link to="/contact" style={{
                  backgroundColor: p.color, color: '#fff',
                  padding: '10px 24px',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  textDecoration: 'none', display: 'inline-block',
                }}>REQUEST DEMO →</Link>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ backgroundColor: C.elevated, border: `1px solid ${C.border}`, padding: '32px' }}>
                  <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: C.dim, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '20px' }}>KEY CAPABILITIES</p>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '14px' }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '6px', height: '6px', backgroundColor: p.color, flexShrink: 0 }}></div>
                        <span style={{ color: C.text, fontSize: '14px' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
