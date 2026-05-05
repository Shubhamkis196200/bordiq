import { Link } from 'react-router-dom'
import { C } from '../../colors'
import { seedFundingAnnouncement } from '../../content/newsroom'

const fundingSnapshot = [
  { label: 'Round', value: 'Seed' },
  { label: 'Investors', value: 'ODRA VENTURE, RED QUEEN FUND' },
  { label: 'Lead status', value: 'Crunchbase lists both investors as lead investors' },
  { label: 'Public amount', value: 'Not displayed on the public Crunchbase round page' },
]

const enablementAreas = [
  {
    title: 'AI-assisted threat analysis',
    body:
      'Expand detection tuning, alert triage, and investigation workflows so security teams can move from raw signal to action faster.',
  },
  {
    title: 'AWS-ready enterprise delivery',
    body:
      'Invest in cloud-native telemetry pipelines, deployment hardening, and smoother onboarding for customers operating in AWS-heavy environments.',
  },
  {
    title: 'Compliance and reporting',
    body:
      'Strengthen the workflows customers use to support NIS2, ISO 27001, and broader security governance requirements.',
  },
  {
    title: 'Customer support and rollout',
    body:
      'Give the team more capacity to support pilots, enterprise rollout planning, and deeper response playbooks for live environments.',
  },
]

const investors = [
  {
    name: 'RED QUEEN FUND',
    href: 'https://www.redqueenfund.com',
    logo: '/assets/redqueen-logo.png',
    description:
      'Warsaw-based venture fund supporting early-stage companies, including cybersecurity and other frontier sectors.',
  },
  {
    name: 'ODRA VENTURE',
    href: 'https://odraventure.com',
    logo: '/assets/odraventure-logo.png',
    description:
      'Platform supporting AI and automation startups across Europe through investment, acceleration, and operator support.',
  },
]

const referenceLinks = [
  {
    label: 'ODRA VENTURE newsroom',
    href: 'https://odraventure.com/newsroom/bordiq-funding-update',
    note: 'Matching portfolio announcement and ecosystem context',
  },
  {
    label: 'Crunchbase round profile',
    href: 'https://www.crunchbase.com/funding_round/bordiq-seed--a276234e',
    note: 'Public seed round record for Bordiq',
  },
  {
    label: 'Bordiq on Crunchbase',
    href: 'https://www.crunchbase.com/organization/bordiq',
    note: 'Company profile and investor listing',
  },
]

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: '1.45rem',
        fontWeight: 700,
        color: C.text,
        marginTop: '40px',
        marginBottom: '18px',
      }}
    >
      {children}
    </h2>
  )
}

