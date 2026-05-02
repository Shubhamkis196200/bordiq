import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C } from '../App'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  const links = [
    { to: '/products', label: 'PRODUCTS' },
    { to: '/pricing', label: 'PRICING' },
    { to: '/about', label: 'ABOUT' },
    { to: '/blog', label: 'BLOG' },
    { to: '/careers', label: 'CAREERS' },
    { to: '/contact', label: 'CONTACT' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(10,10,15,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
        height: '72px',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M16 3L28 8V17C28 23 23 28 16 31C9 28 4 23 4 17V8L16 3Z" fill={C.red} fillOpacity="0.15" stroke={C.red} strokeWidth="1.5"/>
              <path d="M18 8L11 18H15.5L13 26L22 15H17L19 8Z" fill={C.red}/>
            </svg>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em', color: C.text }}>BORDIQ</span>
          </Link>

          {/* Desktop nav */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '12px', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                color: loc.pathname === l.to ? C.red : C.muted,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = C.text)}
              onMouseLeave={e => (e.currentTarget.style.color = loc.pathname === l.to ? C.red : C.muted)}
              >{l.label}</Link>
            ))}
            <Link to="/contact" style={{
              backgroundColor: C.red, color: '#fff',
              padding: '8px 20px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.redHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.red)}
            >REQUEST DEMO</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: C.text, padding: '8px', cursor: 'pointer' }}
            className="show-mobile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: C.bg, zIndex: 49,
          display: 'flex', flexDirection: 'column',
          padding: '100px 24px 24px', gap: '24px',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '20px', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                color: loc.pathname === l.to ? C.red : C.text,
                textDecoration: 'none',
              }}
            >{l.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} style={{
            backgroundColor: C.red, color: '#fff',
            padding: '12px 24px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            textDecoration: 'none', textAlign: 'center' as const,
            marginTop: '8px',
          }}>REQUEST DEMO</Link>
        </div>
      )}
    </>
  )
}
