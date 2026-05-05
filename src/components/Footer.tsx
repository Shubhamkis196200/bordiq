import { Link } from 'react-router-dom'
import { C } from '../colors'

type FooterItem = {
  label: string
  to?: string
  href?: string
}

const footerColumns: { title: string; links: FooterItem[] }[] = [
  {
    title: 'PRODUCTS',
    links: [
      { label: 'Sentinel', to: '/products' },
      { label: 'Intel', to: '/products' },
      { label: 'SOC', to: '/products' },
      { label: 'Comply', to: '/products' },
      { label: 'Hunt', to: '/products' },
      { label: 'Gate', to: '/products' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Newsroom', to: '/newsroom' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact', to: '/contact' },
      { label: 'Legal', to: '/legal' },
    ],
  },
  {
    title: 'CONTACT',
    links: [
      { label: 'Wroclaw, Poland' },
      { label: 'press@bordiq.com', href: 'mailto:press@bordiq.com' },
      { label: 'security@bordiq.com', href: 'mailto:security@bordiq.com' },
    ],
  },
]

function FooterLink({ item }: { item: FooterItem }) {
  const style = {
    color: C.muted,
    fontSize: '14px',
    textDecoration: 'none',
    transition: 'color 0.2s',
  }

  if (item.to) {
    return (
      <Link
        to={item.to}
        style={style}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
        onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
      >
        {item.label}
      </Link>
    )
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        style={style}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
        onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
      >
        {item.label}
      </a>
    )
  }

  return <span style={style}>{item.label}</span>
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: C.bg,
        borderTop: `1px solid ${C.border}`,
        paddingTop: '64px',
        paddingBottom: '40px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path
                  d="M16 3L28 8V17C28 23 23 28 16 31C9 28 4 23 4 17V8L16 3Z"
                  fill={C.red}
                  fillOpacity="0.15"
                  stroke={C.red}
                  strokeWidth="1.5"
                />
                <path d="M18 8L11 18H15.5L13 26L22 15H17L19 8Z" fill={C.red} />
              </svg>
              <span
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: '18px',
                  color: C.text,
                }}
              >
                BORDIQ
              </span>
            </div>
            <p style={{ color: C.muted, fontSize: '14px', lineHeight: '1.6', maxWidth: '280px', marginBottom: '24px' }}>
              AI-native enterprise threat defense. Defending the digital frontier with
              military-grade precision from our headquarters in Wroclaw, Poland.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#22c55e',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: C.muted,
                  textTransform: 'uppercase',
                }}
              >
                System status: nominal
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: C.text,
                  marginBottom: '20px',
                }}
              >
                {column.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {column.links.map((item) => (
                  <FooterLink key={item.label} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '11px',
              color: C.dim,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            (C) {new Date().getFullYear()} BORDIQ SP. Z O.O. WROCLAW, POLAND. ALL RIGHTS
            RESERVED.
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '10px',
              color: C.dim,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            A CARAT &amp; CO SPOLKA Z O.O. COMPANY
          </p>
        </div>
      </div>
    </footer>
  )
}