export default function SeedFundingAnnouncement() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 24px 96px' }}>
        <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '28px',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '11px',
              color: C.dim,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/newsroom"
              style={{ color: C.dim, textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.dim)}
            >
              Newsroom
            </Link>
            <span>/</span>
            <span style={{ color: C.muted }}>Funding update</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                backgroundColor: C.red,
                color: '#fff',
                padding: '4px 12px',
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {seedFundingAnnouncement.category}
            </span>
            <span
              style={{
                color: C.dim,
                fontSize: '12px',
                fontFamily: "'JetBrains Mono',monospace",
                letterSpacing: '0.06em',
              }}
            >
              {seedFundingAnnouncement.date}
            </span>
            <span
              style={{
                color: C.dim,
                fontSize: '12px',
                fontFamily: "'JetBrains Mono',monospace",
                letterSpacing: '0.06em',
              }}
            >
              {seedFundingAnnouncement.readTime}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: 'clamp(2.3rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: C.text,
              marginBottom: '24px',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {seedFundingAnnouncement.title}
          </h1>

          <p
            style={{
              color: C.muted,
              fontSize: '18px',
              lineHeight: '1.75',
              maxWidth: '760px',
            }}
          >
            Bordiq is announcing its seed round with ODRA VENTURE and RED QUEEN FUND as the
            company expands its AI-assisted cybersecurity platform for modern enterprise teams.
            The new capital supports the next phase of product delivery, customer onboarding,
            cloud deployment, and security operations enablement.
          </p>
        </div>

        <div className="newsroom-layout">
          <article
            style={{
              backgroundColor: C.card,
              border: `1px solid ${C.border}`,
              padding: '40px',
            }}
          >
            <p
              style={{
                margin: 0,
                marginBottom: '22px',
                color: C.muted,
                fontSize: '16px',
                lineHeight: '1.9',
              }}
            >
              Bordiq is built for security teams that need faster detection, sharper context, and
              more practical response workflows across endpoint, network, and external attack
              surfaces. This round gives the company more room to invest in the parts of the
              platform that matter most in live customer environments: reliability, clarity, and
              operational speed.
            </p>

            <p
              style={{
                margin: 0,
                marginBottom: '22px',
                color: C.muted,
                fontSize: '16px',
                lineHeight: '1.9',
              }}
            >
              The public Crunchbase round profile confirms the seed round, shows two investors,
              and lists both ODRA VENTURE and RED QUEEN FUND as lead investors. Because the
              public listing does not display the money raised, this announcement focuses on the
              round structure and what the funding unlocks for customers and partners.
            </p>

            <SectionHeading>What this funding supports</SectionHeading>
            <div className="newsroom-story-grid">
              {enablementAreas.map((area) => (
                <div
                  key={area.title}
                  style={{
                    backgroundColor: C.elevated,
                    border: `1px solid ${C.border}`,
                    padding: '22px',
                  }}
                >
                  <div
                    style={{
                      color: C.text,
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: '16px',
                      fontWeight: 700,
                      marginBottom: '10px',
                    }}
                  >
                    {area.title}
                  </div>
                  <p style={{ margin: 0, color: C.muted, fontSize: '14px', lineHeight: '1.7' }}>
                    {area.body}
                  </p>
                </div>
              ))}
            </div>

            <SectionHeading>Why it matters for customers</SectionHeading>
            <p
              style={{
                margin: 0,
                marginBottom: '22px',
                color: C.muted,
                fontSize: '16px',
                lineHeight: '1.9',
              }}
            >
              Security teams are being asked to do more with faster attack cycles, broader cloud
              footprints, and tougher reporting requirements. For Bordiq, this round is less about
              loud fundraising language and more about building a stronger operating layer for the
              people who have to detect, investigate, and contain risk every day.
            </p>
            <p
              style={{
                margin: 0,
                marginBottom: '22px',
                color: C.muted,
                fontSize: '16px',
                lineHeight: '1.9',
              }}
            >
              The next phase is especially relevant for customers deploying in AWS-heavy
              environments. More product capacity means better telemetry coverage, stronger
              workflow automation, and smoother paths from pilot to production without adding
              unnecessary operational drag.
            </p>

            <SectionHeading>Related coverage</SectionHeading>
            <div style={{ display: 'grid', gap: '16px' }}>
              {referenceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: C.elevated,
                    border: `1px solid ${C.border}`,
                    padding: '18px 20px',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: C.text,
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontSize: '15px',
                        fontWeight: 700,
                        marginBottom: '6px',
                      }}
                    >
                      {link.label}
                    </div>
                    <div style={{ color: C.muted, fontSize: '13px', lineHeight: '1.6' }}>
                      {link.note}
                    </div>
                  </div>
                  <span
                    style={{
                      color: C.red,
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Open link
                  </span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '32px', color: C.muted, fontSize: '15px', lineHeight: '1.8' }}>
              If you are evaluating Bordiq for enterprise detection, response, or compliance
              workflows,{' '}
              <Link to="/contact" style={{ color: C.red, textDecoration: 'none' }}>
                contact the team
              </Link>{' '}
              to discuss pilots, partnerships, or rollout planning.
            </div>
          </article>

          <aside style={{ display: 'grid', gap: '24px', alignSelf: 'start' }}>
            <div
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                padding: '28px',
              }}
            >
              <div
                style={{
                  color: C.red,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                Funding snapshot
              </div>
              <div style={{ display: 'grid', gap: '14px' }}>
                {fundingSnapshot.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      borderTop: `1px solid ${C.border}`,
                      paddingTop: '14px',
                    }}
                  >
                    <div
                      style={{
                        color: C.dim,
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ color: C.text, fontSize: '14px', lineHeight: '1.7' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: C.card,
                border: `1px solid ${C.border}`,
                padding: '28px',
              }}
            >
              <div
                style={{
                  color: C.red,
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '18px',
                }}
              >
                Investors
              </div>
              <div className="newsroom-investor-grid">
                {investors.map((investor) => (
                  <a
                    key={investor.name}
                    href={investor.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: C.elevated,
                      border: `1px solid ${C.border}`,
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        width: '100%',
                        minHeight: '86px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '18px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        style={{ maxHeight: '44px', maxWidth: '150px', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk',sans-serif",
                          fontSize: '14px',
                          fontWeight: 700,
                          color: C.text,
                          marginBottom: '6px',
                        }}
                      >
                        {investor.name}
                      </div>
                      <div style={{ color: C.muted, fontSize: '12px', lineHeight: '1.6' }}>
                        {investor.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: `1px solid ${C.border}` }}>
          <Link
            to="/newsroom"
            style={{
              color: C.muted,
              textDecoration: 'none',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
          >
            Back to newsroom
          </Link>
        </div>
      </div>
    </div>
  )
}
