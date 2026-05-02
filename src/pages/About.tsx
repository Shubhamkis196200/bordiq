import { C } from '../colors'

const team = [
  { name: 'ALEKSANDER DĄBROWSKI', title: 'CEO & Co-Founder', bio: 'Former CERT.PL analyst. 12 years in threat intelligence and incident response for critical infrastructure.' },
  { name: 'NATALIA KOWALCZYK', title: 'CTO & Co-Founder', bio: 'Ex-Google Security lead. Specialized in ML-based anomaly detection at scale. PhD in Computer Science, Wrocław University of Technology.' },
  { name: 'MICHAŁ WIŚNIEWSKI', title: 'Head of Threat Research', bio: 'Previously at FireEye and Recorded Future. Expert in APT attribution and nation-state threat actor tradecraft.' },
  { name: 'KATARZYNA ZIELIŃSKA', title: 'Chief Compliance Officer', bio: 'GDPR architect and ISO 27001 lead auditor. Built compliance programs for three Fortune 500 companies.' },
]

export default function About() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>ABOUT BORDIQ</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Born in Poland.<br/>Built for the World.</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            BORDIQ was founded in Wrocław, Poland in 2024 by cybersecurity veterans who saw a broken market: reactive, slow, and compliance-theater masquerading as real defense.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '80px' }}>
          <div>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>OUR MISSION</p>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2.5rem', fontWeight: 700, color: C.text, marginBottom: '24px', lineHeight: 1.1 }}>Eliminate the 14-Hour Gap</h2>
            <p style={{ color: C.muted, fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
              The average enterprise takes 14 hours to detect a breach. In that time, attackers move laterally, escalate privileges, and exfiltrate data. We built BORDIQ to close this gap permanently.
            </p>
            <p style={{ color: C.muted, fontSize: '16px', lineHeight: '1.8' }}>
              Our platform reduces mean time to detect to under 636 milliseconds — not through faster humans, but through AI that never sleeps, never gets distracted, and never misses a pattern.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>
            {[
              { label: 'Founded', value: '2024, Wrocław, Poland' },
              { label: 'Stage', value: 'Seed-funded ($125K)' },
              { label: 'Investors', value: 'RedQueen Fund & Odra Venture' },
              { label: 'Compliance', value: 'ISO 27001, GDPR, NIS2' },
              { label: 'HQ', value: 'Wrocław, Poland (EU)' },
              { label: 'Entity', value: 'BORDIQ SP. Z O.O. (Carat & Co)' },
            ].map(r => (
              <div key={r.label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '16px', backgroundColor: C.card, border: `1px solid ${C.border}`,
              }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.dim, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{r.label}</span>
                <span style={{ color: C.text, fontSize: '14px', fontWeight: 500 }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: '80px' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>LEADERSHIP</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text, marginBottom: '40px' }}>The Team</h2>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {team.map(t => (
              <div key={t.name} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '32px' }}>
                <div style={{
                  width: '56px', height: '56px',
                  backgroundColor: 'rgba(229,62,62,0.12)', border: `1px solid ${C.red}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: '14px', fontWeight: 800, color: C.red,
                  marginBottom: '20px', letterSpacing: '0.05em',
                }}>{t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '16px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{t.name}</h3>
                <p style={{ color: C.red, fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, marginBottom: '16px', fontFamily: "'Space Grotesk',sans-serif" }}>{t.title}</p>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6' }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>PRINCIPLES</p>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text, marginBottom: '40px' }}>How We Operate</h2>
          <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'OFFENSE INFORMS DEFENSE', desc: 'Our threat researchers think like attackers. Every product feature is stress-tested against real adversary techniques before it ships.' },
              { title: 'SPEED IS SURVIVAL', desc: 'In security, milliseconds matter. We obsess over response latency because every second of dwell time increases breach cost by €4,200.' },
              { title: 'EUROPEAN SOVEREIGNTY', desc: 'Data stays in the EU. Always. We\'re built on European infrastructure for European compliance — GDPR isn\'t an afterthought, it\'s architecture.' },
            ].map(v => (
              <div key={v.title} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '32px 28px' }}>
                <div style={{ width: '32px', height: '2px', backgroundColor: C.red, marginBottom: '20px' }}></div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', color: C.text, marginBottom: '12px', textTransform: 'uppercase' as const }}>{v.title}</h3>
                <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
