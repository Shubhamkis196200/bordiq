import { useState } from 'react'
import { C } from '../colors'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', role: '', message: '', interest: 'demo' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ paddingTop: '72px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' as const, maxWidth: '480px', padding: '24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '24px' }}>✅</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 700, color: C.text, marginBottom: '16px' }}>Request Received</h2>
          <p style={{ color: C.muted, fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
            Our team will contact you within 24 hours to schedule your personalized BORDIQ demo.
          </p>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.1em' }}>BORDIQ SECURITY TEAM — WROCŁAW NODE</div>
        </div>
      </div>
    )
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: C.elevated,
    border: `1px solid ${C.border}`,
    color: C.text,
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: "'Inter',sans-serif",
    outline: 'none',
  }

  const labelStyle = {
    display: 'block' as const,
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: '10px', color: C.dim,
    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
    marginBottom: '8px',
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>CONTACT</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3.5rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Request a Demo</h1>
          <p style={{ color: C.muted, fontSize: '18px', lineHeight: '1.6' }}>
            See BORDIQ in action against real attack scenarios. Our security engineers will walk you through a live threat simulation tailored to your environment.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '64px' }}>
          {/* Left: contact info */}
          <div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '32px' }}>Get in Touch</h2>
            {[
              { label: 'HEADQUARTERS', value: 'Wrocław, Poland (EU)' },
              { label: 'PRESS INQUIRIES', value: 'press@bordiq.com' },
              { label: 'SECURITY RESEARCH', value: 'security@bordiq.com' },
              { label: 'SALES', value: 'sales@bordiq.com' },
              { label: 'INCIDENT RESPONSE', value: '+48 71 XXX XXXX' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '24px' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '10px', color: C.dim, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>{item.label}</div>
                <div style={{ color: C.text, fontSize: '15px' }}>{item.value}</div>
              </div>
            ))}

            <div style={{ marginTop: '48px', backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>RESPONSE TIME</span>
              </div>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '2rem', fontWeight: 800, color: C.text }}>{'< 24 hours'}</p>
              <p style={{ color: C.muted, fontSize: '13px', marginTop: '8px' }}>Guaranteed business day response for all demo requests.</p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' as const, gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input required type="text" placeholder="Jan Kowalski" value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Company *</label>
                <input required type="text" placeholder="Acme Corp" value={form.company} onChange={e => setForm({...form, company: e.target.value})} style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Work Email *</label>
              <input required type="email" placeholder="jan@acmecorp.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Job Title</label>
              <input type="text" placeholder="CISO / Security Engineer / CTO" value={form.role} onChange={e => setForm({...form, role: e.target.value})} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Primary Interest</label>
              <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})} style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="demo">Product Demo</option>
                <option value="sentinel">BORDIQ Sentinel</option>
                <option value="soc">BORDIQ SOC</option>
                <option value="comply">BORDIQ Comply</option>
                <option value="pricing">Pricing Information</option>
                <option value="partner">Partnership</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your environment, team size, and current security challenges..."
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                style={{ ...inputStyle, resize: 'vertical' as const }}
              />
            </div>
            <button type="submit" style={{
              backgroundColor: C.red, color: '#fff',
              padding: '14px 32px',
              border: 'none',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              cursor: 'pointer',
              alignSelf: 'flex-start' as const,
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.redHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.red)}
            >SUBMIT REQUEST →</button>
          </form>
        </div>
      </div>
    </div>
  )
}
