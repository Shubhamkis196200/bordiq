import { C } from '../App'

export default function Legal() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ padding: '80px 24px 60px', textAlign: 'center' as const, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.red, letterSpacing: '0.15em', textTransform: 'uppercase' as const, marginBottom: '16px' }}>LEGAL</p>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '3rem', fontWeight: 800, color: C.text, marginBottom: '20px', letterSpacing: '-0.02em' }}>Legal Information</h1>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        {[
          {
            title: 'Company Information',
            content: [
              'BORDIQ SP. Z O.O.',
              'A Carat & Co Spółka Z O.O. Company',
              'Registered in Poland (EU)',
              'Headquarters: Wrocław, Poland',
              'KRS: [Registration pending]',
              'NIP: [Registration pending]',
            ],
          },
          {
            title: 'Privacy Policy',
            content: [
              'BORDIQ is committed to protecting your personal data in accordance with GDPR.',
              'We collect only data necessary to provide our services.',
              'Your data is processed on EU-based infrastructure and never transferred outside the European Economic Area without adequate safeguards.',
              'For data subject requests, contact: privacy@bordiq.com',
              'Data Protection Officer: dpo@bordiq.com',
            ],
          },
          {
            title: 'Terms of Service',
            content: [
              'Use of BORDIQ services is governed by our Master Service Agreement (MSA).',
              'By accessing our platform, you agree to use it only for lawful purposes.',
              'BORDIQ services are for enterprise customers only.',
              'Unauthorized access to BORDIQ systems is prohibited and will be prosecuted.',
              'For full terms, contact legal@bordiq.com',
            ],
          },
          {
            title: 'Responsible Disclosure',
            content: [
              'If you discover a security vulnerability in BORDIQ products or infrastructure, please report it responsibly.',
              'Email: security@bordiq.com',
              'PGP key available on our security page.',
              'We commit to acknowledging reports within 24 hours and resolving critical issues within 72 hours.',
              'We do not pursue legal action against researchers who comply with our disclosure policy.',
            ],
          },
          {
            title: 'Cookie Policy',
            content: [
              'This website uses essential cookies only.',
              'We do not use tracking cookies or third-party analytics without consent.',
              'Essential cookies are required for basic website functionality.',
              'You may disable cookies in your browser settings, though this may affect functionality.',
            ],
          },
        ].map(section => (
          <div key={section.title} style={{ marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.5rem', fontWeight: 700, color: C.text, marginBottom: '24px', paddingBottom: '12px', borderBottom: `1px solid ${C.border}` }}>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {section.content.map((line, i) => (
                <p key={i} style={{ color: C.muted, fontSize: '15px', lineHeight: '1.7' }}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '24px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: C.dim, letterSpacing: '0.06em' }}>
          © {new Date().getFullYear()} BORDIQ SP. Z O.O. All rights reserved. Last updated: March 2026.
        </div>
      </div>
    </div>
  )
}
